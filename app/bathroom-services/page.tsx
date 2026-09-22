import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./BathroomServices.module.css";

const bathroomServices = [
  {
    title: "Full Bathroom Installations",
    description:
      "Complete bathroom installations tailored to your home, style and budget.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    icon: "♙",
  },
  {
    title: "Wet Rooms & Walk-in Showers",
    description:
      "Stylish and practical wet rooms and walk-in showers, ideal for modern living.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
    icon: "≋",
  },
  {
    title: "Bathroom Refurbishments",
    description:
      "Transform your existing bathroom with a modern, fresh design and high-quality finishes.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    icon: "♜",
  },
  {
    title: "Tiling & Flooring",
    description:
      "Professional wall and floor tiling, with a wide range of styles and finishes.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    icon: "▦",
  },
  {
    title: "Plumbing & Electrics",
    description:
      "All plumbing and electrical work completed by our trusted team.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    icon: "⚒",
  },
  {
    title: "Design & Planning Support",
    description:
      "Help with layouts, product selection and design ideas to create your perfect bathroom.",
    image:
      "https://images.unsplash.com/photo-1584622781867-3d3f0f8a9f2e?auto=format&fit=crop&w=900&q=85",
    icon: "▧",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Get In Touch",
    description: "Call, email or use our online form.",
    icon: "◯",
  },
  {
    number: "02",
    title: "Free Consultation",
    description: "We'll discuss your ideas, measure up and provide a quote.",
    icon: "▣",
  },
  {
    number: "03",
    title: "Design & Plan",
    description: "Help with layout, products and final details.",
    icon: "▤",
  },
  {
    number: "04",
    title: "Installation",
    description: "Our skilled team completes the work to a high standard.",
    icon: "⚒",
  },
  {
    number: "05",
    title: "Enjoy Your New Bathroom",
    description: "A beautiful, practical space built to last.",
    icon: "✓",
  },
];

const recentProjects = [
  {
    title: "Modern Family Bathroom",
    location: "Spalding, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Luxury Walk-in Shower",
    location: "Pinchbeck, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Full Bathroom Renovation",
    location: "Sutterton, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Wet Room Installation",
    location: "Holbeach, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
  },
];

const faqs = [
  {
    question: "How much does a new bathroom cost?",
    answer:
      "Bathroom costs vary depending on the room size, products, plumbing, tiling and installation requirements. We provide a clear quotation based on your project.",
  },
  {
    question: "Can you help with the design?",
    answer:
      "Yes. We can help with bathroom layouts, product selection, tiling choices and practical design decisions.",
  },
  {
    question: "How long does a bathroom installation take?",
    answer:
      "The timescale depends on the size and complexity of the project. We will provide an estimated programme before work begins.",
  },
  {
    question: "Do you work with landlords and letting agents?",
    answer:
      "Yes. We provide bathroom installation, refurbishment and maintenance services for landlords and letting agents.",
  },
  {
    question: "Do you supply the bathroom products?",
    answer:
      "We can help you choose suitable bathroom products and coordinate the materials required for your project.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover Spalding and surrounding areas including Pinchbeck, Sutterton, Holbeach, Long Sutton, Crowland and nearby locations.",
  },
];

