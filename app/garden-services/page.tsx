import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./GardenServices.module.css";

export const metadata: Metadata = {
  title: "Garden Maintenance & Clearance Services | Alpha",
  description:
    "Garden maintenance and clearances for homeowners, landlords and letting agents, including mowing, strimming, hedge cutting, weeding and recurring maintenance.",
};

const coreServices = [
  {
    number: "01",
    title: "Regular Garden Maintenance",
    text: "Recurring garden maintenance to keep grass, edges, hedges, shrubs, weeds and general garden areas under control.",
  },
  {
    number: "02",
    title: "Grass Cutting & Lawn Mowing",
    text: "Lawn mowing and grass cutting with suitable strimming around edges and difficult areas.",
  },
  {
    number: "03",
    title: "Strimming & Overgrown Grass",
    text: "Strimming for garden boundaries, fences, edges, obstacles and areas where mowing is not suitable.",
  },
  {
    number: "04",
    title: "Hedge & Shrub Cutting",
    text: "Suitable hedge trimming, shrub maintenance, cutting back and general shaping based on access and condition.",
  },
  {
    number: "05",
    title: "Garden Weeding",
    text: "Routine manual garden weeding for maintenance visits, one-off tidy-ups, property preparation and clearances.",
  },
  {
    number: "06",
    title: "One-Off Garden Tidy-Ups",
    text: "Practical one-off garden work including grass cutting, strimming, hedge and shrub cutting, weeding and general tidying.",
  },
];

const faqs = [
  {
    question: "Do you provide regular garden maintenance?",
    answer:
      "Yes. Recurring garden maintenance can be arranged where suitable, with frequency agreed according to the property and work required.",
  },
  {
    question: "Do you cut grass?",
    answer:
      "Yes. We provide lawn mowing, grass cutting and suitable strimming.",
  },
  {
    question: "Do you cut hedges?",
    answer:
      "Yes. Suitable hedge and shrub maintenance is available subject to size, access and project requirements.",
  },
  {
    question: "Do you clear overgrown gardens?",
    answer:
      "Yes. We provide suitable garden clearances where gardens have become overgrown or neglected.",
  },
  {
    question: "Do you provide one-off garden tidy-ups?",
    answer:
      "Yes. One-off garden maintenance and tidy-ups are available as well as recurring services.",
  },
  {
    question: "Do you remove garden waste?",
    answer:
      "Waste removal can be included where agreed. Your quotation will confirm what is removed and whether disposal is included.",
  },
  {
    question: "Do you work for landlords and letting agents?",
    answer:
      "Yes. We provide garden maintenance, clearances, void-property garden work and recurring services for landlords, letting agents and property managers.",
  },
  {
    question: "Can you maintain the garden while also doing property repairs?",
    answer:
      "Yes. Garden maintenance can be combined with wider property-maintenance and renovation work.",
  },
  {
    question: "Do you provide tree surgery?",
    answer:
      "No. Alpha’s current garden service focuses on garden maintenance, grass cutting, strimming, hedge and shrub maintenance, weeding, tidy-ups and garden clearances. We do not currently provide specialist tree surgery or arboricultural work.",
  },
  {
    question: "Do you use weedkiller?",
    answer:
      "Our standard garden service focuses on manual weeding. Any chemical weed-control treatment would need to be assessed separately based on the product, location and applicable safety requirements.",
  },
  {
    question: "How do I request a garden quote?",
    answer:
      "Use the quote request form and send photos where possible. For overgrown gardens, wide photos showing the overall condition are useful.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us About the Garden",
    text: "Send us details of the garden and photos where possible.",
  },
  {
    number: "02",
    title: "Assessment",
    text: "We consider the garden size, condition, access and work required.",
  },
  {
    number: "03",
    title: "Agree the Scope",
    text: "We agree whether the work involves maintenance, clearance, waste removal or a combination.",
  },
  {
    number: "04",
    title: "Quotation",
    text: "Your quotation is based on the agreed work and scope.",
  },
  {
    number: "05",
    title: "Garden Work",
    text: "The agreed garden work is completed according to the quotation.",
  },
  {
    number: "06",
    title: "Recurring Maintenance",
    text: "Ongoing visits can be arranged where regular maintenance is required.",
  },
];

