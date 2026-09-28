import type { Metadata } from "next";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./TilingFlooring.module.css";

export const metadata: Metadata = {
  title: "Tiling & Flooring Installation Services | Alpha",
  description:
    "Tiling and flooring installation for homes, bathrooms, kitchens, landlords and renovations, including preparation, repairs, grouting, sealing and finishing.",
};

const wallTiling = [
  "Bathroom wall tiling",
  "Shower-area tiling",
  "Kitchen wall tiling",
  "Splashbacks",
  "Utility areas",
  "Replacement tiles",
  "Feature tiled areas",
  "Tiling following preparation or repair work",
];

const floorTiling = [
  "Removal of suitable existing finishes",
  "Floor preparation",
  "Tile layout",
  "Cutting and installation",
  "Grouting",
  "Edge finishing",
  "Sealant where appropriate",
  "Final finishing",
];

const bathroomTiling = [
  "Shower-area tiling",
  "Bath surrounds",
  "Bathroom walls",
  "Bathroom floors",
  "Splashbacks",
  "Tile replacement",
  "Regrouting",
  "Sealant and finishing",
];

const kitchenTiling = [
  "Kitchen splashbacks",
  "Wall tiling",
  "Selected floor tiling",
  "Replacement tiles",
  "Regrouting",
  "Surface preparation",
  "Sealant and finishing",
];

const tileRepairs = [
  "Cracked tiles",
  "Damaged tiles",
  "Loose tiles",
  "Missing tiles",
  "Small areas requiring replacement",
  "Making good around replaced fittings",
];

const regrouting = [
  "Removing deteriorated grout where appropriate",
  "Regrouting",
  "Local grout repairs",
  "Cleaning/preparing joints before new grout",
  "Finishing around repaired areas",
];

const sealant = [
  "Baths",
  "Shower trays",
  "Shower enclosures",
  "Basins",
  "Kitchen sinks",
  "Worktop edges",
  "Tiled junctions",
  "Other suitable wet-area finishes",
];

const preparation = [
  "Removing loose finishes",
  "Making good damaged areas",
  "Wall repairs",
  "Floor preparation",
  "Surface cleaning",
  "Levelling suitable minor imperfections",
  "Preparing areas after old tiles are removed",
];

const flooring = [
  "Replacement flooring",
  "Kitchen flooring",
  "Bathroom flooring",
  "Utility-room flooring",
  "Hallway flooring",
  "Bedroom/living-area flooring where suitable",
  "Flooring as part of property renovations",
];

const floorPreparation = [
  "Existing floor removal",
  "Minor repairs",
  "Making good",
  "Suitable levelling work",
  "Preparing edges and thresholds",
  "Areas affected by previous fixtures",
  "Preparation as part of kitchen or bathroom renovations",
];

const floorReplacementChecks = [
  "Damage",
  "Movement",
  "Moisture concerns",
  "Uneven areas",
  "Previous adhesive or fixing issues",
  "Repairs required before installation",
];

const renovationWork = [
  "Property renovations",
  "Bathrooms",
  "Kitchens",
  "Decorating",
  "Plumbing",
  "General property repairs",
];

const landlordWork = [
  "Damaged tile replacement",
  "Regrouting",
  "Sealant replacement",
  "Kitchen flooring",
  "Bathroom flooring",
  "Replacement flooring",
  "Tiling during void-property work",
  "Flooring as part of refurbishment",
  "Making good between tenancies",
];

const voidWork = [
  "Decorating",
  "Plumbing",
  "Bathrooms",
  "Kitchens",
  "Property repairs",
  "Garden work",
];

const smallJobs = [
  "One or several damaged tiles",
  "Failed grout",
  "Failed silicone",
  "Small splashbacks",
  "Selected tiled areas",
  "Replacement flooring in one room",
  "Flooring across several rooms",
  "Tiling as part of a full renovation",
];

