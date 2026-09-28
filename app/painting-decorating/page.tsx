import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./PaintingDecorating.module.css";

export const metadata: Metadata = {
  title: "Painting & Decorating Services | Alpha",
  description:
    "Interior and exterior painting and decorating for homeowners, landlords and property renovations, including preparation, repairs, walls, ceilings and woodwork.",
};

const interiorServices = [
  "Living rooms",
  "Bedrooms",
  "Hallways",
  "Landings",
  "Dining rooms",
  "Kitchens",
  "Bathrooms where suitable",
  "Utility rooms",
  "Home offices",
  "Rental properties",
  "Whole-property redecorations",
];

const wallPreparation = [
  "Filling suitable holes",
  "Crack preparation",
  "Making good",
  "Sanding",
  "Surface preparation",
  "Repairing suitable damaged areas",
  "Preparing previously painted surfaces",
];

const woodworkServices = [
  "Internal doors",
  "Door frames",
  "Skirting boards",
  "Architraves",
  "Window boards",
  "Other suitable interior timber finishes",
];

const preparationServices = [
  "Filling suitable holes",
  "Preparing cracks",
  "Sanding",
  "Removing loose or flaking coatings",
  "Making good around previous fittings",
  "Preparing repaired surfaces",
  "Sealant work where appropriate",
  "Surface cleaning before decoration",
];

const repairServices = [
  "Wall repairs",
  "Ceiling repairs",
  "Plaster repairs",
  "Making good after previous work",
  "Preparation following removal of fixtures",
  "Repairing suitable surface damage",
];

const wholePropertyServices = [
  "Newly purchased properties",
  "Properties being prepared for sale",
  "Rental properties",
  "End-of-tenancy work",
  "Void properties",
  "Complete refurbishments",
  "Whole-house renovations",
];

const newHomeServices = [
  "Wall and ceiling repairs",
  "Plumbing repairs",
  "Flooring",
  "Kitchen work",
  "Bathroom work",
  "General property maintenance",
  "Complete room renovation",
];

const renovationServices = [
  "Complete property renovations",
  "Kitchen renovations",
  "Bathroom renovations",
  "Flooring",
  "Carpentry",
  "Wall and ceiling repairs",
];

const kitchenServices = [
  "Wall preparation",
  "Ceiling preparation",
  "Painting",
  "Woodwork",
  "Finishing around newly installed fittings",
];

const exteriorServices = [
  "Suitable exterior timber",
  "Doors",
  "Frames",
  "Exterior painted surfaces",
  "Smaller property-maintenance decorating work",
];

const landlordServices = [
  "Individual room decoration",
  "Complete property redecoration",
  "Walls and ceilings",
  "Woodwork",
  "Making good",
  "End-of-tenancy decorating",
  "Void-property decoration",
  "Decorating following repairs",
  "Decorating as part of renovation work",
];

const voidServices = [
  "Individual room touch-ups",
  "Selected repairs and decoration",
  "Several rooms redecorated",
  "Complete redecoration",
  "Decorating following refurbishment",
];

const smallJobServices = [
  "One bedroom",
  "Living room",
  "Hall, stairs and landing",
  "Kitchen",
  "Bathroom",
  "Several rooms",
  "Full rental property",
  "Whole-property renovation",
];

const materialServices = [
  "What Alpha is supplying",
  "What the customer is supplying",
  "Which surfaces are included",
  "Preparation included",
  "Number/type of agreed finishes where relevant",
  "Any excluded specialist products or treatments",
];

const quotationFactors = [
  "Room size",
  "Number of rooms",
  "Surface condition",
  "Preparation required",
  "Existing coatings",
  "Woodwork",
  "Access",
  "Products and finishes",
  "Repairs required before decorating",
];

const processSteps = [
  {
    number: "1",
    title: "Tell Us About the Property",
    text: "Send us details of the rooms or areas you want decorated, along with photographs where possible.",
  },
  {
    number: "2",
    title: "Assessment",
    text: "We assess the surfaces, preparation required and intended finish.",
  },
  {
    number: "3",
    title: "Agree the Scope",
    text: "We confirm which rooms, surfaces, preparation and finishes are included.",
  },
  {
    number: "4",
    title: "Quotation",
    text: "You'll receive a quotation based on the agreed decorating work.",
  },
  {
    number: "5",
    title: "Preparation",
    text: "Surfaces are prepared and agreed making-good work is completed.",
  },
  {
    number: "6",
    title: "Painting & Decorating",
    text: "The agreed finishes are applied.",
  },
  {
    number: "7",
    title: "Finishing",
    text: "Final agreed detailing and finishing work are completed before handover.",
  },
];

