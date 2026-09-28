"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./search-results.module.css";

type Article = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  searchTerms: string[];
  relatedService?: {
    label: string;
    href: string;
  };
  date: string;
  href: string;
};

type SearchResultsClientProps = {
  initialQuery: string;
  initialCategory: string;
};

const articles: Article[] = [
  {
    title: "How to Keep Your Home Warm in Winter",
    excerpt:
      "Practical guidance for keeping your home warmer during colder weather and looking after the property through winter.",
    category: "Home Care",
    tags: [
      "home care",
      "winter",
      "home maintenance",
      "cold weather",
      "property care",
    ],
    searchTerms: [
      "warm",
      "warmer",
      "winter",
      "cold",
      "heating",
      "draught",
      "draughts",
      "home",
      "house",
    ],
    relatedService: {
      label: "View Property Maintenance",
      href: "/property-maintenance",
    },
    date: "15 January 2026",
    href: "/advice/how-to-keep-your-home-warm",
  },
  {
    title: "How to Prevent Damp and Mould",
    excerpt:
      "Useful guidance on common damp and mould warning signs and practical property maintenance.",
    category: "Property Maintenance",
    tags: [
      "damp",
      "mould",
      "moisture",
      "property maintenance",
      "ventilation",
    ],
    searchTerms: [
      "damp",
      "mould",
      "mold",
      "moisture",
      "water",
      "condensation",
      "staining",
      "ventilation",
      "walls",
    ],
    relatedService: {
      label: "View Property Maintenance",
      href: "/property-maintenance",
    },
    date: "8 January 2026",
    href: "/advice/how-to-prevent-damp-and-mould",
  },
  {
    title: "Preparing Your Garden for Summer",
    excerpt:
      "Practical seasonal guidance for getting your garden ready for summer and keeping outdoor areas manageable.",
    category: "Garden Care",
    tags: [
      "garden",
      "summer",
      "garden maintenance",
      "grass",
      "hedges",
    ],
    searchTerms: [
      "garden",
      "summer",
      "grass",
      "lawn",
      "hedge",
      "hedges",
      "weeding",
      "overgrown",
      "outdoor",
    ],
    relatedService: {
      label: "View Garden Services",
      href: "/garden-services",
    },
    date: "2 January 2026",
    href: "/advice/preparing-your-garden-for-summer",
  },
  {
    title: "Landlord Property Maintenance Checklist",
    excerpt:
      "A practical checklist to help landlords keep rental properties maintained and identify common property-care tasks.",
    category: "Landlord Advice",
    tags: [
      "landlord",
      "rental property",
      "property maintenance",
      "checks",
    ],
    searchTerms: [
      "landlord",
      "rental",
      "rent",
      "tenant",
      "void",
      "property",
      "maintenance",
      "checklist",
      "end tenancy",
    ],
    relatedService: {
      label: "View Landlord Services",
      href: "/landlords-letting-agents",
    },
    date: "12 December 2025",
    href: "/advice/landlord-property-maintenance-checklist",
  },
  {
    title: "Simple Garden Maintenance Tips",
    excerpt:
      "Straightforward guidance for keeping gardens tidy, manageable and maintained throughout the year.",
    category: "Garden Care",
    tags: [
      "garden",
      "maintenance",
      "grass",
      "weeding",
      "hedges",
    ],
    searchTerms: [
      "garden",
      "maintenance",
      "grass",
      "lawn",
      "weeding",
      "weed",
      "hedge",
      "shrub",
      "tidy",
    ],
    relatedService: {
      label: "View Garden Services",
      href: "/garden-services",
    },
    date: "5 December 2025",
    href: "/advice/simple-garden-maintenance-tips",
  },
  {
    title: "Improving Ventilation in Your Home",
    excerpt:
      "Helpful advice on ventilation and maintaining better indoor conditions around the home.",
    category: "Home Care",
    tags: [
      "ventilation",
      "condensation",
      "home care",
      "airflow",
      "damp",
    ],
    searchTerms: [
      "ventilation",
      "airflow",
      "air",
      "condensation",
      "damp",
      "moisture",
      "bathroom",
      "kitchen",
    ],
    relatedService: {
      label: "View Property Maintenance",
      href: "/property-maintenance",
    },
    date: "28 November 2025",
    href: "/advice/improving-home-ventilation",
  },
  {
    title: "Preparing Your Property for Winter",
    excerpt:
      "Seasonal property-care guidance to help prepare a home before colder and wetter weather arrives.",
    category: "Seasonal Advice",
    tags: [
      "winter",
      "seasonal advice",
      "property maintenance",
      "weather",
      "home care",
    ],
    searchTerms: [
      "winter",
      "cold",
      "weather",
      "rain",
      "property",
      "home",
      "gutter",
      "roof",
      "maintenance",
    ],
    relatedService: {
      label: "View Property Maintenance",
      href: "/property-maintenance",
    },
    date: "15 November 2025",
    href: "/advice/preparing-property-for-winter",
  },
  {
    title: "Small Improvements That Make a Difference",
    excerpt:
      "Practical ideas for keeping a property maintained, cared for and comfortable through small improvements.",
    category: "Home Care",
    tags: [
      "home care",
      "property maintenance",
      "improvements",
      "repairs",
    ],
    searchTerms: [
      "home",
      "property",
      "improvements",
      "repair",
      "repairs",
      "maintenance",
      "decorating",
      "upgrade",
    ],
    relatedService: {
      label: "View Property Maintenance",
      href: "/property-maintenance",
    },
    date: "4 November 2025",
    href: "/advice/small-home-improvements",
  },
  {
    title: "Spring Garden Checklist",
    excerpt:
      "A practical spring checklist for getting gardens maintained and ready for the growing season.",
    category: "Garden Care",
    tags: [
      "spring",
      "garden",
      "garden care",
      "maintenance",
      "checklist",
    ],
    searchTerms: [
      "spring",
      "garden",
      "grass",
      "lawn",
      "hedge",
      "weeding",
      "growing",
      "garden maintenance",
    ],
    relatedService: {
      label: "View Garden Services",
      href: "/garden-services",
    },
    date: "20 October 2025",
    href: "/advice/spring-garden-checklist",
  },
  {
    title: "End of Tenancy Property Checklist",
    excerpt:
      "A useful property-care checklist for landlords and rental properties approaching the end of a tenancy.",
    category: "Landlord Advice",
    tags: [
      "landlord",
      "end of tenancy",
      "rental property",
      "property checklist",
    ],
    searchTerms: [
      "landlord",
      "tenant",
      "tenancy",
      "rental",
      "void",
      "checklist",
      "decorating",
      "garden",
      "damage",
    ],
    relatedService: {
      label: "View Landlord Services",
      href: "/landlords-letting-agents",
    },
    date: "8 October 2025",
    href: "/advice/end-of-tenancy-checklist",
  },
  {
    title: "Easy DIY Maintenance Jobs Around the Home",
    excerpt:
      "A practical guide to straightforward property maintenance tasks around the home, with sensible limits on DIY work.",
    category: "Property Maintenance",
    tags: [
      "property maintenance",
      "home maintenance",
      "DIY",
      "repairs",
    ],
    searchTerms: [
      "diy",
      "maintenance",
      "home maintenance",
      "property maintenance",
      "repair",
      "repairs",
      "holes",
      "fixing",
      "fittings",
    ],
    relatedService: {
      label: "View Property Maintenance",
      href: "/property-maintenance",
    },
    date: "1 October 2025",
    href: "/advice/diy-maintenance-jobs",
  },
];

