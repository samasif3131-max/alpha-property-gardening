import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./PropertyMaintenance.module.css";

export const metadata: Metadata = {
  title: "Property Maintenance & Repair Services | Alpha",
  description:
    "Property maintenance and repairs for homeowners, landlords and letting agents. From small repairs to ongoing maintenance, no job is too big or too small.",
};

const PHONE_DISPLAY = "01775 518068";
const PHONE_TEL = "tel:01775518068";

function Arrow() {
  return <span className={styles.arrow}>→</span>;
}

const maintenanceServices = [
  {
    number: "01",
    title: "Property Repairs & General Maintenance",
    text: "Everyday wear, damage and faults are part of owning or managing a property. Alpha can help resolve individual problems as well as completing several maintenance jobs during the same project or visit.",
    items: [
      "General household repairs",
      "Internal property repairs",
      "External property maintenance",
      "Doors, handles and fittings",
      "Minor carpentry and joinery",
      "Wall and ceiling repairs",
      "Damaged fixtures and fittings",
      "Sealant replacement",
      "Regrouting",
      "Small maintenance jobs",
      "Multiple-job maintenance visits",
    ],
  },
  {
    number: "02",
    title: "Carpentry, Doors & Property Fittings",
    text: "Damaged, poorly fitting or worn property fittings can affect both the appearance and everyday use of a home. Alpha can undertake a range of general carpentry, door and fitting work as part of property maintenance or a wider improvement project.",
    items: [
      "Internal doors",
      "Door furniture",
      "Handles and locks",
      "Skirting boards",
      "Architraves",
      "Shelving",
      "Minor timber repairs",
      "General property fittings",
    ],
  },
  {
    number: "03",
    title: "Wall, Ceiling & Plaster Repairs",
    text: "Cracks, holes, damaged plaster and tired surfaces can make otherwise well-maintained properties look neglected. Alpha can repair and prepare walls and ceilings as an individual maintenance job or as part of a larger decorating or renovation project.",
    items: [
      "Plaster repairs",
      "Damaged walls",
      "Ceiling repairs",
      "Crack repairs",
      "Hole repairs",
      "Surface preparation",
      "Making good after other work",
    ],
  },
  {
    number: "04",
    title: "Plumbing Repairs & Maintenance",
    text: "Many property maintenance requirements involve plumbing, from leaking taps and toilets to damaged pipework and replacement fittings. Alpha provides plumbing repairs and maintenance as a standalone service or alongside other property work.",
    items: [
      "Leaks",
      "Taps",
      "Toilets and cisterns",
      "Pipework",
      "Waste pipes",
      "Sinks and basins",
      "General plumbing repairs",
    ],
    note:
      "Alpha does not currently undertake work that legally requires Gas Safe registration.",
  },
  {
    number: "05",
    title: "Tiling, Grouting & Sealant Repairs",
    text: "Damaged tiles, deteriorated grout and failed sealant are not only cosmetic problems. In wet areas, poor seals can allow moisture into surrounding surfaces and create further damage. Alpha can replace damaged finishes and refresh problem areas in kitchens, bathrooms and other tiled spaces.",
    items: [
      "Tile repairs",
      "Regrouting",
      "Sealant replacement",
      "Kitchen splashbacks",
      "Bathroom finishing repairs",
    ],
  },
  {
    number: "06",
    title: "Exterior Property Maintenance",
    text: "Regular exterior maintenance can help prevent relatively small defects from developing into larger property problems. Alpha provides exterior maintenance and repair services for suitable areas of the property, either individually or as part of a wider maintenance programme.",
    items: [
      "Exterior repairs",
      "Roofing and gutter-related maintenance",
      "Fencing",
      "Exterior painting and decorating",
      "General external property maintenance",
      "Garden-related maintenance",
    ],
  },
];

