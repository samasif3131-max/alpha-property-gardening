"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./kitchens-advice.module.css";

const featuredArticles = [
  {
    tag: "GUIDE",
    title: "Kitchen Renovation Planning Checklist",
    description:
      "A step-by-step checklist to help you plan your kitchen renovation, from budgeting to completion.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/kitchen-renovation-planning-checklist",
  },
  {
    tag: "ADVICE",
    title: "Signs It’s Time to Replace Your Kitchen",
    description:
      "Common signs your kitchen may need updating and how to decide whether to repair or replace.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/signs-its-time-to-replace-your-kitchen",
  },
  {
    tag: "GUIDE",
    title: "Kitchen Worktop Options Explained",
    description:
      "Compare the most popular worktop materials, including pros, cons and costs.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/kitchen-worktop-options",
  },
  {
    tag: "IDEAS",
    title: "Small Kitchen Improvement Ideas",
    description:
      "Simple and effective ideas to refresh your kitchen without a full renovation.",
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/small-kitchen-improvement-ideas",
  },
  {
    tag: "PROCESS",
    title: "What Happens During a Kitchen Installation?",
    description:
      "A quick guide to what to expect during a professional kitchen installation.",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/kitchen-installation-process",
  },
];

const kitchenServices = [
  {
    title: "Full Kitchen Installations",
    href: "/kitchen-services",
  },
  {
    title: "Kitchen Refurbishments",
    href: "/kitchen-services",
  },
  {
    title: "Worktop Replacement",
    href: "/kitchen-services",
  },
  {
    title: "Sink & Tap Installation",
    href: "/kitchen-services",
  },
  {
    title: "Appliance Installation",
    href: "/kitchen-services",
  },
  {
    title: "Kitchen Repairs",
    href: "/kitchen-services",
  },
  {
    title: "Tiling & Splashbacks",
    href: "/kitchen-services",
  },
  {
    title: "Plumbing & Electrics",
    href: "/kitchen-services",
  },
  {
    title: "Kitchen Layout & Design Support",
    href: "/kitchen-services",
  },
];

const relatedArticles = [
  {
    title: "How to Plan a New Kitchen Layout",
    href: "/advice/how-to-plan-a-new-kitchen-layout",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Choosing the Right Kitchen Flooring",
    href: "/advice/choosing-kitchen-flooring",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Kitchen Renovation vs Kitchen Refresh",
    href: "/advice/kitchen-renovation-vs-refresh",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Kitchens for Rental Properties",
    href: "/advice/kitchens-for-rental-properties",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "How to Prepare for a Kitchen Installation",
    href: "/advice/prepare-for-kitchen-installation",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=300&q=80",
  },
];

const faqs = [
  "How much does a new kitchen typically cost?",
  "How long does a kitchen installation take?",
  "Can I keep my existing layout?",
  "Do you handle the plumbing and electrics?",
  "What’s the best flooring for a kitchen?",
];

