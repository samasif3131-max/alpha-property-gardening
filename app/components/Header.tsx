"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

const services = [
  {
    title: "Property Maintenance",
    href: "/property-maintenance",
    description:
      "Repairs, decorating, carpentry, tiling and general property maintenance.",
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
  {
    title: "Garden Maintenance",
    href: "/garden-services",
    description:
      "Lawn care, hedge cutting, fencing and garden maintenance.",
  },
];

const advicePages = [
  {
    title: "Property Care",
    href: "/advice/property-maintenance-advice",
    description:
      "Practical advice for maintaining and protecting your property.",
  },
  {
    title: "Plumbing",
    href: "/advice/plumbing-advice",
    description:
      "Helpful guidance for common plumbing problems and maintenance.",
  },
  {
    title: "Bathrooms",
    href: "/advice/bathroom-advice",
    description:
      "Useful advice for bathroom maintenance and improvements.",
  },
  {
    title: "Kitchens",
    href: "/advice/kitchens-advice",
    description:
      "Planning, maintaining and improving your kitchen.",
  },
  {
    title: "Garden Care",
    href: "/advice/garden-maintenance-advice",
    description:
      "Keep your garden healthy, tidy and well maintained.",
  },
  {
    title: "Seasonal Advice",
    href: "/advice/seasonal-advice",
    description:
      "Practical property and garden advice throughout the year.",
  },
  {
    title: "Landlord Advice",
    href: "/advice/landlord-advice",
    description:
      "Useful maintenance advice for landlords and letting agents.",
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

  const isLandlordPage = pathname.startsWith(
    "/landlords-letting-agents"
  );

  const isAreasPage = pathname.startsWith(
    "/areas-we-cover"
  );

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileAdviceOpen(false);
  };

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

  const handleMobileServicesToggle = () => {
    setMobileServicesOpen((current) => !current);
    setMobileAdviceOpen(false);
  };

  const handleMobileAdviceToggle = () => {
    setMobileAdviceOpen((current) => !current);
    setMobileServicesOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* =========================================
          TOP BAR
      ========================================= */}
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <span className={styles.topMessage}>
            Trusted Property &amp; Garden Services Across the
            Region
          </span>

          <div className={styles.topRight}>
            <span className={styles.followText}>
              Follow Us
            </span>

            <span>f</span>
            <span>◎</span>
            <span>in</span>

            <Link
              href="/request-a-quote"
              className={styles.topQuote}
            >
              Get a Quote
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN HEADER
      ========================================= */}
      <div className={styles.mainHeader}>
        <div className={styles.headerInner}>
          {/* REAL LOGO */}
          <Link
            href="/"
            className={styles.logo}
            onClick={closeMobileMenu}
          >
            <Image
              src="/images/logo/logo.png"
              alt="Alpha Property & Gardening Services"
              width={230}
              height={70}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* =====================================
              DESKTOP NAVIGATION
          ===================================== */}
          <nav
            className={styles.desktopNav}
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className={pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>

            {/* SERVICES */}
            <div className={styles.navDropdown}>
              <button
                type="button"
                className={
                  isServicesPage ? styles.active : ""
                }
                onClick={() =>
                  setDesktopServicesOpen(
                    (current) => !current
                  )
                }
                aria-expanded={desktopServicesOpen}
              >
                Services
                <span className={styles.dropdownArrow}>
                  ▾
                </span>
              </button>

              {desktopServicesOpen && (
                <div className={styles.dropdownMenu}>
                  {services.map((service) => (
                    <Link
                      href={service.href}
                      key={service.title}
                      onClick={() =>
                        setDesktopServicesOpen(false)
                      }
                    >
                      <strong>{service.title}</strong>
                      <span>{service.description}</span>
                    </Link>
                  ))}

                  <Link
                    href="/services"
                    className={styles.dropdownViewAll}
                    onClick={() =>
                      setDesktopServicesOpen(false)
                    }
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* LANDLORDS */}
            <Link
              href="/landlords-letting-agents"
              className={
                isLandlordPage ? styles.active : ""
              }
            >
              Landlords &amp; Agents
            </Link>

            {/* OUR WORK */}
            <Link href="/our-work">Our Work</Link>

            {/* AREAS */}
            <Link
              href="/areas-we-cover"
              className={
                isAreasPage ? styles.active : ""
              }
            >
              Areas We Cover
            </Link>

            {/* ADVICE */}
            <div className={styles.navDropdown}>
              <button
                type="button"
                className={
                  isAdvicePage ? styles.active : ""
                }
                onClick={() =>
                  setDesktopAdviceOpen(
                    (current) => !current
                  )
                }
                aria-expanded={desktopAdviceOpen}
              >
                Advice
                <span className={styles.dropdownArrow}>
                  ▾
                </span>
              </button>

              {desktopAdviceOpen && (
                <div
                  className={`${styles.dropdownMenu} ${styles.adviceDropdown}`}
                >
                  {advicePages.map((advice) => (
                    <Link
                      href={advice.href}
                      key={advice.title}
                      onClick={() =>
                        setDesktopAdviceOpen(false)
                      }
                    >
                      <strong>{advice.title}</strong>
                      <span>{advice.description}</span>
                    </Link>
                  ))}

                  <Link
                    href="/advice"
                    className={styles.dropdownViewAll}
                    onClick={() =>
                      setDesktopAdviceOpen(false)
                    }
                  >
                    View All Advice →
                  </Link>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <Link
              href="/about-us"
              className={
                pathname.startsWith("/about-us")
                  ? styles.active
                  : ""
              }
            >
              About
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={
                pathname.startsWith("/contact")
                  ? styles.active
                  : ""
              }
            >
              Contact
            </Link>
          </nav>

          {/* =====================================
              HEADER ACTIONS
          ===================================== */}
          <div className={styles.headerActions}>
            <Link
              href="/account/homeowner-login"
              className={styles.clientLogin}
            >
              CLIENT LOGIN
            </Link>

            <Link
              href="/request-a-quote"
              className={styles.headerQuote}
            >
              GET A QUOTE
              <span>→</span>
            </Link>

            <button
              type="button"
              className={styles.mobileToggle}
              onClick={handleMobileToggle}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* =====================================
            MOBILE NAVIGATION
        ===================================== */}
        {mobileOpen && (
          <div className={styles.mobileMenu}>
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={
                pathname === "/"
                  ? styles.mobileActive
                  : ""
              }
            >
              Home
            </Link>

            {/* MOBILE SERVICES */}
            <div className={styles.mobileDropdown}>
              <button
                type="button"
                onClick={handleMobileServicesToggle}
                className={
                  isServicesPage
                    ? styles.mobileActive
                    : ""
                }
              >
                <span>Services</span>
                <span>
                  {mobileServicesOpen ? "−" : "+"}
                </span>
              </button>

              {mobileServicesOpen && (
                <div className={styles.mobileSubmenu}>
                  {services.map((service) => (
                    <Link
                      href={service.href}
                      key={service.title}
                      onClick={closeMobileMenu}
                    >
                      <strong>{service.title}</strong>
                      <span>{service.description}</span>
                    </Link>
                  ))}

                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/landlords-letting-agents"
              onClick={closeMobileMenu}
              className={
                isLandlordPage
                  ? styles.mobileActive
                  : ""
              }
            >
              Landlords &amp; Agents
            </Link>

            <Link
              href="/our-work"
              onClick={closeMobileMenu}
            >
              Our Work
            </Link>

            <Link
              href="/areas-we-cover"
              onClick={closeMobileMenu}
              className={
                isAreasPage
                  ? styles.mobileActive
                  : ""
              }
            >
              Areas We Cover
            </Link>

            {/* MOBILE ADVICE */}
            <div className={styles.mobileDropdown}>
              <button
                type="button"
                onClick={handleMobileAdviceToggle}
                className={
                  isAdvicePage
                    ? styles.mobileActive
                    : ""
                }
              >
                <span>Advice</span>
                <span>
                  {mobileAdviceOpen ? "−" : "+"}
                </span>
              </button>

              {mobileAdviceOpen && (
                <div className={styles.mobileSubmenu}>
                  {advicePages.map((advice) => (
                    <Link
                      href={advice.href}
                      key={advice.title}
                      onClick={closeMobileMenu}
                    >
                      <strong>{advice.title}</strong>
                      <span>{advice.description}</span>
                    </Link>
                  ))}

                  <Link
                    href="/advice"
                    onClick={closeMobileMenu}
                  >
                    View All Advice →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            <Link
              href="/account/homeowner-login"
              onClick={closeMobileMenu}
            >
              CLIENT LOGIN
            </Link>

            <Link
              href="/request-a-quote"
              className={styles.mobileQuote}
              onClick={closeMobileMenu}
            >
              GET A QUOTE
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}