const supportedCategories = [
  "Property Maintenance",
  "Plumbing",
  "Bathrooms",
  "Kitchens",
  "Tiling & Flooring",
  "Painting & Decorating",
  "Roofing & Gutters",
  "Garden Care",
  "Landlord Advice",
  "Seasonal Advice",
  "Home Care",
];

const typoCorrections: Record<string, string> = {
  pluming: "plumbing",
  plumbng: "plumbing",
  sealnt: "sealant",
  silcone: "silicone",
  blokced: "blocked",
  toile: "toilet",
  bathrom: "bathroom",
  gardne: "garden",
  gutterng: "guttering",
};

const synonyms: Record<string, string[]> = {
  tap: ["faucet", "taps"],
  faucet: ["tap", "taps"],
  taps: ["tap", "faucet"],
  toilet: ["wc", "toilets"],
  wc: ["toilet", "toilets"],
  gutter: ["guttering", "gutters"],
  guttering: ["gutter", "gutters"],
  gutters: ["gutter", "guttering"],
  decorating: ["painting", "paint", "decorate"],
  painting: ["decorating", "paint"],
  leak: ["leaking", "dripping"],
  leaking: ["leak", "dripping"],
  dripping: ["drip", "leaking", "leak"],
  "garden clearance": [
    "overgrown garden",
    "garden clear-up",
    "garden tidy",
  ],
  "overgrown garden": [
    "garden clearance",
    "garden clear-up",
    "garden tidy",
  ],
};

