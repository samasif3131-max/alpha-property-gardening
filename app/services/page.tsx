import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./services.module.css";

export const metadata = {
  title: "Property Maintenance & Renovation Services | Alpha",
  description:
    "Property maintenance, repairs and renovations for homeowners, landlords and letting agents. From small jobs to complete renovations, plus garden services.",
};

const PHONE_DISPLAY = "01775 518068";
const PHONE_TEL = "tel:01775518068";

const services = [
  {
    title: "Property Maintenance & Repairs",
    description:
      "From small repairs to ongoing property maintenance, Alpha can help keep homes and rental properties maintained, functional and looking their best.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    icon: "⚙",
    href: "/property-maintenance",
    linkText: "View Property Maintenance Services",
  },
  {
    title: "Property Renovations",
    description:
      "Complete property renovation projects, from individual rooms to full property transformations, through one reliable point of contact.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    icon: "⌂",
    href: "/property-renovations",
    linkText: "View Property Renovation Services",
  },
  {
    title: "Plumbing Services",
    description:
      "Plumbing repairs, maintenance and installation work for homes, rental properties and renovation projects.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=85",
    icon: "◉",
    href: "/plumbing-services",
    linkText: "View Plumbing Services",
  },
  {
    title: "Bathroom Renovations & Installations",
    description:
      "Bathroom fitting, renovations, plumbing, tiling, flooring, repairs and finishing work from start to finish.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    icon: "▱",
    href: "/bathroom-services",
    linkText: "View Bathroom Services",
  },
  {
    title: "Kitchen Renovations & Installations",
    description:
      "Kitchen fitting, renovation and improvement services from individual upgrades through to complete kitchen transformations.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    icon: "▣",
    href: "/kitchen-services",
    linkText: "View Kitchen Services",
  },
  {
    title: "Tiling & Flooring",
    description:
      "Professional tiling and flooring for bathrooms, kitchens and other areas of the property, as part of a renovation or standalone project.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    icon: "▤",
    href: "/tiling-flooring",
    linkText: "View Tiling & Flooring Services",
  },
  {
    title: "Painting & Decorating",
    description:
      "Painting, decorating and preparation work for homes and rental properties, from individual rooms to complete renovation finishing.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85",
    icon: "✦",
    href: "/painting-decorating",
    linkText: "View Painting & Decorating Services",
  },
  {
    title: "Roofing & Gutters",
    description:
      "Roofing, gutter and roofline maintenance and repair services to help protect properties from weather damage and water ingress.",
    image:
      "https://images.unsplash.com/photo-1520981825232-ece5fae45120?auto=format&fit=crop&w=1200&q=85",
    icon: "⌂",
    href: "/roofing-gutters",
    linkText: "View Roofing & Gutter Services",
  },
  {
    title: "Garden Maintenance & Clearances",
    description:
      "One-off and recurring garden maintenance, tidy-ups and clearances for homeowners, landlords and managed properties.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85",
    icon: "♧",
    href: "/garden-services",
    linkText: "View Garden Services",
  },
];

const propertyMaintenanceItems = [
  "General property repairs",
  "Carpentry and joinery",
  "Doors, handles and fittings",
  "Wall and ceiling repairs",
  "Plastering and preparation",
  "Sealant and regrouting",
  "Interior repairs",
  "Exterior property maintenance",
  "Rental-property maintenance",
  "Void-property work",
  "Property improvements",
];

const plumbingItems = [
  "Leaking pipes",
  "Taps and fittings",
  "Toilets and cisterns",
  "Pipework",
  "Waste pipes",
  "Plumbing repairs",
  "Bathroom plumbing",
  "Kitchen plumbing",
  "New plumbing installations",
  "Emergency plumbing",
];

const bathroomItems = [
  "Complete bathroom renovations",
  "Bathroom installations",
  "Baths",
  "Showers",
  "Toilets",
  "Basins",
  "Plumbing",
  "Wall and floor tiling",
  "Flooring",
  "Sealant and finishing",
  "Bathroom repairs",
];

const kitchenItems = [
  "Complete kitchen renovations",
  "Kitchen fitting",
  "Unit installation",
  "Worktops",
  "Plumbing",
  "Sinks and taps",
  "Tiling",
  "Flooring",
  "Decorating",
  "Finishing work",
];

