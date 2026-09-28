import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./areas-we-cover.module.css";

export const metadata: Metadata = {
  title: "Areas We Cover | Lincolnshire & Peterborough | Alpha",
  description:
    "Alpha provides property maintenance, renovations, plumbing, bathrooms, kitchens, decorating and garden services across Lincolnshire and Peterborough.",
};

type AreaSection = {
  title: string;
  intro: string;
  locations: string[];
};

type MapLocation = {
  name: string;
  lat: number;
  lng: number;
};

const primaryAreas = [
  {
    title: "Peterborough",
    text: "Property maintenance, repairs, plumbing, renovations and garden services across Peterborough and suitable surrounding areas.",
  },
  {
    title: "Market Deeping & The Deepings",
    text: "Property and garden services across Market Deeping, Deeping St James and surrounding communities.",
  },
  {
    title: "Bourne",
    text: "Property maintenance, repairs, renovations and landlord services throughout Bourne and surrounding areas.",
  },
  {
    title: "Spalding",
    text: "Full Alpha property and garden services across Spalding and surrounding South Holland communities.",
  },
  {
    title: "Holbeach",
    text: "Property maintenance, plumbing, renovations and garden services throughout Holbeach and nearby areas.",
  },
  {
    title: "Long Sutton",
    text: "Property and garden maintenance throughout Long Sutton and surrounding South Holland communities.",
  },
  {
    title: "Sutton Bridge",
    text: "Property maintenance, repairs and garden services around Sutton Bridge and the surrounding area.",
  },
  {
    title: "Boston",
    text: "Property maintenance, renovations, plumbing and landlord services across Boston and surrounding villages.",
  },
  {
    title: "Sleaford",
    text: "Property maintenance and improvement services throughout Sleaford and nearby North Kesteven communities.",
  },
  {
    title: "Lincoln",
    text: "Property maintenance, repairs and renovation services across Lincoln and suitable surrounding areas.",
  },
  {
    title: "Horncastle",
    text: "Property and garden maintenance in Horncastle and nearby communities.",
  },
  {
    title: "Spilsby",
    text: "Maintenance, repairs and garden services in and around Spilsby.",
  },
  {
    title: "Skegness",
    text: "Property maintenance, landlord work and garden services across Skegness and suitable nearby communities.",
  },
];

