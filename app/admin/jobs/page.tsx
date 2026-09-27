"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

type Client = {
  id: string;
  full_name: string | null;
  email: string | null;
};

export default function AdminJobsPage() {
  const router = useRouter();

  const [clients, setClients] = useState<Client[]>([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [clientId, setClientId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredStartTime, setPreferredStartTime] = useState("");
  const [preferredEndTime, setPreferredEndTime] = useState("");
  const [priority, setPriority] = useState("normal");
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    loadClients();
  }, []);

  async function loadClients() {
    setLoadingClients(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/admin/login");
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || profile?.role !== "admin") {
      router.push("/account/my-alpha");
      return;
    }

    const { data, error: clientsError } = await supabase
      .from("profiles")
      .select("id, full_name, email")
      .eq("role", "client")
      .order("full_name", { ascending: true });

    if (clientsError) {
      setError(clientsError.message);
    } else {
      setClients(data || []);
    }

    setLoadingClients(false);
  }

  async function handleCreateJob(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setError("");
    setMessage("");

    if (!clientId) {
      setError("Please select a client.");
      setSaving(false);
      return;
    }

    if (!title.trim()) {
      setError("Please enter a job title.");
      setSaving(false);
      return;
    }

    const { error: insertError } = await supabase.from("jobs").insert({
      client_id: clientId,
      title: title.trim(),
      description: description.trim() || null,
      preferred_date: preferredDate || null,
      preferred_start_time: preferredStartTime || null,
      preferred_end_time: preferredEndTime || null,
      status,
      priority,
      estimated_price: estimatedPrice
        ? Number(estimatedPrice)
        : null,
    });

    if (insertError) {
      setError(insertError.message);
      setSaving(false);
      return;
    }

    setMessage("Job created successfully!");

    setClientId("");
    setTitle("");
    setDescription("");
    setPreferredDate("");
    setPreferredStartTime("");
    setPreferredEndTime("");
    setPriority("normal");
    setEstimatedPrice("");
    setStatus("pending");

    setSaving(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7f4",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <button
          type="button"
          onClick={() => router.push("/admin")}
          style={{
            border: "none",
            background: "transparent",
            color: "#0d2b1f",
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: "20px",
            padding: 0,
          }}
        >
          ← Back to Admin Dashboard
        </button>

        <div
          style={{
            background: "#0d2b1f",
            color: "#ffffff",
            padding: "28px",
            borderRadius: "14px 14px 0 0",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "30px",
            }}
          >
            Create New Job
          </h1>

          <p
            style={{
              margin: "8px 0 0",
              opacity: 0.85,
            }}
          >
            Create and assign a job to a client.
          </p>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "0 0 14px 14px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          {message && (
            <div
              style={{
                background: "#e8f7ed",
                color: "#176b35",
                padding: "14px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              {message}
            </div>
          )}

          {error && (
            <div
              style={{
                background: "#ffe8e8",
                color: "#b00020",
                padding: "14px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleCreateJob}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 700,
                  color: "#222",
                }}
              >
                Select Client *
              </label>

              <select
                value={clientId}
                onChange={(event) => setClientId(event.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "13px",
                  border: "1px solid #d5d5d5",
                  borderRadius: "8px",
                  fontSize: "15px",
                  background: "#fff",
                }}
              >
                <option value="">
                  {loadingClients
                    ? "Loading clients..."
                    : "Select a client"}
                </option>

                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.full_name || "Unnamed Client"}
                    {client.email ? ` — ${client.email}` : ""}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 700,
                  color: "#222",
                }}
              >
                Job Title *
              </label>

              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="e.g. Garden Maintenance"
                required
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px",
                  border: "1px solid #d5d5d5",
                  borderRadius: "8px",
                  fontSize: "15px",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 700,
                  color: "#222",
                }}
              >
                Description
              </label>

              <textarea
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                placeholder="Describe the work required..."
                rows={5}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px",
                  border: "1px solid #d5d5d5",
                  borderRadius: "8px",
                  fontSize: "15px",
                  resize: "vertical",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 700,
                    color: "#222",
                  }}
                >
                  Preferred Date
                </label>

                <input
                  type="date"
                  value={preferredDate}
                  onChange={(event) =>
                    setPreferredDate(event.target.value)
                  }
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px",
                    border: "1px solid #d5d5d5",
                    borderRadius: "8px",
                    fontSize: "15px",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 700,
                    color: "#222",
                  }}
                >
                  Start Time
                </label>

                <input
                  type="time"
                  value={preferredStartTime}
                  onChange={(event) =>
                    setPreferredStartTime(event.target.value)
                  }
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px",
                    border: "1px solid #d5d5d5",
                    borderRadius: "8px",
                    fontSize: "15px",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 700,
                    color: "#222",
                  }}
                >
                  End Time
                </label>

                <input
                  type="time"
                  value={preferredEndTime}
                  onChange={(event) =>
                    setPreferredEndTime(event.target.value)
                  }
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px",
                    border: "1px solid #d5d5d5",
                    borderRadius: "8px",
                    fontSize: "15px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "25px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 700,
                    color: "#222",
                  }}
                >
                  Priority
                </label>

                <select
                  value={priority}
                  onChange={(event) =>
                    setPriority(event.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "13px",
                    border: "1px solid #d5d5d5",
                    borderRadius: "8px",
                    fontSize: "15px",
                    background: "#fff",
                  }}
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 700,
                    color: "#222",
                  }}
                >
                  Status
                </label>

                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "13px",
                    border: "1px solid #d5d5d5",
                    borderRadius: "8px",
                    fontSize: "15px",
                    background: "#fff",
                  }}
                >
                  <option value="pending">Pending</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: 700,
                    color: "#222",
                  }}
                >
                  Estimated Price
                </label>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={estimatedPrice}
                  onChange={(event) =>
                    setEstimatedPrice(event.target.value)
                  }
                  placeholder="e.g. 250"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "13px",
                    border: "1px solid #d5d5d5",
                    borderRadius: "8px",
                    fontSize: "15px",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={saving || loadingClients}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "8px",
                background: "#c9a227",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 700,
                cursor:
                  saving || loadingClients
                    ? "not-allowed"
                    : "pointer",
                opacity:
                  saving || loadingClients ? 0.7 : 1,
              }}
            >
              {saving ? "Creating Job..." : "Create Job"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}