export default function KitchensAdvicePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90"
              alt="Modern fitted kitchen"
            />
          </div>

          <div className={styles.heroOverlay} />

          <div className={styles.heroContainer}>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/advice">Advice Hub</Link>
              <span>›</span>
              <span>Kitchens Advice</span>
            </div>

            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>
                KITCHEN ADVICE
              </span>

              <h1>
                Kitchens <span>Advice</span>
              </h1>

              <p>
                Helpful guides, expert tips and practical information to
                help you plan, upgrade or maintain your kitchen, from small
                improvements to full installations.
              </p>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <span className={styles.heroFeatureIcon}>⚒</span>
                <div>
                  <strong>Expert Advice</strong>
                  <small>From our team</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.heroFeatureIcon}>⌂</span>
                <div>
                  <strong>Practical Guides</strong>
                  <small>Easy to follow</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.heroFeatureIcon}>£</span>
                <div>
                  <strong>Save Money</strong>
                  <small>Avoid costly mistakes</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <span className={styles.heroFeatureIcon}>💡</span>
                <div>
                  <strong>Inspiration</strong>
                  <small>Ideas for every home</small>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroHandwriting}>
            <span>Functional</span>
            <span>Stylish</span>
            <span>Kitchens</span>
            <span>For Real Life</span>
            <i />
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <section className={styles.contentSection}>
          <div className={styles.contentContainer}>
            <div className={styles.mainColumn}>
              {/* FEATURED HEADING */}

              <div className={styles.sectionHeading}>
                <div>
                  <h2>Featured Kitchen Advice</h2>
                  <p>
                    Our most popular kitchen guides to help you plan,
                    improve and get the most from your kitchen.
                  </p>
                </div>

                <Link
                  href="/advice?category=Kitchen"
                  className={styles.viewAll}
                >
                  View All Kitchen Articles
                  <span>→</span>
                </Link>
              </div>

              {/* FEATURED GRID */}

              <div className={styles.articleGrid}>
                {featuredArticles.slice(0, 2).map((article) => (
                  <article
                    className={styles.featuredCard}
                    key={article.href}
                  >
                    <Link
                      href={article.href}
                      className={styles.cardImageLink}
                    >
                      <div className={styles.cardImage}>
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
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

              {/* SMALL ARTICLE GRID */}

              <div className={styles.smallArticleGrid}>
                {featuredArticles.slice(2).map((article) => (
                  <article
                    className={styles.smallCard}
                    key={article.href}
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

              {/* WHY SECTION */}

              <section className={styles.whySection}>
                <h2>Why a Well-Planned Kitchen Matters</h2>

                <div className={styles.whyGrid}>
                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>⌂</div>
                    <p>
                      <strong>Adds value</strong>
                      <span>to your home</span>
                    </p>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>£</div>
                    <p>
                      <strong>Improves</strong>
                      <span>functionality</span>
                    </p>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>♧</div>
                    <p>
                      <strong>A more enjoyable</strong>
                      <span>space for your family</span>
                    </p>
                  </div>

                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>◉</div>
                    <p>
                      <strong>Longer lasting</strong>
                      <span>and more efficient</span>
                    </p>
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
                    <details
                      className={styles.faqItem}
                      key={faq}
                    >
                      <summary>
                        <span>{faq}</span>
                        <b>+</b>
                      </summary>

                      <div className={styles.faqAnswer}>
                        <p>
                          Our team can provide practical guidance based on
                          your property, kitchen layout and requirements.
                          Get in touch with Alpha Property & Gardening
                          Services for advice tailored to your home.
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
              {/* QUOTE BOX */}

              <div className={styles.helpBox}>
                <div className={styles.helpIcon}>⌂</div>

                <div className={styles.helpContent}>
                  <h3>Need a New Kitchen?</h3>

                  <p>
                    Get a free, no obligation quote for kitchen
                    installations, upgrades or repairs.
                  </p>
                </div>

                <Link
                  href="/request-a-quote"
                  className={styles.sidebarQuote}
                >
                  Request a Quote
                  <span>→</span>
                </Link>
              </div>

              {/* SERVICES */}

              <div className={styles.sidebarBlock}>
                <div className={styles.sidebarTitle}>
                  <span className={styles.sidebarTitleIcon}>⚙</span>
                  <h3>Kitchen Services</h3>
                </div>

                <div className={styles.serviceList}>
                  {kitchenServices.map((service) => (
                    <Link
                      href={service.href}
                      key={service.title}
                    >
                      <span>{service.title}</span>
                      <b>›</b>
                    </Link>
                  ))}
                </div>
              </div>

              {/* IMAGE CTA */}

              <div className={styles.imageCta}>
                <img
                  src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=900&q=85"
                  alt="Beautiful fitted kitchen"
                />

                <div className={styles.imageCtaOverlay} />

                <div className={styles.imageCtaContent}>
                  <span className={styles.leafIcon}>◢</span>

                  <h3>
                    Create a Kitchen
                    <br />
                    You’ll Love
                  </h3>

                  <p>
                    From modern upgrades to complete installations, we’ll
                    help you bring your vision to life.
                  </p>

                  <Link
                    href="/kitchen-services"
                    className={styles.imageCtaButton}
                  >
                    View Kitchen Services
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* RELATED ARTICLES */}

              <div className={styles.relatedBlock}>
                <div className={styles.sidebarTitle}>
                  <span className={styles.sidebarTitleIcon}>
                    ▣
                  </span>
                  <h3>Related Articles</h3>
                </div>

                <div className={styles.relatedList}>
                  {relatedArticles.map((article) => (
                    <Link
                      href={article.href}
                      className={styles.relatedItem}
                      key={article.href}
                    >
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                      />

                      <span>{article.title}</span>

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
                  <p>
                    Call us on{" "}
                    <a href="tel:01234567890">
                      01234 567890
                    </a>
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
          <div className={styles.trustContainer}>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}