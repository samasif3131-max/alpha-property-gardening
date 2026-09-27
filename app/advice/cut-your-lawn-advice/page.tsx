import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./cut-your-lawn-advice.module.css";

const seasons = [
  {
    icon: "🍃",
    title: "Spring",
    period: "March – May",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=85",
    points: [
      "Mow every 5–7 days",
      "Set mower to medium height (3–4cm)",
      "Keep an eye out for weeds and moss",
    ],
  },
  {
    icon: "☀️",
    title: "Summer",
    period: "June – August",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
    points: [
      "Mow every 5–7 days",
      "Keep grass slightly longer in hot weather (4–5cm)",
      "Early morning or late evening is best",
    ],
  },
  {
    icon: "🍂",
    title: "Autumn",
    period: "September – November",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85",
    points: [
      "Mow every 10–14 days",
      "Gradually lower the cutting height",
      "Clear fallen leaves to prevent damage",
    ],
  },
  {
    icon: "❄️",
    title: "Winter",
    period: "December – February",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=900&q=85",
    points: [
      "Only mow if grass is still growing",
      "Keep mower on a higher setting (5cm)",
      "Avoid mowing in frost or very wet conditions",
    ],
  },
];

const relatedArticles = [
  {
    title: "Best Time to Cut Hedges in the UK",
    image:
      "https://images.unsplash.com/photo-1599685315640-7c2f7c1e9c0c?auto=format&fit=crop&w=400&q=80",
    href: "/advice/best-time-to-cut-hedges",
  },
  {
    title: "Autumn Garden Maintenance Checklist",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    href: "/advice/autumn-garden-maintenance",
  },
  {
    title: "How to Clear an Overgrown Garden",
    image:
      "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=400&q=80",
    href: "/advice/clear-overgrown-garden",
  },
  {
    title: "Preparing Your Garden for Winter",
    image:
      "https://images.unsplash.com/photo-1444392061186-9fc38f84f726?auto=format&fit=crop&w=400&q=80",
    href: "/advice/preparing-garden-for-winter",
  },
];

const relatedServices = [
  {
    title: "Garden Maintenance",
    href: "/garden-services",
    icon: "🍃",
  },
  {
    title: "Hedge Cutting",
    href: "/garden-services/hedge-cutting",
    icon: "✂",
  },
  {
    title: "Garden Clearance",
    href: "/garden-services/garden-clearance",
    icon: "🌿",
  },
  {
    title: "Fencing & Decking",
    href: "/garden-services/fencing-decking",
    icon: "🏡",
  },
];

const faqs = [
  "What is the best time of day to cut my lawn?",
  "How short should I cut my lawn?",
  "Can I cut my lawn in winter?",
  "What happens if I don't mow regularly?",
  "Do you offer regular lawn maintenance services?",
];

