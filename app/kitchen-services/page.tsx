import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./KitchenServices.module.css";

export const metadata: Metadata = {
  title: "Kitchen Installation & Renovation Services | Alpha",
  description:
    "Complete kitchen installations and renovations for homeowners and landlords, including fitting, plumbing, worktops, tiling, flooring, preparation and finishing.",
};

const serviceCards = [
  {
    title: "Complete Kitchen Renovations",
    text: "Bring the different stages of a kitchen renovation together, from removal and preparation through to fitting and final finishing.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    icon: "⌂",
  },
  {
    title: "New Kitchen Installations",
    text: "Installation of suitable new kitchens as part of replacement projects, property upgrades and wider renovations.",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=85",
    icon: "＋",
  },
  {
    title: "Kitchen Units & Cabinets",
    text: "Suitable base units, wall units, tall units, panels, plinths, doors, handles and internal fittings.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    icon: "▦",
  },
  {
    title: "Kitchen Worktops",
    text: "Suitable worktop fitting, cutting, sink cut-outs, joining, edge finishing and associated kitchen fitting.",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1000&q=85",
    icon: "≋",
  },
  {
    title: "Kitchen Plumbing",
    text: "Suitable kitchen plumbing including sinks, taps, water connections, waste connections and accessible pipework alterations.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    icon: "⌁",
  },
  {
    title: "Sinks & Taps",
    text: "Sink replacement, tap installation, mixer taps, waste fittings, water connections, sealant and associated plumbing repairs.",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=85",
    icon: "◈",
  },
  {
    title: "Kitchen Tiling",
    text: "Kitchen splashbacks, wall tiling, selected floor tiling, tile replacement, regrouting and finishing.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=85",
    icon: "◇",
  },
  {
    title: "Kitchen Flooring",
    text: "Suitable flooring installation can be incorporated into the project, subject to the chosen product and existing floor condition.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    icon: "▤",
  },
  {
    title: "Decorating & Finishing",
    text: "Painting, decorating, skirting, making good and other suitable finishing work can form part of the kitchen project.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    icon: "✦",
  },
];

const renovationItems = [
  "Removal of existing kitchen units",
  "Strip-out",
  "Preparation",
  "Property repairs",
  "Plumbing alterations",
  "Wall and ceiling work",
  "Kitchen unit installation",
  "Worktop fitting",
  "Sink installation",
  "Tap installation",
  "Tiling",
  "Flooring",
  "Painting and decorating",
  "Skirting and finishing",
  "Fixtures and fittings",
  "Final finishing work",
];

const newKitchenItems = [
  "Base units",
  "Wall units",
  "Tall units",
  "Cabinet doors",
  "Panels",
  "Plinths",
  "Cornices and trims",
  "Worktops",
  "Sinks",
  "Taps",
  "Suitable plumbing connections",
  "Kitchen fixtures and fittings",
  "Final adjustments and finishing",
];

const cabinetItems = [
  "Base cabinets",
  "Wall cabinets",
  "Tall housing units",
  "Corner units",
  "End panels",
  "Decorative panels",
  "Plinths",
  "Cabinet doors",
  "Handles",
  "Internal fittings where applicable",
];

const worktopItems = [
  "Worktop fitting",
  "Cutting suitable worktops",
  "Sink cut-outs",
  "Joining suitable worktops",
  "Finishing edges",
  "Sealing around relevant areas",
  "Associated kitchen fitting",
];

const plumbingItems = [
  "Kitchen sink plumbing",
  "Tap installation",
  "Water connections",
  "Waste connections",
  "Accessible pipework alterations",
  "Plumbing repairs",
  "Plumbing preparation associated with a kitchen renovation",
];

const sinkItems = [
  "Kitchen sink replacement",
  "Sink installation",
  "Kitchen taps",
  "Mixer taps",
  "Waste fittings",
  "Water connections",
  "Sealant",
  "Associated plumbing repairs",
];

const tilingItems = [
  "Kitchen splashbacks",
  "Wall tiling",
  "Selected floor tiling",
  "Tile replacement",
  "Regrouting",
  "Preparation before tiling",
  "Sealant and finishing",
];