const faqs = [
  {
    question: "What property maintenance work does Alpha undertake?",
    answer:
      "Alpha undertakes a broad range of internal and external property maintenance and repair work, from individual household repairs to multiple maintenance jobs at the same property.",
  },
  {
    question: "Is any property maintenance job too small?",
    answer:
      "No. We take on small individual repairs as well as larger maintenance projects. If you have several small jobs, they can also be included together in one enquiry.",
  },
  {
    question: "Can I send you a list of several jobs?",
    answer:
      "Yes. This is one of the main benefits of Alpha's multi-service approach. Tell us everything that needs attention and we can assess the work together rather than requiring you to arrange several different contractors.",
  },
  {
    question: "Do you provide ongoing property maintenance?",
    answer:
      "Yes. Planned or recurring property maintenance can be arranged where appropriate, particularly for landlords, letting agents and managed properties.",
  },
  {
    question: "Do you work with landlords and letting agents?",
    answer:
      "Yes. We provide property maintenance for landlords, letting agents and property managers, including tenant-reported repairs, void-property work, ongoing maintenance and larger renovation projects.",
  },
  {
    question: "Do you undertake complete property renovations?",
    answer:
      "Yes. Alpha undertakes larger property renovation projects as well as maintenance and repairs. Visit our Property Renovations page for more information.",
  },
  {
    question: "Do you carry out plumbing repairs?",
    answer:
      "Yes. Alpha provides general plumbing repairs, maintenance and installations. We do not currently undertake work that legally requires Gas Safe registration.",
  },
  {
    question: "How do I request a property maintenance quote?",
    answer:
      "Use our online quote request form and tell us what needs doing. If you have several jobs, include the complete list. Photographs can also help us understand the work required.",
  },
];

