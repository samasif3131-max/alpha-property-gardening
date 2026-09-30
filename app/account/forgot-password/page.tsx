"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { createSupabaseBrowserClient } from "@/app/lib/supabase-browser";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createSupabaseBrowserClient();

      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(trimmedEmail, {
          redirectTo: `${window.location.origin}/my-alpha/reset-password`,
        });

      if (resetError) {
        console.error("Password reset error:", resetError);
      }

      // Keep this message generic so we do not reveal
      // whether an account exists for the email address.
      setMessage(
        "If an account exists for that email address, we'll send password-reset instructions."
      );

      setEmail("");
    } catch (err) {
      console.error("Forgot password error:", err);

      setMessage(
        "If an account exists for that email address, we'll send password-reset instructions."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          background: "#f7f7f7",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "520px",
            background: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ marginBottom: "28px" }}>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              MY ALPHA
            </p>

            <h1
              style={{
                margin: "0 0 12px",
                fontSize: "32px",
                lineHeight: 1.2,
              }}
            >
              Forgot Your Password?
            </h1>

            <p
              style={{
                margin: 0,
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              Enter your email address and, if an account exists, we&apos;ll
              send you instructions to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
              }}
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "1px solid #d0d0d0",
                borderRadius: "6px",
                fontSize: "16px",
                boxSizing: "border-box",
                marginBottom: "16px",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px 20px",
                border: "none",
                borderRadius: "6px",
                background: "#111111",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "SENDING..." : "SEND RESET INSTRUCTIONS"}
            </button>
          </form>

          {message && (
            <div
              style={{
                marginTop: "20px",
                padding: "14px 16px",
                borderRadius: "6px",
                background: "#eef7ee",
                color: "#245b2a",
                lineHeight: 1.5,
              }}
            >
              {message}
            </div>
          )}

          {error && (
            <div
              style={{
                marginTop: "20px",
                padding: "14px 16px",
                borderRadius: "6px",
                background: "#fff1f1",
                color: "#8a1f1f",
                lineHeight: 1.5,
              }}
            >
              {error}
            </div>
          )}

          <div
            style={{
              marginTop: "28px",
              paddingTop: "22px",
              borderTop: "1px solid #e5e5e5",
              textAlign: "center",
            }}
          >
            <Link
              href="/my-alpha"
              style={{
                color: "#111111",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              ← Back to My Alpha Login
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}