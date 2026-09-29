"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./LandlordsLettingAgents.module.css";

const services = [
  {
    title: "Property Maintenance",
    text: "General repairs and ongoing maintenance for rental properties.",
    href: "/services/property-maintenance",
    icon: "🔧",
  },
  {
    title: "Plumbing Services",
    text: "Suitable plumbing repairs and maintenance for rental properties.",
    href: "/services/plumbing",
    icon: "🚰",
  },
  {
    title: "Bathrooms",
    text: "Bathroom repairs, maintenance and suitable refurbishment work.",
    href: "/services/bathrooms",
    icon: "🚿",
  },
  {
    title: "Kitchens",
    text: "Kitchen repairs, improvements and complete renovation projects.",
    href: "/services/kitchens",
    icon: "🏠",
  },
  {
    title: "Painting & Decorating",
    text: "Interior and exterior painting, decorating and making-good work.",
    href: "/services/painting-decorating",
    icon: "🎨",
  },
  {
    title: "Tiling & Flooring",
    text: "Suitable tiling, flooring replacement and related refurbishment work.",
    href: "/services/tiling-flooring",
    icon: "▦",
  },
  {
    title: "Garden Services",
    text: "One-off and recurring garden maintenance for rental properties.",
    href: "/services/garden-services",
    icon: "🌿",
  },
  {
    title: "Roofing & Gutters",
    text: "Suitable gutter and localised roof-maintenance work.",
    href: "/services/roofing-gutters",
    icon: "🏠",
  },
];

const maintenanceItems = [
  "General property repairs",
  "Doors, handles and fittings",
  "Carpentry",
  "Wall and ceiling repairs",
  "Plaster repairs",
  "Sealant and regrouting",
  "Plumbing",
  "Bathroom repairs",
  "Kitchen repairs",
  "Tiling",
  "Flooring",
  "Painting and decorating",
  "Suitable roof and gutter maintenance",
  "Garden maintenance",
];

const tenantRepairItems = [
  "Leaking taps",
  "Toilet faults",
  "Plumbing leaks",
  "Damaged fittings",
  "Door problems",
  "Wall damage",
  "Bathroom maintenance",
  "Kitchen maintenance",
  "Garden issues",
];

const plumbingItems = [
  "Water leaks",
  "Tap repairs",
  "Toilet repairs",
  "Sink and basin plumbing",
  "Pipework",
  "Bathroom plumbing",
  "Kitchen plumbing",
  "Emergency plumbing call-outs",
];

const voidItems = [
  "General repairs",
  "Plumbing",
  "Bathroom repairs",
  "Kitchen repairs",
  "Decorating",
  "Flooring",
  "Tiling",
  "Garden maintenance",
  "Garden clearance",
  "Cleaning-up-related maintenance",
  "Larger refurbishment work",
];

const endTenancyItems = [
  "Repairing damage",
  "Making good walls",
  "Decorating",
  "Plumbing repairs",
  "Bathroom repairs",
  "Kitchen repairs",
  "Flooring",
  "Garden work",
  "General property maintenance",
];

const renovationItems = [
  "Complete property refurbishment",
  "Kitchen renovation",
  "Bathroom renovation",
  "Plumbing",
  "Plastering",
  "Carpentry",
  "Tiling",
  "Flooring",
  "Painting and decorating",
  "Property repairs",
  "Garden work",
];

const bathroomItems = [
  "Toilet repairs",
  "Basin repairs",
  "Plumbing",
  "Sealant",
  "Regrouting",
  "Tiling",
  "Flooring",
  "Bathroom fitting",
  "Complete bathroom renovation",
];

const kitchenItems = [
  "Unit repairs",
  "Worktop replacement",
  "Sinks and taps",
  "Plumbing",
  "Tiling",
  "Flooring",
  "Decorating",
  "Complete kitchen renovation",
];

const decoratingItems = [
  "Individual rooms",
  "Walls and ceilings",
  "Interior woodwork",
  "Making good",
  "End-of-tenancy decorating",
  "Void-property redecoration",
  "Complete property decorating",
];

const flooringItems = [
  "Damaged tile replacement",
  "Regrouting",
  "Bathroom tiling",
  "Kitchen tiling",
  "Replacement flooring",
  "Flooring as part of void-property refurbishment",
];

const gardenItems = [
  "Grass cutting",
  "Strimming",
  "Hedge and shrub cutting",
  "Weeding",
  "Garden tidy-ups",
  "Overgrown garden clearances",
  "Recurring garden maintenance",
];

