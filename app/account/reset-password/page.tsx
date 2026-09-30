"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { createSupabaseBrowserClient } from "@/app/lib/supabase-browser";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [checkingLink, setCheckingLink] = useState(true);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();

    let mounted = true;

    async function checkRecoverySession() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!mounted) return;

        if (session) {
          setReady(true);
        } else {
          setError(
            "This password reset link is invalid or has expired. Please request a new password reset link."
          );
        }
      } catch (err) {
        console.error("Recovery session error:", err);

        if (!mounted) return;

        setError(
          "This password reset link is invalid or has expired. Please request a new password reset link."
        );
      } finally {
        if (mounted) {
          setCheckingLink(false);
        }
      }
    }

    checkRecoverySession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;

      if (event === "PASSWORD_RECOVERY" && session) {
        setReady(true);
        setCheckingLink(false);
        setError("");
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!password) {
      setError("Please enter a new password.");
      return;
    }

    if (password.length < 6) {
      setError("Your password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createSupabaseBrowserClient();

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setError(
          "This password reset link is invalid or has expired. Please request a new password reset link."
        );
        return;
      }

      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) {
        console.error("Password update error:", updateError);

        setError(
          "We could not reset your password. The reset link may have expired. Please request a new password reset link."
        );
        return;
      }

      setPassword("");
      setConfirmPassword("");

      setMessage(
        "Your password has been reset successfully. You can now sign in to My Alpha."
      );

      setTimeout(() => {
        router.push("/my-alpha");
        router.refresh();
      }, 2000);
    } catch (err) {
      console.error("Password reset error:", err);

      setError(
        "We could not reset your password. Please request a new password reset link."
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
              Reset Your Password
            </h1>

            <p
              style={{
                margin: 0,
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              Choose a new password for your My Alpha account.
            </p>
          </div>

          {checkingLink && (
            <div
              style={{
                padding: "16px",
                background: "#f7f7f7",
                borderRadius: "6px",
                color: "#555",
                lineHeight: 1.5,
              }}
            >
              Checking your password reset link...
            </div>
          )}

          {!checkingLink && ready && !message && (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="password"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  New password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="new-password"
                  placeholder="Enter your new password"
                  required
                  disabled={loading}
                  minLength={6}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid #d0d0d0",
                    borderRadius: "6px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />

                <p
                  style={{
                    margin: "7px 0 0",
                    fontSize: "13px",
                    color: "#777",
                  }}
                >
                  Your password must be at least 6 characters.
                </p>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="confirm-password"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  Confirm new password
                </label>

                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  autoComplete="new-password"
                  placeholder="Enter your new password again"
                  required
                  disabled={loading}
                  minLength={6}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid #d0d0d0",
                    borderRadius: "6px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

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
                {loading ? "UPDATING..." : "RESET PASSWORD"}
              </button>
            </form>
          )}

          {message && (
            <div
              style={{
                marginTop: "20px",
                padding: "16px",
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
                padding: "16px",
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