const materials = [
  "Which materials Alpha is supplying",
  "Which materials the customer is supplying",
  "Whether removal/disposal is included",
  "Whether preparation is included",
  "Grout, adhesive and sealant requirements",
  "Any trims, thresholds or finishing materials required",
];

const quotationFactors = [
  "Area size",
  "Existing surface condition",
  "Preparation required",
  "Materials selected",
  "Tile size or flooring product",
  "Layout",
  "Removal work",
  "Repairs",
  "Finishing requirements",
];

const processSteps = [
  {
    number: "1",
    title: "Tell Us About the Area",
    text: "Send details of the room, approximate dimensions, photographs and information about the finish you're considering.",
  },
  {
    number: "2",
    title: "Assessment",
    text: "We assess the existing surface and determine what preparation may be required.",
  },
  {
    number: "3",
    title: "Agree the Scope",
    text: "We confirm the area being tiled or floored, preparation, products and finishing requirements.",
  },
  {
    number: "4",
    title: "Quotation",
    text: "You'll receive a quotation based on the agreed work.",
  },
  {
    number: "5",
    title: "Preparation",
    text: "Existing finishes are removed where required and suitable preparation work is completed.",
  },
  {
    number: "6",
    title: "Installation",
    text: "The agreed tiling or flooring is installed and finished in accordance with the agreed project scope.",
  },
  {
    number: "7",
    title: "Completion",
    text: "Grouting, sealant, trims and other agreed finishing work are completed before handover.",
  },
];