const faqs = [
  {
    question: "Do you paint individual rooms?",
    answer:
      "Yes. Alpha can undertake individual room decorating as well as multi-room and complete property projects.",
  },
  {
    question: "Do you paint entire houses?",
    answer:
      "Yes. Complete property redecoration can be undertaken where agreed as part of the project.",
  },
  {
    question: "Do you prepare walls before painting?",
    answer:
      "Where required, suitable surface preparation and making good can be included within the quotation.",
  },
  {
    question: "Can you repair walls before decorating?",
    answer:
      "Yes. Suitable wall and ceiling repairs can be assessed through Alpha's wider property-maintenance service before decoration begins.",
  },
  {
    question: "Do you paint doors and skirting boards?",
    answer:
      "Yes. Suitable internal woodwork such as doors, frames, skirting and architraves can be included within decorating projects.",
  },
  {
    question: "Do you provide exterior painting?",
    answer:
      "Alpha can undertake suitable exterior painting and decorating subject to the surface, condition, access and project requirements.",
  },
  {
    question: "Do you decorate rental properties?",
    answer:
      "Yes. Alpha provides painting and decorating for landlords, letting agents and property managers, including end-of-tenancy and void-property work.",
  },
  {
    question: "Can decorating be included in a property renovation?",
    answer:
      "Yes. Painting and decorating can form part of complete property, kitchen and bathroom renovation projects.",
  },
  {
    question: "Can you decorate after repairing a leak or damaged wall?",
    answer:
      "Depending on the repair required, Alpha can assess both the property repair and the subsequent decoration through one team.",
  },
  {
    question: "Do you supply the paint?",
    answer:
      "This can be agreed as part of the quotation. Your quotation will clearly confirm which materials Alpha is supplying and which, if any, are being supplied by you.",
  },
  {
    question: "How do I request a decorating quote?",
    answer:
      "Use our quote request form and provide details of the rooms or areas you want decorated. Photographs and approximate room sizes are helpful where available.",
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
  items,
  tone = "white",
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  items?: string[];
  tone?: "white" | "cream";
}) {
  return (
    <section
      className={`${styles.section} ${
        tone === "cream" ? styles.creamSection : ""
      }`}
    >
      <div className={styles.container}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

        <h2>{title}</h2>

        <div className={styles.content}>{children}</div>

        {items && <ServiceList items={items} />}
      </div>
    </section>
  );
}

