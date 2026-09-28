import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./RoofingGutters.module.css";

export const metadata: Metadata = {
  title: "Roof Repairs & Gutter Services | Alpha",
  description:
    "Roof maintenance, suitable roof repairs, gutter cleaning, gutter repairs and downpipe work for homeowners, landlords and managed properties.",
};

const roofMaintenance = [
  "Replacing suitable damaged roof components",
  "Localised repair work",
  "Minor weather-related repairs",
  "Maintenance around accessible roof areas",
  "Making good suitable defects",
  "Assessing visible roof-maintenance concerns",
];

const gutterCleaning = [
  "Removing loose debris",
  "Clearing suitable gutter sections",
  "Clearing accessible outlets",
  "Checking visible water-flow routes",
  "Identifying obvious repair issues",
];

const gutterRepairs = [
  "Leaking gutter joints",
  "Damaged gutter sections",
  "Loose brackets",
  "Misaligned sections",
  "Failed seals",
  "Localised replacement",
  "Connection problems",
];

const downpipeServices = [
  "Loose downpipes",
  "Damaged sections",
  "Failed connections",
  "Replacement sections",
  "Brackets",
  "Accessible blockages",
  "Connections between gutters and downpipes",
];

const rainwaterServices = [
  "Gutters",
  "Outlets",
  "Downpipes",
  "Connections",
  "Brackets",
  "Localised roofline defects",
];

const waterDamage = [
  "Damp or stained ceilings",
  "Damaged wall finishes",
  "Peeling paint",
  "Deteriorated exterior surfaces",
  "Damaged plaster",
  "Making-good requirements",
];

const stormDamage = [
  "Displaced suitable roof components",
  "Loose guttering",
  "Damaged downpipes",
  "Overflowing gutters",
  "Localised water ingress",
];

const accessSafety = [
  "Building height",
  "Ground conditions",
  "Working area",
  "Required access equipment",
  "Roof condition",
  "Surrounding hazards",
  "Scope of the repair",
];

const landlordServices = [
  "Gutter cleaning",
  "Gutter repairs",
  "Downpipe repairs",
  "Suitable roof maintenance",
  "Water-ingress investigation",
  "Related property repairs",
  "Void-property maintenance",
  "Pre-tenancy maintenance",
];

const voidServices = [
  "Property repairs",
  "Plumbing",
  "Decorating",
  "Flooring",
  "Garden clearance",
  "General preparation before occupation",
];

const materialFactors = [
  "Existing system",
  "Type of repair",
  "Compatibility",
  "Size and profile",
  "Property",
  "Access",
  "Condition of surrounding components",
];

const quotationFactors = [
  "Type of fault",
  "Extent of damage",
  "Access",
  "Building height",
  "Materials",
  "Repair area",
  "Additional equipment required",
  "Related property repairs",
];

const processSteps = [
  {
    number: "1",
    title: "Tell Us About the Problem",
    text: "Send photographs and details of the issue where possible.",
  },
  {
    number: "2",
    title: "Assessment",
    text: "We assess the visible problem, access and likely work required.",
  },
  {
    number: "3",
    title: "Agree the Scope",
    text: "We establish the repair or maintenance work to be undertaken.",
  },
  {
    number: "4",
    title: "Quotation",
    text: "You'll receive a quotation based on the agreed work.",
  },
  {
    number: "5",
    title: "Repair or Maintenance",
    text: "The agreed suitable roof, gutter or downpipe work is completed.",
  },
  {
    number: "6",
    title: "Related Property Work",
    text: "Where appropriate, surrounding damage can then be assessed through our property-maintenance services.",
  },
];

