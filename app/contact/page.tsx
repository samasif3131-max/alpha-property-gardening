"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

const areas = [
  "Peterborough",
  "Spalding",
  "Long Sutton",
  "Lincoln",
  "Skegness",
  "Boston",
  "Holbeach",
  "Sleaford",
  "Donington",
  "Pinchbeck",
  "Surfleet",
  "Crowland",
  "Whaplode",
  "Sutton Bridge",
  "Gedney",
  "Moulton",
  "Kirton",
  "Frampton",
  "Swineshead",
];

const serviceLinks = [
  {
    title: "Property Maintenance",
    description:
      "Repairs, ongoing maintenance and multiple-job visits.",
    href: "/services/property-maintenance",
  },
  {
    title: "Property Renovations",
    description:
      "Individual rooms through to complete property transformations.",
    href: "/services/property-renovations",
  },
  {
    title: "Plumbing",
    description:
      "Repairs, installations and 24/7 emergency plumbing support.",
    href: "/services/plumbing",
  },
  {
    title: "Bathrooms",
    description:
      "Installation, fitting and complete renovations.",
    href: "/services/bathrooms",
  },
  {
    title: "Kitchens",
    description:
      "Installation and complete kitchen renovations.",
    href: "/services/kitchens",
  },
  {
    title: "Garden Services",
    description:
      "Regular maintenance and garden clearances.",
    href: "/services/garden-services",
  },
];

const faqs = [
  {
    question: "What is Alpha’s phone number?",
    answer: "Call Alpha on 01775 518068.",
  },
  {
    question: "What is Alpha’s email address?",
    answer:
      "Email info@alphapropertyandgardening.co.uk.",
  },
  {
    question: "Do you provide emergency call-outs?",
    answer:
      "Yes. Alpha provides 24/7 emergency property and plumbing call-out support for suitable urgent problems.",
  },
  {
    question: "Should I use the contact form for an emergency?",
    answer:
      "No. For an active urgent property or plumbing problem, call 01775 518068 directly.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use our dedicated online quote request process and provide details of the property and work required.",
  },
  {
    question: "Can I send photographs?",
    answer:
      "Photographs can help us understand the work required. They can be included through the appropriate online process where upload is available or sent through an agreed contact method.",
  },
  {
    question: "Do you work with landlords and letting agents?",
    answer:
      "Yes. Alpha supports landlords, letting agents and property managers with repairs, recurring maintenance, void-property work and renovations.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Our main regional service area extends from Peterborough to Skegness and from Long Sutton to Lincoln, including many surrounding towns and villages.",
  },
];

const enquiryTypes = [
  "General Enquiry",
  "New Work / Service Enquiry",
  "Existing Quote",
  "Existing Job / Appointment",
  "Invoice / Payment Query",
  "Landlord / Letting Agent Enquiry",
  "Other",
];

const referenceTypes = [
  "Existing Quote",
  "Existing Job / Appointment",
  "Invoice / Payment Query",
];