const decoratingItems = [
  "Interior painting",
  "Walls and ceilings",
  "Woodwork",
  "Preparation",
  "Filling and repairs",
  "Rental-property redecorating",
  "Renovation finishing",
];

const gardenItems = [
  "Lawn mowing",
  "Grass cutting",
  "Strimming",
  "Hedge and shrub cutting",
  "Weeding",
  "Garden tidy-ups",
  "Seasonal maintenance",
  "Overgrown garden clearances",
  "Landlord garden maintenance",
  "Recurring maintenance",
];

const landlordItems = [
  "Property maintenance and repairs",
  "Property renovations",
  "Plumbing",
  "Bathrooms",
  "Kitchens",
  "Painting and decorating",
  "Tiling and flooring",
  "Garden maintenance",
  "Void-property work",
  "End-of-tenancy preparation",
  "Tenant liaison",
  "Before-and-after photographs",
  "Recurring maintenance",
];

const faqs = [
  {
    question: "What type of property work does Alpha undertake?",
    answer:
      "Alpha provides property maintenance, repairs, improvements and renovation services ranging from small individual jobs through to complete property renovations. Services include plumbing, bathrooms, kitchens, tiling, flooring, decorating and other property work.",
  },
  {
    question: "Do you undertake complete property renovations?",
    answer:
      "Yes. Alpha can undertake complete property renovation projects as well as individual room renovations and smaller property improvements.",
  },
  {
    question: "Is any job too small?",
    answer:
      "No. Alpha takes on work ranging from small repairs and maintenance jobs to much larger renovation projects.",
  },
  {
    question: "Can you complete several different types of work at the same property?",
    answer:
      "Yes. Our multi-service approach is designed to make this easier. Tell us everything the property requires and we can assess the overall scope of work.",
  },
  {
    question: "Do you undertake gas work?",
    answer:
      "Alpha does not currently undertake work that legally requires Gas Safe registration. This does not affect our wider plumbing, property maintenance and renovation services.",
  },
  {
    question: "Do you work with landlords and letting agents?",
    answer:
      "Yes. We work with homeowners, landlords, letting agents and property managers and can assist with individual repairs, recurring maintenance, void properties and renovations.",
  },
  {
    question: "Do you provide emergency call-outs?",
    answer:
      "Yes. Alpha provides 24/7 emergency property and plumbing call-out support. For an urgent problem, call 01775 518068.",
  },
];

function Arrow() {
  return <span>→</span>;
}

