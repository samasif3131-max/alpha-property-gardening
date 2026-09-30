"use client";

import Link from "next/link";
import "./service-details.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

type PrimaryService =
  | "Property Maintenance & Repairs"
  | "Property Renovation"
  | "Plumbing"
  | "Bathroom"
  | "Kitchen"
  | "Tiling & Flooring"
  | "Painting & Decorating"
  | "Roofing & Gutters"
  | "Garden Services"
  | "Landlord / Rental Property Work"
  | "Multiple Services"
  | "Not Sure"
  | "";

type UrgencyChoice = "Yes" | "No" | "Not sure" | "";

type JobCount =
  | "One job"
  | "Several jobs at the same property"
  | "Work across more than one property"
  | "";

type Timescale =
  | "As soon as reasonably possible"
  | "Within 1–2 weeks"
  | "Within the next month"
  | "Within 1–3 months"
  | "No fixed timescale"
  | "Just planning / gathering information"
  | "";

type YesNo = "Yes" | "No" | "";

type AttachmentCategory = "Photo" | "Video" | "Document";

type AttachmentStatus =
  | "ready"
  | "uploading"
  | "uploaded"
  | "failed";

type Attachment = {
  id: string;
  enquiryId: string;
  category: AttachmentCategory;
  name: string;
  type: string;
  size: number;
  status: AttachmentStatus;
  createdAt: string;
  file: File;
};

type ServiceDetailsForm = {
  primaryService: PrimaryService;

  multipleServices: string[];

  jobDescription: string;
  customerGoal: string;

  maintenanceTypes: string[];
  activeDamage: UrgencyChoice;

  renovationPlan: string;
  renovationStage: string;

  plumbingTypes: string[];
  waterEscaping: UrgencyChoice;

  bathroomNeed: string;
  bathroomProducts: string;

  kitchenNeed: string;
  kitchenPurchased: string;

  tilingTypes: string[];
  tilingProducts: string;

  decoratingAreas: string[];
  decoratingPreparation: UrgencyChoice;

  roofingIssues: string[];
  waterEntering: UrgencyChoice;

  gardenWork: string[];
  gardenFrequency: string;
  gardenWaste: UrgencyChoice;

  landlordNeeds: string[];
  rentalStatus: string;

  jobCount: JobCount;
  propertyCount: string;

  timescale: Timescale;

  productsStatus: string;
  productsDetails: string;

  hasMeasurements: YesNo;
  measurements: string;
};

type Step17Data = {
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
};

type QuoteDraft = {
  enquiryId: string;
  enquiryStatus: "Draft Quote Request";
  emergency: "Yes" | "No" | "";
  customerType: string;
  firstName: string;
  lastName: string;
  organisationName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  postcode: string;
  step1: Step17Data;
  step2: ServiceDetailsForm;
  step2CompletedAt: string | null;
  attachments: {
    id: string;
    category: AttachmentCategory;
    name: string;
    type: string;
    size: number;
    status: AttachmentStatus;
    createdAt: string;
  }[];
};

const STEP17_STORAGE_KEY = "alphaQuoteRequest";
const STEP18_STORAGE_KEY = "alphaQuoteServiceDetails";

const ATTACHMENT_DB_NAME = "alphaQuoteAttachments";
const ATTACHMENT_DB_VERSION = 1;
const ATTACHMENT_STORE_NAME = "attachments";

const PRIMARY_SERVICES: Exclude<PrimaryService, "">[] = [
  "Property Maintenance & Repairs",
  "Property Renovation",
  "Plumbing",
  "Bathroom",
  "Kitchen",
  "Tiling & Flooring",
  "Painting & Decorating",
  "Roofing & Gutters",
  "Garden Services",
  "Landlord / Rental Property Work",
  "Multiple Services",
  "Not Sure",
];

const MULTIPLE_SERVICE_OPTIONS = [
  "Property Maintenance & Repairs",
  "Property Renovation",
  "Plumbing",
  "Bathroom",
  "Kitchen",
  "Tiling & Flooring",
  "Painting & Decorating",
  "Roofing & Gutters",
  "Garden Services",
  "Other",
];

const MAINTENANCE_OPTIONS = [
  "General repair",
  "Door / fitting",
  "Wall or ceiling repair",
  "Carpentry",
  "Sealant / regrouting",
  "Exterior maintenance",
  "Several small jobs",
  "Other",
];

const PLUMBING_OPTIONS = [
  "Leak",
  "Burst / damaged pipe",
  "Tap",
  "Toilet / cistern",
  "Sink / basin",
  "Waste pipe",
  "Bathroom plumbing",
  "Kitchen plumbing",
  "Plumbing installation",
  "Other",
];

const TILING_OPTIONS = [
  "Wall tiling",
  "Floor tiling",
  "Bathroom tiling",
  "Kitchen splashback",
  "Tile repairs",
  "Regrouting",
  "Sealant replacement",
  "Flooring installation",
  "Flooring replacement",
  "Preparation",
  "Other",
];

const DECORATING_OPTIONS = [
  "One room",
  "Several rooms",
  "Whole property",
  "Walls",
  "Ceilings",
  "Woodwork",
  "Suitable exterior areas",
  "Rental / void property",
  "Other",
];

const ROOFING_OPTIONS = [
  "Roof leak / water ingress",
  "Damaged roof area",
  "Blocked gutter",
  "Leaking gutter",
  "Damaged gutter",
  "Gutter replacement",
  "Downpipe problem",
  "Fascia / soffit maintenance",
  "Storm / weather damage",
  "Not sure",
];

const GARDEN_OPTIONS = [
  "Grass cutting / mowing",
  "Strimming",
  "Hedge / shrub cutting",
  "Weeding",
  "Garden tidy-up",
  "Overgrown garden clearance",
  "Recurring maintenance",
  "End-of-tenancy / landlord garden",
  "Other",
];

const LANDLORD_OPTIONS = [
  "Tenant-reported repair",
  "Void-property work",
  "End-of-tenancy repairs",
  "Plumbing",
  "Decorating",
  "Bathroom",
  "Kitchen",
  "Flooring",
  "Garden",
  "Renovation / refurbishment",
  "Recurring maintenance",
  "Multiple jobs",
  "Other",
];

const initialForm: ServiceDetailsForm = {
  primaryService: "",
  multipleServices: [],

  jobDescription: "",
  customerGoal: "",

  maintenanceTypes: [],
  activeDamage: "",

  renovationPlan: "",
  renovationStage: "",

  plumbingTypes: [],
  waterEscaping: "",

  bathroomNeed: "",
  bathroomProducts: "",

  kitchenNeed: "",
  kitchenPurchased: "",

  tilingTypes: [],
  tilingProducts: "",

  decoratingAreas: [],
  decoratingPreparation: "",

  roofingIssues: [],
  waterEntering: "",

  gardenWork: [],
  gardenFrequency: "",
  gardenWaste: "",

  landlordNeeds: [],
  rentalStatus: "",

  jobCount: "",
  propertyCount: "",

  timescale: "",

  productsStatus: "",
  productsDetails: "",

  hasMeasurements: "",
  measurements: "",
};

