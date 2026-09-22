"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

const areasLeft = [
  "Peterborough",
  "Spalding",
  "Long Sutton",
  "Lincoln",
  "Skegness",
  "Boston",
  "Holbeach",
  "Sleaford",
  "Donington",
];

const areasRight = [
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

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.smallTitle}>
                CONTACT US <span></span>
              </div>

              <h1>
                Get in <span>Touch</span>
              </h1>

              <h2>We’re here to help</h2>

              <p>
                Whether you need a quote, have a question, or want to discuss
                a project, our friendly team is ready to help. We provide
                professional property and garden services across south and
                East Lincolnshire, covering Peterborough to Skegness and from
                Long Sutton to Lincoln.
              </p>

              <div className={styles.heroActions}>
                <a href="tel:01234567890" className={styles.heroAction}>
                  <div className={styles.actionIcon}>⌕</div>
                  <strong>Call Us</strong>
                  <span>Speak to our team directly</span>
                </a>

                <a
                  href="mailto:info@alphapropertyandgarden.co.uk"
                  className={styles.heroAction}
                >
                  <div className={styles.actionIcon}>✉</div>
                  <strong>Email Us</strong>
                  <span>We’ll get back to you promptly</span>
                </a>

                <a
                  href="https://wa.me/441234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.heroAction}
                >
                  <div className={styles.actionIcon}>▣</div>
                  <strong>Message Us</strong>
                  <span>Send us a message any time</span>
                </a>

                <Link href="/contact#quote" className={styles.heroAction}>
                  <div className={styles.actionIcon}>▦</div>
                  <strong>Request a Quote</strong>
                  <span>Quick, easy and no obligation</span>
                </Link>
              </div>
            </div>

            <div className={styles.heroImage}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Beautiful property and garden"
              />

              <div className={styles.vanBadge}>
                <strong>ALPHA</strong>
                <span>Property & Gardening Services</span>
              </div>

              <div className={styles.heroTagline}>
                Local People.
                <br />
                Local Service.
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM + DETAILS */}
        <section className={styles.contactSection} id="quote">
          <div className={styles.contactGrid}>
            {/* FORM */}
            <div className={styles.formCard}>
              <h2>Send Us a Message</h2>

              <p className={styles.formIntro}>
                Fill in the form below and we’ll get back to you as soon as
                possible.
              </p>

              <form
                className={styles.contactForm}
                onSubmit={(event) => event.preventDefault()}
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">
                      Your Name <span>*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 07xxx xxxxxx"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Required</label>

                    <select id="service" name="service" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Garden Services</option>
                      <option>Property Maintenance</option>
                      <option>Plumbing</option>
                      <option>Bathrooms</option>
                      <option>Kitchens</option>
                      <option>Tiling & Flooring</option>
                      <option>Roofing & Gutters</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">
                    Your Message <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Tell us about your project, enquiry or any questions..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message <span>→</span>
                </button>

                <p className={styles.formNote}>
                  By submitting this form, you agree to be contacted about your
                  enquiry.
                </p>
              </form>
            </div>

            {/* CONTACT DETAILS */}
            <div className={styles.detailsColumn}>
              <h2>Our Contact Details</h2>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>☎</div>

                <div>
                  <strong>01234 567890</strong>
                  <span>Call us today</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>✉</div>

                <div>
                  <strong>info@alphapropertyandgarden.co.uk</strong>
                  <span>Email us</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>⌖</div>

                <div>
                  <strong>Spalding, Lincolnshire</strong>
                  <span>Our base location</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>◷</div>

                <div>
                  <strong>Mon - Sat: 8:00am - 6:00pm</strong>
                  <span>We’re open and ready to help</span>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className={styles.socialArea}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  ♪
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  ▶
                </a>
              </div>

              <p className={styles.socialText}>
                Follow us for updates, tips and recent work
              </p>

              <div className={styles.detailsImage}>
                <img
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85"
                  alt="Beautiful maintained garden"
                />

                <div>
                  “One Team.
                  <br />
                  Complete Property Care.”
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP + AREAS */}
        <section className={styles.locationSection}>
          <div className={styles.mapColumn}>
            <h2>Find Us</h2>

            <div className={styles.mapWrapper}>
              <iframe
                title="Alpha Property and Gardening Services location"
                src="https://www.google.com/maps?q=Spalding%2C%20Lincolnshire%2C%20UK&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className={styles.mapLabels}>
                <span className={styles.mapPointLincoln}>
                  ● <b>Lincoln</b>
                </span>

                <span className={styles.mapPointSpalding}>
                  ● <b>Spalding</b>
                </span>

                <span className={styles.mapPointSkegness}>
                  ● <b>Skegness</b>
                </span>

                <span className={styles.mapPointLongSutton}>
                  ● <b>Long Sutton</b>
                </span>
              </div>

              <div className={styles.coverageBadge}>
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

          <div className={styles.areasColumn}>
            <h2>Areas We Cover</h2>

            <p>
              We provide our services across South and East Lincolnshire,
              including Peterborough, Spalding, Skegness, Long Sutton, Lincoln
              and the surrounding towns and villages.
            </p>

            <div className={styles.areaLists}>
              <ul>
                {areasLeft.map((area) => (
                  <li key={area}>✓ {area}</li>
                ))}
              </ul>

              <ul>
                {areasRight.map((area) => (
                  <li key={area}>✓ {area}</li>
                ))}
              </ul>
            </div>

            <p className={styles.moreAreas}>And many more...</p>
          </div>
        </section>

        {/* FAQ + QUOTE */}
        <section className={styles.bottomSection}>
          <div className={styles.faq}>
            <h2>Frequently Asked Questions</h2>

            <details>
              <summary>
                How quickly can you provide a quote?
                <span>+</span>
              </summary>

              <p>
                We aim to respond to enquiries as quickly as possible. Contact
                our team with details of your project and we can arrange the
                next steps.
              </p>
            </details>

            <details>
              <summary>
                Do you cover my area?
                <span>+</span>
              </summary>

              <p>
                We cover Spalding, Peterborough, Lincoln, Skegness, Long Sutton
                and many surrounding areas across Lincolnshire.
              </p>
            </details>

            <details>
              <summary>
                What types of work do you carry out?
                <span>+</span>
              </summary>

              <p>
                We provide property maintenance, garden services, plumbing,
                bathrooms, kitchens, tiling, flooring, roofing and other
                property services.
              </p>
            </details>
          </div>

          <div className={styles.quoteCard}>
            <div className={styles.quoteLeaf}>◆</div>

            <div>
              <h2>Need a Quote?</h2>

              <p>
                Get in touch today for a free, no obligation quote. We look
                forward to hearing from you.
              </p>

              <Link href="/contact#quote">
                Request a Free Quote <span>→</span>
              </Link>
            </div>
          </div>

          <div className={styles.cleanerMessage}>
            <span>A Cleaner</span>
            <span>Greener</span>
            <span>Brighter</span>
            <span>Tomorrow</span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}