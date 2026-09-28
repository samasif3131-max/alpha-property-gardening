import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./my-alpha.module.css";

export const metadata: Metadata = {
  title:
    "My Alpha Client Login | Alpha Property & Gardening Services",
  description:
    "Securely sign in to My Alpha to manage your properties, jobs, quotes, appointments, invoices, documents and service requests.",
  robots: {
    index: false,
    follow: false,
  },
};

const plannedFeatures = [
  {
    title: "Your Properties",
    description:
      "View properties linked to your Alpha customer account.",
    icon: "⌂",
  },
  {
    title: "Jobs",
    description:
      "Follow current and previous Alpha work in one place.",
    icon: "□",
  },
  {
    title: "Quotes",
    description:
      "View and manage quotations associated with your work.",
    icon: "▤",
  },
  {
    title: "Appointments",
    description:
      "See upcoming Alpha visits and scheduled work.",
    icon: "◷",
  },
  {
    title: "Photos & Documents",
    description:
      "Access relevant job photographs and documents.",
    icon: "▣",
  },
  {
    title: "Invoices & Payments",
    description:
      "View invoices and payment information.",
    icon: "£",
  },
  {
    title: "Service Requests",
    description:
      "Raise new requests for practical property work.",
    icon: "◆",
  },
  {
    title: "Property Portfolio",
    description:
      "Landlords and agents will be able to manage multiple properties.",
    icon: "▥",
  },
];

export default function MyAlphaPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.heroInner}>
            <div className={styles.topBar}>
              <Link
                href="/"
                className={styles.backLink}
              >
                ← Back to Main Website
              </Link>

              <Link
                href="/contact"
                className={styles.helpLink}
              >
                Need Help?
              </Link>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.eyebrow}>
                  MY ALPHA
                </span>

                <h1>
                  Your Alpha
                  <br />
                  <span>Client Portal</span>
                </h1>

                <p className={styles.heroLead}>
                  One place for your property care.
                </p>

                <p className={styles.heroText}>
                  We&apos;re building a secure My Alpha client
                  area to make managing your Alpha properties,
                  quotes, jobs, appointments, invoices and
                  documents easier.
                </p>

                <div className={styles.slogan}>
                  One Team. Complete Property Care.
                </div>

                <div className={styles.heroActions}>
                  <Link
                    href="/request-a-quote"
                    className={styles.primaryButton}
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>

                  <Link
                    href="/contact"
                    className={styles.secondaryButton}
                  >
                    Contact Alpha
                  </Link>
                </div>
              </div>

              <div className={styles.comingSoonCard}>
                <div className={styles.lockIcon}>
                  ◇
                </div>

                <span className={styles.cardEyebrow}>
                  SECURE CLIENT AREA
                </span>

                <h2>My Alpha Is Coming Soon</h2>

                <p>
                  We&apos;re preparing a secure customer portal
                  for homeowners, landlords, letting agents and
                  property managers.
                </p>

                <div className={styles.statusBadge}>
                  <span />
                  Coming Soon
                </div>

                <div className={styles.cardDivider} />

                <div className={styles.cardSupport}>
                  <strong>
                    Already an Alpha customer?
                  </strong>

                  <span>
                    For help with an existing job or account,
                    contact the Alpha team directly.
                  </span>

                  <Link href="/contact">
                    Contact Alpha →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                WHAT MY ALPHA WILL PROVIDE
              </span>

              <h2>
                One secure place for your Alpha services.
              </h2>

              <p>
                My Alpha is being designed as a single
                customer-facing portal. Homeowners, landlords,
                letting agents and property managers will use the
                same secure login, with account permissions
                determining which properties and features they
                can access.
              </p>
            </div>

            <div className={styles.featureGrid}>
              {plannedFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className={styles.featureCard}
                >
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>

                  <div>
                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.accountSection}>
          <div className={styles.container}>
            <div className={styles.accountGrid}>
              <div>
                <span className={styles.sectionEyebrow}>
                  ACCOUNT ACCESS
                </span>

                <h2>
                  One My Alpha login for different customer
                  accounts.
                </h2>

                <p>
                  The public website will not require separate
                  homeowner, landlord or agent login pages.
                  My Alpha is intended to recognise the account
                  and route the customer to the appropriate
                  workspace after secure authentication.
                </p>
              </div>

              <div className={styles.accountCard}>
                <div className={styles.accountRow}>
                  <span className={styles.accountIcon}>
                    ⌂
                  </span>

                  <div>
                    <strong>Customers / Homeowners</strong>

                    <span>
                      Personal property and service access
                    </span>
                  </div>
                </div>

                <div className={styles.accountRow}>
                  <span className={styles.accountIcon}>
                    ♧
                  </span>

                  <div>
                    <strong>Landlords</strong>

                    <span>
                      Property and maintenance management
                    </span>
                  </div>
                </div>

                <div className={styles.accountRow}>
                  <span className={styles.accountIcon}>
                    ▥
                  </span>

                  <div>
                    <strong>Letting Agents &amp; Property Managers</strong>

                    <span>
                      Organisation and portfolio access
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.newCustomerSection}>
          <div className={styles.container}>
            <div className={styles.newCustomerCard}>
              <div>
                <span className={styles.sectionEyebrow}>
                  NOT AN ALPHA CUSTOMER YET?
                </span>

                <h2>
                  You do not need a My Alpha account to request
                  work.
                </h2>

                <p>
                  New customers can request a quote directly
                  through the public website. You can describe
                  the work, provide property details and add
                  photographs without creating a portal account
                  first.
                </p>
              </div>

              <Link
                href="/request-a-quote"
                className={styles.primaryButton}
              >
                Request a Quote
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.helpSection}>
          <div className={styles.container}>
            <div className={styles.helpGrid}>
              <div>
                <span className={styles.sectionEyebrow}>
                  NEED HELP NOW?
                </span>

                <h2>Contact the Alpha Team</h2>

                <p>
                  My Alpha is not required for an urgent
                  property problem, an existing job enquiry or
                  a new quote request.
                </p>

                <div className={styles.helpLinks}>
                  <a href="tel:01775518068">
                    <span>☎</span>
                    01775 518068
                  </a>

                  <a href="mailto:info@alphapropertyandgardening.co.uk">
                    <span>✉</span>
                    info@alphapropertyandgardening.co.uk
                  </a>
                </div>
              </div>

              <div className={styles.emergencyCard}>
                <span className={styles.emergencyEyebrow}>
                  URGENT PROPERTY HELP
                </span>

                <h3>
                  Need urgent property or plumbing support?
                </h3>

                <p>
                  My Alpha login is not required for an active
                  emergency.
                </p>

                <a
                  href="tel:01775518068"
                  className={styles.emergencyButton}
                >
                  24/7 Emergency Call
                  <strong>01775 518068</strong>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <div>
                <span className={styles.finalEyebrow}>
                  ONE TEAM. COMPLETE PROPERTY CARE.
                </span>

                <h2>
                  Need something doing before My Alpha launches?
                </h2>

                <p>
                  Tell Alpha what needs doing and use the normal
                  quote journey to send property details,
                  photographs and information about the work.
                </p>
              </div>

              <div className={styles.finalActions}>
                <Link
                  href="/request-a-quote"
                  className={styles.finalPrimary}
                >
                  Request a Quote
                  <span>→</span>
                </Link>

                <Link
                  href="/our-services"
                  className={styles.finalSecondary}
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.staffLink}>
          <Link href="/staff/login">
            Alpha Staff Login
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}