const areaSections: AreaSection[] = [
  {
    title: "Peterborough & Surrounding Areas",
    intro:
      "Alpha provides property maintenance and garden services across Peterborough and suitable surrounding communities.",
    locations: [
      "Peterborough",
      "Werrington",
      "Eye",
      "Thorney",
      "Newborough",
      "Glinton",
      "Northborough",
      "Peakirk",
      "Helpston",
      "Deeping Gate",
    ],
  },
  {
    title: "Market Deeping, The Deepings & Bourne",
    intro:
      "Our service region continues north into The Deepings and towards Bourne, covering suitable homes, rental properties and property projects in the surrounding communities.",
    locations: [
      "Market Deeping",
      "Deeping St James",
      "Bourne",
      "Langtoft",
      "Baston",
      "Thurlby",
      "Morton",
      "Rippingale",
      "Billingborough",
    ],
  },
  {
    title: "Crowland & The Fens",
    intro:
      "Crowland and the surrounding Fen communities provide an important link between Peterborough and the wider South Holland service area.",
    locations: [
      "Crowland",
      "Gedney Hill",
      "Holbeach Drove",
      "Whaplode Drove",
      "Sutton St Edmund",
    ],
  },
  {
    title: "Spalding & Surrounding Areas",
    intro:
      "Spalding is an important part of Alpha's regional service area, with coverage extending into many surrounding South Holland communities.",
    locations: [
      "Spalding",
      "Pinchbeck",
      "Cowbit",
      "Weston",
      "Weston Hills",
      "Moulton",
      "Moulton Chapel",
      "Whaplode",
      "Whaplode St Catherine",
      "Gosberton",
      "Surfleet",
      "Donington",
      "Deeping St Nicholas",
    ],
  },
  {
    title: "Holbeach & Surrounding Areas",
    intro:
      "Alpha provides property maintenance, plumbing, renovation and garden services throughout Holbeach and suitable nearby communities.",
    locations: [
      "Holbeach",
      "Holbeach Bank",
      "Holbeach Hurn",
      "Holbeach Clough",
      "Holbeach St Marks",
      "Holbeach St Johns",
      "Holbeach Fen",
      "Fleet",
      "Fleet Hargate",
      "Gedney",
      "Lutton",
    ],
  },
  {
    title: "Long Sutton, Sutton Bridge & Surrounding Areas",
    intro:
      "Long Sutton and Sutton Bridge form an important part of the eastern South Holland service area, together with nearby rural communities.",
    locations: [
      "Long Sutton",
      "Sutton Bridge",
      "Lutton",
      "Gedney",
      "Gedney Dyke",
      "Fleet",
      "Sutton St James",
    ],
  },
  {
    title: "Boston & Surrounding Villages",
    intro:
      "Alpha provides property maintenance, renovations, plumbing, landlord support and garden services across Boston and suitable surrounding villages.",
    locations: [
      "Boston",
      "Wyberton",
      "Fishtoft",
      "Kirton",
      "Frampton",
      "Sutterton",
      "Algarkirk",
      "Fosdyke",
      "Bicker",
      "Swineshead",
      "Butterwick",
      "Freiston",
      "Old Leake",
      "Leverton",
      "Wrangle",
      "Wigtoft",
    ],
  },
  {
    title: "Sleaford & Surrounding Areas",
    intro:
      "Our regional coverage includes Sleaford and suitable surrounding North Kesteven communities.",
    locations: [
      "Sleaford",
      "Ruskington",
      "Heckington",
      "Billinghay",
      "Metheringham",
      "Navenby",
      "Waddington",
      "Branston",
    ],
  },
  {
    title: "Lincoln & Lincoln Fringe",
    intro:
      "Alpha can support suitable properties in Lincoln and the Lincoln fringe, with the strongest coverage focused around Lincoln and North Hykeham.",
    locations: [
      "Lincoln",
      "North Hykeham",
      "Waddington",
      "Branston",
      "Bracebridge Heath",
      "South Hykeham",
    ],
  },
  {
    title: "Woodhall Spa, Coningsby & Tattershall",
    intro:
      "The area between Sleaford, Boston and East Lindsey forms another natural part of our wider regional coverage.",
    locations: [
      "Woodhall Spa",
      "Coningsby",
      "Tattershall",
      "Billinghay",
    ],
  },
  {
    title: "Horncastle, Spilsby & Surrounding Areas",
    intro:
      "Alpha's coverage extends into this part of East Lindsey for suitable property maintenance, repairs and garden work.",
    locations: [
      "Horncastle",
      "Spilsby",
      "Partney",
      "Stickney",
      "Sibsey",
      "Friskney",
    ],
  },
  {
    title: "Skegness & Surrounding Areas",
    intro:
      "Skegness forms the coastal end of Alpha's main service region, with coverage extending into suitable nearby communities.",
    locations: [
      "Skegness",
      "Wainfleet All Saints",
      "Burgh le Marsh",
      "Croft",
    ],
  },
];

const mapLocations: MapLocation[] = [
  {
    name: "Peterborough",
    lat: 52.573,
    lng: -0.242,
  },
  {
    name: "Market Deeping",
    lat: 52.676,
    lng: -0.318,
  },
  {
    name: "Bourne",
    lat: 52.766,
    lng: -0.376,
  },
  {
    name: "Spalding",
    lat: 52.787,
    lng: -0.151,
  },
  {
    name: "Holbeach",
    lat: 52.804,
    lng: 0.014,
  },
  {
    name: "Long Sutton",
    lat: 52.772,
    lng: 0.121,
  },
  {
    name: "Boston",
    lat: 52.978,
    lng: -0.026,
  },
  {
    name: "Sleaford",
    lat: 52.999,
    lng: -0.409,
  },
  {
    name: "Lincoln",
    lat: 53.23,
    lng: -0.54,
  },
  {
    name: "Woodhall Spa",
    lat: 53.153,
    lng: -0.214,
  },
  {
    name: "Horncastle",
    lat: 53.207,
    lng: -0.118,
  },
  {
    name: "Spilsby",
    lat: 53.174,
    lng: 0.094,
  },
  {
    name: "Skegness",
    lat: 53.143,
    lng: 0.336,
  },
];

/*
 * Geographic bounds used by the OpenStreetMap embed.
 * The marker positions below are calculated from these real coordinates.
 */
