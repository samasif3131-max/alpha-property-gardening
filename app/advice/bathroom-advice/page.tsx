import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./bathroom-advice.module.css";

const featuredArticles = [
  {
    tag: "GUIDE",
    title: "How Much Does a Bathroom Renovation Involve?",
    description:
      "Find out what’s involved in a bathroom renovation, from planning to completion, and what to expect.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    href: "/advice/bathroom-renovation",
  },
  {
    tag: "ADVICE",
    title: "Walk-In Shower vs Traditional Shower",
    description:
      "Compare the benefits of walk-in showers and traditional showers to find the right option for your home.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=85",
    href: "/advice/walk-in-vs-traditional-shower",
  },
  {
    tag: "PROBLEMS",
    title: "How to Prevent Mould in Your Bathroom",
    description:
      "Simple steps to reduce moisture, prevent mould and keep your bathroom fresh.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85",
    href: "/advice/prevent-bathroom-mould",
  },
  {
    tag: "ADVICE",
    title: "Bathroom Wall Panels vs Tiles",
    description:
      "Compare wall panels and tiles in terms of cost, durability, style and maintenance.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=700&q=85",
    href: "/advice/bathroom-wall-panels-vs-tiles",
  },
  {
    tag: "PLANNING",
    title: "Bathroom Renovation Checklist",
    description:
      "A step-by-step checklist to help you plan your bathroom renovation with confidence.",
    image:
      "https://images.unsplash.com/photo-1551776235-dde6d482980b?auto=format&fit=crop&w=700&q=85",
    href: "/advice/bathroom-renovation-checklist",
  },
];

const services = [
  {
    name: "Full Bathroom Installations",
    href: "/services/bathrooms",
  },
  {
    name: "Shower Installations",
    href: "/services/bathrooms",
  },
  {
    name: "Bathroom Refurbishments",
    href: "/services/bathrooms",
  },
  {
    name: "Wet Rooms",
    href: "/services/bathrooms",
  },
  {
    name: "Tiling & Waterproofing",
    href: "/services/tiling",
  },
  {
    name: "Plumbing & Pipework",
    href: "/services/plumbing",
  },
  {
    name: "Bathroom Repairs",
    href: "/services/bathrooms",
  },
  {
    name: "Accessible Bathrooms",
    href: "/services/bathrooms",
  },
  {
    name: "Extractor Fans",
    href: "/services/bathrooms",
  },
  {
    name: "Bathroom Design Support",
    href: "/services/bathrooms",
  },
];

const relatedArticles = [
  {
    title: "Signs Your Bathroom Needs Renovating",
    image:
      "https://images.unsplash.com/photo-1584622781867-1a3d4c5b6c55?auto=format&fit=crop&w=200&q=80",
    href: "/advice/signs-bathroom-needs-renovating",
  },
  {
    title: "How to Prevent Mould in Your Bathroom",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80",
    href: "/advice/prevent-bathroom-mould",
  },
  {
    title: "Choosing the Right Bathroom Flooring",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=200&q=80",
    href: "/advice/bathroom-flooring",
  },
  {
    title: "Small Bathroom Design Ideas",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=200&q=80",
    href: "/advice/small-bathroom-design",
  },
];

const faqs = [
  "How much does a new bathroom typically cost?",
  "How long does a bathroom renovation take?",
  "Do I need a plumber for a bathroom installation?",
  "What is the best flooring for a bathroom?",
  "How can I prevent mould in my bathroom?",
];

