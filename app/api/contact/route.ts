import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase environment variables are missing."
  );
}

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      postcode,
      enquiryType,
      message,
      website,
    } = body;

    // Honeypot protection
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    // Required field validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !enquiryType?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Save enquiry in Supabase
    const { error } = await supabase
      .from("contact_enquiries")
      .insert({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        postcode: postcode?.trim() || null,
        enquiry_type: enquiryType.trim(),
        message: message.trim(),
        status: "new",
      });

    if (error) {
      console.error(
        "Contact enquiry insert error:",
        error
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

    return NextResponse.json({
      success: true,
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
          "We could not send your enquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}