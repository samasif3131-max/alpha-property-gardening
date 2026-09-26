"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./seasonal-advice.module.css";

const featuredArticles = [
  {
    tag: "SPRING",
    title: "Spring Garden Checklist",
    description:
      "Get your garden ready for the year ahead with our complete spring checklist.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/spring-garden-checklist",
  },
  {
    tag: "SUMMER",
    title: "How to Keep Your Garden Cool in Summer",
    description:
      "Practical tips to keep your outdoor spaces cool, comfortable and looking their best during hot weather.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/how-to-keep-your-garden-cool-in-summer",
  },
  {
    tag: "AUTUMN",
    title: "Prepare Your Home for Autumn",
    description:
      "Essential maintenance tasks to protect your property from the changing weather.",
    image:
      "https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/prepare-your-home-for-autumn",
  },
  {
    tag: "WINTER",
    title: "Winter Home Preparation Guide",
    description:
      "Keep your property safe and warm with our expert winter maintenance tips and checklist.",
    image:
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/winter-home-preparation-guide",
  },
];

const seasonalServices = [
  {
    title: "Spring Garden Preparation",
    href: "/garden-services",
  },
  {
    title: "Summer Garden Maintenance",
    href: "/garden-services",
  },
  {
    title: "Autumn Property Checks",
    href: "/property-maintenance",
  },
  {
    title: "Winter Weatherproofing",
    href: "/property-maintenance",
  },
  {
    title: "Gutter Cleaning (Autumn/Winter)",
    href: "/roofing-and-gutter-services",
  },
  {
    title: "Fence & Decking Care",
    href: "/fencing-and-decking-services",
  },
  {
    title: "Driveway & Patio Maintenance",
    href: "/garden-services",
  },
  {
    title: "Roof Checks",
    href: "/roofing-and-gutter-services",
  },
  {
    title: "Heating & Plumbing Checks",
    href: "/plumbing-services",
  },
  {
    title: "Storm Damage Repairs",
    href: "/property-maintenance",
  },
];

const relatedArticles = [
  {
    title: "When to Cut Your Hedge Each Year",
    href: "/advice/when-to-cut-your-hedge",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "How to Protect Plants from Frost",
    href: "/advice/how-to-protect-plants-from-frost",
    image:
      "https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "End of Summer Garden Tidy Guide",
    href: "/advice/end-of-summer-garden-tidy",
    image:
      "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Preparing Your Gutters for Winter",
    href: "/advice/preparing-your-gutters-for-winter",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Spring Cleaning for Your Home",
    href: "/advice/spring-cleaning-for-your-home",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80",
  },
];

const faqs = [
  "When should I start preparing my garden for spring?",
  "What maintenance should I do on my home in autumn?",
  "How can I protect my garden plants in winter?",
  "When is the best time to clean gutters?",
  "What should I include in a seasonal property check?",
  "Can you carry out seasonal maintenance for me?",
];