const partialItems = [
  "Replacing worktops",
  "Replacing sinks or taps",
  "Repairing or replacing selected units",
  "Changing doors or handles",
  "Tiling",
  "Regrouting",
  "Renewing sealant",
  "Flooring",
  "Decorating",
  "Plumbing repairs",
  "General kitchen maintenance",
];

const landlordItems = [
  "Kitchen repairs",
  "Replacement units",
  "Replacement worktops",
  "Sinks and taps",
  "Plumbing",
  "Tiling",
  "Flooring",
  "Decorating",
  "Complete kitchen refurbishment",
  "Void-property kitchen work",
  "End-of-tenancy repairs",
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us About the Project",
    text: "Send us information about the kitchen, what you'd like to change and any photographs, measurements, plans or product information already available.",
  },
  {
    number: "02",
    title: "Assessment",
    text: "We assess the existing kitchen, proposed work and preparation required.",
  },
  {
    number: "03",
    title: "Agree the Scope",
    text: "We establish the work Alpha will undertake, the products or materials involved and any specialist elements required.",
  },
  {
    number: "04",
    title: "Quotation",
    text: "You'll receive a quotation based on the agreed project scope.",
  },
  {
    number: "05",
    title: "Removal & Preparation",
    text: "Where required, the existing kitchen is removed and the room prepared for installation.",
  },
  {
    number: "06",
    title: "Installation & Finishing",
    text: "The agreed kitchen fitting, plumbing, worktops, tiling, flooring, decorating and finishing work is carried out in the appropriate sequence.",
  },
  {
    number: "07",
    title: "Completion",
    text: "Final adjustments and finishing work are completed before the project is handed back.",
  },
];

const faqs = [
  {
    question: "Do you install complete kitchens?",
    answer:
      "Yes. Alpha can undertake complete kitchen installation and renovation projects including suitable removal, preparation, fitting, plumbing, worktops, tiling, flooring, decorating and finishing.",
  },
  {
    question: "Can you fit a kitchen I've already purchased?",
    answer:
      "Yes, subject to assessing the kitchen products, plans, property and work required. The quotation should confirm exactly what installation work is included.",
  },
  {
    question: "Do you fit kitchen units and worktops?",
    answer:
      "Yes. Suitable kitchen units, cabinets and worktops can be installed as part of a complete kitchen project or selected improvement work.",
  },
  {
    question: "Can you undertake the plumbing as well?",
    answer:
      "Yes. Alpha can undertake suitable kitchen plumbing, including sinks, taps, waste connections and accessible water pipework alterations. Alpha does not currently undertake work that legally requires Gas Safe registration.",
  },
  {
    question: "Can you install kitchen appliances?",
    answer:
      "Suitable appliance installation or connection work may be possible depending on the appliance and requirements. Alpha does not currently undertake work that legally requires Gas Safe registration. Any specialist or regulated electrical work will need to be assessed separately.",
  },
  {
    question: "Can you renovate only part of my kitchen?",
    answer:
      "Yes. We can undertake suitable smaller improvements including worktops, sinks, taps, selected units, tiling, flooring, decorating and repairs.",
  },
  {
    question: "Do you renovate kitchens for landlords?",
    answer:
      "Yes. Alpha provides kitchen repairs, upgrades and complete renovations for landlords, letting agents and property managers.",
  },
  {
    question: "Can kitchen work be included in a full property renovation?",
    answer:
      "Yes. Kitchen renovation can be combined with bathrooms, plumbing, flooring, decorating, property repairs and other Alpha services as part of a larger renovation project.",
  },
  {
    question: "Do you remove the old kitchen?",
    answer:
      "Removal and strip-out can be included where agreed as part of the project quotation.",
  },
  {
    question: "How do I request a kitchen quotation?",
    answer:
      "Use our quote request form and provide details of the kitchen and what you'd like to achieve. Photographs, approximate dimensions, kitchen plans and information about products already selected can help us assess the project.",
  },
];

