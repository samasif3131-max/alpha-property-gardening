"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./LandlordsLettingAgents.module.css";

const services = [
  {
    title: "Emergency Repairs",
    text: "Fast response for urgent repairs and property maintenance issues.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    href: "/services/property-maintenance",
    icon: "⚡",
  },
  {
    title: "General Property Maintenance",
    text: "Reliable maintenance to keep rental properties safe and presentable.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85",
    href: "/services/property-maintenance",
    icon: "🔧",
  },
  {
    title: "Bathrooms & Kitchens",
    text: "Repairs, improvements and maintenance for bathrooms and kitchens.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
    href: "/services/kitchens",
    icon: "🏠",
  },
  {
    title: "Plumbing Services",
    text: "Professional plumbing repairs and maintenance for rental properties.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    href: "/services/plumbing",
    icon: "🚰",
  },
  {
    title: "Painting & Decorating",
    text: "Interior painting and decorating to keep properties looking their best.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85",
    href: "/services/property-maintenance",
    icon: "🎨",
  },
  {
    title: "Garden Maintenance",
    text: "Regular and one-off garden maintenance for rental properties.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
    href: "/services/garden-services",
    icon: "🌿",
  },
  {
    title: "Property Refurbishments",
    text: "Small improvements through to larger property refurbishment projects.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    href: "/services/property-maintenance",
    icon: "🏗️",
  },
  {
    title: "End of Tenancy Work",
    text: "Repairs, refresh work and preparation between tenants.",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=85",
    href: "/services/property-maintenance",
    icon: "🔑",
  },
];

const testimonials = [
  {
    quote:
      "Alpha have been reliable, professional and quick to respond whenever we need maintenance work completed.",
    name: "Local Letting Agent",
    location: "Spalding",
  },
  {
    quote:
      "Having one trusted team for repairs, gardens and general maintenance makes managing our properties much easier.",
    name: "Property Manager",
    location: "Lincolnshire",
  },
  {
    quote:
      "Communication is excellent and the quality of work is consistently high.",
    name: "Private Landlord",
    location: "Spalding & Surrounding Areas",
  },
];

