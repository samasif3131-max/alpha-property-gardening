import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./BathroomServices.module.css";

export const metadata: Metadata = {
  title: "Bathroom Installation & Renovation Services | Alpha",
  description:
    "Complete bathroom installations and renovations for homeowners and landlords, including plumbing, fitting, tiling, flooring, preparation and finishing.",
};

const bathroomServices = [
  {
    title: "Complete Bathroom Renovations",
    description:
      "Bring removal, preparation, plumbing, fitting, tiling, flooring, sealing and finishing together through one bathroom project.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    icon: "▣",
  },
  {
    title: "New Bathroom Installations",
    description:
      "Install new baths, showers, toilets, basins, vanity units, taps and suitable bathroom fittings.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
    icon: "◇",
  },
  {
    title: "Bath Installation & Replacement",
    description:
      "Bath replacement with suitable pipework, waste connections, taps, surrounding finishes and associated work.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    icon: "♢",
  },
  {
    title: "Shower Installation & Replacement",
    description:
      "Suitable shower trays, enclosures, plumbing, waste connections, tiling, sealing and finishing.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    icon: "≋",
  },
  {
    title: "Toilets, Basins & Vanity Units",
    description:
      "Installation and replacement of toilets, cisterns, basins, vanity units, taps and associated connections.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    icon: "⌂",
  },
  {
    title: "Bathroom Tiling & Flooring",
    description:
      "Suitable wall and floor tiling, shower-area tiling, flooring, regrouting, preparation and finishing.",
    image:
      "https://images.unsplash.com/photo-1584622781867-3d3f0f8a9f2e?auto=format&fit=crop&w=900&q=85",
    icon: "▦",
  },
  {
    title: "Bathroom Plumbing",
    description:
      "Suitable water pipework, basin, toilet, bath and shower-related plumbing, waste connections and alterations.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
    icon: "⚒",
  },
  {
    title: "Preparation & Making Good",
    description:
      "Wall, ceiling and surface preparation, repairs and making good following removal of existing fittings and finishes.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    icon: "▤",
  },
  {
    title: "Sealant & Bathroom Finishing",
    description:
      "Suitable silicone, resealing, regrouting, finishing around fittings and making good surrounding surfaces.",
    image:
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=85",
    icon: "✓",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us What You Want to Change",
    description:
      "Send us details of the bathroom, proposed work and any photographs or measurements you have.",
    icon: "◯",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We assess the existing bathroom and discuss fittings, preparation and the work required.",
    icon: "▣",
  },
  {
    number: "03",
    title: "Quotation",
    description:
      "You'll receive a quotation based on the agreed scope of work.",
    icon: "▤",
  },
  {
    number: "04",
    title: "Removal & Preparation",
    description:
      "Existing fittings and finishes are removed where required and the room is prepared.",
    icon: "⚒",
  },
  {
    number: "05",
    title: "Installation & Finishing",
    description:
      "The agreed plumbing, fitting, tiling, flooring and finishing work is completed.",
    icon: "◇",
  },
  {
    number: "06",
    title: "Completion",
    description:
      "Final finishing work is completed and the bathroom is checked before handover.",
    icon: "✓",
  },
];

const faqs = [
  {
    question: "Do you undertake complete bathroom renovations?",
    answer:
      "Yes. Alpha can undertake complete bathroom renovation projects including suitable removal, preparation, plumbing, fitting, tiling, flooring, sealing and finishing work.",
  },
  {
    question: "Can you install a new bathroom?",
    answer:
      "Yes. New bathroom installations can be undertaken as complete projects or as part of larger property renovations.",
  },
  {
    question: "Do you install baths and showers?",
    answer:
      "Yes. Alpha can undertake suitable bath and shower installation and replacement work along with associated plumbing and finishing.",
  },
  {
    question:
      "Can you replace a toilet or basin without renovating the whole bathroom?",
    answer:
      "Yes. Not every project requires a complete renovation. Individual bathroom fittings can be replaced or repaired where appropriate.",
  },
  {
    question: "Do you provide bathroom plumbing?",
    answer:
      "Yes. Alpha provides suitable bathroom plumbing as part of bathroom projects and as a standalone plumbing service.",
  },
  {
    question: "Do you tile bathrooms?",
    answer:
      "Yes. Suitable wall and floor tiling can be incorporated into bathroom renovation projects.",
  },
  {
    question: "Can you repair an existing bathroom?",
    answer:
      "Yes. Alpha undertakes bathroom repairs and smaller improvement projects as well as complete renovations.",
  },
  {
    question: "Do you work on rental-property bathrooms?",
    answer:
      "Yes. We provide bathroom repair, renovation and refurbishment services for landlords, letting agents and property managers.",
  },
  {
    question:
      "Can bathroom work form part of a full property renovation?",
    answer:
      "Yes. Bathroom renovation can be combined with kitchens, decorating, flooring, property repairs and other Alpha services as part of a wider renovation.",
  },
  {
    question: "How do I get a bathroom quote?",
    answer:
      "Use our quote request form and provide details of what you'd like to change. Photographs, approximate room dimensions and information about the bathroom products you are considering can help us assess the project.",
  },
];

