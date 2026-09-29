import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./homecare-advice.module.css";

export const metadata: Metadata = {
  title: "Home Maintenance & Property Care Advice | Alpha",
  description:
    "Practical home maintenance and property-care advice covering repairs, plumbing, bathrooms, kitchens, decorating, flooring, gutters and gardens.",
  alternates: {
    canonical: "/advice/homecare-advice",
  },
};

const topicCards = [
  {
    number: "01",
    title: "General Property Maintenance",
    description:
      "Everyday repairs, damage, wear and property upkeep.",
    topics:
      "Cracks and holes • Damaged plaster • Doors and fittings • Water staining • Failed sealant • General maintenance lists",
    href: "/advice/search?q=property%20maintenance",
    label: "View Property Maintenance Advice",
  },
  {
    number: "02",
    title: "Plumbing & Water Problems",
    description:
      "Advice around common water-related issues.",
    topics:
      "Dripping taps • Running toilets • Leaking pipes • Water escaping • Waste pipe leaks • Stop taps",
    href: "/advice/search?q=plumbing",
    label: "View Plumbing Advice",
  },
  {
    number: "03",
    title: "Bathroom Care",
    description:
      "Advice covering bathroom maintenance and warning signs.",
    topics:
      "Silicone sealant • Grout • Loose tiles • Toilet leaks • Shower leaks • Bathroom flooring • When a bathroom needs renovation",
    href: "/advice/search?q=bathroom",
    label: "View Bathroom Advice",
  },
  {
    number: "04",
    title: "Kitchen Care",
    description:
      "Practical guidance for maintaining kitchens.",
    topics:
      "Sink leaks • Taps • Worktop damage • Sealant • Tiles • Flooring • Kitchen renovation planning",
    href: "/advice/search?q=kitchen",
    label: "View Kitchen Advice",
  },
  {
    number: "05",
    title: "Walls, Ceilings & Decorating",
    description:
      "Advice on preparation, damaged surfaces and decorating.",
    topics:
      "Preparing walls • Peeling paint • Ceiling stains • Cracks • Making good • Woodwork",
    href: "/advice/search?q=painting%20decorating",
    label: "View Decorating Advice",
  },
  {
    number: "06",
    title: "Tiling, Grout & Flooring",
    description:
      "Advice covering tiled and floor surfaces.",
    topics:
      "Loose tiles • Cracked tiles • Failed grout • Regrouting • Sealant • Uneven flooring • Flooring replacement",
    href: "/advice/search?q=tiling+flooring",
    label: "View Tiling & Flooring Advice",
  },
  {
    number: "07",
    title: "Roofs, Gutters & Exterior Care",
    description:
      "Advice covering visible external maintenance.",
    topics:
      "Blocked gutters • Leaking gutters • Downpipes • Water ingress • Roofline defects • Weather damage",
    href: "/advice/search?q=roofing+gutters",
    label: "View Roof & Gutter Advice",
  },
  {
    number: "08",
    title: "Garden Care",
    description:
      "Practical advice for everyday garden maintenance.",
    topics:
      "Grass cutting • Overgrowth • Hedge maintenance • Garden clearance • Recurring maintenance • Rental gardens",
    href: "/advice/search?q=garden%20maintenance",
    label: "View Garden Advice",
  },
];

// No articles are currently published.
// Do not display unpublished or 404 article cards.
const publishedArticles: {
  category: string;
  title: string;
  description: string;
  href: string;
}[] = [];

const checklistInside = [
  "Look for new water staining",
  "Check visible sealant around wet areas",
  "Watch for dripping taps",
  "Check toilets for constant running",
  "Look for damaged or loose tiles",
  "Monitor cracks or damaged plaster",
  "Check doors and fittings for damage",
  "Look for flooring deterioration",
];

const checklistOutside = [
  "Check visible gutters for overflow",
  "Look for damaged downpipes",
  "Watch for obvious roofline defects",
  "Keep outside areas reasonably clear",
  "Keep garden growth manageable",
];

