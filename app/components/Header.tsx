"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${menuOpen ? "mobile-open" : ""}`}>
      <div className="header-container">

        {/* LOGO */}
        <a href="/" className="logo-link" onClick={closeMenu}>
          <Image
            src="/images/logo/logo.png"
            alt="Alpha Property And Gardening Services"
            width={175}
            height={60}
            priority
          />
        </a>

        {/* NAVIGATION */}
        <nav className="main-navigation" aria-label="Main navigation">
          <a href="/" className="active" onClick={closeMenu}>
            Home
          </a>

          <a href="/services" onClick={closeMenu}>
            Services
          </a>

          <a
            href="/landlords-letting-agents"
            onClick={closeMenu}
          >
            Landlords &amp; Letting Agents
          </a>

          <a href="/about" onClick={closeMenu}>
            About
          </a>

          <a href="/our-work" onClick={closeMenu}>
            Our Work
          </a>

          <a href="/areas-we-cover" onClick={closeMenu}>
            Areas
          </a>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="header-right">

          {/* CLIENT LOGIN */}
          <a
            href="/account"
            className="client-login-button"
            onClick={closeMenu}
          >
            <span className="client-login-icon">♙</span>
            <span>Client Login</span>
          </a>

          {/* GET A FREE QUOTE */}
          <a
            href="/request-a-quote"
            className="quote-button"
            onClick={closeMenu}
          >
            <span>Get a Free Quote</span>
            <span className="quote-arrow">→</span>
          </a>

          {/* MOBILE MENU */}
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>
    </header>
  );
}