export default function GardenServicesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                GARDEN MAINTENANCE & CLEARANCE
              </div>

              <h1>Garden Maintenance & Clearance Services</h1>

              <p className={styles.heroLead}>
                From regular grass cutting and garden maintenance to tackling
                an overgrown outside space, Alpha Property & Gardening
                Services provides practical garden services for homeowners,
                landlords and letting agents.
              </p>

              <p className={styles.heroText}>
                We can help with one-off tidy-ups, seasonal maintenance,
                garden clearances and recurring visits to keep outside areas
                under control.
              </p>

              <div className={styles.heroActions}>
                <Link href="#garden-quote" className={styles.primaryButton}>
                  REQUEST A GARDEN QUOTE
                </Link>

                <a href="tel:+441775518068" className={styles.phoneButton}>
                  CALL 01775 518068
                </a>
              </div>

              <div className={styles.heroSubline}>
                One-off jobs or regular maintenance.
              </div>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.panelTop}>
                <span>GARDEN SERVICES</span>
                <span className={styles.panelDot}></span>
              </div>

              <div className={styles.panelList}>
                <div className={styles.panelItem}>
                  <span>01</span>
                  <strong>Regular Garden Maintenance</strong>
                </div>

                <div className={styles.panelItem}>
                  <span>02</span>
                  <strong>Grass Cutting & Lawn Mowing</strong>
                </div>

                <div className={styles.panelItem}>
                  <span>03</span>
                  <strong>Strimming & Overgrown Grass</strong>
                </div>

                <div className={styles.panelItem}>
                  <span>04</span>
                  <strong>Hedge & Shrub Cutting</strong>
                </div>

                <div className={styles.panelItem}>
                  <span>05</span>
                  <strong>Garden Weeding</strong>
                </div>

                <div className={styles.panelItem}>
                  <span>06</span>
                  <strong>Garden Clearances</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className={styles.benefitBar}>
          <div className={styles.container}>
            <div className={styles.benefitGrid}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>01</span>
                <div>
                  <strong>One-Off & Recurring</strong>
                  <span>Maintenance options</span>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>02</span>
                <div>
                  <strong>Homes & Rentals</strong>
                  <span>Homeowners, landlords & agents</span>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>03</span>
                <div>
                  <strong>Clear Quotations</strong>
                  <span>Agreed scope of work</span>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <span className={styles.benefitIcon}>04</span>
                <div>
                  <strong>Complete Property Care</strong>
                  <span>Garden & property services</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className={`${styles.section} ${styles.introSection}`}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div className={styles.imageCard}>
                <img
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85"
                  alt="Illustrative garden maintenance image"
                />
                <div className={styles.imageLabel}>GARDEN MAINTENANCE</div>
              </div>

              <div className={styles.introContent}>
                <span className={styles.sectionEyebrow}>
                  PRACTICAL SERVICE
                </span>

                <h2>Practical Garden Maintenance</h2>

                <p>
                  Gardens can quickly become difficult to manage when regular
                  maintenance falls behind. Grass grows, hedges become
                  difficult to control and weeds can quickly take over.
                </p>

                <p>
                  Alpha provides straightforward garden maintenance and
                  clearance services for homeowners, landlords and letting
                  agents. We can also combine garden work with wider property
                  maintenance where required.
                </p>

                <div className={styles.highlightBox}>
                  <span>ONE TEAM</span>
                  <strong>Complete Property Care.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className={`${styles.section} ${styles.servicesSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>OUR SERVICES</span>
              <h2>Garden Maintenance Services</h2>
              <p>
                Practical garden services for one-off work, recurring
                maintenance and gardens that need bringing back under control.
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {coreServices.map((service) => (
                <article className={styles.serviceCard} key={service.number}>
                  <span className={styles.serviceNumber}>
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REGULAR MAINTENANCE */}
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.container}>
            <div className={styles.featureGrid}>
              <div>
                <span className={styles.sectionEyebrowLight}>
                  RECURRING MAINTENANCE
                </span>

                <h2>Regular Garden Maintenance</h2>

                <p>
                  Recurring maintenance can be arranged where suitable, helping
                  keep outside areas under control throughout the year.
                </p>

                <p>
                  The work included and visit frequency can be agreed around
                  the property and the level of maintenance required.
                </p>

                <Link
                  href="#garden-quote"
                  className={styles.lightButton}
                >
                  DISCUSS REGULAR GARDEN MAINTENANCE →
                </Link>
              </div>

              <div className={styles.checkList}>
                <div>Grass under control</div>
                <div>Edges maintained</div>
                <div>Hedges and shrubs manageable</div>
                <div>Weeds reduced</div>
                <div>General garden areas tidier</div>
                <div>Seasonal growth from becoming excessive</div>
              </div>
            </div>
          </div>
        </section>

        {/* GRASS / STRIMMING / HEDGE / WEEDING */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.detailGrid}>
              <article className={styles.detailCard}>
                <span className={styles.cardEyebrow}>01</span>
                <h2>Grass Cutting & Lawn Mowing</h2>

                <p>
                  Lawn mowing and grass cutting can include suitable strimming
                  around edges and difficult areas, followed by general tidying
                  following the cut.
                </p>

                <p>
                  Condition, length, access and waste requirements are
                  considered when preparing the quotation.
                </p>

                <div className={styles.note}>
                  Very overgrown grass may require clearance rather than
                  routine mowing.
                </div>
              </article>

              <article className={styles.detailCard}>
                <span className={styles.cardEyebrow}>02</span>
                <h2>Strimming & Overgrown Grass</h2>

                <p>
                  Strimming is suitable for edges, fences, garden boundaries,
                  obstacles, overgrown sections and areas unsuitable for
                  mowing.
                </p>

                <p>
                  Strimming can be combined with mowing or wider garden
                  clearance work.
                </p>
              </article>

              <article className={styles.detailCard}>
                <span className={styles.cardEyebrow}>03</span>
                <h2>Hedge & Shrub Cutting</h2>

                <p>
                  We provide suitable hedge trimming, cutting back of suitable
                  overgrowth, shrub maintenance and general shaping.
                </p>

                <p>
                  Height, size, access and condition are assessed before work
                  is agreed.
                </p>
              </article>

              <article className={styles.detailCard}>
                <span className={styles.cardEyebrow}>04</span>
                <h2>Garden Weeding</h2>

                <p>
                  Suitable manual garden weeding can be undertaken for routine
                  maintenance, one-off tidy-ups, property preparation,
                  landlord maintenance and clearances.
                </p>

                <div className={styles.note}>
                  Our standard garden service focuses on manual weeding. Any
                  chemical weed-control treatment would need to be assessed
                  separately based on the product, location and applicable
                  safety requirements.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ONE OFF TIDY + OVERGROWN */}
        <section className={`${styles.section} ${styles.softSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>ONE-OFF WORK</span>
              <h2>Garden Tidy-Ups & Clearances</h2>
              <p>
                If a garden has fallen behind, we can assess the work required
                and provide a clear quotation for bringing it back under
                control.
              </p>
            </div>

            <div className={styles.twoFeatureGrid}>
              <article className={styles.whiteFeatureCard}>
                <span className={styles.cardEyebrow}>ONE-OFF</span>

                <h2>One-Off Garden Tidy-Ups</h2>

                <p>One-off garden work can include:</p>

                <ul>
                  <li>Grass cutting</li>
                  <li>Strimming</li>
                  <li>Hedge and shrub cutting</li>
                  <li>Weeding</li>
                  <li>Loose garden debris</li>
                  <li>General tidying</li>
                  <li>Seasonal maintenance</li>
                </ul>

                <Link
                  href="#garden-quote"
                  className={styles.textLink}
                >
                  REQUEST A GARDEN TIDY-UP QUOTE →
                </Link>
              </article>

              <article className={styles.whiteFeatureCard}>
                <span className={styles.cardEyebrow}>CLEARANCE</span>

                <h2>Overgrown Garden Clearances</h2>

                <p>Suitable overgrown garden clearances can include:</p>

                <ul>
                  <li>Long grass</li>
                  <li>Strimming</li>
                  <li>Cutting back suitable vegetation</li>
                  <li>Hedge and shrub reduction</li>
                  <li>Weeding</li>
                  <li>Loose garden debris</li>
                  <li>General garden clearance</li>
                  <li>Preparing for future maintenance</li>
                </ul>

                <div className={styles.note}>
                  Exact work is assessed before quotation.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* VACANT PROPERTIES */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.featureImageGrid}>
              <div className={styles.featureImage}>
                <img
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=85"
                  alt="Illustrative garden clearance image"
                />
              </div>

              <div className={styles.featureContent}>
                <span className={styles.sectionEyebrow}>
                  VACANT PROPERTIES
                </span>

                <h2>Garden Clearances for Vacant Properties</h2>

                <p>
                  Garden work may be required when a rental property becomes
                  vacant, a recently purchased property needs attention or a
                  home is being prepared for sale.
                </p>

                <ul className={styles.simpleList}>
                  <li>Rental voids</li>
                  <li>Recently purchased properties</li>
                  <li>Properties being prepared for sale</li>
                  <li>Long-term vacant homes</li>
                  <li>Renovation properties</li>
                </ul>

                <p>
                  Where required, garden work can be coordinated with internal
                  property maintenance.
                </p>

                <Link
                  href="/property-maintenance"
                  className={styles.primaryButton}
                >
                  VIEW PROPERTY MAINTENANCE →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LANDLORDS */}
        <section className={`${styles.section} ${styles.softSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>
                LANDLORDS & LETTING AGENTS
              </span>

              <h2>Garden Maintenance for Landlords & Letting Agents</h2>

              <p>
                One-off and recurring garden work for rental properties,
                managed properties and property voids.
              </p>
            </div>

            <div className={styles.landlordGrid}>
              <div className={styles.landlordList}>
                <div>Grass cutting</div>
                <div>Strimming</div>
                <div>Hedge and shrub maintenance</div>
                <div>Weeding</div>
                <div>Garden tidy-ups</div>
                <div>Overgrown garden clearances</div>
                <div>Void-property garden work</div>
                <div>End-of-tenancy garden preparation</div>
                <div>Recurring garden maintenance</div>
              </div>

              <div className={styles.landlordContent}>
                <h3>Wider Property Work</h3>

                <p>
                  Where required, wider internal maintenance, repairs,
                  decorating and renovation work can also be handled by one
                  team.
                </p>

                <Link
                  href="/landlords-letting-agents"
                  className={styles.primaryButton}
                >
                  VIEW LANDLORD & LETTING AGENT SERVICES →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* END OF TENANCY + SEASONAL */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.twoFeatureGrid}>
              <article className={styles.outlineCard}>
                <span className={styles.cardEyebrow}>END OF TENANCY</span>

                <h2>End-of-Tenancy Garden Work</h2>

                <p>
                  Garden work for rental properties approaching the end of a
                  tenancy can include:
                </p>

                <ul>
                  <li>Mowing</li>
                  <li>Strimming</li>
                  <li>Hedge cutting</li>
                  <li>Weeding</li>
                  <li>General tidy-up</li>
                  <li>Suitable garden debris</li>
                </ul>

                <p>
                  This can be combined with internal void-property maintenance
                  where required.
                </p>
              </article>

              <article className={styles.outlineCard}>
                <span className={styles.cardEyebrow}>SEASONAL</span>

                <h2>Seasonal Garden Maintenance</h2>

                <p>
                  Garden maintenance requirements change throughout the year.
                  Suitable seasonal work can include:
                </p>

                <ul>
                  <li>Spring tidy-ups</li>
                  <li>Regular summer mowing</li>
                  <li>Hedge and shrub maintenance</li>
                  <li>Autumn tidy-ups</li>
                  <li>General preparation before winter</li>
                </ul>

                <p>
                  Services are based on practical garden maintenance rather
                  than specialist horticultural consultancy.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* RECURRING RENTAL */}
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.container}>
            <div className={styles.rentalGrid}>
              <div>
                <span className={styles.sectionEyebrowLight}>
                  RENTAL PROPERTIES
                </span>

                <h2>Recurring Garden Maintenance for Rental Properties</h2>

                <p>
                  Recurring visits can be arranged around the requirements of
                  the property and the agreed maintenance scope.
                </p>
              </div>

              <div className={styles.rentalFactors}>
                <span>Garden size</span>
                <span>Grass growth</span>
                <span>Hedge requirements</span>
                <span>Season</span>
                <span>Tenant arrangements</span>
                <span>Access</span>
                <span>Required frequency</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROPERTY + GARDEN */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.propertyGardenBox}>
              <div>
                <span className={styles.sectionEyebrow}>
                  PROPERTY & GARDEN
                </span>

                <h2>Need Work Inside and Outside the Property?</h2>

                <p className={styles.largeText}>
                  Garden work can sometimes form part of a wider property
                  maintenance or renovation requirement.
                </p>

                <div className={styles.bigStatement}>
                  One enquiry. One team. One point of contact.
                </div>
              </div>

              <div>
                <ul className={styles.propertyList}>
                  <li>Property repairs</li>
                  <li>Plumbing</li>
                  <li>Decorating</li>
                  <li>Flooring</li>
                  <li>Bathroom and kitchen work</li>
                  <li>Garden clearance</li>
                </ul>

                <Link
                  href="/property-maintenance"
                  className={styles.primaryButton}
                >
                  VIEW PROPERTY MAINTENANCE →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WASTE / ACCESS / QUOTATIONS */}
        <section className={`${styles.section} ${styles.softSection}`}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <article className={styles.infoCard}>
                <span className={styles.cardEyebrow}>01</span>

                <h2>Garden Waste & Clearance</h2>

                <p>
                  Your quotation will clearly state whether waste removal is
                  included.
                </p>

                <ul>
                  <li>Grass cuttings</li>
                  <li>Hedge cuttings</li>
                  <li>Shrub cuttings</li>
                  <li>Weeds</li>
                  <li>Loose vegetation</li>
                  <li>Other agreed garden waste</li>
                </ul>

                <p className={styles.smallText}>
                  Construction waste, hazardous materials, household rubbish
                  and specialist waste are separately assessed.
                </p>
              </article>

              <article className={styles.infoCard}>
                <span className={styles.cardEyebrow}>02</span>

                <h2>Garden Access</h2>

                <p>
                  Access can affect the work, equipment requirements and
                  quotation. Please let us know about:
                </p>

                <ul>
                  <li>Rear-garden access</li>
                  <li>Side access</li>
                  <li>Gates</li>
                  <li>Steps</li>
                  <li>Restricted pathways</li>
                  <li>Equipment access through the house</li>
                  <li>Parking and access limitations</li>
                </ul>
              </article>

              <article className={styles.infoCard}>
                <span className={styles.cardEyebrow}>03</span>

                <h2>Clear Garden Maintenance Quotations</h2>

                <p>
                  Quotations are based on the agreed scope rather than an
                  unexplained hourly rate.
                </p>

                <ul>
                  <li>Garden size</li>
                  <li>Condition</li>
                  <li>Grass length</li>
                  <li>Overgrowth</li>
                  <li>Hedge size</li>
                  <li>Access</li>
                  <li>Waste removal</li>
                  <li>One-off or recurring work</li>
                </ul>

                <p className={styles.smallText}>
                  Recurring visit frequency and included work are clearly
                  agreed.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>OUR PROCESS</span>

              <h2>How Your Garden Job Works</h2>

              <p>
                A straightforward process from the initial enquiry through to
                the completed work and any ongoing maintenance.
              </p>
            </div>

            <div className={styles.processGrid}>
              {processSteps.map((step) => (
                <article className={styles.processCard} key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section className={styles.areaSection}>
          <div className={styles.container}>
            <div className={styles.areaContent}>
              <span className={styles.sectionEyebrowLight}>
                SERVICE AREA
              </span>

              <h2>Garden Services Across Our Region</h2>

              <p>
                We provide garden maintenance and clearance services from
                Peterborough to Skegness and from Long Sutton to Lincoln,
                including surrounding towns, villages and rural communities.
              </p>

              <Link
                href="/areas-we-cover"
                className={styles.lightButton}
              >
                VIEW AREAS WE COVER →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${styles.section} ${styles.faqSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>Garden Services FAQs</h2>

              <p>
                Answers to common questions about garden maintenance,
                clearances and recurring garden work.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details className={styles.faqItem} key={index}>
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
          </div>
        </section>

        {/* QUOTE FORM */}
        <section
          id="garden-quote"
          className={`${styles.section} ${styles.quoteSection}`}
        >
          <div className={styles.container}>
            <div className={styles.quoteGrid}>
              <div className={styles.quoteIntro}>
                <span className={styles.sectionEyebrow}>GET A QUOTE</span>

                <h2>Request a Garden Quote</h2>

                <p>
                  Tell us what needs doing and provide photos where possible.
                  For overgrown gardens, wide photos showing the overall
                  condition are particularly useful.
                </p>

                <div className={styles.quoteContact}>
                  <span>Prefer to speak to us?</span>
                  <a href="tel:+441775518068">01775 518068</a>
                </div>
              </div>

              <form className={styles.quoteForm} action="/contact">
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Garden Service</label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="maintenance">
                        Regular Garden Maintenance
                      </option>

                      <option value="grass">
                        Grass Cutting / Lawn Mowing
                      </option>

                      <option value="strimming">Strimming</option>

                      <option value="hedges">
                        Hedge / Shrub Cutting
                      </option>

                      <option value="weeding">Garden Weeding</option>

                      <option value="tidy-up">Garden Tidy-Up</option>

                      <option value="clearance">
                        Overgrown Garden Clearance
                      </option>

                      <option value="other">Other Garden Work</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="customerType">I Am A</label>

                    <select
                      id="customerType"
                      name="customerType"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one
                      </option>

                      <option value="homeowner">Homeowner</option>
                      <option value="landlord">Landlord</option>
                      <option value="agent">Letting Agent</option>
                      <option value="manager">Property Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="postcode">Postcode</label>

                    <input
                      id="postcode"
                      name="postcode"
                      type="text"
                      placeholder="Your postcode"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">
                    Tell Us About The Garden
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what needs doing. Photos can be provided where possible."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  REQUEST A GARDEN QUOTE
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaContent}>
              <span className={styles.sectionEyebrowLight}>
                GET YOUR GARDEN UNDER CONTROL
              </span>

              <h2>Need Help With Your Garden?</h2>

              <p>
                Whether you need regular mowing, a seasonal tidy-up, hedge
                maintenance or an overgrown garden brought back under control,
                tell Alpha what needs doing.
              </p>

              <p>
                We&apos;ll assess the garden, agree the work and provide a
                clear quotation.
              </p>

              <div className={styles.finalStatement}>
                One Team. Complete Property Care.
              </div>

              <div className={styles.finalActions}>
                <Link
                  href="#garden-quote"
                  className={styles.goldButton}
                >
                  REQUEST A GARDEN QUOTE
                </Link>

                <a
                  href="tel:+441775518068"
                  className={styles.finalPhone}
                >
                  CALL 01775 518068
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