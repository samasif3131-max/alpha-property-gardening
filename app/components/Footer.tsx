import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const PHONE_DISPLAY = "01775 518068";
const PHONE_TEL = "tel:01775518068";

const footerServices = [
  {
    title: "Property Maintenance",
    href: "/property-maintenance",
  },
  {
    title: "Property Renovations",
    href: "/property-renovations",
  },
  {
    title: "Plumbing Services",
    href: "/plumbing-services",
  },
  {
    title: "Bathroom Services",
    href: "/bathroom-services",
  },
  {
    title: "Kitchen Services",
    href: "/kitchen-services",
  },
  {
    title: "Garden Services",
    href: "/garden-services",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            {/* =====================================
                BRAND
            ===================================== */}
            <div className={styles.brandColumn}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/logo/logo.png"
                  alt="Alpha Property & Gardening Services"
                  width={190}
                  height={60}
                  className={styles.logoImage}
                />
              </Link>

              <p className={styles.tagline}>
                One Team. Complete Property Care.
              </p>

              <p className={styles.description}>
                Complete property care for homeowners, landlords and letting
                agents. One trusted team for property maintenance, plumbing,
                bathrooms, kitchens and garden maintenance.
              </p>

              <div className={styles.contactDetails}>
                <a
                  href={PHONE_TEL}
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>☎</span>

                  <span>
                    <small>Call Alpha</small>
                    <strong>{PHONE_DISPLAY}</strong>
                  </span>
                </a>

                <a
                  href="mailto:info@alphapropertyandgardening.co.uk"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>✉</span>

                  <span>
                    <small>Email Us</small>
                    <strong>
                      info@alphapropertyandgardening.co.uk
                    </strong>
                  </span>
                </a>
              </div>
            </div>

            {/* =====================================
                SERVICES
            ===================================== */}
            <div className={styles.footerColumn}>
              <h3>Services</h3>

              <ul>
                {footerServices.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href}>
                      {service.title}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href="/services"
                    className={styles.viewAllLink}
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* =====================================
                COMPANY
            ===================================== */}
            <div className={styles.footerColumn}>
              <h3>Company</h3>

              <ul>
                <li>
                  <Link href="/landlords-letting-agents">
                    Landlords &amp; Agents
                  </Link>
                </li>

                <li>
                  <Link href="/our-work">
                    Our Work
                  </Link>
                </li>

                <li>
                  <Link href="/areas-we-cover">
                    Areas We Cover
                  </Link>
                </li>

                <li>
                  <Link href="/advice">
                    Advice
                  </Link>
                </li>

                <li>
                  <Link href="/about-us">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* =====================================
                EMERGENCY / CTA
            ===================================== */}
            <div className={styles.footerColumn}>
              <h3>24/7 Emergency</h3>

              <p className={styles.emergencyText}>
                Need urgent plumbing help? Call Alpha for 24/7 emergency
                call-outs.
              </p>

              <a
                href={PHONE_TEL}
                className={styles.emergencyPhone}
              >
                CALL {PHONE_DISPLAY}
              </a>

              <Link
                href="/plumbing-services"
                className={styles.emergencyLink}
              >
                View Emergency Plumbing Services →
              </Link>

              <Link
                href="/request-a-quote"
                className={styles.footerQuote}
              >
                GET A QUOTE →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SERVICE AREA BAR
      ========================================= */}
      <div className={styles.areaBar}>
        <div className={styles.footerContainer}>
          <div className={styles.areaBarInner}>
            <div>
              <strong>Service Area</strong>

              <span>
                Peterborough to Skegness; Long Sutton to Lincoln, plus
                surrounding areas within the coverage region.
              </span>
            </div>

            <Link href="/areas-we-cover">
              View Areas We Cover →
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          SOCIAL / BOTTOM
      ========================================= */}
      <div className={styles.footerBottom}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBottomInner}>
            <div>
              <p>
                Follow Alpha Property &amp; Gardening Services.
              </p>

              <div className={styles.socialLinks}>
                <a
                  href="#"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>

            <p className={styles.copyright}>
              © 2026 Alpha Property &amp; Gardening Services. All rights
              reserved.
            </p>

            <p className={styles.bottomBrand}>
              One Team. Complete Property Care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}