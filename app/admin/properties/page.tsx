"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

type Client = {
  id: string;
  full_name: string | null;
  email: string | null;
};

export default function AdminPropertiesPage() {
  const router = useRouter();

  const [clients, setClients] = useState<Client[]>([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [clientId, setClientId] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [propertyType, setPropertyType] = useState("House");
  const [notes, setNotes] = useState("");

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

  async function handleCreateProperty(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSaving(true);
    setError("");
    setMessage("");

    if (!clientId) {
      setError("Please select a client.");
      setSaving(false);
      return;
    }

    if (!address.trim()) {
      setError("Please enter the property address.");
      setSaving(false);
      return;
    }

    const { error: insertError } = await supabase
      .from("properties")
      .insert({
        client_id: clientId,
        property_name: propertyName.trim() || null,
        address: address.trim(),
        city: city.trim() || null,
        postcode: postcode.trim() || null,
        property_type: propertyType,
        notes: notes.trim() || null,
      });

    if (insertError) {
      setError(insertError.message);
      setSaving(false);
      return;
    }

    setMessage("Property created successfully!");

    setClientId("");
    setPropertyName("");
    setAddress("");
    setCity("");
    setPostcode("");
    setPropertyType("House");
    setNotes("");

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
            Create New Property
          </h1>

          <p
            style={{
              margin: "8px 0 0",
              opacity: 0.85,
            }}
          >
            Add a property and link it to a client.
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

          <form onSubmit={handleCreateProperty}>
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
                onChange={(event) =>
                  setClientId(event.target.value)
                }
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
                Property Name
              </label>

              <input
                type="text"
                value={propertyName}
                onChange={(event) =>
                  setPropertyName(event.target.value)
                }
                placeholder="e.g. Main Residence"
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
                Address *
              </label>

              <input
                type="text"
                value={address}
                onChange={(event) =>
                  setAddress(event.target.value)
                }
                placeholder="Enter property address"
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
                  City
                </label>

                <input
                  type="text"
                  value={city}
                  onChange={(event) =>
                    setCity(event.target.value)
                  }
                  placeholder="Enter city"
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
                  Postcode
                </label>

                <input
                  type="text"
                  value={postcode}
                  onChange={(event) =>
                    setPostcode(event.target.value)
                  }
                  placeholder="Enter postcode"
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
                  Property Type
                </label>

                <select
                  value={propertyType}
                  onChange={(event) =>
                    setPropertyType(event.target.value)
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
                  <option value="House">House</option>
                  <option value="Flat">Flat</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Commercial">
                    Commercial
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 700,
                  color: "#222",
                }}
              >
                Notes
              </label>

              <textarea
                value={notes}
                onChange={(event) =>
                  setNotes(event.target.value)
                }
                placeholder="Any additional information about this property..."
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
              {saving
                ? "Creating Property..."
                : "Create Property"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}