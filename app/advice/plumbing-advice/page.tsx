import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./plumbing-advice.module.css";

const featuredArticles = [
  {
    tag: "GUIDE",
    title: "What to Do When You Find a Water Leak",
    description:
      "A step-by-step guide on what to do if you find a water leak, and how to prevent further damage.",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85",
    href: "/advice/water-leaks",
  },
  {
    tag: "ADVICE",
    title: "Why Is My Tap Dripping?",
    description:
      "Common causes of a dripping tap, what you can do about it and when to call a plumber.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    href: "/advice/dripping-taps",
  },
  {
    tag: "PROBLEMS",
    title: "Low Water Pressure",
    description:
      "Find out the common causes of low water pressure and how to resolve them.",
    image:
      "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=700&q=85",
    href: "/advice/low-water-pressure",
  },
  {
    tag: "ADVICE",
    title: "Why Does My Toilet Keep Running?",
    description:
      "Explore the main causes of a running toilet and simple fixes you can try.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85",
    href: "/advice/running-toilet",
  },
  {
    tag: "SEASONAL",
    title: "How to Prevent Frozen Pipes",
    description:
      "Practical tips to protect your pipes during cold weather and avoid costly damage.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85",
    href: "/advice/frozen-pipes",
  },
];

const services = [
  ["Leak Detection & Repairs", "/services/plumbing/leak-detection"],
  ["Tap Repair & Replacement", "/services/plumbing/tap-repair"],
  ["Toilet Repairs", "/services/plumbing/toilet-repairs"],
  ["Boiler & Radiator Issues", "/services/plumbing/boiler-radiator"],
  ["Pipework Repairs", "/services/plumbing/pipework"],
  ["Hot & Cold Water Problems", "/services/plumbing/water-problems"],
  ["Bathroom Plumbing", "/services/plumbing/bathroom-plumbing"],
  ["Kitchen Plumbing", "/services/plumbing/kitchen-plumbing"],
  ["Outside Taps & Garden Plumbing", "/services/plumbing/outside-plumbing"],
  ["Emergency Call-Outs", "/services/plumbing/emergency"],
];

const relatedArticles = [
  {
    title: "How to Spot a Hidden Water Leak",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=300&q=80",
    href: "/advice/hidden-water-leaks",
  },
  {
    title: "Common Bathroom Plumbing Problems",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=300&q=80",
    href: "/advice/bathroom-plumbing",
  },
  {
    title: "Common Kitchen Plumbing Problems",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=300&q=80",
    href: "/advice/kitchen-plumbing",
  },
  {
    title: "Preparing Your Home for Winter",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=300&q=80",
    href: "/advice/winter-plumbing",
  },
];

const faqs = [
  {
    question: "How do I know if I have a hidden water leak?",
    answer:
      "Look for unexplained increases in your water bill, damp patches, mould, musty smells, or a water meter that continues moving when all taps and appliances are switched off.",
  },
  {
    question: "Why is my water pressure low?",
    answer:
      "Low pressure can be caused by a partially closed valve, blocked pipework, a faulty pressure regulator, or issues with the local supply. A plumber can identify the cause.",
  },
  {
    question: "What should I do if my pipes freeze?",
    answer:
      "Turn off the water supply if appropriate, gently warm exposed frozen pipes and avoid using a naked flame. If a pipe has burst, shut off the main water supply and contact a qualified plumber.",
  },
  {
    question: "Can I fix a dripping tap myself?",
    answer:
      "Some dripping taps can be fixed by replacing a washer or cartridge. If the fitting is damaged or you are unsure which part is required, professional assistance can prevent further damage.",
  },
  {
    question: "When should I call a plumber?",
    answer:
      "Call a plumber for persistent leaks, burst pipes, serious blockages, loss of water supply, recurring problems or work involving plumbing systems that you are not confident handling yourself.",
  },
];