const serviceMappings = [
  {
    keys: [
      "property",
      "repair",
      "repairs",
      "maintenance",
      "damaged",
      "damage",
      "plaster",
      "crack",
      "cracks",
      "wall",
      "ceiling",
    ],
    heading: "Need Practical Property Help?",
    text:
      "If the problem needs repair, maintenance or professional attention, Alpha may be able to help.",
    serviceLabel: "View Property Maintenance",
    href: "/property-maintenance",
  },
  {
    keys: [
      "renovation",
      "renovate",
      "refurbishment",
      "refurbish",
      "upgrade",
    ],
    heading: "Planning Renovation or Refurbishment Work?",
    text:
      "If several areas need improvement at the same time, Alpha can help you explain what needs doing.",
    serviceLabel: "View Property Renovations",
    href: "/property-renovations",
  },
  {
    keys: [
      "leak",
      "leaking",
      "dripping",
      "tap",
      "taps",
      "toilet",
      "wc",
      "pipe",
      "pipework",
      "plumbing",
      "water",
    ],
    heading: "Looking for Help With a Plumbing Problem?",
    text:
      "If you need practical help rather than advice, Alpha may be able to assist with suitable plumbing repairs and water-related property work.",
    serviceLabel: "View Plumbing Services",
    href: "/plumbing-services",
  },
  {
    keys: [
      "bath",
      "bathroom",
      "shower",
      "shower tray",
      "silicone",
      "sealant",
      "grout",
    ],
    heading: "Planning Bathroom Work?",
    text:
      "If your bathroom needs practical repair, maintenance or improvement, tell Alpha what needs doing.",
    serviceLabel: "View Bathroom Services",
    href: "/our-services",
  },
  {
    keys: [
      "kitchen",
      "worktop",
      "worktops",
      "units",
      "sink",
      "cabinet",
      "cabinets",
    ],
    heading: "Looking for Help With Kitchen Work?",
    text:
      "Kitchen issues can involve plumbing, finishes, flooring and fittings. Tell Alpha what needs attention.",
    serviceLabel: "View Kitchen Services",
    href: "/our-services",
  },
  {
    keys: [
      "tile",
      "tiles",
      "tiling",
      "grout",
      "floor",
      "flooring",
    ],
    heading: "Need Help With Tiles or Flooring?",
    text:
      "If tiled or flooring areas need repair, replacement or practical attention, Alpha can review the job.",
    serviceLabel: "View Tiling & Flooring",
    href: "/our-services",
  },
  {
    keys: [
      "paint",
      "painting",
      "decorating",
      "wall",
      "walls",
      "ceiling",
      "ceilings",
    ],
    heading: "Need Help With Painting or Decorating?",
    text:
      "Tell Alpha what needs preparing, repairing or redecorating and the team can review the work required.",
    serviceLabel: "View Painting & Decorating",
    href: "/painting-and-decorating",
  },
  {
    keys: [
      "roof",
      "roofing",
      "gutter",
      "gutters",
      "guttering",
      "downpipe",
      "downpipes",
      "roofline",
    ],
    heading: "Need Help With Roofing or Gutters?",
    text:
      "Visible gutter and roofline problems may need appropriate professional attention, especially where safe access is not possible.",
    serviceLabel: "View Roofing & Gutters",
    href: "/roofing-and-gutter-services",
  },
  {
    keys: [
      "garden",
      "grass",
      "lawn",
      "hedge",
      "hedges",
      "weeds",
      "weeding",
      "overgrown",
      "strimming",
      "clearance",
    ],
    heading: "Need Help Getting the Garden Back Under Control?",
    text:
      "If the garden has become difficult to manage or needs regular maintenance, tell Alpha what needs doing.",
    serviceLabel: "View Garden Services",
    href: "/garden-services",
  },
  {
    keys: [
      "landlord",
      "tenant",
      "tenants",
      "rental",
      "tenancy",
      "void",
      "letting",
    ],
    heading: "Need Help Maintaining a Rental Property?",
    text:
      "Alpha can help with practical property maintenance for landlords and managed rental homes.",
    serviceLabel: "View Landlord Services",
    href: "/landlords-letting-agents",
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s&/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string) {
  return normalize(value).split(" ").filter(Boolean);
}

function levenshteinDistance(a: string, b: string) {
  const matrix = Array.from({ length: b.length + 1 }, () =>
    new Array(a.length + 1).fill(0)
  );

  for (let i = 0; i <= b.length; i += 1) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= a.length; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function tokenMatches(token: string, candidate: string) {
  if (!token || !candidate) return false;

  if (token === candidate) return true;

  if (candidate.includes(token) || token.includes(candidate)) {
    return true;
  }

  const threshold =
    Math.max(token.length, candidate.length) >= 7
      ? 2
      : token.length >= 5
        ? 1
        : 0;

  if (!threshold) return false;

  return levenshteinDistance(token, candidate) <= threshold;
}

function expandedQueryTokens(query: string) {
  const originalTokens = tokenize(query);
  const expanded = new Set(originalTokens);

  for (const token of originalTokens) {
    const replacementTerms = synonyms[token] || [];

    for (const replacement of replacementTerms) {
      for (const replacementToken of tokenize(replacement)) {
        expanded.add(replacementToken);
      }
    }
  }

  const normalizedQuery = normalize(query);

  for (const [phrase, replacements] of Object.entries(
    synonyms
  )) {
    if (!normalizedQuery.includes(phrase)) continue;

    for (const replacement of replacements) {
      for (const replacementToken of tokenize(replacement)) {
        expanded.add(replacementToken);
      }
    }
  }

  return {
    originalTokens,
    expandedTokens: Array.from(expanded),
  };
}

function getArticleSearchText(article: Article) {
  return normalize(
    [
      article.title,
      article.excerpt,
      article.category,
      ...article.tags,
      ...article.searchTerms,
      article.relatedService?.label || "",
    ].join(" ")
  );
}

function scoreArticle(article: Article, query: string) {
  if (!query.trim()) return 0;

  const normalizedQuery = normalize(query);
  const { originalTokens, expandedTokens } =
    expandedQueryTokens(query);

  const title = normalize(article.title);
  const excerpt = normalize(article.excerpt);
  const category = normalize(article.category);
  const tags = normalize(article.tags.join(" "));
  const searchTerms = normalize(article.searchTerms.join(" "));
  const fullText = getArticleSearchText(article);

  let score = 0;

  if (title.includes(normalizedQuery)) {
    score += 100;
  }

  if (excerpt.includes(normalizedQuery)) {
    score += 65;
  }

  if (category.includes(normalizedQuery)) {
    score += 45;
  }

  if (tags.includes(normalizedQuery)) {
    score += 38;
  }

  if (searchTerms.includes(normalizedQuery)) {
    score += 32;
  }

  for (const token of originalTokens) {
    if (!token) continue;

    const titleWords = title.split(" ");
    const excerptWords = excerpt.split(" ");
    const categoryWords = category.split(" ");
    const tagWords = tags.split(" ");
    const searchWords = searchTerms.split(" ");

    if (
      titleWords.some((word) => tokenMatches(token, word))
    ) {
      score += 28;
    } else if (
      excerptWords.some((word) => tokenMatches(token, word))
    ) {
      score += 20;
    } else if (
      categoryWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 16;
    } else if (
      tagWords.some((word) => tokenMatches(token, word))
    ) {
      score += 13;
    } else if (
      searchWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 10;
    }
  }

  for (const token of expandedTokens) {
    if (!token || originalTokens.includes(token)) continue;

    if (
      title
        .split(" ")
        .some((word) => tokenMatches(token, word))
    ) {
      score += 17;
    } else if (
      tags
        .split(" ")
        .some((word) => tokenMatches(token, word))
    ) {
      score += 11;
    } else if (
      searchTerms
        .split(" ")
        .some((word) =>
          tokenMatches(token, word)
        )
    ) {
      score += 9;
    } else if (
      excerpt
        .split(" ")
        .some((word) =>
          tokenMatches(token, word)
        )
    ) {
      score += 8;
    }
  }

  const matchedOriginalTokenCount = originalTokens.filter(
    (token) =>
      fullText
        .split(" ")
        .some((word) => tokenMatches(token, word))
  ).length;

  if (originalTokens.length > 0) {
    score +=
      (matchedOriginalTokenCount / originalTokens.length) *
      24;
  }

  return score;
}

function queryLooksUrgent(query: string) {
  const normalized = normalize(query);

  const urgentTerms = [
    "burst pipe",
    "pipe burst",
    "water pouring",
    "major leak",
    "water pouring out",
    "rapid water damage",
    "flooding from pipework",
    "flooding",
    "flood from pipe",
    "active water leak",
  ];

  return urgentTerms.some((term) =>
    normalized.includes(term)
  );
}

function getServiceMapping(query: string) {
  const normalized = normalize(query);

  return (
    serviceMappings.find((mapping) =>
      mapping.keys.some((keyword) =>
        normalized.includes(keyword)
      )
    ) || null
  );
}

function getAvailableCategories() {
  const categorySet = new Set(
    articles.map((article) => article.category)
  );

  return supportedCategories.filter((category) =>
    categorySet.has(category)
  );
}

function getCandidateSuggestions(query: string) {
  const normalized = normalize(query);

  const candidates: string[] = [];

  if (
    normalized.includes("bath") ||
    normalized.includes("shower") ||
    normalized.includes("silicone") ||
    normalized.includes("sealant")
  ) {
    candidates.push(
      "Damp and mould",
      "Ventilation",
      "Home care"
    );
  }

  if (
    normalized.includes("water") ||
    normalized.includes("leak") ||
    normalized.includes("wet") ||
    normalized.includes("damp")
  ) {
    candidates.push(
      "Damp and mould",
      "Ventilation",
      "Home care"
    );
  }

  if (
    normalized.includes("garden") ||
    normalized.includes("grass") ||
    normalized.includes("hedge") ||
    normalized.includes("overgrown")
  ) {
    candidates.push(
      "Garden maintenance",
      "Spring garden checklist",
      "Preparing your garden for summer"
    );
  }

  if (
    normalized.includes("landlord") ||
    normalized.includes("tenant") ||
    normalized.includes("tenancy") ||
    normalized.includes("rental")
  ) {
    candidates.push(
      "Landlord property maintenance",
      "End of tenancy checklist"
    );
  }

  if (
    normalized.includes("winter") ||
    normalized.includes("summer") ||
    normalized.includes("spring") ||
    normalized.includes("season")
  ) {
    candidates.push(
      "Preparing your property for winter",
      "Preparing your garden for summer",
      "Spring garden checklist"
    );
  }

  if (
    normalized.includes("repair") ||
    normalized.includes("property") ||
    normalized.includes("maintenance") ||
    normalized.includes("wall") ||
    normalized.includes("crack")
  ) {
    candidates.push(
      "Property maintenance",
      "Home maintenance"
    );
  }

  const uniqueCandidates = Array.from(
    new Set(candidates)
  );

  return uniqueCandidates
    .filter((candidate) =>
      articles.some(
        (article) =>
          scoreArticle(article, candidate) >= 12
      )
    )
    .slice(0, 4);
}

function getTypoSuggestion(query: string) {
  const normalized = normalize(query);

  if (typoCorrections[normalized]) {
    return typoCorrections[normalized];
  }

  if (normalized.length < 5) {
    return null;
  }

  const typoEntries = Object.entries(typoCorrections);

  for (const [misspelling, correction] of typoEntries) {
    if (
      levenshteinDistance(normalized, misspelling) <= 1
    ) {
      return correction;
    }
  }

  return null;
}

function highlightText(text: string, query: string) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return text;
  }

  const tokens = normalizedQuery
    .split(" ")
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  if (!tokens.length) {
    return text;
  }

  const pattern = new RegExp(
    `(${tokens
      .map((token) =>
        token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      )
      .join("|")})`,
    "gi"
  );

  return text.split(pattern).map((part, index) => {
    const matches = tokens.some(
      (token) => normalize(part) === token
    );

    return matches ? (
      <mark key={`${part}-${index}`}>{part}</mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    );
  });
}

