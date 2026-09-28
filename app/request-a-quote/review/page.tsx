"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./review.module.css";

type CustomerType =
  | "Homeowner"
  | "Landlord"
  | "Letting Agent / Property Manager"
  | "Tenant"
  | "Business / Commercial Customer"
  | "Other"
  | string;

type AttachmentCategory = "Photo" | "Video" | "Document";
type AttachmentStatus = "ready" | "uploading" | "uploaded" | "failed" | "saving" | "saved" | string;

type Step17Data = {
  enquiryId?: string;
  emergency?: "Yes" | "No" | "";
  customerType?: CustomerType;
  firstName?: string;
  lastName?: string;
  organisationName?: string;
  email?: string;
  phone?: string;
  preferredContactMethod?: string;
  postcode?: string;
  marketingConsent?: boolean;
  marketingConsentTimestamp?: string;
};

type Step18Form = {
  primaryService?: string;
  multipleServices?: string[];
  jobDescription?: string;
  customerGoal?: string;
  maintenanceTypes?: string[];
  activeDamage?: string;
  renovationPlan?: string;
  renovationStage?: string;
  plumbingTypes?: string[];
  waterEscaping?: string;
  bathroomNeed?: string;
  bathroomProducts?: string;
  kitchenNeed?: string;
  kitchenPurchased?: string;
  tilingTypes?: string[];
  tilingProducts?: string;
  decoratingAreas?: string[];
  decoratingPreparation?: string;
  roofingIssues?: string[];
  waterEntering?: string;
  gardenWork?: string[];
  gardenFrequency?: string;
  gardenWaste?: string;
  landlordNeeds?: string[];
  rentalStatus?: string;
  jobCount?: string;
  propertyCount?: string;
  timescale?: string;
  productsStatus?: string;
  productsDetails?: string;
  hasMeasurements?: string;
  measurements?: string;
};

type AttachmentMeta = {
  id: string;
  category: AttachmentCategory;
  name: string;
  type: string;
  size: number;
  status: AttachmentStatus;
  createdAt: string;
};

type Step18Snapshot = {
  enquiryId?: string;
  emergency?: "Yes" | "No" | "";
  customerType?: string;
  firstName?: string;
  lastName?: string;
  organisationName?: string;
  email?: string;
  phone?: string;
  preferredContactMethod?: string;
  postcode?: string;
  form?: Step18Form;
  step2CompletedAt?: string | null;
  attachments?: AttachmentMeta[];
};

type PropertyDetailsForm = {
  addressLine1: string;
  addressLine2: string;
  townCity: string;
  county: string;
  postcode: string;
  addressLookupStatus: string;
  isAlsoHomeContactAddress: "Yes" | "No" | "";
  propertyType: string;
  flatFloor: string;
  propertySize: string;
  occupancy: string;
  shouldContactTenant: "Yes" | "No" | "To be confirmed" | "";
  tenantName: string;
  tenantPhone: string;
  tenantEmail: string;
  landlordAgentName: string;
  landlordAgentContact: string;
  accessMethod: string;
  accessNotes: string;
  externalAccessType: string;
  externalAccessNotes: string;
  parkingType: string;
  parkingNotes: string;
  problemLocation: string;
  propertyAge: string;
  listedRestrictions: "Yes" | "No" | "";
  listedRestrictionsNotes: string;
  waterStopTapKnown: "Yes" | "No" | "";
  propertyCondition: string;
  commercialPropertyType: string;
  restrictedWorkingHours: "Yes" | "No" | "";
  commercialAccessTimes: string;
  portfolioMode: string;
  portfolioAreaPostcodes: string;
  portfolioPropertyCount: string;
  portfolioNotes: string;
  petsAtProperty: boolean;
  additionalNotes: string;
};

type Step19Draft = {
  enquiryId: string;
  step3CompletedAt: string | null;
  form: PropertyDetailsForm;
  propertyPhotos: AttachmentMeta[];
};

type StoredAttachment = AttachmentMeta & {
  enquiryId: string;
  file: File;
};

type StoredPropertyPhoto = AttachmentMeta & {
  enquiryId: string;
  file: File;
};

type SubmittedEnquiry = {
  reference: string;
  submittedAt: string;
  enquiryId: string;
  emergency: "Yes" | "No" | "";
};

type ReviewPayload = {
  idempotencyKey: string;
  enquiryId: string;
  reference: string;
  submittedAt: string;
  customer: Step17Data;
  service: Step18Form;
  property: PropertyDetailsForm;
  attachments: AttachmentMeta[];
  propertyPhotos: AttachmentMeta[];
};

const STEP17_STORAGE_KEY = "alphaQuoteRequest";
const STEP18_STORAGE_KEY = "alphaQuoteServiceDetails";
const STEP19_STORAGE_KEY = "alphaQuotePropertyDetails";
const SUBMITTED_STORAGE_KEY = "alphaQuoteSubmittedEnquiry";
const SUBMITTED_PAYLOAD_KEY = "alphaQuoteSubmittedPayload";
const IDEMPOTENCY_STORAGE_KEY = "alphaQuoteSubmissionIdempotencyKey";

