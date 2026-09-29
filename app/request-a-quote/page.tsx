"use client";

import { FormEvent, useEffect, useState } from "react";

import Link from "next/link";

import Header from "../components/Header";

import Footer from "../components/Footer";

import styles from "./request-a-quote.module.css";

type CustomerType =
  | "homeowner"
  | "landlord"
  | "letting-agent"
  | "tenant"
  | "business"
  | "other";

type ContactMethod = "phone" | "email";

type QuoteForm = {
  enquiryId: string;
  enquiryStatus: "Draft Quote Request";
  emergency: boolean | null;
  customerType: CustomerType | "";
  tenantAuthorisation: "yes" | "no" | "";
  firstName: string;
  lastName: string;
  organisation: string;
  email: string;
  phone: string;
  preferredContactMethod: ContactMethod | "";
  postcode: string;
  marketingConsent: boolean;
  service: string;
  message: string;
  propertyType: string;
  propertyPostcode: string;
  propertyAddress: string;
  propertyMessage: string;
  startedAt: string;
};

const STORAGE_KEY = "alpha-quote-request";

const customerTypes: {
  id: CustomerType;
  title: string;
}[] = [
  {
    id: "homeowner",
    title: "Homeowner",
  },
  {
    id: "landlord",
    title: "Landlord",
  },
  {
    id: "letting-agent",
    title: "Letting Agent / Property Manager",
  },
  {
    id: "tenant",
    title: "Tenant",
  },
  {
    id: "business",
    title: "Business / Commercial Customer",
  },
  {
    id: "other",
    title: "Other",
  },
];

const services = [
  {
    id: "garden",
    title: "Garden Maintenance",
    description: "Lawn care, hedge cutting, clearance etc.",
    icon: "🍃",
  },
  {
    id: "kitchens",
    title: "Kitchens & Bathrooms",
    description: "Supply & fit, refurbishments",
    icon: "⌂",
  },
  {
    id: "property",
    title: "Property Maintenance",
    description: "Repairs, renovations, general maintenance",
    icon: "⌕",
  },
  {
    id: "tiling",
    title: "Tiling & Flooring",
    description: "Wall & floor tiling, laminate, LVT etc.",
    icon: "▦",
  },
  {
    id: "plumbing",
    title: "Plumbing",
    description: "Plumbing repairs, installations etc.",
    icon: "♧",
  },
  {
    id: "roofing",
    title: "Roofing & Gutters",
    description: "Repairs, cleaning, replacements",
    icon: "⌂",
  },
];

const initialForm: QuoteForm = {
  enquiryId: "",
  enquiryStatus: "Draft Quote Request",
  emergency: null,
  customerType: "",
  tenantAuthorisation: "",
  firstName: "",
  lastName: "",
  organisation: "",
  email: "",
  phone: "",
  preferredContactMethod: "",
  postcode: "",
  marketingConsent: false,
  service: "",
  message: "",
  propertyType: "",
  propertyPostcode: "",
  propertyAddress: "",
  propertyMessage: "",
  startedAt: "",
};

function createEnquiryId() {
  return `ALPHA-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)
    .toUpperCase()}`;
}

