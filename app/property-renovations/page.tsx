import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./PropertyRenovations.module.css";

export const metadata: Metadata = {
  title: "Property Renovation & Refurbishment Services | Alpha",
  description:
    "Complete property renovations and refurbishments for homeowners and landlords. Kitchens, bathrooms, plumbing, plastering, flooring, decorating and more.",
};

const PHONE_DISPLAY = "01775 518068";
const PHONE_TEL = "tel:01775518068";

function Arrow() {
  return <span className={styles.arrow}>→</span>;
}

const renovationServices = [
  {
    number: "01",
    title: "Complete Property Renovations",
    text:
      "Alpha undertakes complete property renovations where multiple rooms, services and finishes need to be updated as part of the same project.",
    items: [
      "Strip-out and removal",
      "Property repairs",
      "Wall and ceiling work",
      "Plastering",
      "Carpentry and joinery",
      "Plumbing",
      "Bathroom renovation",
      "Kitchen renovation",
      "Tiling",
      "Flooring",
      "Painting and decorating",
      "Doors, skirting and architraves",
      "Fixtures and fittings",
      "Exterior improvements",
      "Final finishing work",
    ],
  },
  {
    number: "02",
    title: "Plastering, Walls & Preparation",
    text:
      "Good preparation is essential to a good renovation. Alpha can incorporate wall and ceiling repairs, preparation and plastering into the wider project.",
    items: [
      "Plastering",
      "Wall repairs",
      "Ceiling repairs",
      "Making good",
      "Surface preparation",
      "Preparation following strip-out",
    ],
  },
  {
    number: "03",
    title: "Carpentry & Joinery",
    text:
      "Carpentry and joinery can form an important part of both the practical and finishing stages of a renovation, helping create a consistent finished result throughout the property.",
    items: [
      "Internal doors",
      "Skirting boards",
      "Architraves",
      "Timber repairs",
      "Shelving",
      "Property fittings",
      "Other renovation carpentry",
    ],
  },
  {
    number: "04",
    title: "Plumbing Within Your Renovation",
    text:
      "Plumbing work can be incorporated into wider renovation projects, particularly where kitchens, bathrooms or existing layouts are being updated.",
    items: [
      "General plumbing work",
      "Kitchen plumbing",
      "Bathroom plumbing",
      "Replacement fittings",
      "Plumbing repairs",
      "Plumbing installations",
    ],
    note:
      "Alpha does not currently undertake work that legally requires Gas Safe registration.",
  },
  {
    number: "05",
    title: "Tiling & Flooring",
    text:
      "Flooring and tiling can dramatically change the appearance and feel of a renovated property. Alpha can incorporate suitable installation into individual rooms or larger refurbishment projects.",
    items: [
      "Wall tiling",
      "Floor tiling",
      "Suitable flooring installation",
      "Room finishing",
      "Renovation replacement work",
    ],
  },
  {
    number: "06",
    title: "Painting & Decorating",
    text:
      "Decorating is often the stage where a renovation finally comes together. Alpha can provide preparation, painting and decorating as part of renovation projects.",
    items: [
      "Surface preparation",
      "Painting",
      "Decorating",
      "Room finishing",
      "Consistent finishing across the property",
    ],
  },
];

const faqs = [
  {
    question: "Do you undertake complete property renovations?",
    answer:
      "Yes. Alpha undertakes complete property renovations as well as individual room renovations and smaller improvement projects.",
  },
  {
    question: "Can you renovate an entire house?",
    answer:
      "Yes. Whole-house renovation projects can include multiple rooms and different types of property work completed as part of one overall project.",
  },
  {
    question: "Do you renovate kitchens and bathrooms?",
    answer:
      "Yes. Alpha provides kitchen and bathroom renovation services both as standalone projects and as part of larger property renovations.",
  },
  {
    question: "Can you do the plumbing during a renovation?",
    answer:
      "Yes. General plumbing work can be incorporated into a renovation. Alpha does not currently undertake work that legally requires Gas Safe registration.",
  },
  {
    question: "Do you provide plastering, flooring and decorating?",
    answer:
      "Yes. These services can form part of a wider renovation or, where appropriate, be undertaken as individual projects.",
  },
  {
    question: "Do you renovate rental properties?",
    answer:
      "Yes. We work with landlords, letting agents and property investors on property maintenance, void-property work and larger renovations and refurbishments.",
  },
  {
    question: "Can you renovate a property I've just bought?",
    answer:
      "Yes. If you've purchased a property requiring improvement, Alpha can assess the work needed and provide a quotation based on the agreed renovation scope.",
  },
  {
    question: "How do I get a renovation quote?",
    answer:
      "Use our quote request form and provide details of the property and the work you're considering. Photographs, measurements, plans and information about the result you're trying to achieve can help us understand the project.",
  },
];

