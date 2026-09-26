import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./fencing-decking-advice.module.css";

const featuredArticles = [
  {
    tag: "GUIDE",
    title: "What Type of Fence Is Right for You?",
    description:
      "Compare the most popular fencing options, including timber, composite and metal, to find the best choice for your property.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/fencing-decking-advice/what-type-of-fence-is-right-for-you",
    featured: true,
  },
  {
    tag: "ADVICE",
    title: "How to Maintain a Decking Area",
    description:
      "Keep your decking looking great all year round with our simple maintenance tips.",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/fencing-decking-advice/how-to-maintain-a-decking-area",
    featured: true,
  },
  {
    tag: "PROBLEMS",
    title: "How to Fix a Leaning Fence",
    description:
      "Step-by-step advice on how to repair a leaning fence and when it's best to replace it.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    href: "/advice/fencing-decking-advice/how-to-fix-a-leaning-fence",
  },
  {
    tag: "IDEAS",
    title: "Decking Ideas for Every Garden",
    description:
      "Get inspired with practical decking ideas to create a beautiful and functional outdoor space.",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=85",
    href: "/advice/fencing-decking-advice/decking-ideas-for-every-garden",
  },
  {
    tag: "ADVICE",
    title: "How to Extend the Life of Your Fence",
    description:
      "Simple steps to protect your fence from weather damage and keep it looking good for longer.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
    href: "/advice/fencing-decking-advice/how-to-extend-the-life-of-your-fence",
  },
];

const fencingServices = [
  {
    title: "Garden Fencing (All Types)",
    href: "/garden-services/fencing",
  },
  {
    title: "Decking Installation",
    href: "/garden-services/decking",
  },
  {
    title: "Decking Repairs",
    href: "/garden-services/decking-repairs",
  },
  {
    title: "Fence Repairs & Replacements",
    href: "/garden-services/fence-repairs",
  },
  {
    title: "Gates (Supply & Installation)",
    href: "/garden-services/gates",
  },
  {
    title: "Composite Fencing & Decking",
    href: "/garden-services/composite-fencing",
  },
  {
    title: "Timber Treatment",
    href: "/garden-services/timber-treatment",
  },
  {
    title: "Garden Screens & Privacy Solutions",
    href: "/garden-services/garden-screens",
  },
  {
    title: "Picket Fencing",
    href: "/garden-services/picket-fencing",
  },
  {
    title: "Security Fencing",
    href: "/garden-services/security-fencing",
  },
];

const relatedArticles = [
  {
    title: "Timber vs Composite Decking",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=300&q=80",
    href: "/advice/fencing-decking-advice/timber-vs-composite-decking",
  },
  {
    title: "How to Choose Garden Gates",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80",
    href: "/advice/fencing-decking-advice/how-to-choose-garden-gates",
  },
  {
    title: "Fence Panel Sizes Explained",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80",
    href: "/advice/fencing-decking-advice/fence-panel-sizes-explained",
  },
  {
    title: "Weatherproofing Your Fence",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80",
    href: "/advice/fencing-decking-advice/weatherproofing-your-fence",
  },
  {
    title: "Low-Maintenance Fencing Options",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=300&q=80",
    href: "/advice/fencing-decking-advice/low-maintenance-fencing",
  },
];

const faqs = [
  {
    question: "What is the most durable type of fence?",
    answer:
      "The most suitable fence depends on the property, exposure and level of maintenance you want. Treated timber, composite and metal fencing can all provide long-lasting solutions when correctly installed and maintained.",
  },
  {
    question: "How long does decking typically last?",
    answer:
      "The lifespan of decking depends on the material, installation and maintenance. Regular cleaning, treatment and prompt repairs can help timber decking last significantly longer.",
  },
  {
    question: "Can I treat my fence myself?",
    answer:
      "Yes. Many timber fences can be cleaned and treated by homeowners. Always follow the manufacturer's instructions and make sure the timber is suitable and dry before applying treatment.",
  },
  {
    question: "Do I need planning permission for a fence or decking?",
    answer:
      "Planning requirements depend on the height, location and type of work. If you are unsure, check the current planning rules or speak to your local planning authority before starting work.",
  },
  {
    question: "What's the best way to clean decking?",
    answer:
      "Start by sweeping away dirt and leaves, then use an appropriate decking cleaner. Avoid aggressive cleaning methods that could damage the surface and follow the product manufacturer's guidance.",
  },
];

