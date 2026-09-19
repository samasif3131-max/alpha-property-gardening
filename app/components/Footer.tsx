import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* =========================================
          MAIN FOOTER
      ========================================== */}
      <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>

            {/* =========================================
                BRAND COLUMN
            ========================================== */}
            <div className={styles.brandColumn}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoMark}>A</span>

                <span className={styles.logoText}>
                  <span className={styles.logoMain}>ALPHA</span>
                  <span className={styles.logoSub}>
                    PROPERTY CARE
                  </span>
                </span>
              </Link>

              <p className={styles.tagline}>
                Complete Property Care. One Trusted Team.
              </p>

              <p className={styles.brandDescription}>
                Complete property care for homes, landlords and letting
                agents. One trusted team for gardens, maintenance,
                plumbing, bathrooms and kitchens.
              </p>

              <div className={styles.socialLinks}>
                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>

            {/* =========================================
                SERVICES
            ========================================== */}
            <div className={styles.footerColumn}>
              <h3>Services</h3>

              <div className={styles.goldLine}></div>

              <Link href="/garden-services">
                Garden Services
              </Link>

              <Link href="/property-maintenance">
                Property Maintenance
              </Link>

              <Link href="/plumbing-services">
                Plumbing Services
              </Link>

              <Link href="/bathroom-services">
                Bathroom Installation
              </Link>

              <Link href="/kitchen-services">
                Kitchen Installation
              </Link>

              <Link
                href="/services"
                className={styles.footerGoldLink}
              >
                View All Services →
              </Link>
            </div>

            {/* =========================================
                COMPANY
            ========================================== */}
            <div className={styles.footerColumn}>
              <h3>Company</h3>

              <div className={styles.goldLine}></div>

              <Link href="/">
                Home
              </Link>

              <Link href="/about">
                About Us
              </Link>

              <Link href="/landlords-letting-agents">
                Landlords &amp; Letting Agents
              </Link>

              <Link href="/client-login">
                Client Login
              </Link>

              <Link href="/contact">
                Contact Us
              </Link>
            </div>

            {/* =========================================
                CONTACT
            ========================================== */}
            <div className={styles.contactColumn}>
              <h3>Get In Touch</h3>

              <div className={styles.goldLine}></div>

              <a
                href="tel:+440000000000"
                className={styles.contactItem}
              >
                <span className={styles.contactIcon}>
                  ☎
                </span>

                <span className={styles.contactText}>
                  <strong>Call Us</strong>
                  <small>+44 0000 000 000</small>
                </span>
              </a>

              <a
                href="mailto:info@alphapropertycare.co.uk"
                className={styles.contactItem}
              >
                <span className={styles.contactIcon}>
                  ✉
                </span>

                <span className={styles.contactText}>
                  <strong>Email Us</strong>
                  <small>
                    info@alphapropertycare.co.uk
                  </small>
                </span>
              </a>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  ⌖
                </span>

                <span className={styles.contactText}>
                  <strong>Service Area</strong>
                  <small>
                    Local &amp; surrounding areas
                  </small>
                </span>
              </div>

              <Link
                href="/contact"
                className={styles.quoteButton}
              >
                <span>Request a Quote</span>
                <span className={styles.arrow}>→</span>
              </Link>
            </div>

            {/* =========================================
                SOCIAL / TRUST COLUMN
            ========================================== */}
            <div className={styles.socialColumn}>
              <h3>Connect With Us</h3>

              <div className={styles.goldLine}></div>

              <p className={styles.socialDescription}>
                Follow Alpha Property Care for updates,
                property tips and recent projects.
              </p>

              <div className={styles.socialLinks}>
                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>

              <div className={styles.trustBadge}>
                <span className={styles.trustIcon}>✓</span>

                <span>
                  <strong>Trusted Property Care</strong>
                  <small>
                    Professional &amp; reliable service
                  </small>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM BAR
      ========================================== */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <p>
            © {new Date().getFullYear()} Alpha Property Care.
            All rights reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <span>•</span>

            <Link href="/terms">
              Terms &amp; Conditions
            </Link>
          </div>

          <span className={styles.bottomBrand}>
            Professional Property Care
          </span>
        </div>
      </div>
    </footer>
  );
}