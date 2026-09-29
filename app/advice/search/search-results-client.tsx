"use client";

import Link from "next/link";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import styles from "./search-results.module.css";

type Article = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  searchTerms: string[];
  date: string;
  href: string;
};

type SearchResultsClientProps = {
  initialQuery: string;
  initialCategory: string;
};

/*
 * IMPORTANT
 *
 * Only genuinely published articles should be added here.
 *
 * The previous hard-coded/mock article dataset contained
 * article URLs that do not currently exist and therefore
 * caused 404 results to appear in search.
 *
 * Until genuine published articles are connected to the
 * Advice CMS/data source, the search must remain empty rather
 * than inventing or presenting unpublished content.
 */
const articles: Article[] = [];

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

const serviceMappings = [
  {
    keys: [
      "garden",
      "grass",
      "lawn",
      "hedge",
      "hedges",
      "weed",
      "weeds",
      "weeding",
      "overgrown",
      "strimming",
      "clearance",
      "garden maintenance",
      "lawn maintenance",
      "hedge maintenance",
      "garden clearance",
    ],
    heading: "Need Help With the Garden?",
    text:
      "If the garden needs maintenance, clearance, grass cutting, hedge work or ongoing care, tell Alpha what needs doing.",
    serviceLabel: "View Garden Services",
    href: "/garden-services",
  },

  {
    keys: [
      "plumbing",
      "plumber",
      "plumbers",
      "leak",
      "leaking",
      "drip",
      "dripping",
      "tap",
      "taps",
      "faucet",
      "toilet",
      "toilets",
      "wc",
      "pipe",
      "pipes",
      "pipework",
      "water leak",
      "water leakage",
    ],
    heading: "Looking for Help With a Plumbing Problem?",
    text:
      "If you need practical help with plumbing, leaks, taps, toilets, pipework or water-related property problems, Alpha may be able to assist.",
    serviceLabel: "View Plumbing Services",
    href: "/plumbing-services",
  },

  {
    keys: [
      "bathroom",
      "bathrooms",
      "bath",
      "shower",
      "shower tray",
      "bathroom leak",
      "bathroom sealant",
      "bathroom grout",
      "bathroom tile",
    ],
    heading: "Planning Bathroom Work?",
    text:
      "If your bathroom needs practical repair, maintenance or improvement, tell Alpha what needs doing.",
    serviceLabel: "View Bathroom Services",
    href: "/bathroom-services",
  },

  {
    keys: [
      "kitchen",
      "kitchens",
      "worktop",
      "worktops",
      "unit",
      "units",
      "sink",
      "cabinet",
      "cabinets",
      "kitchen repair",
      "kitchen maintenance",
    ],
    heading: "Looking for Help With Kitchen Work?",
    text:
      "Kitchen issues can involve plumbing, finishes, flooring and fittings. Tell Alpha what needs attention.",
    serviceLabel: "View Kitchen Services",
    href: "/kitchen-services",
  },

  {
    keys: [
      "tiling",
      "tile",
      "tiles",
      "floor",
      "floors",
      "flooring",
      "grout",
      "regrouting",
      "tiling flooring",
      "tile flooring",
    ],
    heading: "Need Help With Tiles or Flooring?",
    text:
      "If tiled or flooring areas need repair, replacement or practical attention, Alpha can review the job.",
    serviceLabel: "View Tiling & Flooring",
    href: "/tiling-flooring",
  },

  {
    keys: [
      "decorating",
      "decorate",
      "decorated",
      "painting",
      "paint",
      "repainting",
      "wall painting",
      "ceiling painting",
    ],
    heading: "Need Help With Painting or Decorating?",
    text:
      "Tell Alpha what needs preparing, repairing or redecorating and the team can review the work required.",
    serviceLabel: "View Painting & Decorating",
    href: "/painting-decorating",
  },

  {
    keys: [
      "roof",
      "roofs",
      "roofing",
      "gutter",
      "gutters",
      "guttering",
      "downpipe",
      "downpipes",
      "roofline",
      "roofing gutters",
    ],
    heading: "Need Help With Roofing or Gutters?",
    text:
      "Visible gutter and roofline problems may need appropriate professional attention, especially where safe access is not possible.",
    serviceLabel: "View Roofing & Gutters",
    href: "/roofing-gutters",
  },

  {
    keys: [
      "landlord",
      "landlords",
      "tenant",
      "tenants",
      "rental",
      "rent",
      "tenancy",
      "tenancies",
      "void",
      "letting",
      "lettings",
      "rental property",
      "rental properties",
    ],
    heading: "Need Help Maintaining a Rental Property?",
    text:
      "Alpha can help with practical property maintenance for landlords and managed rental homes.",
    serviceLabel: "View Landlords & Letting Agents",
    href: "/landlords-letting-agents",
  },

  {
    keys: [
      "damp",
      "mould",
      "mold",
      "moisture",
      "condensation",
      "property maintenance",
      "property repair",
      "property repairs",
      "home maintenance",
      "repair",
      "repairs",
      "damaged",
      "damage",
      "plaster",
      "crack",
      "cracks",
      "wall",
      "walls",
      "ceiling",
      "ceilings",
      "property",
    ],
    heading: "Need Practical Property Help?",
    text:
      "If the problem needs repair, maintenance or professional attention, Alpha may be able to help.",
    serviceLabel: "View Property Maintenance",
    href: "/property-maintenance",
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
  return normalize(value)
    .split(" ")
    .filter(Boolean);
}

function levenshteinDistance(
  a: string,
  b: string
) {
  const matrix = Array.from(
    { length: b.length + 1 },
    () => new Array(a.length + 1).fill(0)
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
        matrix[i][j] =
          matrix[i - 1][j - 1];
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

function tokenMatches(
  token: string,
  candidate: string
) {
  const left = normalize(token);
  const right = normalize(candidate);

  if (!left || !right) {
    return false;
  }

  if (left === right) {
    return true;
  }

  /*
   * Do NOT use candidate.includes(token) here.
   *
   * That was causing matches such as:
   * garden -> gardens
   *
   * and then the highlighter could incorrectly split
   * the visible source text.
   *
   * Search matching is intentionally whole-token based.
   */

  if (
    left.length >= 5 &&
    right.length >= 5
  ) {
    const threshold =
      Math.max(left.length, right.length) >= 7
        ? 1
        : 1;

    return (
      levenshteinDistance(left, right) <=
      threshold
    );
  }

  return false;
}

function expandedQueryTokens(query: string) {
  const originalTokens = tokenize(query);

  return {
    originalTokens,
    expandedTokens: originalTokens,
  };
}

function getArticleSearchText(
  article: Article
) {
  return normalize(
    [
      article.title,
      article.excerpt,
      article.category,
      ...article.tags,
      ...article.searchTerms,
    ].join(" ")
  );
}

function scoreArticle(
  article: Article,
  query: string
) {
  if (!query.trim()) {
    return 0;
  }

  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return 0;
  }

  const {
    originalTokens,
    expandedTokens,
  } = expandedQueryTokens(query);

  const title = normalize(article.title);
  const excerpt = normalize(article.excerpt);
  const category = normalize(article.category);
  const tags = normalize(
    article.tags.join(" ")
  );
  const searchTerms = normalize(
    article.searchTerms.join(" ")
  );

  const titleWords = tokenize(article.title);
  const excerptWords = tokenize(article.excerpt);
  const categoryWords = tokenize(
    article.category
  );
  const tagWords = tokenize(
    article.tags.join(" ")
  );
  const searchWords = tokenize(
    article.searchTerms.join(" ")
  );

  let score = 0;

  /*
   * Exact phrase matches have the highest weight.
   */
  if (title === normalizedQuery) {
    score += 160;
  } else if (
    title.includes(normalizedQuery)
  ) {
    score += 120;
  }

  if (
    excerpt.includes(normalizedQuery)
  ) {
    score += 55;
  }

  if (
    category.includes(normalizedQuery)
  ) {
    score += 45;
  }

  if (
    tags.includes(normalizedQuery)
  ) {
    score += 35;
  }

  for (const token of originalTokens) {
    if (!token) continue;

    if (
      titleWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 40;
      continue;
    }

    if (
      categoryWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 28;
      continue;
    }

    if (
      tagWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 22;
      continue;
    }

    if (
      excerptWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 15;
      continue;
    }

    if (
      searchWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 8;
    }
  }

  /*
   * Body/search terms are intentionally lower weight.
   */
  for (const token of expandedTokens) {
    if (originalTokens.includes(token)) {
      continue;
    }

    if (
      titleWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 12;
    } else if (
      tagWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 9;
    } else if (
      searchWords.some((word) =>
        tokenMatches(token, word)
      )
    ) {
      score += 5;
    }
  }

  /*
   * Require meaningful query coverage.
   */
  const matchedTokens =
    originalTokens.filter((token) =>
      [
        ...titleWords,
        ...categoryWords,
        ...tagWords,
        ...excerptWords,
        ...searchWords,
      ].some((word) =>
        tokenMatches(token, word)
      )
    );

  if (originalTokens.length > 0) {
    const coverage =
      matchedTokens.length /
      originalTokens.length;

    score += coverage * 30;

    /*
     * Multi-word searches should not rank an article highly
     * when only one weak token happens to match.
     */
    if (
      originalTokens.length >= 2 &&
      coverage < 0.5
    ) {
      score *= 0.35;
    }
  }

  return score;
}

function queryLooksUrgent(
  query: string
) {
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

function getServiceMapping(
  query: string
) {
  const normalized = normalize(query);

  if (!normalized) {
    return null;
  }

  /*
   * Exact/high-confidence phrase matching first.
   */
  const exactMapping =
    serviceMappings.find((mapping) =>
      mapping.keys.some(
        (keyword) =>
          normalized === normalize(keyword)
      )
    );

  if (exactMapping) {
    return exactMapping;
  }

  /*
   * Word-boundary matching prevents weak substring matches.
   */
  const queryTokens = tokenize(normalized);

  const rankedMappings = serviceMappings
    .map((mapping) => {
      let score = 0;

      for (const keyword of mapping.keys) {
        const normalizedKeyword =
          normalize(keyword);

        const keywordTokens =
          tokenize(normalizedKeyword);

        if (
          keywordTokens.length > 1 &&
          normalized.includes(
            normalizedKeyword
          )
        ) {
          score +=
            keywordTokens.length * 12;
          continue;
        }

        for (const queryToken of queryTokens) {
          for (const keywordToken of keywordTokens) {
            if (
              queryToken === keywordToken
            ) {
              score += 10;
            } else if (
              tokenMatches(
                queryToken,
                keywordToken
              )
            ) {
              score += 4;
            }
          }
        }
      }

      return {
        mapping,
        score,
      };
    })
    .sort(
      (a, b) => b.score - a.score
    );

  const best = rankedMappings[0];

  /*
   * Low confidence means no service guess.
   */
  if (!best || best.score < 10) {
    return null;
  }

  /*
   * Do not use a service when two different services
   * are essentially tied.
   */
  const second = rankedMappings[1];

  if (
    second &&
    second.score >= best.score - 2
  ) {
    return null;
  }

  return best.mapping;
}

function getAvailableCategories(
  results: Array<{
    article: Article;
    score: number;
  }>
) {
  const matchingCategories =
    new Set(
      results.map(
        ({ article }) =>
          article.category
      )
    );

  return supportedCategories.filter(
    (category) =>
      matchingCategories.has(category)
  );
}

function getTypoSuggestion(
  query: string
) {
  const normalized = normalize(query);

  if (
    typoCorrections[normalized]
  ) {
    return typoCorrections[
      normalized
    ];
  }

  if (normalized.length < 5) {
    return null;
  }

  for (const [
    misspelling,
    correction,
  ] of Object.entries(
    typoCorrections
  )) {
    if (
      levenshteinDistance(
        normalized,
        misspelling
      ) <= 1
    ) {
      return correction;
    }
  }

  return null;
}

function highlightText(
  text: string,
  query: string
) {
  const queryTokens = tokenize(query);

  if (
    !text ||
    queryTokens.length === 0
  ) {
    return text;
  }

  /*
   * Proper word-boundary matching.
   *
   * This prevents:
   * landlords -> l and lords
   * gardens -> garden s
   *
   * The original source string is never modified.
   */
  const escapedTokens =
    queryTokens
      .sort(
        (a, b) =>
          b.length - a.length
      )
      .map((token) =>
        token.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        )
      );

  if (
    escapedTokens.length === 0
  ) {
    return text;
  }

  const pattern = new RegExp(
    `\\b(${escapedTokens.join(
      "|"
    )})\\b`,
    "gi"
  );

  const parts = text.split(pattern);

  return parts.map(
    (part, index) => {
      const isMatch =
        queryTokens.some(
          (token) =>
            normalize(part) ===
            normalize(token)
        );

      if (isMatch) {
        return (
          <mark
            key={`${part}-${index}`}
          >
            {part}
          </mark>
        );
      }

      return (
        <span
          key={`${part}-${index}`}
        >
          {part}
        </span>
      );
    }
  );
}

function sendSearchAnalytics(payload: {
  query: string;
  resultCount: number;
  action?: string;
  clickedResult?: string;
}) {
  const endpoint =
    process.env
      .NEXT_PUBLIC_ADVICE_SEARCH_ANALYTICS_ENDPOINT;

  if (!endpoint) {
    return;
  }

  try {
    const body = JSON.stringify({
      query: payload.query.slice(
        0,
        300
      ),
      resultCount:
        payload.resultCount,
      action:
        payload.action || "search",
      clickedResult:
        payload.clickedResult ||
        null,
      timestamp:
        new Date().toISOString(),
    });

    if (
      navigator.sendBeacon
    ) {
      const blob = new Blob(
        [body],
        {
          type:
            "application/json",
        }
      );

      navigator.sendBeacon(
        endpoint,
        blob
      );

      return;
    }

    void fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body,
      keepalive: true,
    });
  } catch {
    /*
     * Analytics must never interrupt
     * the search journey.
     */
  }
}