function ServiceList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className={styles.detailList}>
      {items.map((item) => (
        <li key={item}>
          <span>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroBackground} />

          <div className={styles.heroContainer}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <span>Our Services</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.heroLabel}>
                  <span>PROPERTY &amp; RENOVATION SERVICES</span>
                  <i />
                </div>

                <h1>
                  Property Maintenance,
                  <br />
                  Repairs &amp; Renovation
                  <br />
                  Services
                </h1>

                <h2>
                  One Team. Complete
                  <br />
                  Property Care.
                </h2>

                <p>
                  From small property repairs and everyday maintenance to
                  complete renovations, Alpha Property &amp; Gardening
                  Services provides comprehensive property and garden services
                  for homeowners, landlords and letting agents.
                </p>

                <p>
                  Whether you need one job completed or an entire property
                  transformed, our team can take care of the work from start
                  to finish.
                </p>

                <strong className={styles.heroNoJob}>
                  No job is too big or too small.
                </strong>

                <div className={styles.heroActions}>
                  <Link
                    href="/request-a-quote"
                    className={styles.goldButton}
                  >
                    Request a Quote
                    <Arrow />
                  </Link>

                  <a
                    href={PHONE_TEL}
                    className={styles.darkButton}
                  >
                    <span>⌕</span>
                    Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className={styles.heroEmergency}>
                  24/7 emergency property and plumbing call-outs available.
                </p>
              </div>

              <div className={styles.heroVehicle}>
                <div className={styles.heroVehicleImage} />
              </div>

              <div className={styles.heroBenefits}>
                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>⌂</span>
                  <div>
                    <strong>Property Maintenance</strong>
                    <small>Repairs &amp; ongoing care</small>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>⚒</span>
                  <div>
                    <strong>Property Renovations</strong>
                    <small>From rooms to full properties</small>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>✓</span>
                  <div>
                    <strong>One Trusted Team</strong>
                    <small>Multiple property services</small>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>◷</span>
                  <div>
                    <strong>24/7 Emergency</strong>
                    <small>Property &amp; plumbing call-outs</small>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>♧</span>
                  <div>
                    <strong>Homeowners &amp; Landlords</strong>
                    <small>Letting agents &amp; property managers</small>
                  </div>
                </div>

                <div className={styles.heroBenefit}>
                  <span className={styles.greenIcon}>⌖</span>
                  <div>
                    <strong>Regional Service</strong>
                    <small>Across our service area</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className={styles.introSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.introGrid}>
              <div>
                <div className={styles.sectionLabel}>
                  <span>ONE TEAM FOR YOUR PROPERTY</span>
                  <i />
                </div>

                <h2>One Team for Your Property</h2>
              </div>

              <div className={styles.introCopy}>
                <p>
                  Maintaining or renovating a property shouldn&apos;t mean
                  having to organise a different company for every job.
                </p>

                <p>
                  Alpha provides a broad range of property maintenance,
                  repair, renovation and improvement services through one
                  team. We can help with everything from minor repairs and
                  ongoing maintenance to plumbing, bathrooms, kitchens,
                  decorating, flooring and complete property renovations.
                </p>

                <p>
                  Our services are available to homeowners as well as
                  landlords, letting agents and property managers requiring
                  reliable support for individual properties or larger
                  portfolios.
                </p>

                <p>
                  Garden maintenance and clearances are also available,
                  allowing customers to look after both the property and its
                  outside spaces through one company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE HUB
        ===================================================== */}

        <section className={styles.servicesSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.servicesHeading}>
              <div>
                <div className={styles.sectionLabel}>
                  <span>PROPERTY SERVICES</span>
                  <i />
                </div>

                <h2>
                  Property Maintenance, Repairs &amp; Renovation
                </h2>

                <p>
                  From individual repairs and ongoing maintenance through to
                  complete property renovations, Alpha provides a broad range
                  of services through one team.
                </p>
              </div>

              <div className={styles.headingQuote}>
                <span>“</span>
                <p>
                  No Job Too Big
                  <br />
                  or Too Small.
                </p>
                <i />
              </div>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <Link
                  href={service.href}
                  className={styles.serviceCard}
                  key={service.title}
                >
                  <div className={styles.serviceImage}>
                    <div
                      className={styles.serviceImageBackground}
                      style={{
                        backgroundImage: `url("${service.image}")`,
                      }}
                    />

                    <div className={styles.serviceIcon}>
                      {service.icon}
                    </div>

                    <div className={styles.serviceRoundArrow}>
                      →
                    </div>
                  </div>

                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className={styles.serviceLink}>
                      {service.linkText}
                      <b>→</b>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROPERTY MAINTENANCE & REPAIRS
        ===================================================== */}

        <section className={styles.detailSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.detailGrid}>
              <div className={styles.detailContent}>
                <div className={styles.sectionLabel}>
                  <span>PROPERTY MAINTENANCE</span>
                  <i />
                </div>

                <h2>Property Maintenance &amp; Repairs</h2>

                <p>
                  From small repairs to ongoing property maintenance, Alpha
                  can help keep homes and rental properties maintained,
                  functional and looking their best.
                </p>

                <p>
                  We undertake a wide variety of maintenance and repair work
                  and can combine several jobs during the same project or
                  property visit.
                </p>

                <ServiceList items={propertyMaintenanceItems} />

                <Link
                  href="/property-maintenance"
                  className={styles.goldButton}
                >
                  View Property Maintenance Services <Arrow />
                </Link>
              </div>

              <div className={styles.detailImage}>
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                  alt="Property maintenance and repair services"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROPERTY RENOVATIONS
        ===================================================== */}

        <section className={styles.renovationSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.renovationGrid}>
              <div className={styles.renovationImage}>
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                  alt="Property renovation services"
                />
              </div>

              <div className={styles.renovationContent}>
                <div className={styles.sectionLabel}>
                  <span>PROPERTY RENOVATIONS</span>
                  <i />
                </div>

                <h2>Complete Property Renovations</h2>

                <p>
                  Planning something bigger? Alpha also undertakes complete
                  property renovation projects.
                </p>

                <p>
                  From renovating individual rooms to transforming an entire
                  property, our team can handle the different stages of the
                  project through one point of contact.
                </p>

                <p>
                  Property renovation work can include preparation and
                  strip-out, repairs, plumbing, plastering, carpentry,
                  bathrooms, kitchens, tiling, flooring, decorating and
                  finishing work.
                </p>

                <p>
                  Whether you&apos;re renovating your own home, improving a
                  newly purchased property or preparing a rental property for
                  the market, we&apos;ll assess the work required and provide
                  a clear quotation.
                </p>

                <strong className={styles.noJobStatement}>
                  No job is too big or too small — from an individual repair
                  to a complete property renovation.
                </strong>

                <Link
                  href="/property-renovations"
                  className={styles.goldButton}
                >
                  View Property Renovation Services <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PLUMBING
        ===================================================== */}

        <section className={styles.detailSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.detailGrid}>
              <div className={styles.detailContent}>
                <div className={styles.sectionLabel}>
                  <span>PLUMBING</span>
                  <i />
                </div>

                <h2>Plumbing Services</h2>

                <p>
                  Alpha provides plumbing repairs, maintenance and
                  installation work for homes, rental properties and
                  renovation projects.
                </p>

                <p>
                  From everyday plumbing problems to new installations as part
                  of a bathroom, kitchen or wider property renovation,
                  plumbing can be incorporated into the overall project.
                </p>

                <ServiceList items={plumbingItems} />

                <div className={styles.emergencyMini}>
                  <strong>24/7 Emergency Call-Outs</strong>

                  <p>
                    For urgent plumbing and property problems, Alpha provides
                    24/7 emergency call-out support across our service area.
                  </p>

                  <a href={PHONE_TEL}>
                    Emergency? Call {PHONE_DISPLAY}
                  </a>
                </div>

                <div className={styles.gasNotice}>
                  <strong>Important:</strong> Please note: Alpha does not
                  currently undertake work that legally requires Gas Safe
                  registration.
                </div>

                <Link
                  href="/plumbing-services"
                  className={styles.goldButton}
                >
                  View Plumbing Services <Arrow />
                </Link>
              </div>

              <div className={styles.detailImage}>
                <img
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=85"
                  alt="Plumbing services and repairs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BATHROOMS
        ===================================================== */}

        <section className={styles.lightDetailSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.singleDetail}>
              <div className={styles.sectionLabel}>
                <span>BATHROOMS</span>
                <i />
              </div>

              <h2>Bathroom Renovations &amp; Installations</h2>

              <p>
                From replacing individual bathroom fittings to complete
                bathroom renovations, Alpha can transform bathrooms from
                start to finish.
              </p>

              <p>
                Our bathroom services can cover removal of the existing
                bathroom, preparation, plumbing, fitting, tiling, flooring,
                finishing and associated property work.
              </p>

              <ServiceList items={bathroomItems} />

              <Link
                href="/bathroom-services"
                className={styles.goldButton}
              >
                View Bathroom Services <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            KITCHENS
        ===================================================== */}

        <section className={styles.detailSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.singleDetail}>
              <div className={styles.sectionLabel}>
                <span>KITCHENS</span>
                <i />
              </div>

              <h2>Kitchen Renovations &amp; Installations</h2>

              <p>
                Alpha provides kitchen fitting, renovation and improvement
                services ranging from individual upgrades to complete kitchen
                transformations.
              </p>

              <p>
                We can handle removal and preparation, plumbing, kitchen
                fitting, worktops, tiling, flooring, decorating and finishing
                work as part of the project.
              </p>

              <ServiceList items={kitchenItems} />

              <Link
                href="/kitchen-services"
                className={styles.goldButton}
              >
                View Kitchen Services <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            TILING & FLOORING
        ===================================================== */}

        <section className={styles.lightDetailSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.singleDetail}>
              <div className={styles.sectionLabel}>
                <span>TILING &amp; FLOORING</span>
                <i />
              </div>

              <h2>Tiling &amp; Flooring</h2>

              <p>
                Professional tiling and flooring can form part of a wider
                renovation or be completed as an individual project.
              </p>

              <p>
                Alpha provides tiling and flooring services for bathrooms,
                kitchens and other areas of the property, helping achieve a
                practical and professionally finished result.
              </p>

              <Link
                href="/tiling-flooring"
                className={styles.goldButton}
              >
                View Tiling &amp; Flooring Services <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            PAINTING & DECORATING
        ===================================================== */}

        <section className={styles.detailSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.detailGrid}>
              <div className={styles.detailContent}>
                <div className={styles.sectionLabel}>
                  <span>PAINTING &amp; DECORATING</span>
                  <i />
                </div>

                <h2>Painting &amp; Decorating</h2>

                <p>
                  From refreshing a single room to decorating throughout a
                  renovated property, Alpha provides painting, decorating and
                  preparation work for homes and rental properties.
                </p>

                <p>
                  Decorating can be completed as a standalone service or as
                  the finishing stage of a wider property renovation.
                </p>

                <ServiceList items={decoratingItems} />

                <Link
                  href="/painting-decorating"
                  className={styles.goldButton}
                >
                  View Painting &amp; Decorating Services <Arrow />
                </Link>
              </div>

              <div className={styles.detailImage}>
                <img
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85"
                  alt="Painting and decorating services"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ROOFING & GUTTERS
        ===================================================== */}

        <section className={styles.lightDetailSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.singleDetail}>
              <div className={styles.sectionLabel}>
                <span>ROOFING &amp; GUTTERS</span>
                <i />
              </div>

              <h2>Roofing &amp; Gutters</h2>

              <p>
                Alpha provides roofing, gutter and roofline maintenance and
                repair services to help protect properties from weather
                damage and water ingress.
              </p>

              <p>
                From routine gutter maintenance to repairs identified during
                wider property work, these services can be completed
                individually or alongside other maintenance and renovation
                work.
              </p>

              <Link
                href="/roofing-gutters"
                className={styles.goldButton}
              >
                View Roofing &amp; Gutter Services <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            GARDEN
        ===================================================== */}

        <section className={styles.gardenSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.detailGrid}>
              <div className={styles.detailImage}>
                <img
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85"
                  alt="Garden maintenance and clearance services"
                />
              </div>

              <div className={styles.detailContent}>
                <div className={styles.sectionLabel}>
                  <span>GARDEN SERVICES</span>
                  <i />
                </div>

                <h2>Garden Maintenance &amp; Clearances</h2>

                <p>
                  Alongside our property services, Alpha provides one-off and
                  recurring garden maintenance for homeowners, landlords and
                  managed properties.
                </p>

                <p>
                  From keeping gardens maintained throughout the year to
                  bringing heavily overgrown outside spaces back under
                  control, we can tailor the work to the property.
                </p>

                <ServiceList items={gardenItems} />

                <Link
                  href="/garden-services"
                  className={styles.goldButton}
                >
                  View Garden Services <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LANDLORDS
        ===================================================== */}

        <section className={styles.landlordSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.landlordGrid}>
              <div className={styles.landlordContent}>
                <div className={styles.sectionLabel}>
                  <span>LANDLORDS &amp; LETTING AGENTS</span>
                  <i />
                </div>

                <h2>
                  Property Services for Landlords &amp; Letting Agents
                </h2>

                <p>
                  Alpha provides landlords, letting agents and property
                  managers with access to multiple property services through
                  one point of contact.
                </p>

                <p>
                  From an individual tenant-reported repair to a complete
                  void-property renovation, we can help keep rental properties
                  maintained and ready for occupation.
                </p>

                <ServiceList items={landlordItems} />

                <p>
                  Whether you manage one rental property or a larger
                  portfolio, Alpha can provide a more straightforward way to
                  organise property maintenance.
                </p>

                <div className={styles.landlordButtons}>
                  <Link
                    href="/landlords-letting-agents"
                    className={styles.goldButton}
                  >
                    Landlord &amp; Letting Agent Services <Arrow />
                  </Link>

                  <Link
                    href="/account/homeowner-login"
                    className={styles.outlineButton}
                  >
                    Client Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SMALL JOB TO FULL RENOVATION
        ===================================================== */}

        <section className={styles.scaleSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.scaleIntro}>
              <div className={styles.sectionLabel}>
                <span>THE FULL RANGE OF PROPERTY WORK</span>
                <i />
              </div>

              <h2>No Job Too Big or Too Small</h2>

              <p>
                Not every customer needs a complete renovation—and not every
                property problem can be solved with a small repair.
              </p>

              <p>
                That&apos;s why Alpha works across the full range of property
                requirements.
              </p>

              <p>
                We can help with an individual repair, several maintenance
                jobs, a single-room renovation or a complete property
                transformation.
              </p>

              <p>
                Tell us what needs doing and we&apos;ll assess the work as a
                whole.
              </p>
            </div>

            <div className={styles.scaleSteps}>
              <div>
                <strong>01</strong>
                <span>Small Repair</span>
              </div>

              <b>↓</b>

              <div>
                <strong>02</strong>
                <span>Multiple Maintenance Jobs</span>
              </div>

              <b>↓</b>

              <div>
                <strong>03</strong>
                <span>Room Renovation</span>
              </div>

              <b>↓</b>

              <div>
                <strong>04</strong>
                <span>Kitchen / Bathroom Renovation</span>
              </div>

              <b>↓</b>

              <div>
                <strong>05</strong>
                <span>Complete Property Renovation</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MULTI SERVICE
        ===================================================== */}

        <section className={styles.multiServiceSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.multiServiceInner}>
              <div className={styles.sectionLabel}>
                <span>MULTI-SERVICE PROPERTY CARE</span>
                <i />
              </div>

              <h2>Need Several Different Jobs Completed?</h2>

              <p>
                One of Alpha&apos;s main advantages is that customers
                don&apos;t have to find a different company every time
                another job appears.
              </p>

              <p>
                A renovation might require plumbing, plastering, carpentry,
                flooring, tiling and decorating. A rental property might
                require internal repairs alongside an overgrown garden
                clearance.
              </p>

              <p>
                Tell us everything the property needs and we can assess the
                complete scope rather than treating every job separately.
              </p>

              <Link
                href="/request-a-quote"
                className={styles.goldButton}
              >
                Request a Multi-Service Quote <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            EMERGENCY
        ===================================================== */}

        <section className={styles.emergencySection}>
          <div className={styles.sectionContainer}>
            <div className={styles.emergencyInner}>
              <div>
                <div className={styles.sectionLabel}>
                  <span>24/7 EMERGENCY SUPPORT</span>
                  <i />
                </div>

                <h2>24/7 Emergency Property &amp; Plumbing Call-Outs</h2>

                <p>
                  If you&apos;re dealing with an urgent property or plumbing
                  problem, Alpha provides emergency call-out support 24 hours
                  a day across our service area.
                </p>

                <strong>Call {PHONE_DISPLAY}</strong>
              </div>

              <div className={styles.emergencyActions}>
                <a
                  href={PHONE_TEL}
                  className={styles.emergencyCall}
                >
                  Call Now
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

        {/* =====================================================
            COVERAGE
        ===================================================== */}

        <section className={styles.coverageSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.coverageInner}>
              <div className={styles.sectionLabel}>
                <span>AREAS WE COVER</span>
                <i />
              </div>

              <h2>Property &amp; Garden Services Across Our Region</h2>

              <p>
                Alpha Property &amp; Gardening Services works across a broad
                regional service area extending from Peterborough to Skegness
                and from Long Sutton to Lincoln, including surrounding towns,
                villages and rural communities.
              </p>

              <Link
                href="/areas-we-cover"
                className={styles.goldButton}
              >
                View Areas We Cover <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQS
        ===================================================== */}

        <section className={styles.faqSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.faqHeading}>
              <div className={styles.sectionLabel}>
                <span>FREQUENTLY ASKED QUESTIONS</span>
                <i />
              </div>

              <h2>Property Services FAQs</h2>
            </div>

            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <details
                  className={styles.faqItem}
                  key={faq.question}
                >
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

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className={styles.finalCtaSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.finalCtaInner}>
              <div className={styles.sectionLabel}>
                <span>START YOUR PROJECT</span>
                <i />
              </div>

              <h2>From a Small Repair to a Complete Renovation</h2>

              <p>
                Whatever your property needs, start with Alpha.
              </p>

              <p>
                Tell us what work is required and we&apos;ll help you take
                the next step with clear communication and a straightforward
                quotation.
              </p>

              <strong>One Team. Complete Property Care.</strong>

              <div className={styles.finalCtaButtons}>
                <Link
                  href="/request-a-quote"
                  className={styles.goldButton}
                >
                  Request a Quote <Arrow />
                </Link>

                <a
                  href={PHONE_TEL}
                  className={styles.darkButton}
                >
                  Call {PHONE_DISPLAY}
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