"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./landlord-advice.module.css";

const featuredArticles = [
  {
    title: "A Landlord’s Guide to Legal Responsibilities",
    description:
      "Understand your key legal obligations as a landlord in the UK, from safety checks to tenancy agreements.",
    category: "GUIDE",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/landlord-legal-responsibilities",
  },
  {
    title: "Gas Safety for Landlords",
    description:
      "Find out what gas safety checks you need, how often they’re required and your legal responsibilities.",
    category: "ADVICE",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/gas-safety-for-landlords",
  },
  {
    title: "Dealing with Damp and Mould",
    description:
      "Learn how to identify, prevent and fix damp and mould in rental properties.",
    category: "PROBLEMS",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/damp-and-mould",
  },
  {
    title: "Improving Energy Efficiency",
    description:
      "Practical ways to improve your property’s EPC rating and reduce running costs for tenants.",
    category: "GUIDE",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/energy-efficiency",
  },
  {
    title: "End of Tenancy Checklist",
    description:
      "A step-by-step checklist to prepare your property for new tenants and avoid costly delays.",
    category: "ADVICE",
    image:
      "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/end-of-tenancy-checklist",
  },
];

const landlordServices = [
  {
    title: "Property Maintenance",
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
    title: "Bathrooms & Kitchens",
    href: "/bathroom-services",
  },
  {
    title: "Painting & Decorating",
    href: "/property-maintenance",
  },
  {
    title: "Fencing & External Areas",
    href: "/garden-services",
  },
  {
    title: "Roofing & Gutters",
    href: "/property-maintenance",
  },
  {
    title: "Emergency Repairs",
    href: "/property-maintenance",
  },
  {
    title: "End of Tenancy Refresh",
    href: "/property-maintenance",
  },
  {
    title: "Ongoing Maintenance Plans",
    href: "/landlords-letting-agents",
  },
];

const relatedArticles = [
  {
    title: "How Often Should You Service a Boiler?",
    href: "/advice/boiler-service-guide",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Landlord Electrical Safety Guide",
    href: "/advice/landlord-electrical-safety",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Legionella Risk Assessments Explained",
    href: "/advice/legionella-risk-assessments",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Preparing for New Tenants",
    href: "/advice/preparing-for-new-tenants",
    image:
      "https://images.unsplash.com/photo-1560185127-6a8c5a4f7a4b?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Tax Tips for Landlords",
    href: "/advice/tax-tips-for-landlords",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
  },
];

const faqs = [
  "What safety checks do I need as a landlord?",
  "How often should a gas safety check be done?",
  "What is an EPC and do I need one?",
  "Am I responsible for repairs during a tenancy?",
  "What happens if a tenant reports damp or mould?",
];

const benefits = [
  {
    icon: "£",
    title: "Saves money",
    text: "Long term",
  },
  {
    icon: "♧",
    title: "Keeps tenants",
    text: "happy",
  },
  {
    icon: "↗",
    title: "Protects your",
    text: "property value",
  },
  {
    icon: "✓",
    title: "Helps you stay",
    text: "legal and compliant",
  },
];

