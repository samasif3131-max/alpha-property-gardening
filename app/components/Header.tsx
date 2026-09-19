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
  const [servicesOpen, setServicesOpen] = useState(false);

  /*
   * Main Services page + individual service pages
   * are treated as service pages.
   */
  const isServicesPage =
    pathname === "/services" ||
    services.some((service) => pathname.startsWith(service.href));

  /*
   * Close mobile menu
   */
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* =========================
          TOP BAR
      ========================== */}
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <span>Reliable. Professional. Local.</span>

          <span className={styles.coverage}>
            <span className={styles.coverageDot}>◉</span>
            Covering Spalding and surrounding areas
          </span>

          <div className={styles.topRight}>
            <span>Follow Us</span>
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

      {/* =========================
          MAIN NAVIGATION
      ========================== */}
      <div className={styles.navBar}>
        <div className={styles.navInner}>
          {/* LOGO */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <span>▲</span>
            </div>

            <div className={styles.logoText}>
              <strong>ALPHA</strong>
              <small>PROPERTY &amp; GARDENING SERVICES</small>
              <em>One Team. Complete Property Care.</em>
            </div>
          </Link>

          {/* =========================
              DESKTOP NAV
          ========================== */}
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

            {/* =========================
                OUR SERVICES
            ========================== */}
            <div
              className={`${styles.servicesNav} ${
                isServicesPage ? styles.serviceActive : ""
              }`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/*
                IMPORTANT:
                Clicking the main "Our Services" text now
                opens /services directly.
              */}
              <Link
                href="/services"
                className={styles.navLinkButton}
                onClick={() => setServicesOpen(false)}
              >
                Our Services

                <span
                  className={`${styles.chevron} ${
                    servicesOpen ? styles.chevronOpen : ""
                  }`}
                >
                  ⌄
                </span>
              </Link>

              {/* SERVICES DROPDOWN */}
              <div
                className={`${styles.dropdown} ${
                  servicesOpen ? styles.dropdownVisible : ""
                }`}
              >
                <div className={styles.dropdownHeader}>
                  <span>OUR SERVICES</span>

                  <p>
                    Complete property care from one trusted local team.
                  </p>
                </div>

                <div className={styles.serviceDropdownGrid}>
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={styles.serviceDropdownItem}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className={styles.serviceNumber}>
                        0{index + 1}
                      </span>

                      <span className={styles.serviceDropdownContent}>
                        <strong>{service.title}</strong>

                        <small>{service.description}</small>
                      </span>

                      <span className={styles.serviceArrow}>
                        →
                      </span>
                    </Link>
                  ))}
                </div>

                {/* VIEW ALL SERVICES */}
                <div className={styles.dropdownFooter}>
                  <span>View all services</span>

                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                  >
                    Our Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* LANDLORDS & AGENTS */}
            <Link
              href="/landlords-letting-agents"
              className={`${styles.navLink} ${
                pathname === "/landlords-letting-agents"
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
                pathname === "/our-work" ? styles.active : ""
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
                pathname === "/advice" ? styles.active : ""
              }`}
            >
              Advice
            </Link>

            {/* ABOUT */}
            <Link
              href="/about-us"
              className={`${styles.navLink} ${
                pathname === "/about-us" ? styles.active : ""
              }`}
            >
              About Us
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={`${styles.navLink} ${
                pathname === "/contact" ? styles.active : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* =========================
              DESKTOP ACTIONS
          ========================== */}
          <div className={styles.navActions}>
            <Link
              href="/account/homeowner-login"
              className={styles.loginButton}
            >
              <span className={styles.personIcon}>♙</span>
              Client Login
            </Link>

            <Link
              href="/request-a-quote"
              className={styles.quoteButton}
            >
              Request a Quote
              <span>→</span>
            </Link>
          </div>

          {/* =========================
              MOBILE TOGGLE
          ========================== */}
          <button
            type="button"
            aria-label={
              mobileOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={mobileOpen}
            className={styles.mobileToggle}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        {/* HOME */}
        <Link href="/" onClick={closeMobileMenu}>
          Home
        </Link>

        {/* =========================
            MOBILE OUR SERVICES
        ========================== */}
        <Link
          href="/services"
          className={styles.mobileServicesButton}
          onClick={closeMobileMenu}
        >
          <span>Our Services</span>
          <span>→</span>
        </Link>

        {/* INDIVIDUAL SERVICES */}
        <div className={styles.mobileServices}>
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              onClick={closeMobileMenu}
            >
              <span>{service.title}</span>
              <span>→</span>
            </Link>
          ))}
        </div>

        {/* LANDLORDS */}
        <Link
          href="/landlords-letting-agents"
          onClick={closeMobileMenu}
        >
          Landlords &amp; Agents
        </Link>

        {/* OUR WORK */}
        <Link href="/our-work" onClick={closeMobileMenu}>
          Our Work
        </Link>

        {/* AREAS */}
        <Link href="/areas-we-cover" onClick={closeMobileMenu}>
          Areas We Cover
        </Link>

        {/* ADVICE */}
        <Link href="/advice" onClick={closeMobileMenu}>
          Advice
        </Link>

        {/* ABOUT */}
        <Link href="/about-us" onClick={closeMobileMenu}>
          About Us
        </Link>

        {/* CONTACT */}
        <Link href="/contact" onClick={closeMobileMenu}>
          Contact
        </Link>

        {/* MOBILE ACTIONS */}
        <div className={styles.mobileActions}>
          <Link
            href="/account/homeowner-login"
            onClick={closeMobileMenu}
            className={styles.mobileLogin}
          >
            Client Login
          </Link>

          <Link
            href="/request-a-quote"
            onClick={closeMobileMenu}
            className={styles.mobileQuote}
          >
            Request a Quote →
          </Link>
        </div>
      </div>
    </header>
  );
}