function createId(prefix = "alpha") {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function getOrCreateEnquiryId(step17: Step17Data | null) {
  if (step17?.enquiryId) {
    return step17.enquiryId;
  }

  return createId("enquiry");
}

function getStep17Data(): Step17Data {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const saved = window.sessionStorage.getItem(STEP17_STORAGE_KEY);

    if (!saved) {
      return {};
    }

    const parsed: unknown = JSON.parse(saved);

    if (parsed && typeof parsed === "object") {
      return parsed as Step17Data;
    }
  } catch {
    // Ignore invalid session storage.
  }

  return {};
}

function openAttachmentDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !("indexedDB" in window)) {
      reject(new Error("IndexedDB is not available."));
      return;
    }

    const request = window.indexedDB.open(
      ATTACHMENT_DB_NAME,
      ATTACHMENT_DB_VERSION,
    );

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(ATTACHMENT_STORE_NAME)) {
        database.createObjectStore(ATTACHMENT_STORE_NAME, {
          keyPath: "id",
        });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(
        request.error ??
          new Error("Unable to open attachment storage."),
      );
    };
  });
}

function saveAttachmentToIndexedDb(attachment: Attachment) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const database = await openAttachmentDatabase();

      const transaction = database.transaction(
        ATTACHMENT_STORE_NAME,
        "readwrite",
      );

      transaction.objectStore(ATTACHMENT_STORE_NAME).put({
        id: attachment.id,
        enquiryId: attachment.enquiryId,
        category: attachment.category,
        name: attachment.name,
        type: attachment.type,
        size: attachment.size,
        status: attachment.status,
        createdAt: attachment.createdAt,
        file: attachment.file,
      });

      transaction.oncomplete = () => {
        database.close();
        resolve();
      };

      transaction.onerror = () => {
        database.close();

        reject(
          transaction.error ??
            new Error("Unable to save the attachment."),
        );
      };
    } catch (error) {
      reject(error);
    }
  });
}

function deleteAttachmentFromIndexedDb(id: string) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const database = await openAttachmentDatabase();

      const transaction = database.transaction(
        ATTACHMENT_STORE_NAME,
        "readwrite",
      );

      transaction.objectStore(ATTACHMENT_STORE_NAME).delete(id);

      transaction.oncomplete = () => {
        database.close();
        resolve();
      };

      transaction.onerror = () => {
        database.close();

        reject(
          transaction.error ??
            new Error("Unable to remove the attachment."),
        );
      };
    } catch (error) {
      reject(error);
    }
  });
}

async function loadAttachmentsFromIndexedDb(
  enquiryId: string,
): Promise<Attachment[]> {
  try {
    const database = await openAttachmentDatabase();

    return await new Promise<Attachment[]>((resolve, reject) => {
      const transaction = database.transaction(
        ATTACHMENT_STORE_NAME,
        "readonly",
      );

      const request = transaction
        .objectStore(ATTACHMENT_STORE_NAME)
        .getAll();

      request.onsuccess = () => {
        database.close();

        const rows = request.result as Attachment[];

        resolve(
          rows.filter(
            (attachment) => attachment.enquiryId === enquiryId,
          ),
        );
      };

      request.onerror = () => {
        database.close();

        reject(
          request.error ??
            new Error("Unable to load attachments."),
        );
      };
    });
  } catch {
    return [];
  }
}