export default function ContactPage() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [selectedEnquiryType, setSelectedEnquiryType] =
    useState("");

  const [submittedReference, setSubmittedReference] =
    useState("");

  useEffect(() => {
    document.title =
      "Contact Alpha Property & Gardening Services";
  }, []);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    // Prevent duplicate submissions
    if (formState === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    /*
     * Honeypot spam protection.
     * Genuine users never see or complete this field.
     */
    const honeypot = String(
      data.get("website") ?? ""
    ).trim();

    if (honeypot) {
      setSubmittedReference("");
      setFormState("success");
      form.reset();
      setSelectedEnquiryType("");
      return;
    }

    const name = String(
      data.get("name") ?? ""
    ).trim();

    const email = String(
      data.get("email") ?? ""
    ).trim();

    const phone = String(
      data.get("phone") ?? ""
    ).trim();

    const postcode = String(
      data.get("postcode") ?? ""
    ).trim();

    const enquiryType = String(
      data.get("enquiryType") ?? ""
    ).trim();

    const referenceNumber = String(
      data.get("referenceNumber") ?? ""
    ).trim();

    const message = String(
      data.get("message") ?? ""
    ).trim();

    // Required field validation
    if (
      !name ||
      !email ||
      !phone ||
      !enquiryType ||
      !message
    ) {
      setFormState("error");
      return;
    }

    // Validate enquiry type
    if (!enquiryTypes.includes(enquiryType)) {
      setFormState("error");
      return;
    }

    // Reference number is optional, but only applies
    // to the three relevant enquiry types.
    if (
      referenceNumber &&
      !referenceTypes.includes(enquiryType)
    ) {
      setFormState("error");
      return;
    }

    // Validate reference format if supplied
    if (referenceNumber) {
      const referencePattern =
        /^(QUO|JOB|INV)-[A-Za-z0-9-]+$/i;

      if (!referencePattern.test(referenceNumber)) {
        setFormState("error");
        return;
      }
    }

    // Email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setFormState("error");
      return;
    }

    try {
      setFormState("submitting");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          postcode,
          enquiryType,
          referenceNumber,
          message,
          website: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to send enquiry."
        );
      }

      // Save the actual CRM enquiry reference
      setSubmittedReference(
        result.reference || ""
      );

      // Only reset after successful API response
      setFormState("success");
      form.reset();
      setSelectedEnquiryType("");
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      /*
       * Do NOT reset the form here.
       * User-entered information remains available
       * if the submission fails.
       */
      setFormState("error");
    }
  }

  const showReferenceField =
    referenceTypes.includes(selectedEnquiryType);

  const showQuotePrompt =
    selectedEnquiryType ===
    "New Work / Service Enquiry";

  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                CONTACT ALPHA
              </p>

              <h1>Contact Alpha</h1>

              <p className={styles.heroLead}>
                Need property maintenance, repairs, renovation
                work or help with your garden?
              </p>

              <p className={styles.heroText}>
                Tell us what you need and we’ll point you towards
                the right next step. For planned work, request a
                quotation online. For an urgent property or
                plumbing problem, call us directly.
              </p>

              <div className={styles.heroButtons}>
                <Link
                  href="/request-a-quote"
                  className={styles.primaryButton}
                >
                  REQUEST A QUOTE
                </Link>

                <a
                  href="tel:01775518068"
                  className={styles.secondaryButton}
                >
                  CALL 01775 518068
                </a>
              </div>

              <p className={styles.tagline}>
                One Team. Complete Property Care.
              </p>
            </div>

            <div className={styles.heroImageWrap}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Well-maintained property and garden"
              />

              <div className={styles.imageBadge}>
                <strong>ALPHA</strong>

                <span>
                  Property &amp; Gardening Services
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EMERGENCY
        ====================================================== */}

        <section
          className={styles.emergencySection}
          aria-labelledby="emergency-title"
        >
          <div className={styles.emergencyCopy}>
            <p className={styles.sectionEyebrow}>
              24/7 EMERGENCY SUPPORT
            </p>

            <h2 id="emergency-title">
              Need Urgent Help?
            </h2>

            <p>
              If water is escaping, a plumbing fault is causing
              active damage or another urgent property issue
              requires immediate assessment, calling us is
              quicker than completing the online enquiry form.
            </p>
          </div>

          <div className={styles.emergencyAction}>
            <span>
              24/7 Emergency Property &amp; Plumbing Call-Outs
            </span>

            <a href="tel:01775518068">
              01775 518068
            </a>

            <a
              href="tel:01775518068"
              className={styles.emergencyButton}
            >
              CALL NOW
            </a>
          </div>
        </section>

        {/* =====================================================
            CONTACT OPTIONS
        ====================================================== */}

        <section
          className={styles.optionsSection}
          aria-labelledby="contact-options-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>
              CONTACT OPTIONS
            </p>

            <h2 id="contact-options-title">
              Choose How You’d Like to Contact Us
            </h2>
          </div>

          <div className={styles.optionsGrid}>
            <a
              href="tel:01775518068"
              className={styles.optionCard}
            >
              <span className={styles.optionIcon}>
                ☎
              </span>

              <h3>Phone</h3>

              <strong>01775 518068</strong>

              <p>
                Best for emergency call-outs, urgent plumbing
                problems, quick initial enquiries and discussing
                an existing job.
              </p>
            </a>

            <a
              href="mailto:info@alphapropertyandgardening.co.uk"
              className={styles.optionCard}
            >
              <span className={styles.optionIcon}>
                ✉
              </span>

              <h3>Email</h3>

              <strong>
                info@alphapropertyandgardening.co.uk
              </strong>

              <p>
                Best for general enquiries, sending information
                or documents, non-urgent questions, landlords
                and business enquiries.
              </p>
            </a>

            <Link
              href="/request-a-quote"
              className={styles.optionCard}
            >
              <span className={styles.optionIcon}>
                ✓
              </span>

              <h3>Request a Quote</h3>

              <strong>
                START A QUOTE REQUEST →
              </strong>

              <p>
                Use the dedicated quotation journey for planned
                work and projects that need a price.
              </p>
            </Link>
          </div>
        </section>

        {/* =====================================================
            GENERAL ENQUIRY FORM
        ====================================================== */}

        <section
          className={styles.formSection}
          id="message"
          aria-labelledby="message-title"
        >
          <div className={styles.formIntroColumn}>
            <p className={styles.sectionEyebrow}>
              GENERAL ENQUIRIES
            </p>

            <h2 id="message-title">
              Send Alpha a Message
            </h2>

            <p>
              Use this short form for general enquiries,
              existing jobs, landlord enquiries and other
              non-urgent questions. For planned work where you
              need a price, use the dedicated quote process
              instead.
            </p>

            <div className={styles.warningBox}>
              <strong>Is this urgent?</strong>

              <p>
                Do not use this form for an active plumbing or
                property emergency.
              </p>

              <a href="tel:01775518068">
                Call 01775 518068
              </a>{" "}
              for 24/7 emergency support.
            </div>
          </div>

          <div className={styles.formCard}>
            {formState === "success" ? (
              <div
                className={styles.formState}
                role="status"
              >
                <span className={styles.successIcon}>
                  ✓
                </span>

                <h3>
                  Thanks — We’ve Received Your Enquiry
                </h3>

                <p>
                  Your enquiry has been received successfully.
                </p>

                {submittedReference && (
                  <p>
                    <strong>
                      Your reference:{" "}
                      {submittedReference}
                    </strong>
                  </p>
                )}

                <p>
                  We’ll review your message and contact you
                  where required. For urgent property or
                  plumbing problems, call 01775 518068
                  directly.
                </p>

                <div className={styles.stateActions}>
                  <Link
                    href="/"
                    className={styles.primaryButton}
                  >
                    RETURN HOME
                  </Link>

                  <Link
                    href="/request-a-quote"
                    className={styles.lightButton}
                  >
                    REQUEST A QUOTE
                  </Link>
                </div>
              </div>
            ) : formState === "error" ? (
              <div
                className={styles.formState}
                role="alert"
              >
                <span className={styles.errorIcon}>
                  !
                </span>

                <h3>
                  We Couldn’t Send Your Message
                </h3>

                <p>
                  Please check the required fields and try
                  again. Your entered information has been kept.
                  If the problem continues, contact Alpha
                  directly.
                </p>

                <div className={styles.stateActions}>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() => setFormState("idle")}
                  >
                    TRY AGAIN
                  </button>

                  <a
                    href="tel:01775518068"
                    className={styles.lightButton}
                  >
                    CALL 01775 518068
                  </a>

                  <a
                    href="mailto:info@alphapropertyandgardening.co.uk"
                    className={styles.lightButton}
                  >
                    EMAIL ALPHA
                  </a>
                </div>
              </div>
            ) : (
              <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
              >
                {/* Invisible honeypot */}
                <div
                  className={styles.honeypot}
                  aria-hidden="true"
                >
                  <label htmlFor="website">
                    Website
                  </label>

                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className={styles.formGrid}>
                  {/* NAME */}
                  <div className={styles.formGroup}>
                    <label htmlFor="name">
                      Name <span>*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="07xxx xxxxxx"
                      required
                    />
                  </div>

                  {/* POSTCODE */}
                  <div className={styles.formGroup}>
                    <label htmlFor="postcode">
                      Postcode
                    </label>

                    <input
                      id="postcode"
                      name="postcode"
                      type="text"
                      autoComplete="postal-code"
                      placeholder="e.g. PE11 1AA"
                    />
                  </div>

                  {/* ENQUIRY TYPE */}
                  <div
                    className={`${styles.formGroup} ${styles.fullWidth}`}
                  >
                    <label htmlFor="enquiryType">
                      Enquiry Type <span>*</span>
                    </label>

                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={selectedEnquiryType}
                      onChange={(event) =>
                        setSelectedEnquiryType(
                          event.target.value
                        )
                      }
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select an enquiry type
                      </option>

                      {enquiryTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* CONDITIONAL REFERENCE NUMBER */}
                  {showReferenceField && (
                    <div
                      className={`${styles.formGroup} ${styles.fullWidth}`}
                    >
                      <label htmlFor="referenceNumber">
                        Reference Number{" "}
                        <span className={styles.optionalText}>
                          (if known)
                        </span>
                      </label>

                      <input
                        id="referenceNumber"
                        name="referenceNumber"
                        type="text"
                        placeholder="QUO-xxxxx / JOB-xxxxx / INV-xxxxx"
                        autoComplete="off"
                      />
                    </div>
                  )}

                  {/* CONDITIONAL QUOTE PROMPT */}
                  {showQuotePrompt && (
                    <div
                      className={`${styles.formGroup} ${styles.fullWidth}`}
                    >
                      <div className={styles.warningBox}>
                        <strong>
                          Need a price for the work?
                        </strong>

                        <p>
                          Our quote form lets you provide more
                          detail, photographs and property
                          information.
                        </p>

                        <div className={styles.stateActions}>
                          <Link
                            href="/request-a-quote"
                            className={
                              styles.primaryButton
                            }
                          >
                            START A QUOTE REQUEST
                          </Link>

                          <button
                            type="button"
                            className={styles.lightButton}
                            onClick={() => {
                              document
                                .getElementById(
                                  "message-text"
                                )
                                ?.focus();
                            }}
                          >
                            CONTINUE WITH THIS ENQUIRY
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MESSAGE */}
                  <div
                    className={`${styles.formGroup} ${styles.fullWidth}`}
                  >
                    <label htmlFor="message-text">
                      Message <span>*</span>
                    </label>

                    <textarea
                      id="message-text"
                      name="message"
                      rows={7}
                      placeholder="Tell us what you need help with..."
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={
                    formState === "submitting"
                  }
                  aria-disabled={
                    formState === "submitting"
                  }
                >
                  {formState === "submitting"
                    ? "SENDING..."
                    : "SEND ENQUIRY"}
                </button>

                <p className={styles.privacyText}>
                  We’ll use the information you provide to
                  respond to your enquiry.{" "}
                  <Link href="/privacy-policy">
                    See our Privacy Policy for more information.
                  </Link>
                </p>
              </form>
            )}
          </div>
        </section>

        {/* =====================================================
            QUOTE VS CONTACT
        ====================================================== */}

        <section
          className={styles.quoteSection}
          aria-labelledby="quote-title"
        >
          <div>
            <p className={styles.sectionEyebrow}>
              QUOTE OR CONTACT?
            </p>

            <h2 id="quote-title">
              Need a Price for Work?
            </h2>

            <p>
              If you’re asking how much work will cost, need
              several jobs priced, or need a bathroom,
              renovation, kitchen or garden project quoted, use
              our dedicated quotation journey.
            </p>
          </div>

          <Link
            href="/request-a-quote"
            className={styles.primaryButton}
          >
            START A QUOTE REQUEST →
          </Link>
        </section>

        {/* =====================================================
            LANDLORDS + EXISTING CUSTOMERS
        ====================================================== */}

        <section className={styles.splitSection}>
          <div className={styles.infoPanel}>
            <p className={styles.sectionEyebrow}>
              LANDLORDS &amp; AGENTS
            </p>

            <h2>Landlord or Letting Agent?</h2>

            <p>
              Alpha can support landlords, letting agents and
              property managers with:
            </p>

            <ul>
              <li>
                One-off repairs and tenant-reported maintenance
              </li>

              <li>
                Emergency plumbing and urgent property issues
              </li>

              <li>
                Void-property work and recurring maintenance
              </li>

              <li>
                Garden maintenance and complete refurbishment
              </li>

              <li>
                Support across multiple properties
              </li>
            </ul>

            <div className={styles.inlineActions}>
              <a href="mailto:info@alphapropertyandgardening.co.uk">
                EMAIL INFO@ALPHAPROPERTYANDGARDENING.CO.UK
              </a>

              <Link href="/landlords-letting-agents">
                REQUEST LANDLORD SUPPORT →
              </Link>
            </div>

            <Link
              href="/landlords-letting-agents"
              className={styles.textLink}
            >
              VIEW LANDLORD &amp; LETTING AGENT SERVICES →
            </Link>
          </div>

          <div className={styles.infoPanelDark}>
            <p className={styles.sectionEyebrow}>
              EXISTING CUSTOMERS
            </p>

            <h2>
              Already Have a Job or Quote With Alpha?
            </h2>

            <p>
              Please have your name, property address or
              postcode, quote/job reference if available and a
              brief description ready.
            </p>

            <div className={styles.existingContact}>
              <a href="tel:01775518068">
                01775 518068
              </a>

              <a href="mailto:info@alphapropertyandgardening.co.uk">
                info@alphapropertyandgardening.co.uk
              </a>
            </div>

            <div className={styles.portalBox}>
              <strong>
                My Alpha Client Portal
              </strong>

              <p>
                My Alpha is currently being developed. The
                future client portal will allow customers and
                property professionals to manage jobs, quotes,
                appointments, photographs, documents, invoices
                and other Alpha records online.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE AREA
        ====================================================== */}

        <section
          className={styles.serviceAreaSection}
          aria-labelledby="area-title"
        >
          <div>
            <p className={styles.sectionEyebrow}>
              SERVICE AREA
            </p>

            <h2 id="area-title">
              Not Sure If We Cover Your Area?
            </h2>

            <p>
              Alpha operates across a broad regional service
              area covering{" "}
              <strong>
                Peterborough through to Skegness
              </strong>{" "}
              and{" "}
              <strong>
                Long Sutton through to Lincoln
              </strong>
              , with many surrounding towns and villages.
            </p>

            <p>
              If your town is not shown, send us your postcode
              and we’ll confirm whether the property falls
              within our practical service area.
            </p>

            <Link
              href="/areas-we-cover"
              className={styles.textLink}
            >
              VIEW AREAS WE COVER →
            </Link>
          </div>

          <div className={styles.areaCloud}>
            {areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section
          className={styles.servicesSection}
          aria-labelledby="services-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>
              QUICK LINKS
            </p>

            <h2 id="services-title">
              What Can We Help With?
            </h2>
          </div>

          <div className={styles.servicesGrid}>
            {serviceLinks.map((service) => (
              <Link
                href={service.href}
                key={service.title}
                className={styles.serviceCard}
              >
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span>
                  VIEW {service.title.toUpperCase()} →
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/services"
            className={styles.allServicesLink}
          >
            VIEW ALL SERVICES →
          </Link>
        </section>

        {/* =====================================================
            BUSINESS DETAILS
        ====================================================== */}

        <section
          className={styles.businessSection}
          aria-labelledby="business-title"
        >
          <div>
            <p className={styles.sectionEyebrow}>
              BUSINESS CONTACT DETAILS
            </p>

            <h2 id="business-title">
              Alpha Property &amp; Gardening Services
            </h2>

            <p className={styles.mobileServiceLine}>
              Mobile property and garden services across our
              coverage region.
            </p>
          </div>

          <div className={styles.businessDetails}>
            <a href="tel:01775518068">
              <strong>Phone</strong>
              <span>01775 518068</span>
            </a>

            <a href="mailto:info@alphapropertyandgardening.co.uk">
              <strong>Email</strong>
              <span>
                info@alphapropertyandgardening.co.uk
              </span>
            </a>

            <div>
              <strong>Website</strong>
              <span>
                alphapropertyandgardening.co.uk
              </span>
            </div>

            <div>
              <strong>Coverage</strong>
              <span>
                Peterborough to Skegness • Long Sutton to
                Lincoln • Surrounding areas
              </span>
            </div>
          </div>

          <div className={styles.hoursNotice}>
            <strong>
              Emergency Property &amp; Plumbing Support
            </strong>

            <span>
              Available 24/7 for suitable urgent call-outs.
            </span>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section
          className={styles.faqSection}
          aria-labelledby="faq-title"
        >
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>
              FAQS
            </p>

            <h2 id="faq-title">
              Frequently Asked Questions
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className={styles.faqItem}
              >
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className={styles.finalCta}>
          <div>
            <p className={styles.sectionEyebrow}>
              GET STARTED
            </p>

            <h2>Ready to Get Started?</h2>

            <p>
              For planned work, tell us what your property
              needs and request a quotation. For urgent
              property or plumbing problems, call us directly.
            </p>

            <strong>
              One Team. Complete Property Care.
            </strong>
          </div>

          <div className={styles.finalActions}>
            <Link
              href="/request-a-quote"
              className={styles.primaryButton}
            >
              REQUEST A QUOTE
            </Link>

            <a
              href="tel:01775518068"
              className={styles.secondaryButton}
            >
              CALL 01775 518068
            </a>
          </div>
        </section>
      </main>

      {/* MOBILE ACTION BAR */}

      <div className={styles.mobileActionBar}>
        <a href="tel:01775518068">
          <span>☎</span>
          CALL
        </a>

        <a href="tel:01775518068">
          <span>24/7</span>
          EMERGENCY
        </a>

        <Link href="/request-a-quote">
          <span>✓</span>
          QUOTE
        </Link>
      </div>

      <Footer />
    </>
  );
}