export default function RequestAQuotePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.title = "Request a Quote | Alpha Property & Gardening Services";

    const description =
      "Request a quote from Alpha Property & Gardening Services for property maintenance, repairs, renovations, plumbing, garden services and more.";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    const saved = window.sessionStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        if (parsed?.form) {
          setForm(parsed.form);
        }

        if (
          typeof parsed?.step === "number" &&
          parsed.step >= 1 &&
          parsed.step <= 4
        ) {
          setStep(parsed.step);

          window.history.replaceState(
            {
              quoteStep: parsed.step,
            },
            "",
            window.location.pathname
          );
        }
      } catch {
        window.sessionStorage.removeItem(STORAGE_KEY);
      }
    } else {
      const startedAt = new Date().toISOString();

      const newForm = {
        ...initialForm,
        enquiryId: createEnquiryId(),
        startedAt,
      };

      setForm(newForm);

      window.sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          step: 1,
          form: newForm,
        })
      );

      window.history.replaceState(
        {
          quoteStep: 1,
        },
        "",
        window.location.pathname
      );
    }
  }, []);

  useEffect(() => {
    if (!form.enquiryId) {
      return;
    }

    window.sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        step,
        form,
      })
    );
  }, [form, step]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const historyStep = event.state?.quoteStep;

      if (
        typeof historyStep === "number" &&
        historyStep >= 1 &&
        historyStep <= 4
      ) {
        setStep(historyStep);
        setErrors({});
        return;
      }

      const stored = window.sessionStorage.getItem(STORAGE_KEY);

      if (!stored) {
        return;
      }

      try {
        const parsed = JSON.parse(stored);

        if (
          typeof parsed?.step === "number" &&
          parsed.step >= 1 &&
          parsed.step <= 4
        ) {
          setStep(parsed.step);
        }

        if (parsed?.form) {
          setForm(parsed.form);
        }

        setErrors({});
      } catch {
        // Ignore invalid session data.
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    const nextValue =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setForm((current) => ({
      ...current,
      [name]: nextValue,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const selectCustomerType = (customerType: CustomerType) => {
    setForm((current) => ({
      ...current,
      customerType,
      tenantAuthorisation:
        customerType === "tenant" ? current.tenantAuthorisation : "",
      organisation:
        customerType === "letting-agent" ||
        customerType === "business" ||
        customerType === "landlord"
          ? current.organisation
          : "",
    }));

    setErrors((current) => ({
      ...current,
      customerType: "",
      tenantAuthorisation: "",
    }));
  };

  const setEmergency = (emergency: boolean) => {
    setForm((current) => ({
      ...current,
      emergency,
    }));

    setErrors((current) => ({
      ...current,
      emergency: "",
      tenantAuthorisation: "",
    }));
  };

  const validateStepOne = () => {
    const nextErrors: Record<string, string> = {};

    if (form.emergency === null) {
      nextErrors.emergency =
        "Please tell us whether this is planned or urgent work.";
    }

    if (!form.customerType) {
      nextErrors.customerType =
        "Please select who you are requesting a quote as.";
    }

    if (
      form.customerType === "tenant" &&
      !form.tenantAuthorisation
    ) {
      nextErrors.tenantAuthorisation =
        "Please tell us whether you are responsible for authorising the work.";
    }

    if (!form.firstName.trim()) {
      nextErrors.firstName = "Please enter your first name.";
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = "Please enter your last name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter a phone number.";
    } else if (
      form.phone.trim().replace(/\D/g, "").length < 7
    ) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.preferredContactMethod) {
      nextErrors.preferredContactMethod =
        "Please select your preferred contact method.";
    }

    if (!form.postcode.trim()) {
      nextErrors.postcode = "Please enter your postcode.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      window.setTimeout(() => {
        const firstError = document.querySelector(
          '[aria-invalid="true"]'
        ) as HTMLElement | null;

        firstError?.focus();
      }, 0);

      return false;
    }

    return true;
  };

  const validateStepTwo = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.service) {
      nextErrors.service = "Please select the service you need.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const validateStepThree = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.propertyType) {
      nextErrors.propertyType = "Please select a property type.";
    }

    if (!form.propertyPostcode.trim()) {
      nextErrors.propertyPostcode =
        "Please enter the property postcode.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const goToStep = (nextStep: number) => {
    if (nextStep < 1 || nextStep > 4 || nextStep === step) {
      return;
    }

    setStep(nextStep);
    setErrors({});

    window.history.pushState(
      {
        quoteStep: nextStep,
      },
      "",
      window.location.pathname
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextStep = () => {
    if (step === 1 && !validateStepOne()) {
      return;
    }

    if (step === 2 && !validateStepTwo()) {
      return;
    }

    if (step === 3 && !validateStepThree()) {
      return;
    }

    if (step < 4) {
      goToStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      goToStep(step - 1);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !validateStepOne() ||
      !validateStepTwo() ||
      !validateStepThree()
    ) {
      return;
    }

    setForm((current) => ({
      ...current,
      enquiryStatus: "Draft Quote Request",
    }));

    setSubmitted(true);
  };

  const showOrganisation =
    form.customerType === "letting-agent" ||
    form.customerType === "business" ||
    form.customerType === "landlord";

  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.eyebrow}>
                REQUEST A QUOTE
                <span className={styles.eyebrowLine}></span>
              </span>

              <h1>
                Request a <span>Quote</span>
              </h1>

              <h2>Tell us a little about yourself.</h2>

              <p>
                Tell us a little about yourself and we&apos;ll collect the
                information needed to understand your job.
              </p>

              <p>
                Whether you need one repair, several maintenance jobs or a
                larger property project, the process starts here.
              </p>

              <div className={styles.ctaSlogan}>
                One Team. Complete Property Care.
              </div>
            </div>

            <div className={styles.heroImage}></div>
          </div>
        </section>

        {/* MAIN QUOTE AREA */}
        <section className={styles.quoteSection}>
          <div className={styles.quoteGrid}>
            {/* FORM */}
            <div className={styles.formCard}>
              {/* PROGRESS */}
              <div className={styles.steps} aria-label="Quote progress">
                {[1, 2, 3, 4].map((number) => (
                  <div
                    key={number}
                    className={`${styles.stepItem} ${
                      step === number ? styles.stepActive : ""
                    }`}
                  >
                    <div className={styles.stepCircle}>{number}</div>

                    <span>
                      {number === 1 && "Your Details"}
                      {number === 2 && "Service Details"}
                      {number === 3 && "Property Details"}
                      {number === 4 && "Review & Send"}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* STEP 1 */}
                {step === 1 && !submitted && (
                  <div className={styles.formStep}>
                    <p className={styles.eyebrow}>STEP 1 OF 4</p>

                    <h2>Your Details</h2>

                    <p className={styles.formIntro}>
                      First, tell us who we&apos;re speaking to and how we can
                      contact you about the quotation.
                    </p>

                    {/* EMERGENCY */}
                    <div className={styles.formDivider}></div>

                    <h2>Is This an Emergency?</h2>

                    <p className={styles.formIntro}>
                      Choose the option that best describes your request.
                    </p>

                    <div className={styles.serviceGrid}>
                      <button
                        type="button"
                        className={`${styles.serviceOption} ${
                          form.emergency === false
                            ? styles.serviceSelected
                            : ""
                        }`}
                        onClick={() => setEmergency(false)}
                        aria-pressed={form.emergency === false}
                      >
                        <span className={styles.checkbox}>
                          {form.emergency === false ? "✓" : ""}
                        </span>

                        <span className={styles.serviceIcon}>✓</span>

                        <span className={styles.serviceText}>
                          <strong>No — This is planned work</strong>
                        </span>
                      </button>

                      <button
                        type="button"
                        className={`${styles.serviceOption} ${
                          form.emergency === true
                            ? styles.serviceSelected
                            : ""
                        }`}
                        onClick={() => setEmergency(true)}
                        aria-pressed={form.emergency === true}
                      >
                        <span className={styles.checkbox}>
                          {form.emergency === true ? "✓" : ""}
                        </span>

                        <span className={styles.serviceIcon}>!</span>

                        <span className={styles.serviceText}>
                          <strong>Yes — I need urgent help</strong>
                        </span>
                      </button>
                    </div>

                    {errors.emergency && (
                      <p role="alert" className={styles.formIntro}>
                        {errors.emergency}
                      </p>
                    )}

                    {form.emergency === true && (
                      <div className={styles.successBox}>
                        <p className={styles.eyebrow}>URGENT SUPPORT</p>

                        <h2>Need Urgent Help?</h2>

                        <p>
                          For an active property or plumbing emergency,
                          calling Alpha is the fastest way to contact us.
                        </p>

                        <strong>24/7 EMERGENCY CALL</strong>

                        <a
                          href="tel:01775518068"
                          className={styles.nextButton}
                        >
                          01775 518068
                        </a>

                        <p>
                          You can still continue with the form if you want to
                          provide additional details, but please call us
                          directly for urgent assistance.
                        </p>

                        <small>
                          24/7 emergency property &amp; plumbing call-out
                          support.
                        </small>
                      </div>
                    )}

                    {/* CUSTOMER TYPE */}
                    <div className={styles.formDivider}></div>

                    <h2>I&apos;m Requesting a Quote As:</h2>

                    <div className={styles.serviceGrid}>
                      {customerTypes.map((customer) => (
                        <button
                          type="button"
                          key={customer.id}
                          className={`${styles.serviceOption} ${
                            form.customerType === customer.id
                              ? styles.serviceSelected
                              : ""
                          }`}
                          onClick={() =>
                            selectCustomerType(customer.id)
                          }
                          aria-pressed={
                            form.customerType === customer.id
                          }
                        >
                          <span className={styles.checkbox}>
                            {form.customerType === customer.id
                              ? "✓"
                              : ""}
                          </span>

                          <span className={styles.serviceIcon}>◆</span>

                          <span className={styles.serviceText}>
                            <strong>{customer.title}</strong>
                          </span>
                        </button>
                      ))}
                    </div>

                    {errors.customerType && (
                      <p role="alert" className={styles.formIntro}>
                        {errors.customerType}
                      </p>
                    )}

                    {/* TENANT AUTHORISATION */}
                    {form.customerType === "tenant" && (
                      <div className={styles.formDivider}>
                        <h2>
                          Are You Responsible for Authorising the Work?
                        </h2>

                        <div className={styles.serviceGrid}>
                          <button
                            type="button"
                            className={`${styles.serviceOption} ${
                              form.tenantAuthorisation === "yes"
                                ? styles.serviceSelected
                                : ""
                            }`}
                            onClick={() =>
                              setForm((current) => ({
                                ...current,
                                tenantAuthorisation: "yes",
                              }))
                            }
                            aria-pressed={
                              form.tenantAuthorisation === "yes"
                            }
                          >
                            <span className={styles.checkbox}>
                              {form.tenantAuthorisation === "yes"
                                ? "✓"
                                : ""}
                            </span>

                            <span className={styles.serviceText}>
                              <strong>Yes</strong>
                            </span>
                          </button>

                          <button
                            type="button"
                            className={`${styles.serviceOption} ${
                              form.tenantAuthorisation === "no"
                                ? styles.serviceSelected
                                : ""
                            }`}
                            onClick={() =>
                              setForm((current) => ({
                                ...current,
                                tenantAuthorisation: "no",
                              }))
                            }
                            aria-pressed={
                              form.tenantAuthorisation === "no"
                            }
                          >
                            <span className={styles.checkbox}>
                              {form.tenantAuthorisation === "no"
                                ? "✓"
                                : ""}
                            </span>

                            <span className={styles.serviceText}>
                              <strong>
                                No / I&apos;m Reporting This for My Landlord
                                or Agent
                              </strong>
                            </span>
                          </button>
                        </div>

                        {errors.tenantAuthorisation && (
                          <p role="alert" className={styles.formIntro}>
                            {errors.tenantAuthorisation}
                          </p>
                        )}

                        {form.tenantAuthorisation === "no" && (
                          <p className={styles.formIntro}>
                            If your landlord or letting agent is responsible
                            for approving the work, please make sure they are
                            aware of the request. We may need their
                            authorisation before planned work can proceed.
                          </p>
                        )}
                      </div>
                    )}

                    {/* NAME */}
                    <div className={styles.formDivider}></div>

                    <div className={styles.formRow}>
                      <label>
                        First Name <span>*</span>

                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleInput}
                          placeholder="First name"
                          autoComplete="given-name"
                          required
                          aria-invalid={Boolean(errors.firstName)}
                          aria-describedby={
                            errors.firstName
                              ? "first-name-error"
                              : undefined
                          }
                        />

                        {errors.firstName && (
                          <small id="first-name-error">
                            {errors.firstName}
                          </small>
                        )}
                      </label>

                      <label>
                        Last Name <span>*</span>

                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleInput}
                          placeholder="Last name"
                          autoComplete="family-name"
                          required
                          aria-invalid={Boolean(errors.lastName)}
                          aria-describedby={
                            errors.lastName
                              ? "last-name-error"
                              : undefined
                          }
                        />

                        {errors.lastName && (
                          <small id="last-name-error">
                            {errors.lastName}
                          </small>
                        )}
                      </label>
                    </div>

                    {/* ORGANISATION */}
                    {showOrganisation && (
                      <label>
                        Company / Organisation Name{" "}
                        {form.customerType === "landlord" && (
                          <small>(optional)</small>
                        )}

                        <input
                          type="text"
                          name="organisation"
                          value={form.organisation}
                          onChange={handleInput}
                          placeholder="Company or organisation name"
                          autoComplete="organization"
                        />
                      </label>
                    )}

                    {/* EMAIL */}
                    <label>
                      Email Address <span>*</span>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInput}
                        placeholder="name@example.com"
                        autoComplete="email"
                        inputMode="email"
                        required
                        aria-invalid={Boolean(errors.email)}
                      />

                      <small>
                        We&apos;ll use this for your quote and enquiry
                        updates.
                      </small>

                      {errors.email && (
                        <small role="alert">{errors.email}</small>
                      )}
                    </label>

                    {/* PHONE */}
                    <label>
                      Phone Number <span>*</span>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInput}
                        placeholder="07... or 01..."
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        aria-invalid={Boolean(errors.phone)}
                      />

                      <small>
                        Useful if we need to clarify something about the work
                        or arrange an assessment.
                      </small>

                      {errors.phone && (
                        <small role="alert">{errors.phone}</small>
                      )}
                    </label>

                    {/* CONTACT METHOD */}
                    <label>
                      How Would You Prefer Us to Contact You?{" "}
                      <span>*</span>

                      <select
                        name="preferredContactMethod"
                        value={form.preferredContactMethod}
                        onChange={handleInput}
                        required
                        aria-invalid={Boolean(
                          errors.preferredContactMethod
                        )}
                      >
                        <option value="">Please select</option>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                      </select>

                      {errors.preferredContactMethod && (
                        <small role="alert">
                          {errors.preferredContactMethod}
                        </small>
                      )}
                    </label>

                    {/* POSTCODE */}
                    <label>
                      Your Postcode <span>*</span>

                      <input
                        type="text"
                        name="postcode"
                        value={form.postcode}
                        onChange={handleInput}
                        placeholder="e.g. PE11 1AA"
                        autoComplete="postal-code"
                        required
                        aria-invalid={Boolean(errors.postcode)}
                      />

                      <small>
                        We&apos;ll ask for the property address in Step 3 if
                        the work is at a different location.
                      </small>

                      {errors.postcode && (
                        <small role="alert">{errors.postcode}</small>
                      )}
                    </label>

                    {/* SERVICE AREA */}
                    <div className={styles.formIntro}>
                      <p>
                        Alpha covers a wide regional area from Peterborough to
                        Skegness and from Long Sutton to Lincoln, including many
                        surrounding communities.
                      </p>

                      <Link
                        href="/areas-we-cover"
                        className={styles.textLink}
                      >
                        VIEW AREAS WE COVER →
                      </Link>
                    </div>

                    {/* MARKETING */}
                    <div className={styles.formDivider}></div>

                    <label>
                      <input
                        type="checkbox"
                        name="marketingConsent"
                        checked={form.marketingConsent}
                        onChange={handleInput}
                      />

                      <span>
                        I&apos;d like to receive occasional updates, offers or
                        property-care advice from Alpha.
                      </span>
                    </label>

                    {/* PRIVACY */}
                    <p className={styles.formIntro}>
                      We&apos;ll use the information you provide to respond to
                      your enquiry and manage your quotation. See our{" "}
                      <Link href="/privacy-policy">
                        Privacy Policy
                      </Link>{" "}
                      for more information.
                    </p>

                    <button
                      type="button"
                      className={styles.nextButton}
                      onClick={nextStep}
                    >
                      CONTINUE TO SERVICE DETAILS <span>→</span>
                    </button>

                    <div className={styles.contactStrip}>
                      <div className={styles.contactItem}>
                        <span>☎</span>

                        <div>
                          <strong>Need to speak to us?</strong>

                          <p>
                            <a href="tel:01775518068">
                              01775 518068
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && !submitted && (
                  <div className={styles.formStep}>
                    <p className={styles.eyebrow}>STEP 2 OF 4</p>

                    <h2>Service Details</h2>

                    <p className={styles.formIntro}>
                      Tell us a little more about the work you need.
                    </p>

                    <div className={styles.serviceGrid}>
                      {services.map((service) => (
                        <button
                          type="button"
                          key={service.id}
                          className={`${styles.serviceOption} ${
                            form.service === service.id
                              ? styles.serviceSelected
                              : ""
                          }`}
                          onClick={() =>
                            setForm((current) => ({
                              ...current,
                              service: service.id,
                            }))
                          }
                          aria-pressed={form.service === service.id}
                        >
                          <span className={styles.checkbox}>
                            {form.service === service.id ? "✓" : ""}
                          </span>

                          <span className={styles.serviceIcon}>
                            {service.icon}
                          </span>

                          <span className={styles.serviceText}>
                            <strong>{service.title}</strong>
                            <small>{service.description}</small>
                          </span>
                        </button>
                      ))}
                    </div>

                    {errors.service && (
                      <p role="alert" className={styles.formIntro}>
                        {errors.service}
                      </p>
                    )}

                    <label>
                      Tell us about your project

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleInput}
                        placeholder="Please describe the work you need..."
                        rows={7}
                      />
                    </label>

                    <div className={styles.buttonRow}>
                      <button
                        type="button"
                        className={styles.backButton}
                        onClick={previousStep}
                      >
                        ← BACK
                      </button>

                      <button
                        type="button"
                        className={styles.nextButton}
                        onClick={nextStep}
                      >
                        CONTINUE TO PROPERTY DETAILS →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && !submitted && (
                  <div className={styles.formStep}>
                    <p className={styles.eyebrow}>STEP 3 OF 4</p>

                    <h2>Property Details</h2>

                    <p className={styles.formIntro}>
                      Tell us about the property where the work is required.
                    </p>

                    <label>
                      Property Type <span>*</span>

                      <select
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleInput}
                        required
                        aria-invalid={Boolean(errors.propertyType)}
                      >
                        <option value="">Select property type</option>
                        <option value="house">House</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="flat">Flat / Apartment</option>
                        <option value="commercial">
                          Commercial Property
                        </option>
                        <option value="landlord">
                          Landlord / Rental Property
                        </option>
                        <option value="other">Other</option>
                      </select>

                      {errors.propertyType && (
                        <small role="alert">
                          {errors.propertyType}
                        </small>
                      )}
                    </label>

                    <label>
                      Property Address

                      <input
                        type="text"
                        name="propertyAddress"
                        value={form.propertyAddress}
                        onChange={handleInput}
                        placeholder="Property address"
                        autoComplete="street-address"
                      />
                    </label>

                    <label>
                      Property Postcode <span>*</span>

                      <input
                        type="text"
                        name="propertyPostcode"
                        value={form.propertyPostcode}
                        onChange={handleInput}
                        placeholder="e.g. PE11 1AA"
                        autoComplete="postal-code"
                        required
                        aria-invalid={Boolean(
                          errors.propertyPostcode
                        )}
                      />

                      {errors.propertyPostcode && (
                        <small role="alert">
                          {errors.propertyPostcode}
                        </small>
                      )}
                    </label>

                    <label>
                      Additional Information

                      <textarea
                        name="propertyMessage"
                        value={form.propertyMessage}
                        onChange={handleInput}
                        placeholder="Anything else we should know about the property?"
                        rows={6}
                      />
                    </label>

                    <div className={styles.buttonRow}>
                      <button
                        type="button"
                        className={styles.backButton}
                        onClick={previousStep}
                      >
                        ← BACK
                      </button>

                      <button
                        type="button"
                        className={styles.nextButton}
                        onClick={nextStep}
                      >
                        CONTINUE TO REVIEW →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && !submitted && (
                  <div className={styles.formStep}>
                    <p className={styles.eyebrow}>STEP 4 OF 4</p>

                    <h2>Review &amp; Send</h2>

                    <p className={styles.formIntro}>
                      Please check your details before sending your quote
                      request.
                    </p>

                    <div className={styles.reviewBox}>
                      <div>
                        <strong>Emergency</strong>

                        <span>
                          {form.emergency === true
                            ? "Yes — urgent help"
                            : "No — planned work"}
                        </span>
                      </div>

                      <div>
                        <strong>Customer Type</strong>

                        <span>
                          {customerTypes.find(
                            (item) => item.id === form.customerType
                          )?.title || "Not provided"}
                        </span>
                      </div>

                      {form.customerType === "tenant" &&
                        form.tenantAuthorisation && (
                          <div>
                            <strong>Tenant Authorisation</strong>

                            <span>
                              {form.tenantAuthorisation === "yes"
                                ? "Yes"
                                : "No / Reporting for Landlord or Agent"}
                            </span>
                          </div>
                        )}

                      <div>
                        <strong>Name</strong>

                        <span>
                          {form.firstName} {form.lastName}
                        </span>
                      </div>

                      {form.organisation && (
                        <div>
                          <strong>Organisation</strong>

                          <span>{form.organisation}</span>
                        </div>
                      )}

                      <div>
                        <strong>Phone</strong>

                        <span>{form.phone}</span>
                      </div>

                      <div>
                        <strong>Email</strong>

                        <span>{form.email}</span>
                      </div>

                      <div>
                        <strong>Preferred Contact</strong>

                        <span>
                          {form.preferredContactMethod === "phone"
                            ? "Phone"
                            : "Email"}
                        </span>
                      </div>

                      <div>
                        <strong>Customer Postcode</strong>

                        <span>{form.postcode}</span>
                      </div>

                      <div>
                        <strong>Service</strong>

                        <span>
                          {services.find(
                            (service) => service.id === form.service
                          )?.title || "Not provided"}
                        </span>
                      </div>

                      <div>
                        <strong>Project Details</strong>

                        <span>
                          {form.message ||
                            "No additional details provided"}
                        </span>
                      </div>

                      <div>
                        <strong>Property</strong>

                        <span>
                          {form.propertyType || "Not provided"}

                          {form.propertyAddress
                            ? ` — ${form.propertyAddress}`
                            : ""}

                          {form.propertyPostcode
                            ? `, ${form.propertyPostcode}`
                            : ""}
                        </span>
                      </div>
                    </div>

                    <p className={styles.formIntro}>
                      We&apos;ll review the information you send and contact
                      you about the next step.
                    </p>

                    <div className={styles.buttonRow}>
                      <button
                        type="button"
                        className={styles.backButton}
                        onClick={previousStep}
                      >
                        ← BACK
                      </button>

                      <button
                        type="submit"
                        className={styles.nextButton}
                      >
                        SEND QUOTE REQUEST →
                      </button>
                    </div>
                  </div>
                )}

                {/* SUCCESS */}
                {submitted && (
                  <div className={styles.successBox}>
                    <div className={styles.successIcon}>✓</div>

                    <p className={styles.eyebrow}>
                      QUOTE REQUEST RECEIVED
                    </p>

                    <h2>Thank You!</h2>

                    <p>
                      Your quote request has been prepared successfully.
                      We&apos;ll review the information you send and contact
                      you about the next step.
                    </p>

                    {form.emergency === true && (
                      <p>
                        If this is an active property or plumbing emergency,
                        please call Alpha directly on{" "}
                        <strong>01775 518068</strong>.
                      </p>
                    )}

                    <div className={styles.successLinks}>
                      <a href="tel:01775518068">
                        Call 01775 518068
                      </a>

                      <a href="mailto:info@alphapropertyandgardening.co.uk">
                        Email info@alphapropertyandgardening.co.uk
                      </a>
                    </div>

                    <Link href="/" className={styles.homeButton}>
                      Back to Home →
                    </Link>
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className={styles.sidebar}>
              <div className={styles.whyBox}>
                <h2>What Happens Next?</h2>

                <div className={styles.whyItem}>
                  <span>1</span>

                  <div>
                    <strong>Tell us about yourself.</strong>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <span>2</span>

                  <div>
                    <strong>Tell us what work you need.</strong>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <span>3</span>

                  <div>
                    <strong>Tell us about the property.</strong>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <span>4</span>

                  <div>
                    <strong>Review and send your request.</strong>
                  </div>
                </div>

                <p>
                  Once submitted, Alpha will review the information and
                  contact you regarding the next step.
                </p>
              </div>

              <div className={styles.coverageBox}>
                <h2>Emergency?</h2>

                <p>
                  For an active property or plumbing emergency, calling Alpha
                  is the fastest way to contact us.
                </p>

                <a
                  href="tel:01775518068"
                  className={styles.nextButton}
                >
                  CALL 01775 518068
                </a>
              </div>

              <div className={styles.coverageBox}>
                <h2>Our Coverage Area</h2>

                <p>
                  Alpha covers a wide regional area from Peterborough to
                  Skegness and from Long Sutton to Lincoln, including many
                  surrounding communities.
                </p>

                <Link
                  href="/areas-we-cover"
                  className={styles.textLink}
                >
                  VIEW AREAS WE COVER →
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* CONTACT STRIP */}
        <section className={styles.contactStrip}>
          <div className={styles.contactItem}>
            <span>☎</span>

            <div>
              <strong>Prefer to speak to us directly?</strong>

              <p>
                Call us on{" "}
                <a href="tel:01775518068">01775 518068</a>
              </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span>✉</span>

            <div>
              <strong>Or email us</strong>

              <p>
                <a href="mailto:info@alphapropertyandgardening.co.uk">
                  info@alphapropertyandgardening.co.uk
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className={styles.trustBar}>
          <div>
            <span>♢</span>
            <strong>Property Maintenance</strong>
          </div>

          <div>
            <span>☆</span>
            <strong>Quality Workmanship</strong>
          </div>

          <div>
            <span>🍃</span>
            <strong>Garden Services</strong>
          </div>

          <div>
            <span>♧</span>
            <strong>Homes &amp; Businesses</strong>
          </div>

          <div>
            <span>⌂</span>
            <strong>One Team. Complete Property Care.</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}