const mapBounds = {
  west: -0.9,
  east: 0.45,
  south: 52.45,
  north: 53.4,
};

function projectLongitude(lng: number) {
  return (
    ((lng - mapBounds.west) /
      (mapBounds.east - mapBounds.west)) *
    100
  );
}

function mercatorY(lat: number) {
  const radians = (lat * Math.PI) / 180;

  return (
    (1 -
      Math.log(
        Math.tan(radians) +
          1 / Math.cos(radians)
      ) /
        Math.PI) /
    2
  );
}

function projectLatitude(lat: number) {
  const top = mercatorY(mapBounds.north);
  const bottom = mercatorY(mapBounds.south);

  return (
    ((mercatorY(lat) - top) /
      (bottom - top)) *
    100
  );
}

const services = [
  {
    title: "Property Maintenance",
    text: "Repairs and ongoing maintenance for homeowners, landlords and managed properties.",
    href: "/property-maintenance",
    link: "VIEW PROPERTY MAINTENANCE →",
  },
  {
    title: "Property Renovations",
    text: "From individual rooms to complete property transformations.",
    href: "/property-renovations",
    link: "VIEW PROPERTY RENOVATIONS →",
  },
  {
    title: "Plumbing",
    text: "Repairs, installations and 24/7 emergency plumbing support.",
    href: "/plumbing-services",
    link: "VIEW PLUMBING SERVICES →",
  },
  {
    title: "Bathrooms",
    text: "Complete bathroom installation and renovation.",
    href: "/bathroom-services",
    link: "VIEW BATHROOM SERVICES →",
  },
  {
    title: "Kitchens",
    text: "Complete kitchen installation and renovation.",
    href: "/kitchen-services",
    link: "VIEW KITCHEN SERVICES →",
  },
  {
    title: "Tiling & Flooring",
    text: "Preparation, repairs and installation.",
    href: "/tiling-flooring",
    link: "VIEW TILING & FLOORING →",
  },
  {
    title: "Painting & Decorating",
    text: "Individual rooms through to complete property redecoration.",
    href: "/painting-decorating",
    link: "VIEW PAINTING & DECORATING →",
  },
  {
    title: "Roof & Gutter Maintenance",
    text: "Suitable roofline, gutter and rainwater-system work.",
    href: "/roofing-gutters",
    link: "VIEW ROOFING & GUTTERS →",
  },
  {
    title: "Garden Maintenance",
    text: "Regular maintenance, tidy-ups and overgrown garden clearances.",
    href: "/garden-services",
    link: "VIEW GARDEN SERVICES →",
  },
  {
    title: "Landlords & Letting Agents",
    text: "One property-maintenance team across single properties or portfolios.",
    href: "/landlords-letting-agents",
    link: "VIEW LANDLORD SERVICES →",
  },
];

const faqs = [
  {
    question: "What areas does Alpha cover?",
    answer:
      "Alpha works across a broad regional area extending from Peterborough to Skegness and from Long Sutton to Lincoln, including many of the surrounding towns, villages and rural communities shown on this page.",
  },
  {
    question: "Do you cover Spalding?",
    answer:
      "Yes. Spalding and the surrounding South Holland area form an important part of Alpha's service region.",
  },
  {
    question: "Do you cover Boston?",
    answer:
      "Yes. Alpha serves Boston and suitable surrounding communities including areas such as Kirton, Wyberton, Fishtoft and Sutterton.",
  },
  {
    question: "Do you cover Sleaford?",
    answer:
      "Yes. Alpha serves Sleaford and suitable surrounding North Kesteven communities.",
  },
  {
    question: "Do you cover Peterborough?",
    answer:
      "Yes. Peterborough forms the southern end of Alpha's wider service region, together with suitable surrounding communities.",
  },
  {
    question: "Do you cover Lincoln?",
    answer:
      "Yes. Lincoln and suitable surrounding areas, including parts of the Lincoln fringe, fall within our service region.",
  },
  {
    question: "Do you cover Skegness?",
    answer:
      "Yes. Skegness forms the coastal end of Alpha's main service area.",
  },
  {
    question: "Do you work in villages and rural areas?",
    answer:
      "Yes. Our coverage includes many villages and rural communities between the main towns listed on this page.",
  },
  {
    question: "My village isn't listed. Can I still request a quote?",
    answer:
      "Yes. Send us your postcode and details of the work. We can confirm whether the property falls within our practical service area.",
  },
  {
    question: "Do all Alpha services cover the same area?",
    answer:
      "Most services are available throughout the main coverage region, although travel, job type, urgency, access and project size may affect whether a particular job is practical. We will confirm this when reviewing your enquiry.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      {eyebrow && (
        <p className={styles.eyebrow}>
          {eyebrow}
        </p>
      )}

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </div>
  );
}

