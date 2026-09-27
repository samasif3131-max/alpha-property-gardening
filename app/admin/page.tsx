"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";

type Profile = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  role: string;
};

export default function AdminDashboard() {
  const router = useRouter();

  const [admin, setAdmin] = useState<Profile | null>(null);
  const [clients, setClients] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAdminDashboard();
  }, []);

  async function loadAdminDashboard() {
    try {
      setLoading(true);
      setError("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.push("/admin/login");
        return;
      }

      const {
        data: adminProfile,
        error: adminError,
      } = await supabase
        .from("profiles")
        .select("id, full_name, email, phone, role")
        .eq("id", user.id)
        .single();

      if (adminError) {
        console.error("Admin profile error:", adminError);
        setError("Could not load your admin profile.");
        setLoading(false);
        return;
      }

      if (!adminProfile) {
        setError("Admin profile could not be found.");
        setLoading(false);
        return;
      }

      if (adminProfile.role !== "admin") {
        router.push("/account/my-alpha");
        return;
      }

      setAdmin(adminProfile);

      const {
        data: clientProfiles,
        error: clientsError,
      } = await supabase
        .from("profiles")
        .select("id, full_name, email, phone, role")
        .eq("role", "client")
        .order("created_at", { ascending: false });

      if (clientsError) {
        console.error("Clients error:", clientsError);
        setError("Could not load clients.");
        setLoading(false);
        return;
      }

      setClients(clientProfiles || []);
    } catch (error) {
      console.error("Admin dashboard error:", error);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#f5f1e8",
          color: "#173f2b",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Loading admin dashboard...
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f1e8",
        color: "#173f2b",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#173f2b",
          color: "#fff",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
            }}
          >
            Alpha Admin
          </h1>

          <p
            style={{
              margin: "5px 0 0",
              opacity: 0.8,
            }}
          >
            Property & Gardening Services
          </p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: "#c8a45d",
            border: "none",
            padding: "10px 18px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Logout
        </button>
      </header>

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 90px)",
        }}
      >
        <aside
          style={{
            width: "240px",
            background: "#123222",
            padding: "30px 20px",
          }}
        >
          <nav
            style={{
              display: "grid",
              gap: "10px",
            }}
          >
            <Link
              href="/admin"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "12px",
                background: "#24543b",
                borderRadius: "6px",
              }}
            >
              Dashboard
            </Link>

            <Link
              href="/admin/clients"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "6px",
              }}
            >
              Clients
            </Link>

            <Link
              href="/admin/properties"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "6px",
              }}
            >
              Properties
            </Link>

            <Link
              href="/admin/jobs"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "6px",
              }}
            >
              Jobs
            </Link>

            <Link
              href="/admin/quotes"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "6px",
              }}
            >
              Quotes
            </Link>

            <Link
              href="/admin/invoices"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "6px",
              }}
            >
              Invoices
            </Link>

            <Link
              href="/admin/messages"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "6px",
              }}
            >
              Messages
            </Link>
          </nav>
        </aside>

        <section
          style={{
            flex: 1,
            padding: "40px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Welcome, {admin?.full_name || "Admin"}
          </h2>

          <p>
            Manage your clients, properties, jobs, quotes and invoices from
            here.
          </p>

          {error && (
            <div
              style={{
                background: "#ffe5e5",
                color: "#9b1c1c",
                padding: "15px",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              {error}
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h3>Total Clients</h3>

              <p
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {clients.length}
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h3>Jobs</h3>

              <p style={{ margin: 0 }}>
                Manage client jobs
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h3>Quotes</h3>

              <p style={{ margin: 0 }}>
                Manage quotes
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h3>Invoices</h3>

              <p style={{ margin: 0 }}>
                Manage invoices
              </p>
            </div>
          </div>

          <section style={{ marginTop: "40px" }}>
            <h2>Recent Clients</h2>

            {clients.length === 0 ? (
              <div
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "10px",
                  marginTop: "15px",
                }}
              >
                No clients found.
              </div>
            ) : (
              <div
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginTop: "15px",
                }}
              >
                {clients.map((client) => (
                  <div
                    key={client.id}
                    style={{
                      padding: "18px 20px",
                      borderBottom: "1px solid #eee",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <strong>
                        {client.full_name || "Unnamed client"}
                      </strong>

                      <div
                        style={{
                          marginTop: "5px",
                          opacity: 0.7,
                        }}
                      >
                        {client.email || "No email"}
                      </div>
                    </div>

                    <span>
                      {client.phone || "No phone"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </section>
      </div>
    </main>
  );
}