export default function BathroomServicesPage() {
  return (
    <main className={styles.page}>
      <Header />

      {/* =========================================
          HERO
      ========================================== */}
      <section className={styles.hero}>
        <div className={styles.heroImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContainer}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Our Services</Link>
            <span>›</span>
            <span>Bathroom Services</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.heroEyebrow}>
                BATHROOM INSTALLATION & RENOVATION
              </div>

              <h1>
                Complete Bathroom
                <br />
                Installation &
                <br />
                <span>Renovation Services</span>
              </h1>

              <p>
                Whether you're replacing an outdated bathroom, renovating the
                entire room or creating a fresh new space, Alpha Property &
                Gardening Services can bring the different stages of your
                bathroom project together through one team.
              </p>

              <p>
                From removal and preparation through to plumbing, fitting,
                tiling, flooring, sealing and finishing, we can undertake
                complete bathroom renovations as well as smaller bathroom
                improvements and repairs.
              </p>

              <div className={styles.heroPromise}>
                One team for the complete bathroom.
              </div>

              <div className={styles.heroButtons}>
                <Link href="/request-a-quote" className={styles.goldButton}>
                  Request a Bathroom Quote <span>→</span>
                </Link>

                <a
                  href="tel:01775518068"
                  className={styles.outlineButton}
                  aria-label="Call Alpha on 01775 518068"
                >
                  ☎ &nbsp; Call 01775 518068
                </a>
              </div>
            </div>

            <div className={styles.heroChecklist}>
              <div>✓ Complete Bathroom Renovations</div>
              <div>✓ New Bathroom Installations</div>
              <div>✓ Baths & Shower Installation</div>
              <div>✓ Toilets, Basins & Vanity Units</div>
              <div>✓ Bathroom Plumbing</div>
              <div>✓ Bathroom Tiling & Flooring</div>
              <div>✓ Sealant & Finishing</div>
              <div>✓ Wall & Ceiling Preparation</div>
              <div>✓ Smaller Bathroom Upgrades</div>
              <div>✓ Landlord & Void Bathrooms</div>

              <strong>
                One Team.
                <br />
                Complete Bathroom.
              </strong>
            </div>
          </div>

          <div className={styles.heroSupport}>
            Need a plumbing repair rather than a full bathroom project?
            <Link href="/plumbing-services">
              View Plumbing Services →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRODUCTION
      ========================================== */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <div className={styles.sectionLabel}>ONE TEAM APPROACH</div>

          <h2>Complete Bathroom Projects From One Team</h2>

          <p>
            A bathroom renovation can involve far more than replacing the
            bath or shower.
          </p>

          <p>
            Existing fittings may need removing, pipework may need adjusting,
            walls may require preparation, floors may need attention and the
            new bathroom may require plumbing, tiling, sealing, flooring and
            finishing work.
          </p>

          <p>
            Arranging every stage through separate contractors can make even a
            relatively straightforward bathroom project more complicated than
            it needs to be.
          </p>

          <p>
            Alpha's multi-service approach allows suitable elements of the
            project to be brought together through one team.
          </p>

          <p>
            Whether you're renovating a family bathroom, replacing a tired
            bathroom in a rental property or upgrading only part of the room,
            we'll assess the work required and provide a clear quotation based
            on the agreed scope.
          </p>

          <div className={styles.introTagline}>
            One enquiry. One team. Complete property care.
          </div>
        </div>
      </section>

      {/* =========================================
          COMPLETE RENOVATIONS
      ========================================== */}
      <section className={styles.featureSection}>
        <div className={styles.featureImage}>
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
            alt="Bathroom renovation and installation"
          />
          <div className={styles.imageBadge}>COMPLETE PROJECT</div>
        </div>

        <div className={styles.featureContent}>
          <div className={styles.sectionLabel}>FULL TRANSFORMATIONS</div>

          <h2>Complete Bathroom Renovations</h2>

          <p>
            For bathrooms requiring a full transformation, Alpha can undertake
            the different stages required to take the room from its existing
            condition through to a completed new bathroom.
          </p>

          <div className={styles.featureList}>
            <div>✓ Removal of existing bathroom fittings</div>
            <div>✓ Strip-out and preparation</div>
            <div>✓ Plumbing alterations</div>
            <div>✓ Wall and ceiling preparation</div>
            <div>✓ Repairs and making good</div>
            <div>✓ Bath and shower installation</div>
            <div>✓ Toilet and basin installation</div>
            <div>✓ Tiling and flooring</div>
            <div>✓ Sealant and finishing</div>
            <div>✓ Painting and decorating where suitable</div>
            <div>✓ Fixtures and fittings</div>
            <div>✓ Final finishing work</div>
          </div>

          <Link href="/request-a-quote" className={styles.darkButton}>
            Request a Complete Bathroom Quote →
          </Link>
        </div>
      </section>

      {/* =========================================
          SERVICES
      ========================================== */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.sectionLabel}>BATHROOM SERVICES</div>

            <h2>Bathroom Installation, Fitting & Refurbishment</h2>

            <p>
              From individual bathroom fittings to complete room renovations,
              suitable elements of the project can be coordinated through one
              team.
            </p>
          </div>
        </div>

        <div className={styles.serviceGrid}>
          {bathroomServices.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.title} />
                <span>{service.icon}</span>
              </div>

              <div className={styles.serviceBody}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  href="/request-a-quote"
                  className={styles.learnMore}
                >
                  Discuss This Work →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================
          BATH INSTALLATION
      ========================================== */}
      <section className={styles.detailSection}>
        <div className={styles.detailContent}>
          <div className={styles.sectionLabel}>BATHROOM FITTING</div>

          <h2>Bath Installation & Replacement</h2>

          <p>
            Replacing a bath can involve more than simply removing one fitting
            and installing another.
          </p>

          <p>
            Depending on the bathroom, work may also involve adjustments to
            pipework, waste connections, taps, surrounding panels, tiling,
            sealant and flooring.
          </p>

          <p>
            Alpha can incorporate these requirements into the overall bathroom
            project rather than treating each element as an unrelated job.
          </p>

          <Link href="/request-a-quote" className={styles.textButton}>
            Request a Bathroom Quote →
          </Link>
        </div>

        <div className={styles.detailImage}>
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
            alt="Bath installation"
          />
        </div>
      </section>

      {/* =========================================
          SHOWERS
      ========================================== */}
      <section className={styles.detailSectionAlt}>
        <div className={styles.detailImage}>
          <img
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85"
            alt="Shower installation and bathroom fitting"
          />
        </div>

        <div className={styles.detailContent}>
          <div className={styles.sectionLabel}>SHOWER INSTALLATION</div>

          <h2>Shower Installation & Replacement</h2>

          <p>
            Alpha can undertake suitable shower installation and replacement
            work as part of bathroom renovations and upgrades.
          </p>

          <div className={styles.simpleList}>
            <div>✓ Shower trays</div>
            <div>✓ Shower enclosures</div>
            <div>✓ Suitable shower plumbing</div>
            <div>✓ Waste connections</div>
            <div>✓ Wall preparation</div>
            <div>✓ Tiling and sealant</div>
            <div>✓ Associated finishing work</div>
          </div>

          <div className={styles.technicalNote}>
            Where an electric shower requires new electrical work, the website
            does not imply that Alpha personally undertakes that regulated
            electrical element unless the appropriate capability and
            arrangements are in place.
          </div>
        </div>
      </section>

      {/* =========================================
          TOILETS / BASINS
      ========================================== */}
      <section className={styles.splitCardsSection}>
        <div className={styles.splitCard}>
          <div className={styles.splitIcon}>⌂</div>

          <div className={styles.sectionLabel}>TOILET INSTALLATION</div>

          <h2>Toilet Installation & Replacement</h2>

          <p>
            Alpha can replace and install suitable toilets as part of bathroom
            projects or as an individual plumbing job.
          </p>

          <ul>
            <li>Toilet replacement</li>
            <li>Cistern installation</li>
            <li>Plumbing connections</li>
            <li>Waste connections</li>
            <li>Repair work</li>
            <li>Finishing around the installation</li>
          </ul>

          <Link href="/plumbing-services" className={styles.textButton}>
            View Plumbing Services →
          </Link>
        </div>

        <div className={styles.splitCard}>
          <div className={styles.splitIcon}>◇</div>

          <div className={styles.sectionLabel}>BASINS & VANITIES</div>

          <h2>Basins, Vanity Units & Bathroom Furniture</h2>

          <p>
            A basin or vanity unit can significantly change both the appearance
            and storage available within a bathroom.
          </p>

          <ul>
            <li>Wash basins</li>
            <li>Vanity units</li>
            <li>Basin taps</li>
            <li>Plumbing connections</li>
            <li>Waste connections</li>
            <li>Bathroom cabinets and suitable furniture</li>
          </ul>

          <Link href="/request-a-quote" className={styles.textButton}>
            Discuss Your Bathroom →
          </Link>
        </div>
      </section>

      {/* =========================================
          PLUMBING
      ========================================== */}
      <section className={styles.darkFeatureSection}>
        <div className={styles.darkFeatureContent}>
          <div className={styles.sectionLabel}>PLUMBING</div>

          <h2>Bathroom Plumbing</h2>

          <p>
            Plumbing forms a major part of most bathroom renovations. Alpha can
            undertake suitable bathroom plumbing, repairs and alterations as
            part of the overall project.
          </p>

          <div className={styles.darkList}>
            <div>✓ Water pipework</div>
            <div>✓ Basin plumbing</div>
            <div>✓ Toilet plumbing</div>
            <div>✓ Bath plumbing</div>
            <div>✓ Shower-related plumbing</div>
            <div>✓ Waste connections</div>
            <div>✓ Tap installation</div>
            <div>✓ Plumbing alterations associated with renovation work</div>
          </div>

          <Link href="/plumbing-services" className={styles.lightButton}>
            View Plumbing Services →
          </Link>
        </div>

        <div className={styles.gasNotice}>
          <span>IMPORTANT</span>
          <p>
            Alpha does not currently undertake work that legally requires Gas
            Safe registration.
          </p>
        </div>
      </section>

      {/* =========================================
          TILING / FLOORING
      ========================================== */}
      <section className={styles.tileSection}>
        <div className={styles.tileImage}>
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85"
            alt="Bathroom tiling and flooring"
          />
        </div>

        <div className={styles.tileContent}>
          <div className={styles.sectionLabel}>FINISHES</div>

          <h2>Bathroom Tiling</h2>

          <p>
            Wall and floor tiling can form a major part of the finished
            appearance of a bathroom.
          </p>

          <p>
            Alpha can incorporate suitable tiling into bathroom renovation
            projects, helping keep the preparation, installation and finishing
            stages coordinated.
          </p>

          <div className={styles.simpleList}>
            <div>✓ Wall tiling</div>
            <div>✓ Floor tiling</div>
            <div>✓ Shower-area tiling</div>
            <div>✓ Splashback tiling</div>
            <div>✓ Tile replacement</div>
            <div>✓ Regrouting</div>
            <div>✓ Preparation prior to tiling</div>
            <div>✓ Finishing and sealant</div>
          </div>

          <Link href="/tiling-flooring" className={styles.textButton}>
            View Tiling & Flooring →
          </Link>
        </div>
      </section>

      <section className={styles.floorSection}>
        <div>
          <div className={styles.sectionLabel}>BATHROOM FLOORING</div>

          <h2>Bathroom Flooring</h2>

          <p>
            Bathroom floors need to be suitable for the space and properly
            finished around fittings and edges.
          </p>

          <p>
            Alpha can install suitable bathroom flooring as part of a
            renovation project, subject to the chosen product and existing
            floor condition.
          </p>

          <p>
            Where the underlying surface requires preparation or repair, this
            can be assessed as part of the wider project.
          </p>
        </div>

        <Link href="/tiling-flooring" className={styles.darkButton}>
          View Tiling & Flooring →
        </Link>
      </section>

      {/* =========================================
          SEALANT / PREPARATION
      ========================================== */}
      <section className={styles.preparationSection}>
        <div className={styles.preparationCard}>
          <div className={styles.cardNumber}>01</div>

          <div className={styles.sectionLabel}>FINISHING DETAILS</div>

          <h2>Bathroom Sealant & Finishing</h2>

          <p>
            Small finishing details can make a significant difference to the
            appearance and performance of a bathroom.
          </p>

          <div className={styles.simpleList}>
            <div>✓ Silicone sealant</div>
            <div>✓ Re-sealing baths</div>
            <div>✓ Re-sealing showers</div>
            <div>✓ Basin sealing</div>
            <div>✓ Finishing around bathroom fittings</div>
            <div>✓ Regrouting</div>
            <div>✓ Making good surrounding surfaces</div>
          </div>
        </div>

        <div className={styles.preparationCard}>
          <div className={styles.cardNumber}>02</div>

          <div className={styles.sectionLabel}>PREPARATION</div>

          <h2>Bathroom Preparation & Making Good</h2>

          <p>
            Bathrooms often reveal hidden preparation work once old fittings
            and finishes are removed.
          </p>

          <p>
            Alpha can incorporate suitable preparation and making-good work
            into the renovation rather than requiring the customer to find
            another contractor.
          </p>

          <div className={styles.simpleList}>
            <div>✓ Wall repairs</div>
            <div>✓ Ceiling repairs</div>
            <div>✓ Surface preparation</div>
            <div>✓ Plaster repairs</div>
            <div>✓ Making good following removal</div>
            <div>✓ Preparation before tiling or decorating</div>
          </div>
        </div>
      </section>

      {/* =========================================
          PARTIAL UPGRADES
      ========================================== */}
      <section className={styles.upgradeSection}>
        <div className={styles.upgradeContent}>
          <div className={styles.sectionLabel}>SMALLER PROJECTS</div>

          <h2>Not Every Bathroom Needs a Complete Renovation</h2>

          <p>
            Sometimes the room itself is still usable but several elements need
            updating.
          </p>

          <p>
            Alpha can undertake smaller bathroom improvement projects where
            appropriate.
          </p>

          <div className={styles.upgradeGrid}>
            <div>Replacing a toilet</div>
            <div>Replacing a basin or vanity</div>
            <div>Changing taps</div>
            <div>Replacing a bath</div>
            <div>Replacing a shower enclosure</div>
            <div>Repairing damaged tiles</div>
            <div>Regrouting</div>
            <div>Renewing sealant</div>
            <div>Bathroom plumbing repairs</div>
            <div>Updating flooring</div>
            <div>General bathroom maintenance</div>
          </div>

          <div className={styles.noJobMessage}>
            No job is too big or too small.
          </div>
        </div>
      </section>

      {/* =========================================
          LANDLORDS
      ========================================== */}
      <section className={styles.landlordSection}>
        <div className={styles.landlordImage}>
          <img
            src="https://images.unsplash.com/photo-1584622781867-3d3f0f8a9f2e?auto=format&fit=crop&w=1100&q=85"
            alt="Bathroom refurbishment for rental property"
          />
        </div>

        <div className={styles.landlordContent}>
          <div className={styles.sectionLabel}>LANDLORDS & AGENTS</div>

          <h2>Bathroom Renovations for Landlords & Letting Agents</h2>

          <p>
            Bathrooms are one of the areas of rental properties most affected
            by wear, moisture, damaged fittings and repeated use.
          </p>

          <p>
            Alpha can undertake bathroom repairs, upgrades and complete
            renovations for landlords, letting agents and property managers.
          </p>

          <div className={styles.featureList}>
            <div>✓ Bathroom repairs</div>
            <div>✓ Replacement bathroom fittings</div>
            <div>✓ Plumbing</div>
            <div>✓ Complete bathroom refurbishment</div>
            <div>✓ Tiling and flooring</div>
            <div>✓ Sealant and decorating</div>
            <div>✓ Void-property bathroom renovation</div>
            <div>✓ End-of-tenancy repairs</div>
            <div>✓ Preparation before re-letting</div>
          </div>

          <p>
            For properties requiring work beyond the bathroom, Alpha can
            combine bathroom renovation with wider property maintenance or
            refurbishment.
          </p>

          <Link
            href="/landlords-letting-agents"
            className={styles.darkButton}
          >
            View Landlord & Letting Agent Services →
          </Link>
        </div>
      </section>

      {/* =========================================
          VOID PROPERTIES
      ========================================== */}
      <section className={styles.voidSection}>
        <div>
          <div className={styles.sectionLabel}>VACANT & VOID PROPERTIES</div>

          <h2>Bathroom Work for Vacant & Void Properties</h2>

          <p>
            A vacant rental property can be an ideal opportunity to deal with a
            bathroom that has become outdated, damaged or difficult to
            maintain.
          </p>

          <p>
            Alpha can assess whether the bathroom requires individual repairs,
            a partial upgrade or complete renovation and combine that work
            with other void-property requirements where necessary.
          </p>
        </div>

        <div className={styles.voidLinks}>
          <span>Decorating</span>
          <span>Flooring</span>
          <span>Kitchen Work</span>
          <span>Property Repairs</span>
          <span>Garden Clearance</span>
        </div>
      </section>

      {/* =========================================
          PROPERTY RENOVATIONS
      ========================================== */}
      <section className={styles.renovationSection}>
        <div className={styles.renovationContent}>
          <div className={styles.sectionLabel}>WIDER PROJECTS</div>

          <h2>Bathrooms Within Larger Property Renovations</h2>

          <p>
            Bathroom renovation can form part of a wider house or property
            refurbishment.
          </p>

          <p>
            Where multiple rooms are being renovated, Alpha can coordinate
            suitable bathroom work alongside the other property services
            required.
          </p>

          <div className={styles.renovationTags}>
            <span>Newly Purchased Properties</span>
            <span>Rental Refurbishments</span>
            <span>Investment Properties</span>
            <span>Whole-House Renovations</span>
            <span>Properties Requiring Modernisation</span>
          </div>

          <Link href="/property-renovations" className={styles.goldButton}>
            View Property Renovations →
          </Link>
        </div>
      </section>

      {/* =========================================
          PRODUCTS & MATERIALS
      ========================================== */}
      <section className={styles.materialSection}>
        <div className={styles.materialContent}>
          <div className={styles.sectionLabel}>PRODUCTS & MATERIALS</div>

          <h2>Bathroom Products & Materials</h2>

          <p>
            Customers may already have chosen their bathroom suite, tiles,
            flooring and finishes, or may still be deciding what they want.
          </p>

          <p>
            Alpha can discuss product and material requirements as part of the
            quotation process.
          </p>

          <div className={styles.materialGrid}>
            <div>
              <strong>Supplied by Alpha</strong>
              <span>Clearly identified in the quotation.</span>
            </div>

            <div>
              <strong>Supplied by Customer</strong>
              <span>Customer-selected products can be discussed.</span>
            </div>

            <div>
              <strong>Included</strong>
              <span>Items included within the agreed quotation.</span>
            </div>

            <div>
              <strong>Excluded</strong>
              <span>Anything outside the agreed project scope.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CLEAR QUOTATIONS
      ========================================== */}
      <section className={styles.quoteInfoSection}>
        <div className={styles.quoteInfoIcon}>£</div>

        <div>
          <div className={styles.sectionLabel}>CLEAR QUOTATIONS</div>

          <h2>Clear Bathroom Renovation Quotations</h2>

          <p>
            Bathroom costs vary depending on the condition of the existing
            room, selected fittings, materials, plumbing requirements and the
            amount of preparation required.
          </p>

          <p>
            Alpha prefers clear quotations based on the agreed scope of work
            rather than simply charging customers an unexplained hourly rate.
          </p>

          <p>
            If hidden damage or previously inaccessible problems are discovered
            after existing fittings or finishes are removed, any additional
            work should be discussed before proceeding.
          </p>
        </div>
      </section>

      {/* =========================================
          WATER DAMAGE
      ========================================== */}
      <section className={styles.damageSection}>
        <div>
          <div className={styles.sectionLabel}>EXISTING BATHROOM DAMAGE</div>

          <h2>Found Damage Behind Your Existing Bathroom?</h2>

          <p>
            Bathrooms can sometimes hide problems that only become visible once
            fittings, tiles or flooring are removed.
          </p>

          <p>
            This might include damaged surfaces, deteriorated finishes or
            other maintenance requirements.
          </p>

          <p>
            If additional property repairs are identified, Alpha can assess
            them as part of our wider property-maintenance service.
          </p>

          <Link href="/property-maintenance" className={styles.darkButton}>
            View Property Maintenance →
          </Link>
        </div>

        <div className={styles.damageNote}>
          <strong>Important</strong>
          <p>
            Specialist mould, asbestos, structural or waterproofing
            remediation should not be assumed to be included unless separately
            confirmed and appropriately qualified.
          </p>
        </div>
      </section>

      {/* =========================================
          PROCESS
      ========================================== */}
      <section className={styles.processSection}>
        <div className={styles.processHeading}>
          <div className={styles.sectionLabel}>OUR PROCESS</div>

          <h2>How Your Bathroom Project Works</h2>

          <p>
            From the initial enquiry through to final finishing, the project
            follows the agreed scope and sequence of work.
          </p>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <div className={styles.processItem} key={step.number}>
              <div className={styles.processIcon}>{step.icon}</div>

              <div>
                <div className={styles.processNumber}>{step.number}</div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          FAQ
      ========================================== */}
      <section className={styles.faqSection}>
        <div className={styles.faqHeading}>
          <div className={styles.sectionLabel}>FAQ</div>

          <h2>Bathroom Installation & Renovation FAQs</h2>

          <p>
            Answers to common questions about bathroom installation,
            refurbishment, plumbing and renovation work.
          </p>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq) => (
            <details className={styles.faqItem} key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <strong>+</strong>
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* =========================================
          SERVICE AREA
      ========================================== */}
      <section className={styles.areaSection}>
        <div className={styles.areaContent}>
          <div className={styles.sectionLabel}>SERVICE AREA</div>

          <h2>Bathroom Services Across Our Region</h2>

          <p>
            Alpha provides bathroom installation and renovation services
            throughout our regional service area, extending from Peterborough
            to Skegness and from Long Sutton to Lincoln, including surrounding
            towns, villages and rural communities.
          </p>

          <Link href="/areas-we-cover" className={styles.goldButton}>
            View Areas We Cover →
          </Link>
        </div>

        <div className={styles.areaVisual}>
          <div className={styles.areaLine}>
            <span>Peterborough</span>
            <i></i>
            <span>Skegness</span>
          </div>

          <div className={styles.areaLine}>
            <span>Long Sutton</span>
            <i></i>
            <span>Lincoln</span>
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================== */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaContent}>
          <div className={styles.sectionLabel}>START YOUR PROJECT</div>

          <h2>Ready to Improve Your Bathroom?</h2>

          <p>
            Whether you need one bathroom fitting replaced, several
            improvements completed or the entire room renovated, tell Alpha
            what you'd like to achieve.
          </p>

          <p>
            We'll assess the work required and provide a quotation based on the
            agreed project.
          </p>

          <div className={styles.finalTagline}>
            One Team. Complete Property Care.
          </div>

          <div className={styles.finalButtons}>
            <Link href="/request-a-quote" className={styles.goldButton}>
              Request a Bathroom Quote →
            </Link>

            <a
              href="tel:01775518068"
              className={styles.finalPhone}
              aria-label="Call Alpha on 01775 518068"
            >
              ☎ &nbsp; 01775 518068
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}