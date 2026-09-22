"use client";

import Link from "next/link";
import { Suspense, useMemo, useState } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./advice.module.css";

type Article = {
  id: number;
  title: string;
  category: string;
  type: string;
  date: string;
  dateValue: string;
  excerpt: string;
  image: string;
  href: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "How to Keep Your Home Warm in Winter",
    category: "Home Care",
    type: "Guides",
    date: "15 January 2026",
    dateValue: "2026-01-15",
    excerpt:
      "Simple ways to keep your property warm, comfortable and energy efficient throughout the colder months.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/how-to-keep-your-home-warm",
  },
  {
    id: 2,
    title: "How to Prevent Damp and Mould",
    category: "Maintenance",
    type: "Guides",
    date: "8 January 2026",
    dateValue: "2026-01-08",
    excerpt:
      "Practical advice for reducing moisture, improving ventilation and protecting your home from damp and mould.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/how-to-prevent-damp-and-mould",
  },
  {
    id: 3,
    title: "Preparing Your Garden for Summer",
    category: "Garden & Outdoor",
    type: "Gardening",
    date: "2 January 2026",
    dateValue: "2026-01-02",
    excerpt:
      "Get your garden ready for warmer weather with useful maintenance, planting and landscaping tips.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/preparing-your-garden-for-summer",
  },
  {
    id: 4,
    title: "When Should You Service Your Boiler?",
    category: "Maintenance",
    type: "Guides",
    date: "20 December 2025",
    dateValue: "2025-12-20",
    excerpt:
      "Learn why regular boiler servicing matters and how routine maintenance can help prevent unexpected problems.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/boiler-servicing-guide",
  },
  {
    id: 5,
    title: "Landlord Property Maintenance Checklist",
    category: "Landlord Advice",
    type: "Landlords",
    date: "12 December 2025",
    dateValue: "2025-12-12",
    excerpt:
      "A straightforward checklist to help landlords keep rental properties safe, maintained and presentable.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/landlord-property-maintenance-checklist",
  },
  {
    id: 6,
    title: "Simple Garden Maintenance Tips",
    category: "Garden & Outdoor",
    type: "Gardening",
    date: "5 December 2025",
    dateValue: "2025-12-05",
    excerpt:
      "Keep outdoor spaces looking neat and healthy with regular seasonal garden maintenance.",
    image:
      "https://images.unsplash.com/photo-1599685315640-6e6c7f7e4b0d?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/simple-garden-maintenance-tips",
  },
  {
    id: 7,
    title: "Improving Ventilation in Your Home",
    category: "Home Care",
    type: "Guides",
    date: "28 November 2025",
    dateValue: "2025-11-28",
    excerpt:
      "Better ventilation can help reduce condensation and improve the comfort of your living spaces.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/improving-home-ventilation",
  },
  {
    id: 8,
    title: "Preparing Your Property for Winter",
    category: "Seasonal Advice",
    type: "Seasonal",
    date: "15 November 2025",
    dateValue: "2025-11-15",
    excerpt:
      "Protect your home or rental property from cold weather with these useful maintenance checks.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/preparing-property-for-winter",
  },
  {
    id: 9,
    title: "Small Improvements That Make a Difference",
    category: "Home Care",
    type: "DIY",
    date: "4 November 2025",
    dateValue: "2025-11-04",
    excerpt:
      "Useful ideas for improving the appearance, comfort and functionality of your property.",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/small-home-improvements",
  },
  {
    id: 10,
    title: "Spring Garden Checklist",
    category: "Garden & Outdoor",
    type: "Gardening",
    date: "20 October 2025",
    dateValue: "2025-10-20",
    excerpt:
      "A practical seasonal checklist to help get your garden looking its best as spring arrives.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/spring-garden-checklist",
  },
  {
    id: 11,
    title: "End of Tenancy Property Checklist",
    category: "Landlord Advice",
    type: "Landlords",
    date: "8 October 2025",
    dateValue: "2025-10-08",
    excerpt:
      "Important property maintenance checks to consider before a tenant moves out of a rental property.",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/end-of-tenancy-checklist",
  },
  {
    id: 12,
    title: "Easy DIY Maintenance Jobs Around the Home",
    category: "Maintenance",
    type: "DIY",
    date: "1 October 2025",
    dateValue: "2025-10-01",
    excerpt:
      "A selection of straightforward maintenance jobs that can help keep your property in good condition.",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=1000&q=85",
    href: "/advice/diy-maintenance-jobs",
  },
];

