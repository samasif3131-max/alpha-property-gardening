"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./MyAlpha.module.css";

import { supabase } from "@/app/lib/supabase";

type Profile = {
  id: string;
  full_name: string | null;
  phone: string | null;
  email: string | null;
  role: string;
  avatar_url: string | null;
  address: string | null;
  city: string | null;
  postcode: string | null;
};

type Property = {
  id: number;
  property_name: string | null;
  address: string;
  city: string | null;
  postcode: string | null;
  property_type: string | null;
  notes: string | null;
};

type Job = {
  id: number;
  client_id: string;
  worker_id: string | null;
  service_id: number | null;
  property_id: number | null;
  title: string;
  description: string | null;
  preferred_date: string | null;
  preferred_start_time: string | null;
  preferred_end_time: string | null;
  status: string;
  priority: string;
  estimated_price: number | null;
  created_at: string;
  updated_at: string;
};

type Quote = {
  id: number;
  job_id: number;
  client_id: string;
  worker_id: string | null;
  amount: number;
  description: string | null;
  status: string;
  valid_until: string | null;
  created_at: string;
  updated_at: string;
};

type Invoice = {
  id: number;
  job_id: number;
  client_id: string;
  invoice_number: string;
  amount: number;
  status: string;
  due_date: string | null;
  paid_at: string | null;
  created_at: string;
};

type Notification = {
  id: number;
  user_id: string;
  title: string;
  message: string;
  type: string | null;
  read_at: string | null;
  created_at: string;
};

type Message = {
  id: number;
  job_id: number | null;
  sender_id: string;
  receiver_id: string;
  message: string;
  read_at: string | null;
  created_at: string;
};

type Review = {
  id: number;
  job_id: number;
  client_id: string;
  worker_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
};

type Service = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  active: boolean;
};

type Tab =
  | "dashboard"
  | "properties"
  | "jobs"
  | "quotes"
  | "invoices"
  | "messages"
  | "notifications"
  | "reviews"
  | "profile";

