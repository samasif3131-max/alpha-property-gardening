"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./HomeownerLogin.module.css";
import { supabase } from "@/app/lib/supabase";

export default function HomeownerLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) {
        setError("Incorrect email address or password.");
        return;
      }

      if (!data.user) {
        setError("Login could not be completed. Please try again.");
        return;
      }

      /*
       * Get the user's profile so we know their role.
       */
      const { data: profile, error: profileError } =
        await supabase
          .from("profiles")
          .select("id, full_name, email, role")
          .eq("id", data.user.id)
          .single();

      if (profileError) {
        console.error(profileError);

        await supabase.auth.signOut();

        setError(
          "Your account was found, but your profile could not be loaded. Please contact us."
        );

        return;
      }

      /*
       * For now this login page is specifically for homeowners/clients.
       */
      if (profile.role !== "client") {
        await supabase.auth.signOut();

        setError(
          "This login is for homeowner accounts. Please use the correct portal for your account."
        );

        return;
      }

      /*
       * Successful client login.
       *
       * We will build the actual dashboard next.
       */
      router.push("/account/my-alpha");
      router.refresh();
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.loginPage}>
      <Header />

      {/* LOGIN HERO */}
      <section className={styles.loginHero}>
        <div className={styles.loginHeroOverlay}>
          <div className={styles.loginHeroContainer}>
            <div className={styles.loginHeroContent}>
              <p className={styles.loginEyebrow}>HOMEOWNER PORTAL</p>

              <h1>
                Your Property.
                <br />
                <span>Your Alpha.</span>
              </h1>

              <p className={styles.loginHeroText}>
                Everything you need to manage your property,
                <br />
                services and jobs in one secure place.
              </p>

              <div className={styles.loginHeroPoints}>
                <div className={styles.loginHeroPoint}>
                  <span className={styles.loginHeroPointIcon}>✓</span>
                  <strong>Manage your property</strong>
                </div>

                <div className={styles.loginHeroPoint}>
                  <span className={styles.loginHeroPointIcon}>✓</span>
                  <strong>Track your jobs</strong>
                </div>

                <div className={styles.loginHeroPoint}>
                  <span className={styles.loginHeroPointIcon}>✓</span>
                  <strong>View quotes &amp; invoices</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGIN AREA */}
      <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
          {/* LEFT INFORMATION */}
          <div className={styles.loginInfoColumn}>
            <div className={styles.loginInfoCard}>
              <div className={styles.loginCardLabel}>MY ALPHA</div>

              <h2>Why Use My Alpha?</h2>

              <div className={styles.loginInfoItem}>
                <span className={styles.loginInfoIcon}>⌂</span>
                <p>View and manage your property details</p>
              </div>

              <div className={styles.loginInfoItem}>
                <span className={styles.loginInfoIcon}>⌂</span>
                <p>Request and book services online</p>
              </div>

              <div className={styles.loginInfoItem}>
                <span className={styles.loginInfoIcon}>◷</span>
                <p>Track job progress in real time</p>
              </div>

              <div className={styles.loginInfoItem}>
                <span className={styles.loginInfoIcon}>▤</span>
                <p>View quotes, invoices and payment history</p>
              </div>

              <div className={styles.loginInfoItem}>
                <span className={styles.loginInfoIcon}>□</span>
                <p>Access photos, documents and job history</p>
              </div>

              <div className={styles.loginInfoItem}>
                <span className={styles.loginInfoIcon}>◷</span>
                <p>Set up recurring maintenance</p>
              </div>

              <div className={styles.loginInfoItem}>
                <span className={styles.loginInfoIcon}>♢</span>
                <p>Secure and private access</p>
              </div>
            </div>

            {/* HELP CARD */}
            <div className={styles.loginHelpBox}>
              <div className={styles.loginHelpIcon}>☎</div>

              <div>
                <h3>Need help getting started?</h3>

                <p>
                  Call us on 01234 567890
                  <br />
                  or visit our{" "}
                  <a href="/contact">Contact page</a>.
                </p>
              </div>
            </div>
          </div>

          {/* LOGIN FORM */}
          <div className={styles.loginFormCard}>
            {/* ALPHA BRAND */}
            <div className={styles.loginAlphaBrand}>
              <span>Alpha</span>
            </div>

            <div className={styles.loginAlphaSubtitle}>
              PROPERTY &amp; GARDENING SERVICES
            </div>

            <h2>Login to Your Account</h2>

            <p className={styles.loginFormDescription}>
              Enter your details below to access your homeowner portal.
            </p>

            {/* ERROR */}
            {error && (
              <div
                style={{
                  marginBottom: "18px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "#fff1f1",
                  border: "1px solid #f0b8b8",
                  color: "#b42318",
                  fontSize: "13px",
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                {error}
              </div>
            )}

            {/* FORM */}
            <form
              className={styles.loginForm}
              onSubmit={handleLogin}
            >
              {/* EMAIL */}
              <div className={styles.loginFormField}>
                <label htmlFor="homeowner-email">
                  Email Address
                </label>

                <div className={styles.loginInputWrapper}>
                  <span className={styles.loginInputIcon}>✉</span>

                  <input
                    id="homeowner-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    disabled={loading}
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className={styles.loginFormField}>
                <label htmlFor="homeowner-password">
                  Password
                </label>

                <div className={styles.loginInputWrapper}>
                  <span className={styles.loginInputIcon}>♢</span>

                  <input
                    id="homeowner-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    disabled={loading}
                  />

                  <button
                    type="button"
                    className={styles.passwordButton}
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                  >
                    {showPassword ? "◉" : "◌"}
                  </button>
                </div>
              </div>

              {/* OPTIONS */}
              <div className={styles.loginOptions}>
                <label className={styles.rememberMe}>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(event.target.checked)
                    }
                    disabled={loading}
                  />

                  <span>Remember me</span>
                </label>

                <a href="/account/forgot-password">
                  Forgot password?
                </a>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className={styles.loginSubmitButton}
                disabled={loading}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                <span>
                  {loading
                    ? "Logging in..."
                    : "Login to My Alpha"}
                </span>

                <span>→</span>
              </button>
            </form>

            {/* DIVIDER */}
            <div className={styles.loginDivider}>
              <span className={styles.loginDividerLine}></span>

              <strong>OR</strong>

              <span className={styles.loginDividerLine}></span>
            </div>

            {/* CREATE ACCOUNT */}
            <a
              href="/account/create-account"
              className={styles.createAccountButton}
            >
              <span>♙</span>
              <span>Create a New Account</span>
            </a>

            <p className={styles.newUserText}>
              New to Alpha?{" "}
              <a href="/account/create-account">
                Create an account
              </a>{" "}
              to get started.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.loginRightColumn}>
            {/* TESTIMONIAL */}
            <div className={styles.testimonialCard}>
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
                alt="Beautiful property interior"
              />

              <div className={styles.testimonialContent}>
                <div className={styles.testimonialMark}>“</div>

                <p>
                  Brilliant service from start to finish.
                  Easy to use portal and always kept updated.
                </p>

                <div className={styles.testimonialRating}>
                  <span>★★★★★</span>
                  <strong>Verified Customer</strong>
                </div>
              </div>
            </div>

            {/* NEED HELP */}
            <div className={styles.contactCard}>
              <div className={styles.contactHeading}>
                <span className={styles.contactHeadingIcon}>♧</span>

                <div>
                  <h2>Need Help?</h2>
                  <p>Our team is here to help.</p>
                </div>
              </div>

              <div className={styles.contactLine}>
                <span className={styles.contactLineIcon}>☎</span>
                <strong>01234 567890</strong>
              </div>

              <div className={styles.contactLine}>
                <span className={styles.contactLineIcon}>✉</span>
                <span>info@alphapropertyandgarden.co.uk</span>
              </div>

              <div className={styles.contactLine}>
                <span className={styles.contactLineIcon}>●</span>

                <span>
                  Use our{" "}
                  <a href="/contact">Contact Form</a>
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