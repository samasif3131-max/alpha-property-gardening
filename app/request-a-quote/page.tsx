"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./request-a-quote.module.css";

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

export default function RequestAQuotePage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    services: [] as string[],
    other: "",
    propertyType: "",
    postcode: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const toggleService = (serviceId: string) => {
    setForm((current) => {
      const alreadySelected = current.services.includes(serviceId);

      return {
        ...current,
        services: alreadySelected
          ? current.services.filter((item) => item !== serviceId)
          : [...current.services, serviceId],
      };
    });
  };

  const nextStep = () => {
    if (step < 4) {
      setStep((current) => current + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((current) => current - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                Get Your <span>Free Quote</span>
              </h1>

              <h2>Quick. Easy. No Obligation.</h2>

              <p>
                Tell us about your project and our friendly team will get back
                to you with a free, no obligation quote. We provide
                professional property and garden services across South and
                East Lincolnshire, covering Peterborough to Skegness and from
                Long Sutton to Lincoln.
              </p>

              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <strong>100% Free Quotes</strong>
                  <small>No obligation</small>
                </div>

                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>◷</span>
                  <strong>Quick Response</strong>
                  <small>Usually within 24 hours</small>
                </div>

                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>▣</span>
                  <strong>Flexible Appointments</strong>
                  <small>To suit you</small>
                </div>

                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>✓</span>
                  <strong>Trusted & Local</strong>
                  <small>Based in Spalding</small>
                </div>
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
              {/* STEPS */}
              <div className={styles.steps}>
                {[1, 2, 3, 4].map((number) => (
                  <div
                    key={number}
                    className={`${styles.stepItem} ${
                      step >= number ? styles.stepActive : ""
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

              <form onSubmit={handleSubmit}>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className={styles.formStep}>
                    <h2>Your Details</h2>

                    <p className={styles.formIntro}>
                      Let&apos;s start with your contact information so we can
                      get back to you.
                    </p>

                    <div className={styles.formRow}>
                      <label>
                        Full Name <span>*</span>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleInput}
                          placeholder="Enter your full name"
                          required
                        />
                      </label>

                      <label>
                        Phone Number <span>*</span>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInput}
                          placeholder="e.g. 07xxx xxxxxx"
                          required
                        />
                      </label>
                    </div>

                    <label>
                      Email Address <span>*</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInput}
                        placeholder="you@example.com"
                        required
                      />
                    </label>

                    <div className={styles.formDivider}></div>

                    <h2>How Can We Help?</h2>

                    <p className={styles.formIntro}>
                      Select the services you&apos;re interested in. You can
                      choose more than one.
                    </p>

                    <div className={styles.serviceGrid}>
                      {services.map((service) => (
                        <button
                          type="button"
                          key={service.id}
                          className={`${styles.serviceOption} ${
                            form.services.includes(service.id)
                              ? styles.serviceSelected
                              : ""
                          }`}
                          onClick={() => toggleService(service.id)}
                        >
                          <span className={styles.checkbox}>
                            {form.services.includes(service.id) ? "✓" : ""}
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

                    <button
                      type="button"
                      className={styles.nextButton}
                      onClick={nextStep}
                    >
                      Next Step <span>→</span>
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className={styles.formStep}>
                    <h2>Service Details</h2>

                    <p className={styles.formIntro}>
                      Tell us a little more about the work you need.
                    </p>

                    <label>
                      Service Required
                      <select
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleInput}
                      >
                        <option value="">Please select a service</option>
                        <option value="garden">Garden Maintenance</option>
                        <option value="property">
                          Property Maintenance
                        </option>
                        <option value="plumbing">Plumbing</option>
                        <option value="bathrooms">
                          Kitchens & Bathrooms
                        </option>
                        <option value="tiling">Tiling & Flooring</option>
                        <option value="roofing">Roofing & Gutters</option>
                      </select>
                    </label>

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
                        ← Back
                      </button>

                      <button
                        type="button"
                        className={styles.nextButton}
                        onClick={nextStep}
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className={styles.formStep}>
                    <h2>Property Details</h2>

                    <p className={styles.formIntro}>
                      These details help us understand your project and
                      location.
                    </p>

                    <label>
                      Property Type
                      <select
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleInput}
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
                    </label>

                    <label>
                      Postcode
                      <input
                        type="text"
                        name="postcode"
                        value={form.postcode}
                        onChange={handleInput}
                        placeholder="e.g. PE11 1AA"
                      />
                    </label>

                    <label>
                      Additional Information
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleInput}
                        placeholder="Anything else we should know?"
                        rows={6}
                      />
                    </label>

                    <div className={styles.buttonRow}>
                      <button
                        type="button"
                        className={styles.backButton}
                        onClick={previousStep}
                      >
                        ← Back
                      </button>

                      <button
                        type="button"
                        className={styles.nextButton}
                        onClick={nextStep}
                      >
                        Review Quote →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && !submitted && (
                  <div className={styles.formStep}>
                    <h2>Review & Send</h2>

                    <p className={styles.formIntro}>
                      Please check your details before sending your quote
                      request.
                    </p>

                    <div className={styles.reviewBox}>
                      <div>
                        <strong>Name</strong>
                        <span>{form.name || "Not provided"}</span>
                      </div>

                      <div>
                        <strong>Phone</strong>
                        <span>{form.phone || "Not provided"}</span>
                      </div>

                      <div>
                        <strong>Email</strong>
                        <span>{form.email || "Not provided"}</span>
                      </div>

                      <div>
                        <strong>Postcode</strong>
                        <span>{form.postcode || "Not provided"}</span>
                      </div>

                      <div>
                        <strong>Services</strong>
                        <span>
                          {form.services.length > 0
                            ? form.services
                                .map(
                                  (id) =>
                                    services.find(
                                      (service) => service.id === id
                                    )?.title
                                )
                                .filter(Boolean)
                                .join(", ")
                            : "No service selected"}
                        </span>
                      </div>

                      <div>
                        <strong>Project details</strong>
                        <span>
                          {form.message || "No additional details provided"}
                        </span>
                      </div>
                    </div>

                    <div className={styles.buttonRow}>
                      <button
                        type="button"
                        className={styles.backButton}
                        onClick={previousStep}
                      >
                        ← Back
                      </button>

                      <button type="submit" className={styles.nextButton}>
                        Send Quote Request →
                      </button>
                    </div>
                  </div>
                )}

                {/* SUCCESS */}
                {submitted && (
                  <div className={styles.successBox}>
                    <div className={styles.successIcon}>✓</div>

                    <h2>Thank You!</h2>

                    <p>
                      Your quote request has been prepared successfully.
                      Our team will get back to you as soon as possible.
                    </p>

                    <div className={styles.successLinks}>
                      <a href="tel:01234567890">Call 01234 567890</a>
                      <a href="mailto:info@alphapropertyandgarden.co.uk">
                        Email Us
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
              <div className={styles.sidebarImage}>
                <div>
                  <span>From small jobs</span>
                  <strong>to big projects...</strong>
                  <em>we&apos;ve got you covered.</em>
                </div>
              </div>

              <div className={styles.whyBox}>
                <h2>Why Choose Alpha?</h2>

                <div className={styles.whyItem}>
                  <span>♟</span>
                  <div>
                    <strong>Local & Reliable</strong>
                    <p>A trusted local team based in Spalding</p>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <span>✓</span>
                  <div>
                    <strong>Wide Range of Services</strong>
                    <p>One team for all your property and garden needs</p>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <span>★</span>
                  <div>
                    <strong>Professional & Friendly</strong>
                    <p>High quality workmanship and great customer service</p>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <span>🍃</span>
                  <div>
                    <strong>A Cleaner Greener Brighter Tomorrow</strong>
                    <p>Caring for your home and our local environment</p>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className={styles.coverageBox}>
                <h2>Our Coverage Area</h2>

                <p>
                  We cover a wide area across South and East Lincolnshire,
                  including Peterborough, Spalding, Skegness, Long Sutton,
                  Lincoln and the surrounding towns and villages.
                </p>

                <div className={styles.mapWrapper}>
                  <iframe
                    title="Alpha Property and Gardening Services coverage area"
                    src="https://www.google.com/maps?q=Spalding%2C%20Lincolnshire%2C%20UK&z=9&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <div className={styles.mapLabel}>
                    <span></span>
                    <div>
                      <strong>Our Coverage Area</strong>
                      <small>
                        Peterborough to Skegness
                        <br />
                        and Long Sutton to Lincoln
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* CONTACT STRIP */}
        <section className={styles.contactStrip}>
          <div className={styles.contactItem}>
            <span>♧</span>
            <div>
              <strong>Prefer to speak to us directly?</strong>
              <p>
                Call us on{" "}
                <a href="tel:01234567890">01234 567890</a>
              </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span>✉</span>
            <div>
              <strong>Or email us</strong>
              <p>
                <a href="mailto:info@alphapropertyandgarden.co.uk">
                  info@alphapropertyandgarden.co.uk
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className={styles.trustBar}>
          <div>
            <span>♢</span>
            <strong>Trusted Local Team</strong>
          </div>

          <div>
            <span>☆</span>
            <strong>Quality Workmanship</strong>
          </div>

          <div>
            <span>🍃</span>
            <strong>Local Communities</strong>
          </div>

          <div>
            <span>♧</span>
            <strong>Homes & Businesses</strong>
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