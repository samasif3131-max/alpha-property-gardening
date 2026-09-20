"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

const services = [
  {
    title: "Garden Services",
    href: "/garden-services",
    description:
      "Lawn care, hedge cutting, fencing and garden maintenance.",
  },
  {
    title: "Property Maintenance",
    href: "/property-maintenance",
    description:
      "Repairs, decorating, carpentry, tiling and general maintenance.",
  },
  {
    title: "Plumbing Services",
    href: "/plumbing-services",
    description:
      "Leaks, taps, radiators, pipework and hot water systems.",
  },
  {
    title: "Bathroom Services",
    href: "/bathroom-services",
    description:
      "Complete bathroom fitting, tiling, plumbing and finishing.",
  },
  {
    title: "Kitchen Services",
    href: "/kitchen-services",
    description:
      "Kitchen fitting, worktops, plumbing, tiling and flooring.",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const isServicesPage =
    pathname === "/services" ||
    services.some((service) => pathname.startsWith(service.href));

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  /* =========================================
     MOBILE MENU TOGGLE
  ========================================= */

  const handleMobileToggle = () => {
    setMobileOpen((current) => {
      const next = !current;

      if (!next) {
        setMobileServicesOpen(false);
      }

      return next;
    });
  };

  /* =========================================
     MOBILE SERVICES TOGGLE
  ========================================= */

  const handleMobileServicesToggle = () => {
    setMobileServicesOpen((current) => !current);
  };

  return (
    <header className={styles.header}>
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <span className={styles.topMessage}>
            Reliable. Professional. Local.
          </span>

          <span className={styles.coverage}>
            <span className={styles.coverageDot}>●</span>
            Covering Spalding and surrounding areas
          </span>

          <div className={styles.topRight}>
            <span className={styles.followText}>Follow Us</span>
            <span>f</span>
            <span>◎</span>
            <span>♪</span>
            <span>▶</span>

            <Link
              href="/request-a-quote"
              className={styles.topQuote}
            >
              Request a Quote
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}

      <div className={styles.navBar}>
        <div className={styles.navInner}>
          {/* LOGO */}

          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <span>▲</span>
            </div>

            <div className={styles.logoText}>
              <strong>ALPHA</strong>

              <small>
                PROPERTY &amp; GARDENING SERVICES
              </small>

              <em>
                One Team. Complete Property Care.
              </em>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================== */}

          <nav className={styles.desktopNav}>
            {/* HOME */}

            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </Link>

            {/* OUR SERVICES */}

            <div
              className={`${styles.servicesNav} ${
                isServicesPage
                  ? styles.serviceActive
                  : ""
              }`}
              onMouseEnter={() =>
                setDesktopServicesOpen(true)
              }
              onMouseLeave={() =>
                setDesktopServicesOpen(false)
              }
            >
              <Link
                href="/services"
                className={styles.navLinkButton}
                onClick={() =>
                  setDesktopServicesOpen(false)
                }
              >
                <span>Our Services</span>

                <span
                  className={`${styles.desktopChevron} ${
                    desktopServicesOpen
                      ? styles.desktopChevronOpen
                      : ""
                  }`}
                >
                  ⌄
                </span>
              </Link>

              {/* DESKTOP DROPDOWN */}

              <div
                className={`${styles.dropdown} ${
                  desktopServicesOpen
                    ? styles.dropdownVisible
                    : ""
                }`}
              >
                <div className={styles.dropdownHeader}>
                  <span>OUR SERVICES</span>

                  <p>
                    Complete property care from one
                    trusted local team.
                  </p>
                </div>

                <div
                  className={styles.serviceDropdownGrid}
                >
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={
                        styles.serviceDropdownItem
                      }
                      onClick={() =>
                        setDesktopServicesOpen(false)
                      }
                    >
                      <span
                        className={styles.serviceNumber}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={
                          styles.serviceDropdownContent
                        }
                      >
                        <strong>
                          {service.title}
                        </strong>

                        <small>
                          {service.description}
                        </small>
                      </span>

                      <span
                        className={styles.serviceArrow}
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>

                <div
                  className={styles.dropdownFooter}
                >
                  <span>
                    View all services
                  </span>

                  <Link
                    href="/services"
                    onClick={() =>
                      setDesktopServicesOpen(false)
                    }
                  >
                    Our Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* LANDLORDS */}

            <Link
              href="/landlords-letting-agents"
              className={`${styles.navLink} ${
                pathname ===
                "/landlords-letting-agents"
                  ? styles.active
                  : ""
              }`}
            >
              Landlords &amp; Agents
            </Link>

            {/* OUR WORK */}

            <Link
              href="/our-work"
              className={`${styles.navLink} ${
                pathname === "/our-work"
                  ? styles.active
                  : ""
              }`}
            >
              Our Work
            </Link>

            {/* AREAS */}

            <Link
              href="/areas-we-cover"
              className={`${styles.navLink} ${
                pathname === "/areas-we-cover"
                  ? styles.active
                  : ""
              }`}
            >
              Areas We Cover
            </Link>

            {/* ADVICE */}

            <Link
              href="/advice"
              className={`${styles.navLink} ${
                pathname === "/advice"
                  ? styles.active
                  : ""
              }`}
            >
              Advice
            </Link>

            {/* ABOUT */}

            <Link
              href="/about-us"
              className={`${styles.navLink} ${
                pathname === "/about-us"
                  ? styles.active
                  : ""
              }`}
            >
              About Us
            </Link>

            {/* CONTACT */}

            <Link
              href="/contact"
              className={`${styles.navLink} ${
                pathname === "/contact"
                  ? styles.active
                  : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className={styles.navActions}>
            <Link
              href="/account/homeowner-login"
              className={styles.loginButton}
            >
              <span className={styles.personIcon}>
                ♙
              </span>

              <span>Client Login</span>
            </Link>

            <Link
              href="/request-a-quote"
              className={styles.quoteButton}
            >
              <span>Request a Quote</span>
              <span>→</span>
            </Link>
          </div>

          {/* =================================================
              MOBILE HAMBURGER
          ================================================== */}

          <button
            type="button"
            className={`${styles.mobileToggle} ${
              mobileOpen
                ? styles.mobileToggleOpen
                : ""
            }`}
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={handleMobileToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`${styles.mobileMenu} ${
          mobileOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
      >
        {/* HOME */}

        <Link
          href="/"
          className={styles.mobileNavLink}
          onClick={closeMobileMenu}
        >
          <span>Home</span>
        </Link>

        {/* =================================================
            MOBILE SERVICES
        ================================================== */}

        <div className={styles.mobileServicesWrapper}>
          <button
            type="button"
            className={`${styles.mobileServicesButton} ${
              mobileServicesOpen
                ? styles.mobileServicesButtonOpen
                : ""
            }`}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services-dropdown"
            onClick={handleMobileServicesToggle}
          >
            <span>Our Services</span>

            <span
              className={`${styles.mobileChevron} ${
                mobileServicesOpen
                  ? styles.mobileChevronOpen
                  : ""
              }`}
            >
              ⌄
            </span>
          </button>

          {/* MOBILE SERVICES DROPDOWN */}

          <div
            id="mobile-services-dropdown"
            className={`${styles.mobileServices} ${
              mobileServicesOpen
                ? styles.mobileServicesOpen
                : ""
            }`}
          >
            {/* ALL SERVICES */}

            <Link
              href="/services"
              className={`${styles.mobileServiceLink} ${styles.mobileAllServices}`}
              onClick={closeMobileMenu}
            >
              <span>All Services</span>
              <span>→</span>
            </Link>

            {/* INDIVIDUAL SERVICES */}

            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={styles.mobileServiceLink}
                onClick={closeMobileMenu}
              >
                <span>{service.title}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* LANDLORDS */}

        <Link
          href="/landlords-letting-agents"
          className={styles.mobileNavLink}
          onClick={closeMobileMenu}
        >
          <span>Landlords &amp; Agents</span>
        </Link>

        {/* OUR WORK */}

        <Link
          href="/our-work"
          className={styles.mobileNavLink}
          onClick={closeMobileMenu}
        >
          <span>Our Work</span>
        </Link>

        {/* AREAS */}

        <Link
          href="/areas-we-cover"
          className={styles.mobileNavLink}
          onClick={closeMobileMenu}
        >
          <span>Areas We Cover</span>
        </Link>

        {/* ADVICE */}

        <Link
          href="/advice"
          className={styles.mobileNavLink}
          onClick={closeMobileMenu}
        >
          <span>Advice</span>
        </Link>

        {/* ABOUT */}

        <Link
          href="/about-us"
          className={styles.mobileNavLink}
          onClick={closeMobileMenu}
        >
          <span>About Us</span>
        </Link>

        {/* CONTACT */}

        <Link
          href="/contact"
          className={styles.mobileNavLink}
          onClick={closeMobileMenu}
        >
          <span>Contact</span>
        </Link>

        {/* =================================================
            MOBILE ACTION BUTTONS
        ================================================== */}

        <div className={styles.mobileActions}>
          <Link
            href="/account/homeowner-login"
            className={styles.mobileLogin}
            onClick={closeMobileMenu}
          >
            Client Login
          </Link>

          <Link
            href="/request-a-quote"
            className={styles.mobileQuote}
            onClick={closeMobileMenu}
          >
            Request a Quote →
          </Link>
        </div>
      </div>
    </header>
  );
}