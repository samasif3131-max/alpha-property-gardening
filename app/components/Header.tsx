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

const advicePages = [
  {
    title: "Homecare Advice",
    href: "/advice/homecare-advice",
    description:
      "Practical advice for looking after your home.",
  },
  {
    title: "Seasonal Advice",
    href: "/advice/seasonal-advice",
    description:
      "Prepare your home and garden throughout the year.",
  },
  {
    title: "Landlord Advice",
    href: "/advice/landlord-advice",
    description:
      "Useful property advice for landlords and agents.",
  },
  {
    title: "Fencing & Decking Advice",
    href: "/advice/fencing-decking-advice",
    description:
      "Planning, maintaining and improving outdoor spaces.",
  },
  {
    title: "Painting & Decorating Advice",
    href: "/advice/painting-decorating-advice",
    description:
      "Helpful tips for painting and decorating your property.",
  },
  {
    title: "Roofing & Gutter Advice",
    href: "/advice/roofing-gutter-advice",
    description:
      "Look after your roof, gutters and exterior of your home.",
  },
  {
    title: "Kitchens Advice",
    href: "/advice/kitchens-advice",
    description:
      "Planning, maintaining and improving your kitchen.",
  },
  {
    title: "Bathroom Advice",
    href: "/advice/bathroom-advice",
    description:
      "Useful bathroom maintenance and improvement tips.",
  },
  {
    title: "Plumbing Advice",
    href: "/advice/plumbing-advice",
    description:
      "Helpful guidance for common plumbing problems.",
  },
  {
    title: "Property Maintenance Advice",
    href: "/advice/property-maintenance-advice",
    description:
      "Practical maintenance advice for your property.",
  },
  {
    title: "Cut Your Lawn Advice",
    href: "/advice/cut-your-lawn-advice",
    description:
      "Simple lawn cutting and lawn care guidance.",
  },
  {
    title: "Garden Maintenance Advice",
    href: "/advice/garden-maintenance-advice",
    description:
      "Keep your garden healthy, tidy and looking its best.",
  },
  {
    title: "Helpful Advice for Your Home & Garden",
    href: "/advice/helpful-advice-home-garden",
    description:
      "Useful tips for your home, garden and property.",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);
  const [mobileAdviceOpen, setMobileAdviceOpen] =
    useState(false);

  const [desktopServicesOpen, setDesktopServicesOpen] =
    useState(false);
  const [desktopAdviceOpen, setDesktopAdviceOpen] =
    useState(false);

  const isServicesPage =
    pathname === "/services" ||
    services.some((service) =>
      pathname.startsWith(service.href)
    );

  const isAdvicePage =
    pathname === "/advice" ||
    advicePages.some((advice) =>
      pathname.startsWith(advice.href)
    );

  /* =====================================================
     CLOSE MOBILE MENU
  ====================================================== */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileAdviceOpen(false);
  };

  /* =====================================================
     MOBILE MENU TOGGLE
  ====================================================== */

  const handleMobileToggle = () => {
    setMobileOpen((current) => {
      const next = !current;

      if (!next) {
        setMobileServicesOpen(false);
        setMobileAdviceOpen(false);
      }

      return next;
    });
  };

  /* =====================================================
     MOBILE SERVICES TOGGLE
  ====================================================== */

  const handleMobileServicesToggle = () => {
    setMobileServicesOpen((current) => !current);

    if (!mobileServicesOpen) {
      setMobileAdviceOpen(false);
    }
  };

  /* =====================================================
     MOBILE ADVICE TOGGLE
  ====================================================== */

  const handleMobileAdviceToggle = () => {
    setMobileAdviceOpen((current) => !current);

    if (!mobileAdviceOpen) {
      setMobileServicesOpen(false);
    }
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
            <span className={styles.followText}>
              Follow Us
            </span>

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
          {/* =================================================
              REAL LOGO
          ================================================== */}

          <Link href="/" className={styles.logo}>
            <div className={styles.logoImageWrapper}>
              <img
                src="/images/logo/logo.png"
                alt="Alpha Property & Gardening Services"
                className={styles.logoImage}
              />
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
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

            {/* =================================================
                OUR SERVICES
            ================================================== */}

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

              {/* DESKTOP SERVICES DROPDOWN */}

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
                  className={
                    styles.serviceDropdownGrid
                  }
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
                        className={
                          styles.serviceNumber
                        }
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

            {/* =================================================
                ADVICE
            ================================================== */}

            <div
              className={`${styles.adviceNav} ${
                isAdvicePage
                  ? styles.adviceActive
                  : ""
              }`}
              onMouseEnter={() =>
                setDesktopAdviceOpen(true)
              }
              onMouseLeave={() =>
                setDesktopAdviceOpen(false)
              }
            >
              <Link
                href="/advice"
                className={styles.navLinkButton}
                onClick={() =>
                  setDesktopAdviceOpen(false)
                }
              >
                <span>Advice</span>

                <span
                  className={`${styles.desktopChevron} ${
                    desktopAdviceOpen
                      ? styles.desktopChevronOpen
                      : ""
                  }`}
                >
                  ⌄
                </span>
              </Link>

              {/* DESKTOP ADVICE DROPDOWN */}

              <div
                className={`${styles.adviceDropdown} ${
                  desktopAdviceOpen
                    ? styles.adviceDropdownVisible
                    : ""
                }`}
              >
                <div className={styles.adviceDropdownHeader}>
                  <div>
                    <span>PROPERTY &amp; GARDEN ADVICE</span>

                    <p>
                      Helpful advice and practical
                      guidance for your home and garden.
                    </p>
                  </div>

                  <Link
                    href="/advice"
                    className={styles.viewAllAdvice}
                    onClick={() =>
                      setDesktopAdviceOpen(false)
                    }
                  >
                    View All Advice →
                  </Link>
                </div>

                <div
                  className={
                    styles.adviceDropdownGrid
                  }
                >
                  {advicePages.map(
                    (advice, index) => (
                      <Link
                        key={advice.href}
                        href={advice.href}
                        className={
                          styles.adviceDropdownItem
                        }
                        onClick={() =>
                          setDesktopAdviceOpen(false)
                        }
                      >
                        <span
                          className={
                            styles.adviceNumber
                          }
                        >
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span
                          className={
                            styles.adviceDropdownContent
                          }
                        >
                          <strong>
                            {advice.title}
                          </strong>

                          <small>
                            {advice.description}
                          </small>
                        </span>

                        <span
                          className={
                            styles.adviceArrow
                          }
                        >
                          →
                        </span>
                      </Link>
                    )
                  )}
                </div>

                <div
                  className={
                    styles.adviceDropdownFooter
                  }
                >
                  <span>
                    Practical property advice from
                    Alpha Property &amp; Gardening
                    Services.
                  </span>

                  <Link
                    href="/advice"
                    onClick={() =>
                      setDesktopAdviceOpen(false)
                    }
                  >
                    Advice Home →
                  </Link>
                </div>
              </div>
            </div>

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

          <div
            id="mobile-services-dropdown"
            className={`${styles.mobileServices} ${
              mobileServicesOpen
                ? styles.mobileServicesOpen
                : ""
            }`}
          >
            <Link
              href="/services"
              className={`${styles.mobileServiceLink} ${styles.mobileAllServices}`}
              onClick={closeMobileMenu}
            >
              <span>All Services</span>
              <span>→</span>
            </Link>

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

        {/* =================================================
            MOBILE ADVICE
        ================================================== */}

        <div className={styles.mobileAdviceWrapper}>
          <button
            type="button"
            className={`${styles.mobileAdviceButton} ${
              mobileAdviceOpen
                ? styles.mobileAdviceButtonOpen
                : ""
            }`}
            aria-expanded={mobileAdviceOpen}
            aria-controls="mobile-advice-dropdown"
            onClick={handleMobileAdviceToggle}
          >
            <span>Advice</span>

            <span
              className={`${styles.mobileChevron} ${
                mobileAdviceOpen
                  ? styles.mobileChevronOpen
                  : ""
              }`}
            >
              ⌄
            </span>
          </button>

          <div
            id="mobile-advice-dropdown"
            className={`${styles.mobileAdvice} ${
              mobileAdviceOpen
                ? styles.mobileAdviceOpen
                : ""
            }`}
          >
            {/* ALL ADVICE */}

            <Link
              href="/advice"
              className={`${styles.mobileAdviceLink} ${styles.mobileAllAdvice}`}
              onClick={closeMobileMenu}
            >
              <span>All Advice</span>
              <span>→</span>
            </Link>

            {/* ADVICE PAGES */}

            {advicePages.map((advice) => (
              <Link
                key={advice.href}
                href={advice.href}
                className={styles.mobileAdviceLink}
                onClick={closeMobileMenu}
              >
                <span>{advice.title}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>

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