export default function LandlordAdvicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <span>Landlord Advice</span>
            </div>

            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                LANDLORD ADVICE
              </span>

              <h1>
                Landlord <span>Advice</span>
              </h1>

              <p>
                Practical guidance, compliance information and expert
                tips to help landlords keep their properties safe,
                legal and well maintained, while protecting their
                investment.
              </p>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>⌂</div>

                <div>
                  <strong>Legal Guidance</strong>
                  <span>Stay compliant</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>⌕</div>

                <div>
                  <strong>Maintenance Tips</strong>
                  <span>Prevent costly repairs</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>✓</div>

                <div>
                  <strong>Safer Homes</strong>
                  <span>Happier tenants</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>▣</div>

                <div>
                  <strong>Protect Your Investment</strong>
                  <span>Longer lasting properties</span>
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
            {/* LEFT CONTENT */}

            <div className={styles.mainContent}>
              <div className={styles.sectionHeading}>
                <div>
                  <h2>Featured Landlord Advice</h2>

                  <p>
                    Our most popular landlord guides to help you stay
                    informed and get the most from your investment.
                  </p>
                </div>

                <Link
                  href="/advice/landlord-advice/articles"
                  className={styles.viewAll}
                >
                  View All Landlord Articles
                  <span>→</span>
                </Link>
              </div>

              {/* FEATURED GRID */}

              <div className={styles.articleGrid}>
                {featuredArticles.map((article, index) => (
                  <Link
                    href={article.href}
                    className={`${styles.articleCard} ${
                      index < 2 ? styles.largeArticle : ""
                    }`}
                    key={article.href}
                  >
                    <div className={styles.articleImageWrap}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className={styles.articleImage}
                      />

                      <span className={styles.articleTag}>
                        {article.category}
                      </span>
                    </div>

                    <div className={styles.articleBody}>
                      <h3>{article.title}</h3>

                      <p>{article.description}</p>

                      <span className={styles.readArticle}>
                        Read Article
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* =================================================
                  WHY MAINTENANCE MATTERS
              ================================================== */}

              <section className={styles.whySection}>
                <h2>Why Landlord Maintenance Matters</h2>

                <div className={styles.benefitsGrid}>
                  {benefits.map((benefit) => (
                    <div
                      className={styles.benefit}
                      key={benefit.title}
                    >
                      <div className={styles.benefitIcon}>
                        {benefit.icon}
                      </div>

                      <div>
                        <strong>{benefit.title}</strong>
                        <span>{benefit.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  FAQ
              ================================================== */}

              <section className={styles.faqSection}>
                <div className={styles.faqHeading}>
                  <span className={styles.faqIcon}>?</span>

                  <h2>Frequently Asked Questions</h2>
                </div>

                <div className={styles.faqList}>
                  {faqs.map((question, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <div
                        className={`${styles.faqItem} ${
                          isOpen ? styles.faqItemOpen : ""
                        }`}
                        key={question}
                      >
                        <button
                          type="button"
                          className={styles.faqQuestion}
                          onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                          }
                          aria-expanded={isOpen}
                        >
                          <span>{question}</span>

                          <span className={styles.faqPlus}>
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className={styles.faqAnswer}>
                            <p>
                              Our team can help you understand the
                              practical maintenance requirements for
                              your rental property. If you need
                              property-specific advice, contact Alpha
                              Property & Gardening Services and we can
                              discuss your requirements.
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className={styles.sidebar}>
              {/* QUOTE BOX */}

              <div className={styles.helpCard}>
                <div className={styles.helpTop}>
                  <div className={styles.helpIcon}>⌂</div>

                  <div>
                    <h3>Need Help Maintaining Your Rental?</h3>

                    <p>
                      Get a free, no obligation quote for property
                      maintenance, repairs or ongoing management
                      support.
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

              <div className={styles.sideCard}>
                <div className={styles.sideTitle}>
                  <span className={styles.sideTitleIcon}>⚙</span>

                  <h3>Landlord Services</h3>
                </div>

                <div className={styles.serviceList}>
                  {landlordServices.map((service) => (
                    <Link
                      href={service.href}
                      key={service.title}
                      className={styles.sideService}
                    >
                      <span>{service.title}</span>
                      <span>›</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* MAINTENANCE BANNER */}

              <div className={styles.maintenanceCard}>
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85"
                  alt="Property maintenance"
                />

                <div className={styles.maintenanceOverlay} />

                <div className={styles.maintenanceContent}>
                  <div className={styles.leafIcon}>◆</div>

                  <h3>Let Us Take Care of the Maintenance</h3>

                  <p>
                    From routine maintenance to emergency repairs,
                    we help landlords keep their properties in top
                    condition year round.
                  </p>

                  <Link
                    href="/services"
                    className={styles.whiteButton}
                  >
                    View Our Services
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* RELATED ARTICLES */}

              <div className={styles.relatedCard}>
                <div className={styles.sideTitle}>
                  <span className={styles.relatedIcon}>▤</span>

                  <h3>Related Articles</h3>
                </div>

                <div className={styles.relatedList}>
                  {relatedArticles.map((article) => (
                    <Link
                      href={article.href}
                      className={styles.relatedItem}
                      key={article.title}
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

                  <a href="tel:01234567890">
                    Call us on 01234 567890
                  </a>

                  <p>
                    We’re happy to help with any questions.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <section className={styles.trustStrip}>
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
              <span>◆</span>
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