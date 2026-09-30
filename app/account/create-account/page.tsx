"use client";

import { FormEvent, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./CreateAccount.module.css";
import { createSupabaseBrowserClient } from "@/app/lib/supabase-browser";

export default function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!terms) {
      setError("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    try {
      setLoading(true);

      const supabase = createSupabaseBrowserClient();

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/my-alpha`,
          data: {
            full_name: fullName.trim(),
            phone: phone.trim(),
          },
        },
      });

      if (signUpError) {
        setError(
          "We could not create your account at the moment. Please check your details and try again."
        );
        console.error(signUpError);
        return;
      }

      if (!data.user) {
        setError("Account could not be created. Please try again.");
        return;
      }

      setSuccess(
        "Your account has been created. Please check your email and click the verification link before signing in to My Alpha."
      );

      setFullName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setTerms(false);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.createAccountPage}>
      <Header />

      {/* HERO */}
      <section className={styles.createAccountHero}>
        <div className={styles.createAccountHeroOverlay}>
          <div className={styles.createAccountHeroContainer}>
            <div className={styles.createAccountHeroContent}>
              <p className={styles.createAccountEyebrow}>MY ALPHA</p>

              <h1>
                Create Your
                <br />
                <span>Alpha Account.</span>
              </h1>

              <p className={styles.createAccountHeroText}>
                Get secure access to your Alpha account for properties,
                <br />
                services, jobs, quotes, invoices and documents.
              </p>

              <div className={styles.createAccountPoints}>
                <div>
                  <span>✓</span>
                  <strong>Manage your property</strong>
                </div>

                <div>
                  <span>✓</span>
                  <strong>Book and track services</strong>
                </div>

                <div>
                  <span>✓</span>
                  <strong>Access quotes &amp; invoices</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATE ACCOUNT AREA */}
      <section className={styles.createAccountSection}>
        <div className={styles.createAccountContainer}>
          {/* LEFT INFORMATION */}
          <div className={styles.createAccountInfoColumn}>
            <div className={styles.createAccountInfoCard}>
              <div className={styles.createAccountCardLabel}>MY ALPHA</div>

              <h2>Everything in One Place</h2>

              <div className={styles.createAccountInfoItem}>
                <span className={styles.createAccountInfoIcon}>⌂</span>
                <p>Keep your property details organised.</p>
              </div>

              <div className={styles.createAccountInfoItem}>
                <span className={styles.createAccountInfoIcon}>✓</span>
                <p>Request and manage property services online.</p>
              </div>

              <div className={styles.createAccountInfoItem}>
                <span className={styles.createAccountInfoIcon}>◷</span>
                <p>Track your job progress.</p>
              </div>

              <div className={styles.createAccountInfoItem}>
                <span className={styles.createAccountInfoIcon}>▤</span>
                <p>View quotes, invoices and payment history.</p>
              </div>

              <div className={styles.createAccountInfoItem}>
                <span className={styles.createAccountInfoIcon}>□</span>
                <p>Access documents, photos and job history.</p>
              </div>

              <div className={styles.createAccountInfoItem}>
                <span className={styles.createAccountInfoIcon}>♢</span>
                <p>Secure access to your Alpha account.</p>
              </div>
            </div>

            <div className={styles.createAccountHelpBox}>
              <div className={styles.createAccountHelpIcon}>☎</div>

              <div>
                <h3>Already have an account?</h3>

                <p>
                  You can{" "}
                  <a href="/my-alpha">
                    login to My Alpha
                  </a>{" "}
                  instead.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className={styles.createAccountFormCard}>
            <div className={styles.createAccountAlphaBrand}>
              <span>Alpha</span>
            </div>

            <div className={styles.createAccountAlphaSubtitle}>
              PROPERTY &amp; GARDENING SERVICES
            </div>

            <h2>Create Your Account</h2>

            <p className={styles.createAccountFormDescription}>
              Enter your details below to create your secure My Alpha
              account.
            </p>

            {error && (
              <div
                style={{
                  marginBottom: "18px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "#fff1f1",
                  color: "#b42318",
                  fontSize: "12px",
                  fontWeight: 700,
                  textAlign: "left",
                }}
              >
                {error}
              </div>
            )}

            {success && (
              <div
                style={{
                  marginBottom: "18px",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "#edf9f1",
                  color: "#087f45",
                  fontSize: "12px",
                  fontWeight: 700,
                  textAlign: "left",
                }}
              >
                {success}
              </div>
            )}

            <form
              className={styles.createAccountForm}
              onSubmit={handleSubmit}
            >
              {/* NAME */}
              <div className={styles.createAccountFormField}>
                <label htmlFor="full-name">Full Name</label>

                <div className={styles.createAccountInputWrapper}>
                  <span>♙</span>

                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className={styles.createAccountFormField}>
                <label htmlFor="create-email">Email Address</label>

                <div className={styles.createAccountInputWrapper}>
                  <span>✉</span>

                  <input
                    id="create-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* PHONE */}
              <div className={styles.createAccountFormField}>
                <label htmlFor="phone">Phone Number</label>

                <div className={styles.createAccountInputWrapper}>
                  <span>☎</span>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className={styles.createAccountFormField}>
                <label htmlFor="create-password">Password</label>

                <div className={styles.createAccountInputWrapper}>
                  <span>♢</span>

                  <input
                    id="create-password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className={styles.createAccountFormField}>
                <label htmlFor="confirm-password">Confirm Password</label>

                <div className={styles.createAccountInputWrapper}>
                  <span>♢</span>

                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* TERMS */}
              <label className={styles.createAccountTerms}>
                <input
                  type="checkbox"
                  name="terms"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  disabled={loading}
                />

                <span>
                  I agree to the{" "}
                  <a href="/terms">Terms &amp; Conditions</a>{" "}
                  and{" "}
                  <a href="/privacy-policy">Privacy Policy</a>.
                </span>
              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className={styles.createAccountSubmit}
                disabled={loading}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                <span>
                  {loading
                    ? "Creating Account..."
                    : "Create My Alpha Account"}
                </span>

                <span>→</span>
              </button>
            </form>

            <div className={styles.createAccountDivider}>
              <span></span>
              <strong>ALREADY REGISTERED?</strong>
              <span></span>
            </div>

            <a
              href="/my-alpha"
              className={styles.createAccountLoginButton}
            >
              Login to My Alpha
            </a>

            <p className={styles.createAccountNewUser}>
              Already have an Alpha account?{" "}
              <a href="/my-alpha">Login here</a>
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.createAccountRightColumn}>
            {/* ACCOUNT INFORMATION */}
            <div className={styles.createAccountTestimonialCard}>
              <div className={styles.createAccountTestimonialContent}>
                <div className={styles.createAccountTestimonialMark}>
                  ✓
                </div>

                <h2>Secure Account Access</h2>

                <p>
                  Your My Alpha account requires email verification before
                  you can sign in. Your account is separate from any
                  existing Alpha property or CRM records unless access is
                  securely authorised.
                </p>
              </div>
            </div>

            {/* HELP */}
            <div className={styles.createAccountContactCard}>
              <div className={styles.createAccountContactHeading}>
                <span>♧</span>

                <div>
                  <h2>Need Help?</h2>

                  <p>Our team is here to help.</p>
                </div>
              </div>

              <div className={styles.createAccountContactLine}>
                <span>☎</span>
                <strong>01775 518068</strong>
              </div>

              <div className={styles.createAccountContactLine}>
                <span>✉</span>

                <span>
                  info@alphapropertyandgardening.co.uk
                </span>
              </div>

              <div className={styles.createAccountContactLine}>
                <span>●</span>

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