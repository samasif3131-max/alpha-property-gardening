"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./roofing-gutter-advice.module.css";

type Article = {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  href: string;
};

const featuredArticles: Article[] = [
  {
    title: "How Often Should You Clean Your Gutters?",
    category: "GUIDE",
    excerpt:
      "Find out how often gutters should be cleaned, why it’s important and the signs they may be blocked.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/how-often-should-you-clean-your-gutters",
  },
  {
    title: "Signs You May Have a Roof Leak",
    category: "ADVICE",
    excerpt:
      "Learn the early warning signs of a roof leak and what to do before it causes serious damage.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/signs-you-may-have-a-roof-leak",
  },
  {
    title: "What Happens if Gutters Are Blocked?",
    category: "PROBLEMS",
    excerpt:
      "Discover the common problems caused by blocked gutters and how to prevent them.",
    image:
      "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=900&q=85",
    href: "/advice/blocked-gutters",
  },
  {
    title: "Flat Roof Maintenance Checklist",
    category: "GUIDE",
    excerpt:
      "A simple checklist to keep your flat roof in good condition and spot issues early.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    href: "/advice/flat-roof-maintenance-checklist",
  },
  {
    title: "Fascias, Soffits & Bargeboards Explained",
    category: "ADVICE",
    excerpt:
      "Find out what they do, how to look after them and when they need replacing.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    href: "/advice/fascias-soffits-bargeboards",
  },
];

const roofingServices = [
  {
    title: "Gutter Cleaning",
    href: "/services/gutter-cleaning",
  },
  {
    title: "Gutter Repairs & Replacement",
    href: "/services/gutter-repairs",
  },
  {
    title: "Roof Inspections",
    href: "/services/roof-inspections",
  },
  {
    title: "Roof Repairs",
    href: "/services/roof-repairs",
  },
  {
    title: "New Roof Installations",
    href: "/services/new-roof-installations",
  },
  {
    title: "Fascias, Soffits & Bargeboards",
    href: "/services/fascias-soffits-bargeboards",
  },
  {
    title: "Downpipe Repairs",
    href: "/services/downpipe-repairs",
  },
  {
    title: "Flat Roofing",
    href: "/services/flat-roofing",
  },
  {
    title: "Chimney & Leadwork",
    href: "/services/chimney-leadwork",
  },
  {
    title: "Roofline Maintenance",
    href: "/services/roofline-maintenance",
  },
];

const relatedArticles = [
  {
    title: "How to Clear Blocked Gutters",
    href: "/advice/how-to-clear-blocked-gutters",
    image:
      "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Signs You Need a New Roof",
    href: "/advice/signs-you-need-a-new-roof",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Maintaining a Flat Roof",
    href: "/advice/maintaining-a-flat-roof",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "How to Prevent Ice Dams in Winter",
    href: "/advice/prevent-ice-dams",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Roofing for Rental Properties",
    href: "/advice/roofing-for-rental-properties",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=300&q=80",
  },
];

const faqs = [
  "How often should gutters be cleaned?",
  "What are the signs of a roof leak?",
  "Can I clean my gutters myself?",
  "How long does a roof typically last?",
  "What’s the difference between a flat roof and a pitched roof?",
];