const ATTACHMENT_DB_NAME = "alphaQuoteAttachments";
const ATTACHMENT_DB_VERSION = 1;
const ATTACHMENT_STORE_NAME = "attachments";
const PROPERTY_PHOTO_DB_NAME = "alphaQuotePropertyAttachments";
const PROPERTY_PHOTO_DB_VERSION = 1;
const PROPERTY_PHOTO_STORE_NAME = "propertyPhotos";

function createId(prefix = "alpha") {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function getOrCreateIdempotencyKey() {
  if (typeof window === "undefined") return createId("idempotency");
  const existing = window.sessionStorage.getItem(IDEMPOTENCY_STORAGE_KEY);
  if (existing) return existing;
  const created = createId("idempotency");
  window.sessionStorage.setItem(IDEMPOTENCY_STORAGE_KEY, created);
  return created;
}

function readSession<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.sessionStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

function formatFileSize(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function formatUkDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function generateReference() {
  const randomPart = Math.random().toString(36).toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6).padEnd(6, "X");
  return `AQ-${randomPart}`;
}

function trackQuoteEvent(eventName: string) {
  if (typeof window === "undefined") return;
  try {
    const win = window as Window & { dataLayer?: Array<Record<string, unknown>> };
    win.dataLayer?.push({ event: eventName });
  } catch {
    // Analytics must never interfere with submission.
  }
}

function openDatabase(name: string, version: number, storeName: string): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !("indexedDB" in window)) {
      reject(new Error("IndexedDB is not available."));
      return;
    }

    const request = window.indexedDB.open(name, version);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(storeName)) {
        database.createObjectStore(storeName, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Unable to open local attachment storage."));
  });
}

async function loadStoredAttachments(enquiryId: string): Promise<StoredAttachment[]> {
  try {
    const database = await openDatabase(ATTACHMENT_DB_NAME, ATTACHMENT_DB_VERSION, ATTACHMENT_STORE_NAME);
    return await new Promise<StoredAttachment[]>((resolve, reject) => {
      const transaction = database.transaction(ATTACHMENT_STORE_NAME, "readonly");
      const request = transaction.objectStore(ATTACHMENT_STORE_NAME).getAll();
      request.onsuccess = () => {
        database.close();
        const rows = request.result as StoredAttachment[];
        resolve(rows.filter((item) => item.enquiryId === enquiryId));
      };
      request.onerror = () => {
        database.close();
        reject(request.error ?? new Error("Unable to load attachments."));
      };
    });
  } catch {
    return [];
  }
}

async function loadStoredPropertyPhotos(enquiryId: string): Promise<StoredPropertyPhoto[]> {
  try {
    const database = await openDatabase(PROPERTY_PHOTO_DB_NAME, PROPERTY_PHOTO_DB_VERSION, PROPERTY_PHOTO_STORE_NAME);
    return await new Promise<StoredPropertyPhoto[]>((resolve, reject) => {
      const transaction = database.transaction(PROPERTY_PHOTO_STORE_NAME, "readonly");
      const request = transaction.objectStore(PROPERTY_PHOTO_STORE_NAME).getAll();
      request.onsuccess = () => {
        database.close();
        const rows = request.result as StoredPropertyPhoto[];
        resolve(rows.filter((item) => item.enquiryId === enquiryId));
      };
      request.onerror = () => {
        database.close();
        reject(request.error ?? new Error("Unable to load property photos."));
      };
    });
  } catch {
    return [];
  }
}

function buildConditionalAnswers(form: Step18Form) {
  const answers: Array<{ label: string; value: string }> = [];
  const addArray = (label: string, value?: string[]) => {
    if (value && value.length > 0) answers.push({ label, value: value.join(", ") });
  };
  const addValue = (label: string, value?: string) => {
    if (value && value.trim()) answers.push({ label, value });
  };

  addArray("Maintenance", form.maintenanceTypes);
  addValue("Active damage", form.activeDamage);
  addValue("Renovation plan", form.renovationPlan);
  addValue("Renovation stage", form.renovationStage);
  addArray("Plumbing work", form.plumbingTypes);
  addValue("Water escaping", form.waterEscaping);
  addValue("Bathroom requirement", form.bathroomNeed);
  addValue("Bathroom products", form.bathroomProducts);
  addValue("Kitchen requirement", form.kitchenNeed);
  addValue("Kitchen purchased", form.kitchenPurchased);
  addArray("Tiling / flooring", form.tilingTypes);
  addValue("Tiles / flooring purchased", form.tilingProducts);
  addArray("Decorating areas", form.decoratingAreas);
  addValue("Decorating preparation", form.decoratingPreparation);
  addArray("Roofing / gutter issues", form.roofingIssues);
  addValue("Water entering", form.waterEntering);
  addArray("Garden work", form.gardenWork);
  addValue("Garden frequency", form.gardenFrequency);
  addValue("Garden waste", form.gardenWaste);
  addArray("Landlord / rental needs", form.landlordNeeds);
  addValue("Rental status", form.rentalStatus);

  return answers;
}

