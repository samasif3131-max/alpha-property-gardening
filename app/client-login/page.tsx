"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

const portals = [
  {
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
    icon: "⌂",
    title: "Homeowner Portal",
    description:
      "Manage your property, book services, view quotes, track jobs and access invoices.",
    button: "Login to Homeowner Portal",
    create: "New customer? Create an account",
    href: "/account/homeowner-login",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    icon: "♧",
    title: "Landlord Portal",
    description:
      "Manage multiple properties, raise maintenance requests, approve quotes and track all work in one place.",
    button: "Login to Landlord Portal",
    create: "New landlord? Create an account",
    href: "/account/landlord-login",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    icon: "▥",
    title: "Letting Agent Portal",
    description:
      "Manage your portfolio, submit jobs, track progress and keep your properties maintained.",
    button: "Login to Agent Portal",
    create: "New agent? Create an account",
    href: "/account/agent-login",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* =========================================
          MY ALPHA HERO
      ========================================== */}
      <section className="portal-hero">
        <div className="portal-hero-overlay">
          <div className="portal-hero-container">
            <div className="portal-hero-content">
              <p className="portal-eyebrow">MY ALPHA PORTAL</p>

              <h1>
                Welcome to
                <br />
                <span>My Alpha</span>
              </h1>

              <p className="portal-hero-description">
                Access your properties, jobs, quotes, appointments
                <br />
                and invoices all in one place.
              </p>

              <div className="portal-hero-features">
                <div className="portal-hero-feature">
                  <div className="portal-feature-icon">♧</div>
                  <span>Easy to use</span>
                </div>

                <div className="portal-hero-feature">
                  <div className="portal-feature-icon">♢</div>
                  <span>Secure & Private</span>
                </div>

                <div className="portal-hero-feature">
                  <div className="portal-feature-icon">◷</div>
                  <span>Access Anytime</span>
                </div>

                <div className="portal-hero-feature">
                  <div className="portal-feature-icon">♧</div>
                  <span>
                    For Homeowners,
                    <br />
                    Landlords & Agents
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CHOOSE YOUR PORTAL
      ========================================== */}
      <section className="choose-portal-section">
        <div className="choose-portal-container">
          <div className="choose-portal-heading">
            <p className="section-small-label">MY ALPHA</p>

            <h2>Choose Your Portal</h2>

            <p>
              Login to the portal that suits your account type.
            </p>
          </div>

          <div className="portal-cards">
            {portals.map((portal) => (
              <div className="portal-card" key={portal.title}>
                <div className="portal-card-image">
                  <img
                    src={portal.image}
                    alt={portal.title}
                  />
                </div>

                <div className="portal-card-icon">
                  {portal.icon}
                </div>

                <div className="portal-card-content">
                  <h3>{portal.title}</h3>

                  <p>{portal.description}</p>

                  <a
                    href={portal.href}
                    className="portal-login-button"
                  >
                    {portal.button}
                    <span>→</span>
                  </a>

                  <a
                    href="/account/create-account"
                    className="portal-create-account"
                  >
                    {portal.create}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          PORTAL BENEFITS
      ========================================== */}
      <section className="portal-benefits">
        <div className="portal-benefits-container">
          <div className="portal-benefit">
            <div className="portal-benefit-icon">♢</div>

            <div>
              <strong>Secure Login</strong>
              <span>Your data is protected</span>
            </div>
          </div>

          <div className="portal-benefit">
            <div className="portal-benefit-icon">□</div>

            <div>
              <strong>Track Progress</strong>
              <span>Live job updates</span>
            </div>
          </div>

          <div className="portal-benefit">
            <div className="portal-benefit-icon">▤</div>

            <div>
              <strong>All In One Place</strong>
              <span>Quotes, invoices, photos and more</span>
            </div>
          </div>

          <div className="portal-benefit">
            <div className="portal-benefit-icon">☎</div>

            <div>
              <strong>Need Help?</strong>
              <span>Call 01234 567890</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          HOMEOWNER LOGIN HERO
      ========================================== */}
      <section className="homeowner-login-hero">
        <div className="homeowner-login-hero-overlay">
          <div className="homeowner-login-hero-container">
            <div className="homeowner-login-hero-content">
              <p className="homeowner-login-eyebrow">
                HOMEOWNER PORTAL
              </p>

              <h1>
                Your Property.
                <br />
                <span>Your Alpha.</span>
              </h1>

              <p>
                Everything you need to manage your property,
                <br />
                services and jobs in one secure place.
              </p>

              <div className="homeowner-hero-points">
                <div>
                  <span>✓</span>
                  <strong>Manage your property</strong>
                </div>

                <div>
                  <span>✓</span>
                  <strong>Track your jobs</strong>
                </div>

                <div>
                  <span>✓</span>
                  <strong>View quotes & invoices</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          HOMEOWNER LOGIN
      ========================================== */}
      <section className="homeowner-login-section">
        <div className="homeowner-login-container">

          {/* LEFT */}
          <div className="login-left-column">
            <div className="why-alpha-card">
              <div className="login-card-label">
                MY ALPHA
              </div>

              <h2>Why Use My Alpha?</h2>

              <div className="why-alpha-item">
                <span className="why-alpha-icon">⌂</span>
                <span>
                  View and manage your property details
                </span>
              </div>

              <div className="why-alpha-item">
                <span className="why-alpha-icon">⌂</span>
                <span>
                  Request and book services online
                </span>
              </div>

              <div className="why-alpha-item">
                <span className="why-alpha-icon">◷</span>
                <span>
                  Track job progress in real time
                </span>
              </div>

              <div className="why-alpha-item">
                <span className="why-alpha-icon">▤</span>
                <span>
                  View quotes, invoices and payment history
                </span>
              </div>

              <div className="why-alpha-item">
                <span className="why-alpha-icon">□</span>
                <span>
                  Access photos, documents and job history
                </span>
              </div>

              <div className="why-alpha-item">
                <span className="why-alpha-icon">◷</span>
                <span>
                  Set up recurring maintenance
                </span>
              </div>

              <div className="why-alpha-item">
                <span className="why-alpha-icon">♢</span>
                <span>
                  Secure and private access
                </span>
              </div>
            </div>

            <div className="login-help-card">
              <div className="login-help-icon">☎</div>

              <div>
                <h3>Need help getting started?</h3>

                <p>
                  Call us on 01234 567890
                  <br />
                  or visit our{" "}
                  <a href="/contact">
                    Contact page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* CENTER LOGIN */}
          <div className="login-form-card">
            <div className="alpha-login-brand">
              <span>Alpha</span>
            </div>

            <div className="alpha-login-brand-subtitle">
              PROPERTY & GARDENING SERVICES
            </div>

            <h2>Login to Your Account</h2>

            <p className="login-form-intro">
              Enter your details below to access your homeowner portal.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="homeowner-form"
            >
              <label htmlFor="email">
                Email Address
              </label>

              <div className="input-wrapper">
                <span>✉</span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">
                <span>♢</span>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="password-eye"
                  aria-label="Show password"
                >
                  ◉
                </button>
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <a href="/account/forgot-password">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="main-login-button"
              >
                Login to My Alpha
                <span>→</span>
              </button>
            </form>

            <div className="login-divider">
              <span></span>
              <strong>OR</strong>
              <span></span>
            </div>

            <a
              href="/account/create-account"
              className="create-account-button"
            >
              <span>♙</span>
              Create a New Account
            </a>

            <p className="new-alpha-text">
              New to Alpha?{" "}
              <a href="/account/create-account">
                Create an account
              </a>{" "}
              to get started.
            </p>
          </div>

          {/* RIGHT */}
          <div className="login-right-column">
            <div className="login-testimonial">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
                alt="Beautiful property interior"
              />

              <div className="testimonial-content">
                <div className="testimonial-mark">
                  “
                </div>

                <p>
                  Brilliant service from start to finish.
                  Easy to use portal and always kept updated.
                </p>

                <div className="testimonial-rating">
                  <span>★★★★★</span>

                  <strong>
                    Verified Customer
                  </strong>
                </div>
              </div>
            </div>

            <div className="need-help-card">
              <div className="need-help-heading">
                <span>♧</span>

                <div>
                  <h2>Need Help?</h2>
                  <p>Our team is here to help.</p>
                </div>
              </div>

              <div className="need-help-line">
                <span>☎</span>
                <strong>01234 567890</strong>
              </div>

              <div className="need-help-line">
                <span>✉</span>
                <span>
                  info@alphapropertyandgarden.co.uk
                </span>
              </div>

              <div className="need-help-line">
                <span>●</span>
                <span>
                  Use our{" "}
                  <a href="/contact">
                    Contact Form
                  </a>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}