export default function FencingDeckingAdvicePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroBackground} />

          <div className={styles.heroOverlay} />

          <div className={styles.heroInner}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/advice">Advice Hub</Link>
              <span>›</span>
              <span>Fencing &amp; Decking Advice</span>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>
                FENCING &amp; DECKING ADVICE
              </div>

              <h1>
                Fencing &amp; Decking
                <br />
                <span>Advice</span>
              </h1>

              <p>
                Helpful guides, expert tips and practical information to help
                you choose, install, maintain and get the most from your
                fencing, decking and outdoor woodwork.
              </p>
            </div>

            <div className={styles.heroMessage}>
              <span>Stronger</span>
              <span>Safer</span>
              <span>Greener</span>
              <span>Together</span>
              <i />
            </div>

            <div className={styles.heroBenefits}>
              <div className={styles.heroBenefit}>
                <div className={styles.heroIcon}>▥</div>
                <div>
                  <strong>Expert Advice</strong>
                  <span>From our team</span>
                </div>
              </div>

              <div className={styles.heroBenefit}>
                <div className={styles.heroIcon}>⌂</div>
                <div>
                  <strong>Practical Guides</strong>
                  <span>Easy to follow</span>
                </div>
              </div>

              <div className={styles.heroBenefit}>
                <div className={styles.heroIcon}>♢</div>
                <div>
                  <strong>Longer Lasting</strong>
                  <span>Keep it in great condition</span>
                </div>
              </div>

              <div className={styles.heroBenefit}>
                <div className={styles.heroIcon}>♧</div>
                <div>
                  <strong>More Enjoyable Spaces</strong>
                  <span>Create outdoor living areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT AREA
        ====================================================== */}

        <section className={styles.contentSection}>
          <div className={styles.contentLayout}>
            {/* =================================================
                MAIN CONTENT
            ================================================== */}

            <div className={styles.mainContent}>
              <div className={styles.sectionHeading}>
                <div>
                  <h2>Featured Fencing &amp; Decking Advice</h2>
                  <p>
                    Our most popular fencing and decking guides to help you
                    improve your outdoor space.
                  </p>
                </div>

                <Link
                  href="/advice/fencing-decking-advice/articles"
                  className={styles.viewAll}
                >
                  View All Fencing &amp; Decking Articles
                  <span>→</span>
                </Link>
              </div>

              {/* FEATURED TWO */}

              <div className={styles.featuredGrid}>
                {featuredArticles
                  .filter((article) => article.featured)
                  .map((article) => (
                    <article
                      key={article.href}
                      className={styles.featuredCard}
                    >
                      <Link
                        href={article.href}
                        className={styles.cardImageLink}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className={styles.cardImage}
                        />
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
                          Read Article <span>→</span>
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>

              {/* SMALL ARTICLE GRID */}

              <div className={styles.articleGrid}>
                {featuredArticles
                  .filter((article) => !article.featured)
                  .map((article) => (
                    <article
                      key={article.href}
                      className={styles.articleCard}
                    >
                      <Link
                        href={article.href}
                        className={styles.smallImageLink}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className={styles.smallCardImage}
                        />
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
                          Read Article <span>→</span>
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>

              {/* =================================================
                  WHY IT MATTERS
              ================================================== */}

              <section className={styles.whySection}>
                <h2>Why Fencing &amp; Decking Maintenance Matters</h2>

                <div className={styles.whyGrid}>
                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>⌂</div>
                    <div>
                      <strong>Improves security</strong>
                      <span>and privacy</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>£</div>
                    <div>
                      <strong>Saves money</strong>
                      <span>long term</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>♧</div>
                    <div>
                      <strong>Adds value</strong>
                      <span>to your property</span>
                    </div>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>✦</div>
                    <div>
                      <strong>Creates a better</strong>
                      <span>outdoor space</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                  FAQ
              ================================================== */}

              <section className={styles.faqSection}>
                <h2>
                  <span>?</span>
                  Frequently Asked Questions
                </h2>

                <div className={styles.faqList}>
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className={styles.faqItem}
                    >
                      <summary>
                        <span>{faq.question}</span>
                        <b>+</b>
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
              {/* QUOTE CARD */}

              <div className={styles.quoteCard}>
                <div className={styles.quoteIcon}>▥</div>

                <div>
                  <h3>Need a New Fence or Decking?</h3>

                  <p>
                    Get a free, no obligation quote for fencing, decking or
                    garden woodwork installations.
                  </p>
                </div>

                <Link
                  href="/request-a-quote"
                  className={styles.sidebarQuote}
                >
                  Request a Quote <span>→</span>
                </Link>
              </div>

              {/* SERVICES */}

              <div className={styles.sidebarBox}>
                <div className={styles.sidebarTitle}>
                  <span className={styles.sidebarTitleIcon}>⚙</span>
                  <h3>Fencing &amp; Decking Services</h3>
                </div>

                <div className={styles.serviceList}>
                  {fencingServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={styles.serviceLink}
                    >
                      <span>{service.title}</span>
                      <b>›</b>
                    </Link>
                  ))}
                </div>
              </div>

              {/* OUTDOOR CTA */}

              <div className={styles.outdoorCard}>
                <img
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=85"
                  alt="Beautiful outdoor decking and garden"
                />

                <div className={styles.outdoorOverlay} />

                <div className={styles.outdoorContent}>
                  <span className={styles.leaf}>⌁</span>

                  <h3>
                    Create Outdoor Spaces
                    <br />
                    You&apos;ll Love
                  </h3>

                  <p>
                    From new fences to beautiful decking areas, we&apos;ll
                    help you transform your garden.
                  </p>

                  <Link
                    href="/garden-services"
                    className={styles.outdoorButton}
                  >
                    View Fencing &amp; Decking Services
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* RELATED ARTICLES */}

              <div className={styles.relatedBox}>
                <div className={styles.relatedTitle}>
                  <span>▤</span>
                  <h3>Related Articles</h3>
                </div>

                <div className={styles.relatedList}>
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className={styles.relatedArticle}
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

              {/* CONTACT */}

              <div className={styles.contactCard}>
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
            TRUST STRIP
        ====================================================== */}

        <section className={styles.trustStrip}>
          <div className={styles.trustInner}>
            <div className={styles.trustItem}>
              <span>♧</span>
              <strong>Trusted Local Team</strong>
            </div>

            <div className={styles.trustItem}>
              <span>☆</span>
              <strong>Quality Workmanship</strong>
            </div>

            <div className={styles.trustItem}>
              <span>⌁</span>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}