export default function Footer() {
  return (
    <footer className="site-footer">

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand">
            <a href="/" className="footer-logo-link">
              <img
                src="/images/logo/logo.png"
                alt="Alpha Property And Gardening Services"
                className="footer-logo"
              />
            </a>

            <div className="footer-tagline">
              <span>One Team.</span>
              <span>Complete Property Care.</span>
            </div>

            <div className="footer-gold-line"></div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/landlords-letting-agents">
              Landlords &amp; Letting Agents
            </a>
            <a href="/about">About</a>
            <a href="/our-work">Our Work</a>
            <a href="/areas-we-cover">Areas</a>
            <a href="/contact">Contact</a>
          </div>

          {/* PORTAL ACCESS */}
          <div className="footer-column">
            <h3>Portal Access</h3>

            <a href="/account/homeowner-login">
              Homeowner Login
            </a>

            <a href="/account/landlord-login">
              Landlord Login
            </a>

            <a href="/account/agent-login">
              Agent Login
            </a>

            <a href="/account/create-account">
              Create an Account
            </a>

            <a href="/account/forgot-password">
              Forgotten Password?
            </a>
          </div>

          {/* GET IN TOUCH */}
          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <a href="tel:01234567890">
              <span className="footer-contact-icon">☎</span>
              <span>01234 567890</span>
            </a>

            <a href="mailto:info@alphapropertyandgarden.co.uk">
              <span className="footer-contact-icon">✉</span>
              <span>info@alphapropertyandgarden.co.uk</span>
            </a>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">⌖</span>
              <span>Your Area, UK</span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-column footer-newsletter">
            <h3>Newsletter</h3>

            <p>
              Get updates, tips and special offers.
            </p>

            <form
              className="newsletter-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
              />

              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © 2024 Alpha Property &amp; Gardening Services.
            All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <span></span>

            <a href="/terms-conditions">
              Terms &amp; Conditions
            </a>

            <span></span>

            <a href="/sitemap">
              Sitemap
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}