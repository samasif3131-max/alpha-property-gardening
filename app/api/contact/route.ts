import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase environment variables are missing.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const ADMIN_USER_ID =
  "509537a1-fdc1-492e-a174-f9aaaa031ccb";

const ALLOWED_ENQUIRY_TYPES = [
  "General Enquiry",
  "New Work / Service Enquiry",
  "Existing Quote",
  "Existing Job / Appointment",
  "Invoice / Payment Query",
  "Landlord / Letting Agent Enquiry",
  "Other",
];

const REFERENCE_TYPES = [
  "Existing Quote",
  "Existing Job / Appointment",
  "Invoice / Payment Query",
];

function normalize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function generateEnquiryReference(): string {
  const randomPart = Math.floor(
    1000 + Math.random() * 9000
  );

  return `ENQ-${randomPart}`;
}

/**
 * Generate an enquiry reference.
 *
 * We do not query contact_enquiries here because the public
 * contact API should not need SELECT access to CRM enquiries.
 *
 * The unique database index on reference_number provides
 * additional protection against duplicate references.
 */
function generateEnquiryReferenceSafe(): string {
  return generateEnquiryReference();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = normalize(body.name);
    const email = normalize(body.email).toLowerCase();
    const phone = normalize(body.phone);
    const postcode = normalize(body.postcode);
    const enquiryType = normalize(body.enquiryType);
    const message = normalize(body.message);
    const website = normalize(body.website);
    const existingReference = normalize(body.referenceNumber);

    // ---------------------------------------------------------
    // 1. Honeypot protection
    // ---------------------------------------------------------

    // This field is hidden from normal users.
    // If a bot fills it, return success without creating a CRM record.
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    // ---------------------------------------------------------
    // 2. Required field validation
    // ---------------------------------------------------------

    if (
      !name ||
      !email ||
      !phone ||
      !enquiryType ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------
    // 3. Enquiry type validation
    // ---------------------------------------------------------

    if (!ALLOWED_ENQUIRY_TYPES.includes(enquiryType)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please select a valid enquiry type.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------
    // 4. Reference validation
    // ---------------------------------------------------------

    if (REFERENCE_TYPES.includes(enquiryType)) {
      if (!existingReference) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Please enter your reference number if known.",
          },
          { status: 400 }
        );
      }

      const referencePattern =
        /^(QUO|JOB|INV)-[A-Za-z0-9-]+$/i;

      if (!referencePattern.test(existingReference)) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Please enter a valid reference number, for example QUO-123, JOB-123 or INV-123.",
          },
          { status: 400 }
        );
      }
    }

    // ---------------------------------------------------------
    // 5. Email validation
    // ---------------------------------------------------------

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------
    // 6. Find existing customer by email
    // ---------------------------------------------------------

    let customerId: string | null = null;

    const {
      data: customerByEmail,
      error: emailMatchError,
    } = await supabase
      .from("profiles")
      .select("id")
      .eq("email", email)
      .eq("role", "client")
      .limit(1)
      .maybeSingle();

    if (emailMatchError) {
      console.error(
        "Customer email lookup error:",
        emailMatchError
      );
    }

    if (customerByEmail) {
      customerId = customerByEmail.id;
    }

    // ---------------------------------------------------------
    // 7. If email did not match, find customer by phone
    // ---------------------------------------------------------

    if (!customerId) {
      const {
        data: customerByPhone,
        error: phoneMatchError,
      } = await supabase
        .from("profiles")
        .select("id")
        .eq("phone", phone)
        .eq("role", "client")
        .limit(1)
        .maybeSingle();

      if (phoneMatchError) {
        console.error(
          "Customer phone lookup error:",
          phoneMatchError
        );
      }

      if (customerByPhone) {
        customerId = customerByPhone.id;
      }
    }

    // ---------------------------------------------------------
    // 8. Create lead if no existing customer was found
    // ---------------------------------------------------------

    if (!customerId) {
      const { error: leadError } = await supabase
        .from("leads")
        .insert({
          name,
          email,
          phone,
          postcode: postcode || null,
          source: "Contact Form",
          status: "new",
        });

      if (leadError) {
        console.error(
          "Lead creation error:",
          leadError
        );

        return NextResponse.json(
          {
            success: false,
            error:
              "We could not process your enquiry right now. Please try again.",
          },
          { status: 500 }
        );
      }
    }

    // ---------------------------------------------------------
    // 9. Match existing QUO / JOB / INV reference
    // ---------------------------------------------------------

    let quoteId: number | null = null;
    let jobId: number | null = null;
    let invoiceId: number | null = null;

    if (existingReference) {
      const upperReference =
        existingReference.toUpperCase();

      // -------------------------------------------------------
      // QUO-123 -> quotes.id = 123
      // -------------------------------------------------------

      if (upperReference.startsWith("QUO-")) {
        const idPart =
          upperReference.replace("QUO-", "");

        const parsedId = Number(idPart);

        if (
          Number.isInteger(parsedId) &&
          parsedId > 0
        ) {
          const { data: quote, error: quoteError } =
            await supabase
              .from("quotes")
              .select("id")
              .eq("id", parsedId)
              .limit(1)
              .maybeSingle();

          if (quoteError) {
            console.error(
              "Quote lookup error:",
              quoteError
            );
          }

          if (quote) {
            quoteId = quote.id;
          }
        }
      }

      // -------------------------------------------------------
      // JOB-123 -> jobs.id = 123
      // -------------------------------------------------------

      if (upperReference.startsWith("JOB-")) {
        const idPart =
          upperReference.replace("JOB-", "");

        const parsedId = Number(idPart);

        if (
          Number.isInteger(parsedId) &&
          parsedId > 0
        ) {
          const { data: job, error: jobError } =
            await supabase
              .from("jobs")
              .select("id")
              .eq("id", parsedId)
              .limit(1)
              .maybeSingle();

          if (jobError) {
            console.error(
              "Job lookup error:",
              jobError
            );
          }

          if (job) {
            jobId = job.id;
          }
        }
      }

      // -------------------------------------------------------
      // INV-xxxxx -> invoices.invoice_number
      // -------------------------------------------------------

      if (upperReference.startsWith("INV-")) {
        const invoiceNumber =
          existingReference.substring(4).trim();

        if (invoiceNumber) {
          const {
            data: invoice,
            error: invoiceError,
          } = await supabase
            .from("invoices")
            .select("id")
            .eq("invoice_number", invoiceNumber)
            .limit(1)
            .maybeSingle();

          if (invoiceError) {
            console.error(
              "Invoice lookup error:",
              invoiceError
            );
          }

          if (invoice) {
            invoiceId = invoice.id;
          }
        }
      }
    }

    // ---------------------------------------------------------
    // 10. Generate ENQ reference
    // ---------------------------------------------------------

    const enquiryReference =
      generateEnquiryReferenceSafe();

    // ---------------------------------------------------------
    // 11. Create CRM enquiry
    // ---------------------------------------------------------

    /**
     * IMPORTANT:
     *
     * Do NOT use .select() or .single() here.
     *
     * The public contact form has INSERT access but does not
     * need SELECT access to CRM records.
     */
    const { error: enquiryError } = await supabase
      .from("contact_enquiries")
      .insert({
        reference_number: enquiryReference,
        source: "Contact Form",
        name,
        email,
        phone,
        postcode: postcode || null,
        enquiry_type: enquiryType,
        existing_reference:
          existingReference || null,
        message,
        customer_id: customerId,
        quote_id: quoteId,
        job_id: jobId,
        invoice_id: invoiceId,
        status: "new",
      });

    if (enquiryError) {
      console.error(
        "CRM enquiry creation error:",
        enquiryError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "We could not send your enquiry right now. Please try again.",
        },
        { status: 500 }
      );
    }

    // ---------------------------------------------------------
    // 12. Notify Alpha Admin
    // ---------------------------------------------------------

    const notificationMessage =
      `${enquiryReference} received from ${name}. ` +
      `Type: ${enquiryType}. ` +
      `Email: ${email}. ` +
      `Phone: ${phone}.`;

    const {
      error: notificationError,
    } = await supabase
      .from("notifications")
      .insert({
        user_id: ADMIN_USER_ID,
        title: `New Enquiry ${enquiryReference}`,
        message: notificationMessage,
        type: "enquiry",
      });

    /**
     * Notification failure must NOT make the enquiry fail.
     *
     * The enquiry has already been stored successfully.
     */
    if (notificationError) {
      console.error(
        "Alpha notification error:",
        notificationError
      );
    }

    // ---------------------------------------------------------
    // 13. Successful response
    // ---------------------------------------------------------

    return NextResponse.json({
      success: true,
      reference: enquiryReference,
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "We could not process your enquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}