export default function SeasonalAdvicePage() {
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
              <span>Seasonal Advice</span>
            </div>

            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>
                SEASONAL ADVICE
              </span>

              <h1>
                Seasonal <span>Advice</span>
              </h1>

              <p>
                Year-round tips, checklists and expert advice to help you
                keep your property and garden in top condition through every
                season. From spring clean-ups to winter preparation, we&apos;ve
                got you covered.
              </p>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>◒</div>

                <div>
                  <strong>Spring</strong>
                  <small>Prepare &amp; Refresh</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>☼</div>

                <div>
                  <strong>Summer</strong>
                  <small>Maintain &amp; Enjoy</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>✦</div>

                <div>
                  <strong>Autumn</strong>
                  <small>Protect &amp; Prepare</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>❄</div>

                <div>
                  <strong>Winter</strong>
                  <small>Stay Safe &amp; Secure</small>
                </div>
              </div>
            </div>

            <div className={styles.heroSideText}>
              <span>All Year</span>
              <strong>Property Care</strong>
            </div>
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
                  <h2>Featured Seasonal Advice</h2>

                  <p>
                    Our most popular seasonal guides to help you prepare,
                    maintain and protect your property all year round.
                  </p>
                </div>

                <Link
                  href="/advice?category=Seasonal%20Advice"
                  className={styles.viewAll}
                >
                  View All Seasonal Articles
                  <span>→</span>
                </Link>
              </div>

              {/* FEATURED ARTICLES */}

              <div className={styles.featuredGrid}>
                {featuredArticles.map((article) => (
                  <article
                    key={article.href}
                    className={styles.articleCard}
                  >
                    <Link
                      href={article.href}
                      className={styles.articleImageLink}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className={styles.articleImage}
                      />

                      <span className={styles.articleTag}>
                        {article.tag}
                      </span>
                    </Link>

                    <div className={styles.articleBody}>
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

              {/* =================================================
                  QUICK SEASONAL TIPS
              ================================================== */}

              <section className={styles.quickTips}>
                <h2>Quick Seasonal Tips</h2>

                <div className={styles.quickTipsGrid}>
                  <div className={styles.quickTip}>
                    <div className={`${styles.seasonCircle} ${styles.spring}`}>
                      ◒
                    </div>

                    <div>
                      <strong>SPRING</strong>
                      <span>Refresh &amp; prepare</span>
                    </div>
                  </div>

                  <div className={styles.quickTip}>
                    <div className={`${styles.seasonCircle} ${styles.summer}`}>
                      ☼
                    </div>

                    <div>
                      <strong>SUMMER</strong>
                      <span>Maintain &amp; enjoy</span>
                    </div>
                  </div>

                  <div className={styles.quickTip}>
                    <div className={`${styles.seasonCircle} ${styles.autumn}`}>
                      ✦
                    </div>

                    <div>
                      <strong>AUTUMN</strong>
                      <span>Protect &amp; prepare</span>
                    </div>
                  </div>

                  <div className={styles.quickTip}>
                    <div className={`${styles.seasonCircle} ${styles.winter}`}>
                      ❄
                    </div>

                    <div>
                      <strong>WINTER</strong>
                      <span>Stay safe &amp; secure</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                  FAQ
              ================================================== */}

              <section className={styles.faqSection}>
                <div className={styles.faqTitle}>
                  <span>?</span>
                  <h2>Frequently Asked Questions</h2>
                </div>

                <div className={styles.faqList}>
                  {faqs.map((faq) => (
                    <details key={faq} className={styles.faqItem}>
                      <summary>
                        <span>{faq}</span>
                        <b>+</b>
                      </summary>

                      <div className={styles.faqAnswer}>
                        <p>
                          Our team can provide practical seasonal advice and
                          professional maintenance to help keep your property
                          safe, tidy and in excellent condition throughout the
                          year.
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
              {/* HELP BOX */}

              <div className={styles.helpBox}>
                <div className={styles.helpTop}>
                  <div className={styles.helpIcon}>▣</div>

                  <div>
                    <h3>Need Seasonal Maintenance?</h3>

                    <p>
                      Get a free, no obligation quote for seasonal property
                      or garden maintenance.
                    </p>
                  </div>
                </div>

                <Link
                  href="/request-a-quote"
                  className={styles.helpButton}
                >
                  Request a Quote
                  <span>→</span>
                </Link>
              </div>

              {/* SEASONAL SERVICES */}

              <div className={styles.sidebarBox}>
                <div className={styles.sidebarTitle}>
                  <span className={styles.sidebarTitleIcon}>⚙</span>
                  <h3>Seasonal Services</h3>
                </div>

                <div className={styles.serviceList}>
                  {seasonalServices.map((service) => (
                    <Link
                      href={service.href}
                      key={service.title}
                      className={styles.serviceItem}
                    >
                      <span>{service.title}</span>
                      <b>›</b>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SIDEBAR CTA IMAGE */}

              <div className={styles.sidebarImageCard}>
                <img
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1000&q=85"
                  alt="Garden and property care"
                />

                <div className={styles.sidebarImageOverlay} />

                <div className={styles.sidebarImageContent}>
                  <span className={styles.leafIcon}>◢</span>

                  <h3>
                    Keep Your Property
                    <br />
                    in Top Condition All Year
                  </h3>

                  <p>
                    Regular seasonal maintenance helps prevent costly repairs
                    and keeps your home and garden looking their best,
                    whatever the weather.
                  </p>

                  <Link
                    href="/services"
                    className={styles.greenButton}
                  >
                    View Our Services
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* RELATED ARTICLES */}

              <div className={styles.sidebarBox}>
                <div className={styles.sidebarTitle}>
                  <span className={styles.sidebarTitleIcon}>▣</span>
                  <h3>Related Articles</h3>
                </div>

                <div className={styles.relatedList}>
                  {relatedArticles.map((article) => (
                    <Link
                      href={article.href}
                      key={article.href}
                      className={styles.relatedItem}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                      />

                      <span>{article.title}</span>

                      <b>›</b>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CONTACT BOX */}

              <div className={styles.contactBox}>
                <div className={styles.contactIcon}>☎</div>

                <div>
                  <h3>Speak to Our Team</h3>

                  <p>
                    Call us on{" "}
                    <a href="tel:01234567890">
                      01234 567890
                    </a>
                  </p>

                  <span>
                    We&apos;re happy to help with any questions.
                  </span>
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
            <span>◢</span>
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
            <span>SEASONAL PROPERTY CARE</span>

            <h2>
              Ready to Keep Your Property in Great Condition?
            </h2>

            <p>
              From garden preparation to winter property checks, our local
              team can help throughout the year.
            </p>
          </div>

          <Link
            href="/request-a-quote"
            className={styles.bottomCtaButton}
          >
            Request a Quote
            <span>→</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}