export default function BathroomAdvicePage() {
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
              <span>Bathroom Advice</span>
            </div>

            <div className={styles.heroGrid}>
              <div>
                <span className={styles.heroLabel}>BATHROOM ADVICE</span>

                <h1>
                  Bathroom <span>Advice</span>
                </h1>

                <p className={styles.heroDescription}>
                  Helpful guides, expert tips and practical information to
                  help you plan, maintain and improve your bathroom, whether
                  it’s a simple repair or a full renovation.
                </p>
              </div>

              <div className={styles.heroSideText}>
                <span>Better</span>
                <span>Bathrooms</span>
                <span>Brighter</span>
                <span>Everyday</span>
              </div>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>⌁</span>
                <div>
                  <strong>Expert Advice</strong>
                  <small>From our team</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>⌂</span>
                <div>
                  <strong>Practical Guides</strong>
                  <small>Easy to follow</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>✓</span>
                <div>
                  <strong>Save Time & Money</strong>
                  <small>Avoid costly mistakes</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>⚒</span>
                <div>
                  <strong>Renovation Support</strong>
                  <small>From planning to completion</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className={styles.contentWrapper}>
          <div className={styles.mainColumn}>
            {/* FEATURED */}
            <section className={styles.section}>
              <div className={styles.sectionHeading}>
                <div>
                  <h2>Featured Bathroom Advice</h2>
                  <p>
                    Our most popular bathroom guides to help you create a
                    bathroom that works for your home and lifestyle.
                  </p>
                </div>

                <Link href="/advice/bathroom" className={styles.viewAll}>
                  View All Bathroom Articles <span>→</span>
                </Link>
              </div>

              <div className={styles.articleGrid}>
                {featuredArticles.map((article, index) => (
                  <article
                    key={article.title}
                    className={`${styles.articleCard} ${
                      index < 2 ? styles.featuredCard : ""
                    }`}
                  >
                    <Link href={article.href} className={styles.imageLink}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className={styles.articleImage}
                      />
                    </Link>

                    <div className={styles.articleBody}>
                      <span className={styles.articleTag}>{article.tag}</span>

                      <h3>
                        <Link href={article.href}>{article.title}</Link>
                      </h3>

                      <p>{article.description}</p>

                      <Link
                        href={article.href}
                        className={styles.readArticle}
                      >
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* BENEFITS */}
            <section className={styles.benefits}>
              <h2>Benefits of a Well-Maintained Bathroom</h2>

              <div className={styles.benefitGrid}>
                <div className={styles.benefit}>
                  <span className={styles.greenIcon}>✦</span>
                  <div>
                    <strong>A cleaner,</strong>
                    <small>healthier home</small>
                  </div>
                </div>

                <div className={styles.benefit}>
                  <span className={styles.greenIcon}>£</span>
                  <div>
                    <strong>Helps prevent</strong>
                    <small>costly repairs</small>
                  </div>
                </div>

                <div className={styles.benefit}>
                  <span className={styles.greenIcon}>⌂</span>
                  <div>
                    <strong>Adds value</strong>
                    <small>to your property</small>
                  </div>
                </div>

                <div className={styles.benefit}>
                  <span className={styles.greenIcon}>♧</span>
                  <div>
                    <strong>A more comfortable</strong>
                    <small>and enjoyable space</small>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
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
                        Our team can provide practical advice based on your
                        property, bathroom requirements and planned work.
                        Contact us for specific guidance and a no-obligation
                        quote.
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            {/* QUOTE */}
            <div className={styles.quoteBox}>
              <div className={styles.quoteTop}>
                <span className={styles.quoteIcon}>⌁</span>

                <div>
                  <h3>Need a New Bathroom?</h3>
                  <p>
                    Get a free, no obligation quote for bathroom
                    installations, upgrades or repairs.
                  </p>
                </div>
              </div>

              <Link href="/contact" className={styles.quoteButton}>
                Request a Quote <span>→</span>
              </Link>
            </div>

            {/* SERVICES */}
            <div className={styles.sidebarBox}>
              <h3>
                <span>⚙</span>
                Bathroom Services
              </h3>

              <div className={styles.serviceList}>
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span>{service.name}</span>
                    <strong>›</strong>
                  </Link>
                ))}
              </div>
            </div>

            {/* PROMO */}
            <div className={styles.promoBox}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85"
                alt="Modern bathroom"
              />

              <div className={styles.promoOverlay} />

              <div className={styles.promoContent}>
                <span className={styles.leaf}>⌁</span>

                <h3>
                  Create a Bathroom
                  <br />
                  You’ll Love
                </h3>

                <p>
                  From modern upgrades to full renovations, we’ll help you
                  bring your ideas to life.
                </p>

                <Link href="/services/bathrooms">
                  View Bathroom Services <span>→</span>
                </Link>
              </div>
            </div>

            {/* RELATED */}
            <div className={styles.sidebarBox}>
              <h3>
                <span>▣</span>
                Related Articles
              </h3>

              <div className={styles.relatedList}>
                {relatedArticles.map((article) => (
                  <Link key={article.title} href={article.href}>
                    <img src={article.image} alt={article.title} />

                    <span>{article.title}</span>

                    <strong>›</strong>
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div className={styles.contactBox}>
              <span className={styles.phoneIcon}>☎</span>

              <div>
                <h3>Speak to Our Team</h3>

                <p>
                  Call us on{" "}
                  <a href="tel:01234567890">01234 567890</a>
                </p>

                <small>We’re happy to help with any questions.</small>
              </div>
            </div>
          </aside>
        </div>

        {/* TRUST BAR */}
        <section className={styles.trustBar}>
          <div>
            <span>♧</span>
            <strong>Trusted Local Team</strong>
          </div>

          <div>
            <span>☆</span>
            <strong>Quality Workmanship</strong>
          </div>

          <div>
            <span>♧</span>
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