function isMissingStep17(data: Step17Data | null) {
  if (!data) return true;
  return !(
    data.enquiryId?.trim() &&
    data.firstName?.trim() &&
    data.lastName?.trim() &&
    data.email?.trim() &&
    data.phone?.trim() &&
    data.preferredContactMethod?.trim() &&
    data.postcode?.trim()
  );
}

function isMissingStep18(data: Step18Snapshot | null) {
  const form = data?.form;
  if (!form) return true;
  return Boolean(!data?.enquiryId?.trim() || !form.primaryService || !form.jobDescription?.trim() || !form.jobCount || !form.timescale);
}

function isMissingStep19(data: Step19Draft | null) {
  const form = data?.form;
  if (!form) return true;
  return !(
    data?.enquiryId?.trim() &&
    form.addressLine1?.trim() &&
    form.townCity?.trim() &&
    form.postcode?.trim() &&
    form.propertyType
  );
}

function isSuccessfulAttachment(status: AttachmentStatus) {
  return status === "uploaded" || status === "ready";
}

function isSuccessfulPropertyPhoto(status: AttachmentStatus) {
  return status === "saved" || status === "uploaded" || status === "ready";
}

function ReviewRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className={styles.reviewRow}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SectionHeader({ title, editHref, editText }: { title: string; editHref: string; editText: string }) {
  return (
    <div className={styles.cardHeader}>
      <h2>{title}</h2>
      <Link href={editHref} className={styles.editLink}>{editText}</Link>
    </div>
  );
}

