import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./homecare-advice.module.css";

const featuredArticles = [
  {
    tag: "GUIDE",
    title: "The Ultimate Home Maintenance Checklist",
    description:
      "A room-by-room checklist to keep your home in top condition all year round.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/homecare-advice/home-maintenance-checklist",
  },
  {
    tag: "ADVICE",
    title: "How to Make Your Home More Energy Efficient",
    description:
      "Simple steps to reduce your energy bills and keep your home warmer in winter and cooler in summer.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/homecare-advice/energy-efficient-home",
  },
];

const smallArticles = [
  {
    tag: "TIPS",
    title: "How to Keep Your Home Clean and Tidy",
    description:
      "Practical cleaning tips and routines to keep your home fresh, hygienic and clutter-free.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=85",
    href: "/advice/homecare-advice/keep-home-clean-tidy",
  },
  {
    tag: "SAFETY",
    title: "Home Safety Essentials",
    description:
      "Key safety checks every home should have, from smoke alarms to carbon monoxide detectors.",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=85",
    href: "/advice/homecare-advice/home-safety-essentials",
  },
  {
    tag: "PROBLEMS",
    title: "Spotting and Preventing Damp in Your Home",
    description:
      "Learn the signs of damp, how to prevent it and when to get professional help.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=85",
    href: "/advice/homecare-advice/prevent-damp",
  },
];

const homeCareServices = [
  {
    title: "General Property Maintenance",
    href: "/property-maintenance",
  },
  {
    title: "Plumbing & Heating",
    href: "/plumbing-services",
  },
  {
    title: "Electrical Minor Works",
    href: "/property-maintenance",
  },
  {
    title: "Painting & Decorating",
    href: "/painting-decorating",
  },
  {
    title: "Flooring & Tiling",
    href: "/property-maintenance",
  },
  {
    title: "Damp Prevention & Repairs",
    href: "/property-maintenance",
  },
  {
    title: "Gutter Cleaning",
    href: "/garden-services",
  },
  {
    title: "Exterior Maintenance",
    href: "/property-maintenance",
  },
  {
    title: "Home Safety Checks",
    href: "/property-maintenance",
  },
  {
    title: "Seasonal Property Checks",
    href: "/advice/seasonal-advice",
  },
];

const relatedArticles = [
  {
    title: "How to Reduce Condensation at Home",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=300&q=80",
    href: "/advice/homecare-advice/reduce-condensation",
  },
  {
    title: "Best Paint Colours for a Brighter Home",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=300&q=80",
    href: "/advice/painting-decorating-advice",
  },
  {
    title: "Preparing Your Home for Winter",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=300&q=80",
    href: "/advice/seasonal-advice",
  },
  {
    title: "Spring Cleaning Checklist",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=300&q=80",
    href: "/advice/homecare-advice/spring-cleaning-checklist",
  },
  {
    title: "How to Keep Your Home Safe for Children",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=300&q=80",
    href: "/advice/homecare-advice/home-safety-children",
  },
];

const faqs = [
  {
    question:
      "How often should I carry out home maintenance checks?",
    answer:
      "A quick check every month is useful, with more detailed seasonal checks carried out throughout the year. Roofs, gutters, heating systems, plumbing and exterior areas should all be checked regularly.",
  },
  {
    question:
      "What are the most important safety checks for a home?",
    answer:
      "Check smoke alarms, carbon monoxide alarms, electrical fittings, locks, doors, windows, stairways and exterior lighting. Replace batteries and test alarms regularly.",
  },
  {
    question: "How can I prevent damp in my home?",
    answer:
      "Good ventilation, keeping gutters clear, fixing leaks quickly and maintaining the roof and exterior of your property can all help reduce the risk of damp.",
  },
  {
    question:
      "What’s the best way to keep my home warm in winter?",
    answer:
      "Check your heating system, improve insulation where needed, seal obvious draughts and make sure radiators and heating controls are working properly before cold weather arrives.",
  },
  {
    question:
      "How can I make my home more energy efficient?",
    answer:
      "Start with insulation, efficient heating controls, draught-proofing, LED lighting and regular maintenance of windows, doors and heating equipment.",
  },
  {
    question:
      "Do you offer regular home maintenance plans?",
    answer:
      "Yes. Our property maintenance services can help homeowners and landlords keep on top of regular repairs, inspections and seasonal maintenance.",
  },
];