const categories = [
  "All Categories",
  "Home Care",
  "Maintenance",
  "Garden & Outdoor",
  "Seasonal Advice",
  "Landlord Advice",
];

const types = [
  "All Types",
  "Guides",
  "Gardening",
  "Landlords",
  "Seasonal",
  "DIY",
];

const resultsPerPage = 6;

/* =========================================================
   MAIN CLIENT CONTENT
========================================================= */

function AdvicePageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialCategory =
    searchParams.get("category") || "All Categories";
  const initialType = searchParams.get("type") || "All Types";
  const initialSort = searchParams.get("sort") || "newest";

  const parsedPage = Number(searchParams.get("page")) || 1;
  const initialPage = Math.max(parsedPage, 1);

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [type, setType] = useState(initialType);
  const [sort, setSort] = useState(initialSort);
  const [page, setPage] = useState(initialPage);

  /* =========================================================
     UPDATE URL
  ========================================================= */

  const updateUrl = (
    nextSearch: string,
    nextCategory: string,
    nextType: string,
    nextSort: string,
    nextPage: number = 1
  ) => {
    const params = new URLSearchParams();

    if (nextSearch.trim()) {
      params.set("search", nextSearch.trim());
    }

    if (nextCategory !== "All Categories") {
      params.set("category", nextCategory);
    }

    if (nextType !== "All Types") {
      params.set("type", nextType);
    }

    if (nextSort !== "newest") {
      params.set("sort", nextSort);
    }

    if (nextPage > 1) {
      params.set("page", String(nextPage));
    }

    const queryString = params.toString();

    router.replace(
      queryString
        ? `${pathname}?${queryString}`
        : pathname,
      {
        scroll: false,
      }
    );
  };

  /* =========================================================
     FILTER + SORT
  ========================================================= */

  const filteredArticles = useMemo(() => {
    let result = articles.filter((article) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        article.title.toLowerCase().includes(searchText) ||
        article.excerpt.toLowerCase().includes(searchText) ||
        article.category.toLowerCase().includes(searchText) ||
        article.type.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All Categories" ||
        article.category === category;

      const matchesType =
        type === "All Types" ||
        article.type === type;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType
      );
    });

    result = [...result].sort((a, b) => {
      if (sort === "oldest") {
        return a.dateValue.localeCompare(b.dateValue);
      }

      if (sort === "az") {
        return a.title.localeCompare(b.title);
      }

      if (sort === "za") {
        return b.title.localeCompare(a.title);
      }

      return b.dateValue.localeCompare(a.dateValue);
    });

    return result;
  }, [search, category, type, sort]);

  /* =========================================================
     PAGINATION
  ========================================================= */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredArticles.length / resultsPerPage
    )
  );

  const safePage = Math.min(
    Math.max(page, 1),
    totalPages
  );

  const visibleArticles = filteredArticles.slice(
    (safePage - 1) * resultsPerPage,
    safePage * resultsPerPage
  );

  /* =========================================================
     SEARCH
  ========================================================= */

  const handleSearch = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setPage(1);

    updateUrl(
      search,
      category,
      type,
      sort,
      1
    );
  };

  /* =========================================================
     CATEGORY
  ========================================================= */

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;

    setCategory(value);
    setPage(1);

    updateUrl(
      search,
      value,
      type,
      sort,
      1
    );
  };

  /* =========================================================
     TYPE
  ========================================================= */

  const handleTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;

    setType(value);
    setPage(1);

    updateUrl(
      search,
      category,
      value,
      sort,
      1
    );
  };

  /* =========================================================
     SORT
  ========================================================= */

  const handleSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;

    setSort(value);
    setPage(1);

    updateUrl(
      search,
      category,
      type,
      value,
      1
    );
  };

  /* =========================================================
     CHANGE PAGE
  ========================================================= */

  const changePage = (nextPage: number) => {
    if (
      nextPage < 1 ||
      nextPage > totalPages
    ) {
      return;
    }

    setPage(nextPage);

    updateUrl(
      search,
      category,
      type,
      sort,
      nextPage
    );

    window.scrollTo({
      top: 520,
      behavior: "smooth",
    });
  };

  /* =========================================================
     CLEAR FILTERS
  ========================================================= */

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setType("All Types");
    setSort("newest");
    setPage(1);

    router.replace(pathname, {
      scroll: false,
    });
  };

  const hasFilters =
    search.trim() !== "" ||
    category !== "All Categories" ||
    type !== "All Types" ||
    sort !== "newest";

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <>
      <main className={styles.page}>
        {/* =================================================
            HERO
        ================================================= */}

        <section className={styles.hero}>
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>

              <span>/</span>

              <span>Advice</span>
            </div>

            <span className={styles.heroLabel}>
              ALPHA PROPERTY & GARDENING SERVICES
            </span>

            <h1>Advice Search Results</h1>

            <p>
              Helpful advice, practical guides and
              useful information for homeowners,
              landlords and gardens.
            </p>
          </div>
        </section>

        {/* =================================================
            SEARCH / FILTER AREA
        ================================================= */}

        <section className={styles.searchSection}>
          <div className={styles.container}>
            <div className={styles.searchBox}>
              <div className={styles.searchHeading}>
                <span
                  className={styles.headingLine}
                />

                <div>
                  <span
                    className={
                      styles.smallHeading
                    }
                  >
                    FIND THE RIGHT ADVICE
                  </span>

                  <h2>
                    Search our advice
                  </h2>
                </div>
              </div>

              <form
                className={styles.searchForm}
                onSubmit={handleSearch}
              >
                <div
                  className={
                    styles.searchInputWrap
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={
                      styles.searchIcon
                    }
                  >
                    <path
                      d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                    placeholder="Search advice..."
                    aria-label="Search advice"
                  />

                  {search && (
                    <button
                      type="button"
                      className={
                        styles.clearInput
                      }
                      onClick={() =>
                        setSearch("")
                      }
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className={
                    styles.searchButton
                  }
                >
                  Search
                </button>
              </form>

              {/* FILTERS */}

              <div className={styles.filters}>
                {/* CATEGORY */}

                <div
                  className={
                    styles.filterItem
                  }
                >
                  <label htmlFor="category">
                    Category
                  </label>

                  <div
                    className={
                      styles.selectWrap
                    }
                  >
                    <select
                      id="category"
                      value={category}
                      onChange={
                        handleCategoryChange
                      }
                    >
                      {categories.map(
                        (item) => (
                          <option
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        )
                      )}
                    </select>

                    <span>⌄</span>
                  </div>
                </div>

                {/* TYPE */}

                <div
                  className={
                    styles.filterItem
                  }
                >
                  <label htmlFor="type">
                    Advice Type
                  </label>

                  <div
                    className={
                      styles.selectWrap
                    }
                  >
                    <select
                      id="type"
                      value={type}
                      onChange={
                        handleTypeChange
                      }
                    >
                      {types.map(
                        (item) => (
                          <option
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        )
                      )}
                    </select>

                    <span>⌄</span>
                  </div>
                </div>

                {/* SORT */}

                <div
                  className={
                    styles.filterItem
                  }
                >
                  <label htmlFor="sort">
                    Sort By
                  </label>

                  <div
                    className={
                      styles.selectWrap
                    }
                  >
                    <select
                      id="sort"
                      value={sort}
                      onChange={
                        handleSortChange
                      }
                    >
                      <option value="newest">
                        Newest First
                      </option>

                      <option value="oldest">
                        Oldest First
                      </option>

                      <option value="az">
                        Title A-Z
                      </option>

                      <option value="za">
                        Title Z-A
                      </option>
                    </select>

                    <span>⌄</span>
                  </div>
                </div>

                {hasFilters && (
                  <button
                    type="button"
                    className={
                      styles.clearFilters
                    }
                    onClick={clearFilters}
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            RESULTS
        ================================================= */}

        <section
          className={styles.resultsSection}
        >
          <div className={styles.container}>
            <div className={styles.resultsTop}>
              <div>
                <span
                  className={
                    styles.resultsLabel
                  }
                >
                  ADVICE & GUIDANCE
                </span>

                <h2>
                  {search
                    ? `Search results for "${search}"`
                    : "Latest advice"}
                </h2>
              </div>

              <div
                className={
                  styles.resultsCount
                }
              >
                <strong>
                  {filteredArticles.length}
                </strong>

                <span>
                  {filteredArticles.length ===
                  1
                    ? "result"
                    : "results"}
                </span>
              </div>
            </div>

            {visibleArticles.length > 0 ? (
              <>
                <div
                  className={
                    styles.resultsLayout
                  }
                >
                  {/* ARTICLES */}

                  <div
                    className={
                      styles.articleGrid
                    }
                  >
                    {visibleArticles.map(
                      (article) => (
                        <article
                          className={
                            styles.articleCard
                          }
                          key={article.id}
                        >
                          <Link
                            href={article.href}
                            className={
                              styles.imageLink
                            }
                          >
                            <div
                              className={
                                styles.imageWrap
                              }
                            >
                              <img
                                src={
                                  article.image
                                }
                                alt={
                                  article.title
                                }
                              />

                              <span
                                className={
                                  styles.cardCategory
                                }
                              >
                                {
                                  article.category
                                }
                              </span>
                            </div>
                          </Link>

                          <div
                            className={
                              styles.cardContent
                            }
                          >
                            <div
                              className={
                                styles.cardMeta
                              }
                            >
                              <span>
                                {article.type}
                              </span>

                              <span
                                className={
                                  styles.dot
                                }
                              >
                                •
                              </span>

                              <span>
                                {article.date}
                              </span>
                            </div>

                            <h3>
                              <Link
                                href={
                                  article.href
                                }
                              >
                                {article.title}
                              </Link>
                            </h3>

                            <p>
                              {
                                article.excerpt
                              }
                            </p>

                            <Link
                              href={
                                article.href
                              }
                              className={
                                styles.readMore
                              }
                            >
                              Read article

                              <span>
                                →
                              </span>
                            </Link>
                          </div>
                        </article>
                      )
                    )}
                  </div>

                  {/* SIDEBAR */}

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
                          styles.sidebarLabel
                        }
                      >
                        NEED HELP?
                      </span>

                      <h3>
                        Looking for a property
                        service?
                      </h3>

                      <p>
                        Our team provides
                        reliable property
                        maintenance, gardening
                        and outdoor services.
                      </p>

                      <Link
                        href="/contact"
                        className={
                          styles.sidebarButton
                        }
                      >
                        Contact us

                        <span>
                          →
                        </span>
                      </Link>
                    </div>

                    <div
                      className={
                        styles.sidebarLinks
                      }
                    >
                      <span>
                        POPULAR TOPICS
                      </span>

                      <Link
                        href="/advice?category=Home%20Care"
                      >
                        Home Care

                        <b>→</b>
                      </Link>

                      <Link
                        href="/advice?category=Maintenance"
                      >
                        Property Maintenance

                        <b>→</b>
                      </Link>

                      <Link
                        href="/advice?category=Garden%20%26%20Outdoor"
                      >
                        Garden & Outdoor

                        <b>→</b>
                      </Link>

                      <Link
                        href="/advice?category=Landlord%20Advice"
                      >
                        Landlord Advice

                        <b>→</b>
                      </Link>
                    </div>
                  </aside>
                </div>

                {/* PAGINATION */}

                {totalPages > 1 && (
                  <div
                    className={
                      styles.pagination
                    }
                  >
                    <button
                      type="button"
                      onClick={() =>
                        changePage(
                          safePage - 1
                        )
                      }
                      disabled={
                        safePage === 1
                      }
                      className={
                        styles.pageArrow
                      }
                      aria-label="Previous page"
                    >
                      ←
                    </button>

                    {Array.from(
                      {
                        length: totalPages,
                      },
                      (_, index) =>
                        index + 1
                    ).map((number) => (
                      <button
                        type="button"
                        key={number}
                        onClick={() =>
                          changePage(
                            number
                          )
                        }
                        className={`${styles.pageNumber} ${
                          number === safePage
                            ? styles.activePage
                            : ""
                        }`}
                      >
                        {number}
                      </button>
                    ))}

                    <button
                      type="button"
                      onClick={() =>
                        changePage(
                          safePage + 1
                        )
                      }
                      disabled={
                        safePage ===
                        totalPages
                      }
                      className={
                        styles.pageArrow
                      }
                      aria-label="Next page"
                    >
                      →
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* NO RESULTS */

              <div
                className={
                  styles.noResults
                }
              >
                <div
                  className={
                    styles.noResultsIcon
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3>
                  No advice found
                </h3>

                <p>
                  We couldn't find any
                  articles matching your
                  search. Try another
                  keyword or clear the
                  filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className={
                    styles.noResultsButton
                  }
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <section
          className={styles.bottomCta}
        >
          <div
            className={styles.ctaInner}
          >
            <div>
              <span>
                ALPHA PROPERTY &
                GARDENING SERVICES
              </span>

              <h2>
                Need professional help
                with your property?
              </h2>

              <p>
                From property maintenance
                and repairs to regular
                garden care, our team is
                here to help.
              </p>
            </div>

            <div
              className={
                styles.ctaButtons
              }
            >
              <Link
                href="/contact"
                className={
                  styles.ctaPrimary
                }
              >
                Get in touch

                <span>
                  →
                </span>
              </Link>

              <Link
                href="/our-services"
                className={
                  styles.ctaSecondary
                }
              >
                View our services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* =========================================================
   PAGE WRAPPER

   IMPORTANT:
   useSearchParams() is used inside AdvicePageContent.
   This Suspense boundary fixes the Next.js production
   build / Vercel prerender error.
========================================================= */

export default function AdvicePage() {
  return (
    <>
      <Header />

      <Suspense
        fallback={
          <main
            className={styles.page}
          >
            <section
              className={styles.hero}
            >
              <div
                className={
                  styles.heroOverlay
                }
              />

              <div
                className={
                  styles.heroContent
                }
              >
                <div
                  className={
                    styles.breadcrumb
                  }
                >
                  <Link href="/">
                    Home
                  </Link>

                  <span>/</span>

                  <span>
                    Advice
                  </span>
                </div>

                <span
                  className={
                    styles.heroLabel
                  }
                >
                  ALPHA PROPERTY &
                  GARDENING SERVICES
                </span>

                <h1>
                  Advice Search Results
                </h1>

                <p>
                  Helpful advice, practical
                  guides and useful
                  information for
                  homeowners, landlords
                  and gardens.
                </p>
              </div>
            </section>
          </main>
        }
      >
        <AdvicePageContent />
      </Suspense>

      <Footer />
    </>
  );
}