export default function MyAlphaPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [profile, setProfile] = useState<Profile | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  const [profileForm, setProfileForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
  });

  const serviceMap = useMemo(() => {
    const map: Record<number, string> = {};

    services.forEach((service) => {
      map[service.id] = service.name;
    });

    return map;
  }, [services]);

  const propertyMap = useMemo(() => {
    const map: Record<number, Property> = {};

    properties.forEach((property) => {
      map[property.id] = property;
    });

    return map;
  }, [properties]);

  const jobMap = useMemo(() => {
    const map: Record<number, Job> = {};

    jobs.forEach((job) => {
      map[job.id] = job;
    });

    return map;
  }, [jobs]);

  const unreadNotifications = notifications.filter(
    (notification) => !notification.read_at
  ).length;

  const unreadMessages = messages.filter(
    (item) => item.receiver_id === profile?.id && !item.read_at
  ).length;

  const activeJobs = jobs.filter((job) =>
    ["completed", "cancelled", "declined"].includes(
      job.status.toLowerCase()
    )
      ? false
      : true
  );

  const pendingQuotes = quotes.filter((quote) =>
    ["pending", "sent", "awaiting approval", "awaiting_approval"].includes(
      quote.status.toLowerCase()
    )
  );

  const outstandingInvoices = invoices.filter(
    (invoice) =>
      !["paid", "cancelled"].includes(invoice.status.toLowerCase())
  );

  const upcomingJobs = [...jobs]
    .filter((job) => job.preferred_date)
    .filter((job) => {
      if (!job.preferred_date) return false;

      const date = new Date(`${job.preferred_date}T23:59:59`);
      return date >= new Date();
    })
    .sort((a, b) =>
      String(a.preferred_date).localeCompare(String(b.preferred_date))
    )
    .slice(0, 5);

  useEffect(() => {
    loadClientData();
  }, []);

  async function loadClientData() {
    try {
      setLoading(true);
      setError("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace("/account/homeowner-login");
        return;
      }

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError || !profileData) {
        setError("Your profile could not be loaded.");
        return;
      }

      if (profileData.role !== "client") {
        await supabase.auth.signOut();
        router.replace("/account/homeowner-login");
        return;
      }

      const [
        propertiesResult,
        jobsResult,
        quotesResult,
        invoicesResult,
        notificationsResult,
        messagesResult,
        reviewsResult,
        servicesResult,
      ] = await Promise.all([
        supabase
          .from("properties")
          .select("*")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false }),

        supabase
          .from("jobs")
          .select("*")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false }),

        supabase
          .from("quotes")
          .select("*")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false }),

        supabase
          .from("invoices")
          .select("*")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false }),

        supabase
          .from("notifications")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false }),

        supabase
          .from("messages")
          .select("*")
          .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
          .order("created_at", { ascending: false }),

        supabase
          .from("reviews")
          .select("*")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false }),

        supabase
          .from("services")
          .select("*")
          .eq("active", true)
          .order("name", { ascending: true }),
      ]);

      const firstError =
        propertiesResult.error ||
        jobsResult.error ||
        quotesResult.error ||
        invoicesResult.error ||
        notificationsResult.error ||
        messagesResult.error ||
        reviewsResult.error ||
        servicesResult.error;

      if (firstError) {
        console.error(firstError);
        setError(
          "Some portal information could not be loaded. Please refresh the page."
        );
      }

      setProfile(profileData);

      setProfileForm({
        full_name: profileData.full_name || "",
        phone: profileData.phone || "",
        email: profileData.email || user.email || "",
        address: profileData.address || "",
        city: profileData.city || "",
        postcode: profileData.postcode || "",
      });

      setProperties(propertiesResult.data || []);
      setJobs(jobsResult.data || []);
      setQuotes(quotesResult.data || []);
      setInvoices(invoicesResult.data || []);
      setNotifications(notificationsResult.data || []);
      setMessages(messagesResult.data || []);
      setReviews(reviewsResult.data || []);
      setServices(servicesResult.data || []);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while loading your portal.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/account/homeowner-login");
    router.refresh();
  }

  async function handleProfileSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!profile) return;

    try {
      setSavingProfile(true);
      setMessage("");
      setError("");

      const { data, error: updateError } = await supabase
        .from("profiles")
        .update({
          full_name: profileForm.full_name.trim(),
          phone: profileForm.phone.trim(),
          address: profileForm.address.trim(),
          city: profileForm.city.trim(),
          postcode: profileForm.postcode.trim(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", profile.id)
        .select()
        .single();

      if (updateError) {
        console.error(updateError);
        setError("Your profile could not be updated.");
        return;
      }

      setProfile(data);
      setMessage("Your profile has been updated successfully.");
    } catch (err) {
      console.error(err);
      setError("Something went wrong while updating your profile.");
    } finally {
      setSavingProfile(false);
    }
  }

  async function handleQuoteDecision(
    quoteId: number,
    decision: "approved" | "declined"
  ) {
    try {
      setError("");
      setMessage("");

      const { error: updateError } = await supabase
        .from("quotes")
        .update({
          status: decision,
          updated_at: new Date().toISOString(),
        })
        .eq("id", quoteId)
        .eq("client_id", profile?.id);

      if (updateError) {
        console.error(updateError);
        setError("The quote could not be updated.");
        return;
      }

      setQuotes((current) =>
        current.map((quote) =>
          quote.id === quoteId
            ? {
                ...quote,
                status: decision,
                updated_at: new Date().toISOString(),
              }
            : quote
        )
      );

      setMessage(
        decision === "approved"
          ? "Quote approved successfully."
          : "Quote declined successfully."
      );
    } catch (err) {
      console.error(err);
      setError("Something went wrong while updating the quote.");
    }
  }

  async function markNotificationRead(notificationId: number) {
    const now = new Date().toISOString();

    const { error: updateError } = await supabase
      .from("notifications")
      .update({ read_at: now })
      .eq("id", notificationId)
      .eq("user_id", profile?.id);

    if (updateError) {
      console.error(updateError);
      return;
    }

    setNotifications((current) =>
      current.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read_at: now }
          : notification
      )
    );
  }

  async function markAllNotificationsRead() {
    if (!profile) return;

    const now = new Date().toISOString();

    const { error: updateError } = await supabase
      .from("notifications")
      .update({ read_at: now })
      .eq("user_id", profile.id)
      .is("read_at", null);

    if (updateError) {
      console.error(updateError);
      return;
    }

    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read_at: notification.read_at || now,
      }))
    );
  }

  function formatDate(value: string | null) {
    if (!value) return "Not set";

    return new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  function formatDateTime(value: string) {
    return new Date(value).toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function formatMoney(value: number) {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(Number(value || 0));
  }

  function statusClass(status: string) {
    const clean = status.toLowerCase().replace(/\s+/g, "-");

    if (
      clean.includes("complete") ||
      clean.includes("paid") ||
      clean.includes("approved")
    ) {
      return styles.statusGreen;
    }

    if (
      clean.includes("pending") ||
      clean.includes("progress") ||
      clean.includes("scheduled") ||
      clean.includes("sent")
    ) {
      return styles.statusGold;
    }

    if (
      clean.includes("cancel") ||
      clean.includes("declin") ||
      clean.includes("overdue")
    ) {
      return styles.statusRed;
    }

    return styles.statusGrey;
  }

  function goTo(tab: Tab) {
    setActiveTab(tab);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (loading) {
    return (
      <>
        <Header />

        <main className={styles.loadingPage}>
          <div className={styles.loader}></div>
          <h2>Loading My Alpha...</h2>
          <p>Please wait while we load your account.</p>
        </main>

        <Footer />
      </>
    );
  }

  if (!profile) {
    return (
      <>
        <Header />

        <main className={styles.errorPage}>
          <div className={styles.errorBox}>
            <h1>Unable to load your account</h1>
            <p>{error || "Please login again."}</p>

            <Link
              href="/account/homeowner-login"
              className={styles.primaryButton}
            >
              Return to Login
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className={styles.portalPage}>
        {/* =====================================================
            PORTAL HERO
        ====================================================== */}
        <section className={styles.portalHero}>
          <div className={styles.portalHeroOverlay}></div>

          <div className={styles.portalHeroContent}>
            <div>
              <p className={styles.heroEyebrow}>MY ALPHA CLIENT PORTAL</p>

              <h1>
                Welcome back,
                <span>
                  {profile.full_name?.split(" ")[0] || "Client"}
                </span>
              </h1>

              <p>
                Manage your properties, jobs, quotes, appointments
                and invoices all in one place.
              </p>
            </div>

            <div className={styles.heroUser}>
              <div className={styles.avatar}>
                {profile.full_name?.charAt(0).toUpperCase() || "A"}
              </div>

              <div>
                <strong>{profile.full_name || "Alpha Client"}</strong>
                <span>{profile.email || "Client account"}</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.portalLayout}>
          {/* ===================================================
              SIDEBAR
          ==================================================== */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarTitle}>My Alpha</div>

            <button
              className={
                activeTab === "dashboard"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("dashboard")}
            >
              <span>⌂</span>
              Dashboard
            </button>

            <button
              className={
                activeTab === "properties"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("properties")}
            >
              <span>▣</span>
              My Properties
              <b>{properties.length}</b>
            </button>

            <button
              className={
                activeTab === "jobs"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("jobs")}
            >
              <span>✓</span>
              My Jobs
              <b>{activeJobs.length}</b>
            </button>

            <button
              className={
                activeTab === "quotes"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("quotes")}
            >
              <span>£</span>
              My Quotes
              <b>{pendingQuotes.length}</b>
            </button>

            <button
              className={
                activeTab === "invoices"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("invoices")}
            >
              <span>▤</span>
              My Invoices
              <b>{outstandingInvoices.length}</b>
            </button>

            <button
              className={
                activeTab === "messages"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("messages")}
            >
              <span>✉</span>
              Messages
              {unreadMessages > 0 && <b>{unreadMessages}</b>}
            </button>

            <button
              className={
                activeTab === "notifications"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("notifications")}
            >
              <span>●</span>
              Notifications
              {unreadNotifications > 0 && <b>{unreadNotifications}</b>}
            </button>

            <button
              className={
                activeTab === "reviews"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("reviews")}
            >
              <span>★</span>
              My Reviews
            </button>

            <button
              className={
                activeTab === "profile"
                  ? styles.navButtonActive
                  : styles.navButton
              }
              onClick={() => goTo("profile")}
            >
              <span>♙</span>
              My Profile
            </button>

            <div className={styles.sidebarDivider}></div>

            <button
              className={styles.logoutButton}
              onClick={handleLogout}
            >
              <span>↪</span>
              Logout
            </button>

            <div className={styles.sidebarHelp}>
              <strong>Need help?</strong>
              <p>Our team is here for you.</p>

              <a href="tel:01234567890">
                01234 567890
              </a>
            </div>
          </aside>

          {/* ===================================================
              MAIN CONTENT
          ==================================================== */}
          <section className={styles.dashboardContent}>
            {message && (
              <div className={styles.successMessage}>
                ✓ {message}
              </div>
            )}

            {error && (
              <div className={styles.errorMessage}>
                ⚠ {error}
              </div>
            )}

            {/* =================================================
                DASHBOARD
            ================================================== */}
            {activeTab === "dashboard" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>DASHBOARD</p>
                    <h2>
                      Hello,{" "}
                      {profile.full_name?.split(" ")[0] || "there"}!
                    </h2>
                    <p>
                      Here&apos;s an overview of your Alpha account.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={styles.goldButton}
                  >
                    Request a Service →
                  </Link>
                </div>

                {/* STAT CARDS */}
                <div className={styles.statsGrid}>
                  <button
                    className={styles.statCard}
                    onClick={() => goTo("properties")}
                  >
                    <div className={styles.statIcon}>⌂</div>
                    <div>
                      <span>Properties</span>
                      <strong>{properties.length}</strong>
                    </div>
                  </button>

                  <button
                    className={styles.statCard}
                    onClick={() => goTo("jobs")}
                  >
                    <div className={styles.statIcon}>✓</div>
                    <div>
                      <span>Active Jobs</span>
                      <strong>{activeJobs.length}</strong>
                    </div>
                  </button>

                  <button
                    className={styles.statCard}
                    onClick={() => goTo("quotes")}
                  >
                    <div className={styles.statIcon}>£</div>
                    <div>
                      <span>Pending Quotes</span>
                      <strong>{pendingQuotes.length}</strong>
                    </div>
                  </button>

                  <button
                    className={styles.statCard}
                    onClick={() => goTo("invoices")}
                  >
                    <div className={styles.statIcon}>▤</div>
                    <div>
                      <span>Outstanding</span>
                      <strong>
                        {formatMoney(
                          outstandingInvoices.reduce(
                            (sum, invoice) =>
                              sum + Number(invoice.amount || 0),
                            0
                          )
                        )}
                      </strong>
                    </div>
                  </button>
                </div>

                <div className={styles.dashboardGrid}>
                  {/* UPCOMING */}
                  <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                      <div>
                        <span>YOUR SCHEDULE</span>
                        <h3>Upcoming Jobs</h3>
                      </div>

                      <button onClick={() => goTo("jobs")}>
                        View all →
                      </button>
                    </div>

                    {upcomingJobs.length === 0 ? (
                      <div className={styles.emptyState}>
                        <div>◷</div>
                        <h4>No upcoming jobs</h4>
                        <p>
                          Your upcoming appointments will appear here.
                        </p>
                      </div>
                    ) : (
                      <div className={styles.scheduleList}>
                        {upcomingJobs.map((job) => (
                          <div
                            className={styles.scheduleItem}
                            key={job.id}
                          >
                            <div className={styles.dateBox}>
                              <strong>
                                {job.preferred_date
                                  ? new Date(
                                      `${job.preferred_date}T12:00:00`
                                    ).getDate()
                                  : "--"}
                              </strong>

                              <span>
                                {job.preferred_date
                                  ? new Date(
                                      `${job.preferred_date}T12:00:00`
                                    ).toLocaleDateString("en-GB", {
                                      month: "short",
                                    })
                                  : ""}
                              </span>
                            </div>

                            <div className={styles.scheduleDetails}>
                              <strong>{job.title}</strong>

                              <span>
                                {job.service_id
                                  ? serviceMap[job.service_id] ||
                                    "Service"
                                  : "Property Service"}
                              </span>

                              <small>
                                {job.preferred_start_time
                                  ? job.preferred_start_time.slice(0, 5)
                                  : "Time TBC"}
                                {" · "}
                                {job.property_id
                                  ? propertyMap[job.property_id]
                                      ?.property_name ||
                                    propertyMap[job.property_id]
                                      ?.address ||
                                    "Property"
                                  : "Property TBC"}
                              </small>
                            </div>

                            <span
                              className={`${styles.statusBadge} ${statusClass(
                                job.status
                              )}`}
                            >
                              {job.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* PROFILE SUMMARY */}
                  <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                      <div>
                        <span>YOUR ACCOUNT</span>
                        <h3>Profile Details</h3>
                      </div>

                      <button onClick={() => goTo("profile")}>
                        Edit →
                      </button>
                    </div>

                    <div className={styles.profileSummary}>
                      <div className={styles.largeAvatar}>
                        {profile.full_name
                          ?.charAt(0)
                          .toUpperCase() || "A"}
                      </div>

                      <h4>
                        {profile.full_name || "Your Name"}
                      </h4>

                      <p>{profile.email}</p>
                    </div>

                    <div className={styles.detailRows}>
                      <div>
                        <span>Phone</span>
                        <strong>
                          {profile.phone || "Not added"}
                        </strong>
                      </div>

                      <div>
                        <span>Address</span>
                        <strong>
                          {profile.address || "Not added"}
                        </strong>
                      </div>

                      <div>
                        <span>Location</span>
                        <strong>
                          {[profile.city, profile.postcode]
                            .filter(Boolean)
                            .join(", ") || "Not added"}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RECENT JOBS */}
                <div className={styles.panel}>
                  <div className={styles.panelHeader}>
                    <div>
                      <span>RECENT ACTIVITY</span>
                      <h3>Recent Jobs</h3>
                    </div>

                    <button onClick={() => goTo("jobs")}>
                      View all →
                    </button>
                  </div>

                  {jobs.length === 0 ? (
                    <div className={styles.emptyState}>
                      <h4>No jobs yet</h4>
                      <p>
                        Jobs created for your account will appear
                        here.
                      </p>
                    </div>
                  ) : (
                    <div className={styles.tableWrap}>
                      <table className={styles.dataTable}>
                        <thead>
                          <tr>
                            <th>Job</th>
                            <th>Property</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                          </tr>
                        </thead>

                        <tbody>
                          {jobs.slice(0, 5).map((job) => (
                            <tr key={job.id}>
                              <td>
                                <strong>{job.title}</strong>
                                <small>
                                  {job.service_id
                                    ? serviceMap[job.service_id] ||
                                      "Service"
                                    : "Property service"}
                                </small>
                              </td>

                              <td>
                                {job.property_id
                                  ? propertyMap[job.property_id]
                                      ?.property_name ||
                                    propertyMap[job.property_id]
                                      ?.address ||
                                    "Property"
                                  : "—"}
                              </td>

                              <td>
                                {formatDate(job.preferred_date)}
                              </td>

                              <td>
                                <span
                                  className={`${styles.statusBadge} ${statusClass(
                                    job.status
                                  )}`}
                                >
                                  {job.status}
                                </span>
                              </td>

                              <td>
                                <button
                                  className={styles.viewButton}
                                  onClick={() => goTo("jobs")}
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* NOTIFICATIONS */}
                {notifications.length > 0 && (
                  <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                      <div>
                        <span>UPDATES</span>
                        <h3>Latest Notifications</h3>
                      </div>

                      <button
                        onClick={() => goTo("notifications")}
                      >
                        View all →
                      </button>
                    </div>

                    <div className={styles.notificationList}>
                      {notifications.slice(0, 3).map((notification) => (
                        <button
                          key={notification.id}
                          className={
                            notification.read_at
                              ? styles.notificationItem
                              : styles.notificationUnread
                          }
                          onClick={() =>
                            markNotificationRead(notification.id)
                          }
                        >
                          <div className={styles.notificationIcon}>
                            ●
                          </div>

                          <div>
                            <strong>{notification.title}</strong>
                            <p>{notification.message}</p>
                            <small>
                              {formatDateTime(
                                notification.created_at
                              )}
                            </small>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* =================================================
                PROPERTIES
            ================================================== */}
            {activeTab === "properties" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>MY ALPHA</p>
                    <h2>My Properties</h2>
                    <p>
                      All properties connected to your client account.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={styles.goldButton}
                  >
                    Add / Request Property →
                  </Link>
                </div>

                {properties.length === 0 ? (
                  <div className={styles.emptyLarge}>
                    <div>⌂</div>
                    <h3>No properties yet</h3>
                    <p>
                      Once a property is added to your account it
                      will appear here.
                    </p>
                  </div>
                ) : (
                  <div className={styles.propertyGrid}>
                    {properties.map((property) => {
                      const propertyJobs = jobs.filter(
                        (job) => job.property_id === property.id
                      );

                      return (
                        <article
                          className={styles.propertyCard}
                          key={property.id}
                        >
                          <div className={styles.propertyTop}>
                            <div className={styles.propertyIcon}>
                              ⌂
                            </div>

                            <span>
                              {property.property_type ||
                                "Property"}
                            </span>
                          </div>

                          <h3>
                            {property.property_name ||
                              "My Property"}
                          </h3>

                          <p>
                            {property.address}
                            <br />
                            {[property.city, property.postcode]
                              .filter(Boolean)
                              .join(", ")}
                          </p>

                          <div className={styles.propertyStats}>
                            <span>
                              <strong>
                                {propertyJobs.length}
                              </strong>
                              Jobs
                            </span>

                            <span>
                              <strong>
                                {
                                  propertyJobs.filter(
                                    (job) =>
                                      ![
                                        "completed",
                                        "cancelled",
                                      ].includes(
                                        job.status.toLowerCase()
                                      )
                                  ).length
                                }
                              </strong>
                              Active
                            </span>
                          </div>

                          {property.notes && (
                            <div className={styles.propertyNotes}>
                              <strong>Notes</strong>
                              <p>{property.notes}</p>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {/* =================================================
                JOBS
            ================================================== */}
            {activeTab === "jobs" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>MY ALPHA</p>
                    <h2>My Jobs</h2>
                    <p>
                      Track all jobs and service requests for your
                      properties.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={styles.goldButton}
                  >
                    Request a Job →
                  </Link>
                </div>

                {jobs.length === 0 ? (
                  <div className={styles.emptyLarge}>
                    <div>✓</div>
                    <h3>No jobs yet</h3>
                    <p>
                      Your jobs will appear here once a service
                      request has been created.
                    </p>
                  </div>
                ) : (
                  <div className={styles.jobsList}>
                    {jobs.map((job) => (
                      <article
                        className={styles.jobCard}
                        key={job.id}
                      >
                        <div className={styles.jobMain}>
                          <div className={styles.jobNumber}>
                            JOB #{job.id}
                          </div>

                          <h3>{job.title}</h3>

                          {job.description && (
                            <p>{job.description}</p>
                          )}

                          <div className={styles.jobMeta}>
                            <span>
                              <b>Service:</b>{" "}
                              {job.service_id
                                ? serviceMap[job.service_id] ||
                                  "Service"
                                : "Property service"}
                            </span>

                            <span>
                              <b>Property:</b>{" "}
                              {job.property_id
                                ? propertyMap[job.property_id]
                                    ?.property_name ||
                                  propertyMap[job.property_id]
                                    ?.address ||
                                  "Property"
                                : "Not assigned"}
                            </span>

                            <span>
                              <b>Date:</b>{" "}
                              {formatDate(job.preferred_date)}
                            </span>

                            {job.preferred_start_time && (
                              <span>
                                <b>Time:</b>{" "}
                                {job.preferred_start_time.slice(
                                  0,
                                  5
                                )}
                                {job.preferred_end_time
                                  ? ` - ${job.preferred_end_time.slice(
                                      0,
                                      5
                                    )}`
                                  : ""}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className={styles.jobSide}>
                          <span
                            className={`${styles.statusBadge} ${statusClass(
                              job.status
                            )}`}
                          >
                            {job.status}
                          </span>

                          <span className={styles.priority}>
                            {job.priority} priority
                          </span>

                          {job.estimated_price !== null && (
                            <strong>
                              {formatMoney(job.estimated_price)}
                            </strong>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* =================================================
                QUOTES
            ================================================== */}
            {activeTab === "quotes" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>MY ALPHA</p>
                    <h2>My Quotes</h2>
                    <p>
                      Review and manage quotes provided for your
                      jobs.
                    </p>
                  </div>
                </div>

                {quotes.length === 0 ? (
                  <div className={styles.emptyLarge}>
                    <div>£</div>
                    <h3>No quotes yet</h3>
                    <p>
                      Quotes for your jobs will appear here.
                    </p>
                  </div>
                ) : (
                  <div className={styles.quoteList}>
                    {quotes.map((quote) => {
                      const job = jobMap[quote.job_id];

                      const pending = [
                        "pending",
                        "sent",
                        "awaiting approval",
                        "awaiting_approval",
                      ].includes(quote.status.toLowerCase());

                      return (
                        <article
                          className={styles.quoteCard}
                          key={quote.id}
                        >
                          <div>
                            <span className={styles.cardEyebrow}>
                              QUOTE #{quote.id}
                            </span>

                            <h3>
                              {job?.title || "Service Quote"}
                            </h3>

                            {quote.description && (
                              <p>{quote.description}</p>
                            )}

                            <small>
                              Created{" "}
                              {formatDateTime(quote.created_at)}
                            </small>

                            {quote.valid_until && (
                              <small>
                                Valid until{" "}
                                {formatDate(quote.valid_until)}
                              </small>
                            )}
                          </div>

                          <div className={styles.quoteRight}>
                            <strong>
                              {formatMoney(quote.amount)}
                            </strong>

                            <span
                              className={`${styles.statusBadge} ${statusClass(
                                quote.status
                              )}`}
                            >
                              {quote.status}
                            </span>

                            {pending && (
                              <div className={styles.quoteActions}>
                                <button
                                  className={styles.approveButton}
                                  onClick={() =>
                                    handleQuoteDecision(
                                      quote.id,
                                      "approved"
                                    )
                                  }
                                >
                                  Approve
                                </button>

                                <button
                                  className={styles.declineButton}
                                  onClick={() =>
                                    handleQuoteDecision(
                                      quote.id,
                                      "declined"
                                    )
                                  }
                                >
                                  Decline
                                </button>
                              </div>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {/* =================================================
                INVOICES
            ================================================== */}
            {activeTab === "invoices" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>MY ALPHA</p>
                    <h2>My Invoices</h2>
                    <p>
                      View your invoices and payment status.
                    </p>
                  </div>
                </div>

                {invoices.length === 0 ? (
                  <div className={styles.emptyLarge}>
                    <div>▤</div>
                    <h3>No invoices yet</h3>
                    <p>
                      Your invoices will appear here when issued.
                    </p>
                  </div>
                ) : (
                  <div className={styles.tableWrap}>
                    <table className={styles.dataTable}>
                      <thead>
                        <tr>
                          <th>Invoice</th>
                          <th>Job</th>
                          <th>Amount</th>
                          <th>Due Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {invoices.map((invoice) => (
                          <tr key={invoice.id}>
                            <td>
                              <strong>
                                {invoice.invoice_number}
                              </strong>
                              <small>
                                {formatDate(invoice.created_at)}
                              </small>
                            </td>

                            <td>
                              {jobMap[invoice.job_id]?.title ||
                                `Job #${invoice.job_id}`}
                            </td>

                            <td>
                              <strong>
                                {formatMoney(invoice.amount)}
                              </strong>
                            </td>

                            <td>
                              {formatDate(invoice.due_date)}
                            </td>

                            <td>
                              <span
                                className={`${styles.statusBadge} ${statusClass(
                                  invoice.status
                                )}`}
                              >
                                {invoice.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}

            {/* =================================================
                MESSAGES
            ================================================== */}
            {activeTab === "messages" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>MY ALPHA</p>
                    <h2>Messages</h2>
                    <p>
                      Your communication related to Alpha jobs and
                      services.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={styles.goldButton}
                  >
                    Contact Alpha →
                  </Link>
                </div>

                {messages.length === 0 ? (
                  <div className={styles.emptyLarge}>
                    <div>✉</div>
                    <h3>No messages yet</h3>
                    <p>
                      Messages from the Alpha team will appear here.
                    </p>
                  </div>
                ) : (
                  <div className={styles.messageList}>
                    {messages.map((item) => (
                      <article
                        className={
                          item.sender_id === profile.id
                            ? styles.messageSent
                            : styles.messageReceived
                        }
                        key={item.id}
                      >
                        <div className={styles.messageTop}>
                          <strong>
                            {item.sender_id === profile.id
                              ? "You"
                              : "Alpha Team"}
                          </strong>

                          <span>
                            {formatDateTime(item.created_at)}
                          </span>
                        </div>

                        <p>{item.message}</p>

                        {item.job_id && (
                          <small>
                            Related to Job #{item.job_id}
                          </small>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* =================================================
                NOTIFICATIONS
            ================================================== */}
            {activeTab === "notifications" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>MY ALPHA</p>
                    <h2>Notifications</h2>
                    <p>
                      Important updates about your account and jobs.
                    </p>
                  </div>

                  {unreadNotifications > 0 && (
                    <button
                      className={styles.goldButton}
                      onClick={markAllNotificationsRead}
                    >
                      Mark all as read
                    </button>
                  )}
                </div>

                {notifications.length === 0 ? (
                  <div className={styles.emptyLarge}>
                    <div>●</div>
                    <h3>No notifications</h3>
                    <p>
                      You&apos;re all caught up.
                    </p>
                  </div>
                ) : (
                  <div className={styles.notificationListLarge}>
                    {notifications.map((notification) => (
                      <button
                        className={
                          notification.read_at
                            ? styles.notificationLarge
                            : styles.notificationLargeUnread
                        }
                        key={notification.id}
                        onClick={() =>
                          markNotificationRead(notification.id)
                        }
                      >
                        <div className={styles.notificationBigIcon}>
                          {notification.type === "job"
                            ? "✓"
                            : notification.type === "invoice"
                            ? "£"
                            : notification.type === "quote"
                            ? "?"
                            : "●"}
                        </div>

                        <div>
                          <div className={styles.notificationHeading}>
                            <strong>
                              {notification.title}
                            </strong>

                            {!notification.read_at && (
                              <span>NEW</span>
                            )}
                          </div>

                          <p>{notification.message}</p>

                          <small>
                            {formatDateTime(
                              notification.created_at
                            )}
                          </small>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* =================================================
                REVIEWS
            ================================================== */}
            {activeTab === "reviews" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>MY ALPHA</p>
                    <h2>My Reviews</h2>
                    <p>
                      Reviews you have left for completed services.
                    </p>
                  </div>
                </div>

                {reviews.length === 0 ? (
                  <div className={styles.emptyLarge}>
                    <div>★</div>
                    <h3>No reviews yet</h3>
                    <p>
                      Your submitted reviews will appear here.
                    </p>
                  </div>
                ) : (
                  <div className={styles.reviewGrid}>
                    {reviews.map((review) => (
                      <article
                        className={styles.reviewCard}
                        key={review.id}
                      >
                        <div className={styles.stars}>
                          {"★".repeat(review.rating)}
                          {"☆".repeat(5 - review.rating)}
                        </div>

                        <h3>
                          {jobMap[review.job_id]?.title ||
                            `Job #${review.job_id}`}
                        </h3>

                        {review.comment && (
                          <p>&quot;{review.comment}&quot;</p>
                        )}

                        <small>
                          {formatDateTime(review.created_at)}
                        </small>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* =================================================
                PROFILE
            ================================================== */}
            {activeTab === "profile" && (
              <>
                <div className={styles.contentHeader}>
                  <div>
                    <p className={styles.smallLabel}>MY ALPHA</p>
                    <h2>My Profile</h2>
                    <p>
                      Keep your contact and property information
                      up to date.
                    </p>
                  </div>
                </div>

                <div className={styles.profilePanel}>
                  <div className={styles.profilePanelTop}>
                    <div className={styles.profileAvatarLarge}>
                      {profile.full_name
                        ?.charAt(0)
                        .toUpperCase() || "A"}
                    </div>

                    <div>
                      <h3>
                        {profile.full_name || "Your Name"}
                      </h3>

                      <p>
                        Client account ·{" "}
                        {profile.email}
                      </p>
                    </div>
                  </div>

                  <form
                    className={styles.profileForm}
                    onSubmit={handleProfileSave}
                  >
                    <div className={styles.formGrid}>
                      <label>
                        Full Name
                        <input
                          value={profileForm.full_name}
                          onChange={(event) =>
                            setProfileForm({
                              ...profileForm,
                              full_name: event.target.value,
                            })
                          }
                          required
                        />
                      </label>

                      <label>
                        Email
                        <input
                          type="email"
                          value={profileForm.email}
                          readOnly
                        />

                        <small>
                          Your login email is managed through your
                          account.
                        </small>
                      </label>

                      <label>
                        Phone
                        <input
                          value={profileForm.phone}
                          onChange={(event) =>
                            setProfileForm({
                              ...profileForm,
                              phone: event.target.value,
                            })
                          }
                        />
                      </label>

                      <label>
                        Address
                        <input
                          value={profileForm.address}
                          onChange={(event) =>
                            setProfileForm({
                              ...profileForm,
                              address: event.target.value,
                            })
                          }
                        />
                      </label>

                      <label>
                        City
                        <input
                          value={profileForm.city}
                          onChange={(event) =>
                            setProfileForm({
                              ...profileForm,
                              city: event.target.value,
                            })
                          }
                        />
                      </label>

                      <label>
                        Postcode
                        <input
                          value={profileForm.postcode}
                          onChange={(event) =>
                            setProfileForm({
                              ...profileForm,
                              postcode: event.target.value,
                            })
                          }
                        />
                      </label>
                    </div>

                    <button
                      className={styles.saveButton}
                      type="submit"
                      disabled={savingProfile}
                    >
                      {savingProfile
                        ? "Saving..."
                        : "Save Profile"}
                    </button>
                  </form>
                </div>
              </>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}