export default function HomecareAdvicePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroImage} />

          <div className={styles.heroOverlay} />

          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/advice">Advice Hub</Link>
              <span>›</span>
              <span>Home Care</span>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>
                HOME CARE ADVICE
              </div>

              <h1>
                Home Care{" "}
                <span>Advice</span>
              </h1>

              <p>
                Practical guidance, useful checklists and
                expert tips to help you look after your
                home, keep it in great condition and
                prevent costly problems. Simple advice for
                a safer, cleaner, more comfortable home
                all year round.
              </p>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.heroFeatureIcon}>
                  ⌂
                </div>

                <div>
                  <strong>Practical Tips</strong>
                  <span>Easy to follow</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.heroFeatureIcon}>
                  ♢
                </div>

                <div>
                  <strong>Prevent Problems</strong>
                  <span>Save money</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.heroFeatureIcon}>
                  ♡
                </div>

                <div>
                  <strong>A Healthier Home</strong>
                  <span>For your family</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.heroFeatureIcon}>
                  ◇
                </div>

                <div>
                  <strong>Year-Round Advice</strong>
                  <span>Keep your home in top condition</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <section className={styles.contentSection}>
          <div className={styles.contentContainer}>
            {/* LEFT COLUMN */}

            <div className={styles.mainColumn}>
              {/* FEATURED */}

              <section className={styles.featuredSection}>
                <div className={styles.sectionHeading}>
                  <div>
                    <h2>Featured Home Care Advice</h2>

                    <p>
                      Our most popular home care guides to
                      help you maintain a safe, clean and
                      comfortable home.
                    </p>
                  </div>

                  <Link
                    href="/advice?category=Home%20Care"
                    className={styles.viewAllLink}
                  >
                    View All Home Care Articles
                    <span>→</span>
                  </Link>
                </div>

                <div className={styles.featuredGrid}>
                  {featuredArticles.map((article) => (
                    <article
                      key={article.href}
                      className={styles.featuredCard}
                    >
                      <Link
                        href={article.href}
                        className={styles.cardImageLink}
                      >
                        <div className={styles.cardImage}>
                          <img
                            src={article.image}
                            alt={article.title}
                          />
                        </div>
                      </Link>

                      <div className={styles.cardBody}>
                        <span className={styles.cardTag}>
                          {article.tag}
                        </span>

                        <h3>
                          <Link href={article.href}>
                            {article.title}
                          </Link>
                        </h3>

                        <p>{article.description}</p>

                        <Link
                          href={article.href}
                          className={styles.readMore}
                        >
                          Read Article
                          <span>→</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* SMALL ARTICLES */}

                <div className={styles.smallArticlesGrid}>
                  {smallArticles.map((article) => (
                    <article
                      key={article.href}
                      className={styles.smallCard}
                    >
                      <Link
                        href={article.href}
                        className={styles.cardImageLink}
                      >
                        <div className={styles.smallCardImage}>
                          <img
                            src={article.image}
                            alt={article.title}
                            loading="lazy"
                          />
                        </div>
                      </Link>

                      <div className={styles.smallCardBody}>
                        <span className={styles.cardTag}>
                          {article.tag}
                        </span>

                        <h3>
                          <Link href={article.href}>
                            {article.title}
                          </Link>
                        </h3>

                        <p>{article.description}</p>

                        <Link
                          href={article.href}
                          className={styles.readMore}
                        >
                          Read Article
                          <span>→</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* =================================================
                  WHY HOME CARE MATTERS
              ================================================== */}

              <section className={styles.whySection}>
                <h2>Why Home Care Matters</h2>

                <div className={styles.whyGrid}>
                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>
                      ⌂
                    </div>

                    <span>
                      Keeps your home
                      <strong> safe and secure</strong>
                    </span>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>
                      £
                    </div>

                    <span>
                      Helps prevent
                      <strong> costly repairs</strong>
                    </span>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>
                      ♧
                    </div>

                    <span>
                      Creates a healthier
                      <strong> environment</strong>
                    </span>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>
                      ◇
                    </div>

                    <span>
                      Maintains and
                      <strong> protects your investment</strong>
                    </span>
                  </div>
                </div>
              </section>

              {/* =================================================
                  FAQ
              ================================================== */}

              <section className={styles.faqSection}>
                <div className={styles.faqHeading}>
                  <div className={styles.faqIcon}>?</div>

                  <h2>Frequently Asked Questions</h2>
                </div>

                <div className={styles.faqList}>
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className={styles.faqItem}
                    >
                      <summary>
                        <span>{faq.question}</span>
                        <strong>+</strong>
                      </summary>

                      <div className={styles.faqAnswer}>
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className={styles.sidebar}>
              {/* HELP BOX */}

              <section className={styles.helpBox}>
                <div className={styles.helpTop}>
                  <div className={styles.helpIcon}>
                    ⌂
                  </div>

                  <div>
                    <h3>
                      Need Help with Home Maintenance?
                    </h3>

                    <p>
                      Get a free, no obligation quote for
                      repairs, improvements or ongoing
                      property maintenance.
                    </p>
                  </div>
                </div>

                <Link
                  href="/request-a-quote"
                  className={styles.sidebarQuote}
                >
                  Request a Quote
                  <span>→</span>
                </Link>
              </section>

              {/* SERVICES */}

              <section className={styles.sidebarCard}>
                <div className={styles.sidebarTitle}>
                  <div className={styles.sidebarTitleIcon}>
                    ⚙
                  </div>

                  <h3>Home Care Services</h3>
                </div>

                <div className={styles.serviceList}>
                  {homeCareServices.map((service) => (
                    <Link
                      key={service.href + service.title}
                      href={service.href}
                      className={styles.serviceListItem}
                    >
                      <span>{service.title}</span>
                      <strong>›</strong>
                    </Link>
                  ))}
                </div>
              </section>

              {/* LOOKING AFTER HOMES */}

              <section className={styles.imagePromo}>
                <div className={styles.imagePromoImage}>
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85"
                    alt="Well maintained home"
                    loading="lazy"
                  />
                </div>

                <div className={styles.imagePromoOverlay} />

                <div className={styles.imagePromoContent}>
                  <div className={styles.leafIcon}>◇</div>

                  <h3>
                    Looking After Homes
                    <br />
                    Inside and Out
                  </h3>

                  <p>
                    From small repairs to regular
                    maintenance, we help keep your home
                    safe, comfortable and looking its best
                    all year round.
                  </p>

                  <Link
                    href="/services"
                    className={styles.promoButton}
                  >
                    View Our Services
                    <span>→</span>
                  </Link>
                </div>
              </section>

              {/* RELATED */}

              <section className={styles.relatedSection}>
                <div className={styles.sidebarTitle}>
                  <div className={styles.sidebarTitleIcon}>
                    ▣
                  </div>

                  <h3>Related Articles</h3>
                </div>

                <div className={styles.relatedList}>
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.href + article.title}
                      href={article.href}
                      className={styles.relatedItem}
                    >
                      <div className={styles.relatedImage}>
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                        />
                      </div>

                      <span>{article.title}</span>

                      <strong>›</strong>
                    </Link>
                  ))}
                </div>
              </section>

              {/* CONTACT */}

              <section className={styles.contactBox}>
                <div className={styles.contactIcon}>
                  ☎
                </div>

                <div>
                  <h3>Speak to Our Team</h3>

                  <p>
                    Call us on{" "}
                    <a href="tel:01234567890">
                      01234 567890
                    </a>
                  </p>

                  <span>
                    We’re happy to help you with any
                    questions.
                  </span>
                </div>
              </section>
            </aside>
          </div>
        </section>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <section className={styles.trustStrip}>
          <div className={styles.trustContainer}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>♧</div>
              <span>Trusted Local Team</span>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>☆</div>
              <span>Quality Workmanship</span>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>◇</div>
              <span>Helping Homes &amp; Gardens</span>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>♢</div>
              <span>Reliable &amp; Professional</span>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>⌂</div>
              <span>One Team. Complete Property Care.</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className={styles.finalCta}>
          <div className={styles.finalCtaInner}>
            <div>
              <span>HOME &amp; PROPERTY CARE</span>

              <h2>
                Need Help Looking After Your Home?
              </h2>

              <p>
                From small repairs to ongoing property
                maintenance, our local team is here to
                help.
              </p>
            </div>

            <div className={styles.finalCtaButtons}>
              <Link
                href="/request-a-quote"
                className={styles.finalQuote}
              >
                Request a Quote
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className={styles.finalContact}
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}