const warningSections = [
  {
    eyebrow: "WATER DAMAGE",
    title: "Signs of Water Damage",
    items: [
      "Brown or yellow staining",
      "Peeling paint",
      "Bubbling finishes",
      "Damp-looking patches",
      "Swollen materials",
      "Water around fittings",
      "Persistent dripping",
    ],
    copy:
      "Water damage can have several different causes. The visible stain is not always the source of the problem, so the underlying cause should be identified before cosmetic repairs are completed.",
    linkLabel: "View Property Maintenance",
    href: "/property-maintenance",
    emergency: true,
  },
  {
    eyebrow: "PLUMBING",
    title: "Common Plumbing Problems",
    items: [
      "Dripping tap",
      "Constantly running toilet",
      "Slow or leaking waste",
      "Water around a sink",
      "Pipework leak",
      "Sudden loss of water containment",
    ],
    copy:
      "Small plumbing faults can become larger problems if water continues escaping.",
    linkLabel: "View Plumbing Services",
    href: "/plumbing-services",
    emergency: true,
  },
  {
    eyebrow: "BATHROOM CARE",
    title: "Keeping Bathrooms in Good Condition",
    items: [
      "Sealant",
      "Grout",
      "Loose tiles",
      "Fittings",
      "Leaks",
      "Flooring",
      "Ventilation-related surface condition",
    ],
    copy:
      "Persistent mould, damp or staining can have different causes and may require further assessment rather than simply cleaning or repainting the surface.",
    linkLabel: "View Bathroom Services",
    href: "/bathroom-services",
  },
  {
    eyebrow: "KITCHEN CARE",
    title: "Keeping Kitchens Maintained",
    items: [
      "Sink and tap leaks",
      "Sealant",
      "Damaged worktops",
      "Loose fittings",
      "Tile damage",
      "Flooring",
      "Plumbing connections",
    ],
    copy:
      "Kitchens often combine plumbing, cabinetry, flooring and finishes in one space, so a small fault can affect several areas if left unresolved.",
    linkLabel: "View Kitchen Services",
    href: "/kitchen-services",
  },
  {
    eyebrow: "WALLS & CEILINGS",
    title: "Cracks, Holes & Damaged Surfaces",
    items: [
      "Small fixing holes",
      "Damaged plaster",
      "Cracks",
      "Water staining",
      "Peeling coatings",
      "Previous repair areas",
    ],
    copy:
      "Not every crack has the same cause. If cracking is significant, recurring, widening or associated with movement, it may require appropriate professional assessment before ordinary decorating work proceeds.",
    linkLabel: "View Property Maintenance",
    href: "/property-maintenance",
  },
  {
    eyebrow: "PAINTING & DECORATING",
    title: "Before You Repaint",
    items: [
      "Active leaks",
      "Damp-looking areas",
      "Loose or flaking coatings",
      "Cracks",
      "Damaged plaster",
      "Failed sealant",
    ],
    copy:
      "Deal with the cause of damage first, then prepare the surface properly before redecorating.",
    linkLabel: "View Painting & Decorating",
    href: "/painting-and-decorating",
  },
  {
    eyebrow: "TILES & GROUT",
    title: "When Tiled Areas Need Attention",
    items: [
      "Cracked tiles",
      "Loose tiles",
      "Missing grout",
      "Failed silicone",
      "Movement",
      "Water reaching surrounding finishes",
    ],
    copy:
      "Regrouting or resealing can help where the underlying tiled area is sound, but loose tiles or movement may indicate that more than surface maintenance is required.",
    linkLabel: "View Tiling & Flooring",
    href: "/tiling-flooring",
  },
  {
    eyebrow: "FLOORING",
    title: "Signs Flooring May Need Repair or Replacement",
    items: [
      "Lifting",
      "Movement",
      "Damage",
      "Water-related deterioration",
      "Failed edges",
      "Uneven areas",
    ],
    copy:
      "The existing floor and underlying surface may need to be assessed before replacement flooring is installed.",
    linkLabel: "View Tiling & Flooring",
    href: "/tiling-flooring",
  },
  {
    eyebrow: "GUTTERS",
    title: "Why Gutters Matter",
    items: [
      "Water spilling over gutter edges",
      "Visible debris",
      "Leaking joints",
      "Staining on exterior walls",
      "Downpipe problems",
    ],
    copy:
      "If safe inspection is not possible from ground level, arrange appropriate professional assessment rather than attempting unsafe access.",
    linkLabel: "View Roofing & Gutters",
    href: "/roofing-gutters",
  },
  {
    eyebrow: "GARDEN CARE",
    title: "Keeping Gardens Manageable",
    items: [
      "Grass cutting",
      "Strimming",
      "Hedge and shrub maintenance",
      "Weeding",
      "Tidy-ups",
      "Recurring maintenance",
    ],
    copy:
      "Routine maintenance can help prevent gardens becoming difficult and expensive to recover.",
    linkLabel: "View Garden Services",
    href: "/garden-services",
  },
];

