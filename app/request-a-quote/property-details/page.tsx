"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./property-details.module.css";

type YesNo = "Yes" | "No" | "";

type PropertyType =
  | "House"
  | "Bungalow"
  | "Flat / Apartment"
  | "Maisonette"
  | "Commercial Property"
  | "Other"
  | "";

type FlatFloor =
  | "Ground floor"
  | "First floor"
  | "Second floor"
  | "Third floor or above"
  | "Not sure / not relevant"
  | "";

type PropertySize =
  | "1 bedroom"
  | "2 bedrooms"
  | "3 bedrooms"
  | "4 bedrooms"
  | "5+ bedrooms"
  | "Not applicable / not sure"
  | "";

type OccupancyStatus =
  | "Yes — I live there"
  | "Yes — Tenant occupied"
  | "Yes — Business occupied"
  | "No — Property is vacant"
  | "Between tenancies"
  | "Under renovation"
  | "Other"
  | "";

type AccessMethod =
  | "Customer will be present"
  | "Tenant will provide access"
  | "Agent / landlord will provide access"
  | "Keys available by arrangement"
  | "Property is vacant"
  | "Other"
  | "";

type ExternalAccessType =
  | "Yes — Front / side access"
  | "Yes — Rear access"
  | "Access through the property"
  | "Restricted access"
  | "Not sure"
  | "";

type ParkingType =
  | "Driveway / private parking"
  | "On-street parking"
  | "Permit parking"
  | "Pay-and-display / restricted parking"
  | "No nearby parking"
  | "Not sure"
  | "";

type ProblemLocation =
  | "Ground level"
  | "First-floor level"
  | "Second floor or above"
  | "Roof / roofline"
  | "Not sure"
  | "";

type PropertyAge =
  | "Before 1945"
  | "1945–1979"
  | "1980–1999"
  | "2000 onwards"
  | "Not sure"
  | "";

type PropertyCondition =
  | "Generally good condition"
  | "Needs some repairs"
  | "Requires significant improvement"
  | "Full renovation required"
  | "Not sure"
  | "";

type CustomerContactAddress = "Yes" | "No" | "";

type PortfolioMode =
  | "Yes — mainly one property"
  | "No — this is a portfolio / multi-property requirement"
  | "";

type PropertyPhotoStatus = "saving" | "saved" | "failed";

type PropertyPhoto = {
  id: string;
  enquiryId: string;
  name: string;
  type: string;
  size: number;
  status: PropertyPhotoStatus;
  createdAt: string;
  file: File;
};

type PropertyDetailsForm = {
  addressLine1: string;
  addressLine2: string;
  townCity: string;
  county: string;
  postcode: string;

  addressLookupStatus: string;

  isAlsoHomeContactAddress: CustomerContactAddress;

  propertyType: PropertyType;
  flatFloor: FlatFloor;
  propertySize: PropertySize;

  occupancy: OccupancyStatus;

  shouldContactTenant: YesNo;
  tenantName: string;
  tenantPhone: string;
  tenantEmail: string;

  landlordAgentName: string;
  landlordAgentContact: string;

  accessMethod: AccessMethod;
  accessNotes: string;

  externalAccessType: ExternalAccessType;
  externalAccessNotes: string;

  parkingType: ParkingType;
  parkingNotes: string;

  problemLocation: ProblemLocation;

  propertyAge: PropertyAge;

  listedRestrictions: YesNo;
  listedRestrictionsNotes: string;

  waterStopTapKnown: YesNo;

  propertyCondition: PropertyCondition;

  commercialPropertyType: string;
  restrictedWorkingHours: YesNo;
  commercialAccessTimes: string;

  portfolioMode: PortfolioMode;
  portfolioAreaPostcodes: string;
  portfolioPropertyCount: string;
  portfolioNotes: string;

  petsAtProperty: boolean;
  additionalNotes: string;
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

type Step2FormSnapshot = {
  primaryService?: string;
  multipleServices?: string[];
  jobDescription?: string;
  customerGoal?: string;

  maintenanceTypes?: string[];
  activeDamage?: "Yes" | "No" | "Not sure" | "";

  renovationPlan?: string;
  renovationStage?: string;

  plumbingTypes?: string[];
  waterEscaping?: "Yes" | "No" | "Not sure" | "";

  bathroomNeed?: string;
  bathroomProducts?: string;

  kitchenNeed?: string;
  kitchenPurchased?: string;

  tilingTypes?: string[];
  tilingProducts?: string;

  decoratingAreas?: string[];
  decoratingPreparation?: "Yes" | "No" | "Not sure" | "";

  roofingIssues?: string[];
  waterEntering?: "Yes" | "No" | "Not sure" | "";

  gardenWork?: string[];
  gardenFrequency?: string;
  gardenWaste?: "Yes" | "No" | "Not sure" | "";

  landlordNeeds?: string[];
  rentalStatus?: string;

  jobCount?: string;
  propertyCount?: string;

  timescale?: string;

  productsStatus?: string;
  productsDetails?: string;

  hasMeasurements?: "Yes" | "No" | "";
  measurements?: string;
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
  form?: Step2FormSnapshot;
  step2CompletedAt?: string | null;
  attachments?: {
    id: string;
    category: "Photo" | "Video" | "Document";
    name: string;
    type: string;
    size: number;
    status: string;
    createdAt: string;
  }[];
};

type Step19Draft = {
  enquiryId: string;
  step3CompletedAt: string | null;
  form: PropertyDetailsForm;
  propertyPhotos: {
    id: string;
    name: string;
    type: string;
    size: number;
    status: PropertyPhotoStatus;
    createdAt: string;
  }[];
};

const STEP17_STORAGE_KEY = "alphaQuoteRequest";
const STEP18_STORAGE_KEY = "alphaQuoteServiceDetails";
const STEP19_STORAGE_KEY = "alphaQuotePropertyDetails";

const PROPERTY_PHOTO_DB_NAME = "alphaQuotePropertyAttachments";
const PROPERTY_PHOTO_DB_VERSION = 1;
const PROPERTY_PHOTO_STORE_NAME = "propertyPhotos";

const PROPERTY_PHOTO_LIMIT = 10;

const initialForm: PropertyDetailsForm = {
  addressLine1: "",
  addressLine2: "",
  townCity: "",
  county: "",
  postcode: "",
  addressLookupStatus: "",

  isAlsoHomeContactAddress: "",

  propertyType: "",
  flatFloor: "",
  propertySize: "",

  occupancy: "",

  shouldContactTenant: "",
  tenantName: "",
  tenantPhone: "",
  tenantEmail: "",

  landlordAgentName: "",
  landlordAgentContact: "",

  accessMethod: "",
  accessNotes: "",

  externalAccessType: "",
  externalAccessNotes: "",

  parkingType: "",
  parkingNotes: "",

  problemLocation: "",

  propertyAge: "",

  listedRestrictions: "",
  listedRestrictionsNotes: "",

  waterStopTapKnown: "",

  propertyCondition: "",

  commercialPropertyType: "",
  restrictedWorkingHours: "",
  commercialAccessTimes: "",

  portfolioMode: "",
  portfolioAreaPostcodes: "",
  portfolioPropertyCount: "",
  portfolioNotes: "",

  petsAtProperty: false,
  additionalNotes: "",
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

function readSession<T>(key: string): T | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(key);

    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as T;
  } catch {
    return null;
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

function openPropertyPhotoDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (
      typeof window === "undefined" ||
      !("indexedDB" in window)
    ) {
      reject(new Error("IndexedDB is not available."));
      return;
    }

    const request = window.indexedDB.open(
      PROPERTY_PHOTO_DB_NAME,
      PROPERTY_PHOTO_DB_VERSION,
    );

    request.onupgradeneeded = () => {
      const database = request.result;

      if (
        !database.objectStoreNames.contains(
          PROPERTY_PHOTO_STORE_NAME,
        )
      ) {
        database.createObjectStore(
          PROPERTY_PHOTO_STORE_NAME,
          {
            keyPath: "id",
          },
        );
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(
        request.error ??
          new Error("Unable to open property photo storage."),
      );
    };
  });
}

