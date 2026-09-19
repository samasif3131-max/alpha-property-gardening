import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./services.module.css";

const services = [
  {
    title: "Garden Services",
    description:
      "Lawn care, hedge trimming, fencing, planting, clearances and more.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85",
    icon: "♧",
    href: "/garden-services",
    linkText: "View Garden Services",
  },
  {
    title: "Property Maintenance",
    description:
      "General repairs, painting, decorating, joinery, doors, windows and more.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    icon: "⚙",
    href: "/property-maintenance",
    linkText: "View Property Maintenance",
  },
  {
    title: "Plumbing",
    description:
      "Repairs, installations, leak fixes and full bathroom plumbing.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=85",
    icon: "◉",
    href: "/plumbing-services",
    linkText: "View Plumbing Services",
  },
  {
    title: "Bathrooms",
    description:
      "Complete bathroom installations and refurbishments.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    icon: "▱",
    href: "/bathroom-services",
    linkText: "View Bathroom Services",
  },
  {
    title: "Kitchens",
    description:
      "Design, supply and installation of high-quality kitchens.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    icon: "▣",
    href: "/kitchen-services",
    linkText: "View Kitchen Services",
  },
  {
    title: "Tiling & Flooring",
    description:
      "Professional wall and floor tiling, vinyl, laminate and more.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    icon: "▤",
    href: "/tiling-flooring",
    linkText: "View Tiling & Flooring",
  },
  {
    title: "Roofing & Gutters",
    description:
      "Repairs, gutter clearing, replacements and general roof maintenance.",
    image:
      "https://images.unsplash.com/photo-1520981825232-ece5fae45120?auto=format&fit=crop&w=1200&q=85",
    icon: "⌂",
    href: "/roofing-gutters",
    linkText: "View Roofing Services",
  },
  {
    title: "Landlords & Letting Agents",
    description:
      "Reliable property maintenance and compliance support.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
    icon: "♧",
    href: "/landlords-letting-agents",
    linkText: "View Landlord Services",
  },
];

const benefitsLeft = [
  "One team for all trades",
  "Experienced, trusted and local",
  "High quality workmanship",
];

const benefitsRight = [
  "Clear and competitive pricing",
  "Fast and reliable response times",
  "Fully insured for your peace of mind",
];