export default function PropertyRenovationsPage() {
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
              <span>Property Renovations</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.goldLine} />

                <p className={styles.heroEyebrow}>
                  PROPERTY RENOVATIONS &amp; REFURBISHMENT
                </p>

                <h1>Complete Property Renovation &amp; Refurbishment Services</h1>

                <p className={styles.heroTagline}>
                  Transform your property with one team from start to finish.
                </p>

                <p className={styles.heroLead}>
                  Alpha Property &amp; Gardening Services undertakes property
                  renovations and refurbishments ranging from individual rooms
                  to complete property transformations for homeowners,
                  landlords and property investors.
                </p>

                <p className={styles.heroText}>
                  From strip-out and preparation through to plumbing,
                  plastering, carpentry, kitchens, bathrooms, tiling, flooring,
                  decorating and final finishing, we can bring the different
                  stages of your renovation together through one point of
                  contact.
                </p>

                <p className={styles.heroStrong}>
                  No job is too big or too small.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="/request-a-quote" className={styles.goldButton}>
                    Request a Renovation Quote <Arrow />
                  </Link>

                  <a href={PHONE_TEL} className={styles.outlineButton}>
                    <span className={styles.phoneIcon}>☎</span>
                    Call {PHONE_DISPLAY}
                  </a>
                </div>

                <div className={styles.heroSupporting}>
                  <span>
                    Looking for repairs or everyday maintenance?
                  </span>

                  <Link href="/property-maintenance">
                    View Property Maintenance <Arrow />
                  </Link>
                </div>
              </div>

              <div className={styles.heroPanel}>
                <div className={styles.heroPanelLabel}>
                  ONE TEAM. ONE RENOVATION.
                </div>

                <h2>
                  From one room
                  <br />
                  to complete transformation
                </h2>

                <p>
                  Bring the different stages of your renovation together
                  through one point of contact.
                </p>

                <ul>
                  <li>Strip-out and preparation</li>
                  <li>Plastering and making good</li>
                  <li>Carpentry and joinery</li>
                  <li>Plumbing</li>
                  <li>Bathrooms and kitchens</li>
                  <li>Tiling and flooring</li>
                  <li>Painting and decorating</li>
                  <li>Final finishing</li>
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
                  PROPERTY RENOVATIONS
                </p>

                <h2>
                  Property Renovations From One Team
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <div className={styles.introText}>
                <p>
                  Renovating a property can involve several different types of
                  work, and organising each stage separately can quickly become
                  complicated.
                </p>

                <p>
                  Alpha provides a comprehensive property renovation service
                  designed to make the process more straightforward.
                </p>

                <p>
                  Whether you&apos;re modernising your home, renovating a
                  recently purchased property, upgrading a rental property or
                  completely transforming an outdated interior, we can assess
                  the work as a whole rather than treating every element as a
                  separate job.
                </p>

                <p>
                  Our multi-service approach means plumbing, plastering,
                  carpentry, bathroom and kitchen work, tiling, flooring,
                  decorating and other property improvements can form part of
                  one renovation project.
                </p>

                <p>
                  From the initial quotation through to the finishing touches,
                  you&apos;ll have one team to speak to about the work.
                </p>

                <div className={styles.statement}>
                  One property. One project. One team.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLETE RENOVATIONS */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionEyebrow}>
                  COMPLETE RENOVATIONS
                </p>

                <h2>
                  Complete Property Renovations
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <p>
                Some properties need more than a few repairs. Alpha can
                undertake multiple rooms, services and finishes as part of the
                same renovation project.
              </p>
            </div>

            <div className={styles.featuredRenovation}>
              <div>
                <p>
                  Alpha undertakes complete property renovations where
                  multiple rooms, services and finishes need to be updated as
                  part of the same project.
                </p>

                <p>
                  We can work through the property systematically, dealing with
                  the preparation, repairs, installations and finishing work
                  required to bring it up to the standard you want.
                </p>

                <Link href="/request-a-quote" className={styles.goldButton}>
                  Request a Complete Renovation Quote <Arrow />
                </Link>
              </div>

              <div className={styles.featuredList}>
                <strong>A renovation project can include:</strong>
                <ul>
                  {renovationServices[0].items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHOLE HOUSE */}
        <section className={styles.wholeHouseSection}>
          <div className={styles.container}>
            <div className={styles.wholeHouseGrid}>
              <div className={styles.imagePanel}>
                <span>WHOLE-HOUSE RENOVATIONS</span>
                <h3>One overall renovation, rather than disconnected jobs.</h3>
              </div>

              <div className={styles.wholeHouseContent}>
                <p className={styles.sectionEyebrow}>
                  WHOLE-HOUSE RENOVATIONS
                </p>

                <h2>
                  Whole-House Renovations
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  Renovating an entire house requires more planning than
                  improving a single room.
                </p>

                <p>
                  Alpha can undertake work throughout the property, allowing
                  different stages to be coordinated as one overall renovation
                  rather than a collection of disconnected jobs.
                </p>

                <p>
                  This can be particularly useful for properties that have
                  recently been purchased, older homes requiring modernisation,
                  investment properties and homes that need significant
                  improvement before occupation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROOM RENOVATIONS */}
        <section className={styles.roomSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionEyebrow}>ROOM RENOVATIONS</p>

                <h2>
                  Individual Room Renovations
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <p>
                A complete property renovation isn&apos;t always necessary.
                Alpha can renovate individual rooms or specific areas now or
                as part of a gradual property improvement.
              </p>
            </div>

            <div className={styles.roomGrid}>
              {[
                "Living rooms",
                "Bedrooms",
                "Hallways and landings",
                "Utility rooms",
                "Home offices",
                "Dining rooms",
                "Other internal spaces",
              ].map((room, index) => (
                <div className={styles.roomCard} key={room}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{room}</strong>
                </div>
              ))}
            </div>

            <div className={styles.specialistLinks}>
              <p>
                For specialist kitchen and bathroom projects, explore our
                dedicated services.
              </p>

              <div>
                <Link href="/kitchen-services" className={styles.inlineLink}>
                  View Kitchen Services <Arrow />
                </Link>

                <Link href="/bathroom-services" className={styles.inlineLink}>
                  View Bathroom Services <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BATHROOM + KITCHEN */}
        <section className={styles.dualSection}>
          <div className={styles.container}>
            <div className={styles.dualGrid}>
              <article className={styles.dualCard}>
                <p className={styles.sectionEyebrow}>BATHROOM RENOVATIONS</p>

                <h2>
                  Bathroom Renovations
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  From replacing an outdated bathroom to completely
                  redesigning the space, Alpha provides bathroom renovation and
                  installation services as standalone projects or as part of a
                  wider property renovation.
                </p>

                <p>
                  Work can include removal, preparation, plumbing, fitting,
                  tiling, flooring, sealing and finishing.
                </p>

                <Link href="/bathroom-services" className={styles.inlineLink}>
                  View Bathroom Services <Arrow />
                </Link>
              </article>

              <article className={styles.dualCard}>
                <p className={styles.sectionEyebrow}>KITCHEN RENOVATIONS</p>

                <h2>
                  Kitchen Renovations
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  The kitchen is often one of the biggest parts of a property
                  renovation.
                </p>

                <p>
                  Alpha can undertake complete kitchen renovations including
                  removal of the existing kitchen, preparation, plumbing,
                  fitting, worktops, tiling, flooring, decorating and
                  finishing work.
                </p>

                <Link href="/kitchen-services" className={styles.inlineLink}>
                  View Kitchen Services <Arrow />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICE STAGES */}
        <section className={styles.serviceStagesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionEyebrow}>
                  RENOVATION SERVICES
                </p>

                <h2>
                  Preparation, Installation &amp; Finishing
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <p>
                The renovation can bring the practical and finishing stages
                together through one wider project.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {renovationServices.slice(1).map((service) => (
                <article
                  className={styles.serviceCard}
                  key={service.number}
                >
                  <div className={styles.serviceNumber}>{service.number}</div>

                  <div className={styles.serviceCardContent}>
                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {service.note && (
                      <p className={styles.serviceNote}>{service.note}</p>
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
                        View Tiling &amp; Flooring Services <Arrow />
                      </Link>
                    )}

                    {service.number === "06" && (
                      <Link
                        href="/painting-decorating"
                        className={styles.inlineLink}
                      >
                        View Painting &amp; Decorating Services <Arrow />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LANDLORDS */}
        <section className={styles.landlordSection}>
          <div className={styles.container}>
            <div className={styles.landlordGrid}>
              <div className={styles.landlordContent}>
                <p className={styles.sectionEyebrow}>
                  LANDLORDS &amp; PROPERTY INVESTORS
                </p>

                <h2>
                  Renovations for Landlords &amp; Property Investors
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  Rental and investment properties sometimes require more than
                  routine maintenance, particularly after a long tenancy, when
                  purchasing a property in need of improvement or when
                  preparing a home for the rental market.
                </p>

                <p>
                  Alpha can undertake renovation and refurbishment work
                  designed to bring the property back into good condition and
                  prepare it for its next stage.
                </p>

                <ul className={styles.landlordList}>
                  <li>Complete property refurbishments</li>
                  <li>Void-property renovations</li>
                  <li>Kitchen improvements</li>
                  <li>Bathroom renovations</li>
                  <li>Plumbing</li>
                  <li>Plaster repairs and preparation</li>
                  <li>Flooring</li>
                  <li>Painting and decorating</li>
                  <li>Carpentry</li>
                  <li>Property repairs</li>
                  <li>Garden clearance and maintenance</li>
                  <li>Final finishing</li>
                </ul>

                <p>
                  For landlords and letting agents, we can also provide
                  ongoing property maintenance after the renovation is
                  complete.
                </p>

                <Link
                  href="/landlords-letting-agents"
                  className={styles.goldButton}
                >
                  Landlord &amp; Letting Agent Services <Arrow />
                </Link>
              </div>

              <div className={styles.landlordPanel}>
                <span className={styles.panelTag}>COMMERCIAL PROPERTY JOURNEY</span>

                <h3>Renovation → tenant → recurring Alpha maintenance</h3>

                <p>
                  Bring renovation, refurbishment and future property care
                  together through a clear customer journey.
                </p>

                <div className={styles.landlordStat}>
                  <strong>Renovation</strong>
                  <span>Improve, modernise and prepare the property.</span>
                </div>

                <div className={styles.landlordStat}>
                  <strong>Rental</strong>
                  <span>Prepare the property for its next stage.</span>
                </div>

                <div className={styles.landlordStat}>
                  <strong>Ongoing care</strong>
                  <span>Use Alpha for future property maintenance.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEWLY PURCHASED */}
        <section className={styles.purchasedSection}>
          <div className={styles.container}>
            <div className={styles.purchasedGrid}>
              <div className={styles.purchasedPanel}>
                <span>NEWLY PURCHASED PROPERTY</span>
                <h3>Assess the whole property before arranging every job separately.</h3>
              </div>

              <div className={styles.purchasedContent}>
                <p className={styles.sectionEyebrow}>
                  BOUGHT A PROPERTY THAT NEEDS RENOVATING?
                </p>

                <h2>
                  Bought a Property That Needs Renovating?
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  Buying a property that needs work can mean facing a long list
                  of jobs before it feels ready to live in or rent out.
                </p>

                <p>
                  Rather than organising each part separately, Alpha can assess
                  the property as a complete renovation project and help bring
                  the different stages together.
                </p>

                <p>
                  Tell us what you want to achieve and we&apos;ll assess the
                  work required to get the property there.
                </p>

                <Link href="/request-a-quote" className={styles.goldButton}>
                  Request a Renovation Quote <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.centerHeading}>
              <p className={styles.sectionEyebrow}>THE RENOVATION PROCESS</p>

              <h2>
                How Your Property Renovation Works
                <span className={styles.headingDash} />
              </h2>

              <p>
                A straightforward customer journey from the initial enquiry
                through to finishing and completion.
              </p>
            </div>

            <div className={styles.processGrid}>
              {[
                [
                  "01",
                  "Tell Us About the Property",
                  "Send us details of the property, what you'd like to change and any photographs or plans you already have.",
                ],
                [
                  "02",
                  "Property Assessment",
                  "We assess the work required, discuss the intended result and identify the different stages involved.",
                ],
                [
                  "03",
                  "Clear Quotation",
                  "You'll receive a quotation setting out the agreed scope of work.",
                ],
                [
                  "04",
                  "Renovation Work Begins",
                  "The required property work is carried out in the appropriate sequence, keeping the different parts of the project coordinated.",
                ],
                [
                  "05",
                  "Finishing & Completion",
                  "Final finishing work is completed and the project is checked before handover.",
                ],
              ].map(([number, title, text]) => (
                <article className={styles.processCard} key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTATIONS */}
        <section className={styles.quoteSection}>
          <div className={styles.container}>
            <div className={styles.quoteGrid}>
              <div>
                <p className={styles.sectionEyebrow}>CLEAR QUOTATIONS</p>

                <h2>
                  Clear Renovation Quotations
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <div>
                <p>
                  Renovation costs depend on the property, condition,
                  materials, scope and level of work required.
                </p>

                <p>
                  Alpha prefers to provide clear quotations based on the agreed
                  scope of the project rather than presenting customers with an
                  unexplained hourly rate.
                </p>

                <p>
                  Where the scope changes during a renovation or previously
                  hidden problems are discovered, any additional work should
                  be discussed before proceeding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RENOVATION VS MAINTENANCE */}
        <section className={styles.comparisonSection}>
          <div className={styles.container}>
            <div className={styles.centerHeading}>
              <p className={styles.sectionEyebrow}>WHICH SERVICE DO YOU NEED?</p>

              <h2>
                Does Your Property Need Maintenance or Renovation?
                <span className={styles.headingDash} />
              </h2>

              <p>
                The distinction is simple: maintenance and repairs keep a
                property functioning correctly, while renovation is focused on
                improving, modernising or substantially transforming it.
              </p>
            </div>

            <div className={styles.comparisonGrid}>
              <article className={styles.comparisonCard}>
                <span>01</span>
                <h3>Maintenance &amp; Repairs</h3>
                <p>
                  Best for individual faults, damaged items, ongoing upkeep
                  and smaller jobs required to keep a property functioning
                  correctly.
                </p>

                <Link href="/property-maintenance" className={styles.inlineLink}>
                  View Property Maintenance <Arrow />
                </Link>
              </article>

              <article className={styles.comparisonCard}>
                <span>02</span>
                <h3>Property Renovation</h3>
                <p>
                  Best where you want to improve, modernise or substantially
                  transform a room or larger part of the property.
                </p>

                <span className={styles.currentService}>You are here</span>
              </article>
            </div>

            <div className={styles.comparisonCta}>
              <p>
                Not sure? Send us the details. We&apos;ll assess what the
                property actually needs.
              </p>

              <Link href="/request-a-quote" className={styles.goldButton}>
                Request a Quote <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* GARDEN + EXTERIOR */}
        <section className={styles.outsideSection}>
          <div className={styles.container}>
            <div className={styles.outsideGrid}>
              <div className={styles.outsideContent}>
                <p className={styles.sectionEyebrow}>PROPERTY &amp; OUTSIDE SPACE</p>

                <h2>
                  Property &amp; Outside Space
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  A complete property project doesn&apos;t always stop at the
                  back door.
                </p>

                <p>
                  Where required, Alpha can combine internal renovation work
                  with suitable exterior property work and garden maintenance
                  or clearance.
                </p>

                <p>
                  This can be particularly useful when renovating newly
                  purchased, vacant or rental properties where both the
                  building and outside space need attention.
                </p>

                <Link href="/garden-services" className={styles.inlineLink}>
                  View Garden Services <Arrow />
                </Link>
              </div>

              <div className={styles.outsidePanel}>
                <span>PROPERTY FIRST</span>
                <strong>Renovate the building. Improve the outside space.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionEyebrow}>RELATED PROPERTY SERVICES</p>

                <h2>
                  One Team for More of Your Property
                  <span className={styles.headingDash} />
                </h2>
              </div>

              <p>
                Link naturally into the specialist services that can form part
                of a wider renovation.
              </p>
            </div>

            <div className={styles.relatedGrid}>
              {[
                ["/property-maintenance", "Property Maintenance", "Repairs, upkeep and everyday property care"],
                ["/plumbing-services", "Plumbing Services", "General plumbing work within renovation projects"],
                ["/bathroom-services", "Bathroom Services", "Bathroom renovation and installation"],
                ["/kitchen-services", "Kitchen Services", "Kitchen renovation and improvement work"],
                ["/tiling-flooring", "Tiling & Flooring", "Wall, floor and suitable flooring finishes"],
                ["/painting-decorating", "Painting & Decorating", "Preparation, decorating and finishing"],
                ["/roofing-gutters", "Roofing & Gutters", "Suitable exterior property requirements"],
                ["/garden-services", "Garden Services", "Garden maintenance and clearance"],
                ["/landlords-letting-agents", "Landlords & Letting Agents", "Rental property renovation and ongoing care"],
                ["/areas-we-cover", "Areas We Cover", "Our regional property service area"],
                ["/request-a-quote", "Request a Quote", "Tell Alpha about your renovation project"],
              ].map(([href, title, description], index) => (
                <Link href={href} className={styles.relatedCard} key={href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE */}
        <section className={styles.areasSection}>
          <div className={styles.container}>
            <div className={styles.areasInner}>
              <div>
                <p className={styles.sectionEyebrow}>SERVICE AREA</p>

                <h2>
                  Property Renovations Across Our Service Region
                  <span className={styles.headingDash} />
                </h2>

                <p>
                  Alpha undertakes property renovation and refurbishment work
                  across our regional service area, extending from Peterborough
                  to Skegness and from Long Sutton to Lincoln, including
                  surrounding towns, villages and rural communities.
                </p>
              </div>

              <Link href="/areas-we-cover" className={styles.outlineDarkButton}>
                View Areas We Cover <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <div className={styles.faqMain}>
                <p className={styles.sectionEyebrow}>HELP &amp; ADVICE</p>

                <h2>
                  Property Renovation FAQs
                  <span className={styles.headingDash} />
                </h2>

                <div className={styles.faqGrid}>
                  {faqs.map((faq) => (
                    <details className={styles.faqItem} key={faq.question}>
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
                  PROPERTY RENOVATIONS
                </p>

                <h3>Ready to Discuss Your Project?</h3>

                <p>
                  Tell us about the property, what you want to change and any
                  photographs, measurements or plans you already have.
                </p>

                <Link href="/request-a-quote" className={styles.goldButton}>
                  Request a Renovation Quote <Arrow />
                </Link>

                <a href={PHONE_TEL} className={styles.faqPhone}>
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
                  PROPERTY RENOVATIONS
                </p>

                <h2>Ready to Transform Your Property?</h2>

                <p>
                  Whether you&apos;re renovating one room or an entire
                  property, start by telling Alpha what you want to achieve.
                </p>

                <p>
                  We&apos;ll assess the work required and help you take the
                  project from its current condition towards the finished
                  result.
                </p>

                <strong>One Team. Complete Property Care.</strong>
              </div>

              <div className={styles.finalButtons}>
                <Link href="/request-a-quote" className={styles.goldButton}>
                  Request a Renovation Quote <Arrow />
                </Link>

                <a href={PHONE_TEL} className={styles.outlineButton}>
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