export default function PaintingDecoratingPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                ALPHA PROPERTY &amp; GARDENING SERVICES
              </p>

              <h1>Painting &amp; Decorating Services</h1>

              <p className={styles.heroLead}>
                From refreshing a single room to redecorating an entire
                property, Alpha Property &amp; Gardening Services provides
                painting and decorating for homeowners, landlords, letting
                agents and renovation projects.
              </p>

              <p>
                Good decorating starts before the paint is opened. Where
                required, we can include suitable preparation, making good,
                minor surface repairs and surrounding property work before the
                final finish is applied.
              </p>

              <p>
                Whether you&apos;re modernising your home, preparing a rental
                property or completing the final stage of a renovation, Alpha
                can assess the work as part of the property as a whole.
              </p>

              <div className={styles.heroMessage}>
                Preparation. Decoration. Finished properly.
              </div>

              <div className={styles.heroButtons}>
                <Link href="/request-a-quote" className={styles.primaryButton}>
                  REQUEST A DECORATING QUOTE
                </Link>

                <a href="tel:01775518068" className={styles.secondaryButton}>
                  CALL 01775 518068
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualCircle}>
                <div className={styles.paintCan}>
                  <span>ALPHA</span>
                  <small>PAINTING &amp; DECORATING</small>
                </div>

                <div className={styles.brush} />
                <div className={styles.roller} />
              </div>

              <div className={styles.visualBadge}>
                <strong>Preparation</strong>
                <span>Decoration</span>
                <span>Finishing</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <Section title="Painting & Decorating From One Property Team">
          <p>
            The final finish of a room depends heavily on the condition of the
            surfaces underneath.
          </p>

          <p>
            Cracks, damaged plaster, old fixings, failed sealant and tired
            woodwork can all affect the result if they aren&apos;t dealt with
            properly first.
          </p>

          <p>
            Alpha&apos;s wider property-maintenance capability means suitable
            preparation and repairs can be considered alongside the decorating
            rather than automatically requiring the customer to arrange another
            contractor.
          </p>

          <p>We can undertake painting and decorating as:</p>

          <ServiceList
            items={[
              "A standalone project",
              "Part of property maintenance",
              "Part of a bathroom or kitchen project",
              "Part of a landlord or void-property turnaround",
              "The finishing stage of a larger renovation",
            ]}
          />

          <h3 className={styles.highlightHeading}>
            One enquiry. One team. Complete property care.
          </h3>
        </Section>

        {/* INTERIOR */}
        <Section
          eyebrow="INTERIOR PAINTING"
          title="Interior Painting & Decorating"
          tone="cream"
          items={interiorServices}
        >
          <p>
            Alpha can undertake suitable interior painting and decorating
            throughout residential and rental properties.
          </p>

          <p>Projects may include:</p>

          <Link href="/request-a-quote" className={styles.textLink}>
            REQUEST AN INTERIOR DECORATING QUOTE →
          </Link>
        </Section>

        {/* WALLS */}
        <Section eyebrow="WALLS" title="Wall Painting & Decoration">
          <p>
            Walls are often the largest finished surface in a room and have a
            major effect on its overall appearance.
          </p>

          <p>
            Before decorating, Alpha can assess whether surfaces require
            preparation such as:
          </p>

          <ServiceList items={wallPreparation} />

          <p className={styles.finalParagraph}>
            The agreed preparation should be included within the quotation.
          </p>
        </Section>

        {/* CEILINGS */}
        <Section eyebrow="CEILINGS" title="Ceiling Painting" tone="cream">
          <p>
            Ceilings can show staining, cracking, previous repairs and general
            wear more noticeably than other surfaces.
          </p>

          <p>
            Alpha can undertake suitable ceiling preparation and painting as
            part of individual room decorating or complete property work.
          </p>

          <p>
            Where a ceiling requires more substantial repair before decoration,
            this can be assessed through our wider property-maintenance service.
          </p>

          <Link href="/property-maintenance" className={styles.textLink}>
            VIEW PROPERTY MAINTENANCE →
          </Link>
        </Section>

        {/* WOODWORK */}
        <Section
          eyebrow="WOODWORK"
          title="Doors, Skirting & Interior Woodwork"
        >
          <p>
            Decorating woodwork can make a significant difference to the
            finished appearance of a room.
          </p>

          <p>Suitable work may include:</p>

          <ServiceList items={woodworkServices} />

          <p className={styles.finalParagraph}>
            Preparation will depend on the existing coating, condition and
            required finish.
          </p>
        </Section>

        {/* PREPARATION */}
        <Section
          eyebrow="PREPARATION"
          title="Surface Preparation & Making Good"
          tone="cream"
        >
          <p>
            Good preparation is one of the most important parts of decorating.
          </p>

          <p>
            Where agreed, Alpha can undertake suitable preparation before
            painting begins.
          </p>

          <p>This may include:</p>

          <ServiceList items={preparationServices} />

          <p className={styles.finalParagraph}>
            Preparation requirements should be assessed before the project is
            quoted wherever reasonably possible.
          </p>
        </Section>

        {/* REPAIRS */}
        <Section
          eyebrow="DAMAGED WALLS & PLASTER"
          title="Repairs Before Decorating"
        >
          <p>
            Some rooms need more than ordinary decorating preparation.
          </p>

          <p>
            If walls or ceilings are damaged, Alpha can assess suitable repairs
            before the final decoration begins.
          </p>

          <p>This may include:</p>

          <ServiceList items={repairServices} />

          <p className={styles.linkIntro}>For larger repair requirements:</p>

          <Link href="/property-maintenance" className={styles.textLink}>
            VIEW PROPERTY MAINTENANCE →
          </Link>

          <p className={styles.linkIntro}>
            For projects involving broader improvements:
          </p>

          <Link href="/property-renovations" className={styles.textLink}>
            VIEW PROPERTY RENOVATIONS →
          </Link>
        </Section>

        {/* WHOLE PROPERTY */}
        <Section
          eyebrow="WHOLE-PROPERTY DECORATING"
          title="Complete Property Redecoration"
          tone="cream"
          items={wholePropertyServices}
        >
          <p>
            Alpha can undertake painting and decorating across several rooms or
            throughout a complete property.
          </p>

          <p>
            This can be particularly useful for properties being prepared for
            sale, rental, occupation, refurbishment or renovation.
          </p>

          <p>
            Rather than treating each room as a separate job, the property can
            be assessed as one decorating project.
          </p>
        </Section>

        {/* NEW HOME */}
        <Section
          eyebrow="NEWLY PURCHASED HOMES"
          title="Decorating a Property You've Just Bought?"
        >
          <p>
            Many newly purchased properties need decorating before they feel
            like home.
          </p>

          <p>
            Alpha can assess decorating alongside any other work required
            before occupation.
          </p>

          <p>This may include:</p>

          <ServiceList items={newHomeServices} />

          <Link href="/property-renovations" className={styles.textLink}>
            VIEW PROPERTY RENOVATIONS →
          </Link>
        </Section>

        {/* RENOVATIONS */}
        <Section
          eyebrow="RENOVATIONS"
          title="Painting & Decorating Within Property Renovations"
          tone="cream"
          items={renovationServices}
        >
          <p>
            Painting and decorating is often one of the final stages of a
            renovation.
          </p>

          <p>
            Alpha can coordinate decorating with the preparation, repairs and
            installation work already taking place within the property.
          </p>

          <p>
            This can be especially useful for projects involving:
          </p>

          <Link href="/property-renovations" className={styles.textLink}>
            VIEW PROPERTY RENOVATIONS →
          </Link>
        </Section>

        {/* KITCHENS */}
        <Section eyebrow="KITCHENS" title="Kitchen Painting & Decorating">
          <p>
            Decorating can form part of a wider kitchen renovation or be
            completed as a standalone refresh.
          </p>

          <p>Work may involve suitable:</p>

          <ServiceList items={kitchenServices} />

          <Link href="/kitchen-services" className={styles.textLink}>
            VIEW KITCHEN SERVICES →
          </Link>
        </Section>

        {/* BATHROOMS */}
        <Section
          eyebrow="BATHROOMS"
          title="Bathroom Decorating"
          tone="cream"
        >
          <p>
            Suitable bathroom surfaces may require decorating alongside tiling,
            plumbing and other renovation work.
          </p>

          <p>
            The products and finishes used should be appropriate for the room
            and its conditions.
          </p>

          <p>
            Alpha can incorporate suitable decorating into wider bathroom
            projects where required.
          </p>

          <Link href="/bathroom-services" className={styles.textLink}>
            VIEW BATHROOM SERVICES →
          </Link>

          <div className={styles.relatedLinks}>
            <Link href="/tiling-flooring">Tiling &amp; Flooring →</Link>
          </div>
        </Section>

        {/* EXTERIOR */}
        <Section
          eyebrow="EXTERIOR DECORATING"
          title="Exterior Painting & Decorating"
        >
          <p>
            Alpha can undertake suitable exterior painting and decorating where
            the surfaces, access and project requirements are appropriate.
          </p>

          <p>Potential work may include:</p>

          <ServiceList items={exteriorServices} />

          <p>
            Exterior decorating is subject to safe and practical access. If
            scaffolding, specialist access equipment, specialist coatings or
            substantial repairs are required, we'll identify this during
            assessment and clearly confirm what is or isn't included within the
            quotation.
          </p>
        </Section>

        {/* LANDLORDS */}
        <Section
          eyebrow="LANDLORDS"
          title="Painting & Decorating for Landlords & Letting Agents"
          tone="cream"
          items={landlordServices}
        >
          <p>
            Decorating is one of the most common requirements when maintaining
            rental properties.
          </p>

          <p>
            Alpha can undertake painting and decorating for landlords, letting
            agents and property managers as part of routine maintenance,
            between tenancies or during a refurbishment.
          </p>

          <p>
            Where other maintenance is required, Alpha can combine decorating
            with plumbing, flooring, property repairs, kitchens, bathrooms and
            garden work.
          </p>

          <Link href="/landlords-letting-agents" className={styles.textLink}>
            VIEW LANDLORD &amp; LETTING AGENT SERVICES →
          </Link>
        </Section>

        {/* VOID */}
        <Section
          eyebrow="VOID PROPERTIES"
          title="Decorating Vacant & Void Properties"
        >
          <p>
            Vacant properties provide a good opportunity to undertake
            decorating without working around occupants.
          </p>

          <p>Alpha can assess whether the property requires:</p>

          <ServiceList items={voidServices} />

          <p className={styles.finalParagraph}>
            This can be combined with other void-property work where required.
          </p>
        </Section>

        {/* END OF TENANCY */}
        <Section
          eyebrow="END OF TENANCY"
          title="End-of-Tenancy Decorating"
          tone="cream"
        >
          <p>
            Rental properties may require walls, ceilings or other surfaces
            refreshing before new tenants move in.
          </p>

          <p>
            Alpha can assess decorating alongside any other repairs or
            maintenance identified after a tenancy ends.
          </p>

          <p>
            This can reduce the need for landlords or agents to organise
            multiple contractors for the same property.
          </p>
        </Section>

        {/* SMALL JOBS */}
        <Section
          eyebrow="SMALL JOBS"
          title="One Room or the Whole Property"
        >
          <p>
            Not every decorating project involves a complete house.
          </p>

          <p>
            Alpha can consider projects ranging from an individual room or
            repair area through to complete property redecoration.
          </p>

          <p>Examples include:</p>

          <ServiceList items={smallJobServices} />

          <h3 className={styles.highlightHeading}>
            No job is too big or too small.
          </h3>
        </Section>

        {/* PAINTS */}
        <Section
          eyebrow="PAINTS & MATERIALS"
          title="Paints, Finishes & Materials"
          tone="cream"
        >
          <p>
            Customers may already have selected their colours and products or
            may still be considering their options.
          </p>

          <p>Your quotation will clearly confirm:</p>

          <ServiceList items={materialServices} />

          <h3 className={styles.highlightHeading}>
            Your quotation will clearly set out the agreed decorating scope and
            what is included.
          </h3>
        </Section>

        {/* WALLPAPER */}
        <Section
          eyebrow="DECORATIVE FINISHES"
          title="Wallpaper & Specialist Decorative Finishes"
        >
          <p>
            Our current decorating service focuses primarily on painting and
            conventional interior and exterior finishes. Wallpapering and
            specialist decorative finishes are not currently included as
            standard services.
          </p>
        </Section>

        {/* CLEAR QUOTATIONS */}
        <Section
          eyebrow="CLEAR QUOTATIONS"
          title="Clear Painting & Decorating Quotations"
          tone="cream"
          items={quotationFactors}
        >
          <p>
            Decorating prices vary according to factors such as:
          </p>

          <p>
            Alpha prefers clear quotations based on the agreed project rather
            than simply presenting customers with an unexplained hourly rate.
          </p>

          <p>
            If additional repairs or previously hidden issues are discovered
            during preparation, any extra work should be discussed before
            proceeding.
          </p>
        </Section>

        {/* PROCESS */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>PROJECT PROCESS</p>

            <h2>How Your Decorating Project Works</h2>

            <div className={styles.processGrid}>
              {processSteps.map((step) => (
                <article className={styles.processCard} key={step.number}>
                  <div className={styles.processNumber}>{step.number}</div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <Section
          eyebrow="SERVICE AREA"
          title="Painting & Decorating Across Our Region"
        >
          <p>
            Alpha provides painting and decorating throughout our regional
            service area, extending{" "}
            <strong>
              from Peterborough to Skegness and from Long Sutton to Lincoln
            </strong>
            , including surrounding towns, villages and rural communities.
          </p>

          <Link href="/areas-we-cover" className={styles.textLink}>
            VIEW AREAS WE COVER →
          </Link>
        </Section>

        {/* FAQS */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</p>

            <h2>Painting &amp; Decorating FAQs</h2>

            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <article className={styles.faqCard} key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <p className={styles.eyebrow}>PAINTING &amp; DECORATING</p>

              <h2>Ready to Refresh Your Property?</h2>

              <p>
                Whether you need one room redecorated, a rental property
                prepared for new tenants or complete decorating as part of a
                renovation, tell Alpha what needs doing.
              </p>

              <p>
                We&apos;ll assess the surfaces, preparation and required finish
                before providing a clear quotation.
              </p>

              <h3>One Team. Complete Property Care.</h3>

              <div className={styles.finalButtons}>
                <Link href="/request-a-quote" className={styles.primaryButton}>
                  REQUEST A PAINTING &amp; DECORATING QUOTE
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