export default function ReviewPage() {
  const router = useRouter();
  const [step17, setStep17] = useState<Step17Data | null>(null);
  const [step18, setStep18] = useState<Step18Snapshot | null>(null);
  const [step19, setStep19] = useState<Step19Draft | null>(null);
  const [enquiryId, setEnquiryId] = useState("");
  const [attachments, setAttachments] = useState<StoredAttachment[]>([]);
  const [propertyPhotos, setPropertyPhotos] = useState<StoredPropertyPhoto[]>([]);
  const [attachmentPreviewUrls, setAttachmentPreviewUrls] = useState<Record<string, string>>({});
  const [propertyPhotoPreviewUrls, setPropertyPhotoPreviewUrls] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [redirectPath, setRedirectPath] = useState("");
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState<SubmittedEnquiry | null>(null);

  const isApiMode = process.env.NEXT_PUBLIC_QUOTE_SUBMISSION_MODE === "api";

  useEffect(() => {
    document.title = "Review & Send | Request a Quote | Alpha";

    const description = "Review your Alpha Property & Gardening Services quote request before sending it.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    const savedSubmitted = readSession<SubmittedEnquiry>(SUBMITTED_STORAGE_KEY);
    if (savedSubmitted?.reference && savedSubmitted?.submittedAt && savedSubmitted?.enquiryId) {
      setSubmitted(savedSubmitted);
      setHydrated(true);
      return;
    }

    const saved17 = readSession<Step17Data>(STEP17_STORAGE_KEY);
    const saved18 = readSession<Step18Snapshot>(STEP18_STORAGE_KEY);
    const saved19 = readSession<Step19Draft>(STEP19_STORAGE_KEY);

    let destination = "";
    if (isMissingStep17(saved17)) destination = "/request-a-quote";
    else if (isMissingStep18(saved18)) destination = "/request-a-quote/service-details";
    else if (isMissingStep19(saved19)) destination = "/request-a-quote/property-details";

    if (destination) {
      setRedirectPath(destination);
      setRedirecting(true);
      router.replace(destination);
      return;
    }

    const id = saved17?.enquiryId ?? saved18?.enquiryId ?? saved19?.enquiryId ?? createId("enquiry");
    setStep17(saved17);
    setStep18(saved18);
    setStep19(saved19);
    setEnquiryId(id);

    void Promise.all([loadStoredAttachments(id), loadStoredPropertyPhotos(id)]).then(([loadedAttachments, loadedPhotos]) => {
      setAttachments(loadedAttachments);
      setPropertyPhotos(loadedPhotos);
    });

    trackQuoteEvent("quote_review_started");
    setHydrated(true);
  }, [router]);

  useEffect(() => {
    const urls: Record<string, string> = {};
    attachments.forEach((attachment) => {
      if (attachment.category === "Photo" && isSuccessfulAttachment(attachment.status)) {
        try {
          urls[attachment.id] = URL.createObjectURL(attachment.file);
        } catch {
          // Ignore preview errors.
        }
      }
    });
    setAttachmentPreviewUrls(urls);
    return () => Object.values(urls).forEach((url) => URL.revokeObjectURL(url));
  }, [attachments]);

  useEffect(() => {
    const urls: Record<string, string> = {};
    propertyPhotos.forEach((photo) => {
      if (isSuccessfulPropertyPhoto(photo.status)) {
        try {
          urls[photo.id] = URL.createObjectURL(photo.file);
        } catch {
          // Ignore preview errors.
        }
      }
    });
    setPropertyPhotoPreviewUrls(urls);
    return () => Object.values(urls).forEach((url) => URL.revokeObjectURL(url));
  }, [propertyPhotos]);

  const emergency = step17?.emergency === "Yes";
  const fullName = [step17?.firstName, step17?.lastName].filter(Boolean).join(" ");
  const serviceForm = step18?.form ?? {};
  const propertyForm = step19?.form;
  const conditionalAnswers = useMemo(() => buildConditionalAnswers(serviceForm), [serviceForm]);
  const mainService = serviceForm.primaryService || "Not provided";
  const additionalServices = (serviceForm.multipleServices ?? []).filter(Boolean);

  const successfulAttachments = attachments.filter((attachment) => isSuccessfulAttachment(attachment.status));
  const successfulPropertyPhotos = propertyPhotos.filter((photo) => isSuccessfulPropertyPhoto(photo.status));
  const photoAttachments = successfulAttachments.filter((attachment) => attachment.category === "Photo");
  const videoAttachments = successfulAttachments.filter((attachment) => attachment.category === "Video");
  const documentAttachments = successfulAttachments.filter((attachment) => attachment.category === "Document");

  const jobAddressLines = [
    propertyForm?.addressLine1,
    propertyForm?.addressLine2,
    propertyForm?.townCity,
    propertyForm?.county,
    propertyForm?.postcode,
  ].filter(Boolean) as string[];

  const tenantDetails = [
    propertyForm?.shouldContactTenant ? `Alpha contact tenant: ${propertyForm.shouldContactTenant}` : "",
    propertyForm?.tenantName ? `Tenant: ${propertyForm.tenantName}` : "",
    propertyForm?.tenantPhone ? `Phone: ${propertyForm.tenantPhone}` : "",
    propertyForm?.tenantEmail ? `Email: ${propertyForm.tenantEmail}` : "",
    propertyForm?.landlordAgentName ? `Landlord / agent: ${propertyForm.landlordAgentName}` : "",
    propertyForm?.landlordAgentContact ? `Contact: ${propertyForm.landlordAgentContact}` : "",
  ].filter(Boolean).join(" · ");

  const hasPortfolio = propertyForm?.portfolioMode === "No — this is a portfolio / multi-property requirement";

  async function submitQuoteRequest() {
    if (!step17 || !step18 || !step19 || !propertyForm) {
      throw new Error("Quote information is incomplete.");
    }

    const submittedAt = new Date().toISOString();
    const reference = generateReference();
    const idempotencyKey = getOrCreateIdempotencyKey();

    const payload: ReviewPayload = {
      idempotencyKey,
      enquiryId,
      reference,
      submittedAt,
      customer: step17,
      service: serviceForm,
      property: propertyForm,
      attachments: successfulAttachments.map(({ file: _file, enquiryId: _enquiryId, ...metadata }) => metadata),
      propertyPhotos: successfulPropertyPhotos.map(({ file: _file, enquiryId: _enquiryId, ...metadata }) => metadata),
    };

    if (!isApiMode) {
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      window.sessionStorage.setItem(SUBMITTED_PAYLOAD_KEY, JSON.stringify(payload));
      return { reference, submittedAt };
    }

    const formData = new FormData();
    formData.append("payload", JSON.stringify(payload));
    successfulAttachments.forEach((attachment) => formData.append("attachments", attachment.file, attachment.name));
    successfulPropertyPhotos.forEach((photo) => formData.append("propertyPhotos", photo.file, photo.name));

    const response = await fetch("/api/quote-requests", {
      method: "POST",
      headers: { "Idempotency-Key": idempotencyKey },
      body: formData,
    });

    let responseData: { reference?: string; stored?: boolean; notificationFailed?: boolean; message?: string } = {};
    try {
      responseData = (await response.json()) as typeof responseData;
    } catch {
      // Use the HTTP status below.
    }

    if (!response.ok) {
      throw new Error(responseData.message || "We couldn’t send your request. Your information is still here. Please try again.");
    }

    // A successful stored enquiry remains a success even when a separate notification reports failure.
    if (responseData.stored === false) {
      throw new Error(responseData.message || "We couldn’t send your request. Your information is still here. Please try again.");
    }

    if (responseData.notificationFailed) {
      trackQuoteEvent("quote_internal_notification_failed_after_storage");
    }

    return { reference: responseData.reference || reference, submittedAt };
  }

  async function handleSubmit() {
    if (sending) return;
    setSubmitError("");

    if (!step17 || !step18 || !step19) {
      setSubmitError("We couldn’t send your request because some quote information is missing. Please go back to the earlier step.");
      return;
    }

    if (!confirmed) {
      setSubmitError("Please confirm that the information provided is accurate and agree to the privacy / processing statement.");
      return;
    }

    if (successfulAttachments.length !== attachments.length) {
      setSubmitError("One or more attached files have not finished uploading or could not be saved. Please wait for them to finish or remove the failed file before sending.");
      return;
    }

    if (successfulPropertyPhotos.length !== propertyPhotos.length) {
      setSubmitError("One or more property/access photos have not finished saving. Please wait for them to finish or remove the failed photo before sending.");
      return;
    }

    setSending(true);
    trackQuoteEvent("quote_submission_attempted");

    try {
      const result = await submitQuoteRequest();
      const submittedRecord: SubmittedEnquiry = {
        reference: result.reference,
        submittedAt: result.submittedAt,
        enquiryId,
        emergency: step17.emergency ?? "",
      };

      window.sessionStorage.setItem(SUBMITTED_STORAGE_KEY, JSON.stringify(submittedRecord));
      setSubmitted(submittedRecord);
      trackQuoteEvent("quote_submitted");
    } catch (error) {
      const message = error instanceof Error ? error.message : "We couldn’t send your request. Your information is still here. Please try again.";
      setSubmitError(message || "We couldn’t send your request. Your information is still here. Please try again.");
      trackQuoteEvent("quote_submission_failed");
    } finally {
      setSending(false);
    }
  }

  if (redirecting) {
    return (
      <main className={styles.page}>
        <Header />
        <div className={styles.loadingScreen}>
          <div className={styles.loadingSpinner} />
          <p>Redirecting to the previous quote step…</p>
          {redirectPath ? (
            <Link href={redirectPath} className={styles.secondarySuccessButton}>
              CONTINUE
            </Link>
          ) : null}
        </div>
        <Footer />
      </main>
    );
  }

  if (!hydrated) {
    return (
      <main className={styles.page}>
        <Header />
        <div className={styles.loadingScreen}>
          <div className={styles.loadingSpinner} />
          <p>Restoring your quote request…</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (submitted) {
    return (
      <main className={styles.page}>
        <Header />
        <section className={styles.successHero}>
          <div className={styles.successGlow} />
          <div className={`${styles.container} ${styles.successContent}`}>
            <div className={styles.successIcon}>✓</div>
            <div className={styles.eyebrow}>QUOTE REQUEST RECEIVED</div>
            <h1>Thank You — We’ve Received Your Quote Request</h1>
            <p>We’ll review the information you’ve provided and contact you regarding the appropriate next step.</p>
            <div className={styles.referenceCard}>
              <span>YOUR REFERENCE</span>
              <strong>{submitted.reference}</strong>
              <small>Submitted {formatUkDate(submitted.submittedAt)}</small>
            </div>

            {submitted.emergency === "Yes" ? (
              <div className={styles.successEmergency}>
                <strong>THIS REQUEST IS MARKED AS URGENT</strong>
                <p>If this is an active emergency and you have not already called us, please call 01775 518068 now.</p>
                <a href="tel:01775518068">24/7 EMERGENCY CALL — 01775 518068</a>
              </div>
            ) : null}
          </div>
        </section>

        <section className={styles.successBody}>
          <div className={`${styles.container} ${styles.successGrid}`}>
            <div className={styles.successMainCard}>
              <h2>What Happens Next?</h2>
              <div className={styles.nextStepList}>
                <div><span>1</span><section><strong>Alpha Receives Your Enquiry</strong><p>We’ve received the information, photos and files you provided.</p></section></div>
                <div><span>2</span><section><strong>We Review the Work</strong><p>We’ll review the information you’ve provided and decide the appropriate next step.</p></section></div>
                <div><span>3</span><section><strong>We Contact You</strong><p>We may ask for more information, discuss the work or arrange an assessment.</p></section></div>
                <div><span>4</span><section><strong>Quote / Next Step</strong><p>Where a quotation can be prepared, the agreed scope and next steps will be confirmed with you.</p></section></div>
              </div>

              <div className={styles.successDisclaimer}>
                <strong>Important</strong>
                <p>We’ll review the information you’ve provided and contact you regarding the appropriate next step. Some work may require a property assessment before a quotation can be confirmed.</p>
              </div>
            </div>

            <aside className={styles.successSide}>
              <div className={styles.successSideCard}>
                <span>YOUR REFERENCE</span>
                <h3>{submitted.reference}</h3>
                <p>Keep this reference if you need to contact Alpha about this enquiry.</p>
                <a href="tel:01775518068">01775 518068</a>
                <a href="mailto:info@alphapropertyandgardening.co.uk">info@alphapropertyandgardening.co.uk</a>
              </div>
              <div className={styles.successButtons}>
                <Link href="/" className={styles.primarySuccessButton}>RETURN TO HOME</Link>
                <Link href="/services" className={styles.secondarySuccessButton}>VIEW OUR SERVICES</Link>
              </div>
            </aside>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (!step17 || !step18 || !step19 || !propertyForm) {
    return null;
  }

  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.eyebrow}><span />STEP 4 OF 4</div>
          <h1>Review Your Quote Request</h1>
          <p>Check the information below before sending your request to Alpha.</p>
          <p>If anything needs changing, use the Edit links beside each section.</p>
          <p>When everything looks right, send your request and we’ll review the information you’ve provided.</p>
        </div>
      </section>

      <section className={styles.progressBar}>
        <div className={styles.container}>
          <div className={styles.progressGrid}>
            {["Your Details", "Service Details", "Property Details", "Review & Send"].map((label, index) => (
              <div key={label} className={`${styles.progressItem} ${index === 3 ? styles.progressActive : styles.progressComplete}`}>
                <span>{index + 1}</span>
                <div><small>{index === 3 ? "FINAL" : label.toUpperCase()}</small><strong>{label}{index < 3 ? " ✓" : ""}</strong></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`${styles.container} ${styles.layout}`}>
        <main className={styles.main}>
          {emergency ? (
            <section className={styles.emergencyBanner}>
              <div>
                <span className={styles.emergencyLabel}>URGENT</span>
                <h2>THIS REQUEST IS MARKED AS URGENT</h2>
                <p>If there is an active property or plumbing emergency, please call Alpha directly as well as submitting this form.</p>
                <strong>24/7 EMERGENCY CALL — 01775 518068</strong>
                <a href="tel:01775518068" className={styles.emergencyButton}>CALL NOW</a>
              </div>
            </section>
          ) : null}

          <section className={styles.reviewCard}>
            <SectionHeader title="Your Details" editHref="/request-a-quote" editText="EDIT YOUR DETAILS" />
            <div className={styles.reviewGrid}>
              <ReviewRow label="Customer Type" value={step17.customerType} />
              <ReviewRow label="Name" value={fullName} />
              <ReviewRow label="Organisation" value={step17.organisationName} />
              <ReviewRow label="Email" value={step17.email} />
              <ReviewRow label="Phone" value={step17.phone} />
              <ReviewRow label="Preferred Contact Method" value={step17.preferredContactMethod} />
              <ReviewRow label="Customer Postcode" value={step17.postcode} />
              <ReviewRow label="Emergency Status" value={step17.emergency === "Yes" ? "Yes — urgent help" : "No — planned work"} />
            </div>
          </section>

          <section className={styles.reviewCard}>
            <SectionHeader title="Service Details" editHref="/request-a-quote/service-details" editText="EDIT SERVICE DETAILS" />
            <div className={styles.reviewGrid}>
              <ReviewRow label="Main Service" value={mainService} />
              <ReviewRow label="Additional Services" value={additionalServices.length ? additionalServices.join(", ") : "None recorded"} />
              <ReviewRow label="One / Several Jobs / Multiple Properties" value={serviceForm.jobCount} />
              <ReviewRow label="Desired Timescale" value={serviceForm.timescale} />
              <ReviewRow label="Approximate Properties" value={serviceForm.propertyCount} />
              <ReviewRow label="Materials" value={serviceForm.productsStatus} />
            </div>

            <div className={`${styles.reviewRow} ${styles.fullRow}`}>
              <span>Job Description</span>
              <strong className={styles.longValue}>{serviceForm.jobDescription || "Not provided"}</strong>
            </div>

            {serviceForm.customerGoal ? <div className={styles.noteBlock}><span>Customer Goal</span><p>{serviceForm.customerGoal}</p></div> : null}

            {conditionalAnswers.length > 0 ? (
              <div className={styles.answerBlock}>
                <h3>Relevant Service Answers</h3>
                <div className={styles.answerList}>
                  {conditionalAnswers.map((answer) => (
                    <div key={`${answer.label}-${answer.value}`}><span>{answer.label}</span><strong>{answer.value}</strong></div>
                  ))}
                </div>
              </div>
            ) : null}

            {serviceForm.measurements ? (
              <div className={styles.noteBlock}><span>Measurements</span><p>{serviceForm.measurements}</p></div>
            ) : null}

            {serviceForm.productsDetails ? (
              <div className={styles.noteBlock}><span>Materials / Products Already Available</span><p>{serviceForm.productsDetails}</p></div>
            ) : null}
          </section>

          <section className={styles.reviewCard}>
            <SectionHeader title="Photos & Files" editHref="/request-a-quote/service-details" editText="EDIT / ADD FILES" />
            <div className={styles.attachmentSummary}>
              <div><span>PHOTOS</span><strong>{photoAttachments.length} attached</strong></div>
              <div><span>VIDEOS</span><strong>{videoAttachments.length} attached</strong></div>
              <div><span>DOCUMENTS</span><strong>{documentAttachments.length} attached</strong></div>
            </div>

            {photoAttachments.length > 0 ? (
              <div className={styles.attachmentGroup}>
                <h3>Job Photos</h3>
                <div className={styles.photoPreviewGrid}>
                  {photoAttachments.map((attachment) => (
                    <div key={attachment.id} className={styles.previewCard}>
                      {attachmentPreviewUrls[attachment.id] ? <img src={attachmentPreviewUrls[attachment.id]} alt={attachment.name} /> : <div className={styles.previewPlaceholder}>PHOTO</div>}
                      <div className={styles.previewInfo}><strong title={attachment.name}>{attachment.name}</strong><small>{formatFileSize(attachment.size)}</small></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {videoAttachments.length > 0 ? (
              <div className={styles.attachmentGroup}>
                <h3>Videos</h3>
                <div className={styles.fileList}>
                  {videoAttachments.map((attachment) => (
                    <div key={attachment.id} className={styles.fileRow}><span className={styles.fileIcon}>▶</span><div><strong>{attachment.name}</strong><small>Video attached · {formatFileSize(attachment.size)}</small></div></div>
                  ))}
                </div>
              </div>
            ) : null}

            {documentAttachments.length > 0 ? (
              <div className={styles.attachmentGroup}>
                <h3>Documents</h3>
                <div className={styles.fileList}>
                  {documentAttachments.map((attachment) => (
                    <div key={attachment.id} className={styles.fileRow}><span className={styles.fileIcon}>PDF</span><div><strong>{attachment.name}</strong><small>Document attached · {formatFileSize(attachment.size)}</small></div></div>
                  ))}
                </div>
              </div>
            ) : null}

            {successfulAttachments.length === 0 ? <div className={styles.emptyAttachments}>No Step 18 photos, videos or documents were added.</div> : null}
          </section>

          <section className={styles.reviewCard}>
            <SectionHeader title="Property Details" editHref="/request-a-quote/property-details" editText="EDIT PROPERTY DETAILS" />

            <div className={styles.reviewGrid}>
              <div className={`${styles.reviewRow} ${styles.fullRow}`}>
                <span>Job Address</span>
                <strong className={styles.addressValue}>{jobAddressLines.map((line) => <span key={line}>{line}</span>)}</strong>
              </div>
              <ReviewRow label="Property Type" value={propertyForm.propertyType} />
              <ReviewRow label="Property Size" value={propertyForm.propertySize} />
              <ReviewRow label="Occupancy" value={propertyForm.occupancy} />
              <ReviewRow label="Access" value={propertyForm.accessMethod} />
              <ReviewRow label="Parking" value={propertyForm.parkingType} />
              <ReviewRow label="External Access" value={propertyForm.externalAccessType} />
              <ReviewRow label="Height / Floor" value={propertyForm.flatFloor || propertyForm.problemLocation} />
              <ReviewRow label="Tenant / Agent Details" value={tenantDetails} />
              <ReviewRow label="Property Age" value={propertyForm.propertyAge} />
              <ReviewRow label="Property Condition" value={propertyForm.propertyCondition} />
            </div>

            {propertyForm.accessNotes ? <div className={styles.noteBlock}><span>Access Notes</span><p>{propertyForm.accessNotes}</p></div> : null}
            {propertyForm.externalAccessNotes ? <div className={styles.noteBlock}><span>External Access Notes</span><p>{propertyForm.externalAccessNotes}</p></div> : null}
            {propertyForm.parkingNotes ? <div className={styles.noteBlock}><span>Parking Notes</span><p>{propertyForm.parkingNotes}</p></div> : null}
            {propertyForm.additionalNotes ? <div className={styles.noteBlock}><span>Additional Property Notes</span><p>{propertyForm.additionalNotes}</p></div> : null}
            {propertyForm.petsAtProperty ? <div className={styles.simpleFlag}>There may be pets at the property.</div> : null}

            {hasPortfolio ? (
              <div className={styles.portfolioBlock}>
                <h3>Multiple Property Requirement</h3>
                <div className={styles.reviewGrid}>
                  <ReviewRow label="Main Area / Postcodes" value={propertyForm.portfolioAreaPostcodes} />
                  <ReviewRow label="Approximate Number of Properties" value={propertyForm.portfolioPropertyCount} />
                </div>
                {propertyForm.portfolioNotes ? <p>{propertyForm.portfolioNotes}</p> : null}
                <div className={styles.inlineNotice}>Alpha can discuss the wider portfolio directly rather than requiring one full online form per property.</div>
              </div>
            ) : null}

            {successfulPropertyPhotos.length > 0 ? (
              <div className={styles.propertyPhotoSection}>
                <div className={styles.propertyPhotoHeader}>
                  <div><h3>Property / Access Photos</h3><p>{successfulPropertyPhotos.length} attached</p></div>
                  <Link href="/request-a-quote/property-details">EDIT / ADD</Link>
                </div>
                <div className={styles.photoPreviewGrid}>
                  {successfulPropertyPhotos.map((photo) => (
                    <div key={photo.id} className={styles.previewCard}>
                      {propertyPhotoPreviewUrls[photo.id] ? <img src={propertyPhotoPreviewUrls[photo.id]} alt={photo.name} /> : <div className={styles.previewPlaceholder}>PHOTO</div>}
                      <div className={styles.previewInfo}><strong>{photo.name}</strong><small>{formatFileSize(photo.size)}</small></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          <section className={styles.whatHappensCard}>
            <h2>What Happens After You Submit?</h2>
            <div className={styles.nextStepGrid}>
              <div><span>1</span><h3>Alpha Receives Your Enquiry</h3><p>We’ll receive the information, photos and files you’ve provided.</p></div>
              <div><span>2</span><h3>We Review the Work</h3><p>We’ll review the details and decide the appropriate next step.</p></div>
              <div><span>3</span><h3>We Contact You</h3><p>We may ask for more information, discuss the work, arrange an assessment or prepare a quotation where sufficient information is available.</p></div>
              <div><span>4</span><h3>Quote / Next Step</h3><p>Where a quotation can be prepared, the agreed scope and next steps will be confirmed with you.</p></div>
            </div>
          </section>

          <section className={styles.disclaimerCard}>
            <h2>Before You Send</h2>
            <div className={styles.checklist}>
              <span>✓ Contact details are correct</span>
              <span>✓ Job description is accurate</span>
              <span>✓ Property address is correct</span>
              <span>✓ Photos/files have finished uploading</span>
              {emergency ? <span>✓ Emergency customers have been shown the emergency phone number</span> : null}
            </div>

            <div className={styles.quoteDisclaimer}>
              <p>The information you provide helps Alpha assess your enquiry. Some work may require a property visit, additional measurements or further discussion before a final quotation can be confirmed.</p>
              <p>Any quotation will be based on the agreed scope of work. If additional or previously hidden work is identified later, this will be discussed before additional work proceeds wherever reasonably possible.</p>
            </div>

            {step17.customerType === "Tenant" ? <div className={styles.authorityNotice}>Where landlord or property-owner approval is required, Alpha may need to obtain or confirm that authorisation before planned work proceeds.</div> : null}
            {step17.customerType === "Letting Agent / Property Manager" ? <div className={styles.authorityNotice}>By submitting this request, you confirm that you are authorised to provide the property and contact information included in the enquiry for the purpose of arranging or assessing the requested work.</div> : null}

            {successfulAttachments.length + successfulPropertyPhotos.length > 0 ? (
              <div className={styles.fileConfirmation}>By submitting files, you confirm that you are authorised to share them with Alpha for the purpose of assessing this enquiry.</div>
            ) : null}

            <label className={styles.confirmationCheck}>
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(event) => {
                  setConfirmed(event.target.checked);
                  if (event.target.checked) setSubmitError("");
                }}
              />
              <span>
                I confirm that the information provided is accurate to the best of my knowledge and agree that Alpha Property &amp; Gardening Services can use it to assess and respond to my enquiry. <Link href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</Link>
              </span>
            </label>
          </section>

          {submitError ? (
            <section className={styles.submitError} role="alert">
              <h2>We Couldn’t Send Your Request</h2>
              <p>{submitError}</p>
              <div className={styles.errorContact}><span>01775 518068</span><span>info@alphapropertyandgardening.co.uk</span></div>
              <p>Your information is still here. Please try again.</p>
              <button type="button" className={styles.secondarySuccessButton} disabled={sending} onClick={() => void handleSubmit()}>TRY AGAIN</button>
            </section>
          ) : null}

          <section className={styles.finalSubmitSection}>
            <div>
              <span className={styles.finalEyebrow}>READY TO SEND?</span>
              <h2>Check your details above, make any changes you need, then send your request to Alpha.</h2>
            </div>

            {emergency ? <a href="tel:01775518068" className={styles.finalEmergencyLink}>24/7 EMERGENCY CALL — 01775 518068</a> : null}

            <div className={styles.finalButtons}>
              <button type="button" className={styles.backButton} disabled={sending} onClick={() => router.push("/request-a-quote/property-details")}>← BACK TO PROPERTY DETAILS</button>
              <button type="button" className={styles.sendButton} disabled={sending || !confirmed} onClick={() => void handleSubmit()}>{sending ? "Sending…" : "SEND QUOTE REQUEST"}</button>
            </div>

            {!confirmed ? <p className={styles.confirmHint}>Please confirm the accuracy and privacy statement above before sending.</p> : null}
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <span className={styles.sidebarEyebrow}>FINAL STEP</span>
            <h2>Review &amp; Send</h2>
            <div className={styles.sidebarProgress}>
              <div><span>1</span><strong>Your Details ✓</strong></div>
              <div><span>2</span><strong>Service Details ✓</strong></div>
              <div><span>3</span><strong>Property Details ✓</strong></div>
              <div className={styles.sidebarCurrent}><span>4</span><strong>Review &amp; Send</strong></div>
            </div>
            <p className={styles.sidebarNote}>Check the information above before sending your quote request to Alpha.</p>
          </div>

          <div className={styles.sidebarSummary}>
            <span>MAIN SERVICE</span><strong>{mainService}</strong>
            <span>JOB POSTCODE</span><strong>{propertyForm.postcode || "Not provided"}</strong>
            <span>ATTACHMENTS</span><strong>{successfulAttachments.length + successfulPropertyPhotos.length} file{successfulAttachments.length + successfulPropertyPhotos.length === 1 ? "" : "s"}</strong>
          </div>

          {emergency ? <div className={styles.sidebarEmergency}><span>URGENT / EMERGENCY</span><h3>Need urgent help?</h3><p>Please call Alpha directly as well as submitting this form.</p><a href="tel:01775518068">01775 518068</a></div> : null}

          <div className={styles.sidebarContact}>
            <strong>Need to speak to Alpha?</strong>
            <a href="tel:01775518068">01775 518068</a>
            <a href="mailto:info@alphapropertyandgardening.co.uk">info@alphapropertyandgardening.co.uk</a>
          </div>

          <Link href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</Link>
        </aside>
      </div>
      <Footer />
    </main>
  );
}
