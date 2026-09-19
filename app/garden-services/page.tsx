import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./GardenServices.module.css";

const gardenServices = [
  {
    title: "Lawn Mowing & Lawn Care",
    description:
      "Regular mowing, edging, feeding and lawn treatment to keep your grass healthy and looking its best.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Hedge Cutting & Pruning",
    description:
      "Keep your hedges, shrubs and trees tidy, safe and well-maintained.",
    image:
      "https://images.unsplash.com/photo-1599685315640-4c6f5f9b0f9a?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Garden Clearances",
    description:
      "Full or part garden clearances, removal of green waste and general tidy ups.",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Fencing & Decking",
    description:
      "New fences, fence repairs, gates, decking installation and replacements.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Patios & Landscaping",
    description:
      "Patios, paths, gravel, sleepers, raised beds and general landscaping work.",
    image:
      "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Regular Garden Maintenance",
    description:
      "Scheduled visits to keep your garden in top condition all year round. Ideal for busy homeowners, landlords and businesses.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=85",
  },
];

const benefits = [
  {
    icon: "♧",
    title: "All Types of",
    subtitle: "Garden Work",
  },
  {
    icon: "♧",
    title: "Homes, Landlords",
    subtitle: "& Businesses",
  },
  {
    icon: "✓",
    title: "Fully Insured",
    subtitle: "For your peace of mind",
  },
  {
    icon: "⌖",
    title: "Local & Trusted",
    subtitle: "Spalding and surrounding areas",
  },
  {
    icon: "☆",
    title: "5 Star Service",
    subtitle: "Hundreds of happy customers",
  },
];

const landlordBenefits = [
  "Regular maintenance visits",
  "Detailed reports & photos",
  "One-off garden clearances",
  "Competitive rates",
  "Fast, reliable service",
  "Property manager friendly",
];

const projects = [
  {
    title: "Garden Clearance",
    location: "Spalding, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Patio Installation",
    location: "Donington, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "New Fencing",
    location: "Surfleet, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Garden Transformation",
    location: "Pinchbeck, Lincolnshire",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=85",
  },
];

const faqs = [
  "Do you offer regular garden maintenance?",
  "Do you provide free quotes?",
  "Do you remove all the garden waste?",
  "What areas do you cover?",
  "Can you work at rental properties?",
  "Can you help with overgrown gardens?",
];

const processSteps = [
  {
    number: "1",
    title: "Get in Touch",
    text: "Tell us what you need.",
  },
  {
    number: "2",
    title: "Free Assessment",
    text: "We'll assess the work and provide a quote.",
  },
  {
    number: "3",
    title: "Book Your Appointment",
    text: "Choose a time that suits you.",
  },
  {
    number: "4",
    title: "We Get to Work",
    text: "Our team carries out the work to a high standard.",
  },
  {
    number: "5",
    title: "Enjoy Your Garden",
    text: "A cleaner, greener, more enjoyable outdoor space.",
  },
];