export default function RoofingGutterAdvicePage() {
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

          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>

              <Link href="/advice">Advice Hub</Link>
              <span>›</span>

              <span>Roofing &amp; Gutters Advice</span>
            </div>

            <div className={styles.heroLabel}>
              ROOFING &amp; GUTTERS ADVICE
            </div>

            <h1>
              Roofing &amp; Gutters
              <br />
              <span>Advice</span>
            </h1>

            <p>
              Expert guidance, practical tips and useful information to help
              you look after your roof, gutters and external roofline, prevent
              problems and protect your home from costly damage.
            </p>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>⌂</div>

                <div>
                  <strong>Expert Advice</strong>
                  <span>From our team</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>🔧</div>

                <div>
                  <strong>Practical Guides</strong>
                  <span>Easy to follow</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>♢</div>

                <div>
                  <strong>Prevent Costly Damage</strong>
                  <span>Keep your property safe</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>◒</div>

                <div>
                  <strong>Longer Lasting Homes</strong>
                  <span>Maintenance matters</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroSideText}>
            <span>Protect</span>
            <span>Your Home</span>
            <span>All Year</span>
            <small>────────</small>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <section className={styles.contentSection}>
          <div className={styles.contentGrid}>
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className={styles.mainColumn}>
              <div className={styles.sectionHeading}>
                <div>
                  <h2>Featured Roofing &amp; Gutters Advice</h2>

                  <p>
                    Our most popular roofing and gutters guides to help you
                    keep your property safe, dry and in great condition.
                  </p>
                </div>

                <Link
                  href="/advice?category=Roofing%20%26%20Gutters"
                  className={styles.viewAll}
                >
                  View All Roofing Articles
                  <span>→</span>
                </Link>
              </div>

              {/* FEATURED ARTICLES */}

              <div className={styles.articleGrid}>
                {featuredArticles.map((article, index) => (
                  <Link
                    href={article.href}
                    key={article.href}
                    className={`${styles.articleCard} ${
                      index < 2 ? styles.featuredCard : ""
                    }`}
                  >
                    <div className={styles.articleImage}>
                      <img
                        src={article.image}
                        alt={article.title}
                        loading={index === 0 ? "eager" : "lazy"}
                      />

                      <span className={styles.articleTag}>
                        {article.category}
                      </span>
                    </div>

                    <div className={styles.articleBody}>
                      <h3>{article.title}</h3>

                      <p>{article.excerpt}</p>

                      <span className={styles.readMore}>
                        Read Article
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* =================================================
                  WHY SECTION
              ================================================== */}

              <section className={styles.whySection}>
                <h2>Why Roof and Gutter Maintenance Matters</h2>

                <div className={styles.whyGrid}>
                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>⌂</div>

                    <div>
                      <strong>Helps prevent</strong>
                      <span>water damage</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>£</div>

                    <div>
                      <strong>Saves money</strong>
                      <span>on major repairs</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>✓</div>

                    <div>
                      <strong>Keeps your home</strong>
                      <span>safe and secure</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>◒</div>

                    <div>
                      <strong>Increases the</strong>
                      <span>lifespan of your roof</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                  FAQ
              ================================================== */}

              <section className={styles.faqSection}>
                <h2>
                  <span className={styles.questionIcon}>?</span>
                  Frequently Asked Questions
                </h2>

                <div className={styles.faqList}>
                  {faqs.map((faq) => (
                    <details key={faq} className={styles.faqItem}>
                      <summary>
                        <span>{faq}</span>
                        <strong>+</strong>
                      </summary>

                      <div className={styles.faqAnswer}>
                        <p>
                          Regular inspection and maintenance can help identify
                          problems early and prevent more expensive repairs.
                          If you are unsure about the condition of your roof or
                          gutters, our team can provide practical advice and
                          professional assistance.
                        </p>
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
              {/* QUOTE CARD */}

              <div className={styles.helpCard}>
                <div className={styles.helpTop}>
                  <div className={styles.helpIcon}>⌂</div>

                  <div>
                    <h3>Need a Roof or Gutter Check?</h3>

                    <p>
                      Get a free, no obligation quote for roofing, guttering or
                      roofline repairs and maintenance.
                    </p>
                  </div>
                </div>

                <Link
                  href="/request-a-quote"
                  className={styles.greenButton}
                >
                  Request a Quote
                  <span>→</span>
                </Link>
              </div>

              {/* SERVICES */}

              <div className={styles.sideBlock}>
                <h3>
                  <span className={styles.sideHeadingIcon}>⚙</span>
                  Roofing &amp; Guttering Services
                </h3>

                <div className={styles.serviceList}>
                  {roofingServices.map((service) => (
                    <Link href={service.href} key={service.href}>
                      <span>{service.title}</span>
                      <strong>›</strong>
                    </Link>
                  ))}
                </div>
              </div>

              {/* PROMO */}

              <div className={styles.promoCard}>
                <div className={styles.promoOverlay} />

                <div className={styles.promoContent}>
                  <div className={styles.promoIcon}>◒</div>

                  <h3>
                    Keep Water Out
                    <br />
                    Keep Problems Away
                  </h3>

                  <p>
                    Regular roof and gutter maintenance helps prevent leaks,
                    damp and expensive repairs.
                  </p>

                  <Link
                    href="/services/roofing-gutters"
                    className={styles.promoButton}
                  >
                    View Roofing Services
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* RELATED ARTICLES */}

              <div className={styles.sideBlock}>
                <h3>
                  <span className={styles.sideHeadingIcon}>▣</span>
                  Related Articles
                </h3>

                <div className={styles.relatedList}>
                  {relatedArticles.map((article) => (
                    <Link
                      href={article.href}
                      key={article.href}
                      className={styles.relatedItem}
                    >
                      <img src={article.image} alt="" />

                      <span>{article.title}</span>

                      <strong>›</strong>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CONTACT */}

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>☎</div>

                <div>
                  <h3>Speak to Our Team</h3>

                  <p>
                    Call us on{" "}
                    <a href="tel:01234567890">01234 567890</a>
                  </p>

                  <span>We’re happy to help with any questions.</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            TRUST BAR
        ====================================================== */}

        <section className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span>♧</span>
            <strong>Trusted Local Team</strong>
          </div>

          <div className={styles.trustItem}>
            <span>☆</span>
            <strong>Quality Workmanship</strong>
          </div>

          <div className={styles.trustItem}>
            <span>◒</span>
            <strong>Helping Homes &amp; Gardens</strong>
          </div>

          <div className={styles.trustItem}>
            <span>♢</span>
            <strong>Reliable &amp; Professional</strong>
          </div>

          <div className={styles.trustItem}>
            <span>⌂</span>
            <strong>One Team. Complete Property Care.</strong>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <section className={styles.bottomCta}>
          <div>
            <span>NEED HELP WITH YOUR PROPERTY?</span>

            <h2>
              Keep Your Roof &amp; Gutters
              <br />
              in Great Condition
            </h2>

            <p>
              From routine gutter cleaning to roof repairs and maintenance,
              our local team is here to help.
            </p>
          </div>

          <div className={styles.bottomCtaActions}>
            <Link href="/request-a-quote" className={styles.ctaPrimary}>
              Request a Quote
              <span>→</span>
            </Link>

            <Link href="/contact" className={styles.ctaSecondary}>
              Contact Our Team
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}