export default function TilingFlooringPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>TILING &amp; FLOORING SERVICES</p>

                <h1>Tiling &amp; Flooring Installation Services</h1>

                <p className={styles.heroMessage}>
                  From bathroom walls and kitchen splashbacks to new flooring
                  and repairs, Alpha Property &amp; Gardening Services
                  provides tiling and flooring services for homeowners,
                  landlords and property renovation projects.
                </p>

                <p className={styles.heroMessage}>
                  We can undertake suitable preparation, tile installation,
                  flooring, grouting, sealing and finishing as standalone work
                  or as part of a larger bathroom, kitchen or property
                  renovation.
                </p>

                <p className={styles.heroSubheadline}>
                  From preparation to the finished surface.
                </p>

                <div className={styles.heroActions}>
                  <Link
                    href="/request-a-quote"
                    className={styles.primaryButton}
                  >
                    REQUEST A TILING OR FLOORING QUOTE
                  </Link>

                  <a
                    href="tel:01775518068"
                    className={styles.phoneButton}
                  >
                    CALL 01775 518068
                  </a>
                </div>

                <div className={styles.supportLinks}>
                  <Link href="/bathroom-services">
                    Planning a bathroom renovation? → View Bathroom Services
                  </Link>

                  <Link href="/kitchen-services">
                    Planning a kitchen renovation? → View Kitchen Services
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroCard}>
                  <div className={styles.heroCardIcon}>⌂</div>

                  <h2>From preparation to the finished surface.</h2>

                  <p>
                    Tiling, flooring, repairs, preparation, grouting, sealing
                    and finishing as part of your property project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>ONE PROPERTY TEAM</p>
              <h2>Tiling &amp; Flooring From One Property Team</h2>
            </div>

            <div className={styles.introGrid}>
              <div>
                <p>
                  A good finished surface depends on more than the tile or
                  flooring product itself.
                </p>

                <p>
                  Existing finishes may need removing, damaged areas may
                  require repair and the underlying surface may need preparing
                  before new materials can be installed.
                </p>
              </div>

              <div>
                <p>
                  Alpha can assess the condition of the area, the chosen finish
                  and the work required before installation begins.
                </p>

                <p>
                  Where tiling or flooring forms part of a wider project, the
                  work can also be coordinated with plumbing, bathroom
                  installation, kitchen installation, decorating and general
                  property repairs.
                </p>
              </div>
            </div>

            <div className={styles.statement}>
              <span>One enquiry.</span>
              <strong>One team. Complete property care.</strong>
            </div>
          </div>
        </section>

        {/* WALL TILING */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div>
                <p className={styles.eyebrow}>WALL TILING</p>
                <h2>Wall Tiling</h2>

                <p className={styles.lead}>
                  Wall tiling can provide a practical, durable and
                  easy-to-maintain finish in suitable areas of the home.
                </p>

                <p>
                  Alpha can undertake wall tiling as an individual project or
                  as part of a bathroom, kitchen or wider renovation.
                </p>

                <div className={styles.featureBox}>
                  <h3>Suitable projects may include:</h3>

                  <ul className={styles.checkList}>
                    {wallTiling.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/request-a-quote"
                  className={styles.textButton}
                >
                  REQUEST A TILING QUOTE →
                </Link>
              </div>

              <div className={styles.infoBox}>
                <span>01</span>
                <h3>Wall Tiling</h3>
                <p>
                  Practical and durable tiled finishes for suitable areas
                  throughout the property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLOOR TILING */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div
              className={`${styles.contentGrid} ${styles.contentGridReverse}`}
            >
              <div className={styles.infoBox}>
                <span>02</span>
                <h3>Floor Tiling</h3>
                <p>
                  Hard-wearing tiled finishes with preparation and finishing
                  considered as part of the project.
                </p>
              </div>

              <div>
                <p className={styles.eyebrow}>FLOOR TILING</p>
                <h2>Floor Tiling</h2>

                <p className={styles.lead}>
                  Floor tiles can provide a hard-wearing finish for kitchens,
                  bathrooms, hallways and other suitable areas.
                </p>

                <p>
                  Alpha can undertake floor tiling subject to the existing
                  floor condition, selected product and preparation required.
                </p>

                <div className={styles.featureBox}>
                  <h3>Work may include:</h3>

                  <ul className={styles.checkList}>
                    {floorTiling.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className={styles.note}>
                  The existing floor should be assessed before installation so
                  any required preparation can be identified.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BATHROOM TILING */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div>
                <p className={styles.eyebrow}>BATHROOM TILING</p>
                <h2>Bathroom Tiling</h2>

                <p className={styles.lead}>
                  Tiling forms a major part of many bathroom renovations.
                </p>

                <p>
                  Alpha can incorporate suitable wall and floor tiling into
                  complete bathroom projects or undertake selected bathroom
                  tiling as a separate job.
                </p>

                <div className={styles.featureBox}>
                  <h3>This may include:</h3>

                  <ul className={styles.checkList}>
                    {bathroomTiling.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/bathroom-services"
                  className={styles.textButton}
                >
                  VIEW BATHROOM SERVICES →
                </Link>
              </div>

              <div className={styles.darkCard}>
                <span>03</span>
                <h3>Bathroom Tiling</h3>
                <p>
                  Suitable wall and floor tiling can be incorporated into
                  complete bathroom projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KITCHEN TILING */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div
              className={`${styles.contentGrid} ${styles.contentGridReverse}`}
            >
              <div className={styles.darkCard}>
                <span>04</span>
                <h3>Kitchen Tiling &amp; Splashbacks</h3>
                <p>
                  Practical finishes around worktops, sinks and other suitable
                  kitchen areas.
                </p>
              </div>

              <div>
                <p className={styles.eyebrow}>KITCHEN TILING</p>
                <h2>Kitchen Tiling &amp; Splashbacks</h2>

                <p className={styles.lead}>
                  Kitchen tiling can provide a practical finish around
                  worktops, sinks and other suitable areas while contributing
                  significantly to the appearance of the room.
                </p>

                <p>Alpha can undertake:</p>

                <ul className={styles.checkList}>
                  {kitchenTiling.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p>
                  Kitchen tiling can be completed independently or as part of a
                  complete kitchen installation or renovation.
                </p>

                <Link
                  href="/kitchen-services"
                  className={styles.textButton}
                >
                  VIEW KITCHEN SERVICES →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TILE REPAIRS */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentWide}>
              <p className={styles.eyebrow}>TILE REPAIRS</p>
              <h2>Tile Repairs &amp; Replacement</h2>

              <p className={styles.lead}>
                Not every tiled surface needs replacing completely.
              </p>

              <p>
                Where suitable matching tiles are available and the surrounding
                area is in serviceable condition, Alpha can assess individual
                tile repairs and replacements.
              </p>

              <div className={styles.cardList}>
                {tileRepairs.map((item) => (
                  <div className={styles.featureBox} key={item}>
                    <span className={styles.cardCheck}>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className={styles.note}>
                The feasibility of a localised repair will depend on the
                condition of the surrounding surface and availability of
                suitable replacement materials.
              </p>
            </div>
          </div>
        </section>

        {/* REGROUTING */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div>
                <p className={styles.eyebrow}>RE-GROUTING</p>
                <h2>Regrouting &amp; Grout Repairs</h2>

                <p className={styles.lead}>
                  Discoloured, damaged or deteriorated grout can affect the
                  appearance of tiled areas and may indicate that maintenance
                  is required.
                </p>

                <p>
                  Alpha can undertake suitable regrouting work in bathrooms,
                  kitchens and other tiled areas.
                </p>

                <div className={styles.featureBox}>
                  <h3>This may include:</h3>

                  <ul className={styles.checkList}>
                    {regrouting.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className={styles.note}>
                  Where loose tiles, movement or underlying damage is
                  identified, additional repair work may be required rather
                  than simply applying new grout.
                </p>
              </div>

              <div className={styles.infoBox}>
                <span>05</span>
                <h3>Regrouting</h3>
                <p>
                  Grout repairs and suitable regrouting work for bathrooms,
                  kitchens and other tiled areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEALANT */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div>
                <p className={styles.eyebrow}>SEALANT</p>
                <h2>Silicone &amp; Sealant Replacement</h2>

                <p className={styles.lead}>
                  Sealant around baths, showers, basins, sinks and other wet
                  areas can deteriorate over time.
                </p>

                <p>
                  Failed sealant can allow water to reach surrounding surfaces
                  and should be dealt with before further deterioration occurs.
                </p>

                <p>
                  Alpha can undertake suitable sealant replacement including:
                </p>

                <ul className={styles.checkList}>
                  {sealant.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link
                  href="/property-maintenance"
                  className={styles.textButton}
                >
                  VIEW PROPERTY MAINTENANCE →
                </Link>
              </div>

              <div className={styles.darkCard}>
                <span>06</span>
                <h3>Silicone &amp; Sealant</h3>
                <p>
                  Suitable sealant replacement around wet areas and tiled
                  junctions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SURFACE PREPARATION */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.contentWide}>
              <p className={styles.eyebrow}>SURFACE PREPARATION</p>
              <h2>Preparation Before Tiling</h2>

              <p className={styles.lead}>
                The quality of the finished tiling depends heavily on the
                condition of the surface underneath.
              </p>

              <p>
                Before new tiles are installed, walls or floors may require
                preparation, repair or making good.
              </p>

              <p>Alpha can assess suitable preparation work such as:</p>

              <ul className={styles.checkList}>
                {preparation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.warningBox}>
                <p>
                  Not every existing surface will be suitable for tiling
                  without preparation. We’ll assess the underlying surface
                  first and identify any work required before installation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WET AREA */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentWide}>
              <p className={styles.eyebrow}>WATERPROOFING / WET AREAS</p>
              <h2>Wet-Area Preparation</h2>

              <p className={styles.lead}>
                Bathrooms and shower areas need suitable preparation before new
                finishes are installed.
              </p>

              <div className={styles.warningBox}>
                <p>
                  Where tanking or additional waterproofing is required, this
                  will be assessed separately and clearly included in the
                  quotation where it forms part of Alpha’s agreed work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLOORING */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div>
                <p className={styles.eyebrow}>FLOORING</p>
                <h2>Flooring Installation</h2>

                <p className={styles.lead}>
                  Alpha can undertake installation of suitable flooring
                  products as part of individual room improvements, kitchen
                  and bathroom projects or wider property renovations.
                </p>

                <p>
                  The exact work required will depend on the flooring product,
                  existing subfloor and condition of the room.
                </p>

                <div className={styles.featureBox}>
                  <h3>Suitable projects may include:</h3>

                  <ul className={styles.checkList}>
                    {flooring.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className={styles.note}>
                  The flooring products we can install will depend on the
                  material, room, existing subfloor and project requirements.
                  We’ll confirm suitability when assessing the job.
                </p>
              </div>

              <div className={styles.infoBox}>
                <span>07</span>
                <h3>Flooring Installation</h3>
                <p>
                  Suitable flooring installation for individual rooms,
                  kitchens, bathrooms and wider renovations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLOOR PREPARATION */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentWide}>
              <p className={styles.eyebrow}>FLOOR PREPARATION</p>
              <h2>Floor Preparation &amp; Repairs</h2>

              <p className={styles.lead}>
                A new floor is only as good as the surface underneath it.
              </p>

              <p>
                Existing flooring may need removing and the floor may require
                preparation before a new finish is installed.
              </p>

              <p>Depending on the project, Alpha can assess:</p>

              <ul className={styles.checkList}>
                {floorPreparation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className={styles.note}>
                If significant structural or specialist subfloor problems are
                discovered, these may require separate assessment before
                installation continues.
              </p>
            </div>
          </div>
        </section>

        {/* FLOORING REPLACEMENT */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.infoBox}>
                <span>08</span>
                <h3>Replacing Existing Flooring</h3>
                <p>
                  Existing flooring can be assessed before replacement and
                  preparation work is identified.
                </p>
              </div>

              <div>
                <p className={styles.eyebrow}>FLOORING REPLACEMENT</p>
                <h2>Replacing Existing Flooring</h2>

                <p className={styles.lead}>
                  Alpha can remove suitable existing flooring and install
                  replacement finishes where agreed as part of the quotation.
                </p>

                <p>
                  Before work begins, the existing surface should be assessed
                  for:
                </p>

                <ul className={styles.checkList}>
                  {floorReplacementChecks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className={styles.note}>
                  This helps establish whether the room is ready for the new
                  flooring or requires preparation first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RENOVATIONS */}
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <div className={styles.darkContent}>
              <p className={styles.eyebrowLight}>
                TILING &amp; FLOORING IN RENOVATIONS
              </p>

              <h2>Tiling &amp; Flooring Within Property Renovations</h2>

              <p className={styles.lead}>
                Tiling and flooring are often among the final stages of a
                wider renovation.
              </p>

              <p>
                Alpha can coordinate suitable tiling and flooring with the
                surrounding property work, helping avoid the customer
                arranging separate companies for each stage.
              </p>

              <p>This can include projects involving:</p>

              <ul className={styles.checkList}>
                {renovationWork.map((item) => (
                  <li key={item}>
                    {item === "Decorating" ? (
                      <Link href="/painting-decorating">
                        Painting &amp; Decorating
                      </Link>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>

              <Link
                href="/property-renovations"
                className={styles.textButton}
              >
                VIEW PROPERTY RENOVATIONS →
              </Link>
            </div>
          </div>
        </section>

        {/* LANDLORDS */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div>
                <p className={styles.eyebrow}>LANDLORDS</p>
                <h2>
                  Tiling &amp; Flooring for Landlords &amp; Letting Agents
                </h2>

                <p className={styles.lead}>
                  Flooring and tiled areas in rental properties can experience
                  significant wear between tenancies.
                </p>

                <p>
                  Alpha can undertake repairs, replacements and renovation work
                  for landlords, letting agents and property managers.
                </p>

                <div className={styles.featureBox}>
                  <h3>Suitable work may include:</h3>

                  <ul className={styles.checkList}>
                    {landlordWork.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p>
                  For properties requiring several jobs, tiling and flooring
                  can be included alongside wider Alpha maintenance and
                  renovation work.
                </p>

                <Link
                  href="/landlords-letting-agents"
                  className={styles.textButton}
                >
                  VIEW LANDLORD &amp; LETTING AGENT SERVICES →
                </Link>
              </div>

              <div className={styles.darkCard}>
                <span>09</span>
                <h3>Landlords &amp; Letting Agents</h3>
                <p>
                  Repairs, replacements and renovation work for rental
                  properties and wider property programmes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VOID PROPERTIES */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.contentWide}>
              <p className={styles.eyebrow}>VOID PROPERTIES</p>
              <h2>Tiling &amp; Flooring for Vacant Properties</h2>

              <p className={styles.lead}>
                Vacant properties are often the best time to replace worn
                flooring or repair tiled areas without disrupting occupants.
              </p>

              <p>
                Alpha can assess the condition of existing surfaces and include
                suitable tiling or flooring work as part of a wider
                void-property programme.
              </p>

              <p>This may be combined with:</p>

              <ul className={styles.checkList}>
                {voidWork.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SMALL JOBS */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div>
                <p className={styles.eyebrow}>SMALL JOBS</p>
                <h2>Repairs or Complete Replacement</h2>

                <p className={styles.lead}>
                  Not every flooring or tiling project requires an entire room
                  to be stripped out.
                </p>

                <p>
                  Alpha can consider both small repairs and larger replacement
                  projects.
                </p>

                <p>Examples may include:</p>

                <ul className={styles.checkList}>
                  {smallJobs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.bigStatement}>
                <span>No job is</span>
                <strong>too big or too small.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* MATERIALS */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.contentWide}>
              <p className={styles.eyebrow}>MATERIALS</p>
              <h2>Tiles, Flooring &amp; Materials</h2>

              <p className={styles.lead}>
                Customers may already have chosen and purchased their tiles or
                flooring, or may still be considering the available options.
              </p>

              <p>Your quotation will clearly confirm:</p>

              <ul className={styles.checkList}>
                {materials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.statement}>
                <span>Your quotation will clearly set out</span>
                <strong>
                  what is included in the agreed work.
                </strong>
              </div>

              <p className={styles.note}>
                Customer-supplied tiles or flooring will need to be assessed
                for suitability before installation is confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* CLEAR QUOTATIONS */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentWide}>
              <p className={styles.eyebrow}>CLEAR QUOTATIONS</p>
              <h2>Clear Tiling &amp; Flooring Quotations</h2>

              <p>Costs depend on factors such as:</p>

              <div className={styles.cardList}>
                {quotationFactors.map((item) => (
                  <div className={styles.featureBox} key={item}>
                    <span className={styles.cardCheck}>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p>
                Alpha prefers to provide clear quotations based on the agreed
                project scope rather than simply presenting customers with an
                unexplained hourly rate.
              </p>

              <p className={styles.note}>
                If hidden damage or additional preparation becomes apparent
                after existing finishes are removed, any additional work should
                be discussed before proceeding.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>PROJECT PROCESS</p>
              <h2>How Your Tiling or Flooring Project Works</h2>
            </div>

            <div className={styles.processGrid}>
              {processSteps.map((step) => (
                <div className={styles.processCard} key={step.number}>
                  <div className={styles.processNumber}>{step.number}</div>

                  <h3>{step.title}</h3>

                  {step.text && <p>{step.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <p className={styles.eyebrowLight}>TILING &amp; FLOORING</p>

              <h2>From preparation to the finished surface.</h2>

              <p>
                Discuss your tiling, flooring, repair or property renovation
                requirements with Alpha Property &amp; Gardening Services.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/request-a-quote"
                  className={styles.primaryButton}
                >
                  REQUEST A TILING OR FLOORING QUOTE
                </Link>

                <a
                  href="tel:01775518068"
                  className={styles.phoneButtonLight}
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