const faqs = [
  {
    question: "Do you repair roofs?",
    answer:
      "Alpha can undertake suitable localised roof maintenance and repair work where the project, access and required work fall within our capability.",
  },
  {
    question: "Do you replace entire roofs?",
    answer:
      "Our current website focuses on suitable roof maintenance and localised repairs. Larger or specialist roofing requirements will need to be assessed individually before we confirm whether they fall within our service scope.",
  },
  {
    question: "Do you clean gutters?",
    answer:
      "Yes. Alpha can undertake suitable gutter cleaning and removal of accessible debris subject to property access and site conditions.",
  },
  {
    question: "Do you repair leaking gutters?",
    answer:
      "Yes. Suitable gutter leaks, joints, brackets and damaged sections can be assessed for repair or replacement.",
  },
  {
    question: "Can you replace guttering?",
    answer:
      "Yes, suitable replacement sections or larger guttering work can be undertaken where agreed following assessment.",
  },
  {
    question: "Do you repair downpipes?",
    answer:
      "Yes. Alpha can undertake suitable downpipe repairs and replacement sections.",
  },
  {
    question: "Can you repair damage caused by a roof leak?",
    answer:
      "Once the source has been dealt with, Alpha can assess suitable internal or exterior property repairs through our wider maintenance services.",
  },
  {
    question: "Do you work with landlords and letting agents?",
    answer:
      "Yes. Alpha provides suitable roof and gutter maintenance alongside wider property services for landlords, letting agents and property managers.",
  },
  {
    question: "Do you offer emergency roof repairs?",
    answer:
      "If you have an urgent roof or gutter problem, call 01775 518068. We can discuss the issue and confirm whether Alpha can assist based on the type of problem, location, access and current conditions.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use our quote request form and include photographs where possible, especially images showing the affected roofline, guttering, downpipe and any visible internal damage.",
  },
];

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className={styles.serviceList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Section({
  eyebrow,
  title,
  children,
  tone = "white",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tone?: "white" | "cream" | "dark";
}) {
  return (
    <section className={`${styles.section} ${styles[tone]}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className={styles.sectionContent}>{children}</div>
      </div>
    </section>
  );
}

export default function RoofingGuttersPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroEyebrow}>
                  ROOFING &amp; GUTTERS
                </span>

                <h1>Roof Repairs, Guttering &amp; Property Maintenance</h1>

                <p className={styles.heroLead}>
                  Problems with roofs, gutters and rainwater systems can allow
                  water to damage areas far beyond the original fault.
                </p>

                <p>
                  Alpha Property &amp; Gardening Services provides suitable
                  roof maintenance, guttering and rainwater-system repairs for
                  homeowners, landlords and property managers.
                </p>

                <p>
                  From blocked or leaking gutters and damaged downpipes to
                  suitable roof repairs and associated property maintenance, we
                  can assess the problem and the surrounding work through one
                  team.
                </p>

                <div className={styles.heroMessage}>
                  Protecting the property from the top down.
                </div>

                <div className={styles.heroActions}>
                  <Link href="/request-a-quote" className={styles.primaryButton}>
                    REQUEST A ROOF &amp; GUTTER QUOTE
                  </Link>

                  <a href="tel:01775518068" className={styles.secondaryButton}>
                    CALL 01775 518068
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.visualCircle}>
                  <div className={styles.roofShape}>
                    <div className={styles.roofTop} />
                    <div className={styles.roofBody}>
                      <span>ROOF</span>
                      <small>GUTTERS</small>
                    </div>
                    <div className={styles.gutterLine} />
                    <div className={styles.downpipe} />
                  </div>

                  <div className={styles.waterDrop}>⌄</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <Section
          eyebrow="ROOF & GUTTER MAINTENANCE"
          title="Roof & Gutter Maintenance From One Property Team"
          tone="cream"
        >
          <p>
            Roofs and guttering play an important role in keeping water away
            from the building.
          </p>

          <p>
            A relatively small defect can sometimes lead to damp patches,
            damaged ceilings, deteriorated exterior surfaces or other property
            problems if water continues entering or overflowing.
          </p>

          <p>
            Alpha can assess suitable roofing and gutter-maintenance
            requirements and, where appropriate, deal with related property
            repairs through our wider maintenance service.
          </p>

          <p>
            This can be particularly useful where the original problem has
            affected more than one part of the property.
          </p>

          <h3 className={styles.highlightHeading}>
            One enquiry. One team. Complete property care.
          </h3>
        </Section>

        {/* ROOF MAINTENANCE */}
        <Section
          eyebrow="ROOF MAINTENANCE"
          title="Roof Maintenance & Suitable Repairs"
        >
          <p>
            Alpha can undertake suitable roof maintenance and repair work where
            the project falls within our capability, access requirements and
            agreed scope.
          </p>

          <p>Potential work may include:</p>

          <ServiceList items={roofMaintenance} />

          <p>
            The exact work required should always be assessed before a
            quotation is provided.
          </p>

          <div className={styles.scopeNote}>
            Do not advertise complete re-roofing, structural roofing or
            specialist roofing systems unless Alpha specifically confirms
            those services.
          </div>
        </Section>

        {/* ROOF LEAKS */}
        <Section eyebrow="ROOF LEAKS" title="Roof Leaks & Water Ingress">
          <p>
            Water entering through the roof can damage ceilings, walls,
            insulation, timber and interior finishes.
          </p>

          <p>
            Where the source is suitable for Alpha to investigate and repair,
            we can assess the visible defect and the surrounding property
            damage.
          </p>

          <p>
            The original source of the leak should be dealt with before
            internal decoration or finishing work is completed.
          </p>

          <p>Potential related work may include:</p>

          <ServiceList
            items={[
              "Suitable roof repairs",
              "Ceiling repairs",
              "Wall repairs",
              "Making good",
              "Decorating following repairs",
            ]}
          />

          <div className={styles.linkRow}>
            <Link href="/property-maintenance" className={styles.textLink}>
              VIEW PROPERTY MAINTENANCE →
            </Link>
          </div>
        </Section>

        {/* DAMAGED ROOF AREAS */}
        <Section
          eyebrow="DAMAGED ROOF AREAS"
          title="Damaged Roof Areas"
          tone="cream"
        >
          <p>
            Weather, age and general deterioration can cause individual roof
            components to become damaged or displaced.
          </p>

          <p>
            Alpha can assess suitable localised repair work where safe access
            and the required repair fall within our service capability.
          </p>

          <p>
            This may include appropriate repairs to isolated roof areas rather
            than automatically assuming the whole roof requires replacement.
          </p>

          <p>
            If inspection identifies a larger or specialist roofing
            requirement, this should be discussed with the customer before any
            further work is agreed.
          </p>
        </Section>

        {/* GUTTER CLEANING */}
        <Section
          eyebrow="GUTTER CLEANING"
          title="Gutter Cleaning & Blockage Removal"
        >
          <p>
            Leaves, moss and general debris can prevent gutters from carrying
            rainwater away properly.
          </p>

          <p>
            Blocked gutters can overflow and allow water to run down walls or
            collect around parts of the building.
          </p>

          <p>
            Alpha can undertake suitable gutter cleaning and blockage removal
            subject to access and site conditions.
          </p>

          <p>Work may include:</p>

          <ServiceList items={gutterCleaning} />

          <div className={styles.linkRow}>
            <Link href="/request-a-quote" className={styles.textLink}>
              REQUEST A GUTTER QUOTE →
            </Link>
          </div>
        </Section>

        {/* GUTTER REPAIRS */}
        <Section
          eyebrow="GUTTER REPAIRS"
          title="Leaking & Damaged Gutters"
          tone="cream"
        >
          <p>
            Gutters can leak because of damaged joints, failed seals, movement,
            cracks or incorrectly positioned sections.
          </p>

          <p>
            Alpha can assess suitable gutter repairs and replacement sections
            where appropriate.
          </p>

          <p>Potential work may include:</p>

          <ServiceList items={gutterRepairs} />

          <p>
            Where replacement is more practical than continued repair, this
            can be discussed as part of the quotation.
          </p>
        </Section>

        {/* GUTTER REPLACEMENT */}
        <Section eyebrow="GUTTER REPLACEMENT" title="Gutter Replacement">
          <p>
            Where existing guttering has deteriorated beyond practical repair,
            replacement may be the more appropriate solution.
          </p>

          <p>Alpha can assess suitable gutter replacement work subject to:</p>

          <ServiceList
            items={[
              "Property type",
              "Access",
              "Existing system",
              "Required materials",
              "Connection points",
              "Condition of surrounding components",
            ]}
          />

          <p>The quotation should clearly state whether the work involves:</p>

          <ServiceList
            items={[
              "Local replacement sections",
              "Individual elevations",
              "Larger gutter replacement",
              "Downpipes",
              "Brackets and fittings",
            ]}
          />
        </Section>

        {/* DOWNPIPES */}
        <Section
          eyebrow="DOWNPIPES"
          title="Downpipe Repairs & Replacement"
          tone="cream"
        >
          <p>
            Downpipes carry rainwater from gutters towards the drainage system.
          </p>

          <p>
            Damage, loose fittings or blockages can cause water to spill
            against walls or collect around the building.
          </p>

          <p>Alpha can undertake suitable work involving:</p>

          <ServiceList items={downpipeServices} />

          <p>
            Where an underground drainage problem is suspected, further
            investigation may be required beyond ordinary gutter maintenance.
          </p>
        </Section>

        {/* FASCIAS */}
        <Section
          eyebrow="FASCIAS & SOFFITS"
          title="Fascia & Soffit Maintenance"
        >
          <p>
            Fascias and soffits form part of the roofline and can deteriorate
            through age, weather or prolonged exposure to water.
          </p>

          <p>
            Alpha can assess suitable maintenance and repair work to accessible
            fascia and soffit areas where the project falls within our
            capability.
          </p>

          <div className={styles.scopeNote}>
            Do not automatically advertise complete roofline replacement or
            specialist uPVC systems unless Alpha confirms that service.
          </div>
        </Section>

        {/* RAINWATER MANAGEMENT */}
        <Section
          eyebrow="RAINWATER MANAGEMENT"
          title="Helping Rainwater Move Away From the Property"
          tone="cream"
        >
          <p>Guttering works as a system.</p>

          <p>
            The roof collects rainwater, gutters carry it towards outlets and
            downpipes move it away from the roofline.
          </p>

          <p>
            A problem at any stage can result in overflowing water or staining
            around the building.
          </p>

          <p>Alpha can assess visible issues involving:</p>

          <ServiceList items={rainwaterServices} />

          <p>
            The aim is to deal with the fault rather than simply treating the
            visible symptom.
          </p>
        </Section>

        {/* WATER DAMAGE */}
        <Section
          eyebrow="WATER DAMAGE"
          title="Has a Roof or Gutter Problem Damaged the Property?"
        >
          <p>
            A roofing or gutter fault can sometimes cause damage elsewhere.
          </p>

          <p>Examples may include:</p>

          <ServiceList items={waterDamage} />

          <p>
            Because Alpha provides broader property maintenance, suitable
            repairs can also be assessed once the source of water ingress has
            been resolved.
          </p>

          <div className={styles.linkRow}>
            <Link href="/property-maintenance" className={styles.textLink}>
              VIEW PROPERTY MAINTENANCE →
            </Link>

            <Link href="/painting-decorating" className={styles.textLink}>
              VIEW PAINTING &amp; DECORATING →
            </Link>
          </div>
        </Section>

        {/* STORM DAMAGE */}
        <Section
          eyebrow="STORM & WEATHER DAMAGE"
          title="Weather-Related Roof & Gutter Problems"
          tone="cream"
        >
          <p>
            Strong winds, heavy rainfall and storms can expose weaknesses in
            roofs and rainwater systems.
          </p>

          <p>
            Alpha can assess suitable weather-related maintenance and repairs
            where safe and practical to do so.
          </p>

          <p>Examples might include:</p>

          <ServiceList items={stormDamage} />

          <div className={styles.scopeNote}>
            Do not make guaranteed emergency-response promises or claim storm
            repairs beyond Alpha&apos;s confirmed capability.
          </div>
        </Section>

        {/* ACCESS & SAFETY */}
        <Section eyebrow="ACCESS & SAFETY" title="Safe Access Comes First">
          <p>Roofline work depends heavily on safe access.</p>

          <p>Before work is agreed, Alpha should assess:</p>

          <ServiceList items={accessSafety} />

          <p>
            Where scaffolding, specialist access equipment or specialist
            roofing expertise is required, this should be identified before
            the work proceeds.
          </p>

          <p className={styles.safetyNote}>
            This is a customer-facing safety statement, not an internal
            instruction.
          </p>
        </Section>

        {/* LANDLORDS */}
        <Section
          eyebrow="LANDLORDS"
          title="Roofing & Gutter Maintenance for Landlords"
          tone="cream"
        >
          <p>
            Roof and gutter problems can quickly become more expensive if water
            damage develops inside a rental property.
          </p>

          <p>
            Alpha can provide suitable roofline and gutter maintenance for
            landlords, letting agents and property managers.
          </p>

          <p>Potential work can include:</p>

          <ServiceList items={landlordServices} />

          <p>
            Where internal damage has resulted from a leak, Alpha can also
            assess suitable repair and decorating work after the source is
            addressed.
          </p>

          <div className={styles.linkRow}>
            <Link href="/landlords-letting-agents" className={styles.textLink}>
              VIEW LANDLORD &amp; LETTING AGENT SERVICES →
            </Link>
          </div>
        </Section>

        {/* VOID PROPERTIES */}
        <Section eyebrow="VOID PROPERTIES" title="Roof & Gutter Checks for Vacant Properties">
          <p>
            Vacant properties can sometimes hide developing maintenance issues
            because there is nobody living there to spot them early.
          </p>

          <p>
            Where required, Alpha can assess visible roofline and gutter
            concerns as part of broader void-property maintenance.
          </p>

          <p>This may be combined with:</p>

          <ServiceList items={voidServices} />
        </Section>

        {/* RENOVATIONS */}
        <Section
          eyebrow="PROPERTY RENOVATIONS"
          title="Roofing & Guttering Within Property Projects"
          tone="cream"
        >
          <p>
            Roofline and gutter maintenance may form part of a larger property
            renovation or refurbishment.
          </p>

          <p>
            Where appropriate, Alpha can assess these requirements alongside
            internal repairs, decorating, kitchens, bathrooms and exterior
            maintenance.
          </p>

          <div className={styles.linkRow}>
            <Link href="/property-renovations" className={styles.textLink}>
              VIEW PROPERTY RENOVATIONS →
            </Link>
          </div>
        </Section>

        {/* GARDEN CONNECTION */}
        <Section
          eyebrow="GARDEN & EXTERIOR CONNECTION"
          title="Roofline & Outside Property Maintenance"
        >
          <p>
            Gutters, downpipes and exterior property maintenance often overlap
            with work around the outside of the home.
          </p>

          <p>
            Where a project also involves garden clearance, exterior
            maintenance or other property work, Alpha can assess those
            requirements through the same enquiry.
          </p>

          <div className={styles.linkRow}>
            <Link href="/garden-services" className={styles.textLink}>
              VIEW GARDEN SERVICES →
            </Link>
          </div>
        </Section>

        {/* SMALL / LARGE */}
        <Section
          eyebrow="SMALL REPAIR OR LARGER JOB"
          title="From One Gutter Joint to Wider Property Maintenance"
          tone="cream"
        >
          <p>Not every roofline problem requires a major project.</p>

          <p>
            Alpha can assess suitable work ranging from individual gutter or
            downpipe faults through to larger maintenance jobs affecting
            several areas of the property.
          </p>

          <h3 className={styles.highlightHeading}>
            No job is too big or too small — within the services we provide.
          </h3>
        </Section>

        {/* MATERIALS */}
        <Section eyebrow="MATERIALS" title="Roofing & Gutter Materials">
          <p>The materials required will depend on:</p>

          <ServiceList items={materialFactors} />

          <p>
            Your quotation should clearly state the work and materials included
            within the agreed scope.
          </p>

          <p>
            Where matching an existing system is not practical, suitable
            alternatives can be discussed before work begins.
          </p>
        </Section>

        {/* QUOTATIONS */}
        <Section
          eyebrow="CLEAR QUOTATIONS"
          title="Clear Roof & Gutter Quotations"
          tone="cream"
        >
          <p>Costs depend on factors including:</p>

          <ServiceList items={quotationFactors} />

          <p>
            Alpha prefers to provide clear quotations based on the agreed
            project scope.
          </p>

          <p>
            If additional defects become apparent once work or access begins,
            these should be discussed before additional work proceeds.
          </p>
        </Section>

        {/* PROCESS */}
        <Section
          eyebrow="PROJECT PROCESS"
          title="How Your Roof or Gutter Job Works"
        >
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div className={styles.processCard} key={step.number}>
                <span className={styles.processNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SERVICE AREA */}
        <Section
          eyebrow="SERVICE AREA"
          title="Roof & Gutter Services Across Our Region"
          tone="cream"
        >
          <p>
            Alpha provides suitable roofing, gutter and rainwater-system
            maintenance throughout our regional service area, extending{" "}
            <strong>
              from Peterborough to Skegness and from Long Sutton to Lincoln
            </strong>
            , including surrounding towns, villages and rural communities.
          </p>

          <div className={styles.linkRow}>
            <Link href="/areas-we-cover" className={styles.textLink}>
              VIEW AREAS WE COVER →
            </Link>
          </div>
        </Section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>FAQS</span>
              <h2>Roofing &amp; Gutter Questions</h2>
            </div>

            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <details className={styles.faqItem} key={faq.question}>
                  <summary>{faq.question}</summary>
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <span className={styles.eyebrow}>ROOF &amp; GUTTER SERVICES</span>

              <h2>Need Roof or Gutter Maintenance?</h2>

              <p>
                Whether you have a leaking gutter, damaged downpipe, blocked
                rainwater system or suitable roof repair, tell Alpha what
                you&apos;ve noticed.
              </p>

              <p>
                We&apos;ll assess the problem, access and work required before
                providing a clear quotation.
              </p>

              <h3>One Team. Complete Property Care.</h3>

              <div className={styles.heroActions}>
                <Link href="/request-a-quote" className={styles.primaryButton}>
                  REQUEST A ROOF &amp; GUTTER QUOTE
                </Link>

                <a href="tel:01775518068" className={styles.secondaryButton}>
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