export default function CutYourLawnAdvicePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroImage} />

          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/advice">Advice Hub</Link>
              <span>›</span>
              <span>Garden Maintenance</span>
              <span>›</span>
              <strong>How Often Should You Cut Your Lawn?</strong>
            </div>

            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <span className={styles.heroLabel}>
                  GARDEN MAINTENANCE
                </span>

                <h1>
                  How Often Should
                  <br />
                  You <span>Cut Your Lawn?</span>
                </h1>

                <p>
                  Find out the best mowing schedule for a healthy, green lawn
                  all year round, plus expert tips on height, timing and tools.
                </p>
              </div>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>🍃</span>
                <div>
                  <strong>Expert Advice</strong>
                  <small>From our team</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>▣</span>
                <div>
                  <strong>Seasonal Tips</strong>
                  <small>All year round</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>⌂</span>
                <div>
                  <strong>Healthier Gardens</strong>
                  <small>Happier Homes</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>✓</span>
                <div>
                  <strong>Trusted Local Team</strong>
                  <small>Based in Spalding</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE AREA */}
        <section className={styles.articleSection}>
          <div className={styles.mainColumn}>
            <div className={styles.articleMeta}>
              <span>▣ Last updated: 16 Sep 2026</span>
              <span>◷ 6 min read</span>
              <span>🏷 Garden Maintenance</span>
            </div>

            <p className={styles.intro}>
              A well-maintained lawn can completely transform your garden,
              making it look tidy, healthy and welcoming. But how often should
              you actually cut your lawn? The answer depends on the time of
              year, grass growth and how you use your garden.
            </p>

            {/* QUICK ANSWER */}
            <div className={styles.quickAnswer}>
              <div className={styles.quickIcon}>✓</div>

              <div>
                <h2>Quick Answer</h2>
                <p>
                  During the growing season (spring and summer), most lawns
                  should be cut every <strong>5–7 days</strong>. In autumn, you
                  can reduce this to every <strong>10–14 days</strong>, and in
                  winter, mowing is usually only needed if the grass is still
                  growing.
                </p>
              </div>
            </div>

            {/* SEASON GUIDE */}
            <section className={styles.contentBlock}>
              <h2>Lawn Mowing Guide by Season</h2>

              <p className={styles.sectionIntro}>
                Grass grows at different rates throughout the year, so your
                mowing schedule should change with the seasons.
              </p>

              <div className={styles.seasonGrid}>
                {seasons.map((season) => (
                  <article className={styles.seasonCard} key={season.title}>
                    <div className={styles.seasonTitle}>
                      <span>{season.icon}</span>
                      <div>
                        <h3>{season.title}</h3>
                        <small>({season.period})</small>
                      </div>
                    </div>

                    <img
                      src={season.image}
                      alt={`${season.title} lawn`}
                      className={styles.seasonImage}
                    />

                    <ul>
                      {season.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* TOP TIPS */}
            <section className={styles.tipsSection}>
              <h2>Top Tips for a Healthy Lawn</h2>

              <div className={styles.tipsGrid}>
                <div className={styles.tip}>
                  <span>🌱</span>
                  <div>
                    <strong>Don’t cut too short</strong>
                    <p>
                      Keep at least 3cm to maintain a strong, healthy lawn.
                    </p>
                  </div>
                </div>

                <div className={styles.tip}>
                  <span>✂</span>
                  <div>
                    <strong>Use sharp blades</strong>
                    <p>
                      Clean cuts help prevent disease and keep grass looking
                      neat.
                    </p>
                  </div>
                </div>

                <div className={styles.tip}>
                  <span>💧</span>
                  <div>
                    <strong>Avoid wet grass</strong>
                    <p>
                      Mowing wet grass can cause clumping and uneven cuts.
                    </p>
                  </div>
                </div>

                <div className={styles.tip}>
                  <span>🌿</span>
                  <div>
                    <strong>Feed and water</strong>
                    <p>
                      A little care goes a long way – feed in spring and water
                      during dry spells.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className={styles.articleCta}>
              <div>
                <h2>Need Help With Lawn Maintenance?</h2>
                <p>
                  Let our experienced team take care of your garden. Regular
                  lawn maintenance keeps your outdoor space looking its best
                  all year round.
                </p>

                <Link href="/request-a-quote" className={styles.greenButton}>
                  Request a Quote <span>→</span>
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>

              <div className={styles.faqList}>
                {faqs.map((faq) => (
                  <details key={faq} className={styles.faqItem}>
                    <summary>
                      <span>{faq}</span>
                      <b>+</b>
                    </summary>

                    <div className={styles.faqAnswer}>
                      <p>
                        Our team can provide practical advice based on your
                        lawn, grass type, seasonal conditions and garden usage.
                        If you need help with regular maintenance, contact our
                        local team for advice.
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            {/* SEARCH */}
            <div className={styles.sidebarBox}>
              <div className={styles.sidebarHeading}>
                <span className={styles.sidebarIcon}>⌕</span>
                <h3>Search Advice Hub</h3>
              </div>

              <form className={styles.searchForm}>
                <input
                  type="search"
                  placeholder="Search for advice, e.g. hedge cutting..."
                  aria-label="Search Advice Hub"
                />

                <button type="submit">Search</button>
              </form>
            </div>

            {/* RELATED ARTICLES */}
            <div className={styles.sidebarBox}>
              <div className={styles.sidebarHeading}>
                <span className={styles.sidebarIcon}>▤</span>
                <h3>Related Articles</h3>
              </div>

              <div className={styles.relatedArticles}>
                {relatedArticles.map((article) => (
                  <Link
                    href={article.href}
                    className={styles.relatedArticle}
                    key={article.title}
                  >
                    <img src={article.image} alt={article.title} />

                    <div>
                      <strong>{article.title}</strong>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* RELATED SERVICES */}
            <div className={styles.sidebarBox}>
              <div className={styles.sidebarHeading}>
                <span className={styles.sidebarIcon}>⚙</span>
                <h3>Related Services</h3>
              </div>

              <div className={styles.serviceLinks}>
                {relatedServices.map((service) => (
                  <Link href={service.href} key={service.title}>
                    <span>{service.icon}</span>
                    <strong>{service.title}</strong>
                    <b>→</b>
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div className={styles.contactCard}>
              <div className={styles.contactCircle}>☎</div>

              <div>
                <h3>Need Advice?</h3>

                <a href="tel:01234567890">Call us on 01234 567890</a>

                <p>We're happy to help.</p>
              </div>
            </div>

            {/* TESTIMONIAL */}
            <div className={styles.testimonial}>
              <div className={styles.testimonialImage} />

              <div className={styles.testimonialContent}>
                <h3>What Our Customers Say</h3>

                <p>
                  “Our lawn has never looked better. Reliable, friendly and
                  great value. Highly recommend!”
                </p>

                <div className={styles.stars}>★★★★★</div>

                <small>- Local Homeowner</small>
              </div>
            </div>

            {/* GREEN MESSAGE */}
            <div className={styles.environmentCard}>
              <span>🍃</span>

              <div>
                <h3>A Cleaner Greener Brighter Tomorrow</h3>
                <p>
                  Caring for your home and our local environment.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}