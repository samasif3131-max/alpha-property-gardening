"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./LandlordsLettingAgents.module.css";

const services = [
  {
    number: "01",
    icon: "🏠",
    title: "Property Maintenance",
    text: "Reliable maintenance solutions to keep rental properties safe, presentable and running smoothly.",
  },
  {
    number: "02",
    icon: "🔧",
    title: "Repairs & Handyman",
    text: "From small repairs to general property works, our team helps you deal with maintenance quickly.",
  },
  {
    number: "03",
    icon: "🌿",
    title: "Garden Maintenance",
    text: "Professional garden and outdoor maintenance to keep properties looking clean and well presented.",
  },
  {
    number: "04",
    icon: "✨",
    title: "End of Tenancy",
    text: "Get properties ready for their next tenants with practical maintenance, cleaning and improvement work.",
  },
  {
    number: "05",
    icon: "🚪",
    title: "Void Property Works",
    text: "Efficient works during vacant periods to help bring properties back to a clean, attractive condition.",
  },
  {
    number: "06",
    icon: "⚡",
    title: "Urgent Maintenance",
    text: "Responsive support for urgent property maintenance issues that need attention without unnecessary delays.",
  },
];

const benefits = [
  "Reliable and professional service",
  "Clear communication throughout",
  "Flexible maintenance support",
  "Attention to detail",
  "Practical solutions for rental properties",
  "Support for ongoing property upkeep",
];

const process = [
  {
    number: "01",
    title: "Tell Us What You Need",
    text: "Share your property requirements and the type of maintenance or work you need.",
  },
  {
    number: "02",
    title: "We Assess The Work",
    text: "We review the requirements and arrange the appropriate service for your property.",
  },
  {
    number: "03",
    title: "Work Is Completed",
    text: "Our team carries out the agreed work with care, professionalism and attention to detail.",
  },
];

export default function LandlordsLettingAgentsPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroPattern} />

          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowLine} />
                  PROPERTY PROFESSIONALS
                </div>

                <h1>
                  Property Maintenance
                  <span> Made Simple.</span>
                </h1>

                <p className={styles.heroText}>
                  Reliable property and gardening services for landlords and
                  letting agents who need their properties maintained,
                  presented and looked after.
                </p>

                <div className={styles.heroActions}>
                  <a href="/contact" className={styles.primaryButton}>
                    Get a Quote
                    <span>→</span>
                  </a>

                  <a href="#services" className={styles.secondaryButton}>
                    Explore Services
                  </a>
                </div>

                <div className={styles.heroTrust}>
                  <div className={styles.trustItem}>
                    <span className={styles.check}>✓</span>
                    Reliable Service
                  </div>

                  <div className={styles.trustItem}>
                    <span className={styles.check}>✓</span>
                    Professional Team
                  </div>

                  <div className={styles.trustItem}>
                    <span className={styles.check}>✓</span>
                    Flexible Support
                  </div>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageCard}>
                  <div className={styles.imagePlaceholder}>
                    <span>🏡</span>
                    <strong>Property Care</strong>
                    <small>Maintenance • Gardens • Repairs</small>
                  </div>

                  <div className={styles.floatingCard}>
                    <div className={styles.floatingIcon}>✓</div>
                    <div>
                      <strong>Trusted Support</strong>
                      <span>For rental properties</span>
                    </div>
                  </div>
                </div>

                <div className={styles.circleDecoration} />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div>
                <div className={styles.sectionEyebrow}>
                  <span />
                  LANDLORD & LETTING AGENT SUPPORT
                </div>

                <h2>
                  Keep Your Properties
                  <br />
                  <span>Looking Their Best.</span>
                </h2>
              </div>

              <div className={styles.introText}>
                <p>
                  Managing rental properties takes time. We provide practical
                  property maintenance and gardening support designed to make
                  looking after your properties easier.
                </p>

                <p>
                  Whether you need regular upkeep, repairs between tenancies
                  or help preparing a property for new tenants, our team can
                  provide dependable support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <div className={styles.sectionEyebrow}>
                  <span />
                  OUR SERVICES
                </div>

                <h2>
                  Practical Services For
                  <br />
                  <span>Rental Properties.</span>
                </h2>
              </div>

              <p>
                Flexible support for landlords, letting agents and property
                professionals.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <article key={service.number} className={styles.serviceCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardNumber}>
                      {service.number}
                    </span>

                    <div className={styles.serviceIcon}>{service.icon}</div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>

                    <a href="/contact" className={styles.cardLink}>
                      Enquire Now <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.benefitsBox}>
              <div className={styles.benefitsVisual}>
                <div className={styles.visualCircle}>
                  <span>🏠</span>
                </div>

                <div className={styles.visualBadge}>
                  <strong>Property</strong>
                  <span>Care Partner</span>
                </div>
              </div>

              <div className={styles.benefitsContent}>
                <div className={styles.sectionEyebrow}>
                  <span />
                  WHY WORK WITH US
                </div>

                <h2>
                  One Reliable Team
                  <br />
                  <span>For Your Properties.</span>
                </h2>

                <p>
                  We understand that landlords and letting agents need
                  dependable people who can take care of maintenance without
                  adding unnecessary hassle.
                </p>

                <div className={styles.benefitsList}>
                  {benefits.map((benefit) => (
                    <div key={benefit} className={styles.benefitItem}>
                      <span>✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>

                <a href="/contact" className={styles.darkButton}>
                  Talk To Our Team
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.processHeader}>
              <div className={styles.sectionEyebrow}>
                <span />
                HOW IT WORKS
              </div>

              <h2>
                Simple. Clear.
                <br />
                <span>Professional.</span>
              </h2>
            </div>

            <div className={styles.processGrid}>
              {process.map((item, index) => (
                <div className={styles.processItem} key={item.number}>
                  <div className={styles.processNumber}>{item.number}</div>

                  <div className={styles.processBody}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  {index < process.length - 1 && (
                    <div className={styles.processArrow}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaPattern} />

          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaDot} />

              <div>
                <div className={styles.ctaEyebrow}>
                  LET'S LOOK AFTER YOUR PROPERTY
                </div>

                <h2>
                  Need A Reliable
                  <br />
                  <span>Property Maintenance Partner?</span>
                </h2>

                <p>
                  Get in touch with our team to discuss your property
                  maintenance requirements.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <a href="/contact" className={styles.ctaButton}>
                  Request a Quote
                  <span>→</span>
                </a>

                <a href="tel:+440000000000" className={styles.phoneLink}>
                  <span className={styles.phoneIcon}>☎</span>
                  <span>
                    <small>Prefer to call?</small>
                    <strong>Speak to our team</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}