export default function PropertyMaintenancePage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBackground} />
          <div className={styles.heroOverlay} />

          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/services">Our Services</Link>
              <span>›</span>
              <span>Property Maintenance</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.goldLine} />

                <p className={styles.heroEyebrow}>
                  PROPERTY MAINTENANCE &amp; REPAIRS
                </p>

                <h1>
                  Property Maintenance &amp; Repair Services
                </h1>

                <p className={styles.heroLead}>
                  From everyday repairs and small maintenance jobs to ongoing
                  property care, Alpha Property &amp; Gardening Services
                  provides reliable property maintenance for homeowners,
                  landlords and letting agents.
                </p>

                <p className={styles.heroText}>
                  With multiple property services available through one team,
                  you do not need to find a different contractor every time
                  another job needs attention.
                </p>

                <p className={styles.heroStrong}>
                  No job is too big or too small.
                </p>

                <div className={styles.heroButtons}>
                  <Link
                    href="/request-a-quote"
                    className={styles.goldButton}
                  >
                    Request a Quote <Arrow />
                  </Link>

                  <a
                    href={PHONE_TEL}
                    className={styles.outlineButton}
                  >
                    <span className={styles.phoneIcon}>☎</span>
                    Call {PHONE_DISPLAY}
                  </a>
                </div>

                <div className={styles.heroSupporting}>
                  <span>
                    Need something more extensive? We also undertake complete
                    property renovations.
                  </span>

                  <Link href="/property-renovations">
                    View Property Renovations <Arrow />
                  </Link>
                </div>
              </div>

              <div className={styles.heroPanel}>
                <div className={styles.heroPanelLabel}>
                  ONE TEAM. COMPLETE PROPERTY CARE.
                </div>

                <h2>
                  From one repair
                  <br />
                  to ongoing maintenance
                </h2>

                <p>
                  Bring your complete list of property jobs to one team and
                  we can assess the work together.
                </p>

                <ul>
                  <li>Property repairs</li>
                  <li>Plumbing maintenance</li>
                  <li>Carpentry and fittings</li>
                  <li>Walls and plaster repairs</li>
                  <li>Tiling and finishing</li>
                  <li>Exterior maintenance</li>
                  <li>Planned maintenance</li>
                  <li>Rental property maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div>
                <p className={styles.sectionEyebrow}>
                  COMPLETE PROPERTY MAINTENANCE
                </p>

                <h2>
                  Complete Property Maintenance From One Team
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <div className={styles.introText}>
                <p>
                  Properties need constant attention. A leaking tap, damaged
                  wall, sticking door or deteriorating exterior might seem like
                  an individual problem, but over time small maintenance issues
                  can become larger and more expensive repairs.
                </p>

                <p>
                  Alpha provides practical property maintenance and repair
                  services covering a broad range of work around homes and
                  rental properties.
                </p>

                <p>
                  Whether you have one repair that needs completing, a list of
                  maintenance jobs that has built up, ongoing requirements
                  across a rental portfolio or work needed before a property
                  can be occupied again, you can bring the complete list to one
                  team.
                </p>

                <p>
                  We can also combine property maintenance with plumbing,
                  decorating, tiling, flooring, bathroom, kitchen and garden
                  work where required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionEyebrow}>PROPERTY REPAIRS</p>

                <h2>
                  Property Maintenance Services
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <p>
                Practical maintenance and repair work for homeowners,
                landlords and letting agents.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {maintenanceServices.map((service) => (
                <article
                  className={styles.serviceCard}
                  key={service.number}
                >
                  <div className={styles.serviceNumber}>
                    {service.number}
                  </div>

                  <div className={styles.serviceCardContent}>
                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {service.note && (
                      <p className={styles.serviceNote}>
                        {service.note}
                      </p>
                    )}

                    {service.number === "03" && (
                      <Link
                        href="/painting-decorating"
                        className={styles.inlineLink}
                      >
                        View Painting &amp; Decorating <Arrow />
                      </Link>
                    )}

                    {service.number === "04" && (
                      <Link
                        href="/plumbing-services"
                        className={styles.inlineLink}
                      >
                        View Plumbing Services <Arrow />
                      </Link>
                    )}

                    {service.number === "05" && (
                      <Link
                        href="/tiling-flooring"
                        className={styles.inlineLink}
                      >
                        View Tiling &amp; Flooring <Arrow />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PLANNED MAINTENANCE */}
        <section className={styles.plannedSection}>
          <div className={styles.container}>
            <div className={styles.plannedGrid}>
              <div className={styles.plannedContent}>
                <p className={styles.sectionEyebrow}>
                  PLANNED MAINTENANCE
                </p>

                <h2>
                  Planned &amp; Ongoing Property Maintenance
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  Property maintenance does not always need to be reactive.
                  Alpha can provide planned and recurring maintenance support
                  where appropriate, helping homeowners, landlords and property
                  managers deal with smaller issues before they develop into
                  larger problems.
                </p>

                <p>
                  This can be particularly useful for rental properties,
                  portfolios and properties where regular maintenance
                  requirements need to be kept under control.
                </p>

                <Link
                  href="/request-a-quote"
                  className={styles.goldButton}
                >
                  Discuss Ongoing Maintenance <Arrow />
                </Link>
              </div>

              <div className={styles.plannedPanel}>
                <div className={styles.plannedPanelIcon}>✓</div>

                <h3>Keep Small Issues Under Control</h3>

                <ul>
                  <li>Planned maintenance visits</li>
                  <li>Recurring property requirements</li>
                  <li>Multiple jobs assessed together</li>
                  <li>Maintenance for managed properties</li>
                  <li>Support for rental property portfolios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LANDLORDS */}
        <section className={styles.landlordSection}>
          <div className={styles.container}>
            <div className={styles.landlordGrid}>
              <div className={styles.landlordContent}>
                <p className={styles.sectionEyebrow}>
                  LANDLORD PROPERTY MAINTENANCE
                </p>

                <h2>
                  Property Maintenance for Landlords &amp; Letting Agents
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  Rental properties can generate maintenance requirements at
                  any time, from tenant-reported repairs to work required
                  between tenancies.
                </p>

                <p>
                  Alpha provides landlords, letting agents and property
                  managers with a single point of contact for a broad range
                  of property maintenance services.
                </p>

                <p>
                  Rather than arranging several different contractors,
                  maintenance requirements can be brought together and
                  assessed as one job.
                </p>

                <ul className={styles.landlordList}>
                  <li>Tenant-reported repairs</li>
                  <li>General property maintenance</li>
                  <li>Plumbing</li>
                  <li>Carpentry and fittings</li>
                  <li>Wall and ceiling repairs</li>
                  <li>Decorating</li>
                  <li>Tiling and flooring</li>
                  <li>Bathroom and kitchen repairs</li>
                  <li>Garden maintenance</li>
                  <li>Void-property work</li>
                  <li>End-of-tenancy preparation</li>
                  <li>Before-and-after photographs</li>
                  <li>Recurring maintenance</li>
                </ul>

                <p>
                  For larger projects, Alpha also undertakes complete property
                  renovations, including renovation work between tenancies or
                  before a property is returned to the rental market.
                </p>

                <Link
                  href="/landlords-letting-agents"
                  className={styles.goldButton}
                >
                  Landlord &amp; Letting Agent Services <Arrow />
                </Link>
              </div>

              <div className={styles.landlordPanel}>
                <span className={styles.panelTag}>ONE POINT OF CONTACT</span>

                <h3>
                  Maintenance requirements brought together through one team.
                </h3>

                <p>
                  From tenant-reported repairs to void-property preparation,
                  Alpha can coordinate suitable maintenance work across the
                  property.
                </p>

                <div className={styles.landlordStat}>
                  <strong>Maintenance</strong>
                  <span>Repairs, improvements and ongoing property care</span>
                </div>

                <div className={styles.landlordStat}>
                  <strong>Renovation</strong>
                  <span>
                    Larger projects through our dedicated renovation service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VOID PROPERTIES */}
        <section className={styles.voidSection}>
          <div className={styles.container}>
            <div className={styles.voidGrid}>
              <div className={styles.voidPanel}>
                <div className={styles.voidPanelLabel}>
                  VOID PROPERTY
                </div>

                <h3>Multiple jobs. One team.</h3>

                <div className={styles.voidSteps}>
                  <span>Assess</span>
                  <span>Repair</span>
                  <span>Improve</span>
                  <span>Prepare</span>
                </div>
              </div>

              <div className={styles.voidContent}>
                <p className={styles.sectionEyebrow}>
                  VOID PROPERTY MAINTENANCE
                </p>

                <h2>
                  Void Property Maintenance &amp; Turnarounds
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  When a rental property becomes vacant, several jobs often
                  need completing before the next tenant can move in.
                </p>

                <p>
                  Alpha can assess the property, identify the work required
                  and complete multiple maintenance and improvement jobs
                  through one team.
                </p>

                <p>
                  This could include repairs, plumbing, decorating, flooring,
                  bathroom or kitchen work, garden maintenance and general
                  preparation of the property.
                </p>

                <Link
                  href="/request-a-quote"
                  className={styles.outlineDarkButton}
                >
                  Request a Void Property Quote <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MULTIPLE JOBS */}
        <section className={styles.jobsSection}>
          <div className={styles.container}>
            <div className={styles.jobsInner}>
              <div className={styles.jobsContent}>
                <p className={styles.sectionEyebrow}>MULTIPLE JOBS?</p>

                <h2>
                  Got a List of Jobs That Need Doing?
                </h2>

                <p>
                  Property maintenance rarely arrives one job at a time.
                  Perhaps a door needs adjusting, a wall needs repairing, a tap
                  is leaking, sealant needs replacing and another room needs
                  decorating.
                </p>

                <p>
                  Rather than finding several different contractors, send
                  Alpha the complete list. We&apos;ll assess what&apos;s
                  required and provide a clear quotation for the work.
                </p>

                <div className={styles.jobsStatement}>
                  <strong>One enquiry.</strong>
                  <span>One team. Complete property care.</span>
                </div>

                <Link
                  href="/request-a-quote"
                  className={styles.goldButton}
                >
                  Send Us Your Job List <Arrow />
                </Link>
              </div>

              <div className={styles.jobsList}>
                <div>
                  <span>01</span>
                  <strong>Door needs adjusting</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Wall needs repairing</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Tap is leaking</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Sealant needs replacing</strong>
                </div>

                <div>
                  <span>05</span>
                  <strong>Room needs decorating</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAINTENANCE VS RENOVATION */}
        <section className={styles.comparisonSection}>
          <div className={styles.container}>
            <div className={styles.centerHeading}>
              <p className={styles.sectionEyebrow}>
                WHICH SERVICE DO YOU NEED?
              </p>

              <h2>
                Maintenance, Repair or Renovation?
                <span className={styles.headingDash} />
              </h2>

              <p>
                You do not need to decide exactly where your project fits
                before contacting us. The following distinction simply helps
                explain the difference between the services.
              </p>
            </div>

            <div className={styles.comparisonGrid}>
              <article className={styles.comparisonCard}>
                <span>01</span>
                <h3>Maintenance</h3>
                <p>
                  Routine work that keeps the property functioning correctly
                  and helps prevent deterioration.
                </p>
              </article>

              <article className={styles.comparisonCard}>
                <span>02</span>
                <h3>Repair</h3>
                <p>
                  Work required to correct something that has become damaged,
                  worn, faulty or broken.
                </p>
              </article>

              <article className={styles.comparisonCard}>
                <span>03</span>
                <h3>Renovation</h3>
                <p>
                  More substantial work intended to improve, modernise or
                  transform part or all of the property.
                </p>
              </article>
            </div>

            <div className={styles.comparisonCta}>
              <p>
                Not sure which category your project falls into? You do not
                need to decide before contacting us. Tell us what needs doing
                and we&apos;ll assess the appropriate solution.
              </p>

              <Link
                href="/property-renovations"
                className={styles.inlineLink}
              >
                View Property Renovations <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionEyebrow}>
                  RELATED PROPERTY SERVICES
                </p>

                <h2>
                  One Team for More of Your Property
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <p>
                Maintenance work can often overlap with other property
                services. Where appropriate, Alpha can combine different
                requirements through one team.
              </p>
            </div>

            <div className={styles.relatedGrid}>
              <Link
                href="/plumbing-services"
                className={styles.relatedCard}
              >
                <span>01</span>
                <strong>Plumbing Services</strong>
                <small>Repairs, maintenance and installations</small>
                <Arrow />
              </Link>

              <Link
                href="/bathroom-services"
                className={styles.relatedCard}
              >
                <span>02</span>
                <strong>Bathroom Services</strong>
                <small>Bathroom repairs and improvements</small>
                <Arrow />
              </Link>

              <Link
                href="/kitchen-services"
                className={styles.relatedCard}
              >
                <span>03</span>
                <strong>Kitchen Services</strong>
                <small>Kitchen repairs and improvement work</small>
                <Arrow />
              </Link>

              <Link
                href="/tiling-flooring"
                className={styles.relatedCard}
              >
                <span>04</span>
                <strong>Tiling &amp; Flooring</strong>
                <small>Finishes, repairs and replacement work</small>
                <Arrow />
              </Link>

              <Link
                href="/painting-decorating"
                className={styles.relatedCard}
              >
                <span>05</span>
                <strong>Painting &amp; Decorating</strong>
                <small>Preparation, decorating and finishing</small>
                <Arrow />
              </Link>

              <Link
                href="/roofing-gutters"
                className={styles.relatedCard}
              >
                <span>06</span>
                <strong>Roofing &amp; Gutters</strong>
                <small>Suitable exterior maintenance requirements</small>
                <Arrow />
              </Link>

              <Link
                href="/garden-services"
                className={styles.relatedCard}
              >
                <span>07</span>
                <strong>Garden Services</strong>
                <small>Garden maintenance and exterior care</small>
                <Arrow />
              </Link>

              <Link
                href="/property-renovations"
                className={styles.relatedCard}
              >
                <span>08</span>
                <strong>Property Renovations</strong>
                <small>More substantial property transformation work</small>
                <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* EMERGENCY */}
        <section className={styles.emergencySection}>
          <div className={styles.container}>
            <div className={styles.emergencyInner}>
              <div>
                <p className={styles.sectionEyebrow}>
                  24/7 EMERGENCY SUPPORT
                </p>

                <h2>Urgent Property Problem?</h2>

                <p>
                  Alpha provides 24/7 emergency property and plumbing
                  call-out support across our service area.
                </p>
              </div>

              <div className={styles.emergencyActions}>
                <a
                  href={PHONE_TEL}
                  className={styles.goldButton}
                >
                  Call {PHONE_DISPLAY} <Arrow />
                </a>

                <Link
                  href="/plumbing-services"
                  className={styles.emergencyLink}
                >
                  View Plumbing Services <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section className={styles.areasSection}>
          <div className={styles.container}>
            <div className={styles.areasInner}>
              <div>
                <p className={styles.sectionEyebrow}>
                  SERVICE AREA
                </p>

                <h2>
                  Property Maintenance Across Our Service Region
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  Alpha provides property maintenance and repair services
                  across a wide regional coverage area extending from
                  Peterborough to Skegness and from Long Sutton to Lincoln,
                  including surrounding towns, villages and rural communities.
                </p>
              </div>

              <Link
                href="/areas-we-cover"
                className={styles.outlineDarkButton}
              >
                View All Areas We Cover <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <div className={styles.faqMain}>
                <p className={styles.sectionEyebrow}>
                  HELP &amp; ADVICE
                </p>

                <h2>
                  Property Maintenance FAQs
                  <span className={styles.headingDash} />
                </h2>

                <div className={styles.faqGrid}>
                  {faqs.map((faq) => (
                    <details
                      className={styles.faqItem}
                      key={faq.question}
                    >
                      <summary>
                        <span>{faq.question}</span>
                        <b>+</b>
                      </summary>

                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              <aside className={styles.faqCta}>
                <div className={styles.faqCtaIcon}>⌂</div>

                <p className={styles.sectionEyebrow}>
                  PROPERTY MAINTENANCE
                </p>

                <h3>Need Something Fixed?</h3>

                <p>
                  Tell us what needs attention. If you have several jobs,
                  include the complete list and we can assess everything
                  together.
                </p>

                <Link
                  href="/request-a-quote"
                  className={styles.goldButton}
                >
                  Request a Quote <Arrow />
                </Link>

                <a
                  href={PHONE_TEL}
                  className={styles.faqPhone}
                >
                  Or call {PHONE_DISPLAY}
                </a>
              </aside>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <div>
                <p className={styles.sectionEyebrow}>
                  ALPHA PROPERTY CARE
                </p>

                <h2>Need Something Fixed, Maintained or Improved?</h2>

                <p>
                  From one small repair to a complete list of property
                  maintenance jobs, Alpha gives you one place to start.
                  Tell us what your property needs and we&apos;ll provide the
                  next steps.
                </p>

                <strong>One Team. Complete Property Care.</strong>
              </div>

              <div className={styles.finalButtons}>
                <Link
                  href="/request-a-quote"
                  className={styles.goldButton}
                >
                  Request a Property Maintenance Quote <Arrow />
                </Link>

                <a
                  href={PHONE_TEL}
                  className={styles.outlineButton}
                >
                  ☎ &nbsp; Call {PHONE_DISPLAY}
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