export default function PlumbingAdvicePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <img
            className={styles.heroImage}
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90"
            alt="Modern plumbing and bathroom"
          />

          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/advice">Advice Hub</Link>
              <span>›</span>
              <span>Plumbing Advice</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <span className={styles.eyebrow}>PLUMBING ADVICE</span>

                <h1>
                  Plumbing <span>Advice</span>
                </h1>

                <p>
                  Practical guides, expert tips and useful information to help
                  you understand common plumbing issues, prevent problems and
                  keep your home running smoothly.
                </p>
              </div>

              <div className={styles.heroSideText}>
                <span>Small</span>
                <span>Repairs</span>
                <span>Make a Big</span>
                <span>Difference</span>
              </div>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>🔧</div>
                <div>
                  <strong>Expert Advice</strong>
                  <small>From our team</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>⌂</div>
                <div>
                  <strong>Practical Guides</strong>
                  <small>Easy to follow</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <strong>Prevent Problems</strong>
                  <small>Save time & money</small>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.featureIcon}>💧</div>
                <div>
                  <strong>Keep Your Home Safe</strong>
                  <small>Reliable information</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.mainGrid}>
              {/* LEFT */}
              <div className={styles.contentLeft}>
                <div className={styles.sectionHeading}>
                  <div>
                    <h2>Featured Plumbing Advice</h2>
                    <p>
                      Our most popular plumbing guides to help you deal with
                      common issues and keep your home safe.
                    </p>
                  </div>

                  <Link href="/advice/plumbing" className={styles.viewAll}>
                    View All Plumbing Articles <span>→</span>
                  </Link>
                </div>

                <div className={styles.articleGrid}>
                  {featuredArticles.map((article, index) => (
                    <article
                      key={article.title}
                      className={
                        index < 2
                          ? `${styles.articleCard} ${styles.largeCard}`
                          : styles.articleCard
                      }
                    >
                      <Link href={article.href} className={styles.imageLink}>
                        <div className={styles.cardImageWrap}>
                          <img
                            src={article.image}
                            alt={article.title}
                            className={styles.cardImage}
                          />
                          <span className={styles.cardTag}>
                            {article.tag}
                          </span>
                        </div>
                      </Link>

                      <div className={styles.cardBody}>
                        <Link href={article.href}>
                          <h3>{article.title}</h3>
                        </Link>

                        <p>{article.description}</p>

                        <Link
                          href={article.href}
                          className={styles.articleLink}
                        >
                          Read Article <span>→</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* BENEFITS */}
                <section className={styles.benefits}>
                  <h2>Why Good Plumbing Maintenance Matters</h2>

                  <div className={styles.benefitGrid}>
                    <div className={styles.benefit}>
                      <div className={styles.roundIcon}>✓</div>
                      <p>
                        <strong>Helps prevent</strong>
                        <span>water damage</span>
                      </p>
                    </div>

                    <div className={styles.benefit}>
                      <div className={styles.roundIcon}>£</div>
                      <p>
                        <strong>Saves money</strong>
                        <span>on costly repairs</span>
                      </p>
                    </div>

                    <div className={styles.benefit}>
                      <div className={styles.roundIcon}>⌂</div>
                      <p>
                        <strong>Keeps your home</strong>
                        <span>safe and comfortable</span>
                      </p>
                    </div>

                    <div className={styles.benefit}>
                      <div className={styles.roundIcon}>💧</div>
                      <p>
                        <strong>Improves water</strong>
                        <span>efficiency</span>
                      </p>
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
                      <details key={faq.question} className={styles.faqItem}>
                        <summary>
                          <span>{faq.question}</span>
                          <b>+</b>
                        </summary>

                        <div className={styles.faqAnswer}>{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </section>
              </div>

              {/* RIGHT SIDEBAR */}
              <aside className={styles.sidebar}>
                {/* QUOTE */}
                <div className={styles.quoteBox}>
                  <div className={styles.quoteIcon}>🔧</div>

                  <div>
                    <h3>Need a Plumber?</h3>
                    <p>
                      Get a free, no obligation quote for plumbing repairs,
                      installations or emergency call-outs.
                    </p>
                  </div>

                  <Link href="/contact" className={styles.greenButton}>
                    Request a Quote <span>→</span>
                  </Link>
                </div>

                {/* SERVICES */}
                <div className={styles.sideBox}>
                  <div className={styles.sideTitle}>
                    <span className={styles.sideTitleIcon}>💧</span>
                    <h3>Plumbing Services</h3>
                  </div>

                  <div className={styles.serviceList}>
                    {services.map(([name, href]) => (
                      <Link key={name} href={href}>
                        <span>{name}</span>
                        <b>›</b>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* PROMO */}
                <div className={styles.promoBox}>
                  <img
                    src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=85"
                    alt="Professional plumbing service"
                  />

                  <div className={styles.promoOverlay} />

                  <div className={styles.promoContent}>
                    <div className={styles.promoLeaf}>💧</div>
                    <h3>
                      Reliable Plumbing
                      <br />
                      When You Need It
                    </h3>

                    <p>
                      From small repairs to bigger plumbing projects, our
                      experienced team is here to help.
                    </p>

                    <Link
                      href="/services/plumbing"
                      className={styles.promoButton}
                    >
                      View Plumbing Services <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* RELATED */}
                <div className={styles.relatedBox}>
                  <div className={styles.sideTitle}>
                    <span className={styles.sideTitleIcon}>▣</span>
                    <h3>Related Advice</h3>
                  </div>

                  <div className={styles.relatedList}>
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.title}
                        href={article.href}
                        className={styles.relatedItem}
                      >
                        <img src={article.image} alt={article.title} />
                        <span>{article.title}</span>
                        <b>›</b>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CONTACT */}
                <div className={styles.contactBox}>
                  <div className={styles.contactIcon}>☎</div>

                  <div>
                    <h3>Speak to Our Team</h3>
                    <p>
                      Call us on{" "}
                      <a href="tel:01234567890">01234 567890</a>
                    </p>
                    <span>We're happy to help with any questions.</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className={styles.trustBar}>
          <div className={styles.container}>
            <div className={styles.trustGrid}>
              <div className={styles.trustItem}>
                <span>♧</span>
                <strong>Trusted Local Team</strong>
              </div>

              <div className={styles.trustItem}>
                <span>☆</span>
                <strong>Quality Workmanship</strong>
              </div>

              <div className={styles.trustItem}>
                <span>🍃</span>
                <strong>Helping Homes & Gardens</strong>
              </div>

              <div className={styles.trustItem}>
                <span>♢</span>
                <strong>Reliable & Professional</strong>
              </div>

              <div className={styles.trustItem}>
                <span>⌂</span>
                <strong>One Team. Complete Property Care.</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}