export default function LandlordsLettingAgentsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      <Header />

      {/* =========================
          HERO
      ========================= */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                LANDLORD & LETTING AGENT SERVICES
              </p>

              <h1>
                Trusted Property Maintenance for{" "}
                <span>Landlords & Letting Agents</span>
              </h1>

              <div className={styles.goldLine} />

              <p className={styles.heroLead}>
                Reliable, professional property maintenance for landlords,
                letting agents and property managers across Spalding and
                surrounding areas.
              </p>

              <p className={styles.heroDescription}>
                From urgent repairs and general maintenance to gardens,
                decorating and end-of-tenancy work, Alpha helps keep your
                properties safe, presentable and well maintained.
              </p>

              <div className={styles.heroButtons}>
                <a href="#quote" className={styles.primaryButton}>
                  Get a Free Quote →
                </a>

                <Link href="/contact" className={styles.secondaryButton}>
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <div className={styles.heroImageBox}>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85"
                alt="Well maintained rental property"
              />

              <div className={styles.imageLabel}>
                <strong>LOCAL & RELIABLE</strong>
                <span>Spalding & Lincolnshire</span>
              </div>
            </div>

            <aside className={styles.heroSide}>
              <h2>Why Agents Choose Alpha</h2>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Fast Response Times</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Reliable & Professional Team</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>One-Off & Ongoing Maintenance</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Detailed Reports & Photos</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Keep Properties Well Maintained</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Competitive Rates</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Trusted by Local Agents</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Serving Spalding & Surrounding Areas</span>
              </div>

              <div className={styles.priority}>
                <span>Your Properties.</span>
                <strong>Our Priority.</strong>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================
          TRUST BAR
      ========================= */}
      <section className={styles.trustBar}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <div>
              <span>🏠</span>
              <strong>Rental Properties</strong>
              <small>Property focused</small>
            </div>

            <div>
              <span>🤝</span>
              <strong>Letting Agents</strong>
              <small>Reliable partner</small>
            </div>

            <div>
              <span>🛡️</span>
              <strong>Fully Insured</strong>
              <small>Peace of mind</small>
            </div>

            <div>
              <span>📍</span>
              <strong>Local & Reliable</strong>
              <small>Spalding based</small>
            </div>

            <div>
              <span>★</span>
              <strong>5 Star Service</strong>
              <small>Professional care</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>WHAT WE DO</p>

            <h2>Our Services for Landlords & Letting Agents</h2>

            <p>
              One reliable team for the repairs, maintenance and improvements
              your rental properties need.
            </p>
          </div>

          <div className={styles.servicesLayout}>
            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <Link
                  href={service.href}
                  key={service.title}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceImage}>
                    <img src={service.image} alt={service.title} />

                    <span className={styles.serviceIcon}>
                      {service.icon}
                    </span>
                  </div>

                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                    <span className={styles.serviceLink}>
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* =========================
                QUOTE FORM
            ========================= */}
            <div className={styles.quoteBox} id="quote">
              <div className={styles.quoteHeader}>
                <span>FREE QUOTE</span>

                <h2>Get a Free Quote</h2>

                <p>
                  Tell us what you need and our team will get back to you.
                </p>
              </div>

              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✓</div>

                  <h3>Thank You!</h3>

                  <p>
                    Your enquiry has been received. Our team will contact you
                    shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className={styles.resetButton}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <label>
                      Name *
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </label>

                    <label>
                      Company Name
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                      />
                    </label>

                    <label>
                      Phone *
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        required
                      />
                    </label>

                    <label>
                      Email *
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                      />
                    </label>

                    <label>
                      Postcode *
                      <input
                        type="text"
                        name="postcode"
                        placeholder="Postcode"
                        required
                      />
                    </label>

                    <label>
                      Type of Work *
                      <select name="work" defaultValue="" required>
                        <option value="" disabled>
                          Select service
                        </option>

                        <option value="emergency-repairs">
                          Emergency Repairs
                        </option>

                        <option value="property-maintenance">
                          Property Maintenance
                        </option>

                        <option value="plumbing">Plumbing</option>

                        <option value="bathrooms">
                          Bathrooms
                        </option>

                        <option value="kitchens">
                          Kitchens
                        </option>

                        <option value="gardens">
                          Garden Maintenance
                        </option>

                        <option value="painting">
                          Painting & Decorating
                        </option>

                        <option value="refurbishment">
                          Property Refurbishment
                        </option>

                        <option value="end-of-tenancy">
                          End of Tenancy
                        </option>
                      </select>
                    </label>
                  </div>

                  <label>
                    Tell us more
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about the property and work required..."
                    />
                  </label>

                  <button type="submit" className={styles.formButton}>
                    Request My Free Quote →
                  </button>

                  <div className={styles.formTrust}>
                    <span>✓ No obligation</span>
                    <span>✓ Fast response</span>
                    <span>✓ Local team</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHY ALPHA
      ========================= */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyImage}>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                alt="Professional property maintenance worker"
              />

              <div className={styles.whyImageLabel}>
                <strong>Professional & Reliable</strong>
                <span>Property maintenance you can trust</span>
              </div>
            </div>

            <div className={styles.whyContent}>
              <p className={styles.eyebrow}>WHY ALPHA</p>

              <h2>Why Landlords & Agents Choose Alpha</h2>

              <p className={styles.whyIntro}>
                Managing rental properties takes time. Our job is to make
                property maintenance simple, organised and dependable.
              </p>

              <div className={styles.whyList}>
                <div>
                  <b>✓</b>

                  <span>
                    <strong>One Reliable Point of Contact</strong>
                    <small>
                      Reduce the hassle of dealing with multiple trades.
                    </small>
                  </span>
                </div>

                <div>
                  <b>✓</b>

                  <span>
                    <strong>Fast & Clear Communication</strong>
                    <small>
                      Keep updated from initial enquiry through completion.
                    </small>
                  </span>
                </div>

                <div>
                  <b>✓</b>

                  <span>
                    <strong>Quality Workmanship</strong>
                    <small>
                      Professional work carried out with care and attention.
                    </small>
                  </span>
                </div>

                <div>
                  <b>✓</b>

                  <span>
                    <strong>Photos & Detailed Updates</strong>
                    <small>
                      Useful updates to help you manage properties remotely.
                    </small>
                  </span>
                </div>

                <div>
                  <b>✓</b>

                  <span>
                    <strong>Flexible Maintenance</strong>
                    <small>
                      One-off jobs or ongoing property maintenance support.
                    </small>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.featureQuote}>
              <div className={styles.quoteMark}>“</div>

              <p>
                A reliable partner that helps keep our properties in great
                condition.
              </p>

              <div className={styles.stars}>★★★★★</div>

              <span>Local Property Management Client</span>

              <a href="#quote">Get in Touch Today →</a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          HOW IT WORKS
      ========================= */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>SIMPLE PROCESS</p>

            <h2>How It Works</h2>

            <p>
              A straightforward process designed to make property maintenance
              easier for landlords and agents.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <span>01</span>
              <div>📞</div>
              <h3>Get In Touch</h3>
              <p>Tell us about the maintenance work you need.</p>
            </div>

            <div className={styles.processCard}>
              <span>02</span>
              <div>🔍</div>
              <h3>We Assess</h3>
              <p>We understand the work and discuss the options.</p>
            </div>

            <div className={styles.processCard}>
              <span>03</span>
              <div>📋</div>
              <h3>Quote</h3>
              <p>Receive a clear quote for the agreed work.</p>
            </div>

            <div className={styles.processCard}>
              <span>04</span>
              <div>🛠️</div>
              <h3>We Complete</h3>
              <p>Our team completes the work professionally.</p>
            </div>

            <div className={styles.processCard}>
              <span>05</span>
              <div>✓</div>
              <h3>Job Complete</h3>
              <p>Receive updates and enjoy a properly maintained property.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          COMPLIANCE / AREAS
      ========================= */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.complianceCard}>
              <div className={styles.complianceImage}>
                <img
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1100&q=85"
                  alt="Property keys"
                />
              </div>

              <div className={styles.complianceContent}>
                <p className={styles.eyebrow}>PEACE OF MIND</p>

                <h2>Compliance & Peace of Mind</h2>

                <p>
                  Keeping rental properties properly maintained helps landlords
                  and agents provide safe, presentable homes for tenants.
                </p>

                <ul>
                  <li>✓ Promptly address maintenance issues</li>
                  <li>✓ Keep properties presentable</li>
                  <li>✓ Support planned maintenance</li>
                  <li>✓ Clear communication and updates</li>
                  <li>✓ Professional insured service</li>
                </ul>
              </div>
            </div>

            <div className={styles.areaCard}>
              <div className={styles.areaContent}>
                <p className={styles.eyebrow}>LOCAL COVERAGE</p>

                <h2>Areas We Cover</h2>

                <p>
                  We provide property maintenance services throughout Spalding
                  and surrounding Lincolnshire areas.
                </p>

                <div className={styles.areaTags}>
                  <span>Spalding</span>
                  <span>Pinchbeck</span>
                  <span>Donington</span>
                  <span>Holbeach</span>
                  <span>Market Deeping</span>
                  <span>Surrounding Areas</span>
                </div>

                <Link
                  href="/areas-we-cover"
                  className={styles.darkButton}
                >
                  View All Areas →
                </Link>
              </div>

              <div className={styles.mapBox}>
                <iframe
                  title="Spalding map"
                  src="https://www.google.com/maps?q=Spalding%2C%20Lincolnshire%2C%20UK&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TESTIMONIALS
      ========================= */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>CLIENT FEEDBACK</p>

            <h2>What Our Clients Say</h2>

            <p>
              Reliable service and professional workmanship for property
              owners and agents.
            </p>
          </div>

          <div className={styles.reviewGrid}>
            {testimonials.map((review) => (
              <article
                className={styles.reviewCard}
                key={review.name}
              >
                <div className={styles.stars}>★★★★★</div>

                <p>“{review.quote}”</p>

                <div className={styles.reviewer}>
                  <div className={styles.avatar}>
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <div>
              <p className={styles.eyebrow}>WORK WITH ALPHA</p>

              <h2>Become a Valued Partner</h2>

              <p>
                Looking for a reliable maintenance partner for your rental
                properties? Let&apos;s talk.
              </p>
            </div>

            <div className={styles.finalButtons}>
              <a href="#quote" className={styles.goldButton}>
                Request a Free Quote →
              </a>

              <Link
                href="/contact"
                className={styles.outlineButton}
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}