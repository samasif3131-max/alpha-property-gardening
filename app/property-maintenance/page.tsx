import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./PropertyMaintenance.module.css";

const services = [
  {
    title: "General Repairs",
    text: "Fixing leaks, replacing fixtures, small building work and general property repairs.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85",
    icon: "🛠",
  },
  {
    title: "Carpentry & Joinery",
    text: "Doors, skirting, architraves, custom joinery, shelving and woodwork.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
    icon: "⌘",
  },
  {
    title: "Painting & Decorating",
    text: "Internal and external painting, wall preparation, wallpapering and decorating.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85",
    icon: "◒",
  },
  {
    title: "Plastering & Rendering",
    text: "Plastering repairs, skimming, rendering and surface restoration for internal and external walls.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    icon: "✣",
  },
  {
    title: "Doors, Windows & Locks",
    text: "Repairs, replacements, lock changes and security upgrades.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    icon: "▣",
  },
  {
    title: "Fascias, Soffits & Guttering",
    text: "Repairs, cleaning and replacements to keep your property protected.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    icon: "⌂",
  },
  {
    title: "Property Refurbishments",
    text: "From single room refurbishments to complete property transformations.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    icon: "◈",
  },
  {
    title: "Ongoing Maintenance Plans",
    text: "Scheduled maintenance to keep your property in top condition year-round.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    icon: "✓",
  },
];