export default function BathroomServicesPage() {
  return (
    <main className={styles.page}>
      <Header />

      {/* =========================================
          HERO
      ========================================== */}
      <section className={styles.hero}>
        <div className={styles.heroImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContainer}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Our Services</Link>
            <span>›</span>
            <span>Bathrooms</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1>
                Bathroom Installation
                <br />
                & Renovation Services
                <br />
                <span>in Spalding and Surrounding Areas</span>
              </h1>

              <p>
                From modern family bathrooms to luxury wet rooms, we design
                and install beautiful, practical bathrooms tailored to your
                home and budget.
                <br />
                A complete service from start to finish, with minimal
                disruption.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/contact" className={styles.goldButton}>
                  Request a Free Quote <span>→</span>
                </Link>

                <a
                  href="tel:01234567890"
                  className={styles.outlineButton}
                >
                  ☎ &nbsp; Call 01234 567890
                </a>
              </div>
            </div>

            <div className={styles.heroChecklist}>
              <div>✓ Complete Bathroom Installations</div>
              <div>✓ Wet Rooms & Walk-in Showers</div>
              <div>✓ Design & Planning Support</div>
              <div>✓ Tiling, Plastering & Flooring</div>
              <div>✓ Plumbing & Electrics</div>
              <div>✓ All Trades Managed</div>
              <div>✓ Bathrooms for Landlords</div>
              <div>✓ Modern & Traditional Styles</div>
              <div>✓ High Quality Workmanship</div>
              <div>✓ Local & Reliable Team</div>

              <strong>
                Beautiful Bathrooms
                <br />
                Built to Last
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          TRUST BAR
      ========================================== */}
      <section className={styles.trustBar}>
        <div className={styles.trustItem}>
          <span>◇</span>
          <div>
            <strong>High Quality Finish</strong>
            <small>Attention to detail</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span>£</span>
          <div>
            <strong>Competitive Pricing</strong>
            <small>Great value for money</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span>♢</span>
          <div>
            <strong>Fully Insured</strong>
            <small>For your peace of mind</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span>♧</span>
          <div>
            <strong>Experienced Team</strong>
            <small>Skilled, reliable & professional</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span>⌂</span>
          <div>
            <strong>Local & Trusted</strong>
            <small>Spalding and surrounding areas</small>
          </div>
        </div>
      </section>

      {/* =========================================
          SERVICES + QUOTE
      ========================================== */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesMain}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>Our Bathroom Services</h2>

              <p>
                We provide a complete bathroom installation service, from
                initial design and product selection to plumbing, tiling,
                flooring and final finishing touches. Whether you’re looking
                for a simple upgrade or a full luxury bathroom refurbishment,
                we can help.
              </p>
            </div>

            <Link href="/services" className={styles.viewAll}>
              View All Services →
            </Link>
          </div>

          <div className={styles.serviceGrid}>
            {bathroomServices.map((service) => (
              <article
                className={styles.serviceCard}
                key={service.title}
              >
                <div className={styles.serviceImage}>
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <span>{service.icon}</span>
                </div>

                <div className={styles.serviceBody}>
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link
                    href="/contact"
                    className={styles.learnMore}
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* QUOTE FORM */}
        <aside className={styles.quoteCard}>
          <h2>Get a Free Bathroom Quote</h2>

          <form className={styles.quoteForm}>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
            />

            <input
              type="text"
              name="postcode"
              placeholder="Postcode *"
              required
            />

            <label htmlFor="workType">
              Type of Work Required
            </label>

            <select
              id="workType"
              name="workType"
              defaultValue=""
            >
              <option value="" disabled>
                Please select
              </option>
              <option value="full-bathroom">
                Full Bathroom Installation
              </option>
              <option value="wet-room">
                Wet Room
              </option>
              <option value="walk-in-shower">
                Walk-in Shower
              </option>
              <option value="refurbishment">
                Bathroom Refurbishment
              </option>
              <option value="tiling">
                Tiling & Flooring
              </option>
              <option value="plumbing">
                Plumbing & Electrics
              </option>
              <option value="design">
                Design & Planning
              </option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Tell us more about your project (optional)"
            ></textarea>

            <button
              type="submit"
              className={styles.formButton}
            >
              Request My Free Quote →
            </button>
          </form>

          <div className={styles.quoteBenefits}>
            <div>
              <span>▦</span>
              <small>Free quote</small>
            </div>

            <div>
              <span>♢</span>
              <small>No obligation</small>
            </div>

            <div>
              <span>◷</span>
              <small>Quick response</small>
            </div>
          </div>
        </aside>
      </section>

      {/* =========================================
          BEFORE / AFTER + WHY CHOOSE
      ========================================== */}
      <section className={styles.whySection}>
        <div className={styles.beforeAfter}>
          <div className={styles.beforeImage}>
            <span>Before</span>

            <img
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85"
              alt="Bathroom before renovation"
            />
          </div>

          <div className={styles.afterImage}>
            <span>After</span>

            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
              alt="Modern bathroom after renovation"
            />
          </div>

          <div className={styles.beforeAfterArrow}>
            ↔
          </div>
        </div>

        <div className={styles.whyContent}>
          <h2>Why Choose Alpha for Your Bathroom?</h2>

          <ul>
            <li>Experienced, multi-trade team</li>
            <li>Complete project management</li>
            <li>High quality workmanship</li>
            <li>Minimal disruption to your home</li>
            <li>Clear and competitive pricing</li>
            <li>Bathrooms for homeowners, landlords & agents</li>
            <li>Local and reliable in Spalding and surrounding areas</li>
            <li>Fully insured for your peace of mind</li>
          </ul>
        </div>

        <div className={styles.landlordCard}>
          <h2>
            Bathrooms for
            <br />
            Landlords & Letting Agents
          </h2>

          <p>
            We work with landlords and letting agents to provide fast,
            reliable and cost-effective bathroom installations and
            refurbishments.
          </p>

          <p>
            We understand the need for quality, durability and minimal void
            periods.
          </p>

          <ul>
            <li>Quick turnaround times</li>
            <li>Competitive rates</li>
            <li>Minimal disruption for tenants</li>
            <li>Fully managed service</li>
            <li>Detailed reports and photos</li>
            <li>Trusted by local agents</li>
          </ul>

          <Link
            href="/landlords-letting-agents"
            className={styles.landlordButton}
          >
            Find Out More →
          </Link>
        </div>
      </section>

      {/* =========================================
          PROCESS
      ========================================== */}
      <section className={styles.processSection}>
        <div className={styles.processHeading}>
          <h2>How Our Bathroom Installation Works</h2>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <div
              className={styles.processItem}
              key={step.number}
            >
              <div className={styles.processIcon}>
                {step.icon}
              </div>

              <div>
                <div className={styles.processTitle}>
                  {step.number}. {step.title}
                </div>

                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          PROJECTS + TESTIMONIAL
      ========================================== */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsColumn}>
          <div className={styles.smallHeading}>
            <h2>Recent Bathroom Projects</h2>

            <Link href="/our-work">
              View More Projects →
            </Link>
          </div>

          <div className={styles.projectGrid}>
            {recentProjects.map((project) => (
              <Link
                href="/our-work"
                className={styles.projectCard}
                key={project.title}
              >
                <img
                  src={project.image}
                  alt={project.title}
                />

                <h3>{project.title}</h3>

                <p>{project.location}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.testimonialColumn}>
          <div className={styles.smallHeading}>
            <h2>What Our Clients Say</h2>
          </div>

          <div className={styles.testimonial}>
            <div className={styles.stars}>★★★★★</div>

            <p>
              “Alpha completely transformed our old bathroom. The team were
              professional, tidy and the quality of work is excellent. Highly
              recommended!”
            </p>

            <strong>
              Homeowner, Spalding
            </strong>
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ + MAP
      ========================================== */}
      <section className={styles.bottomSection}>
        <div className={styles.faqColumn}>
          <div className={styles.smallHeading}>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <details
                className={styles.faqItem}
                key={faq.question}
              >
                <summary>
                  <span>{faq.question}</span>
                  <strong>+</strong>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className={styles.areaColumn}>
          <div className={styles.areaText}>
            <h2>⌖ Areas We Cover</h2>

            <p>
              We provide bathroom installation and refurbishment services
              across Spalding and the surrounding areas including Donington,
              Pinchbeck, Sutterton, Holbeach, Long Sutton, Crowland and many
              more.
            </p>

            <Link
              href="/areas-we-cover"
              className={styles.goldButton}
            >
              View All Areas →
            </Link>
          </div>

          {/* REAL MAP */}
          <div className={styles.mapWrapper}>
            <iframe
              title="Spalding Lincolnshire map"
              src="https://www.google.com/maps?q=Spalding%2C%20Lincolnshire%2C%20UK&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================== */}
      <Footer />
    </main>
  );
}