export default function SearchResultsClient({
  initialQuery,
  initialCategory,
}: SearchResultsClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams =
    useSearchParams();

  const queryFromUrl = (
    searchParams.get("q") ||
    initialQuery
  )
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 300);

  const categoryFromUrl =
    searchParams.get("category") ||
    initialCategory;

  const [inputValue, setInputValue] =
    useState(queryFromUrl);

  const [visibleCount, setVisibleCount] =
    useState(10);

  useEffect(() => {
    setInputValue(queryFromUrl);
    setVisibleCount(10);
  }, [
    queryFromUrl,
    categoryFromUrl,
  ]);

  /*
   * Only genuinely published articles are searched.
   */
  const rankedResults = useMemo(() => {
    if (!queryFromUrl) {
      return [];
    }

    return articles
      .map((article) => ({
        article,
        score: scoreArticle(
          article,
          queryFromUrl
        ),
      }))
      /*
       * Meaningful relevance threshold.
       *
       * Weak accidental matches are not displayed.
       */
      .filter(
        (item) => item.score >= 45
      )
      .sort(
        (a, b) =>
          b.score - a.score
      );
  }, [queryFromUrl]);

  const filteredResults = useMemo(() => {
    if (!categoryFromUrl) {
      return rankedResults;
    }

    return rankedResults.filter(
      ({ article }) =>
        normalize(
          article.category
        ) ===
        normalize(
          categoryFromUrl
        )
    );
  }, [
    rankedResults,
    categoryFromUrl,
  ]);

  /*
   * Categories are based only on the current genuine
   * matching published results.
   */
  const availableCategories =
    useMemo(
      () =>
        getAvailableCategories(
          rankedResults
        ),
      [rankedResults]
    );

  const typoSuggestion = useMemo(
    () =>
      getTypoSuggestion(
        queryFromUrl
      ),
    [queryFromUrl]
  );

  const visibleResults =
    filteredResults.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    filteredResults.length;

  const isLowConfidence =
    filteredResults.length > 0 &&
    filteredResults[0].score < 70;

  const serviceMapping =
    useMemo(
      () =>
        getServiceMapping(
          queryFromUrl
        ),
      [queryFromUrl]
    );

  const isNoResults =
    Boolean(queryFromUrl) &&
    filteredResults.length === 0;

  const handleSearch = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmed =
      inputValue
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 300);

    const params =
      new URLSearchParams();

    if (trimmed) {
      params.set("q", trimmed);
    }

    /*
     * A new search starts without an old category filter.
     */
    router.push(
      `${pathname}${
        params.toString()
          ? `?${params.toString()}`
          : ""
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
    const selected =
      event.target.value;

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    /*
     * Always preserve the current search query.
     */
    if (queryFromUrl) {
      params.set(
        "q",
        queryFromUrl
      );
    } else {
      params.delete("q");
    }

    if (selected) {
      params.set(
        "category",
        selected
      );
    } else {
      params.delete(
        "category"
      );
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
      resultCount:
        filteredResults.length,
      action:
        "category_filter",
      clickedResult:
        selected,
    });
  };

  const handleServiceClick = () => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount:
        filteredResults.length,
      action: "service_click",
      clickedResult:
        serviceMapping?.serviceLabel ||
        "Request a Quote",
    });
  };

  const handleQuoteClick = () => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount:
        filteredResults.length,
      action: "quote_click",
      clickedResult:
        "Request a Quote",
    });
  };

  const handleContactClick = () => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount:
        filteredResults.length,
      action: "contact_click",
      clickedResult:
        "Contact Alpha",
    });
  };

  const handleLoadMore = () => {
    setVisibleCount(
      (current) =>
        current + 10
    );
  };

  const handleArticleClick = (
    title: string
  ) => {
    sendSearchAnalytics({
      query: queryFromUrl,
      resultCount:
        filteredResults.length,
      action:
        "article_click",
      clickedResult:
        title,
    });
  };

  return (
    <section
      className={styles.page}
    >
      <div
        className={styles.hero}
      >
        <div
          className={styles.container}
        >
          <nav
            className={
              styles.breadcrumbs
            }
            aria-label="Breadcrumb"
          >
            <Link href="/">
              Home
            </Link>

            <span>→</span>

            <Link href="/advice">
              Advice
            </Link>

            <span>→</span>

            <span>Search</span>
          </nav>

          <div
            className={
              styles.heroContent
            }
          >
            <span
              className={
                styles.eyebrow
              }
            >
              ADVICE SEARCH
            </span>

            <h1>
              Search Alpha Advice
            </h1>

            <p>
              Find practical
              guidance on property
              maintenance,
              plumbing, bathrooms,
              kitchens,
              decorating,
              flooring, gutters,
              gardens and
              landlord property
              care.
            </p>

            <form
              onSubmit={
                handleSearch
              }
              className={
                styles.heroSearchForm
              }
              role="search"
            >
              <label
                htmlFor="advice-search"
                className={
                  styles.srOnly
                }
              >
                Search property
                advice
              </label>

              <input
                id="advice-search"
                name="q"
                type="search"
                value={
                  inputValue
                }
                maxLength={300}
                onChange={(event) =>
                  setInputValue(
                    event.target.value.slice(
                      0,
                      300
                    )
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
            <div
              className={
                styles.currentQuery
              }
            >
              Current search:{" "}
              <strong>
                “{queryFromUrl}”
              </strong>
            </div>
          )}
        </div>
      </div>

      <div
        className={styles.container}
      >
        {!queryFromUrl ? (
          <section
            className={
              styles.emptySearchState
            }
          >
            <span
              className={
                styles.eyebrow
              }
            >
              SEARCH ALPHA ADVICE
            </span>

            <h2>
              Enter a word or
              question to find
              property-care
              guidance.
            </h2>

            <p>
              Search for a specific
              property problem or
              browse the available
              Advice topics.
            </p>

            <div
              className={
                styles.emptyActions
              }
            >
              <Link
                href="/advice"
                className={
                  styles.primaryButton
                }
              >
                Browse Advice Hub
              </Link>

              <Link
                href="/advice/homecare-advice"
                className={
                  styles.secondaryButton
                }
              >
                Home Care Advice
              </Link>
            </div>
          </section>
        ) : isNoResults ? (
          <section
            className={
              styles.noResultsPage
            }
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              className={
                styles.noResultsIntro
              }
            >
              <span
                className={
                  styles.eyebrow
                }
              >
                NO ADVICE MATCH
              </span>

              <h2>
                We Couldn't Find
                Advice for “
                {queryFromUrl}”
              </h2>

              <p>
                We couldn't find a
                published Alpha
                advice guide matching{" "}
                <strong>
                  “{queryFromUrl}”
                </strong>
                .
              </p>

              <p>
                Try a different
                phrase, browse the
                topics below, or tell
                us what you need help
                with.
              </p>
            </div>

            <section
              className={
                styles.searchAgainSection
              }
            >
              <div>
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  SEARCH AGAIN
                </span>

                <h3>
                  Try Another Search
                </h3>

                <p>
                  Edit the search
                  phrase below and
                  search the published
                  Alpha Advice library
                  again.
                </p>
              </div>

              <form
                onSubmit={
                  handleSearch
                }
                className={
                  styles.noResultsSearchForm
                }
                role="search"
              >
                <label
                  htmlFor="no-results-search"
                  className={
                    styles.srOnly
                  }
                >
                  Search property
                  advice again
                </label>

                <input
                  id="no-results-search"
                  type="search"
                  value={
                    inputValue
                  }
                  maxLength={300}
                  onChange={(event) =>
                    setInputValue(
                      event.target.value.slice(
                        0,
                        300
                      )
                    )
                  }
                  placeholder="Search home or property advice..."
                />

                <button type="submit">
                  Search Again
                </button>
              </form>
            </section>

            {typoSuggestion && (
              <section
                className={
                  styles.didYouMean
                }
              >
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  SEARCH SUGGESTION
                </span>

                <h3>
                  Did You Mean “
                  {typoSuggestion}”?
                </h3>

                <p>
                  We found a close
                  spelling match. Search
                  the Advice library using
                  the corrected term.
                </p>

                <Link
                  href={`/advice/search?q=${encodeURIComponent(
                    typoSuggestion
                  )}`}
                  className={
                    styles.textAction
                  }
                  onClick={() =>
                    sendSearchAnalytics({
                      query:
                        queryFromUrl,
                      resultCount: 0,
                      action:
                        "typo_correction",
                      clickedResult:
                        typoSuggestion,
                    })
                  }
                >
                  Search{" "}
                  {typoSuggestion}
                  <span>→</span>
                </Link>
              </section>
            )}

            <section
              className={
                styles.browseTopicsSection
              }
            >
              <div
                className={
                  styles.sectionHeading
                }
              >
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  ADVICE CATEGORIES
                </span>

                <h3>
                  Browse Advice by
                  Topic
                </h3>

                <p>
                  Browse categories
                  that currently
                  contain published
                  Advice Hub content.
                </p>
              </div>

              <div
                className={
                  styles.categoryGrid
                }
              >
                {availableCategories.map(
                  (category) => (
                    <Link
                      key={category}
                      href={`/advice/search?q=${encodeURIComponent(
                        queryFromUrl
                      )}&category=${encodeURIComponent(
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

            <section
              className={
                styles.pathwayGrid
              }
            >
              <article
                className={
                  styles.pathwayCard
                }
              >
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  NOT SURE WHAT TO
                  SEARCH FOR?
                </span>

                <h3>
                  Home Care Advice
                </h3>

                <p>
                  Browse practical
                  everyday property
                  guidance covering
                  maintenance, warning
                  signs, repairs and
                  preventative care.
                </p>

                <Link
                  href="/advice/homecare-advice"
                  className={
                    styles.outlineAction
                  }
                >
                  View Home Care
                  Advice
                  <span>→</span>
                </Link>
              </article>

              <article
                className={
                  styles.pathwayCard
                }
              >
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  SEASONAL GUIDANCE
                </span>

                <h3>
                  Is It a Seasonal
                  Property Problem?
                </h3>

                <p>
                  Find spring, summer,
                  autumn and winter
                  maintenance guidance.
                </p>

                <Link
                  href="/advice/seasonal-advice"
                  className={
                    styles.outlineAction
                  }
                >
                  View Seasonal
                  Advice
                  <span>→</span>
                </Link>
              </article>
            </section>

            {serviceMapping ? (
              <section
                className={
                  styles.serviceSection
                }
              >
                <div>
                  <span
                    className={
                      styles.eyebrow
                    }
                  >
                    PRACTICAL HELP
                  </span>

                  <h3>
                    {
                      serviceMapping.heading
                    }
                  </h3>

                  <p>
                    {
                      serviceMapping.text
                    }
                  </p>
                </div>

                <div
                  className={
                    styles.serviceActions
                  }
                >
                  <Link
                    href={
                      serviceMapping.href
                    }
                    className={
                      styles.secondaryButton
                    }
                    onClick={
                      handleServiceClick
                    }
                  >
                    {
                      serviceMapping.serviceLabel
                    }
                    <span>→</span>
                  </Link>

                  <Link
                    href="/request-a-quote"
                    className={
                      styles.primaryButton
                    }
                    onClick={
                      handleQuoteClick
                    }
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>
                </div>
              </section>
            ) : (
              <section
                className={
                  styles.serviceSection
                }
              >
                <div>
                  <span
                    className={
                      styles.eyebrow
                    }
                  >
                    NOT SURE WHICH
                    SERVICE YOU NEED?
                  </span>

                  <h3>
                    Not Sure Which
                    Service You Need?
                  </h3>

                  <p>
                    That's fine. Tell
                    Alpha what you're
                    seeing and what you'd
                    like help with.
                  </p>
                </div>

                <div
                  className={
                    styles.serviceActions
                  }
                >
                  <Link
                    href="/request-a-quote"
                    className={
                      styles.primaryButton
                    }
                    onClick={
                      handleQuoteClick
                    }
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>
                </div>
              </section>
            )}

            {queryLooksUrgent(
              queryFromUrl
            ) && (
              <section
                className={
                  styles.emergencySection
                }
              >
                <div>
                  <span
                    className={
                      styles.emergencyEyebrow
                    }
                  >
                    URGENT PROPERTY
                    PROBLEM
                  </span>

                  <h3>
                    Is This Happening
                    Right Now?
                  </h3>

                  <p>
                    Alpha provides 24/7
                    emergency property
                    and plumbing call-out
                    support for suitable
                    urgent problems.
                  </p>

                  <strong>
                    24/7 Emergency
                    Property &amp;
                    Plumbing Support
                  </strong>
                </div>

                <a
                  href="tel:01775518068"
                  className={
                    styles.emergencyButton
                  }
                >
                  Call Now
                  <span>
                    01775 518068
                  </span>
                </a>
              </section>
            )}

            <section
              className={
                styles.contactSection
              }
            >
              <div>
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  STILL CAN'T FIND
                  WHAT YOU NEED?
                </span>

                <h3>
                  Tell Alpha What
                  You're Dealing With
                </h3>

                <p>
                  Contact Alpha and
                  explain what you're
                  seeing. We can help
                  you identify the next
                  practical step.
                </p>
              </div>

              <Link
                href="/contact"
                className={
                  styles.secondaryButton
                }
                onClick={
                  handleContactClick
                }
              >
                Contact Alpha
                <span>→</span>
              </Link>
            </section>

            <section
              className={
                styles.finalCta
              }
            >
              <div
                className={
                  styles.finalCtaInner
                }
              >
                <div>
                  <span
                    className={
                      styles.finalEyebrow
                    }
                  >
                    ONE TEAM. COMPLETE
                    PROPERTY CARE.
                  </span>

                  <h2>
                    Need Help With
                    the Problem Instead?
                  </h2>

                  <p>
                    You don't need to
                    know the exact trade
                    or technical name.
                    Tell Alpha what needs
                    doing, add photos if
                    you have them, and
                    we'll review the
                    information.
                  </p>
                </div>

                <div
                  className={
                    styles.finalActions
                  }
                >
                  <Link
                    href="/request-a-quote"
                    className={
                      styles.finalPrimary
                    }
                    onClick={
                      handleQuoteClick
                    }
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>

                  <Link
                    href="/services"
                    className={
                      styles.finalSecondary
                    }
                  >
                    View Our Services
                  </Link>

                  <a
                    href="tel:01775518068"
                    className={
                      styles.finalPhone
                    }
                  >
                    Call 01775 518068
                  </a>
                </div>
              </div>
            </section>
          </section>
        ) : (
          <>
            <section
              className={
                styles.resultsHeader
              }
            >
              <div>
                <span
                  className={
                    styles.eyebrow
                  }
                >
                  ADVICE RESULTS
                </span>

                <h2>
                  {isLowConfidence
                    ? "Closest Advice We Found"
                    : `Advice Results for “${queryFromUrl}”`}
                </h2>

                <p
                  className={
                    styles.resultCount
                  }
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {filteredResults.length ===
                  1
                    ? "1 relevant guide found"
                    : `${filteredResults.length} relevant guides found`}
                </p>
              </div>

              <div
                className={
                  styles.filterWrap
                }
              >
                <label htmlFor="category-filter">
                  Filter by topic
                </label>

                <select
                  id="category-filter"
                  value={
                    categoryFromUrl
                  }
                  onChange={
                    handleCategoryChange
                  }
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
              className={
                styles.resultsSection
              }
              aria-label="Advice search results"
            >
              <div
                className={
                  styles.resultList
                }
              >
                {visibleResults.map(
                  (
                    {
                      article,
                      score,
                    },
                    index
                  ) => (
                    <article
                      key={article.href}
                      className={
                        index === 0 &&
                        score >= 70
                          ? styles.resultCardBestMatch
                          : styles.resultCard
                      }
                    >
                      {index === 0 &&
                        score >= 70 && (
                          <span
                            className={
                              styles.bestMatch
                            }
                          >
                            Best Match
                          </span>
                        )}

                      <div
                        className={
                          styles.resultBody
                        }
                      >
                        <div
                          className={
                            styles.resultTop
                          }
                        >
                          <span
                            className={
                              styles.category
                            }
                          >
                            {
                              article.category
                            }
                          </span>

                          <time
                            dateTime={
                              article.date
                            }
                          >
                            {
                              article.date
                            }
                          </time>
                        </div>

                        <h3>
                          <Link
                            href={
                              article.href
                            }
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
                          href={
                            article.href
                          }
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
                <div
                  className={
                    styles.loadMoreWrap
                  }
                >
                  <button
                    type="button"
                    className={
                      styles.loadMore
                    }
                    onClick={
                      handleLoadMore
                    }
                  >
                    Load More
                  </button>

                  <span>
                    Showing{" "}
                    {
                      visibleResults.length
                    }{" "}
                    of{" "}
                    {
                      filteredResults.length
                    }
                  </span>
                </div>
              )}
            </section>

            {queryLooksUrgent(
              queryFromUrl
            ) && (
              <section
                className={
                  styles.emergencyBanner
                }
              >
                <div>
                  <span
                    className={
                      styles.emergencyEyebrow
                    }
                  >
                    URGENT PROPERTY
                    PROBLEM
                  </span>

                  <h2>
                    Is This Happening
                    Right Now?
                  </h2>

                  <p>
                    Alpha provides 24/7
                    emergency property
                    and plumbing call-out
                    support for suitable
                    urgent problems.
                  </p>
                </div>

                <a
                  href="tel:01775518068"
                  className={
                    styles.emergencyCall
                  }
                >
                  Call 01775 518068
                </a>
              </section>
            )}
          </>
        )}

        {queryFromUrl &&
          filteredResults.length > 0 && (
            <section
              className={
                styles.normalServiceSection
              }
            >
              <div>
                <span
                  className={
                    styles.eyebrow
                  }
                >
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

              <div
                className={
                  styles.serviceActions
                }
              >
                {serviceMapping && (
                  <Link
                    href={
                      serviceMapping.href
                    }
                    className={
                      styles.secondaryButton
                    }
                    onClick={
                      handleServiceClick
                    }
                  >
                    {
                      serviceMapping.serviceLabel
                    }
                    <span>→</span>
                  </Link>
                )}

                <Link
                  href="/request-a-quote"
                  className={
                    styles.primaryButton
                  }
                  onClick={
                    handleQuoteClick
                  }
                >
                  Request a Quote
                  <span>→</span>
                </Link>
              </div>
            </section>
          )}

        <section
          className={
            styles.internalLinks
          }
        >
          <div>
            <span
              className={
                styles.eyebrow
              }
            >
              KEEP EXPLORING
            </span>

            <h2>
              More Alpha Advice
            </h2>
          </div>

          <div
            className={
              styles.internalLinkGrid
            }
          >
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
          <section
            className={
              styles.finalCta
            }
          >
            <div
              className={
                styles.finalCtaInner
              }
            >
              <div>
                <span
                  className={
                    styles.finalEyebrow
                  }
                >
                  ONE TEAM. COMPLETE
                  PROPERTY CARE.
                </span>

                <h2>
                  Need More Than
                  Advice?
                </h2>

                <p>
                  If you've identified
                  a problem that needs
                  practical attention,
                  tell Alpha what needs
                  doing.
                </p>
              </div>

              <div
                className={
                  styles.finalActions
                }
              >
                <Link
                  href="/request-a-quote"
                  className={
                    styles.finalPrimary
                  }
                  onClick={
                    handleQuoteClick
                  }
                >
                  Request a Quote
                  <span>→</span>
                </Link>

                <Link
                  href="/services"
                  className={
                    styles.finalSecondary
                  }
                >
                  View Our Services
                </Link>

                <a
                  href="tel:01775518068"
                  className={
                    styles.finalPhone
                  }
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