function AreaLocationList({
  locations,
}: {
  locations: string[];
}) {
  return (
    <div className={styles.locationList}>
      {locations.map((location) => (
        <span
          key={location}
          className={styles.locationTag}
        >
          <span
            className={styles.locationCheck}
          >
            ✓
          </span>

          {location}
        </span>
      ))}
    </div>
  );
}

function ServiceCard({
  title,
  text,
  href,
  link,
}: {
  title: string;
  text: string;
  href: string;
  link: string;
}) {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.serviceIcon}>
        ⌂
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <Link
        href={href}
        className={styles.serviceLink}
      >
        {link}
      </Link>
    </article>
  );
}

export default function AreasWeCoverPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={styles.heroInner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span>Areas We Cover</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <p className={styles.heroEyebrow}>
                  ALPHA PROPERTY &amp; GARDENING SERVICES
                </p>

                <h1>
                  Property &amp; Garden Services Across
                  Lincolnshire &amp; Peterborough
                </h1>

                <p className={styles.heroLead}>
                  Alpha Property &amp; Gardening Services
                  provides property maintenance, repairs,
                  renovations and garden services across a
                  wide regional area covering{" "}
                  <strong>
                    Peterborough through to Skegness and
                    Long Sutton through to Lincoln
                  </strong>
                  , together with many of the towns,
                  villages and rural communities in between.
                </p>

                <p>
                  Whether you need a small repair, plumbing
                  work, a bathroom or kitchen renovation,
                  property decorating, garden maintenance or
                  support across a rental portfolio, start
                  with Alpha.
                </p>

                <div className={styles.heroStatement}>
                  One Team. Complete Property Care.
                </div>

                <div className={styles.heroButtons}>
                  <a
                    href="#coverage-map"
                    className={styles.primaryButton}
                  >
                    CHECK YOUR AREA
                    <span>→</span>
                  </a>

                  <Link
                    href="/request-a-quote"
                    className={styles.secondaryButton}
                  >
                    REQUEST A QUOTE
                  </Link>

                  <a
                    href="tel:01775518068"
                    className={styles.phoneButton}
                  >
                    CALL 01775 518068
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div
                  className={
                    styles.heroVisualCard
                  }
                >
                  <span
                    className={
                      styles.heroVisualLabel
                    }
                  >
                    REGIONAL COVERAGE
                  </span>

                  <div className={styles.heroRoute}>
                    <div>
                      <strong>
                        Peterborough
                      </strong>

                      <span>
                        Southern coverage
                      </span>
                    </div>

                    <div
                      className={
                        styles.routeLine
                      }
                    >
                      <span />
                      <span />
                      <span />
                    </div>

                    <div>
                      <strong>Lincoln</strong>

                      <span>
                        Central coverage
                      </span>
                    </div>

                    <div
                      className={
                        styles.routeLine
                      }
                    >
                      <span />
                      <span />
                      <span />
                    </div>

                    <div>
                      <strong>
                        Skegness
                      </strong>

                      <span>
                        Coastal coverage
                      </span>
                    </div>
                  </div>

                  <div
                    className={
                      styles.heroMiniGrid
                    }
                  >
                    <span>
                      Property Maintenance
                    </span>
                    <span>Renovations</span>
                    <span>Plumbing</span>
                    <span>Bathrooms</span>
                    <span>Kitchens</span>
                    <span>
                      Garden Services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONAL INTRODUCTION */}
        <section
          className={styles.introSection}
        >
          <div className={styles.container}>
            <SectionHeading
              eyebrow="OUR SERVICE AREA"
              title="Our Service Area"
              text="Local property care across a wide regional service area."
            />

            <div className={styles.introGrid}>
              <div>
                <p>
                  Our work takes us across{" "}
                  <strong>
                    South Lincolnshire, South East
                    Lincolnshire, parts of Central and East
                    Lincolnshire and the Peterborough area
                  </strong>
                  .
                </p>

                <p>
                  Major locations within our service
                  region include:
                </p>

                <div
                  className={
                    styles.majorLocationLine
                  }
                >
                  Peterborough{" "}
                  <span>•</span> Market Deeping{" "}
                  <span>•</span> Bourne{" "}
                  <span>•</span> Spalding{" "}
                  <span>•</span> Holbeach{" "}
                  <span>•</span> Long Sutton{" "}
                  <span>•</span> Sutton Bridge{" "}
                  <span>•</span> Boston{" "}
                  <span>•</span> Sleaford{" "}
                  <span>•</span> Lincoln{" "}
                  <span>•</span> Horncastle{" "}
                  <span>•</span> Spilsby{" "}
                  <span>•</span> Skegness
                </div>

                <p>
                  We also work across many surrounding
                  towns, villages and rural communities
                  rather than limiting our service to the
                  major locations shown above.
                </p>
              </div>

              <div
                className={
                  styles.introHighlight
                }
              >
                <span>
                  WIDE REGIONAL COVERAGE
                </span>

                <strong>
                  Peterborough
                  <br />
                  ↓
                  <br />
                  South Lincolnshire
                  <br />
                  ↓
                  <br />
                  Lincoln &amp; East Lindsey
                  <br />
                  ↓
                  <br />
                  Skegness
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* PRIMARY AREAS */}
        <section
          className={
            styles.primaryAreasSection
          }
        >
          <div className={styles.container}>
            <SectionHeading
              eyebrow="PRIMARY AREAS"
              title="Main Areas We Serve"
              text="Key towns and communities across our regional service area."
            />

            <div
              className={
                styles.primaryAreasGrid
              }
            >
              {primaryAreas.map((area) => (
                <article
                  className={
                    styles.primaryAreaCard
                  }
                  key={area.title}
                >
                  <div
                    className={styles.cardTop}
                  >
                    <span
                      className={styles.cardPin}
                    >
                      ⌖
                    </span>

                    <span>
                      ALPHA SERVICE AREA
                    </span>
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>

                  <Link
                    href="/request-a-quote"
                    className={styles.cardLink}
                  >
                    REQUEST A QUOTE →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MAP */}
        <section
          className={styles.mapSection}
          id="coverage-map"
        >
          <div className={styles.container}>
            <SectionHeading
              eyebrow="SEE OUR COVERAGE AREA"
              title="See Our Coverage Area"
              text="The map below shows the approximate regional footprint and the main service hubs within it."
            />

            <div className={styles.mapWrapper}>
              <iframe
                title="Alpha Property & Gardening Services regional coverage map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.9%2C52.45%2C0.45%2C53.4&layer=mapnik"
                loading="lazy"
                className={styles.map}
              />

              <div
                className={
                  styles.mapRouteLabel
                }
              >
                <strong>
                  Approximate Alpha service region
                </strong>

                <span>
                  Peterborough to Skegness • Long Sutton
                  to Lincoln • plus surrounding communities
                  within the coverage area
                </span>
              </div>

              {mapLocations.map((location) => {
                const left =
                  projectLongitude(
                    location.lng
                  );

                const top =
                  projectLatitude(
                    location.lat
                  );

                const markerStyle = {
                  left: `${left}%`,
                  top: `${top}%`,
                } as CSSProperties;

                return (
                  <div
                    key={location.name}
                    className={
                      styles.mapMarker
                    }
                    style={markerStyle}
                    title={location.name}
                  >
                    <span
                      className={
                        styles.markerDot
                      }
                    />

                    <span
                      className={
                        styles.markerLabel
                      }
                    >
                      {location.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className={styles.mapNote}>
              <strong>
                Main service hubs:
              </strong>{" "}
              {mapLocations.map(
                (location, index) => (
                  <span key={location.name}>
                    {location.name}
                    {index <
                    mapLocations.length - 1
                      ? " • "
                      : ""}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* NOT SURE */}
        <section
          className={styles.notSureSection}
        >
          <div className={styles.container}>
            <div className={styles.notSureInner}>
              <div
                className={styles.notSureIcon}
              >
                ⌖
              </div>

              <div>
                <p
                  className={styles.eyebrow}
                >
                  NOT SURE IF WE COVER YOUR AREA?
                </p>

                <h2>
                  Can&apos;t See Your Town Listed?
                </h2>

                <p>
                  Our service area includes many smaller
                  villages and rural communities between
                  the locations shown on this page.
                </p>

                <p>
                  If your property is within or close to
                  our main coverage region, send us your
                  postcode and tell us what work you need.
                </p>
              </div>

              <div
                className={
                  styles.notSureActions
                }
              >
                <Link
                  href="/request-a-quote"
                  className={styles.primaryButton}
                >
                  CHECK YOUR AREA / REQUEST A QUOTE
                </Link>

                <a
                  href="tel:01775518068"
                  className={styles.darkButton}
                >
                  CALL 01775 518068
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FULL AREA SECTIONS */}
        <section
          className={
            styles.areaSectionsSection
          }
        >
          <div className={styles.container}>
            <SectionHeading
              eyebrow="REGIONAL COVERAGE"
              title="Towns, Villages & Rural Communities We Serve"
              text="Our coverage is organised into natural regional areas so customers can quickly find their part of Lincolnshire and Peterborough."
            />

            <div
              className={
                styles.areaSectionsGrid
              }
            >
              {areaSections.map(
                (section, index) => (
                  <article
                    className={`${styles.areaSectionCard} ${
                      index % 3 === 0
                        ? styles.areaSectionFeatured
                        : ""
                    }`}
                    key={section.title}
                  >
                    <div
                      className={
                        styles.areaSectionNumber
                      }
                    >
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </div>

                    <h3>
                      {section.title}
                    </h3>

                    <p>
                      {section.intro}
                    </p>

                    <AreaLocationList
                      locations={
                        section.locations
                      }
                    />
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          className={styles.servicesSection}
        >
          <div className={styles.container}>
            <SectionHeading
              eyebrow="SERVICES ACROSS THE REGION"
              title="Property Services Available Across Our Coverage Area"
              text="One regional property team for a broad range of maintenance, improvement and garden work."
            />

            <div
              className={styles.servicesGrid}
            >
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  text={service.text}
                  href={service.href}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* LANDLORD REGIONAL COVERAGE */}
        <section
          className={
            styles.landlordSection
          }
        >
          <div className={styles.container}>
            <div
              className={styles.landlordGrid}
            >
              <div>
                <p
                  className={
                    styles.eyebrow
                  }
                >
                  LANDLORD REGIONAL COVERAGE
                </p>

                <h2>
                  Managing Properties Across More Than One Area?
                </h2>

                <p>
                  Landlords and letting agents do not
                  always manage properties in one town.
                </p>

                <p>
                  Alpha&apos;s regional service area means
                  we can potentially support properties
                  across several locations through one
                  maintenance relationship.
                </p>

                <p>
                  Whether your portfolio includes
                  properties in Spalding, Boston,
                  Sleaford, Peterborough or elsewhere
                  within our coverage area, start with
                  one enquiry.
                </p>

                <div
                  className={
                    styles.landlordStatement
                  }
                >
                  One enquiry. One team. One point of
                  contact.
                </div>

                <Link
                  href="/landlords-letting-agents"
                  className={
                    styles.primaryButton
                  }
                >
                  VIEW LANDLORD &amp; LETTING AGENT
                  SERVICES →
                </Link>
              </div>

              <div
                className={
                  styles.landlordLocations
                }
              >
                <span>Spalding</span>
                <span>Boston</span>
                <span>Sleaford</span>
                <span>
                  Peterborough
                </span>
                <span>Lincoln</span>
                <span>Skegness</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Areas We Cover FAQs"
            />

            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <article
                  className={styles.faqCard}
                  key={faq.question}
                >
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
            <div
              className={
                styles.finalCtaInner
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                PROPERTY &amp; GARDEN SERVICES
              </p>

              <h2>
                Need Property or Garden Work in Our Service
                Area?
              </h2>

              <p>
                From Peterborough through South Lincolnshire
                and across towards Lincoln, Boston and
                Skegness, Alpha provides one team for a
                broad range of property and garden work.
              </p>

              <p>
                If your town or village isn&apos;t shown,
                send us your postcode and tell us what you
                need.
              </p>

              <h3>
                One Team. Complete Property Care.
              </h3>

              <div
                className={
                  styles.finalButtons
                }
              >
                <Link
                  href="/request-a-quote"
                  className={
                    styles.primaryButton
                  }
                >
                  REQUEST A QUOTE
                </Link>

                <a
                  href="tel:01775518068"
                  className={
                    styles.secondaryButton
                  }
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