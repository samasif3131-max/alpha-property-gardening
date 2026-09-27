"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./PropertyMaintenanceAdvice.module.css";

const featuredArticles = [
  {
    tag: "GUIDE",
    title: "Essential Home Maintenance Checklist",
    text: "A complete seasonal checklist to keep your property in top condition all year round.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/property-maintenance-advice/home-maintenance-checklist",
  },
  {
    tag: "ADVICE",
    title: "Signs Your Property Needs Repair Work",
    text: "Spot the early warning signs before small issues turn into expensive repairs.",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/property-maintenance-advice/signs-property-needs-repair",
  },
];

const articles = [
  {
    tag: "PROBLEMS",
    title: "Common Maintenance Problems in Older Homes",
    text: "From damp to roof issues, discover the most common problems and how to deal with them.",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=800&q=85",
    href: "/advice/property-maintenance-advice/older-home-problems",
  },
  {
    tag: "SEASONAL",
    title: "Preparing Your Home for Winter",
    text: "Practical steps to protect your property during colder months and harsher weather.",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=85",
    href: "/advice/property-maintenance-advice/preparing-for-winter",
  },
  {
    tag: "LANDLORDS",
    title: "End-of-Tenancy Maintenance Checklist",
    text: "Make sure your property is ready for new tenants with our simple step-by-step guide.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85",
    href: "/advice/property-maintenance-advice/end-of-tenancy-checklist",
  },
];

const topics = [
  "Home maintenance checklist",
  "Signs of repair work",
  "Preventing damp",
  "Preparing for winter",
  "Exterior maintenance",
  "Common problems in older homes",
  "DIY vs professional repairs",
  "Landlord maintenance",
];

const services = [
  {
    name: "Property Maintenance",
    href: "/property-maintenance",
  },
  {
    name: "Plumbing",
    href: "/plumbing-services",
  },
  {
    name: "Roofing & Gutters",
    href: "/roofing-gutters",
  },
  {
    name: "Painting & Decorating",
    href: "/advice/painting-decorating-advice",
  },
  {
    name: "Kitchens & Bathrooms",
    href: "/kitchen-services",
  },
];

const faqs = [
  "How often should I carry out property maintenance?",
  "What are the most common property maintenance issues?",
  "Can you help with small repairs?",
  "Do you work with landlords and letting agents?",
  "How much does property maintenance typically cost?",
];

function CheckIcon() {
  return <span className={styles.checkIcon}>✓</span>;
}

export default function PropertyMaintenanceAdvicePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroImage} />

          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/advice">Advice Hub</Link>
              <span>›</span>
              <span>Property Maintenance</span>
            </div>

            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <h1>
                  Property Maintenance
                  <br />
                  <span>Advice</span>
                </h1>

                <p>
                  Helpful guides, checklists and expert advice to help you keep
                  your home in great condition, prevent costly repairs and
                  protect your property for the long term.
                </p>
              </div>

              <div className={styles.heroMessage}>
                <strong>Maintain Today</strong>
                <strong>Avoid Bigger</strong>
                <strong>Repairs Tomorrow</strong>
                <i />
              </div>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>⌂</div>
                <div>
                  <strong>Practical Guides</strong>
                  <span>Easy to follow</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>⚒</div>
                <div>
                  <strong>Expert Advice</strong>
                  <span>From our team</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>♢</div>
                <div>
                  <strong>Save Time & Money</strong>
                  <span>Prevent costly repairs</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>🍃</div>
                <div>
                  <strong>Trusted Local Team</strong>
                  <span>Based in Spalding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className={styles.contentSection}>
          <div className={styles.mainGrid}>
            {/* LEFT */}
            <div className={styles.leftColumn}>
              <div className={styles.sectionHeading}>
                <div>
                  <h2>Featured Property Maintenance Advice</h2>
                  <p>
                    Our most popular guides to help you keep your home safe,
                    functional and looking its best.
                  </p>
                </div>

                <Link href="/advice" className={styles.viewAll}>
                  View All Property Articles <span>→</span>
                </Link>
              </div>

              {/* FEATURED */}
              <div className={styles.featuredGrid}>
                {featuredArticles.map((article) => (
                  <article className={styles.featuredCard} key={article.title}>
                    <Link href={article.href}>
                      <img src={article.image} alt={article.title} />
                    </Link>

                    <div className={styles.cardBody}>
                      <span className={styles.tag}>{article.tag}</span>

                      <h3>
                        <Link href={article.href}>{article.title}</Link>
                      </h3>

                      <p>{article.text}</p>

                      <Link href={article.href} className={styles.articleLink}>
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* SMALL ARTICLES */}
              <div className={styles.articleGrid}>
                {articles.map((article) => (
                  <article className={styles.articleCard} key={article.title}>
                    <Link href={article.href}>
                      <img src={article.image} alt={article.title} />
                    </Link>

                    <div className={styles.articleCardBody}>
                      <span className={styles.tag}>{article.tag}</span>

                      <h3>
                        <Link href={article.href}>{article.title}</Link>
                      </h3>

                      <p>{article.text}</p>

                      <Link href={article.href} className={styles.articleLink}>
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* WHY SECTION */}
              <section className={styles.whySection}>
                <h2>Why Regular Property Maintenance Matters</h2>

                <div className={styles.whyGrid}>
                  <div>
                    <CheckIcon />
                    <strong>Prevents costly repairs</strong>
                  </div>

                  <div>
                    <CheckIcon />
                    <strong>Keeps your home safe and secure</strong>
                  </div>

                  <div>
                    <CheckIcon />
                    <strong>Maintains property value</strong>
                  </div>

                  <div>
                    <CheckIcon />
                    <strong>A healthier, more comfortable home</strong>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className={styles.faqSection}>
                <h2>
                  <span>?</span> Frequently Asked Questions
                </h2>

                <div className={styles.faqList}>
                  {faqs.map((faq) => (
                    <details key={faq}>
                      <summary>
                        {faq}
                        <span>+</span>
                      </summary>

                      <p>
                        Our local team can provide practical advice and
                        professional support depending on the condition and
                        requirements of your property.
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className={styles.sidebar}>
              {/* QUOTE */}
              <div className={styles.quoteBox}>
                <div className={styles.quoteIcon}>⌂</div>

                <h3>Need Property Maintenance?</h3>

                <p>
                  Get a free, no obligation quote for repairs, improvements or
                  general maintenance.
                </p>

                <Link href="/request-a-quote" className={styles.greenButton}>
                  Request a Quote <span>→</span>
                </Link>
              </div>

              {/* POPULAR TOPICS */}
              <div className={styles.sidebarBox}>
                <h3>
                  <span className={styles.sidebarTitleIcon}>♨</span>
                  Popular Topics
                </h3>

                <div className={styles.topicList}>
                  {topics.map((topic) => (
                    <Link
                      href={`/advice?topic=${encodeURIComponent(topic)}`}
                      key={topic}
                    >
                      <span>{topic}</span>
                      <b>›</b>
                    </Link>
                  ))}
                </div>
              </div>

              {/* PROMO */}
              <div className={styles.promoCard}>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85"
                  alt="Well maintained property"
                />

                <div className={styles.promoOverlay} />

                <div className={styles.promoContent}>
                  <span className={styles.leaf}>🍃</span>

                  <h3>
                    Keep Your Property
                    <br />
                    in Great Condition
                  </h3>

                  <p>
                    Expert advice for every season, from minor fixes to major
                    maintenance.
                  </p>

                  <Link
                    href="/advice"
                    className={styles.promoButton}
                  >
                    View Seasonal Guides <span>→</span>
                  </Link>
                </div>
              </div>

              {/* RELATED SERVICES */}
              <div className={styles.sidebarBox}>
                <h3>
                  <span className={styles.sidebarTitleIcon}>⚙</span>
                  Related Services
                </h3>

                <div className={styles.serviceList}>
                  {services.map((service) => (
                    <Link href={service.href} key={service.name}>
                      <span>{service.name}</span>
                      <b>›</b>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <div className={styles.speakBox}>
                <div className={styles.phoneCircle}>☎</div>

                <div>
                  <h3>Speak to Our Team</h3>

                  <a href="tel:01234567890">Call us on 01234 567890</a>

                  <p>We’re happy to help with any questions.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className={styles.trustStrip}>
          <div>
            <span>♧</span>
            <strong>Trusted Local Team</strong>
          </div>

          <div>
            <span>☆</span>
            <strong>Quality Workmanship</strong>
          </div>

          <div>
            <span>🍃</span>
            <strong>Helping Homes & Gardens</strong>
          </div>

          <div>
            <span>♢</span>
            <strong>Reliable & Professional</strong>
          </div>

          <div>
            <span>⌂</span>
            <strong>One Team. Complete Property Care.</strong>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}