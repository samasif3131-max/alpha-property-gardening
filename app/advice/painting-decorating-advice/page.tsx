"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./PaintingDecoratingAdvice.module.css";

const featuredArticles = [
  {
    tag: "GUIDE",
    title: "How to Choose the Right Paint for Your Home",
    text: "A simple guide to different paint types, finishes and colours to help you achieve the best results.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85",
  },
  {
    tag: "ADVICE",
    title: "How to Prepare Walls for Painting",
    text: "Step-by-step advice on cleaning, filling, sanding and priming for a smooth, long-lasting finish.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=85",
  },
];

const articles = [
  {
    tag: "TIPS",
    title: "How to Paint a Room Like a Pro",
    text: "A practical guide to painting a room, including the tools you need and essential techniques.",
    image:
      "https://images.unsplash.com/photo-1562259949-4f6d1e3c5f8e?auto=format&fit=crop&w=800&q=85",
  },
  {
    tag: "GUIDE",
    title: "Wallpaper vs Paint",
    text: "Compare the pros and cons of wallpaper and paint to decide what works best for your home.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
  },
  {
    tag: "ADVICE",
    title: "How to Refresh Woodwork",
    text: "Tips for painting doors, skirting boards and other woodwork for a clean, modern look.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85",
  },
];

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Wallpaper Hanging & Removal",
  "Woodwork Painting",
  "Feature Walls",
  "Ceilings & Coving",
  "Staining & Varnishing",
  "Patch Repairs",
  "Full Repaints",
  "Commercial Decorating",
];

const relatedArticles = [
  {
    title: "Best Colours for Small Rooms",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "How to Remove Wallpaper",
    image:
      "https://images.unsplash.com/photo-1562259949-4f6d1e3c5f8e?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Painting Exterior Walls: What to Know",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "How to Fix Scuffed Walls",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Preparing Your Home for Winter",
    image:
      "https://images.unsplash.com/photo-1600566753051-6b7e5c6a1b0f?auto=format&fit=crop&w=300&q=80",
  },
];

const faqs = [
  {
    question: "What is the best paint for high-traffic areas?",
    answer:
      "Durable washable paints are generally a practical choice for hallways, stairs and other high-traffic areas. The right finish also depends on the surface and the look you want.",
  },
  {
    question: "How long does paint take to dry?",
    answer:
      "Drying time depends on the paint type, temperature, ventilation and humidity. Always follow the manufacturer's recommended drying and recoating time.",
  },
  {
    question: "Can I paint over wallpaper?",
    answer:
      "Sometimes, but the wallpaper must be firmly attached and in suitable condition. Loose or damaged areas normally need attention before painting.",
  },
  {
    question: "Do I need to use a primer?",
    answer:
      "Primer can be useful on new surfaces, repaired areas, stains and some difficult surfaces. Your decorating requirements determine whether primer is appropriate.",
  },
  {
    question: "What time of year is best for exterior painting?",
    answer:
      "Mild, dry weather is normally preferable for exterior painting. Temperature, rain, wind and surface moisture all affect the finish.",
  },
];

export default function PaintingDecoratingAdvicePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/advice">Advice Hub</Link>
              <span>›</span>
              <span>Painting &amp; Decorating Advice</span>
            </div>

            <span className={styles.heroLabel}>
              PAINTING &amp; DECORATING ADVICE
            </span>

            <h1>
              Painting &amp; Decorating
              <br />
              <span>Advice</span>
            </h1>

            <p className={styles.heroText}>
              Helpful guides, expert tips and practical information to help
              you refresh, maintain and improve your home with confidence,
              whether it&apos;s a single room or a full renovation.
            </p>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <span>✦</span>
                <div>
                  <strong>Expert Advice</strong>
                  <small>From our team</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span>⌂</span>
                <div>
                  <strong>Practical Guides</strong>
                  <small>Easy to follow</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span>£</span>
                <div>
                  <strong>Save Money</strong>
                  <small>Avoid common mistakes</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span>★</span>
                <div>
                  <strong>Great Results</strong>
                  <small>Tips for a professional finish</small>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroScript}>
            Transform
            <br />
            Your Home
            <br />
            Inside and Out
            <span></span>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className={styles.mainSection}>
          <div className={styles.contentGrid}>
            {/* LEFT */}
            <div className={styles.leftContent}>
              <div className={styles.sectionHeading}>
                <div>
                  <h2>Featured Painting &amp; Decorating Advice</h2>
                  <p>
                    Our most popular painting and decorating guides to help
                    you achieve a great finish in your home.
                  </p>
                </div>

                <Link href="/advice" className={styles.viewAll}>
                  View All Painting &amp; Decorating Articles →
                </Link>
              </div>

              <div className={styles.featuredGrid}>
                {featuredArticles.map((article) => (
                  <article className={styles.featuredCard} key={article.title}>
                    <Link href="/advice">
                      <div className={styles.cardImage}>
                        <img src={article.image} alt={article.title} />
                        <span>{article.tag}</span>
                      </div>

                      <div className={styles.cardBody}>
                        <h3>{article.title}</h3>
                        <p>{article.text}</p>
                        <span className={styles.readMore}>
                          Read Article →
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              <div className={styles.articleGrid}>
                {articles.map((article) => (
                  <article className={styles.articleCard} key={article.title}>
                    <Link href="/advice">
                      <div className={styles.articleImage}>
                        <img src={article.image} alt={article.title} />
                        <span>{article.tag}</span>
                      </div>

                      <div className={styles.articleBody}>
                        <h3>{article.title}</h3>
                        <p>{article.text}</p>
                        <span className={styles.readMore}>
                          Read Article →
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* WHY SECTION */}
              <section className={styles.whySection}>
                <h2>Why Painting &amp; Decorating Matters</h2>

                <div className={styles.whyGrid}>
                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>⌂</div>
                    <div>
                      <strong>Improves the look</strong>
                      <span>and feel of your home</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>£</div>
                    <div>
                      <strong>Increases property</strong>
                      <span>value and appeal</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>♧</div>
                    <div>
                      <strong>Creates a healthier</strong>
                      <span>fresher environment</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.roundIcon}>◆</div>
                    <div>
                      <strong>Protects surfaces</strong>
                      <span>and prevents damage</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className={styles.faqSection}>
                <h2>
                  <span>?</span>
                  Frequently Asked Questions
                </h2>

                <div className={styles.faqList}>
                  {faqs.map((faq) => (
                    <details key={faq.question} className={styles.faqItem}>
                      <summary>
                        {faq.question}
                        <span>+</span>
                      </summary>

                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* SIDEBAR */}
            <aside className={styles.sidebar}>
              {/* QUOTE CARD */}
              <div className={styles.quoteCard}>
                <div className={styles.quoteIcon}>✎</div>

                <div>
                  <h3>Need a Painting or Decorating Quote?</h3>
                  <p>
                    Get a free, no obligation quote for internal or external
                    painting and decorating work.
                  </p>
                </div>

                <Link
                  href="/request-a-quote"
                  className={styles.greenButton}
                >
                  Request a Quote →
                </Link>
              </div>

              {/* SERVICES */}
              <div className={styles.sidebarBox}>
                <h3>
                  <span>⚙</span>
                  Painting &amp; Decorating Services
                </h3>

                <div className={styles.serviceLinks}>
                  {services.map((service) => (
                    <Link href="/services" key={service}>
                      <span>{service}</span>
                      <b>›</b>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SERVICE IMAGE */}
              <div className={styles.sidebarImageCard}>
                <img
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85"
                  alt="Professional painting and decorating"
                />

                <div className={styles.imageCardOverlay}>
                  <span>🌿</span>
                  <h3>
                    Refresh Your Home
                    <br />
                    Add Value to Your Property
                  </h3>

                  <p>
                    A fresh coat of paint can completely transform your space.
                    We provide professional painting and decorating services.
                  </p>

                  <Link href="/painting-services">
                    View Painting Services →
                  </Link>
                </div>
              </div>

              {/* RELATED */}
              <div className={styles.relatedBox}>
                <h3>
                  <span>▣</span>
                  Related Articles
                </h3>

                {relatedArticles.map((article) => (
                  <Link href="/advice" key={article.title}>
                    <img src={article.image} alt={article.title} />
                    <span>{article.title}</span>
                    <b>›</b>
                  </Link>
                ))}
              </div>

              {/* CONTACT */}
              <div className={styles.speakCard}>
                <div className={styles.phoneCircle}>☎</div>
                <div>
                  <h3>Speak to Our Team</h3>
                  <a href="tel:01234567890">Call us on 01234 567890</a>
                  <p>We&apos;re happy to help with any questions.</p>
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
            <span>♧</span>
            <strong>Helping Homes &amp; Gardens</strong>
          </div>

          <div>
            <span>♢</span>
            <strong>Reliable &amp; Professional</strong>
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