const commonTopics = [
  "Water leaks",
  "Sealant",
  "Grout",
  "Decorating preparation",
  "Property repairs",
  "Gutters",
  "Garden maintenance",
];

export default function HomecareAdvicePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Advice",
        item: "/advice",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Home Care Advice",
        item: "/advice/homecare-advice",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home Maintenance & Property Care Advice | Alpha",
    description:
      "Practical home maintenance and property-care advice covering repairs, plumbing, bathrooms, kitchens, decorating, flooring, gutters and gardens.",
    url: "/advice/homecare-advice",
  };

  return (
    <>
      <Header />

      <main className={styles.page}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />

        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav
              className={styles.breadcrumbs}
              aria-label="Breadcrumb"
            >
              <Link href="/">Home</Link>
              <span>→</span>
              <Link href="/advice">Advice</Link>
              <span>→</span>
              <span>Home Care Advice</span>
            </nav>

            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>
                HOME CARE ADVICE
              </span>

              <h1>Home Care Advice</h1>

              <h2>
                Practical guidance for looking after your property.
              </h2>

              <p>
                Small maintenance issues are often easier to deal
                with before they become larger repairs.
              </p>

              <p>
                The Alpha Home Care Advice section brings together
                useful guidance on common property problems,
                preventative maintenance and the signs that
                something may need professional attention.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="#home-care-search"
                  className={styles.primaryButton}
                >
                  Search Home Care Advice
                </a>

                <a
                  href="#main-topics"
                  className={styles.secondaryButton}
                >
                  Browse Topics
                </a>
              </div>
            </div>

            <div className={styles.heroSlogan}>
              One Team. Complete Property Care.
            </div>
          </div>
        </section>

        <section
          id="home-care-search"
          className={styles.searchSection}
        >
          <div className={styles.container}>
            <div className={styles.searchPanel}>
              <div>
                <span className={styles.sectionEyebrow}>
                  HOME CARE SEARCH
                </span>

                <h2>What Do You Need Help With?</h2>

                <p>
                  Search the main Alpha Advice library for practical
                  guidance on property and home maintenance.
                </p>
              </div>

              <form
                action="/advice/search"
                method="get"
                className={styles.searchForm}
              >
                <label
                  htmlFor="homecare-search-input"
                  className={styles.srOnly}
                >
                  Search home care advice
                </label>

                <input
                  id="homecare-search-input"
                  name="q"
                  type="search"
                  placeholder="Search home care advice..."
                  autoComplete="off"
                />

                <button type="submit">Search</button>
              </form>

              <div className={styles.searchExamples}>
                <span>Examples:</span>

                {[
                  "leaking toilet",
                  "cracked wall",
                  "black bathroom sealant",
                  "loose tile",
                  "dripping tap",
                  "peeling paint",
                  "blocked gutter",
                  "damaged flooring",
                ].map((example) => (
                  <Link
                    key={example}
                    href={`/advice/search?q=${encodeURIComponent(
                      example
                    )}`}
                  >
                    {example}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="main-topics"
          className={styles.section}
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionEyebrow}>
                MAIN TOPICS
              </span>

              <h2>Home Care Advice by Topic</h2>

              <p>
                Start with the area that best matches the problem
                you are trying to understand.
              </p>
            </div>

            <div className={styles.topicGrid}>
              {topicCards.map((topic) => (
                <article
                  key={topic.number}
                  className={styles.topicCard}
                >
                  <span className={styles.topicNumber}>
                    {topic.number}
                  </span>

                  <div className={styles.topicCardBody}>
                    <h3>{topic.title}</h3>

                    <p>{topic.description}</p>

                    <div className={styles.topicList}>
                      {topic.topics
                        .split(" • ")
                        .map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                    </div>

                    <Link href={topic.href}>
                      {topic.label} <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={styles.sectionEyebrow}>
                  FEATURED HOME CARE GUIDES
                </span>

                <h2>Useful Home Care Guides</h2>

                <p>
                  Practical home-care guidance will appear here as
                  genuine articles are created and published.
                </p>
              </div>

              <Link
                href="/advice/search?q=home%20care"
                className={styles.textLink}
              >
                Search Home Care Advice <span>→</span>
              </Link>
            </div>

            {publishedArticles.length === 0 ? (
              <div className={styles.emptyArticles}>
                <strong>More home care guides coming soon.</strong>

                <p>
                  New home care guidance will appear here when
                  genuine article pages are created and published.
                </p>
              </div>
            ) : (
              <div className={styles.articleGrid}>
                {publishedArticles.map((article) => (
                  <article
                    key={article.href}
                    className={styles.articleCard}
                  >
                    <div className={styles.articleCardTop}>
                      <span>{article.category}</span>
                    </div>

                    <div className={styles.articleCardBody}>
                      <h3>
                        <Link href={article.href}>
                          {article.title}
                        </Link>
                      </h3>

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
            )}
          </div>
        </section>

        <section className={styles.checklistSection}>
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionEyebrow}>
                PROPERTY MAINTENANCE CHECKLIST
              </span>

              <h2>Everyday Property Maintenance Checklist</h2>

              <p>
                Use this as a simple reminder for visible,
                everyday checks. This is not a formal property
                inspection.
              </p>
            </div>

            <div className={styles.checklistGrid}>
              <div className={styles.checklistCard}>
                <h3>Inside the Property</h3>

                <div className={styles.checkItems}>
                  {checklistInside.map((item) => (
                    <div
                      key={item}
                      className={styles.checkItem}
                    >
                      <span aria-hidden="true">☐</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.checklistCard}>
                <h3>Outside the Property</h3>

                <div className={styles.checkItems}>
                  {checklistOutside.map((item) => (
                    <div
                      key={item}
                      className={styles.checkItem}
                    >
                      <span aria-hidden="true">☐</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.checklistNote}>
              <strong>Important:</strong>
              <span>
                If something changes noticeably or is causing
                damage, it may need further assessment.
              </span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <span className={styles.sectionEyebrow}>
                  WARNING SIGNS
                </span>

                <h2>Practical Home Care Guidance</h2>

                <p>
                  Understand common warning signs, what to watch
                  for and when a small issue may need practical
                  attention.
                </p>
              </div>
            </div>

            <div className={styles.warningGrid}>
              {warningSections.map((section) => (
                <article
                  key={section.title}
                  className={styles.warningCard}
                >
                  <span className={styles.warningEyebrow}>
                    {section.eyebrow}
                  </span>

                  <h3>{section.title}</h3>

                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <p>{section.copy}</p>

                  <Link
                    href={section.href}
                    className={styles.outlineLink}
                  >
                    {section.linkLabel} <span>→</span>
                  </Link>

                  {section.emergency && (
                    <div className={styles.emergencyMini}>
                      <strong>Active water escape?</strong>

                      <a href="tel:01775518068">
                        Call 01775 518068
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.renovationSection}>
          <div className={styles.container}>
            <div className={styles.renovationGrid}>
              <div>
                <span className={styles.sectionEyebrow}>
                  WHEN TO REPAIR VS RENOVATE
                </span>

                <h2>Repair, Maintain or Renovate?</h2>

                <p>
                  Understanding the difference can make it easier
                  to decide what type of work a property actually
                  needs.
                </p>

                <div className={styles.definitionGrid}>
                  <div>
                    <h3>Maintenance</h3>
                    <p>
                      Keeping something in working condition.
                    </p>
                  </div>

                  <div>
                    <h3>Repair</h3>
                    <p>
                      Fixing something damaged or faulty.
                    </p>
                  </div>

                  <div>
                    <h3>Renovation</h3>
                    <p>
                      Improving or transforming a room or property.
                    </p>
                  </div>
                </div>

                <p className={styles.bridgeCopy}>
                  If several areas need work at the same time, it
                  may be more practical to assess the property as
                  a wider renovation rather than treating every
                  issue separately.
                </p>

                <div className={styles.inlineActions}>
                  <Link
                    href="/property-maintenance"
                    className={styles.primaryButton}
                  >
                    View Property Maintenance
                  </Link>

                  <Link
                    href="/property-renovations"
                    className={styles.secondaryButton}
                  >
                    View Property Renovations
                  </Link>
                </div>
              </div>

              <div className={styles.renovationPanel}>
                <span className={styles.panelIcon}>◆</span>

                <h3>
                  Start with the problem,
                  <br />
                  then choose the right service.
                </h3>

                <p>
                  Advice helps you understand what may be happening.
                  The next step is choosing the practical service
                  that matches the job.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.landlordSection}>
          <div className={styles.container}>
            <div className={styles.landlordGrid}>
              <div>
                <span className={styles.sectionEyebrow}>
                  LANDLORD HOME CARE
                </span>

                <h2>Property Care for Rental Homes</h2>

                <p>
                  Consistent maintenance can help stop small issues
                  building into larger void-period refurbishment
                  projects.
                </p>
              </div>

              <div className={styles.landlordContent}>
                <div className={styles.landlordTopics}>
                  {[
                    "Reporting repairs",
                    "Void-property checks",
                    "End-of-tenancy work",
                    "Garden maintenance",
                    "Water leaks",
                    "Decorating",
                    "Recording damage",
                    "Recurring maintenance",
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className={styles.inlineActions}>
                  <Link
                    href="/advice/search?q=landlord%20property%20maintenance"
                    className={styles.secondaryButton}
                  >
                    View Landlord Advice
                  </Link>

                  <Link
                    href="/landlords-letting-agents"
                    className={styles.primaryButton}
                  >
                    View Landlord Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.safetySection}>
          <div className={styles.container}>
            <div className={styles.safetyGrid}>
              <div className={styles.safetyCard}>
                <span className={styles.sectionEyebrow}>
                  DIY BOUNDARIES
                </span>

                <h2>Know When to Stop</h2>

                <p>
                  Advice should help you understand a problem
                  without encouraging unsafe or regulated DIY.
                </p>

                <div className={styles.doNotList}>
                  {[
                    "Repair gas appliances",
                    "Alter gas pipework",
                    "Work on unsafe electrical systems",
                    "Climb roofs",
                    "Disturb suspected asbestos",
                    "Perform structural work",
                    "Use regulated chemicals improperly",
                  ].map((item) => (
                    <div key={item}>
                      <span aria-hidden="true">×</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.safetyNote}>
                  If the work requires specialist competence,
                  regulated work or unsafe access, arrange
                  appropriate professional help.
                </div>
              </div>

              <div className={styles.gasCard}>
                <span className={styles.sectionEyebrow}>
                  GAS SAFE BOUNDARY
                </span>

                <h2>Gas-Related Work</h2>

                <p>
                  Alpha does not currently undertake work that
                  legally requires Gas Safe registration.
                </p>

                <p>
                  Where gas work is required, use an appropriately
                  registered gas professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.emergencySection}>
          <div className={styles.container}>
            <div className={styles.emergencyPanel}>
              <div>
                <span className={styles.sectionEyebrow}>
                  EMERGENCY HOME CARE
                </span>

                <h2>When a Problem Is Urgent</h2>

                <p>
                  Urgent warning signs can include active water
                  escape, burst pipes, rapid water damage, major
                  leaks or immediate property damage.
                </p>
              </div>

              <div className={styles.emergencyCall}>
                <strong>
                  24/7 Emergency Property &amp; Plumbing Support —
                </strong>

                <a href="tel:01775518068">
                  Call 01775 518068
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.topicsSection}>
          <div className={styles.container}>
            <div className={styles.topicsIntro}>
              <span className={styles.sectionEyebrow}>
                COMMON HOME CARE TOPICS
              </span>

              <h2>Common Home Care Topics</h2>

              <p>
                Start with a practical topic, then use the Advice
                search to find a more specific question.
              </p>
            </div>

            <div className={styles.commonTopics}>
              {commonTopics.map((topic) => (
                <Link
                  key={topic}
                  href={`/advice/search?q=${encodeURIComponent(
                    topic
                  )}`}
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.seasonalSection}>
          <div className={styles.container}>
            <div className={styles.seasonalPanel}>
              <div>
                <span className={styles.sectionEyebrow}>
                  RELATED SEASONAL ADVICE
                </span>

                <h2>Looking for Seasonal Guidance?</h2>

                <p>
                  Some maintenance tasks become more important at
                  different times of year. Explore seasonal advice
                  for spring, summer, autumn and winter.
                </p>
              </div>

              <Link
                href="/advice/seasonal-advice"
                className={styles.primaryButton}
              >
                View Seasonal Advice
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <div>
                <span className={styles.sectionEyebrow}>
                  PROPERTY &amp; HOME CARE
                </span>

                <h2>Found Something That Needs Repairing?</h2>

                <p>
                  Advice can help you understand a problem, but some
                  jobs need practical attention.
                </p>

                <p>
                  If you need property maintenance, plumbing,
                  decorating, tiling, renovation work or garden
                  maintenance, tell Alpha what needs doing.
                </p>

                <strong>
                  One Team. Complete Property Care.
                </strong>
              </div>

              <div className={styles.finalCtaActions}>
                <Link
                  href="/request-a-quote"
                  className={styles.finalPrimary}
                >
                  Request a Quote
                  <span>→</span>
                </Link>

                <Link
                  href="/services"
                  className={styles.finalSecondary}
                >
                  View Our Services
                </Link>

                <a
                  href="tel:01775518068"
                  className={styles.finalPhone}
                >
                  Call 01775 518068
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}