function sendSearchAnalytics(payload: {
  query: string;
  resultCount: number;
  action?: string;
  clickedResult?: string;
}) {
  const endpoint =
    process.env.NEXT_PUBLIC_ADVICE_SEARCH_ANALYTICS_ENDPOINT;

  if (!endpoint) return;

  try {
    const body = JSON.stringify({
      query: payload.query.slice(0, 300),
      resultCount: payload.resultCount,
      action: payload.action || "search",
      clickedResult:
        payload.clickedResult || null,
      timestamp: new Date().toISOString(),
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([body], {
        type: "application/json",
      });

      navigator.sendBeacon(endpoint, blob);
      return;
    }

    void fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
      keepalive: true,
    });
  } catch {
    // Search analytics must never interrupt the search journey.
  }
}

export default function SearchResultsClient({
  initialQuery,
  initialCategory,
}: SearchResultsClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryFromUrl = (
    searchParams.get("q") || initialQuery
  )
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 300);

  const categoryFromUrl =
    searchParams.get("category") || initialCategory;

  const [inputValue, setInputValue] = useState(
    queryFromUrl
  );

  const [visibleCount, setVisibleCount] =
    useState(10);

  useEffect(() => {
    setInputValue(queryFromUrl);
    setVisibleCount(10);
  }, [queryFromUrl, categoryFromUrl]);

  const rankedResults = useMemo(() => {
    if (!queryFromUrl) {
      return [];
    }

    return articles
      .map((article) => ({
        article,
        score: scoreArticle(article, queryFromUrl),
      }))
      .filter((item) => item.score >= 9)
      .sort((a, b) => b.score - a.score);
  }, [queryFromUrl]);

  const filteredResults = useMemo(() => {
    if (!categoryFromUrl) {
      return rankedResults;
    }

    return rankedResults.filter(
      ({ article }) =>
        normalize(article.category) ===
        normalize(categoryFromUrl)
    );
  }, [rankedResults, categoryFromUrl]);

  const availableCategories = useMemo(
    () => getAvailableCategories(),
    []
  );

  const suggestions = useMemo(
    () => getCandidateSuggestions(queryFromUrl),
    [queryFromUrl]
  );

  const typoSuggestion = useMemo(
    () => getTypoSuggestion(queryFromUrl),
    [queryFromUrl]
  );

  const closestResults = useMemo(() => {
    if (!queryFromUrl || filteredResults.length > 0) {
      return [];
    }

    return articles
      .map((article) => ({
        article,
        score: scoreArticle(article, queryFromUrl),
      }))
      .filter((item) => item.score >= 18)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [queryFromUrl, filteredResults.length]);

  const visibleResults = filteredResults.slice(
    0,
    visibleCount
  );

  const hasMore =
    visibleCount < filteredResults.length;

  const isLowConfidence =
    filteredResults.length > 0 &&
    filteredResults[0].score < 45;

  const serviceMapping = useMemo(
    () => getServiceMapping(queryFromUrl),
    [queryFromUrl]
  );

  const isNoResults =
    Boolean(queryFromUrl) &&
    filteredResults.length === 0;

  const handleSearch = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmed = inputValue
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 300);

    const params = new URLSearchParams();

    if (trimmed) {
      params.set("q", trimmed);
    }

    router.push(
      `${pathname}${
        params.toString() ? `?${params.toString()}` : ""
      }`
    );

    sendSearchAnalytics({
      query: trimmed,
      resultCount: 0,
      action: "search_again",
    });
  };

  const handleCategoryChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = event.target.value;

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (queryFromUrl) {
      params.set("q", queryFromUrl);
    } else {
      params.delete("q");
    }

    if (selected) {
      params.set("category", selected);
    } else {
      params.delete("category");
    }

    router.replace(
      `${pathname}${
        params.toString()
          ? `?${params.toString()}`
          : ""
      }`
    );

    setVisibleCount(10);

    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount: filteredResults.length,
      action: "category_filter",
      clickedResult: selected,
    });
  };

  const handleSuggestionClick = (
    suggestion: string
  ) => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount: 0,
      action: "suggestion_click",
      clickedResult: suggestion,
    });
  };

  const handleServiceClick = () => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount: 0,
      action: "service_click",
      clickedResult:
        serviceMapping?.serviceLabel ||
        "Request a Quote",
    });
  };

  const handleQuoteClick = () => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount: 0,
      action: "quote_click",
      clickedResult: "Request a Quote",
    });
  };

  const handleContactClick = () => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount: 0,
      action: "contact_click",
      clickedResult: "Contact Alpha",
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((current) => current + 10);
  };

  const handleArticleClick = (
    title: string
  ) => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount: filteredResults.length,
      action: "article_click",
      clickedResult: title,
    });
  };

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <nav
            className={styles.breadcrumbs}
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/advice">Advice</Link>
            <span>→</span>
            <span>Search</span>
          </nav>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              ADVICE SEARCH
            </span>

            <h1>Search Alpha Advice</h1>

            <p>
              Find practical guidance on property maintenance,
              plumbing, bathrooms, kitchens, decorating,
              flooring, gutters, gardens and landlord property
              care.
            </p>

            <form
              onSubmit={handleSearch}
              className={styles.heroSearchForm}
              role="search"
            >
              <label
                htmlFor="advice-search"
                className={styles.srOnly}
              >
                Search property advice
              </label>

              <input
                id="advice-search"
                name="q"
                type="search"
                value={inputValue}
                maxLength={300}
                onChange={(event) =>
                  setInputValue(
                    event.target.value.slice(0, 300)
                  )
                }
                placeholder="Search property advice..."
                autoComplete="off"
              />

              <button type="submit">
                Search Again
              </button>
            </form>
          </div>

          {queryFromUrl && (
            <div className={styles.currentQuery}>
              Current search:{" "}
              <strong>“{queryFromUrl}”</strong>
            </div>
          )}
        </div>
      </div>

      <div className={styles.container}>
        {!queryFromUrl ? (
          <section className={styles.emptySearchState}>
            <span className={styles.eyebrow}>
              SEARCH ALPHA ADVICE
            </span>

            <h2>Enter a word or question to find property-care guidance.</h2>

            <p>
              Search for a specific property problem or browse the
              available Advice topics.
            </p>

            <div className={styles.emptyActions}>
              <Link
                href="/advice"
                className={styles.primaryButton}
              >
                Browse Advice Hub
              </Link>

              <Link
                href="/advice/homecare-advice"
                className={styles.secondaryButton}
              >
                Home Care Advice
              </Link>
            </div>
          </section>
        ) : isNoResults ? (
          <section
            className={styles.noResultsPage}
            aria-live="polite"
            aria-atomic="true"
          >
            {/* =================================================
                NO RESULTS HERO
            ================================================== */}

            <div className={styles.noResultsIntro}>
              <span className={styles.eyebrow}>
                NO ADVICE MATCH
              </span>

              <h2>
                We Couldn't Find Advice for “
                {queryFromUrl}”
              </h2>

              <p>
                We couldn't find a published Alpha advice guide
                matching{" "}
                <strong>“{queryFromUrl}”</strong>.
              </p>

              <p>
                Try a different phrase, browse the topics below,
                or tell us what you need help with.
              </p>
            </div>

            {/* =================================================
                SEARCH AGAIN
            ================================================== */}

            <section className={styles.searchAgainSection}>
              <div>
                <span className={styles.eyebrow}>
                  SEARCH AGAIN
                </span>

                <h3>Try Another Search</h3>

                <p>
                  Edit the search phrase below and search the
                  published Alpha Advice library again.
                </p>
              </div>

              <form
                onSubmit={handleSearch}
                className={styles.noResultsSearchForm}
                role="search"
              >
                <label
                  htmlFor="no-results-search"
                  className={styles.srOnly}
                >
                  Search property advice again
                </label>

                <input
                  id="no-results-search"
                  type="search"
                  value={inputValue}
                  maxLength={300}
                  onChange={(event) =>
                    setInputValue(
                      event.target.value.slice(0, 300)
                    )
                  }
                  placeholder="Search home or property advice..."
                />

                <button type="submit">
                  Search Again
                </button>
              </form>
            </section>

            {/* =================================================
                TYPO CORRECTION
            ================================================== */}

            {typoSuggestion && (
              <section className={styles.didYouMean}>
                <span className={styles.eyebrow}>
                  SEARCH SUGGESTION
                </span>

                <h3>
                  Did You Mean “{typoSuggestion}”?
                </h3>

                <p>
                  We found a close spelling match. Search the
                  Advice library using the corrected term.
                </p>

                <Link
                  href={`/advice/search?q=${encodeURIComponent(
                    typoSuggestion
                  )}`}
                  className={styles.textAction}
                  onClick={() => {
                    sendSearchAnalytics({
                      query: queryFromUrl,
                      resultCount: 0,
                      action: "typo_correction",
                      clickedResult:
                        typoSuggestion,
                    });
                  }}
                >
                  Search {typoSuggestion} <span>→</span>
                </Link>
              </section>
            )}

            {/* =================================================
                CONTROLLED SUGGESTIONS
            ================================================== */}

            {suggestions.length > 0 && (
              <section className={styles.suggestionSection}>
                <div className={styles.sectionHeading}>
                  <span className={styles.eyebrow}>
                    SEARCH SUGGESTIONS
                  </span>

                  <h3>You Could Try</h3>

                  <p>
                    These suggestions are based on real
                    published Alpha Advice topics.
                  </p>
                </div>

                <div className={styles.suggestionGrid}>
                  {suggestions.map((suggestion) => (
                    <Link
                      key={suggestion}
                      href={`/advice/search?q=${encodeURIComponent(
                        suggestion
                      )}`}
                      onClick={() =>
                        handleSuggestionClick(
                          suggestion
                        )
                      }
                    >
                      {suggestion}
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* =================================================
                CLOSEST MATCHES
            ================================================== */}

            {closestResults.length > 0 && (
              <section className={styles.closestSection}>
                <div className={styles.sectionHeading}>
                  <span className={styles.eyebrow}>
                    CLOSEST ADVICE
                  </span>

                  <h3>Closest Advice We Found</h3>

                  <p>
                    These published guides are not an exact
                    match, but they may help with the problem
                    you searched for.
                  </p>
                </div>

                <div className={styles.closestGrid}>
                  {closestResults.map(
                    ({ article }) => (
                      <article
                        key={article.href}
                        className={styles.closestCard}
                      >
                        <span className={styles.category}>
                          {article.category}
                        </span>

                        <h4>
                          <Link
                            href={article.href}
                            onClick={() =>
                              handleArticleClick(
                                article.title
                              )
                            }
                          >
                            {article.title}
                          </Link>
                        </h4>

                        <p>
                          {article.excerpt}
                        </p>

                        <Link
                          href={article.href}
                          className={styles.readArticle}
                          onClick={() =>
                            handleArticleClick(
                              article.title
                            )
                          }
                        >
                          Read Article
                          <span>→</span>
                        </Link>
                      </article>
                    )
                  )}
                </div>
              </section>
            )}

            {/* =================================================
                BROWSE TOPICS
            ================================================== */}

            <section className={styles.browseTopicsSection}>
              <div className={styles.sectionHeading}>
                <span className={styles.eyebrow}>
                  ADVICE CATEGORIES
                </span>

                <h3>Browse Advice by Topic</h3>

                <p>
                  Browse categories that currently contain
                  published Advice Hub content.
                </p>
              </div>

              <div className={styles.categoryGrid}>
                {availableCategories.map(
                  (category) => (
                    <Link
                      key={category}
                      href={`/advice/search?category=${encodeURIComponent(
                        category
                      )}`}
                    >
                      {category}
                      <span>→</span>
                    </Link>
                  )
                )}
              </div>
            </section>

            {/* =================================================
                HOME CARE / SEASONAL
            ================================================== */}

            <section className={styles.pathwayGrid}>
              <article className={styles.pathwayCard}>
                <span className={styles.eyebrow}>
                  NOT SURE WHAT TO SEARCH FOR?
                </span>

                <h3>Home Care Advice</h3>

                <p>
                  Browse practical everyday property guidance
                  covering maintenance, warning signs, repairs
                  and preventative care.
                </p>

                <Link
                  href="/advice/homecare-advice"
                  className={styles.outlineAction}
                >
                  View Home Care Advice
                  <span>→</span>
                </Link>
              </article>

              <article className={styles.pathwayCard}>
                <span className={styles.eyebrow}>
                  SEASONAL GUIDANCE
                </span>

                <h3>Is It a Seasonal Property Problem?</h3>

                <p>
                  Find spring, summer, autumn and winter
                  maintenance guidance.
                </p>

                <Link
                  href="/advice/seasonal-advice"
                  className={styles.outlineAction}
                >
                  View Seasonal Advice
                  <span>→</span>
                </Link>
              </article>
            </section>

            {/* =================================================
                SERVICE CTA
            ================================================== */}

            {serviceMapping ? (
              <section className={styles.serviceSection}>
                <div>
                  <span className={styles.eyebrow}>
                    PRACTICAL HELP
                  </span>

                  <h3>{serviceMapping.heading}</h3>

                  <p>{serviceMapping.text}</p>
                </div>

                <div className={styles.serviceActions}>
                  <Link
                    href={serviceMapping.href}
                    className={styles.secondaryButton}
                    onClick={handleServiceClick}
                  >
                    {serviceMapping.serviceLabel}
                    <span>→</span>
                  </Link>

                  <Link
                    href="/request-a-quote"
                    className={styles.primaryButton}
                    onClick={handleQuoteClick}
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>
                </div>
              </section>
            ) : (
              <section className={styles.serviceSection}>
                <div>
                  <span className={styles.eyebrow}>
                    NOT SURE WHICH SERVICE YOU NEED?
                  </span>

                  <h3>Not Sure Which Service You Need?</h3>

                  <p>
                    That's fine. Tell Alpha what you're seeing
                    and what you'd like help with.
                  </p>
                </div>

                <div className={styles.serviceActions}>
                  <Link
                    href="/request-a-quote"
                    className={styles.primaryButton}
                    onClick={handleQuoteClick}
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>
                </div>
              </section>
            )}

            {/* =================================================
                EMERGENCY
            ================================================== */}

            {queryLooksUrgent(queryFromUrl) && (
              <section className={styles.emergencySection}>
                <div>
                  <span className={styles.emergencyEyebrow}>
                    URGENT PROPERTY PROBLEM
                  </span>

                  <h3>Is This Happening Right Now?</h3>

                  <p>
                    Alpha provides 24/7 emergency property and
                    plumbing call-out support for suitable urgent
                    problems.
                  </p>

                  <strong>
                    24/7 Emergency Property &amp; Plumbing
                    Support
                  </strong>
                </div>

                <a
                  href="tel:01775518068"
                  className={styles.emergencyButton}
                >
                  Call Now
                  <span>01775 518068</span>
                </a>
              </section>
            )}

            {/* =================================================
                CONTACT FALLBACK
            ================================================== */}

            <section className={styles.contactSection}>
              <div>
                <span className={styles.eyebrow}>
                  STILL CAN'T FIND WHAT YOU NEED?
                </span>

                <h3>Tell Alpha What You're Dealing With</h3>

                <p>
                  Contact Alpha and explain what you're seeing.
                  We can help you identify the next practical
                  step.
                </p>
              </div>

              <Link
                href="/contact"
                className={styles.secondaryButton}
                onClick={handleContactClick}
              >
                Contact Alpha
                <span>→</span>
              </Link>
            </section>

            {/* =================================================
                FINAL CONVERSION
            ================================================== */}

            <section className={styles.finalCta}>
              <div className={styles.finalCtaInner}>
                <div>
                  <span className={styles.finalEyebrow}>
                    ONE TEAM. COMPLETE PROPERTY CARE.
                  </span>

                  <h2>
                    Need Help With the Problem Instead?
                  </h2>

                  <p>
                    You don't need to know the exact trade or
                    technical name. Tell Alpha what needs doing,
                    add photos if you have them, and we'll review
                    the information.
                  </p>
                </div>

                <div className={styles.finalActions}>
                  <Link
                    href="/request-a-quote"
                    className={styles.finalPrimary}
                    onClick={handleQuoteClick}
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>

                  <Link
                    href="/our-services"
                    className={styles.finalSecondary}
                  >
                    View Our Services
                  </Link>

                  <a
                    href="tel:01775518068"
                    className={styles.finalPhone}
                  >
                    Call 01775 518068
                  </a>
                </div>
              </div>
            </section>
          </section>
        ) : (
          <>
            {/* =================================================
                NORMAL SEARCH RESULTS
            ================================================== */}

            <section className={styles.resultsHeader}>
              <div>
                <span className={styles.eyebrow}>
                  ADVICE RESULTS
                </span>

                <h2>
                  {isLowConfidence
                    ? "Closest Advice We Found"
                    : `Advice Results for “${queryFromUrl}”`}
                </h2>

                <p
                  className={styles.resultCount}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {filteredResults.length === 1
                    ? "1 relevant guide found"
                    : `${filteredResults.length} relevant guides found`}
                </p>
              </div>

              <div className={styles.filterWrap}>
                <label htmlFor="category-filter">
                  Filter by topic
                </label>

                <select
                  id="category-filter"
                  value={categoryFromUrl}
                  onChange={handleCategoryChange}
                >
                  <option value="">
                    All Advice
                  </option>

                  {availableCategories.map(
                    (category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    )
                  )}
                </select>
              </div>
            </section>

            <section
              className={styles.resultsSection}
              aria-label="Advice search results"
            >
              <div className={styles.resultList}>
                {visibleResults.map(
                  ({ article, score }, index) => (
                    <article
                      key={article.href}
                      className={
                        index === 0 && score >= 70
                          ? styles.resultCardBestMatch
                          : styles.resultCard
                      }
                    >
                      {index === 0 &&
                        score >= 70 && (
                          <span
                            className={styles.bestMatch}
                          >
                            Best Match
                          </span>
                        )}

                      <div className={styles.resultBody}>
                        <div className={styles.resultTop}>
                          <span
                            className={styles.category}
                          >
                            {article.category}
                          </span>

                          <time dateTime={article.date}>
                            {article.date}
                          </time>
                        </div>

                        <h3>
                          <Link
                            href={article.href}
                            onClick={() =>
                              handleArticleClick(
                                article.title
                              )
                            }
                          >
                            {highlightText(
                              article.title,
                              queryFromUrl
                            )}
                          </Link>
                        </h3>

                        <p
                          className={
                            styles.excerpt
                          }
                        >
                          {highlightText(
                            article.excerpt,
                            queryFromUrl
                          )}
                        </p>

                        <Link
                          href={article.href}
                          className={
                            styles.readArticle
                          }
                          onClick={() =>
                            handleArticleClick(
                              article.title
                            )
                          }
                        >
                          Read Article
                          <span>→</span>
                        </Link>
                      </div>
                    </article>
                  )
                )}
              </div>

              {hasMore && (
                <div className={styles.loadMoreWrap}>
                  <button
                    type="button"
                    className={styles.loadMore}
                    onClick={handleLoadMore}
                  >
                    Load More
                  </button>

                  <span>
                    Showing {visibleResults.length} of{" "}
                    {filteredResults.length}
                  </span>
                </div>
              )}
            </section>

            {queryLooksUrgent(queryFromUrl) && (
              <section className={styles.emergencyBanner}>
                <div>
                  <span
                    className={styles.emergencyEyebrow}
                  >
                    URGENT PROPERTY PROBLEM
                  </span>

                  <h2>
                    Is This Happening Right Now?
                  </h2>

                  <p>
                    Alpha provides 24/7 emergency property and
                    plumbing call-out support for suitable urgent
                    problems.
                  </p>
                </div>

                <a
                  href="tel:01775518068"
                  className={styles.emergencyCall}
                >
                  Call 01775 518068
                </a>
              </section>
            )}
          </>
        )}

        {queryFromUrl &&
          filteredResults.length > 0 && (
            <section className={styles.normalServiceSection}>
              <div>
                <span className={styles.eyebrow}>
                  NEED PRACTICAL HELP?
                </span>

                <h3>
                  {serviceMapping
                    ? serviceMapping.heading
                    : "Need More Than Advice?"}
                </h3>

                <p>
                  {serviceMapping
                    ? serviceMapping.text
                    : "If the problem needs practical attention, tell Alpha what needs doing."}
                </p>
              </div>

              <div className={styles.serviceActions}>
                {serviceMapping && (
                  <Link
                    href={serviceMapping.href}
                    className={styles.secondaryButton}
                    onClick={handleServiceClick}
                  >
                    {serviceMapping.serviceLabel}
                    <span>→</span>
                  </Link>
                )}

                <Link
                  href="/request-a-quote"
                  className={styles.primaryButton}
                  onClick={handleQuoteClick}
                >
                  Request a Quote
                  <span>→</span>
                </Link>
              </div>
            </section>
          )}

        <section className={styles.internalLinks}>
          <div>
            <span className={styles.eyebrow}>
              KEEP EXPLORING
            </span>

            <h2>More Alpha Advice</h2>
          </div>

          <div className={styles.internalLinkGrid}>
            <Link href="/advice">
              Advice Hub
              <span>→</span>
            </Link>

            <Link href="/advice/homecare-advice">
              Home Care Advice
              <span>→</span>
            </Link>

            <Link href="/advice/seasonal-advice">
              Seasonal Advice
              <span>→</span>
            </Link>
          </div>
        </section>

        {!isNoResults && (
          <section className={styles.finalCta}>
            <div className={styles.finalCtaInner}>
              <div>
                <span className={styles.finalEyebrow}>
                  ONE TEAM. COMPLETE PROPERTY CARE.
                </span>

                <h2>Need More Than Advice?</h2>

                <p>
                  If you've identified a problem that needs
                  practical attention, tell Alpha what needs
                  doing.
                </p>
              </div>

              <div className={styles.finalActions}>
                <Link
                  href="/request-a-quote"
                  className={styles.finalPrimary}
                  onClick={handleQuoteClick}
                >
                  Request a Quote
                  <span>→</span>
                </Link>

                <Link
                  href="/our-services"
                  className={styles.finalSecondary}
                >
                  View Our Services
                </Link>

                <a
                  href="tel:01775518068"
                  className={styles.finalPhone}
                >
                  Call 01775 518068
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}