function savePropertyPhoto(photo: PropertyPhoto) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const database = await openPropertyPhotoDatabase();

      const transaction = database.transaction(
        PROPERTY_PHOTO_STORE_NAME,
        "readwrite",
      );

      transaction.objectStore(PROPERTY_PHOTO_STORE_NAME).put({
        id: photo.id,
        enquiryId: photo.enquiryId,
        name: photo.name,
        type: photo.type,
        size: photo.size,
        status: photo.status,
        createdAt: photo.createdAt,
        file: photo.file,
      });

      transaction.oncomplete = () => {
        database.close();
        resolve();
      };

      transaction.onerror = () => {
        database.close();
        reject(
          transaction.error ??
            new Error("Unable to save property photo."),
        );
      };
    } catch (error) {
      reject(error);
    }
  });
}

function deletePropertyPhoto(id: string) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const database = await openPropertyPhotoDatabase();

      const transaction = database.transaction(
        PROPERTY_PHOTO_STORE_NAME,
        "readwrite",
      );

      transaction
        .objectStore(PROPERTY_PHOTO_STORE_NAME)
        .delete(id);

      transaction.oncomplete = () => {
        database.close();
        resolve();
      };

      transaction.onerror = () => {
        database.close();
        reject(
          transaction.error ??
            new Error("Unable to delete property photo."),
        );
      };
    } catch (error) {
      reject(error);
    }
  });
}

async function loadPropertyPhotos(
  enquiryId: string,
): Promise<PropertyPhoto[]> {
  try {
    const database = await openPropertyPhotoDatabase();

    return await new Promise<PropertyPhoto[]>(
      (resolve, reject) => {
        const transaction = database.transaction(
          PROPERTY_PHOTO_STORE_NAME,
          "readonly",
        );

        const request = transaction
          .objectStore(PROPERTY_PHOTO_STORE_NAME)
          .getAll();

        request.onsuccess = () => {
          database.close();

          const rows = request.result as PropertyPhoto[];

          resolve(
            rows.filter(
              (photo) => photo.enquiryId === enquiryId,
            ),
          );
        };

        request.onerror = () => {
          database.close();
          reject(
            request.error ??
              new Error("Unable to load property photos."),
          );
        };
      },
    );
  } catch {
    return [];
  }
}