const processSteps = [
  {
    number: "1",
    icon: "○",
    title: "Get in Touch",
    text: "Call, email or use our online form.",
  },
  {
    number: "2",
    icon: "▣",
    title: "Free Quote",
    text: "We'll discuss your needs and provide a no-obligation quote.",
  },
  {
    number: "3",
    icon: "⚒",
    title: "We Get to Work",
    text: "Our skilled team completes the work to a high standard.",
  },
  {
    number: "4",
    icon: "✓",
    title: "Enjoy the Results",
    text: "A well-maintained property or garden, built to last.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroBackground} />

          <div className={styles.heroContainer}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span>Our Services</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.heroLabel}>
                  <span>OUR SERVICES</span>
                  <i />
                </div>

                <h1>Our Services</h1>

                <h2>
                  One Team. Complete
                  <br />
                  Property Care.
                </h2>

                <p>
                  A complete range of property and garden services for
                  homeowners, landlords, letting agents and businesses across
                  Spalding and surrounding areas.
                </p>

                <div className={styles.heroActions}>
                  <Link
                    href="/contact"
                    className={styles.goldButton}
                  >
                    Request a Free Quote
                    <span>→</span>
                  </Link>

                  <a
                    href="tel:01234567890"
                    className={styles.darkButton}
                  >
                    <span>⌕</span>
                    Call 01234 567890
                  </a>
                </div>
              </div>

              <div className={styles.heroVehicle}>
                <div className={styles.heroVehicleImage} />
              </div>

              <div className={styles.heroBenefits}>
                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>⌂</span>

                  <div>
                    <strong>One Team</strong>
                    <small>All Trades Covered</small>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>✓</span>

                  <div>
                    <strong>Reliable & Professional</strong>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>£</span>

                  <div>
                    <strong>Competitive Pricing</strong>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>♧</span>

                  <div>
                    <strong>High Quality Workmanship</strong>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>♧</span>

                  <div>
                    <strong>Homeowners, Landlords</strong>
                    <small>& Businesses</small>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>⌖</span>

                  <div>
                    <strong>Local to Spalding</strong>
                    <small>and Surrounding Areas</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className={styles.servicesSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.servicesHeading}>
              <div>
                <div className={styles.sectionLabel}>
                  <span>OUR SERVICES</span>
                  <i />
                </div>

                <h2>
                  Everything You Need, All in One Place
                </h2>

                <p>
                  From garden maintenance to full property refurbishments, we
                  provide a complete range of services to keep your home or
                  rental property in the best possible condition. No need to
                  juggle multiple contractors — Alpha does it all.
                </p>
              </div>

              <div className={styles.headingQuote}>
                <span>“</span>

                <p>
                  One Team.
                  <br />
                  Complete Property Care.
                </p>

                <i />
              </div>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <Link
                  href={service.href}
                  className={styles.serviceCard}
                  key={service.title}
                >
                  <div className={styles.serviceImage}>
                    <div
                      className={styles.serviceImageBackground}
                      style={{
                        backgroundImage: `url("${service.image}")`,
                      }}
                    />

                    <div className={styles.serviceIcon}>
                      {service.icon}
                    </div>

                    <div className={styles.serviceRoundArrow}>
                      →
                    </div>
                  </div>

                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className={styles.serviceLink}>
                      {service.linkText}
                      <b>→</b>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY CHOOSE ALPHA
        ===================================================== */}

        <section className={styles.whySection}>
          <div className={styles.whyLeaves} />

          <div className={styles.whyContainer}>
            <div className={styles.whyTitle}>
              <h2>Why Choose Alpha?</h2>
            </div>

            <div className={styles.whyColumns}>
              <div>
                {benefitsLeft.map((benefit) => (
                  <div
                    className={styles.whyItem}
                    key={benefit}
                  >
                    <span>✓</span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>

              <div>
                {benefitsRight.map((benefit) => (
                  <div
                    className={styles.whyItem}
                    key={benefit}
                  >
                    <span>✓</span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.whyQuote}>
              <p>
                A Cleaner Greener
                <br />
                <strong>Brighter Tomorrow</strong>
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className={styles.processSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.processIntro}>
              <div className={styles.sectionLabel}>
                <span>HOW IT WORKS</span>
                <i />
              </div>

              <h2>A Simple 4 Step Process</h2>

              <p>
                Getting your property or garden project started is easy with
                Alpha.
              </p>
            </div>

            <div className={styles.processGrid}>
              {processSteps.map((step, index) => (
                <div
                  className={styles.processStep}
                  key={step.number}
                >
                  <div className={styles.processIcon}>
                    <span>{step.icon}</span>
                  </div>

                  <div className={styles.processText}>
                    <h3>
                      {step.number}. {step.title}
                    </h3>

                    <p>{step.text}</p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className={styles.processArrow}>
                      ›
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TESTIMONIAL / CTA / AREAS
        ===================================================== */}

        <section className={styles.bottomSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.bottomGrid}>
              <div className={styles.testimonialBox}>
                <h2>What Our Clients Say</h2>

                <div className={styles.testimonialCard}>
                  <div className={styles.stars}>
                    ★★★★★
                  </div>

                  <p>
                    "Alpha have transformed our garden and also carried out
                    repairs around the house. Great communication, reliable
                    and high quality work. Highly recommend!"
                  </p>

                  <strong>Homeowner, Spalding</strong>

                  <div className={styles.testimonialDots}>
                    <span className={styles.activeDot} />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <div className={styles.ctaCard}>
                <h2>Ready to Get Started?</h2>

                <p>
                  Request a free, no-obligation quote today.
                  <br />
                  Our friendly team is here to help.
                </p>

                <Link
                  href="/contact"
                  className={styles.ctaQuoteButton}
                >
                  Request a Free Quote
                  <span>→</span>
                </Link>

                <a
                  href="tel:01234567890"
                  className={styles.ctaCallButton}
                >
                  <span>⌕</span>
                  Call 01234 567890
                </a>
              </div>

              <div className={styles.areasCard}>
                <div className={styles.areasContent}>
                  <div className={styles.areasTitle}>
                    <span>⌖</span>
                    <h2>Areas We Cover</h2>
                  </div>

                  <p>
                    We provide all of our services across Spalding and the
                    surrounding areas including Donington, Pinchbeck,
                    Surfleet, Holbeach, Long Sutton, Crowland and more.
                  </p>

                  <Link
                    href="/areas-we-cover"
                    className={styles.areaButton}
                  >
                    View All Areas
                    <span>→</span>
                  </Link>
                </div>

                <div className={styles.mapImage}>
                  <div
                    className={`${styles.mapLabel} ${styles.mapOne}`}
                  >
                    Long Sutton
                  </div>

                  <div
                    className={`${styles.mapLabel} ${styles.mapTwo}`}
                  >
                    Holbeach
                  </div>

                  <div
                    className={`${styles.mapLabel} ${styles.mapThree}`}
                  >
                    Spalding
                  </div>

                  <div
                    className={`${styles.mapLabel} ${styles.mapFour}`}
                  >
                    Pinchbeck
                  </div>

                  <div
                    className={`${styles.mapLabel} ${styles.mapFive}`}
                  >
                    Donington
                  </div>

                  <div
                    className={`${styles.mapLabel} ${styles.mapSix}`}
                  >
                    Crowland
                  </div>

                  <div className={styles.mapPin}>●</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}