const roofItems = [
  "Gutter cleaning",
  "Gutter repairs",
  "Downpipe problems",
  "Localised roof-maintenance issues",
  "Associated property repairs",
];

const recurringItems = [
  "Planned property checks",
  "Regular garden maintenance",
  "Repeat maintenance visits",
  "Minor repair lists",
  "Seasonal maintenance",
  "Ongoing support across multiple properties",
];

const faqItems = [
  {
    question: "Do you work with landlords?",
    answer:
      "Yes. Alpha provides property maintenance, repairs, renovation and garden services for individual and portfolio landlords.",
  },
  {
    question: "Do you work with letting agents?",
    answer:
      "Yes. Alpha can support letting agents and property managers with suitable repairs, void-property work, planned maintenance and larger refurbishment projects.",
  },
  {
    question: "Can you deal directly with tenants?",
    answer:
      "Where authorised by the landlord or agent, Alpha can liaise with tenants regarding suitable appointment and access arrangements.",
  },
  {
    question: "Can we send several jobs at the same property?",
    answer:
      "Yes. Multiple maintenance requirements can be included in the same enquiry so Alpha can assess the property as a whole.",
  },
  {
    question: "Do you provide emergency call-outs?",
    answer:
      "Yes. Alpha provides 24/7 emergency property and plumbing call-out support for suitable urgent problems. Call 01775 518068.",
  },
  {
    question: "Do you provide void-property maintenance?",
    answer:
      "Yes. Alpha can undertake suitable repairs, plumbing, decorating, flooring, bathrooms, kitchens, gardens and refurbishment work while properties are vacant.",
  },
  {
    question: "Can you manage maintenance for multiple properties?",
    answer:
      "Yes. Alpha can work with landlords and agents responsible for multiple properties. The My Alpha platform is also being developed around property portfolios and individual property records.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Recurring maintenance can be discussed for suitable properties and portfolios, including regular garden services and planned property work.",
  },
  {
    question: "Do you provide before-and-after photos?",
    answer:
      "Where appropriate, photographs can be included as part of the job record to show the relevant area before and after work.",
  },
  {
    question: "Can you renovate a rental property?",
    answer:
      "Yes. Alpha undertakes wider property renovations and refurbishments as well as everyday maintenance.",
  },
  {
    question: "Do you undertake gas work?",
    answer:
      "Alpha does not currently undertake work that legally requires Gas Safe registration.",
  },
  {
    question: "How do we request work?",
    answer:
      "Use the online quote or maintenance-request process and provide the property details, required work and relevant photographs where available. For urgent issues, call 01775 518068.",
  },
];

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className={styles.serviceList}>
      {items.map((item) => (
        <li key={item}>
          <span>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ContentSection({
  eyebrow,
  title,
  children,
  tone = "white",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tone?: "white" | "soft" | "dark";
}) {
  return (
    <section
      className={`${styles.contentSection} ${
        tone === "soft"
          ? styles.softSection
          : tone === "dark"
            ? styles.darkSection
            : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.contentInner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function LandlordsLettingAgentsPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title =
      "Property Maintenance for Landlords & Letting Agents | Alpha";
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      <Header />

      {/* =========================
          HERO
      ========================= */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                LANDLORD &amp; LETTING AGENT SERVICES
              </p>

              <h1>
                Property Maintenance for{" "}
                <span>Landlords &amp; Letting Agents</span>
              </h1>

              <div className={styles.goldLine} />

              <p className={styles.heroLead}>
                Managing rental properties often means dealing with repairs,
                maintenance and improvement work across different trades and
                different properties.
              </p>

              <p className={styles.heroDescription}>
                Alpha Property &amp; Gardening Services gives landlords,
                letting agents and property managers one place to start. From
                tenant-reported repairs and urgent plumbing problems to
                void-property preparation, decorating, gardens, kitchens,
                bathrooms and complete renovations, our multi-service approach
                can reduce the need to arrange several separate contractors.
              </p>

              <div className={styles.heroProposition}>
                <strong>
                  One enquiry.One team.One point of contact. Alpha Property Gardening
                </strong>
              </div>

              <div className={styles.heroButtons}>
                <a href="#quote" className={styles.primaryButton}>
                  Request a Landlord / Agent Quote →
                </a>

                <a
                  href="tel:01775518068"
                  className={styles.secondaryButton}
                >
                  Call 01775 518068
                </a>
              </div>
            </div>

            <div className={styles.heroImageBox}>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85"
                alt="Rental property suitable for property maintenance"
              />

              <div className={styles.imageLabel}>
                <strong>ONE PROPERTY TEAM</strong>
                <span>Maintenance, repairs &amp; refurbishment</span>
              </div>
            </div>

            <aside className={styles.heroSide}>
              <h2>One Property Maintenance Contact</h2>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Individual property repairs</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Multiple jobs at one property</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Void-property maintenance</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Recurring maintenance</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Renovations &amp; refurbishment</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Gardens, kitchens &amp; bathrooms</span>
              </div>

              <div className={styles.checkItem}>
                <b>✓</b>
                <span>Plumbing &amp; suitable repairs</span>
              </div>

              <div className={styles.priority}>
                <span>One enquiry.</span>
                <strong>One team.</strong>
                <strong>One point of contact.</strong>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================= */}
      <ContentSection
        eyebrow="ONE PROPERTY TEAM"
        title="One Property Team for Ongoing Maintenance"
      >
        <p>
          Rental-property maintenance rarely involves only one type of work.
        </p>

        <p>A single property might need:</p>

        <ServiceList
          items={[
            "A plumbing repair",
            "A damaged wall repaired",
            "Decorating",
            "Flooring",
            "Bathroom work",
            "Kitchen work",
            "Garden maintenance",
          ]}
        />

        <p>
          Using separate contractors for every job can create additional
          administration for landlords and agents.
        </p>

        <p>
          Alpha&apos;s aim is to provide a broader property-maintenance service
          so suitable jobs can be brought together through one company.
        </p>

        <h3>Suitable for:</h3>

        <ServiceList
          items={[
            "Individual landlords",
            "Portfolio landlords",
            "Letting agents",
            "Property managers",
            "Investment-property owners",
          ]}
        />
      </ContentSection>

      {/* =========================
          GENERAL PROPERTY MAINTENANCE
      ========================= */}
      <ContentSection
        eyebrow="GENERAL PROPERTY MAINTENANCE"
        title="Rental Property Repairs & Maintenance"
        tone="soft"
      >
        <p>
          Alpha can undertake a broad range of suitable property maintenance
          and repair work for rental properties.
        </p>

        <p>This may include:</p>

        <ServiceList items={maintenanceItems} />

        <div className={styles.inlineButtonWrap}>
          <Link
            href="/services/property-maintenance"
            className={styles.darkButton}
          >
            View Property Maintenance →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          TENANT REPORTED
      ========================= */}
      <ContentSection
        eyebrow="TENANT-REPORTED REPAIRS"
        title="Tenant-Reported Maintenance"
      >
        <p>
          Maintenance issues often begin with a tenant reporting a problem.
        </p>

        <p>
          Where agreed with the landlord or managing agent, Alpha can attend
          suitable maintenance jobs and assess the work required.
        </p>

        <p>Typical examples may include:</p>

        <ServiceList items={tenantRepairItems} />

        <p>
          We&apos;ll agree the appropriate authorisation process with the
          landlord or managing agent before planned work proceeds.
        </p>
      </ContentSection>

      {/* =========================
          MULTIPLE JOBS
      ========================= */}
      <ContentSection
        eyebrow="ONE JOB OR MULTIPLE JOBS"
        title="Send Us the Complete Maintenance List"
        tone="soft"
      >
        <p>
          One of the main benefits of Alpha&apos;s multi-service approach is
          that several jobs at the same property can be assessed together.
        </p>

        <p>Instead of arranging:</p>

        <div className={styles.contractorList}>
          <span>One plumber</span>
          <span>One decorator</span>
          <span>One handyman</span>
          <span>One gardener</span>
          <span>One flooring contractor</span>
        </div>

        <p>
          <strong>Send us the complete list.</strong>
        </p>

        <p>
          Where the work falls within Alpha&apos;s services, we can assess the
          property as one maintenance requirement.
        </p>

        <div className={styles.highlightBox}>
          <strong>One property. Multiple jobs. One team.</strong>
        </div>
      </ContentSection>

      {/* =========================
          PLUMBING
      ========================= */}
      <ContentSection
        eyebrow="PLUMBING"
        title="Plumbing for Rental Properties"
      >
        <p>
          Plumbing issues are among the common maintenance requirements in
          rental properties.
        </p>

        <p>
          Alpha can provide suitable plumbing repairs and maintenance
          including:
        </p>

        <ServiceList items={plumbingItems} />

        <div className={styles.noticeBox}>
          <strong>
            Alpha does not currently undertake work that legally requires Gas
            Safe registration.
          </strong>
        </div>

        <div className={styles.inlineButtonWrap}>
          <Link href="/services/plumbing" className={styles.darkButton}>
            View Plumbing Services →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          EMERGENCY
      ========================= */}
      <section className={styles.emergencySection}>
        <div className={styles.container}>
          <div className={styles.emergencyInner}>
            <div>
              <p className={styles.eyebrow}>24/7 EMERGENCY SUPPORT</p>

              <h2>24/7 Emergency Property &amp; Plumbing Call-Outs</h2>

              <p>
                Urgent property problems do not always happen during normal
                working hours.
              </p>

              <p>
                Alpha provides{" "}
                <strong>
                  24/7 emergency property and plumbing call-out support
                </strong>{" "}
                for suitable urgent problems across our service area.
              </p>
            </div>

            <div className={styles.emergencyCall}>
              <a href="tel:01775518068">
                For an urgent issue: CALL 01775 518068
              </a>
            </div>

            <div className={styles.emergencyExamples}>
              <h3>Examples may include suitable:</h3>

              <ServiceList
                items={[
                  "Significant water leaks",
                  "Burst pipework",
                  "Urgent plumbing faults",
                  "Other property issues requiring immediate assessment",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          VOID
      ========================= */}
      <ContentSection
        eyebrow="VOID PROPERTIES"
        title="Void Property Maintenance"
        tone="soft"
      >
        <p>
          The period between tenancies can provide the opportunity to complete
          repairs and improvement work without disrupting occupants.
        </p>

        <p>Alpha can undertake suitable void-property work including:</p>

        <ServiceList items={voidItems} />

        <p>
          The property can be assessed as a whole rather than requiring the
          landlord or agent to arrange each trade separately.
        </p>

        <div className={styles.inlineButtonWrap}>
          <a href="#quote" className={styles.darkButton}>
            Request a Void Property Quote →
          </a>
        </div>
      </ContentSection>

      {/* =========================
          END OF TENANCY
      ========================= */}
      <ContentSection
        eyebrow="END OF TENANCY"
        title="End-of-Tenancy Repairs & Preparation"
      >
        <p>
          Properties can require a range of work once a tenancy ends.
        </p>

        <p>
          Alpha can assess suitable maintenance and preparation requirements
          before the next tenancy begins.
        </p>

        <p>This may include:</p>

        <ServiceList items={endTenancyItems} />

        <p>
          Any responsibility for costs between landlord and tenant remains a
          matter for the landlord, agent and tenancy arrangements.
        </p>

        <p>
          Alpha&apos;s role is to assess and quote for the work required.
        </p>
      </ContentSection>

      {/* =========================
          RENOVATIONS
      ========================= */}
      <ContentSection
        eyebrow="PROPERTY RENOVATIONS"
        title="Rental Property Renovations & Refurbishments"
        tone="soft"
      >
        <p>
          Some rental properties need more than routine maintenance.
        </p>

        <p>
          Alpha can undertake larger renovation and refurbishment projects
          where several areas of the property require improvement.
        </p>

        <p>Suitable projects may involve:</p>

        <ServiceList items={renovationItems} />

        <p>This can be particularly useful for:</p>

        <ServiceList
          items={[
            "Newly purchased investment properties",
            "Long-term rental properties requiring modernisation",
            "Properties following substantial tenancy damage",
            "Vacant properties",
            "Properties being prepared for re-letting",
          ]}
        />

        <div className={styles.inlineButtonWrap}>
          <Link
            href="/services/property-renovations"
            className={styles.darkButton}
          >
            View Property Renovations →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          SERVICE GRID
      ========================= */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>PROPERTY SERVICES</p>

            <h2>One Team Across Multiple Property Services</h2>

            <p>
              Suitable maintenance requirements can be brought together through
              one Alpha enquiry rather than being split between multiple
              contractors.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link
                href={service.href}
                key={service.title}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIconLarge}>{service.icon}</div>

                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <span className={styles.serviceLink}>
                    View Service →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          BATHROOMS
      ========================= */}
      <ContentSection
        eyebrow="BATHROOMS"
        title="Rental Property Bathrooms"
      >
        <p>
          Bathroom maintenance can range from individual repairs through to
          complete refurbishment.
        </p>

        <p>Alpha can undertake suitable:</p>

        <ServiceList items={bathroomItems} />

        <div className={styles.inlineButtonWrap}>
          <Link href="/services/bathrooms" className={styles.darkButton}>
            View Bathroom Services →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          KITCHENS
      ========================= */}
      <ContentSection
        eyebrow="KITCHENS"
        title="Rental Property Kitchens"
        tone="soft"
      >
        <p>
          Rental kitchens can require ongoing maintenance or replacement after
          years of use.
        </p>

        <p>Alpha can undertake suitable:</p>

        <ServiceList items={kitchenItems} />

        <div className={styles.inlineButtonWrap}>
          <Link href="/services/kitchens" className={styles.darkButton}>
            View Kitchen Services →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          DECORATING
      ========================= */}
      <ContentSection
        eyebrow="PAINTING & DECORATING"
        title="Landlord Painting & Decorating"
      >
        <p>
          Decorating is often required between tenancies or as part of
          longer-term property maintenance.
        </p>

        <p>Alpha can undertake:</p>

        <ServiceList items={decoratingItems} />

        <div className={styles.inlineButtonWrap}>
          <Link
            href="/services/painting-decorating"
            className={styles.darkButton}
          >
            View Painting &amp; Decorating →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          FLOORING
      ========================= */}
      <ContentSection
        eyebrow="FLOORING & TILING"
        title="Flooring & Tiling for Rental Properties"
        tone="soft"
      >
        <p>Alpha can provide suitable flooring and tiling work including:</p>

        <ServiceList items={flooringItems} />

        <div className={styles.inlineButtonWrap}>
          <Link
            href="/services/tiling-flooring"
            className={styles.darkButton}
          >
            View Tiling &amp; Flooring →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          GARDENS
      ========================= */}
      <ContentSection
        eyebrow="GARDEN MAINTENANCE"
        title="Garden Maintenance for Rental Properties"
      >
        <p>
          Gardens can quickly become a recurring maintenance issue when they
          are not kept under control.
        </p>

        <p>Alpha can provide suitable:</p>

        <ServiceList items={gardenItems} />

        <p>
          Regular garden visits can also be discussed for suitable rental
          properties.
        </p>

        <div className={styles.inlineButtonWrap}>
          <Link
            href="/services/garden-services"
            className={styles.darkButton}
          >
            View Garden Services →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          ROOFS
      ========================= */}
      <ContentSection
        eyebrow="ROOFS & GUTTERS"
        title="Roof & Gutter Maintenance"
        tone="soft"
      >
        <p>
          Suitable roof and gutter maintenance can help address problems before
          water damage becomes more extensive.
        </p>

        <p>Alpha can assess suitable:</p>

        <ServiceList items={roofItems} />

        <div className={styles.inlineButtonWrap}>
          <Link
            href="/services/roofing-gutters"
            className={styles.darkButton}
          >
            View Roofing &amp; Gutters →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          RECURRING
      ========================= */}
      <ContentSection
        eyebrow="RECURRING MAINTENANCE"
        title="Planned & Recurring Property Maintenance"
      >
        <p>
          Not every maintenance issue needs to be dealt with reactively.
        </p>

        <p>
          For suitable properties and portfolios, Alpha can discuss recurring
          maintenance arrangements.
        </p>

        <p>This may include:</p>

        <ServiceList items={recurringItems} />

        <p>
          The service and visit frequency can be agreed around the property or
          portfolio requirements.
        </p>
      </ContentSection>

      {/* =========================
          MULTIPLE PROPERTIES
      ========================= */}
      <ContentSection
        eyebrow="MULTIPLE PROPERTIES"
        title="Support for Property Portfolios"
        tone="soft"
      >
        <p>
          Landlords and letting agents managing several properties need clear
          records and consistent communication.
        </p>

        <p>
          Alpha&apos;s long-term client system is being designed around
          managing multiple properties under one customer or organisation
          account.
        </p>

        <p>Each property can ultimately have its own:</p>

        <ServiceList
          items={[
            "Jobs",
            "Quotes",
            "Appointments",
            "Photos",
            "Documents",
            "Job history",
            "Invoices",
            "Maintenance records",
          ]}
        />

        <p>
          This supports Alpha&apos;s move towards a proper property-management
          relationship rather than isolated one-off jobs.
        </p>
      </ContentSection>

      {/* =========================
          MY ALPHA
      ========================= */}
      <section className={styles.portalSection}>
        <div className={styles.container}>
          <div className={styles.portalInner}>
            <div className={styles.portalContent}>
              <p className={styles.eyebrow}>MY ALPHA PORTAL</p>

              <h2>My Alpha — Property Maintenance in One Place</h2>

              <p>
                My Alpha is being developed to give landlords and letting
                agents one place to manage their Alpha property records and
                maintenance activity.
              </p>

              <div className={styles.comingSoon}>
                My Alpha landlord and agent portal — coming soon.
              </div>
            </div>

            <div className={styles.portalList}>
              <ServiceList
                items={[
                  "Property portfolio",
                  "Individual property records",
                  "Maintenance requests",
                  "Quotes",
                  "Quote approval",
                  "Appointments",
                  "Job progress",
                  "Before-and-after photographs",
                  "Completion records",
                  "Invoices",
                  "Documents",
                  "Organisation/team access",
                ]}
              />

              <div className={styles.portalTagline}>
                One login. Multiple properties. Clear records.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PHOTOGRAPHS
      ========================= */}
      <ContentSection
        eyebrow="PHOTOGRAPHS"
        title="Before & After Job Photographs"
        tone="soft"
      >
        <p>
          Photographs can be particularly useful for landlords and agents who
          may not visit every property personally.
        </p>

        <p>
          Where appropriate, Alpha can record suitable before-and-after
          photographs as part of the job record.
        </p>

        <p>This can help provide a clearer view of:</p>

        <ServiceList
          items={[
            "The original issue",
            "Work undertaken",
            "Finished result",
            "Condition of relevant areas",
          ]}
        />

        <p>
          Photographs do not replace formal surveys, inspections or compliance
          documentation where those are legally required.
        </p>
      </ContentSection>

      {/* =========================
          TENANT ACCESS
      ========================= */}
      <ContentSection
        eyebrow="TENANT ACCESS"
        title="Tenant Liaison & Property Access"
      >
        <p>
          Where agreed with the landlord or managing agent, Alpha can liaise
          with tenants regarding suitable appointment arrangements.
        </p>

        <p>The landlord or agent should make clear:</p>

        <ServiceList
          items={[
            "Who is authorised to request work",
            "Who can approve quotations",
            "How access should be arranged",
            "Whether the tenant may agree additional work",
            "Who should receive job updates",
          ]}
        />

        <p>
          This helps prevent confusion around authorisation and cost.
        </p>
      </ContentSection>

      {/* =========================
          QUOTE APPROVAL
      ========================= */}
      <ContentSection
        eyebrow="QUOTE APPROVAL"
        title="Clear Quotations Before Planned Work"
        tone="soft"
      >
        <p>
          For planned maintenance and renovation work, Alpha prefers to provide
          clear quotations based on the agreed scope.
        </p>

        <p>
          Where a letting agent or landlord requires approval before work
          begins, the agreed authorisation process can be followed.
        </p>

        <p>
          If hidden issues or additional work are identified, these should be
          raised before proceeding wherever reasonably possible.
        </p>

        <p>
          Emergency work may need a different authorisation arrangement, which
          should be agreed with regular clients in advance.
        </p>
      </ContentSection>

      {/* =========================
          INVOICING
      ========================= */}
      <ContentSection
        eyebrow="INVOICING & RECORDS"
        title="Clear Job & Invoice Records"
      >
        <p>
          For landlords and letting agents, job records should make it easy to
          understand:
        </p>

        <ServiceList
          items={[
            "Which property the work relates to",
            "What work was completed",
            "Approved quotation",
            "Relevant photographs where used",
            "Invoice",
            "Job date",
            "Additional agreed work",
          ]}
        />

        <p>
          As the My Alpha system develops, these records should become
          available within the relevant property account.
        </p>
      </ContentSection>

      {/* =========================
          WHY ALPHA
      ========================= */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <p className={styles.eyebrow}>WHY ALPHA</p>

              <h2>Why Use One Property Team?</h2>

              <p className={styles.whyIntro}>
                The main advantage is not simply having a long list of
                services. It is reducing the number of different contractors
                the landlord or agent needs to coordinate.
              </p>

              <h3>Instead of:</h3>

              <ServiceList
                items={[
                  "Finding one company for plumbing",
                  "Another for decorating",
                  "Another for bathrooms",
                  "Another for gardens",
                  "Another for repairs",
                ]}
              />

              <h3>Alpha aims to provide:</h3>

              <div className={styles.centralProposition}>
                One enquiry.One team.One point of contact. Alpha Property Gardening
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICE AREA
      ========================= */}
      <ContentSection
        eyebrow="SERVICE AREA"
        title="Property Maintenance Across Our Region"
        tone="soft"
      >
        <p>
          Alpha supports landlords, letting agents and property managers
          throughout our regional service area, extending:
        </p>

        <div className={styles.areaStatement}>
          <strong>
            Peterborough to Skegness • Long Sutton to Lincoln
          </strong>
        </div>

        <p>
          Including surrounding towns, villages and rural communities.
        </p>

        <div className={styles.inlineButtonWrap}>
          <Link href="/areas-we-cover" className={styles.darkButton}>
            View Areas We Cover →
          </Link>
        </div>
      </ContentSection>

      {/* =========================
          FAQ
      ========================= */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2>Landlord &amp; Letting Agent FAQs</h2>

            <p>
              Answers to common questions about property maintenance,
              repairs, portfolios and ongoing support.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {faqItems.map((faq) => (
              <details className={styles.faqItem} key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          FINAL QUOTE
      ========================= */}
      <section className={styles.quoteSection} id="quote">
        <div className={styles.container}>
          <div className={styles.quoteLayout}>
            <div className={styles.quoteBox}>
              {submitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✓</div>

                  <h3>Thank You!</h3>

                  <p>
                    Your enquiry has been received. Our team will contact you
                    shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className={styles.resetButton}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <span className={styles.formLabel}>
                    LANDLORD / AGENT QUOTE
                  </span>

                  <h3>Request Landlord / Agent Support</h3>

                  <p>
                    Tell us about the property, portfolio or maintenance work
                    required.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGrid}>
                      <label>
                        Name *
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </label>

                      <label>
                        Company / Agency
                        <input
                          type="text"
                          name="company"
                          placeholder="Company or agency"
                        />
                      </label>

                      <label>
                        Phone *
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone number"
                          required
                        />
                      </label>

                      <label>
                        Email *
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          required
                        />
                      </label>

                      <label>
                        Property Postcode *
                        <input
                          type="text"
                          name="postcode"
                          placeholder="Property postcode"
                          required
                        />
                      </label>

                      <label>
                        Type of Work *
                        <select name="work" defaultValue="" required>
                          <option value="" disabled>
                            Select service
                          </option>

                          <option value="property-maintenance">
                            Property Maintenance
                          </option>

                          <option value="tenant-reported-repair">
                            Tenant-Reported Repair
                          </option>

                          <option value="emergency">
                            Emergency Property / Plumbing
                          </option>

                          <option value="void-property">
                            Void Property
                          </option>

                          <option value="end-of-tenancy">
                            End of Tenancy
                          </option>

                          <option value="plumbing">Plumbing</option>

                          <option value="bathrooms">Bathrooms</option>

                          <option value="kitchens">Kitchens</option>

                          <option value="painting">
                            Painting &amp; Decorating
                          </option>

                          <option value="tiling-flooring">
                            Tiling &amp; Flooring
                          </option>

                          <option value="garden">
                            Garden Maintenance
                          </option>

                          <option value="roofing-gutters">
                            Roofing &amp; Gutters
                          </option>

                          <option value="renovation">
                            Property Renovation
                          </option>

                          <option value="recurring">
                            Recurring Maintenance
                          </option>
                        </select>
                      </label>
                    </div>

                    <label>
                      Tell us more
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Tell us about the property, required work and any relevant access or tenant information..."
                      />
                    </label>

                    <button
                      type="submit"
                      className={styles.formButton}
                    >
                      Request Landlord / Agent Support →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <div>
              <p className={styles.eyebrow}>
                ONE TEAM. COMPLETE PROPERTY CARE.
              </p>

              <h2>Start With One Enquiry</h2>

              <p>
                From everyday repairs and recurring maintenance to
                void-property work and complete renovations, Alpha provides one
                place to start.
              </p>

              <div className={styles.finalProposition}>
                One enquiry.One team.One point of contact. Alpha Property Gardening
              </div>
            </div>

            <div className={styles.finalButtons}>
              <a
                href="tel:01775518068"
                className={styles.outlineButton}
              >
                CALL 01775 518068
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}