function trackQuoteEvent(eventName: string) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const win = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    win.dataLayer?.push({
      event: eventName,
    });
  } catch {
    // Analytics must never block the quote journey.
  }
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
      <div className={styles.radioGrid}>
        {options.map((option) => (
          <label
            key={option}
            className={`${styles.radioCard} ${
              value === option ? styles.radioCardActive : ""
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
        <p
          className={styles.fieldError}
          role="alert"
        >
          {error}
        </p>
      ) : null}
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
    <label className={styles.fieldLabel}>
      {children}
      {required ? (
        <span className={styles.required}> *</span>
      ) : null}
    </label>
  );
}

export default function PropertyDetailsPage() {
  const router = useRouter();

  const [form, setForm] =
    useState<PropertyDetailsForm>(initialForm);

  const [step17, setStep17] = useState<Step17Data>({});
  const [step18, setStep18] = useState<Step18Snapshot | null>(
    null,
  );

  const [enquiryId, setEnquiryId] = useState("");

  const [propertyPhotos, setPropertyPhotos] = useState<
    PropertyPhoto[]
  >([]);

  const [previewUrls, setPreviewUrls] = useState<
    Record<string, string>
  >({});

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [notice, setNotice] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [saving, setSaving] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [lookupLoading, setLookupLoading] = useState(false);

  const photoInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.title =
      "Request a Quote — Property Details | Alpha Property & Gardening Services";

    const description =
      "Tell Alpha Property & Gardening Services where the work is taking place and provide useful property, access and attendance information for your quotation request.";

    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    const savedStep17 =
      readSession<Step17Data>(STEP17_STORAGE_KEY) ?? {};

    const savedStep18 =
      readSession<Step18Snapshot>(STEP18_STORAGE_KEY);

    const savedStep19 =
      readSession<Step19Draft>(STEP19_STORAGE_KEY);

    const id =
      savedStep17.enquiryId ??
      savedStep18?.enquiryId ??
      savedStep19?.enquiryId ??
      createId("enquiry");

    setStep17(savedStep17);
    setStep18(savedStep18);
    setEnquiryId(id);

    if (savedStep19?.form) {
      setForm({
        ...initialForm,
        ...savedStep19.form,
      });
    }

    void loadPropertyPhotos(id).then((photos) => {
      setPropertyPhotos(photos);
    });

    trackQuoteEvent("quote_step_3_started");

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (
      !hydrated ||
      !enquiryId
    ) {
      return;
    }

    const draft: Step19Draft = {
      enquiryId,
      step3CompletedAt: null,
      form,
      propertyPhotos: propertyPhotos.map(
        (photo) => ({
          id: photo.id,
          name: photo.name,
          type: photo.type,
          size: photo.size,
          status: photo.status,
          createdAt: photo.createdAt,
        }),
      ),
    };

    window.sessionStorage.setItem(
      STEP19_STORAGE_KEY,
      JSON.stringify(draft),
    );
  }, [
    form,
    propertyPhotos,
    enquiryId,
    hydrated,
  ]);

  useEffect(() => {
    const nextUrls: Record<string, string> = {};

    propertyPhotos.forEach((photo) => {
      try {
        nextUrls[photo.id] =
          URL.createObjectURL(photo.file);
      } catch {
        // Ignore preview failure.
      }
    });

    setPreviewUrls(nextUrls);

    return () => {
      Object.values(nextUrls).forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [propertyPhotos]);

  const customerType =
    step17.customerType ?? "";

  const customerTypeLower =
    customerType.toLowerCase();

  const isLandlordOrAgent =
    customerTypeLower.includes("landlord") ||
    customerTypeLower.includes("letting") ||
    customerTypeLower.includes("property manager");

  const isTenant =
    customerTypeLower.includes("tenant");

  const isBusiness =
    customerTypeLower.includes("business") ||
    customerTypeLower.includes("commercial");

  const selectedServices = useMemo(() => {
    const services = new Set<string>();

    const primary =
      step18?.form?.primaryService;

    if (primary) {
      services.add(primary);
    }

    (step18?.form?.multipleServices ?? []).forEach(
      (service) => {
        services.add(service);
      },
    );

    return services;
  }, [step18]);

  const hasService = (service: string) =>
    selectedServices.has(service);

  const isRenovationRelevant =
    hasService("Property Renovation") ||
    hasService("Landlord / Rental Property Work");

  const isPropertySizeRelevant =
    hasService("Property Renovation") ||
    hasService("Painting & Decorating") ||
    hasService("Landlord / Rental Property Work") ||
    hasService("Multiple Services") ||
    hasService("Property Maintenance & Repairs");

  const isOccupancyRelevant =
    isLandlordOrAgent ||
    isTenant ||
    isRenovationRelevant ||
    hasService("Multiple Services");

  const isExternalAccessRelevant =
    hasService("Garden Services") ||
    hasService("Roofing & Gutters") ||
    hasService("Painting & Decorating") ||
    hasService("Property Maintenance & Repairs") ||
    hasService("Garden Services");

  const isProblemLocationRelevant =
    hasService("Roofing & Gutters") ||
    hasService("Painting & Decorating") ||
    hasService("Plumbing") ||
    form.propertyType === "Flat / Apartment" ||
    form.propertyType === "Maisonette";

  const isWaterStopTapRelevant =
    hasService("Plumbing") ||
    hasService("Bathroom") ||
    hasService("Kitchen");

  const isActiveWaterProblem =
    step18?.form?.waterEscaping === "Yes" ||
    step18?.form?.activeDamage === "Yes";

  const previousAttachmentCount =
    step18?.attachments?.length ?? 0;

  const portfolioRequired =
    step18?.form?.jobCount ===
    "Work across more than one property";

  const shouldShowTenantContact =
    isLandlordOrAgent &&
    form.occupancy === "Yes — Tenant occupied";

  const shouldShowTenantApproval =
    isTenant;

  const shouldShowCommercialFields =
    form.propertyType ===
    "Commercial Property";

  const shouldShowListedRestrictions =
    hasService("Property Renovation");

  const shouldShowCondition =
    isRenovationRelevant ||
    portfolioRequired;

  function updateForm<K extends keyof PropertyDetailsForm>(
    key: K,
    value: PropertyDetailsForm[K],
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    setErrors((current) => {
      const next = {
        ...current,
      };

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
      event.target.name as keyof PropertyDetailsForm;

    updateForm(
      field,
      event.target.value as never,
    );
  }

  async function handleFindAddress() {
    setLookupLoading(true);
    setNotice("");

    await new Promise((resolve) => {
      window.setTimeout(resolve, 300);
    });

    const postcode = form.postcode.trim();

    if (!postcode) {
      updateForm(
        "addressLookupStatus",
        "Enter your postcode first, then use manual address entry if needed.",
      );
      setLookupLoading(false);
      return;
    }

    updateForm(
      "addressLookupStatus",
      "Address lookup is not connected to an address database yet. Your postcode has been kept, and you can enter the address manually.",
    );

    setLookupLoading(false);

    document
      .getElementById("addressLine1")
      ?.focus();
  }

  function validate() {
    const nextErrors: Record<
      string,
      string
    > = {};

    if (!form.addressLine1.trim()) {
      nextErrors.addressLine1 =
        "Please enter the job address.";
    }

    if (!form.townCity.trim()) {
      nextErrors.townCity =
        "Please enter the town or city.";
    }

    if (!form.postcode.trim()) {
      nextErrors.postcode =
        "Please enter the property postcode.";
    }

    if (!form.propertyType) {
      nextErrors.propertyType =
        "Please select the property type.";
    }

    if (
      portfolioRequired &&
      !form.portfolioMode
    ) {
      nextErrors.portfolioMode =
        "Please tell us whether this request is mainly about one property or a portfolio / multi-property requirement.";
    }

    if (
      form.portfolioMode ===
        "No — this is a portfolio / multi-property requirement" &&
      !form.portfolioAreaPostcodes.trim()
    ) {
      nextErrors.portfolioAreaPostcodes =
        "Please enter the main area or postcodes.";
    }

    if (
      form.portfolioMode ===
        "No — this is a portfolio / multi-property requirement" &&
      !form.portfolioPropertyCount.trim()
    ) {
      nextErrors.portfolioPropertyCount =
        "Please enter an approximate number of properties.";
    }

    return nextErrors;
  }

  async function addPropertyPhotos(
    files: FileList | null,
  ) {
    if (!files || !enquiryId) {
      return;
    }

    setPhotoError("");

    const incomingFiles =
      Array.from(files).filter(isImageFile);

    const availableSlots =
      Math.max(
        0,
        PROPERTY_PHOTO_LIMIT -
          propertyPhotos.length,
      );

    if (availableSlots <= 0) {
      setPhotoError(
        `You can add up to ${PROPERTY_PHOTO_LIMIT} property/access photos.`,
      );
      return;
    }

    if (
      incomingFiles.length >
      availableSlots
    ) {
      setPhotoError(
        `You can add ${availableSlots} more property/access photo${
          availableSlots === 1
            ? ""
            : "s"
        }.`,
      );
    }

    const limitedFiles =
      incomingFiles.slice(
        0,
        availableSlots,
      );

    if (limitedFiles.length === 0) {
      setPhotoError(
        "Please choose a supported image file.",
      );
      return;
    }

    for (const file of limitedFiles) {
      const photo: PropertyPhoto = {
        id: createId("property-photo"),
        enquiryId,
        name: file.name,
        type:
          file.type ||
          "application/octet-stream",
        size: file.size,
        status: "saving",
        createdAt:
          new Date().toISOString(),
        file,
      };

      setPropertyPhotos(
        (current) => [
          ...current,
          photo,
        ],
      );

      try {
        await savePropertyPhoto(photo);

        const savedPhoto: PropertyPhoto = {
          ...photo,
          status: "saved",
        };

        await savePropertyPhoto(
          savedPhoto,
        );

        setPropertyPhotos(
          (current) =>
            current.map(
              (item) =>
                item.id === photo.id
                  ? savedPhoto
                  : item,
            ),
        );

        trackQuoteEvent(
          "property_photo_added",
        );
      } catch {
        setPropertyPhotos(
          (current) =>
            current.map(
              (item) =>
                item.id === photo.id
                  ? {
                      ...item,
                      status: "failed",
                    }
                  : item,
            ),
        );

        setPhotoError(
          "We couldn't save this photo. Please try again or remove it and continue.",
        );
      }
    }
  }

  async function removePropertyPhoto(
    id: string,
  ) {
    await deletePropertyPhoto(id);

    setPropertyPhotos(
      (current) =>
        current.filter(
          (photo) =>
            photo.id !== id,
        ),
    );
  }

  async function retryPropertyPhoto(
    photo: PropertyPhoto,
  ) {
    setPhotoError("");

    setPropertyPhotos(
      (current) =>
        current.map(
          (item) =>
            item.id === photo.id
              ? {
                  ...item,
                  status: "saving",
                }
              : item,
        ),
    );

    try {
      await savePropertyPhoto({
        ...photo,
        status: "saved",
      });

      setPropertyPhotos(
        (current) =>
          current.map(
            (item) =>
              item.id === photo.id
                ? {
                    ...item,
                    status: "saved",
                  }
                : item,
          ),
      );
    } catch {
      setPropertyPhotos(
        (current) =>
          current.map(
            (item) =>
              item.id === photo.id
                ? {
                    ...item,
                    status: "failed",
                  }
                : item,
          ),
      );

      setPhotoError(
        "We couldn't save this photo. Please try again or remove it and continue.",
      );
    }
  }

  function handleContinue(
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

      document
        .getElementById(
          firstErrorKey,
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

      return;
    }

    setSaving(true);
    setNotice("");

    const completedAt =
      new Date().toISOString();

    const draft: Step19Draft = {
      enquiryId,
      step3CompletedAt:
        completedAt,
      form,
      propertyPhotos:
        propertyPhotos.map(
          (photo) => ({
            id: photo.id,
            name: photo.name,
            type: photo.type,
            size: photo.size,
            status: photo.status,
            createdAt:
              photo.createdAt,
          }),
        ),
    };

    window.sessionStorage.setItem(
      STEP19_STORAGE_KEY,
      JSON.stringify(draft),
    );

    trackQuoteEvent(
      "property_type_selected",
    );

    if (form.accessMethod) {
      trackQuoteEvent(
        "access_type_selected",
      );
    }

    trackQuoteEvent(
      "quote_step_3_completed",
    );

    setNotice(
      "Property details saved. Moving to Review & Send.",
    );

    window.setTimeout(() => {
      router.push(
        "/request-a-quote/review",
      );
    }, 200);
  }

  function handleBack() {
    router.push(
      "/request-a-quote/service-details",
    );
  }

  function renderOccupancyOptions() {
    if (isLandlordOrAgent) {
      return [
        "Yes — Tenant occupied",
        "No — Property is vacant",
        "Between tenancies",
        "Under renovation",
        "Other",
      ];
    }

    if (isBusiness) {
      return [
        "Yes — Business occupied",
        "No — Property is vacant",
        "Under renovation",
        "Other",
      ];
    }

    if (isTenant) {
      return [
        "Yes — I live there",
        "Under renovation",
        "Other",
      ];
    }

    return [
      "Yes — I live there",
      "No — Property is vacant",
      "Under renovation",
      "Other",
    ];
  }

  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div
          className={`${styles.container} ${styles.heroContent}`}
        >
          <div className={styles.eyebrow}>
            <span />
            STEP 3 OF 4
          </div>

          <h1>Tell Us About the Property</h1>

          <p>
            Now tell us where the work is taking place
            and anything we should know about the
            property, access or attendance.
          </p>

          <p>
            This helps us understand the job before we
            contact you or arrange a visit.
          </p>
        </div>
      </section>

      <section className={styles.progressBar}>
        <div className={styles.container}>
          <div className={styles.progressGrid}>
            <div
              className={`${styles.progressItem} ${styles.progressComplete}`}
            >
              <span>1</span>
              <div>
                <small>YOUR DETAILS</small>
                <strong>
                  Your Details ✓
                </strong>
              </div>
            </div>

            <div
              className={`${styles.progressItem} ${styles.progressComplete}`}
            >
              <span>2</span>
              <div>
                <small>SERVICE DETAILS</small>
                <strong>
                  Service Details ✓
                </strong>
              </div>
            </div>

            <div
              className={`${styles.progressItem} ${styles.progressActive}`}
            >
              <span>3</span>
              <div>
                <small>STEP 3 OF 4</small>
                <strong>
                  Property Details
                </strong>
              </div>
            </div>

            <div className={styles.progressItem}>
              <span>4</span>
              <div>
                <small>FINAL</small>
                <strong>
                  Review &amp; Send
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <form
        className={`${styles.container} ${styles.layout}`}
        onSubmit={handleContinue}
        noValidate
      >
        <div className={styles.main}>
          <section className={styles.section}>
            <div className={styles.sectionIntro}>
              <span
                className={styles.sectionNumber}
              >
                01
              </span>

              <div>
                <h2>
                  Where Is the Work Taking Place?
                </h2>

                <p>
                  The job address is stored separately
                  from the customer or contact postcode
                  collected earlier.
                </p>
              </div>
            </div>

            <div className={styles.field}>
              <FieldLabel required>
                Address Line 1
              </FieldLabel>

              <input
                id="addressLine1"
                name="addressLine1"
                type="text"
                autoComplete="address-line1"
                value={form.addressLine1}
                onChange={handleTextChange}
                placeholder="House number and street"
                aria-invalid={Boolean(
                  errors.addressLine1,
                )}
              />

              {errors.addressLine1 ? (
                <p
                  className={styles.fieldError}
                  role="alert"
                >
                  {errors.addressLine1}
                </p>
              ) : null}
            </div>

            <div
              className={styles.formGrid}
            >
              <div className={styles.field}>
                <FieldLabel>
                  Address Line 2
                </FieldLabel>

                <input
                  name="addressLine2"
                  type="text"
                  autoComplete="address-line2"
                  value={form.addressLine2}
                  onChange={handleTextChange}
                  placeholder="Flat, unit or area"
                />
              </div>

              <div className={styles.field}>
                <FieldLabel required>
                  Town / City
                </FieldLabel>

                <input
                  id="townCity"
                  name="townCity"
                  type="text"
                  autoComplete="address-level2"
                  value={form.townCity}
                  onChange={handleTextChange}
                  placeholder="Town or city"
                  aria-invalid={Boolean(
                    errors.townCity,
                  )}
                />

                {errors.townCity ? (
                  <p
                    className={
                      styles.fieldError
                    }
                    role="alert"
                  >
                    {errors.townCity}
                  </p>
                ) : null}
              </div>
            </div>

            <div
              className={styles.formGrid}
            >
              <div className={styles.field}>
                <FieldLabel>
                  County
                </FieldLabel>

                <input
                  name="county"
                  type="text"
                  autoComplete="address-level1"
                  value={form.county}
                  onChange={handleTextChange}
                  placeholder="County"
                />
              </div>

              <div className={styles.field}>
                <FieldLabel required>
                  Postcode
                </FieldLabel>

                <div
                  className={
                    styles.postcodeRow
                  }
                >
                  <input
                    id="postcode"
                    name="postcode"
                    type="text"
                    autoComplete="postal-code"
                    value={form.postcode}
                    onChange={handleTextChange}
                    placeholder="e.g. PE11 1AA"
                    aria-invalid={Boolean(
                      errors.postcode,
                    )}
                  />

                  <button
                    type="button"
                    className={
                      styles.secondaryButton
                    }
                    onClick={
                      handleFindAddress
                    }
                    disabled={
                      lookupLoading
                    }
                  >
                    {lookupLoading
                      ? "CHECKING..."
                      : "FIND ADDRESS"}
                  </button>
                </div>

                <p
                  className={
                    styles.supportingText
                  }
                >
                  The job postcode is particularly
                  important because it determines the
                  service location.
                </p>

                {errors.postcode ? (
                  <p
                    className={
                      styles.fieldError
                    }
                    role="alert"
                  >
                    {errors.postcode}
                  </p>
                ) : null}

                {form.addressLookupStatus ? (
                  <div
                    className={
                      styles.inlineNotice
                    }
                  >
                    {form.addressLookupStatus}
                  </div>
                ) : null}
              </div>
            </div>

            <div
              className={
                styles.serviceAreaNotice
              }
            >
              <strong>
                Service area
              </strong>

              <p>
                Alpha covers a broad region extending
                from Peterborough to Skegness and from
                Long Sutton to Lincoln, including many
                surrounding communities.
              </p>

              <Link href="/areas-we-cover">
                VIEW AREAS WE COVER →
              </Link>
            </div>

            <div
              className={
                styles.field
              }
            >
              <FieldLabel>
                Is This Also Your Home / Contact
                Address?
              </FieldLabel>

              <RadioGroup
                name="isAlsoHomeContactAddress"
                value={
                  form.isAlsoHomeContactAddress
                }
                options={[
                  "Yes",
                  "No",
                ]}
                onChange={(value) =>
                  updateForm(
                    "isAlsoHomeContactAddress",
                    value as CustomerContactAddress,
                  )
                }
              />

              <p
                className={
                  styles.supportingText
                }
              >
                Your customer/contact postcode from
                Step 1 is not automatically treated as
                the job address.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionIntro}>
              <span
                className={styles.sectionNumber}
              >
                02
              </span>

              <div>
                <h2>
                  What Type of Property Is It?
                </h2>

                <p>
                  Choose the option that best describes
                  the property where the work is taking
                  place.
                </p>
              </div>
            </div>

            <div id="propertyType">
              <RadioGroup
                name="propertyType"
                value={form.propertyType}
                options={[
                  "House",
                  "Bungalow",
                  "Flat / Apartment",
                  "Maisonette",
                  "Commercial Property",
                  "Other",
                ]}
                onChange={(value) => {
                  updateForm(
                    "propertyType",
                    value as PropertyType,
                  );
                  trackQuoteEvent(
                    "property_type_selected",
                  );
                }}
                error={errors.propertyType}
              />
            </div>

            {form.propertyType ===
            "Flat / Apartment" ? (
              <div className={styles.field}>
                <FieldLabel>
                  Which Floor?
                </FieldLabel>

                <RadioGroup
                  name="flatFloor"
                  value={form.flatFloor}
                  options={[
                    "Ground floor",
                    "First floor",
                    "Second floor",
                    "Third floor or above",
                    "Not sure / not relevant",
                  ]}
                  onChange={(value) =>
                    updateForm(
                      "flatFloor",
                      value as FlatFloor,
                    )
                  }
                />
              </div>
            ) : null}

            {isPropertySizeRelevant ? (
              <div className={styles.field}>
                <FieldLabel>
                  Approximate Property Size
                </FieldLabel>

                <RadioGroup
                  name="propertySize"
                  value={form.propertySize}
                  options={[
                    "1 bedroom",
                    "2 bedrooms",
                    "3 bedrooms",
                    "4 bedrooms",
                    "5+ bedrooms",
                    "Not applicable / not sure",
                  ]}
                  onChange={(value) =>
                    updateForm(
                      "propertySize",
                      value as PropertySize,
                    )
                  }
                />

                <p
                  className={
                    styles.supportingText
                  }
                >
                  This is optional and is mainly useful
                  for larger renovation, decorating,
                  maintenance and rental-property
                  enquiries.
                </p>
              </div>
            ) : null}

            <div
              className={
                styles.relationshipSummary
              }
            >
              <div>
                <span>
                  PROPERTY BEING REQUESTED BY
                </span>

                <strong>
                  {customerType ||
                    "Customer / organisation"}
                </strong>
              </div>

              <Link href="/request-a-quote">
                CHANGE →
              </Link>
            </div>
          </section>

          {isOccupancyRelevant ? (
            <section className={styles.section}>
              <div className={styles.sectionIntro}>
                <span
                  className={styles.sectionNumber}
                >
                  03
                </span>

                <div>
                  <h2>
                    Is the Property Currently
                    Occupied?
                  </h2>

                  <p>
                    This is only shown where occupancy
                    information is useful for the type
                    of enquiry.
                  </p>
                </div>
              </div>

              <RadioGroup
                name="occupancy"
                value={form.occupancy}
                options={renderOccupancyOptions()}
                onChange={(value) =>
                  updateForm(
                    "occupancy",
                    value as OccupancyStatus,
                  )
                }
              />

              {shouldShowTenantContact ? (
                <div
                  className={
                    styles.conditionalPanel
                  }
                >
                  <h3>
                    Should Alpha Contact the Tenant
                    to Arrange Access?
                  </h3>

                  <RadioGroup
                    name="shouldContactTenant"
                    value={
                      form.shouldContactTenant
                    }
                    options={[
                      "Yes",
                      "No",
                      "To be confirmed",
                    ]}
                    onChange={(value) =>
                      updateForm(
                        "shouldContactTenant",
                        value as YesNo,
                      )
                    }
                  />

                  {form.shouldContactTenant ===
                  "Yes" ? (
                    <div
                      className={
                        styles.formGrid
                      }
                    >
                      <div
                        className={styles.field}
                      >
                        <FieldLabel>
                          Tenant Name
                        </FieldLabel>

                        <input
                          name="tenantName"
                          type="text"
                          autoComplete="name"
                          value={
                            form.tenantName
                          }
                          onChange={
                            handleTextChange
                          }
                          placeholder="Tenant name"
                        />
                      </div>

                      <div
                        className={styles.field}
                      >
                        <FieldLabel>
                          Tenant Phone Number
                        </FieldLabel>

                        <input
                          name="tenantPhone"
                          type="tel"
                          autoComplete="tel"
                          value={
                            form.tenantPhone
                          }
                          onChange={
                            handleTextChange
                          }
                          placeholder="07... or 01..."
                        />
                      </div>

                      <div
                        className={
                          styles.fieldFull
                        }
                      >
                        <FieldLabel>
                          Tenant Email
                        </FieldLabel>

                        <input
                          name="tenantEmail"
                          type="email"
                          autoComplete="email"
                          value={
                            form.tenantEmail
                          }
                          onChange={
                            handleTextChange
                          }
                          placeholder="tenant@example.com"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div
                    className={
                      styles.privacyNote
                    }
                  >
                    Please only provide tenant contact details
                    where you are authorised to share them for
                    the purpose of arranging the work.
                  </div>
                </div>
              ) : null}

              {shouldShowTenantApproval ? (
                <div
                  className={
                    styles.conditionalPanel
                  }
                >
                  <h3>
                    Landlord / Agent Approval
                  </h3>

                  <div
                    className={
                      styles.inlineNotice
                    }
                  >
                    If the landlord or managing agent is
                    responsible for approving the work, we may
                    need their authorisation before planned
                    work proceeds.
                  </div>

                  <div
                    className={
                      styles.formGrid
                    }
                  >
                    <div
                      className={styles.field}
                    >
                      <FieldLabel>
                        Landlord / Agent Name
                      </FieldLabel>

                      <input
                        name="landlordAgentName"
                        type="text"
                        value={
                          form.landlordAgentName
                        }
                        onChange={
                          handleTextChange
                        }
                        placeholder="Name"
                      />
                    </div>

                    <div
                      className={styles.field}
                    >
                      <FieldLabel>
                        Landlord / Agent Contact
                        Details
                      </FieldLabel>

                      <input
                        name="landlordAgentContact"
                        type="text"
                        value={
                          form.landlordAgentContact
                        }
                        onChange={
                          handleTextChange
                        }
                        placeholder="Phone or email"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}

          <section className={styles.section}>
            <div className={styles.sectionIntro}>
              <span
                className={styles.sectionNumber}
              >
                04
              </span>

              <div>
                <h2>
                  How Can We Access the Property?
                </h2>

                <p>
                  Let us know how access is likely to be
                  arranged. Do not enter sensitive
                  security information.
                </p>
              </div>
            </div>

            <RadioGroup
              name="accessMethod"
              value={form.accessMethod}
              options={[
                "Customer will be present",
                "Tenant will provide access",
                "Agent / landlord will provide access",
                "Keys available by arrangement",
                "Property is vacant",
                "Other",
              ]}
              onChange={(value) => {
                updateForm(
                  "accessMethod",
                  value as AccessMethod,
                );
                trackQuoteEvent(
                  "access_type_selected",
                );
              }}
            />

            <div className={styles.field}>
              <FieldLabel>
                Access Notes
              </FieldLabel>

              <textarea
                name="accessNotes"
                value={form.accessNotes}
                onChange={handleTextChange}
                rows={5}
                placeholder="For example: side entrance, rear access, call before arrival, restricted hours or access through neighbouring land."
              />

              <div
                className={
                  styles.securityWarning
                }
              >
                Please do not include alarm codes, key-safe
                codes or other sensitive security information
                here. We can arrange those details securely
                if required.
              </div>
            </div>
          </section>

          {isExternalAccessRelevant ? (
            <section className={styles.section}>
              <div className={styles.sectionIntro}>
                <span
                  className={styles.sectionNumber}
                >
                  05
                </span>

                <div>
                  <h2>
                    Outside / External Access
                  </h2>

                  <p>
                    Particularly useful for garden, roofing,
                    exterior decorating and larger
                    maintenance work.
                  </p>
                </div>
              </div>

              <RadioGroup
                name="externalAccessType"
                value={form.externalAccessType}
                options={[
                  "Yes — Front / side access",
                  "Yes — Rear access",
                  "Access through the property",
                  "Restricted access",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "externalAccessType",
                    value as ExternalAccessType,
                  )
                }
              />

              <div
                className={styles.field}
              >
                <FieldLabel>
                  Anything We Should Know About
                  Outside Access?
                </FieldLabel>

                <textarea
                  name="externalAccessNotes"
                  value={
                    form.externalAccessNotes
                  }
                  onChange={
                    handleTextChange
                  }
                  rows={4}
                  placeholder="For example: narrow gate, steps, shared access, long walk from parking or equipment must pass through the house."
                />
              </div>
            </section>
          ) : null}

          <section className={styles.section}>
            <div className={styles.sectionIntro}>
              <span
                className={styles.sectionNumber}
              >
                06
              </span>

              <div>
                <h2>
                  Parking & Attendance
                </h2>

                <p>
                  This helps Alpha plan access, unloading,
                  tools and materials where necessary.
                </p>
              </div>
            </div>

            <FieldLabel>
              Parking at the Property
            </FieldLabel>

            <RadioGroup
              name="parkingType"
              value={form.parkingType}
              options={[
                "Driveway / private parking",
                "On-street parking",
                "Permit parking",
                "Pay-and-display / restricted parking",
                "No nearby parking",
                "Not sure",
              ]}
              onChange={(value) =>
                updateForm(
                  "parkingType",
                  value as ParkingType,
                )
              }
            />

            <div className={styles.field}>
              <FieldLabel>
                Parking Notes
              </FieldLabel>

              <textarea
                name="parkingNotes"
                value={form.parkingNotes}
                onChange={handleTextChange}
                rows={4}
                placeholder="For example: permit available, loading space only or restricted during school hours."
              />
            </div>
          </section>

          {isProblemLocationRelevant ? (
            <section className={styles.section}>
              <div className={styles.sectionIntro}>
                <span
                  className={styles.sectionNumber}
                >
                  07
                </span>

                <div>
                  <h2>
                    Where Is the Problem Located?
                  </h2>

                  <p>
                    This is useful for upper-floor,
                    exterior and roof-related enquiries.
                  </p>
                </div>
              </div>

              <RadioGroup
                name="problemLocation"
                value={form.problemLocation}
                options={[
                  "Ground level",
                  "First-floor level",
                  "Second floor or above",
                  "Roof / roofline",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "problemLocation",
                    value as ProblemLocation,
                  )
                }
              />
            </section>
          ) : null}

          {(isRenovationRelevant ||
            hasService(
              "Property Maintenance & Repairs",
            )) ? (
            <section className={styles.section}>
              <div className={styles.sectionIntro}>
                <span
                  className={styles.sectionNumber}
                >
                  08
                </span>

                <div>
                  <h2>
                    Property Information
                  </h2>

                  <p>
                    These questions are optional and only
                    shown where they may materially help
                    Alpha understand the enquiry.
                  </p>
                </div>
              </div>

              <div className={styles.field}>
                <FieldLabel>
                  Approximately How Old Is the
                  Property?
                </FieldLabel>

                <RadioGroup
                  name="propertyAge"
                  value={form.propertyAge}
                  options={[
                    "Before 1945",
                    "1945–1979",
                    "1980–1999",
                    "2000 onwards",
                    "Not sure",
                  ]}
                  onChange={(value) =>
                    updateForm(
                      "propertyAge",
                      value as PropertyAge,
                    )
                  }
                />
              </div>

              {shouldShowListedRestrictions ? (
                <div
                  className={
                    styles.field
                  }
                >
                  <FieldLabel>
                    Is the Property Listed or Subject
                    to Any Special Restrictions?
                  </FieldLabel>

                  <RadioGroup
                    name="listedRestrictions"
                    value={
                      form.listedRestrictions
                    }
                    options={[
                      "Yes",
                      "No",
                      "Not sure",
                    ]}
                    onChange={(value) =>
                      updateForm(
                        "listedRestrictions",
                        value as YesNo,
                      )
                    }
                  />

                  {form.listedRestrictions ===
                  "Yes" ? (
                    <div
                      className={
                        styles.field
                      }
                    >
                      <FieldLabel>
                        Tell Us Anything You Know
                      </FieldLabel>

                      <textarea
                        name="listedRestrictionsNotes"
                        value={
                          form.listedRestrictionsNotes
                        }
                        onChange={
                          handleTextChange
                        }
                        rows={4}
                        placeholder="Optional details about restrictions or approvals."
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}

              {shouldShowCondition ? (
                <div
                  className={
                    styles.field
                  }
                >
                  <FieldLabel>
                    How Would You Describe the
                    Property?
                  </FieldLabel>

                  <RadioGroup
                    name="propertyCondition"
                    value={
                      form.propertyCondition
                    }
                    options={[
                      "Generally good condition",
                      "Needs some repairs",
                      "Requires significant improvement",
                      "Full renovation required",
                      "Not sure",
                    ]}
                    onChange={(value) =>
                      updateForm(
                        "propertyCondition",
                        value as PropertyCondition,
                      )
                    }
                  />

                  <p
                    className={
                      styles.supportingText
                    }
                  >
                    This is broad enquiry context only and
                    is not a professional condition
                    assessment.
                  </p>
                </div>
              ) : null}
            </section>
          ) : null}

          {isWaterStopTapRelevant ? (
            <section className={styles.section}>
              <div className={styles.sectionIntro}>
                <span
                  className={styles.sectionNumber}
                >
                  09
                </span>

                <div>
                  <h2>
                    Plumbing / Water Information
                  </h2>

                  <p>
                    Only a simple optional question is
                    included here. No detailed utility
                    survey is required.
                  </p>
                </div>
              </div>

              <FieldLabel>
                Do You Know Where the Main Water Stop
                Tap Is?
              </FieldLabel>

              <RadioGroup
                name="waterStopTapKnown"
                value={form.waterStopTapKnown}
                options={[
                  "Yes",
                  "No",
                  "Not sure",
                ]}
                onChange={(value) =>
                  updateForm(
                    "waterStopTapKnown",
                    value as YesNo,
                  )
                }
              />

              {isActiveWaterProblem ? (
                <div
                  className={
                    styles.urgentNotice
                  }
                >
                  <strong>
                    Active water issue
                  </strong>

                  <p>
                    Your service details indicate an
                    active water-related issue. For urgent
                    assistance, please call Alpha directly
                    on{" "}
                    <a href="tel:01775518068">
                      01775 518068
                    </a>
                    .
                  </p>
                </div>
              ) : null}
            </section>
          ) : null}

          {shouldShowCommercialFields ? (
            <section className={styles.section}>
              <div className={styles.sectionIntro}>
                <span
                  className={styles.sectionNumber}
                >
                  10
                </span>

                <div>
                  <h2>
                    Commercial Property Information
                  </h2>

                  <p>
                    Keep this simple at launch and only
                    capture useful attendance information.
                  </p>
                </div>
              </div>

              <div className={styles.field}>
                <FieldLabel>
                  Business / Property Type
                </FieldLabel>

                <input
                  name="commercialPropertyType"
                  type="text"
                  value={
                    form.commercialPropertyType
                  }
                  onChange={
                    handleTextChange
                  }
                  placeholder="Office, shop, warehouse / unit, hospitality or other"
                />
              </div>

              <div
                className={styles.field}
              >
                <FieldLabel>
                  Are There Restricted Working
                  Hours?
                </FieldLabel>

                <RadioGroup
                  name="restrictedWorkingHours"
                  value={
                    form.restrictedWorkingHours
                  }
                  options={[
                    "Yes",
                    "No",
                  ]}
                  onChange={(value) =>
                    updateForm(
                      "restrictedWorkingHours",
                      value as YesNo,
                    )
                  }
                />
              </div>

              {form.restrictedWorkingHours ===
              "Yes" ? (
                <div
                  className={styles.field}
                >
                  <FieldLabel>
                    Please Tell Us the Available
                    Access Times
                  </FieldLabel>

                  <textarea
                    name="commercialAccessTimes"
                    value={
                      form.commercialAccessTimes
                    }
                    onChange={
                      handleTextChange
                    }
                    rows={4}
                    placeholder="For example: access after 6pm, before opening or between 10am and 2pm."
                  />
                </div>
              ) : null}
            </section>
          ) : null}

          {portfolioRequired ? (
            <section className={styles.section}>
              <div className={styles.sectionIntro}>
                <span
                  className={styles.sectionNumber}
                >
                  11
                </span>

                <div>
                  <h2>
                    One Property or Portfolio?
                  </h2>

                  <p>
                    You told us in Step 2 that the enquiry
                    may involve more than one property.
                  </p>
                </div>
              </div>

              <div id="portfolioMode">
                <RadioGroup
                  name="portfolioMode"
                  value={form.portfolioMode}
                  options={[
                    "Yes — mainly one property",
                    "No — this is a portfolio / multi-property requirement",
                  ]}
                  onChange={(value) =>
                    updateForm(
                      "portfolioMode",
                      value as PortfolioMode,
                    )
                  }
                  error={errors.portfolioMode}
                />
              </div>

              {form.portfolioMode ===
              "No — this is a portfolio / multi-property requirement" ? (
                <div
                  className={
                    styles.conditionalPanel
                  }
                >
                  <div
                    className={
                      styles.formGrid
                    }
                  >
                    <div
                      className={
                        styles.field
                      }
                    >
                      <FieldLabel required>
                        Main Area / Postcodes
                      </FieldLabel>

                      <input
                        id="portfolioAreaPostcodes"
                        name="portfolioAreaPostcodes"
                        type="text"
                        value={
                          form.portfolioAreaPostcodes
                        }
                        onChange={
                          handleTextChange
                        }
                        placeholder="e.g. PE11, PE12, PE20"
                        aria-invalid={Boolean(
                          errors.portfolioAreaPostcodes,
                        )}
                      />

                      {errors.portfolioAreaPostcodes ? (
                        <p
                          className={
                            styles.fieldError
                          }
                          role="alert"
                        >
                          {
                            errors.portfolioAreaPostcodes
                          }
                        </p>
                      ) : null}
                    </div>

                    <div
                      className={
                        styles.field
                      }
                    >
                      <FieldLabel required>
                        Approximate Number of
                        Properties
                      </FieldLabel>

                      <input
                        id="portfolioPropertyCount"
                        name="portfolioPropertyCount"
                        type="number"
                        min="2"
                        max="9999"
                        inputMode="numeric"
                        value={
                          form.portfolioPropertyCount
                        }
                        onChange={
                          handleTextChange
                        }
                        placeholder="e.g. 12"
                        aria-invalid={Boolean(
                          errors.portfolioPropertyCount,
                        )}
                      />

                      {errors.portfolioPropertyCount ? (
                        <p
                          className={
                            styles.fieldError
                          }
                          role="alert"
                        >
                          {
                            errors.portfolioPropertyCount
                          }
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div
                    className={styles.field}
                  >
                    <FieldLabel>
                      Brief Portfolio Notes
                    </FieldLabel>

                    <textarea
                      name="portfolioNotes"
                      value={
                        form.portfolioNotes
                      }
                      onChange={
                        handleTextChange
                      }
                      rows={5}
                      placeholder="For example: mainly rental homes around Spalding and surrounding villages."
                    />
                  </div>

                  <div
                    className={
                      styles.inlineNotice
                    }
                  >
                    Alpha can contact you to discuss the wider
                    property list rather than requiring a
                    separate online form for every property.
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}

          <section className={styles.section}>
            <div className={styles.sectionIntro}>
              <span
                className={styles.sectionNumber}
              >
                12
              </span>

              <div>
                <h2>
                  Property & Access Photos
                </h2>

                <p>
                  These are optional wider photographs, not
                  replacements for the job photos already
                  provided in Step 2.
                </p>
              </div>
            </div>

            {previousAttachmentCount > 0 ? (
              <div
                className={
                  styles.existingFiles
                }
              >
                <div>
                  <strong>
                    Supporting files already
                    attached:
                  </strong>

                  <span>
                    {previousAttachmentCount}
                  </span>
                </div>

                <Link
                  href="/request-a-quote/service-details"
                >
                  VIEW ATTACHMENTS
                </Link>
              </div>
            ) : null}

            <div
              className={
                styles.uploadIntro
              }
            >
              <p>
                If useful, add wider photographs showing
                the property, room layout, access route,
                parking area, garden entrance or other
                information that may help us understand the
                job.
              </p>

              <div
                className={
                  styles.exampleTags
                }
              >
                <span>
                  Front of property
                </span>

                <span>
                  Room overview
                </span>

                <span>
                  Side access
                </span>

                <span>
                  Rear garden access
                </span>

                <span>
                  Staircase / access route
                </span>

                <span>
                  Parking / loading area
                </span>

                <span>
                  Wider roofline view
                </span>
              </div>
            </div>

            <div
              className={
                styles.uploadBox
              }
            >
              <div
                className={
                  styles.uploadIcon
                }
              >
                ▧
              </div>

              <div>
                <h3>
                  Add Property or Access Photos
                </h3>

                <p>
                  Up to {PROPERTY_PHOTO_LIMIT} additional
                  images. These remain attached to this
                  enquiry while you continue.
                </p>
              </div>

              <button
                type="button"
                className={
                  styles.primarySmallButton
                }
                onClick={() =>
                  photoInputRef.current?.click()
                }
              >
                ADD PHOTOS
              </button>

              <input
                ref={photoInputRef}
                className={
                  styles.hiddenInput
                }
                type="file"
                accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                multiple
                capture="environment"
                onChange={(event) => {
                  void addPropertyPhotos(
                    event.target.files,
                  );

                  event.currentTarget.value = "";
                }}
              />
            </div>

            <div
              className={
                styles.photoPrivacy
              }
            >
              Please avoid including people, vehicle
              registrations, documents or other unnecessary
              personal information in photographs where
              possible.
            </div>

            {photoError ? (
              <div
                className={
                  styles.photoError
                }
                role="alert"
              >
                {photoError}
              </div>
            ) : null}

            {propertyPhotos.length > 0 ? (
              <div
                className={
                  styles.photoGrid
                }
              >
                {propertyPhotos.map(
                  (photo) => (
                    <article
                      key={photo.id}
                      className={
                        styles.photoCard
                      }
                    >
                      {previewUrls[
                        photo.id
                      ] ? (
                        <img
                          src={
                            previewUrls[
                              photo.id
                            ]
                          }
                          alt={photo.name}
                        />
                      ) : (
                        <div
                          className={
                            styles.photoPlaceholder
                          }
                        >
                          PHOTO
                        </div>
                      )}

                      <div
                        className={
                          styles.photoInfo
                        }
                      >
                        <strong
                          title={
                            photo.name
                          }
                        >
                          {photo.name}
                        </strong>

                        <small>
                          {formatFileSize(
                            photo.size,
                          )}
                        </small>

                        {photo.status ===
                        "saving" ? (
                          <span
                            className={
                              styles.photoStatus
                            }
                          >
                            SAVING...
                          </span>
                        ) : null}

                        {photo.status ===
                        "saved" ? (
                          <span
                            className={
                              styles.photoSuccess
                            }
                          >
                            SAVED ✓
                          </span>
                        ) : null}

                        {photo.status ===
                        "failed" ? (
                          <span
                            className={
                              styles.photoFailed
                            }
                          >
                            Could not save
                          </span>
                        ) : null}

                        <div
                          className={
                            styles.photoActions
                          }
                        >
                          {photo.status ===
                          "failed" ? (
                            <button
                              type="button"
                              onClick={() =>
                                void retryPropertyPhoto(
                                  photo,
                                )
                              }
                            >
                              Retry
                            </button>
                          ) : null}

                          <button
                            type="button"
                            onClick={() =>
                              void removePropertyPhoto(
                                photo.id,
                              )
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </article>
                  ),
                )}
              </div>
            ) : null}
          </section>

          <section className={styles.section}>
            <div className={styles.sectionIntro}>
              <span
                className={styles.sectionNumber}
              >
                13
              </span>

              <div>
                <h2>
                  Anything Else We Should Know?
                </h2>

                <p>
                  Keep this broad and practical. Include
                  anything useful for attendance, access or
                  the wider property context.
                </p>
              </div>
            </div>

            <label
              className={styles.checkboxSingle}
            >
              <input
                type="checkbox"
                checked={
                  form.petsAtProperty
                }
                onChange={(event) =>
                  updateForm(
                    "petsAtProperty",
                    event.target.checked,
                  )
                }
              />

              <span>
                There may be pets at the property
              </span>
            </label>

            <div
              className={styles.field}
            >
              <FieldLabel>
                Additional Property / Access Notes
              </FieldLabel>

              <textarea
                name="additionalNotes"
                value={
                  form.additionalNotes
                }
                onChange={
                  handleTextChange
                }
                rows={6}
                placeholder="For example: dogs / pets, shared entrance, restricted access times, business opening hours or building management requirements."
              />
            </div>

            <div
              className={
                styles.privacyNote
              }
            >
              Do not include medical information or other
              sensitive personal details unless they are genuinely
              necessary for the work or attendance arrangements.
            </div>
          </section>

          <section
            className={
              styles.expectationPanel
            }
          >
            <h2>
              Will Alpha Need to Visit?
            </h2>

            <p>
              Some jobs can be understood from the information
              and photographs provided, while others may require
              a property assessment before a quotation can be
              confirmed.
            </p>

            <p>
              We’ll review your enquiry and let you know the
              appropriate next step.
            </p>
          </section>

          <section
            className={
              styles.expectationPanel
            }
          >
            <h2>
              Quotation Information
            </h2>

            <p>
              Information and measurements supplied through
              this form help us assess your enquiry but do not
              replace any site measurements or checks Alpha may
              need before agreeing the final scope.
            </p>
          </section>

          <div
            className={
              styles.formBottomActions
            }
          >
            <button
              type="button"
              className={
                styles.backButton
              }
              onClick={handleBack}
            >
              ← BACK TO SERVICE DETAILS
            </button>

            <button
              type="submit"
              className={
                styles.continueButton
              }
              disabled={saving}
            >
              {saving
                ? "SAVING..."
                : "CONTINUE TO REVIEW →"}
            </button>
          </div>

          {notice ? (
            <p
              className={
                styles.savedNotice
              }
              role="status"
            >
              {notice}
            </p>
          ) : null}
        </div>

        <aside
          className={
            styles.sidebar
          }
        >
          <div
            className={
              styles.sidebarCard
            }
          >
            <span
              className={
                styles.sidebarEyebrow
              }
            >
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
                    Customer information
                  </small>
                </div>
              </li>

              <li>
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

              <li
                className={
                  styles.sidebarActive
                }
              >
                <span>3</span>
                <div>
                  <strong>
                    Property Details
                  </strong>

                  <small>
                    Where the work takes place
                  </small>
                </div>
              </li>

              <li>
                <span>4</span>
                <div>
                  <strong>
                    Review &amp; Send
                  </strong>

                  <small>
                    Final check before submission
                  </small>
                </div>
              </li>
            </ol>

            <div
              className={
                styles.sidebarNote
              }
            >
              Your Step 17 customer information and Step
              18 service details remain attached to this
              enquiry while you complete this page.
            </div>
          </div>

          <div
            className={
              styles.sidebarSummary
            }
          >
            <span>
              PROPERTY REQUESTED BY
            </span>

            <strong>
              {customerType ||
                "Customer / organisation"}
            </strong>

            <Link href="/request-a-quote">
              CHANGE CUSTOMER DETAILS →
            </Link>
          </div>

          <div
            className={
              styles.sidebarEmergency
            }
          >
            <span>
              EMERGENCY?
            </span>

            <h3>
              Need urgent help?
            </h3>

            <p>
              For an active property or plumbing emergency,
              call Alpha directly as well as completing the
              form.
            </p>

            <a href="tel:01775518068">
              01775 518068
            </a>
          </div>

          <div
            className={
              styles.sidebarContact
            }
          >
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
            className={
              styles.privacyLink
            }
          >
            Privacy Policy
          </Link>
        </aside>
      </form>

      <Footer />
    </main>
  );
}