function formatFileSize(size: number) {
  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${Math.round(size / 1024)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function isImageFile(file: File) {
  const type = file.type.toLowerCase();

  return (
    type === "image/jpeg" ||
    type === "image/png" ||
    type === "image/webp" ||
    type === "image/heic" ||
    type === "image/heif" ||
    /\.(jpe?g|png|webp|heic|heif)$/i.test(file.name)
  );
}

function isVideoFile(file: File) {
  const type = file.type.toLowerCase();

  return (
    type === "video/mp4" ||
    type === "video/quicktime" ||
    /\.(mp4|mov)$/i.test(file.name)
  );
}

function isDocumentFile(file: File) {
  const type = file.type.toLowerCase();

  return (
    type === "application/pdf" ||
    isImageFile(file) ||
    /\.(pdf|jpe?g|png|webp|heic|heif)$/i.test(file.name)
  );
}

function toggleArrayValue(
  current: string[],
  value: string,
): string[] {
  if (current.includes(value)) {
    return current.filter((item) => item !== value);
  }

  return [...current, value];
}

function getDraftStep17(): Step17Data {
  return getStep17Data();
}

function RadioGroup({
  name,
  value,
  options,
  onChange,
  error,
}: {
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="alphaRadioGrid">
        {options.map((option) => (
          <label
            key={option}
            className={`alphaRadioCard ${
              value === option ? "alphaRadioCardActive" : ""
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>

      {error ? (
        <p className="alphaFieldError" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function CheckboxGrid({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="alphaCheckboxGrid">
      {options.map((option) => {
        const checked = values.includes(option);

        return (
          <label
            key={option}
            className={`alphaCheckboxCard ${
              checked ? "alphaCheckboxCardActive" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onChange(option)}
            />

            <span>{option}</span>
          </label>
        );
      })}
    </div>
  );
}

function FieldLabel({
  children,
  required = false,
}: {
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label className="alphaFieldLabel">
      {children}
      {required ? <span className="alphaRequired"> *</span> : null}
    </label>
  );
}

export default function ServiceDetailsPage() {
  const [form, setForm] =
    useState<ServiceDetailsForm>(initialForm);

  const [step17, setStep17] = useState<Step17Data>({});
  const [enquiryId, setEnquiryId] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [errors, setErrors] =
    useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [notice, setNotice] = useState("");
  const [attachmentError, setAttachmentError] =
    useState("");

  const photoInputRef =
    useRef<HTMLInputElement | null>(null);

  const videoInputRef =
    useRef<HTMLInputElement | null>(null);

  const documentInputRef =
    useRef<HTMLInputElement | null>(null);

  /*
   * SEO / browser title
   */
  useEffect(() => {
    document.title =
      "Service Details | Request a Quote | Alpha";

    const description =
      "Tell Alpha Property & Gardening Services what work you need, add relevant details and upload photos, videos or supporting documents for your quote request.";

    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    const savedStep17 = getDraftStep17();
    const generatedEnquiryId =
      getOrCreateEnquiryId(savedStep17);

    setStep17(savedStep17);
    setEnquiryId(generatedEnquiryId);

    try {
      const savedStep18 =
        window.sessionStorage.getItem(
          STEP18_STORAGE_KEY,
        );

      if (savedStep18) {
        const parsed: unknown =
          JSON.parse(savedStep18);

        if (
          parsed &&
          typeof parsed === "object"
        ) {
          const savedForm = (
            parsed as {
              form?: ServiceDetailsForm;
            }
          ).form;

          if (savedForm) {
            setForm({
              ...initialForm,
              ...savedForm,
            });
          }
        }
      }
    } catch {
      // Ignore invalid saved Step 2 data.
    }

    void loadAttachmentsFromIndexedDb(
      generatedEnquiryId,
    ).then((loaded) => {
      setAttachments(loaded);
    });

    setHydrated(true);
  }, []);

  /*
   * Persist Step 2 automatically.
   * This means going back to Step 1 and returning to Step 2
   * does not lose the entered information.
   */
  useEffect(() => {
    if (!hydrated || !enquiryId) {
      return;
    }

    const draft = {
      enquiryId,
      emergency: step17.emergency ?? "",
      customerType: step17.customerType ?? "",
      firstName: step17.firstName ?? "",
      lastName: step17.lastName ?? "",
      organisationName:
        step17.organisationName ?? "",
      email: step17.email ?? "",
      phone: step17.phone ?? "",
      preferredContactMethod:
        step17.preferredContactMethod ?? "",
      postcode: step17.postcode ?? "",
      form,
      step2CompletedAt: null,
      attachments: attachments.map(
        (attachment) => ({
          id: attachment.id,
          category: attachment.category,
          name: attachment.name,
          type: attachment.type,
          size: attachment.size,
          status: attachment.status,
          createdAt: attachment.createdAt,
        }),
      ),
    };

    window.sessionStorage.setItem(
      STEP18_STORAGE_KEY,
      JSON.stringify(draft),
    );
  }, [
    form,
    attachments,
    enquiryId,
    step17,
    hydrated,
  ]);

  const emergencySelected =
    step17.emergency === "Yes";

  const multiplePropertiesSelected =
    form.jobCount ===
    "Work across more than one property";

  const selectedPhotoCount = useMemo(
    () =>
      attachments.filter(
        (attachment) =>
          attachment.category === "Photo",
      ).length,
    [attachments],
  );

  const selectedVideoCount = useMemo(
    () =>
      attachments.filter(
        (attachment) =>
          attachment.category === "Video",
      ).length,
    [attachments],
  );

  const selectedDocumentCount = useMemo(
    () =>
      attachments.filter(
        (attachment) =>
          attachment.category === "Document",
      ).length,
    [attachments],
  );

  function updateForm<K extends keyof ServiceDetailsForm>(
    key: K,
    value: ServiceDetailsForm[K],
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    setErrors((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function handleTextChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    const field =
      event.target.name as keyof ServiceDetailsForm;

    updateForm(
      field,
      event.target.value as never,
    );
  }

  function handlePrimaryServiceChange(
    service: PrimaryService,
  ) {
    setForm((current) => ({
      ...current,
      primaryService: service,
      multipleServices:
        service === "Multiple Services"
          ? current.multipleServices
          : [],
    }));

    setErrors((current) => {
      const next = { ...current };
      delete next.primaryService;
      return next;
    });
  }

  function validate() {
    const nextErrors: Record<
      string,
      string
    > = {};

    if (!form.primaryService) {
      nextErrors.primaryService =
        "Please select the main service you need.";
    }

    /*
     * Not Sure is intentionally allowed to continue.
     * The customer only needs to describe what they need.
     */
    if (!form.jobDescription.trim()) {
      nextErrors.jobDescription =
        "Please tell us what needs doing.";
    }

    if (!form.jobCount) {
      nextErrors.jobCount =
        "Please tell us whether this is one job or several.";
    }

    if (!form.timescale) {
      nextErrors.timescale =
        "Please select your preferred timescale.";
    }

    if (
      form.primaryService ===
      "Multiple Services"
    ) {
      if (
        form.multipleServices.length === 0
      ) {
        nextErrors.multipleServices =
          "Please select the services involved, or choose Other.";
      }
    }

    return nextErrors;
  }

  function buildDraft(
    completedAt: string | null,
  ): QuoteDraft {
    return {
      enquiryId,
      enquiryStatus: "Draft Quote Request",
      emergency:
        step17.emergency ?? "",
      customerType:
        step17.customerType ?? "",
      firstName:
        step17.firstName ?? "",
      lastName:
        step17.lastName ?? "",
      organisationName:
        step17.organisationName ?? "",
      email:
        step17.email ?? "",
      phone:
        step17.phone ?? "",
      preferredContactMethod:
        step17.preferredContactMethod ?? "",
      postcode:
        step17.postcode ?? "",
      step1: step17,
      step2: form,
      step2CompletedAt: completedAt,
      attachments:
        attachments.map(
          (attachment) => ({
            id: attachment.id,
            category:
              attachment.category,
            name: attachment.name,
            type: attachment.type,
            size: attachment.size,
            status:
              attachment.status,
            createdAt:
              attachment.createdAt,
          }),
        ),
    };
  }

  async function handleContinue(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const validationErrors =
      validate();

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors);

      const firstErrorKey =
        Object.keys(
          validationErrors,
        )[0];

      const target =
        document.getElementById(
          firstErrorKey,
        );

      target?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    setSaving(true);
    setNotice("");

    const completedAt =
      new Date().toISOString();

    const draft =
      buildDraft(completedAt);

    window.sessionStorage.setItem(
      STEP18_STORAGE_KEY,
      JSON.stringify(draft),
    );

    setNotice(
      "Service details saved. Moving to Property Details.",
    );

    /*
     * Step 2 only saves the draft.
     * It does NOT submit the final enquiry.
     */
    window.setTimeout(() => {
      window.location.href =
        "/request-a-quote/property-details";
    }, 250);
  }

  function handleBack() {
    /*
     * Explicitly save the current Step 2 data
     * before returning to Step 1.
     */
    const draft =
      buildDraft(null);

    window.sessionStorage.setItem(
      STEP18_STORAGE_KEY,
      JSON.stringify(draft),
    );

    window.location.href =
      "/request-a-quote";
  }

  async function addAttachments(
    files: FileList | null,
    category: AttachmentCategory,
  ) {
    if (!files || !enquiryId) {
      return;
    }

    setAttachmentError("");

    const incomingFiles =
      Array.from(files);

    if (
      category === "Photo"
    ) {
      const availableSlots =
        Math.max(
          0,
          15 - selectedPhotoCount,
        );

      if (availableSlots === 0) {
        setAttachmentError(
          "You can add up to 15 photos to this quote request.",
        );
        return;
      }

      if (
        incomingFiles.length >
        availableSlots
      ) {
        setAttachmentError(
          `You can add ${availableSlots} more photo${
            availableSlots === 1
              ? ""
              : "s"
          }.`,
        );
      }
    }

    if (
      category === "Video"
    ) {
      if (
        selectedVideoCount >= 3
      ) {
        setAttachmentError(
          "You can add up to 3 short videos to this quote request.",
        );
        return;
      }
    }

    const accepted: File[] = [];

    for (
      const file of incomingFiles
    ) {
      if (
        category === "Photo" &&
        !isImageFile(file)
      ) {
        continue;
      }

      if (
        category === "Video" &&
        !isVideoFile(file)
      ) {
        continue;
      }

      if (
        category === "Document" &&
        !isDocumentFile(file)
      ) {
        continue;
      }

      if (
        category === "Video" &&
        file.size >
          100 * 1024 * 1024
      ) {
        setAttachmentError(
          "This video is too large to upload. Please choose a shorter video or send photographs instead.",
        );
        continue;
      }

      accepted.push(file);
    }

    if (
      accepted.length === 0
    ) {
      if (!attachmentError) {
        setAttachmentError(
          "We couldn't use that file. Please choose a supported file type and try again.",
        );
      }

      return;
    }

    const limitedFiles =
      category === "Photo"
        ? accepted.slice(
            0,
            Math.max(
              0,
              15 - selectedPhotoCount,
            ),
          )
        : category === "Video"
          ? accepted.slice(
              0,
              Math.max(
                0,
                3 - selectedVideoCount,
              ),
            )
          : accepted;

    for (
      const file of limitedFiles
    ) {
      const attachment: Attachment =
        {
          id: createId(
            "attachment",
          ),
          enquiryId,
          category,
          name: file.name,
          type:
            file.type ||
            "application/octet-stream",
          size: file.size,
          status: "uploading",
          createdAt:
            new Date().toISOString(),
          file,
        };

      setAttachments(
        (current) => [
          ...current,
          attachment,
        ],
      );

      try {
        await saveAttachmentToIndexedDb(
          attachment,
        );

        const uploadedAttachment: Attachment =
          {
            ...attachment,
            status:
              "uploaded",
          };

        await saveAttachmentToIndexedDb(
          uploadedAttachment,
        );

        setAttachments(
          (current) =>
            current.map(
              (item) =>
                item.id ===
                attachment.id
                  ? uploadedAttachment
                  : item,
            ),
        );
      } catch {
        const failedAttachment: Attachment =
          {
            ...attachment,
            status: "failed",
          };

        setAttachments(
          (current) =>
            current.map(
              (item) =>
                item.id ===
                attachment.id
                  ? failedAttachment
                  : item,
            ),
        );

        setAttachmentError(
          "We couldn't upload this file. Please try again or remove it and continue.",
        );
      }
    }
  }

  async function removeAttachment(
    id: string,
  ) {
    await deleteAttachmentFromIndexedDb(
      id,
    );

    setAttachments(
      (current) =>
        current.filter(
          (attachment) =>
            attachment.id !== id,
        ),
    );
  }

  async function retryAttachment(
    attachment: Attachment,
  ) {
    setAttachmentError("");

    setAttachments(
      (current) =>
        current.map(
          (item) =>
            item.id ===
            attachment.id
              ? {
                  ...item,
                  status:
                    "uploading",
                }
              : item,
        ),
    );

    try {
      await saveAttachmentToIndexedDb(
        {
          ...attachment,
          status: "uploaded",
        },
      );

      setAttachments(
        (current) =>
          current.map(
            (item) =>
              item.id ===
              attachment.id
                ? {
                    ...item,
                    status:
                      "uploaded",
                  }
                : item,
          ),
      );
    } catch {
      setAttachments(
        (current) =>
          current.map(
            (item) =>
              item.id ===
              attachment.id
                ? {
                    ...item,
                    status:
                      "failed",
                  }
                : item,
          ),
      );

      setAttachmentError(
        "We couldn't upload this file. Please try again or remove it and continue.",
      );
    }
  }

  function renderConditionalQuestions() {
    switch (
      form.primaryService
    ) {
      case "Property Maintenance & Repairs":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Maintenance Details
            </h2>

            <FieldLabel>
              What Type of Maintenance Do You Need?
            </FieldLabel>

            <CheckboxGrid
              options={
                MAINTENANCE_OPTIONS
              }
              values={
                form.maintenanceTypes
              }
              onChange={(value) =>
                updateForm(
                  "maintenanceTypes",
                  toggleArrayValue(
                    form.maintenanceTypes,
                    value,
                  ),
                )
              }
            />

            <div className="alphaField">
              <FieldLabel>
                Is Anything Currently Causing Active Damage?
              </FieldLabel>

              <RadioGroup
                name="activeDamage"
                value={
                  form.activeDamage
                }
                options={[
                  "Yes",
                  "No",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "activeDamage",
                    value as UrgencyChoice,
                  )
                }
              />

              {form.activeDamage ===
              "Yes" ? (
                <div className="alphaInlineNotice">
                  If there is active property damage or an urgent
                  plumbing issue, please call{" "}
                  <a href="tel:01775518068">
                    01775 518068
                  </a>
                  .
                </div>
              ) : null}
            </div>
          </section>
        );

      case "Property Renovation":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Renovation Details
            </h2>

            <div className="alphaField">
              <FieldLabel>
                What Are You Planning?
              </FieldLabel>

              <RadioGroup
                name="renovationPlan"
                value={
                  form.renovationPlan
                }
                options={[
                  "One room",
                  "Several rooms",
                  "Complete property renovation",
                  "Rental / investment property refurbishment",
                  "Not sure yet",
                ]}
                onChange={(value) =>
                  updateForm(
                    "renovationPlan",
                    value,
                  )
                }
              />
            </div>

            <div className="alphaField">
              <FieldLabel>
                What Stage Are You At?
              </FieldLabel>

              <RadioGroup
                name="renovationStage"
                value={
                  form.renovationStage
                }
                options={[
                  "Exploring options",
                  "Ready for quotation",
                  "Property recently purchased",
                  "Property currently vacant",
                  "Work already started",
                  "Other",
                ]}
                onChange={(value) =>
                  updateForm(
                    "renovationStage",
                    value,
                  )
                }
              />
            </div>
          </section>
        );

      case "Plumbing":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Plumbing Details
            </h2>

            <FieldLabel>
              What Type of Plumbing Work?
            </FieldLabel>

            <CheckboxGrid
              options={
                PLUMBING_OPTIONS
              }
              values={
                form.plumbingTypes
              }
              onChange={(value) =>
                updateForm(
                  "plumbingTypes",
                  toggleArrayValue(
                    form.plumbingTypes,
                    value,
                  ),
                )
              }
            />

            <div className="alphaField">
              <FieldLabel>
                Is Water Currently Escaping?
              </FieldLabel>

              <RadioGroup
                name="waterEscaping"
                value={
                  form.waterEscaping
                }
                options={[
                  "Yes",
                  "No",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "waterEscaping",
                    value as UrgencyChoice,
                  )
                }
              />

              {form.waterEscaping ===
              "Yes" ? (
                <div className="alphaEmergencyInline">
                  <strong>
                    Please call 01775 518068
                    for urgent assistance.
                  </strong>

                  <a href="tel:01775518068">
                    CALL 01775 518068
                  </a>
                </div>
              ) : null}
            </div>
          </section>
        );

      case "Bathroom":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Bathroom Details
            </h2>

            <div className="alphaField">
              <FieldLabel>
                What Do You Need?
              </FieldLabel>

              <RadioGroup
                name="bathroomNeed"
                value={
                  form.bathroomNeed
                }
                options={[
                  "Complete bathroom renovation",
                  "New bathroom installation",
                  "Partial bathroom upgrade",
                  "Replace bath",
                  "Replace shower",
                  "Replace toilet",
                  "Replace basin / vanity",
                  "Tiling / flooring",
                  "Bathroom repair",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "bathroomNeed",
                    value,
                  )
                }
              />
            </div>

            <div className="alphaField">
              <FieldLabel>
                Are You Supplying the Bathroom Products?
              </FieldLabel>

              <RadioGroup
                name="bathroomProducts"
                value={
                  form.bathroomProducts
                }
                options={[
                  "Yes",
                  "No",
                  "Some items",
                  "Not decided yet",
                ]}
                onChange={(value) =>
                  updateForm(
                    "bathroomProducts",
                    value,
                  )
                }
              />
            </div>

            <p className="alphaSupportingText">
              If you have a bathroom plan,
              product list or inspiration
              image, you can upload it below.
            </p>
          </section>
        );

      case "Kitchen":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Kitchen Details
            </h2>

            <div className="alphaField">
              <FieldLabel>
                What Do You Need?
              </FieldLabel>

              <RadioGroup
                name="kitchenNeed"
                value={
                  form.kitchenNeed
                }
                options={[
                  "Complete kitchen renovation",
                  "Kitchen installation",
                  "Partial kitchen upgrade",
                  "Replace worktops",
                  "Sink / tap work",
                  "Units / cabinets",
                  "Tiling / flooring",
                  "Kitchen repair",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "kitchenNeed",
                    value,
                  )
                }
              />
            </div>

            <div className="alphaField">
              <FieldLabel>
                Have You Already Purchased the Kitchen?
              </FieldLabel>

              <RadioGroup
                name="kitchenPurchased"
                value={
                  form.kitchenPurchased
                }
                options={[
                  "Yes",
                  "No",
                  "Ordered but not delivered",
                  "Still deciding",
                ]}
                onChange={(value) =>
                  updateForm(
                    "kitchenPurchased",
                    value,
                  )
                }
              />
            </div>
          </section>
        );

      case "Tiling & Flooring":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Tiling & Flooring Details
            </h2>

            <FieldLabel>
              What Work Is Required?
            </FieldLabel>

            <CheckboxGrid
              options={
                TILING_OPTIONS
              }
              values={
                form.tilingTypes
              }
              onChange={(value) =>
                updateForm(
                  "tilingTypes",
                  toggleArrayValue(
                    form.tilingTypes,
                    value,
                  ),
                )
              }
            />

            <div className="alphaField">
              <FieldLabel>
                Have You Already Purchased the Tiles or Flooring?
              </FieldLabel>

              <RadioGroup
                name="tilingProducts"
                value={
                  form.tilingProducts
                }
                options={[
                  "Yes",
                  "No",
                  "Not yet",
                ]}
                onChange={(value) =>
                  updateForm(
                    "tilingProducts",
                    value,
                  )
                }
              />
            </div>
          </section>
        );

      case "Painting & Decorating":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Painting & Decorating Details
            </h2>

            <FieldLabel>
              What Do You Need Decorated?
            </FieldLabel>

            <CheckboxGrid
              options={
                DECORATING_OPTIONS
              }
              values={
                form.decoratingAreas
              }
              onChange={(value) =>
                updateForm(
                  "decoratingAreas",
                  toggleArrayValue(
                    form.decoratingAreas,
                    value,
                  ),
                )
              }
            />

            <div className="alphaField">
              <FieldLabel>
                Is Preparation or Repair Work Required?
              </FieldLabel>

              <RadioGroup
                name="decoratingPreparation"
                value={
                  form.decoratingPreparation
                }
                options={[
                  "Yes",
                  "No",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "decoratingPreparation",
                    value as UrgencyChoice,
                  )
                }
              />
            </div>
          </section>
        );

      case "Roofing & Gutters":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Roofing & Gutters Details
            </h2>

            <FieldLabel>
              What Have You Noticed?
            </FieldLabel>

            <CheckboxGrid
              options={
                ROOFING_OPTIONS
              }
              values={
                form.roofingIssues
              }
              onChange={(value) =>
                updateForm(
                  "roofingIssues",
                  toggleArrayValue(
                    form.roofingIssues,
                    value,
                  ),
                )
              }
            />

            <div className="alphaField">
              <FieldLabel>
                Is Water Currently Entering the Property?
              </FieldLabel>

              <RadioGroup
                name="waterEntering"
                value={
                  form.waterEntering
                }
                options={[
                  "Yes",
                  "No",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "waterEntering",
                    value as UrgencyChoice,
                  )
                }
              />

              {form.waterEntering ===
              "Yes" ? (
                <div className="alphaEmergencyInline">
                  <strong>
                    If water is currently entering
                    the property, please call
                    01775 518068.
                  </strong>

                  <a href="tel:01775518068">
                    CALL 01775 518068
                  </a>
                </div>
              ) : null}
            </div>
          </section>
        );

      case "Garden Services":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Garden Details
            </h2>

            <FieldLabel>
              What Garden Work Do You Need?
            </FieldLabel>

            <CheckboxGrid
              options={
                GARDEN_OPTIONS
              }
              values={
                form.gardenWork
              }
              onChange={(value) =>
                updateForm(
                  "gardenWork",
                  toggleArrayValue(
                    form.gardenWork,
                    value,
                  ),
                )
              }
            />

            <div className="alphaField">
              <FieldLabel>
                Is This?
              </FieldLabel>

              <RadioGroup
                name="gardenFrequency"
                value={
                  form.gardenFrequency
                }
                options={[
                  "One-off work",
                  "Regular maintenance",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "gardenFrequency",
                    value,
                  )
                }
              />
            </div>

            <div className="alphaField">
              <FieldLabel>
                Would you like garden-waste
                removal included where
                available?
              </FieldLabel>

              <RadioGroup
                name="gardenWaste"
                value={
                  form.gardenWaste
                }
                options={[
                  "Yes",
                  "No",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "gardenWaste",
                    value as UrgencyChoice,
                  )
                }
              />
            </div>
          </section>
        );

      case "Landlord / Rental Property Work":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Landlord / Rental Property Details
            </h2>

            <FieldLabel>
              What Does the Property Need?
            </FieldLabel>

            <CheckboxGrid
              options={
                LANDLORD_OPTIONS
              }
              values={
                form.landlordNeeds
              }
              onChange={(value) =>
                updateForm(
                  "landlordNeeds",
                  toggleArrayValue(
                    form.landlordNeeds,
                    value,
                  ),
                )
              }
            />

            <div className="alphaField">
              <FieldLabel>
                Is the Property Currently?
              </FieldLabel>

              <RadioGroup
                name="rentalStatus"
                value={
                  form.rentalStatus
                }
                options={[
                  "Occupied",
                  "Vacant",
                  "Between tenancies",
                  "Being renovated",
                  "Other",
                ]}
                onChange={(value) =>
                  updateForm(
                    "rentalStatus",
                    value,
                  )
                }
              />
            </div>

            <p className="alphaSupportingText">
              More detailed property and access
              questions will be covered in the
              next step.
            </p>
          </section>
        );

      case "Multiple Services":
        return (
          <section className="alphaConditionalSection">
            <h2>
              Which Services Are Involved?
            </h2>

            <div id="multipleServices">
              <CheckboxGrid
                options={
                  MULTIPLE_SERVICE_OPTIONS
                }
                values={
                  form.multipleServices
                }
                onChange={(value) =>
                  updateForm(
                    "multipleServices",
                    toggleArrayValue(
                      form.multipleServices,
                      value,
                    ),
                  )
                }
              />
            </div>

            {errors.multipleServices ? (
              <p
                className="alphaFieldError"
                role="alert"
              >
                {errors.multipleServices}
              </p>
            ) : null}

            <div className="alphaGreenNote">
              If you have a list of different jobs
              at the property, include everything
              below. Alpha can assess suitable work
              together rather than requiring separate
              enquiries.

              <strong>
                One enquiry. One team. One point of
                contact.
              </strong>
            </div>
          </section>
        );

      case "Not Sure":
        return (
          <section className="alphaNotSureBox">
            <strong>
              Not sure which service you need?
            </strong>

            <p>
              That&apos;s fine. Describe what needs
              doing and upload photographs where
              possible. We&apos;ll review the
              information and determine which Alpha
              service is most appropriate.
            </p>

            <p>
              You can continue without selecting a
              specific trade or service.
            </p>
          </section>
        );

      default:
        return null;
    }
  }

  return (
    <main className="alphaQuotePage">
      <Header />

      <section className="alphaQuoteHero">
        <div className="alphaQuoteHeroOverlay" />

        <div className="alphaQuoteContainer alphaQuoteHeroContent">
          <div className="alphaEyebrow">
            <span />
            STEP 2 OF 4
          </div>

          <h1>
            Tell Us What You Need
          </h1>

          <p>
            Give us as much information as you
            can about the work you need.
          </p>

          <p>
            Photos and videos are particularly
            useful and may help us understand the
            job before arranging an assessment.
          </p>

          <p>
            You don&apos;t need to know the
            technical name for the problem — just
            describe what you&apos;re seeing and
            what you&apos;d like Alpha to help with.
          </p>
        </div>
      </section>

      <section className="alphaQuoteProgress">
        <div className="alphaQuoteContainer">
          <div className="alphaProgressGrid">
            <div className="alphaProgressItem alphaProgressComplete">
              <span>1</span>

              <div>
                <small>
                  YOUR DETAILS
                </small>

                <strong>
                  Your Details ✓
                </strong>
              </div>
            </div>

            <div className="alphaProgressItem alphaProgressActive">
              <span>2</span>

              <div>
                <small>
                  STEP 2 OF 4
                </small>

                <strong>
                  Service Details
                </strong>
              </div>
            </div>

            <div className="alphaProgressItem">
              <span>3</span>

              <div>
                <small>NEXT</small>

                <strong>
                  Property Details
                </strong>
              </div>
            </div>

            <div className="alphaProgressItem">
              <span>4</span>

              <div>
                <small>FINAL</small>

                <strong>
                  Review & Send
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <form
        className="alphaQuoteContainer alphaQuoteLayout"
        onSubmit={handleContinue}
        noValidate
      >
        <div className="alphaQuoteMain">
          {emergencySelected ? (
            <section className="alphaEmergencyBanner">
              <div>
                <span className="alphaEmergencyLabel">
                  URGENT
                </span>

                <h2>
                  You Told Us This Is Urgent
                </h2>

                <p>
                  For an active property or plumbing
                  emergency, please call Alpha directly
                  as well as completing the form.
                </p>

                <strong>
                  24/7 EMERGENCY CALL
                </strong>

                <a
                  className="alphaEmergencyPhone"
                  href="tel:01775518068"
                >
                  01775 518068
                </a>

                <a
                  className="alphaEmergencyButton"
                  href="tel:01775518068"
                >
                  CALL NOW
                </a>
              </div>
            </section>
          ) : null}

          <section className="alphaFormSection">
            <div className="alphaSectionIntro">
              <span className="alphaSectionNumber">
                01
              </span>

              <div>
                <h2>
                  What Do You Need Help With?
                </h2>

                <p>
                  Choose the main service that best
                  describes what you need. You can
                  select Multiple Services or Not Sure
                  if that better fits your enquiry.
                </p>
              </div>
            </div>

            <div
              id="primaryService"
              className="alphaServiceCards"
            >
              {PRIMARY_SERVICES.map(
                (service) => (
                  <button
                    key={service}
                    type="button"
                    className={`alphaServiceCard ${
                      form.primaryService ===
                      service
                        ? "alphaServiceCardActive"
                        : ""
                    }`}
                    onClick={() =>
                      handlePrimaryServiceChange(
                        service,
                      )
                    }
                    aria-pressed={
                      form.primaryService ===
                      service
                    }
                  >
                    <span className="alphaServiceIcon">
                      {service ===
                      "Plumbing"
                        ? "⌁"
                        : service ===
                            "Garden Services"
                          ? "✦"
                          : service ===
                              "Not Sure"
                            ? "?"
                            : "✓"}
                    </span>

                    <strong>
                      {service}
                    </strong>
                  </button>
                ),
              )}
            </div>

            {errors.primaryService ? (
              <p
                className="alphaFieldError"
                role="alert"
              >
                {errors.primaryService}
              </p>
            ) : null}

            {renderConditionalQuestions()}
          </section>

          <section className="alphaFormSection">
            <div className="alphaSectionIntro">
              <span className="alphaSectionNumber">
                02
              </span>

              <div>
                <h2>
                  Tell Us What Needs Doing
                </h2>

                <p>
                  Describe the problem, the work you
                  want completed, or what you would like
                  changed. You do not need to use trade
                  terminology.
                </p>
              </div>
            </div>

            <div className="alphaField">
              <FieldLabel required>
                What Needs Doing?
              </FieldLabel>

              <textarea
                id="jobDescription"
                name="jobDescription"
                value={
                  form.jobDescription
                }
                onChange={
                  handleTextChange
                }
                maxLength={5000}
                rows={7}
                placeholder="For example: Upstairs toilet leaking from the base. We'd like the leak repaired and the surrounding area checked."
                aria-invalid={Boolean(
                  errors.jobDescription,
                )}
                aria-describedby={
                  errors.jobDescription
                    ? "jobDescription-error"
                    : undefined
                }
              />

              <div className="alphaFieldMeta">
                <span>
                  A short description is fine — just tell
                  us what you&apos;re seeing and what
                  you&apos;d like Alpha to help with.
                </span>

                <span>
                  {
                    form.jobDescription
                      .length
                  }
                  /5000
                </span>
              </div>

              {errors.jobDescription ? (
                <p
                  id="jobDescription-error"
                  className="alphaFieldError"
                  role="alert"
                >
                  {errors.jobDescription}
                </p>
              ) : null}
            </div>

            <div className="alphaField">
              <FieldLabel>
                What Would You Like Us to Achieve?
              </FieldLabel>

              <select
                name="customerGoal"
                value={
                  form.customerGoal
                }
                onChange={(event) =>
                  updateForm(
                    "customerGoal",
                    event.target.value,
                  )
                }
              >
                <option value="">
                  Select if useful
                </option>

                <option value="Repair the problem">
                  Repair the problem
                </option>

                <option value="Replace something damaged">
                  Replace something damaged
                </option>

                <option value="Refresh the room">
                  Refresh the room
                </option>

                <option value="Complete renovation">
                  Complete renovation
                </option>

                <option value="Bring an overgrown garden under control">
                  Bring an overgrown garden under
                  control
                </option>

                <option value="Prepare rental property for new tenant">
                  Prepare rental property for new
                  tenant
                </option>

                <option value="Multiple maintenance jobs">
                  Multiple maintenance jobs
                </option>
              </select>
            </div>
          </section>

          <section className="alphaFormSection">
            <div className="alphaSectionIntro">
              <span className="alphaSectionNumber">
                03
              </span>

              <div>
                <h2>
                  Is This One Job or Several?
                </h2>

                <p>
                  This helps Alpha understand whether
                  you need one repair, several jobs
                  together, or work across more than
                  one property.
                </p>
              </div>
            </div>

            <div id="jobCount">
              <RadioGroup
                name="jobCount"
                value={
                  form.jobCount
                }
                options={[
                  "One job",
                  "Several jobs at the same property",
                  "Work across more than one property",
                ]}
                onChange={(value) =>
                  updateForm(
                    "jobCount",
                    value as JobCount,
                  )
                }
                error={
                  errors.jobCount
                }
              />
            </div>

            {form.jobCount ===
            "Several jobs at the same property" ? (
              <div className="alphaGreenNote">
                <strong>
                  Please include the complete job list.
                </strong>

                <span>
                  Add every repair, maintenance task,
                  room or area you want Alpha to consider
                  in the description above.
                </span>
              </div>
            ) : null}

            {multiplePropertiesSelected ? (
              <div className="alphaMultiPropertyBox">
                <p>
                  You can give Alpha wider portfolio
                  context rather than creating a separate
                  enquiry for every property. Tell us how
                  many properties are involved and use
                  the next step to provide the relevant
                  property information.
                </p>

                <div className="alphaField">
                  <FieldLabel>
                    Approximate Number of Properties
                  </FieldLabel>

                  <input
                    type="number"
                    min="2"
                    max="999"
                    inputMode="numeric"
                    name="propertyCount"
                    value={
                      form.propertyCount
                    }
                    onChange={
                      handleTextChange
                    }
                    placeholder="e.g. 5"
                  />
                </div>
              </div>
            ) : null}
          </section>

          <section className="alphaFormSection">
            <div className="alphaSectionIntro">
              <span className="alphaSectionNumber">
                04
              </span>

              <div>
                <h2>
                  When Would You Like the Work Done?
                </h2>

                <p>
                  This is your preferred timescale only.
                  It does not mean Alpha is committing
                  to that date.
                </p>
              </div>
            </div>

            <div id="timescale">
              <RadioGroup
                name="timescale"
                value={
                  form.timescale
                }
                options={[
                  "As soon as reasonably possible",
                  "Within 1–2 weeks",
                  "Within the next month",
                  "Within 1–3 months",
                  "No fixed timescale",
                  "Just planning / gathering information",
                ]}
                onChange={(value) =>
                  updateForm(
                    "timescale",
                    value as Timescale,
                  )
                }
                error={
                  errors.timescale
                }
              />
            </div>
          </section>

          <section className="alphaFormSection">
            <div className="alphaSectionIntro">
              <span className="alphaSectionNumber">
                05
              </span>

              <div>
                <h2>
                  Products, Materials & Measurements
                </h2>

                <p>
                  These details are optional and are
                  mainly useful for renovation, bathroom,
                  kitchen, flooring and similar projects.
                </p>
              </div>
            </div>

            <div className="alphaField">
              <FieldLabel>
                Have You Already Purchased Any Products or Materials?
              </FieldLabel>

              <RadioGroup
                name="productsStatus"
                value={
                  form.productsStatus
                }
                options={[
                  "Yes",
                  "No",
                  "Some",
                  "Not applicable",
                ]}
                onChange={(value) =>
                  updateForm(
                    "productsStatus",
                    value,
                  )
                }
              />
            </div>

            {form.productsStatus ===
              "Yes" ||
            form.productsStatus ===
              "Some" ? (
              <div className="alphaField">
                <FieldLabel>
                  Tell Us What You Already Have
                </FieldLabel>

                <textarea
                  name="productsDetails"
                  value={
                    form.productsDetails
                  }
                  onChange={
                    handleTextChange
                  }
                  rows={4}
                  placeholder="For example: kitchen units, worktops, tiles, bathroom products or flooring."
                />
              </div>
            ) : null}

            <div className="alphaField">
              <FieldLabel>
                Do You Have Measurements?
              </FieldLabel>

              <RadioGroup
                name="hasMeasurements"
                value={
                  form.hasMeasurements
                }
                options={[
                  "Yes",
                  "No",
                ]}
                onChange={(value) =>
                  updateForm(
                    "hasMeasurements",
                    value as YesNo,
                  )
                }
              />
            </div>

            {form.hasMeasurements ===
            "Yes" ? (
              <div className="alphaField">
                <FieldLabel>
                  Add Approximate Measurements
                </FieldLabel>

                <textarea
                  name="measurements"
                  value={
                    form.measurements
                  }
                  onChange={
                    handleTextChange
                  }
                  rows={4}
                  placeholder="For example: Bathroom approximately 2.4m × 1.8m or garden roughly 15m × 8m."
                />

                <p className="alphaSupportingText">
                  Customer-provided measurements are
                  for enquiry assessment only and are
                  not final construction measurements.
                </p>
              </div>
            ) : null}

            <div className="alphaGreenNote">
              Don&apos;t worry if you don&apos;t have
              exact measurements. We can assess this
              where necessary.
            </div>
          </section>

          <section className="alphaFormSection alphaUploadSection">
            <div className="alphaSectionIntro">
              <span className="alphaSectionNumber">
                06
              </span>

              <div>
                <h2>
                  Photos & Files
                </h2>

                <p>
                  Photos and short videos can help us
                  understand the work before we contact
                  you.
                </p>
              </div>
            </div>

            <div className="alphaUploadGrid">
              <div className="alphaUploadCard">
                <div className="alphaUploadIcon">
                  ▧
                </div>

                <h3>
                  Add Photos
                </h3>

                <p>
                  Add up to 15 images showing the
                  problem, overall area, damage,
                  fittings, access or useful
                  measurements.
                </p>

                <div className="alphaUploadButtons">
                  <button
                    type="button"
                    className="alphaUploadButton"
                    onClick={() =>
                      photoInputRef.current?.click()
                    }
                  >
                    UPLOAD PHOTOS
                  </button>

                  <button
                    type="button"
                    className="alphaUploadButton alphaUploadSecondary"
                    onClick={() =>
                      photoInputRef.current?.click()
                    }
                  >
                    TAKE A PHOTO
                  </button>
                </div>

                <input
                  ref={photoInputRef}
                  className="alphaHiddenInput"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                  multiple
                  capture="environment"
                  onChange={(event) => {
                    void addAttachments(
                      event.target.files,
                      "Photo",
                    );

                    event.currentTarget.value =
                      "";
                  }}
                />
              </div>

              <div className="alphaUploadCard">
                <div className="alphaUploadIcon">
                  ▶
                </div>

                <h3>
                  Add a Short Video
                </h3>

                <p>
                  A short video can help show
                  movement, leaks, room layout,
                  garden condition or a problem
                  that is difficult to explain in a
                  photograph.
                </p>

                <div className="alphaUploadButtons">
                  <button
                    type="button"
                    className="alphaUploadButton"
                    onClick={() =>
                      videoInputRef.current?.click()
                    }
                  >
                    UPLOAD VIDEO
                  </button>

                  <button
                    type="button"
                    className="alphaUploadButton alphaUploadSecondary"
                    onClick={() =>
                      videoInputRef.current?.click()
                    }
                  >
                    RECORD VIDEO
                  </button>
                </div>

                <input
                  ref={videoInputRef}
                  className="alphaHiddenInput"
                  type="file"
                  accept="video/mp4,video/quicktime"
                  capture="environment"
                  onChange={(event) => {
                    void addAttachments(
                      event.target.files,
                      "Video",
                    );

                    event.currentTarget.value =
                      "";
                  }}
                />

                <small>
                  Short videos only. Maximum 3
                  videos and approximately 100 MB
                  per file.
                </small>
              </div>

              <div className="alphaUploadCard">
                <div className="alphaUploadIcon">
                  ▤
                </div>

                <h3>
                  Supporting Files
                </h3>

                <p>
                  Upload plans, measurements,
                  product specifications, kitchen
                  plans, bathroom layouts, inspection
                  reports or previous quotations.
                </p>

                <button
                  type="button"
                  className="alphaUploadButton"
                  onClick={() =>
                    documentInputRef.current?.click()
                  }
                >
                  UPLOAD DOCUMENTS
                </button>

                <input
                  ref={documentInputRef}
                  className="alphaHiddenInput"
                  type="file"
                  accept="application/pdf,image/jpeg,image/png,image/webp,image/heic,image/heif"
                  multiple
                  onChange={(event) => {
                    void addAttachments(
                      event.target.files,
                      "Document",
                    );

                    event.currentTarget.value =
                      "";
                  }}
                />

                <small>
                  PDF and common image files
                  supported.
                </small>
              </div>
            </div>

            {attachmentError ? (
              <div
                className="alphaUploadError"
                role="alert"
              >
                {attachmentError}
              </div>
            ) : null}

            <div className="alphaPrivacyNote">
              Please avoid uploading documents or
              photographs containing unnecessary
              personal or sensitive information.
            </div>

            {attachments.length > 0 ? (
              <div className="alphaAttachments">
                <div className="alphaAttachmentHeader">
                  <div>
                    <h3>
                      Your Attachments
                    </h3>

                    <p>
                      {selectedPhotoCount} photo
                      {selectedPhotoCount ===
                      1
                        ? ""
                        : "s"}
                      {" · "}
                      {selectedVideoCount} video
                      {selectedVideoCount ===
                      1
                        ? ""
                        : "s"}
                      {" · "}
                      {selectedDocumentCount} document
                      {selectedDocumentCount ===
                      1
                        ? ""
                        : "s"}
                    </p>
                  </div>
                </div>

                <div className="alphaAttachmentGrid">
                  {attachments.map(
                    (attachment) => {
                      const previewUrl =
                        attachment.category ===
                        "Photo"
                          ? URL.createObjectURL(
                              attachment.file,
                            )
                          : "";

                      return (
                        <article
                          key={
                            attachment.id
                          }
                          className="alphaAttachmentCard"
                        >
                          {previewUrl ? (
                            <img
                              src={
                                previewUrl
                              }
                              alt={
                                attachment.name
                              }
                              onLoad={() =>
                                URL.revokeObjectURL(
                                  previewUrl,
                                )
                              }
                            />
                          ) : (
                            <div className="alphaAttachmentPlaceholder">
                              {attachment.category ===
                              "Video"
                                ? "▶"
                                : "PDF"}
                            </div>
                          )}

                          <div className="alphaAttachmentInfo">
                            <strong
                              title={
                                attachment.name
                              }
                            >
                              {
                                attachment.name
                              }
                            </strong>

                            <small>
                              {formatFileSize(
                                attachment.size,
                              )}
                            </small>

                            {attachment.status ===
                            "uploading" ? (
                              <span className="alphaUploadStatus">
                                Uploading…
                              </span>
                            ) : null}

                            {attachment.status ===
                            "uploaded" ? (
                              <span className="alphaUploadSuccess">
                                Uploaded ✓
                              </span>
                            ) : null}

                            {attachment.status ===
                            "failed" ? (
                              <span className="alphaUploadFailed">
                                We couldn&apos;t
                                upload this file.
                              </span>
                            ) : null}

                            <div className="alphaAttachmentActions">
                              {attachment.status ===
                              "failed" ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    void retryAttachment(
                                      attachment,
                                    )
                                  }
                                >
                                  Retry
                                </button>
                              ) : null}

                              <button
                                type="button"
                                onClick={() =>
                                  void removeAttachment(
                                    attachment.id,
                                  )
                                }
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    },
                  )}
                </div>
              </div>
            ) : null}
          </section>

          <div className="alphaFormBottomActions">
            <button
              type="button"
              className="alphaBackButton"
              onClick={
                handleBack
              }
            >
              ← BACK TO YOUR DETAILS
            </button>

            <button
              type="submit"
              className="alphaContinueButton"
              disabled={saving}
            >
              {saving
                ? "SAVING..."
                : "CONTINUE TO PROPERTY DETAILS →"}
            </button>
          </div>

          {notice ? (
            <p
              className="alphaSavedNotice"
              role="status"
            >
              {notice}
            </p>
          ) : null}
        </div>

        <aside className="alphaQuoteSidebar">
          <div className="alphaSidebarCard">
            <span className="alphaSidebarEyebrow">
              QUOTE JOURNEY
            </span>

            <h2>
              What Happens Next?
            </h2>

            <ol>
              <li>
                <span>1</span>

                <div>
                  <strong>
                    Your Details
                  </strong>

                  <small>
                    Who we&apos;re speaking to
                  </small>
                </div>
              </li>

              <li className="alphaSidebarActive">
                <span>2</span>

                <div>
                  <strong>
                    Service Details
                  </strong>

                  <small>
                    What work you need
                  </small>
                </div>
              </li>

              <li>
                <span>3</span>

                <div>
                  <strong>
                    Property Details
                  </strong>

                  <small>
                    Where the work is needed
                  </small>
                </div>
              </li>

              <li>
                <span>4</span>

                <div>
                  <strong>
                    Review & Send
                  </strong>

                  <small>
                    Check everything before sending
                  </small>
                </div>
              </li>
            </ol>

            <div className="alphaSidebarNote">
              The details you entered in Step 1 will be carried through while you complete the rest of your quote request.
            </div>
          </div>

          <div className="alphaSidebarEmergency">
            <span>
              EMERGENCY?
            </span>

            <h3>
              Need urgent help?
            </h3>

            <p>
              For an active property or plumbing
              emergency, call Alpha directly as well
              as completing the form.
            </p>

            <a href="tel:01775518068">
              01775 518068
            </a>
          </div>

          <div className="alphaSidebarContact">
            <strong>
              Need to speak to Alpha?
            </strong>

            <a href="tel:01775518068">
              01775 518068
            </a>

            <a href="mailto:info@alphapropertyandgardening.co.uk">
              info@alphapropertyandgardening.co.uk
            </a>
          </div>

          <Link
            href="/privacy-policy"
            className="alphaPrivacyLink"
          >
            Privacy Policy
          </Link>
        </aside>
      </form>

      <Footer />
    </main>
  );
}