export default function KitchenServicesPage() {
  return (
    <main className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#services">Our Services</Link>
            <span>›</span>
            <span>Kitchen Services</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.eyebrow}>
                KITCHEN INSTALLATION &amp; RENOVATION
              </div>

              <h1>
                Complete Kitchen
                <br />
                Installation &amp;
                <br />
                Renovation Services
              </h1>

              <p>
                From replacing an outdated kitchen to completely transforming
                the room, Alpha Property &amp; Gardening Services provides
                kitchen installation and renovation services for homeowners,
                landlords and property investors.
              </p>

              <p>
                We can bring the different stages of your project together
                through one team, including strip-out, preparation, suitable
                plumbing, kitchen fitting, worktops, tiling, flooring,
                decorating and final finishing.
              </p>

              <div className={styles.heroMessage}>
                <strong>One team for the complete kitchen.</strong>
              </div>

              <div className={styles.heroButtons}>
                <Link href="/request-a-quote" className={styles.primaryButton}>
                  REQUEST A KITCHEN QUOTE <span>→</span>
                </Link>

                <a
                  href="tel:01775518068"
                  className={styles.phoneButton}
                  aria-label="Call Alpha on 01775 518068"
                >
                  ☎ &nbsp; CALL 01775 518068
                </a>
              </div>

              <div className={styles.supportingLink}>
                <Link href="/property-maintenance">
                  Need a smaller repair? → View Property Maintenance
                </Link>

                <Link href="/plumbing-services">
                  Need a plumbing job? → View Plumbing Services
                </Link>
              </div>
            </div>

            <div className={styles.heroImage}>
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=90"
                alt="Illustrative modern kitchen"
              />
            </div>

            <div className={styles.heroList}>
              <h3>Kitchen Services</h3>

              <ul>
                <li>Complete kitchen renovations</li>
                <li>New kitchen installations</li>
                <li>Units &amp; cabinet installation</li>
                <li>Worktops, sinks &amp; taps</li>
                <li>Suitable kitchen plumbing</li>
                <li>Suitable appliance connections</li>
                <li>Tiling &amp; flooring</li>
                <li>Preparation &amp; making good</li>
                <li>Decorating &amp; finishing</li>
                <li>Landlord &amp; void-property kitchens</li>
              </ul>

              <div className={styles.heroSignature}>
                One Team
                <br />
                <strong>Complete Property Care</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SUMMARY */}
      <section className={styles.summaryStrip}>
        <div>
          <span>01</span>
          <strong>Installation</strong>
          <small>New kitchens &amp; replacements</small>
        </div>

        <div>
          <span>02</span>
          <strong>Renovation</strong>
          <small>Strip-out to final finishing</small>
        </div>

        <div>
          <span>03</span>
          <strong>Plumbing</strong>
          <small>Sinks, taps &amp; connections</small>
        </div>

        <div>
          <span>04</span>
          <strong>Finishing</strong>
          <small>Tiling, flooring &amp; decorating</small>
        </div>

        <div>
          <span>05</span>
          <strong>Property Projects</strong>
          <small>Homeowners &amp; landlords</small>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <div className={styles.sectionKicker}>THE COMPLETE APPROACH</div>

          <h2>Kitchen Projects From One Team</h2>

          <div className={styles.introGrid}>
            <div>
              <p>
                A new kitchen can involve far more than fitting cabinets.
              </p>

              <p>
                The old kitchen may need removing, walls and floors may
                require preparation, plumbing may need altering, units and
                worktops must be fitted correctly, and the finished room may
                require tiling, flooring, decorating and other property work.
              </p>

              <p>
                Using separate contractors for every stage can make the project
                unnecessarily complicated.
              </p>
            </div>

            <div>
              <p>
                Alpha&apos;s multi-service approach allows suitable parts of
                the kitchen project to be brought together through one team and
                one point of contact.
              </p>

              <p>
                From an individual improvement through to a complete kitchen
                renovation, we can assess the project as a whole.
              </p>

              <div className={styles.introCallout}>
                <span>✓</span>
                <strong>One team for the complete kitchen.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionKicker}>WHAT WE CAN UNDERTAKE</div>
            <h2>Kitchen Installation &amp; Renovation Services</h2>
            <p>
              Kitchen projects can involve several different stages. Suitable
              parts of the work can be brought together through one project.
            </p>
          </div>

          <Link href="/request-a-quote" className={styles.viewLink}>
            REQUEST A KITCHEN QUOTE →
          </Link>
        </div>

        <div className={styles.serviceGrid}>
          {serviceCards.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.title} />
                <span className={styles.serviceIcon}>{service.icon}</span>
              </div>

              <div className={styles.serviceBody}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href="/request-a-quote">
                  Discuss This Work <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMPLETE RENOVATIONS */}
      <section className={styles.darkSection}>
        <div className={styles.darkInner}>
          <div className={styles.sectionKickerLight}>FULL TRANSFORMATION</div>

          <div className={styles.darkHeading}>
            <div>
              <h2>Complete Kitchen Renovations</h2>
            </div>

            <p>
              For kitchens requiring a full transformation, Alpha can
              undertake the different stages involved in taking the room from
              its current condition through to a completed new kitchen.
            </p>
          </div>

          <div className={styles.checkGrid}>
            {renovationItems.map((item) => (
              <div key={item}>
                <span>✓</span>
                {item}
              </div>
            ))}
          </div>

          <Link href="/request-a-quote" className={styles.goldButton}>
            REQUEST A COMPLETE KITCHEN QUOTE →
          </Link>
        </div>
      </section>

      {/* NEW KITCHENS + UNITS */}
      <section className={styles.twoColumnSection}>
        <article className={styles.infoPanel}>
          <div className={styles.numberBadge}>01</div>
          <div className={styles.sectionKicker}>NEW INSTALLATIONS</div>
          <h2>New Kitchen Installations</h2>

          <p>
            Alpha can install complete new kitchens as part of renovations,
            property upgrades and replacement projects.
          </p>

          <p>
            The work required will depend on the kitchen design, existing
            condition of the room, products selected and the amount of
            preparation necessary before installation.
          </p>

          <h3>Suitable installation work may include:</h3>

          <ul className={styles.simpleList}>
            {newKitchenItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className={styles.noteText}>
            The exact scope should be agreed before work begins.
          </p>
        </article>

        <article className={styles.infoPanelAlt}>
          <div className={styles.numberBadge}>02</div>
          <div className={styles.sectionKicker}>CABINET FITTING</div>
          <h2>Kitchen Unit &amp; Cabinet Installation</h2>

          <p>
            Correct fitting of kitchen units is essential to the appearance
            and function of the finished kitchen.
          </p>

          <p>
            Alpha can undertake installation of suitable kitchen cabinetry as
            part of a complete project or where customers are replacing
            existing units.
          </p>

          <h3>This can include:</h3>

          <ul className={styles.simpleList}>
            {cabinetItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className={styles.noteText}>
            The room and products should be assessed before installation to
            confirm suitability.
          </p>
        </article>
      </section>

      {/* WORKTOPS */}
      <section className={styles.featureSection}>
        <div className={styles.featureImage}>
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
            alt="Illustrative kitchen worktop"
          />
        </div>

        <div className={styles.featureContent}>
          <div className={styles.sectionKicker}>WORKTOPS</div>
          <h2>Kitchen Worktop Installation</h2>

          <p>
            Kitchen worktops form one of the most visible and heavily used
            parts of the finished room.
          </p>

          <p>
            Alpha can undertake installation of suitable kitchen worktops,
            subject to the material and project requirements.
          </p>

          <div className={styles.miniGrid}>
            {worktopItems.map((item) => (
              <div key={item}>
                <span>✓</span>
                {item}
              </div>
            ))}
          </div>

          <div className={styles.warningBox}>
            <strong>Material suitability</strong>
            <p>
              Stone, quartz or similar factory-fabricated surfaces may require
              specialist manufacture or templating depending on the chosen
              product. The quotation and project scope should make any
              specialist requirements clear.
            </p>
          </div>
        </div>
      </section>

      {/* PLUMBING */}
      <section className={styles.plumbingSection}>
        <div className={styles.plumbingContent}>
          <div className={styles.sectionKickerLight}>KITCHEN PLUMBING</div>
          <h2>Kitchen Plumbing</h2>

          <p>
            Kitchen installations frequently require changes to existing
            plumbing.
          </p>

          <p>
            Alpha can undertake suitable kitchen plumbing work as part of a
            renovation or as an individual service.
          </p>

          <div className={styles.checkGridSmall}>
            {plumbingItems.map((item) => (
              <div key={item}>
                <span>✓</span>
                {item}
              </div>
            ))}
          </div>

          <div className={styles.gasNotice}>
            <strong>Important:</strong> Alpha does not currently undertake work
            that legally requires Gas Safe registration.
          </div>

          <Link href="/plumbing-services" className={styles.lightButton}>
            VIEW PLUMBING SERVICES →
          </Link>
        </div>
      </section>

      {/* SINKS / TAPS / APPLIANCES */}
      <section className={styles.threeColumnSection}>
        <article className={styles.contentCard}>
          <div className={styles.cardNumber}>01</div>
          <h2>Kitchen Sinks &amp; Taps</h2>

          <p>
            Replacing a sink or tap can form part of a complete kitchen project
            or be undertaken as a smaller improvement.
          </p>

          <ul className={styles.simpleList}>
            {sinkItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link href="/request-a-quote" className={styles.textButton}>
            REQUEST A KITCHEN PLUMBING QUOTE →
          </Link>
        </article>

        <article className={styles.contentCardDark}>
          <div className={styles.cardNumber}>02</div>
          <h2>Kitchen Appliances &amp; Connections</h2>

          <p>
            Kitchen renovations often involve appliances such as washing
            machines, dishwashers, ovens and hobs.
          </p>

          <p>
            Alpha can undertake suitable installation or connection work where
            it falls within the business&apos;s competence and does not require
            specialist regulated work.
          </p>

          <div className={styles.warningBoxDark}>
            <strong>Regulated work</strong>
            <p>
              Alpha does not currently undertake gas hob, gas cooker or other
              work that legally requires Gas Safe registration. Where an
              appliance requires specialist or regulated electrical work, that
              element will need to be assessed separately and is only included
              where specifically confirmed.
            </p>
          </div>
        </article>

        <article className={styles.contentCard}>
          <div className={styles.cardNumber}>03</div>
          <h2>Kitchen Tiling &amp; Splashbacks</h2>

          <p>
            Tiling can provide both a practical and decorative finish around
            kitchens. Alpha can incorporate suitable tiling into kitchen
            renovation projects.
          </p>

          <ul className={styles.simpleList}>
            {tilingItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link href="/tiling-flooring" className={styles.textButton}>
            VIEW TILING &amp; FLOORING →
          </Link>
        </article>
      </section>

      {/* FLOORING + PREPARATION */}
      <section className={styles.twoFeatureSection}>
        <article className={styles.softFeature}>
          <div className={styles.sectionKicker}>FLOORING</div>
          <h2>Kitchen Flooring</h2>

          <p>
            Kitchen flooring must work with both the finished kitchen design
            and the practical requirements of the room.
          </p>

          <p>
            Alpha can incorporate suitable flooring installation into kitchen
            renovation projects, subject to the chosen product and the
            condition of the existing floor.
          </p>

          <p>
            Preparation work may also be required before the new flooring can
            be installed.
          </p>

          <Link href="/tiling-flooring" className={styles.textButton}>
            VIEW TILING &amp; FLOORING →
          </Link>
        </article>

        <article className={styles.softFeatureGreen}>
          <div className={styles.sectionKickerLight}>PREPARATION</div>
          <h2>Kitchen Preparation &amp; Making Good</h2>

          <p>
            Removing an existing kitchen can expose damaged walls, old fixings,
            tired finishes or areas requiring preparation before the new
            kitchen is installed.
          </p>

          <ul className={styles.lightList}>
            <li>Wall repairs</li>
            <li>Ceiling repairs</li>
            <li>Making good</li>
            <li>Surface preparation</li>
            <li>Plaster repairs</li>
            <li>Preparation following strip-out</li>
            <li>Preparing surfaces before decorating or tiling</li>
          </ul>
        </article>
      </section>

      {/* DECORATING */}
      <section className={styles.featureSectionReverse}>
        <div className={styles.featureContent}>
          <div className={styles.sectionKicker}>FINAL STAGE</div>
          <h2>Kitchen Decorating &amp; Finishing</h2>

          <p>
            Once the main kitchen installation is complete, decorating and
            finishing work can bring the entire room together.
          </p>

          <p>
            Alpha can include suitable painting and decorating within the
            kitchen project so the customer does not need to arrange another
            company for the final stage.
          </p>

          <div className={styles.finishPoints}>
            <div>
              <span>✓</span>
              Painting and decorating
            </div>
            <div>
              <span>✓</span>
              Skirting and finishing
            </div>
            <div>
              <span>✓</span>
              Making good
            </div>
            <div>
              <span>✓</span>
              Final adjustments
            </div>
          </div>

          <Link href="/painting-decorating" className={styles.textButton}>
            VIEW PAINTING &amp; DECORATING →
          </Link>
        </div>

        <div className={styles.featureImage}>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Illustrative kitchen interior"
          />
        </div>
      </section>

      {/* PARTIAL UPGRADES */}
      <section className={styles.partialSection}>
        <div className={styles.partialInner}>
          <div className={styles.sectionKicker}>SMALLER IMPROVEMENTS</div>

          <h2>Not Every Kitchen Needs Replacing</h2>

          <p className={styles.leadText}>
            Some kitchens are still structurally usable but need selected areas
            updated. Alpha can undertake smaller kitchen improvement projects
            where appropriate.
          </p>

          <div className={styles.partialGrid}>
            {partialItems.map((item) => (
              <div key={item}>
                <span>✓</span>
                {item}
              </div>
            ))}
          </div>

          <div className={styles.bigStatement}>
            No job is too big or too small.
          </div>
        </div>
      </section>

      {/* NEW PROPERTY */}
      <section className={styles.propertySection}>
        <div className={styles.propertyImage}>
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
            alt="Illustrative renovated kitchen"
          />
        </div>

        <div className={styles.propertyContent}>
          <div className={styles.sectionKicker}>PROPERTY RENOVATIONS</div>

          <h2>
            Renovating the Kitchen in a Property You&apos;ve Just Bought?
          </h2>

          <p>
            A dated or damaged kitchen is often one of the first areas new
            homeowners and investors want to improve.
          </p>

          <p>
            Alpha can assess the kitchen alongside the wider condition of the
            property and incorporate other required work into the same project
            where appropriate.
          </p>

          <h3>This can be useful where a newly purchased property needs:</h3>

          <div className={styles.propertyList}>
            <span>Kitchen renovation</span>
            <span>Bathroom renovation</span>
            <span>Decorating</span>
            <span>Flooring</span>
            <span>Plumbing</span>
            <span>Property repairs</span>
            <span>General refurbishment</span>
            <span>Garden clearance or maintenance</span>
          </div>

          <Link href="/property-renovations" className={styles.textButton}>
            VIEW PROPERTY RENOVATIONS →
          </Link>
        </div>
      </section>

      {/* LANDLORDS */}
      <section className={styles.landlordSection}>
        <div className={styles.landlordContent}>
          <div className={styles.sectionKickerLight}>
            LANDLORDS &amp; LETTING AGENTS
          </div>

          <h2>Kitchen Services for Landlords &amp; Letting Agents</h2>

          <p>
            Rental kitchens can experience significant wear and often need
            repairs or improvement between tenancies.
          </p>

          <p>
            Alpha can undertake kitchen maintenance, partial upgrades and
            complete renovations for landlords, letting agents and property
            managers.
          </p>

          <div className={styles.checkGridSmall}>
            {landlordItems.map((item) => (
              <div key={item}>
                <span>✓</span>
                {item}
              </div>
            ))}
          </div>

          <p>
            For properties requiring broader work, Alpha can combine the
            kitchen project with other property-maintenance or renovation
            services.
          </p>

          <Link
            href="/landlords-letting-agents"
            className={styles.lightButton}
          >
            VIEW LANDLORD &amp; LETTING AGENT SERVICES →
          </Link>
        </div>
      </section>

      {/* VOID + LARGER RENOVATIONS */}
      <section className={styles.twoColumnSection}>
        <article className={styles.infoPanel}>
          <div className={styles.sectionKicker}>VACANT PROPERTIES</div>
          <h2>Kitchen Work for Vacant &amp; Void Properties</h2>

          <p>
            Vacant properties provide an opportunity to deal with kitchen
            problems before the next tenant moves in.
          </p>

          <p>
            Depending on the condition of the kitchen, Alpha can assess whether
            it requires:
          </p>

          <ul className={styles.simpleList}>
            <li>Individual repairs</li>
            <li>Selected replacement fittings</li>
            <li>A partial upgrade</li>
            <li>Complete renovation</li>
          </ul>

          <p>
            The kitchen work can also be coordinated with decorating, flooring,
            bathrooms, property repairs and outside maintenance where
            necessary.
          </p>
        </article>

        <article className={styles.infoPanelAlt}>
          <div className={styles.sectionKicker}>LARGER PROJECTS</div>
          <h2>Kitchens as Part of a Larger Property Renovation</h2>

          <p>
            Kitchen renovation often forms part of a wider refurbishment.
          </p>

          <p>
            Alpha can combine kitchen work with other property services when
            several areas of the building are being improved together.
          </p>

          <h3>This may be particularly useful for:</h3>

          <ul className={styles.simpleList}>
            <li>Whole-house renovations</li>
            <li>Newly purchased homes</li>
            <li>Investment properties</li>
            <li>Rental-property refurbishments</li>
            <li>Vacant properties</li>
            <li>Properties requiring modernisation</li>
          </ul>

          <Link href="/property-renovations" className={styles.textButton}>
            VIEW PROPERTY RENOVATIONS →
          </Link>
        </article>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeaderCenter}>
          <div className={styles.sectionKicker}>OUR PROCESS</div>
          <h2>How Your Kitchen Project Works</h2>
          <p>
            The exact sequence depends on the agreed scope, products and
            condition of the property.
          </p>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <article className={styles.processItem} key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCTS & MATERIALS */}
      <section className={styles.productsSection}>
        <div className={styles.productsContent}>
          <div className={styles.sectionKicker}>PRODUCTS &amp; MATERIALS</div>

          <h2>Kitchen Products &amp; Materials</h2>

          <p>
            Customers may purchase a kitchen directly from a retailer, already
            have products ready for installation or require help establishing
            what materials are needed.
          </p>

          <p>Your quotation will clearly state which items are:</p>

          <div className={styles.productsGrid}>
            <div>
              <span>01</span>
              Supplied by Alpha
            </div>
            <div>
              <span>02</span>
              Supplied by the customer
            </div>
            <div>
              <span>03</span>
              Included in the quotation
            </div>
            <div>
              <span>04</span>
              Excluded from the quotation
            </div>
          </div>

          <div className={styles.productNote}>
            If customers supply the kitchen themselves, products should ideally
            be available and checked before or at the appropriate stage of
            installation. This helps reduce delays caused by missing or
            incorrect parts.
          </div>
        </div>

        <div className={styles.retailerBox}>
          <div className={styles.sectionKickerLight}>
            CUSTOMER-SUPPLIED KITCHENS
          </div>

          <h2>Installing Kitchens From Major Retailers</h2>

          <p>
            Alpha can install suitable customer-supplied kitchens purchased
            from major kitchen retailers, subject to assessing the products,
            plans and property before work begins.
          </p>

          <div className={styles.noAffiliation}>
            <strong>Important</strong>
            <p>
              Any retailer-specific installation requirements, specialist
              components or additional work will be identified during
              assessment and reflected in the agreed project scope where
              applicable.
            </p>
          </div>
        </div>
      </section>

      {/* CLEAR QUOTES */}
      <section className={styles.quoteInfoSection}>
        <div>
          <div className={styles.sectionKicker}>QUOTATIONS</div>
          <h2>Clear Kitchen Renovation Quotations</h2>
        </div>

        <div>
          <p>
            Kitchen costs can vary significantly depending on the room,
            products selected, amount of preparation, plumbing requirements,
            worktops, flooring, tiling and overall scope.
          </p>

          <p>
            Alpha prefers clear quotations based on the agreed work rather than
            simply presenting customers with an unexplained hourly rate.
          </p>

          <p>
            If previously hidden damage or additional requirements become
            apparent once the existing kitchen is removed, any additional work
            should be discussed before proceeding.
          </p>
        </div>
      </section>

      {/* EXISTING DAMAGE */}
      <section className={styles.damageSection}>
        <div className={styles.damageIcon}>!</div>

        <div>
          <div className={styles.sectionKicker}>AFTER STRIP-OUT</div>
          <h2>Found Problems After the Old Kitchen Is Removed?</h2>

          <p>
            Older kitchens can conceal maintenance issues behind cabinets,
            worktops and finishes.
          </p>

          <p>
            Once the room is stripped out, it may become apparent that walls,
            flooring, plumbing or surrounding areas require additional work.
          </p>

          <p>
            Because Alpha also provides wider property-maintenance and
            renovation services, these issues can be assessed as part of the
            project rather than automatically requiring another contractor.
          </p>

          <Link href="/property-maintenance" className={styles.textButton}>
            VIEW PROPERTY MAINTENANCE →
          </Link>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className={styles.areaSection}>
        <div className={styles.areaContent}>
          <div className={styles.sectionKicker}>SERVICE AREA</div>

          <h2>Kitchen Services Across Our Region</h2>

          <p>
            Alpha provides kitchen installation and renovation services
            throughout our regional service area, extending{" "}
            <strong>
              from Peterborough to Skegness and from Long Sutton to Lincoln
            </strong>
            , including surrounding towns, villages and rural communities.
          </p>

          <Link href="/areas-we-cover" className={styles.textButton}>
            VIEW AREAS WE COVER →
          </Link>
        </div>

        <div className={styles.mapBox}>
          <iframe
            title="Lincolnshire regional map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.65%2C52.45%2C0.30%2C53.20%26layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>

      {/* INTERNAL SERVICE LINKS */}
      <section className={styles.relatedSection}>
        <div className={styles.sectionHeaderCenter}>
          <div className={styles.sectionKicker}>RELATED ALPHA SERVICES</div>
          <h2>Other Services That May Form Part of Your Project</h2>
        </div>

        <div className={styles.relatedGrid}>
          <Link href="/property-renovations">Property Renovations →</Link>
          <Link href="/property-maintenance">Property Maintenance →</Link>
          <Link href="/plumbing-services">Plumbing Services →</Link>
          <Link href="/bathroom-services">Bathroom Services →</Link>
          <Link href="/tiling-flooring">Tiling &amp; Flooring →</Link>
          <Link href="/painting-decorating">
            Painting &amp; Decorating →
          </Link>
          <Link href="/landlords-letting-agents">
            Landlords &amp; Letting Agents →
          </Link>
          <Link href="/areas-we-cover">Areas We Cover →</Link>
          <Link href="/request-a-quote">Request a Quote →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqContent}>
          <div className={styles.sectionKicker}>KITCHEN FAQS</div>
          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div>
          <div className={styles.sectionKickerLight}>START YOUR PROJECT</div>

          <h2>Ready to Transform Your Kitchen?</h2>

          <p>
            Whether you&apos;re replacing a few elements or planning a complete
            new kitchen, tell Alpha what you&apos;d like to achieve.
          </p>

          <p>
            We&apos;ll assess the room, agree the scope and provide a clear
            quotation for the work.
          </p>

          <div className={styles.finalStatement}>
            One Team. Complete Property Care.
          </div>
        </div>

        <div className={styles.finalButtons}>
          <Link href="/request-a-quote" className={styles.finalGoldButton}>
            REQUEST A KITCHEN QUOTE →
          </Link>

          <a href="tel:01775518068" className={styles.finalPhoneButton}>
            CALL 01775 518068
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}