const projects = [
  {
    title: "Kitchen Refresh",
    location: "Spalding, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Interior Redecoration",
    location: "Donington, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Fascia & Gutter Replacement",
    location: "Surfleet, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Bathroom Repairs",
    location: "Pinchbeck, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Full Property Refurbishment",
    location: "Spalding, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  },
];

const faqs = [
  "What types of property maintenance do you cover?",
  "Do you work with landlords and letting agents?",
  "Do you provide free quotes?",
  "What areas do you cover?",
  "Can you carry out regular maintenance visits?",
  "Are you fully insured?",
];

const processSteps = [
  {
    number: "01",
    title: "Get in Touch",
    text: "Call, email or complete our online enquiry form.",
  },
  {
    number: "02",
    title: "Free Assessment",
    text: "We discuss your requirements and assess the work needed.",
  },
  {
    number: "03",
    title: "Book Your Appointment",
    text: "Choose a convenient date and time for your work.",
  },
  {
    number: "04",
    title: "We Get to Work",
    text: "Our experienced team completes the work professionally.",
  },
  {
    number: "05",
    title: "Enjoy the Results",
    text: "A safe, functional and well-maintained property.",
  },
];

function Arrow() {
  return <span className={styles.arrow}>→</span>;
}

export default function PropertyMaintenancePage() {
  return (
    <>
      {/* GLOBAL HEADER */}
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroImage} />
          <div className={styles.heroOverlay} />

          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/services">Our Services</Link>
              <span>›</span>
              <span>Property Maintenance</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.goldLine} />

                <h1>
                  Property Maintenance Services
                  <span>in Spalding and Surrounding Areas</span>
                </h1>

                <p>
                  From small repairs to full property maintenance, we keep your
                  home or rental property in great condition. Our skilled,
                  multi-trade team provides reliable, high-quality maintenance
                  services for homeowners, landlords, letting agents and
                  businesses across Spalding and the surrounding areas.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="/contact" className={styles.goldButton}>
                    Request a Free Quote <Arrow />
                  </Link>

                  <a
                    href="tel:01234567890"
                    className={styles.outlineButton}
                  >
                    <span className={styles.phoneIcon}>☎</span>
                    Call 01234 567890
                  </a>
                </div>
              </div>

              <div className={styles.heroPanel}>
                <ul>
                  <li>General Repairs</li>
                  <li>Carpentry &amp; Joinery</li>
                  <li>Doors, Windows &amp; Locks</li>
                  <li>Painting &amp; Decorating</li>
                  <li>Plastering &amp; Rendering</li>
                  <li>Fascias, Soffits &amp; Guttering</li>
                  <li>Property Refurbishments</li>
                  <li>Ongoing Maintenance Plans</li>
                </ul>

                <div className={styles.heroQuote}>
                  Keeping Your
                  <br />
                  Property in Top Condition
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>⌂</div>
                <div>
                  <strong>All Types of Properties</strong>
                  <span>Homes, rentals &amp; commercial</span>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>♙</div>
                <div>
                  <strong>Landlords &amp; Letting Agents</strong>
                  <span>Trusted maintenance partner</span>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>♢</div>
                <div>
                  <strong>Fully Insured</strong>
                  <span>For your peace of mind</span>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>⌖</div>
                <div>
                  <strong>Local &amp; Reliable</strong>
                  <span>Spalding and surrounding areas</span>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>☆</div>
                <div>
                  <strong>5 Star Service</strong>
                  <span>Hundreds of happy customers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <div className={styles.sectionEyebrow}>
                  PROPERTY CARE
                </div>

                <h2>
                  Our Property Maintenance Services
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  We provide a complete range of property maintenance
                  services, helping you keep your property safe, functional
                  and looking its best.
                </p>
              </div>

              <Link href="/services" className={styles.viewLink}>
                View All Services <Arrow />
              </Link>
            </div>

            <div className={styles.servicesLayout}>
              <div className={styles.servicesGrid}>
                {services.map((service) => (
                  <article
                    className={styles.serviceCard}
                    key={service.title}
                  >
                    <div
                      className={styles.serviceImage}
                      style={{
                        backgroundImage: `url("${service.image}")`,
                      }}
                    >
                      <div className={styles.serviceIcon}>
                        {service.icon}
                      </div>
                    </div>

                    <div className={styles.serviceContent}>
                      <h3>{service.title}</h3>

                      <p>{service.text}</p>

                      <Link
                        href="/contact"
                        className={styles.learnMore}
                      >
                        Learn More <Arrow />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* QUOTE FORM */}
              <aside className={styles.quoteCard}>
                <div className={styles.quoteCardTop}>
                  <span>GET IN TOUCH</span>
                  <h3>
                    Get a Free Property Maintenance Quote
                  </h3>
                </div>

                <form className={styles.quoteForm}>
                  <label>
                    <span>Name *</span>
                    <input type="text" name="name" required />
                  </label>

                  <label>
                    <span>Phone *</span>
                    <input type="tel" name="phone" required />
                  </label>

                  <label>
                    <span>Email *</span>
                    <input type="email" name="email" required />
                  </label>

                  <label>
                    <span>Postcode *</span>
                    <input type="text" name="postcode" required />
                  </label>

                  <label>
                    <span>Type of Work Required</span>

                    <select name="work">
                      <option value="">Please select</option>
                      <option value="general-repairs">
                        General Repairs
                      </option>
                      <option value="carpentry">
                        Carpentry &amp; Joinery
                      </option>
                      <option value="painting">
                        Painting &amp; Decorating
                      </option>
                      <option value="plastering">
                        Plastering &amp; Rendering
                      </option>
                      <option value="doors-windows">
                        Doors, Windows &amp; Locks
                      </option>
                      <option value="guttering">
                        Fascias, Soffits &amp; Guttering
                      </option>
                      <option value="refurbishment">
                        Property Refurbishment
                      </option>
                      <option value="maintenance">
                        Ongoing Maintenance
                      </option>
                    </select>
                  </label>

                  <label>
                    <span>Tell us more about the work</span>

                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Please tell us a little about the work you require..."
                    />
                  </label>

                  <button
                    type="submit"
                    className={styles.formButton}
                  >
                    Request My Free Quote <Arrow />
                  </button>
                </form>

                <div className={styles.formBenefits}>
                  <div>
                    <strong>£</strong>
                    <span>No obligation</span>
                  </div>

                  <div>
                    <strong>✓</strong>
                    <span>Quick response</span>
                  </div>

                  <div>
                    <strong>□</strong>
                    <span>Flexible appointments</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* TRANSFORMATION */}
        <section className={styles.transformation}>
          <div className={styles.container}>
            <div className={styles.transformationGrid}>
              <div className={styles.beforeAfter}>
                <div className={styles.beforeImage}>
                  <div className={styles.imageLabel}>
                    Before
                  </div>
                </div>

                <div className={styles.afterImage}>
                  <div className={styles.imageLabel}>
                    After
                  </div>
                </div>

                <div className={styles.transformationCaption}>
                  <div className={styles.sectionEyebrow}>
                    PROPERTY TRANSFORMATIONS
                  </div>

                  <h2>
                    Transforming Properties Across Spalding
                  </h2>

                  <p>
                    From small repairs to complete refurbishments, we
                    take pride in delivering high-quality maintenance
                    work that makes a real difference.
                  </p>

                  <Link
                    href="/our-work"
                    className={styles.goldButton}
                  >
                    View Our Work <Arrow />
                  </Link>
                </div>
              </div>

              {/* WHY CHOOSE */}
              <div className={styles.whyChoose}>
                <div className={styles.sectionEyebrow}>
                  WHY ALPHA?
                </div>

                <h2>
                  Why Choose Alpha?
                  <span className={styles.headingDash} />
                </h2>

                <div className={styles.whyList}>
                  <div className={styles.whyItem}>
                    <span className={styles.whyIcon}>♙</span>

                    <div>
                      <strong>
                        Experienced &amp; Skilled Team
                      </strong>

                      <span>
                        Multi-trade professionals
                      </span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <span className={styles.whyIcon}>☆</span>

                    <div>
                      <strong>
                        High Quality Workmanship
                      </strong>

                      <span>
                        Attention to detail on every job
                      </span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <span className={styles.whyIcon}>◉</span>

                    <div>
                      <strong>
                        Reliable &amp; Punctual
                      </strong>

                      <span>
                        We turn up when we say we will
                      </span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <span className={styles.whyIcon}>▤</span>

                    <div>
                      <strong>Clear Quotes</strong>

                      <span>No hidden costs</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <span className={styles.whyIcon}>♢</span>

                    <div>
                      <strong>Fully Insured</strong>

                      <span>
                        For your peace of mind
                      </span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <span className={styles.whyIcon}>⌖</span>

                    <div>
                      <strong>Local &amp; Trusted</strong>

                      <span>
                        Based in Spalding, covering surrounding
                        areas
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LANDLORD */}
              <div className={styles.landlordCard}>
                <div className={styles.landlordBackground} />

                <div className={styles.landlordContent}>
                  <div className={styles.sectionEyebrow}>
                    LANDLORD SERVICES
                  </div>

                  <h2>
                    Property Maintenance
                    <br />
                    for Landlords &amp; Agents
                  </h2>

                  <p>
                    We work with landlords and letting agents to
                    keep rental properties safe, compliant and
                    looking their best. From void property
                    refurbishments to ongoing maintenance, we
                    provide a fast, reliable and professional
                    service.
                  </p>

                  <ul>
                    <li>Fast response times</li>
                    <li>Detailed reports &amp; photos</li>
                    <li>Competitive rates</li>
                    <li>
                      One-off and ongoing maintenance
                    </li>
                    <li>
                      Trusted by local letting agents
                    </li>
                  </ul>

                  <Link
                    href="/landlords-letting-agents"
                    className={styles.goldButton}
                  >
                    Find Out More <Arrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.processHeader}>
              <div>
                <div className={styles.sectionEyebrow}>
                  SIMPLE PROCESS
                </div>

                <h2>
                  How Our Property Services Work
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <p>
                Professional property maintenance made simple from
                the first phone call to the final result.
              </p>
            </div>

            <div className={styles.processGrid}>
              {processSteps.map((step) => (
                <div
                  className={styles.processItem}
                  key={step.number}
                >
                  <div className={styles.processNumber}>
                    {step.number}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <div className={styles.sectionEyebrow}>
                  OUR RECENT WORK
                </div>

                <h2>
                  Recent Property Maintenance Projects
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <Link
                href="/our-work"
                className={styles.viewLink}
              >
                View More Projects <Arrow />
              </Link>
            </div>

            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <article
                  className={styles.projectCard}
                  key={project.title}
                >
                  <div
                    className={styles.projectImage}
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                  />

                  <h3>{project.title}</h3>

                  <p>{project.location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <div className={styles.faqMain}>
                <div className={styles.sectionEyebrow}>
                  HELP &amp; ADVICE
                </div>

                <h2>
                  Frequently Asked Questions
                  <span className={styles.headingDash} />
                </h2>

                <div className={styles.faqGrid}>
                  {faqs.map((faq) => (
                    <details
                      className={styles.faqItem}
                      key={faq}
                    >
                      <summary>
                        <span>{faq}</span>
                        <b>+</b>
                      </summary>

                      <p>
                        Yes. Our team can discuss your
                        requirements and provide clear advice
                        and a no-obligation quotation for the
                        work required.
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              <div className={styles.faqCta}>
                <div className={styles.faqCtaIcon}>⌂</div>

                <h3>Need Property Maintenance?</h3>

                <p>
                  Get a free, no-obligation quote today. Our team
                  is ready to help.
                </p>

                <Link
                  href="/contact"
                  className={styles.faqButton}
                >
                  Request a Free Quote <Arrow />
                </Link>

                <a
                  href="tel:01234567890"
                  className={styles.faqPhone}
                >
                  Or call 01234 567890
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <div>
                <div className={styles.sectionEyebrow}>
                  ALPHA PROPERTY CARE
                </div>

                <h2>
                  Ready to Keep Your Property in Top Condition?
                </h2>

                <p>
                  Get in touch today for a free, no-obligation
                  quote. Our friendly local team is here to help
                  with all your property maintenance needs.
                </p>
              </div>

              <div className={styles.finalButtons}>
                <Link
                  href="/contact"
                  className={styles.goldButton}
                >
                  Request a Free Quote <Arrow />
                </Link>

                <a
                  href="tel:01234567890"
                  className={styles.outlineButton}
                >
                  ☎ &nbsp; Call 01234 567890
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </>
  );
}