export default function GardenServicesPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
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
              <strong>Garden Services</strong>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <h1>
                  Garden Maintenance &amp;
                  <span>Gardening Services</span>
                  <small>in Spalding and Surrounding Areas</small>
                </h1>

                <p>
                  Keep your outdoor spaces looking their best with our reliable
                  and professional garden services. From regular maintenance to
                  full garden transformations, we provide high-quality,
                  affordable solutions for homes, landlords and businesses
                  across Spalding and the surrounding areas.
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

              <aside className={styles.heroPanel}>
                <ul>
                  <li>
                    <span>✓</span>
                    Regular &amp; One-Off Garden Work
                  </li>
                  <li>
                    <span>✓</span>
                    Garden Clearances
                  </li>
                  <li>
                    <span>✓</span>
                    Hedge Cutting &amp; Tree Work
                  </li>
                  <li>
                    <span>✓</span>
                    Fencing &amp; Decking
                  </li>
                  <li>
                    <span>✓</span>
                    Patios, Paths &amp; Landscaping
                  </li>
                  <li>
                    <span>✓</span>
                    Landlord Garden Maintenance
                  </li>
                </ul>

                <div className={styles.panelQuote}>
                  A Cleaner Greener
                  <br />
                  Brighter Tomorrow
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* BENEFITS BAR */}
        <section className={styles.benefitBar}>
          <div className={styles.container}>
            <div className={styles.benefitGrid}>
              {benefits.map((benefit) => (
                <div className={styles.benefitItem} key={benefit.title}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>

                  <div>
                    <strong>{benefit.title}</strong>
                    <span>{benefit.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN SERVICES */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.servicesLayout}>
              <div>
                <div className={styles.sectionHeading}>
                  <span>OUR GARDEN SERVICES</span>

                  <h2>
                    Our Garden Services
                    <i />
                  </h2>

                  <p>
                    We offer a complete range of garden maintenance and outdoor
                    services to keep your property looking great all year
                    round.
                  </p>
                </div>

                <div className={styles.servicesGrid}>
                  {gardenServices.map((service) => (
                    <article
                      className={styles.serviceCard}
                      key={service.title}
                    >
                      <div
                        className={styles.serviceImage}
                        style={{
                          backgroundImage: `url("${service.image}")`,
                        }}
                      />

                      <div className={styles.serviceCardContent}>
                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                        <Link
                          href="/contact"
                          className={styles.learnMore}
                        >
                          Learn More <span>→</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* QUOTE FORM */}
              <aside className={styles.quoteCard}>
                <div className={styles.quoteHeader}>
                  <h2>Get a Free Garden Quote</h2>
                </div>

                <form className={styles.quoteForm}>
                  <input type="text" placeholder="Name *" />
                  <input type="tel" placeholder="Phone *" />
                  <input type="email" placeholder="Email *" />
                  <input type="text" placeholder="Postcode *" />

                  <select defaultValue="">
                    <option value="" disabled>
                      Type of Work Required
                    </option>
                    <option value="maintenance">
                      Garden Maintenance
                    </option>
                    <option value="clearance">Garden Clearance</option>
                    <option value="fencing">Fencing & Decking</option>
                    <option value="landscaping">
                      Patios & Landscaping
                    </option>
                  </select>

                  <select defaultValue="">
                    <option value="" disabled>
                      Please select
                    </option>
                    <option value="home">Home</option>
                    <option value="landlord">Landlord</option>
                    <option value="business">Business</option>
                  </select>

                  <textarea
                    placeholder="Tell us more (optional)"
                    rows={4}
                  />

                  <button type="submit">
                    Request My Free Quote <span>→</span>
                  </button>
                </form>

                <div className={styles.quoteFeatures}>
                  <div>
                    <span>✓</span>
                    <small>No obligation</small>
                  </div>

                  <div>
                    <span>✓</span>
                    <small>Quick response</small>
                  </div>

                  <div>
                    <span>⌖</span>
                    <small>Local team</small>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* LANDLORDS */}
        <section className={styles.landlordSection}>
          <div className={styles.landlordImage} />

          <div className={styles.landlordContent}>
            <span className={styles.goldLabel}>
              LANDLORDS &amp; LETTING AGENTS
            </span>

            <h2>
              Garden Maintenance for Landlords
              <br />
              &amp; Letting Agents
            </h2>

            <p>
              We help landlords and letting agents keep their properties
              well-maintained, tidy and tenant-ready. We can work on a one-off
              basis or provide regular scheduled garden maintenance for your
              portfolio.
            </p>

            <div className={styles.landlordBenefits}>
              {landlordBenefits.map((item) => (
                <div key={item}>
                  <span>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <Link href="/landlords-letting-agents" className={styles.goldButton}>
              Find Out More <span>→</span>
            </Link>
          </div>

          <div className={styles.processCard}>
            <h2>How Our Garden Service Works</h2>

            {processSteps.map((step) => (
              <div className={styles.processItem} key={step.number}>
                <span className={styles.processNumber}>{step.number}</span>

                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeadingRow}>
              <div className={styles.sectionHeading}>
                <span>OUR WORK</span>

                <h2>
                  Recent Garden Projects
                  <i />
                </h2>

                <p>See the transformation in our recent work.</p>
              </div>

              <Link href="/our-work" className={styles.topLink}>
                View More Projects <span>→</span>
              </Link>
            </div>

            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <article className={styles.projectCard} key={project.title}>
                  <div
                    className={styles.projectImage}
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                  >
                    <span>Before</span>
                    <span>After</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ + AREAS */}
        <section className={styles.faqAreaSection}>
          <div className={styles.container}>
            <div className={styles.faqAreaGrid}>
              <div>
                <div className={styles.sectionHeading}>
                  <span>FAQ</span>

                  <h2>
                    Frequently Asked Questions
                    <i />
                  </h2>
                </div>

                <div className={styles.faqGrid}>
                  {faqs.map((faq) => (
                    <details className={styles.faqItem} key={faq}>
                      <summary>
                        {faq}
                        <span>+</span>
                      </summary>

                      <p>
                        Please contact our friendly team and we will be happy
                        to discuss this with you and provide the relevant
                        information.
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              <div className={styles.areasCard}>
                <div className={styles.areasText}>
                  <span>AREAS WE COVER</span>

                  <h2>Spalding &amp; Surrounding Areas</h2>

                  <p>
                    We provide garden services across Spalding and the
                    surrounding areas including Donington, Pinchbeck, Surfleet,
                    Holbeach, Long Sutton, Crowland and many more.
                  </p>

                  <Link href="/areas-we-cover" className={styles.goldButton}>
                    View All Areas <span>→</span>
                  </Link>
                </div>

                <div className={styles.map}>
                  <span className={styles.mapTownOne}>Long Sutton</span>
                  <span className={styles.mapTownTwo}>Holbeach</span>
                  <span className={styles.mapTownThree}>Crowland</span>
                  <span className={styles.mapTownFour}>Donington</span>

                  <div className={styles.mapPin}>
                    <span>●</span>
                    <strong>Spalding</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <div>
                <span>READY TO GET STARTED?</span>

                <h2>Ready for a Cleaner, Greener Garden?</h2>

                <p>
                  Get in touch today for a free, no-obligation quote. Our
                  friendly team is here to help with all your garden needs.
                </p>
              </div>

              <div className={styles.finalButtons}>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}