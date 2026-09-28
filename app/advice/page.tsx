"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

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

type AdviceCategory = {
  name: string;
  description: string;
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
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/how-to-keep-your-home-warm",
  },
  {
    id: 2,
    title: "How to Prevent Damp and Mould",
    category: "Property Maintenance",
    type: "Guides",
    date: "8 January 2026",
    dateValue: "2026-01-08",
    excerpt:
      "Practical advice for reducing moisture, improving ventilation and protecting your home from damp and mould.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/how-to-prevent-damp-and-mould",
  },
  {
    id: 3,
    title: "Preparing Your Garden for Summer",
    category: "Garden Care",
    type: "Gardening",
    date: "2 January 2026",
    dateValue: "2026-01-02",
    excerpt:
      "Get your garden ready for warmer weather with useful maintenance, planting and outdoor-care considerations.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/preparing-your-garden-for-summer",
  },
  {
    id: 5,
    title: "Landlord Property Maintenance Checklist",
    category: "Landlord Advice",
    type: "Landlords",
    date: "12 December 2025",
    dateValue: "2025-12-12",
    excerpt:
      "A straightforward checklist to help landlords keep rental properties maintained, presentable and ready for the next stage.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/landlord-property-maintenance-checklist",
  },
  {
    id: 6,
    title: "Simple Garden Maintenance Tips",
    category: "Garden Care",
    type: "Gardening",
    date: "5 December 2025",
    dateValue: "2025-12-05",
    excerpt:
      "Keep outdoor spaces looking neat and healthy with practical, repeatable garden-maintenance routines.",
    image:
      "https://images.unsplash.com/photo-1599685315640-6e6c7f7e4b0d?auto=format&fit=crop&w=1200&q=85",
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
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
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
      "Useful checks to help protect your home or rental property from colder weather and seasonal maintenance problems.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/preparing-property-for-winter",
  },
  {
    id: 9,
    title: "Small Improvements That Make a Difference",
    category: "Home Care",
    type: "Guides",
    date: "4 November 2025",
    dateValue: "2025-11-04",
    excerpt:
      "Useful ideas for improving the appearance, comfort and everyday functionality of your property.",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/small-home-improvements",
  },
  {
    id: 10,
    title: "Spring Garden Checklist",
    category: "Garden Care",
    type: "Gardening",
    date: "20 October 2025",
    dateValue: "2025-10-20",
    excerpt:
      "A practical seasonal checklist to help get your garden looking its best as spring arrives.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85",
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
      "Important property-maintenance checks to consider before a tenant moves out of a rental property.",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/end-of-tenancy-checklist",
  },
  {
    id: 12,
    title: "Easy DIY Maintenance Jobs Around the Home",
    category: "Property Maintenance",
    type: "Guides",
    date: "1 October 2025",
    dateValue: "2025-10-01",
    excerpt:
      "A selection of straightforward maintenance checks and minor jobs that can help keep your property in good condition.",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=1200&q=85",
    href: "/advice/diy-maintenance-jobs",
  },
];

const adviceCategories: AdviceCategory[] = [
  {
    name: "Property Maintenance",
    description:
      "Common repairs, upkeep, damage, fixtures and general property-care issues.",
    href: "/advice/search?category=Property%20Maintenance",
  },
  {
    name: "Plumbing",
    description:
      "Leaks, taps, toilets, pipework and common water-related property problems.",
    href: "/advice/search?category=Plumbing",
  },
  {
    name: "Bathrooms",
    description:
      "Sealant, grout, fittings, leaks and planning bathroom improvements.",
    href: "/advice/search?category=Bathrooms",
  },
  {
    name: "Kitchens",
    description:
      "Kitchen maintenance, plumbing, surfaces, installations and renovation planning.",
    href: "/advice/search?category=Kitchens",
  },
  {
    name: "Tiling & Flooring",
    description:
      "Tile repairs, grout, flooring preparation, damage and replacement.",
    href: "/advice/search?category=Tiling%20%26%20Flooring",
  },
  {
    name: "Painting & Decorating",
    description:
      "Preparation, damaged surfaces, paintwork and decorating projects.",
    href: "/advice/search?category=Painting%20%26%20Decorating",
  },
  {
    name: "Roofing & Gutters",
    description:
      "Gutters, downpipes, water ingress and practical roof-maintenance guidance.",
    href: "/advice/search?category=Roofing%20%26%20Gutters",
  },
  {
    name: "Garden Care",
    description:
      "Seasonal garden care including mowing, hedges, clearances and recurring maintenance.",
    href: "/advice/search?category=Garden%20Care",
  },
  {
    name: "Landlord Advice",
    description:
      "Useful maintenance guidance for landlords, letting agents and rental properties.",
    href: "/advice/search?category=Landlord%20Advice",
  },
  {
    name: "Seasonal Advice",
    description:
      "Property and garden guidance based on the changing seasons.",
    href: "/advice/seasonal-advice",
  },
];

const featuredIds = [2, 5, 3, 8, 7];

const popularSearches = [
  {
    label: "Damp and mould",
    query: "damp and mould",
  },
  {
    label: "Garden maintenance",
    query: "garden maintenance",
  },
  {
    label: "Landlord maintenance",
    query: "landlord maintenance",
  },
  {
    label: "Winter property",
    query: "winter property",
  },
  {
    label: "Home ventilation",
    query: "home ventilation",
  },
];

function matchesSearch(article: Article, query: string) {
  const normalisedQuery = query.toLowerCase().trim();

  if (!normalisedQuery) {
    return false;
  }

  return (
    article.title.toLowerCase().includes(normalisedQuery) ||
    article.excerpt.toLowerCase().includes(normalisedQuery) ||
    article.category.toLowerCase().includes(normalisedQuery) ||
    article.type.toLowerCase().includes(normalisedQuery)
  );
}

function ArticleCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  return (
    <article
      className={`${styles.articleCard} ${
        compact ? styles.articleCardCompact : ""
      }`}
    >
      <Link
        href={article.href}
        className={styles.articleImageLink}
      >
        <div className={styles.articleImage}>
          <img
            src={article.image}
            alt={article.title}
          />

          <span className={styles.articleCategory}>
            {article.category}
          </span>
        </div>
      </Link>

      <div className={styles.articleBody}>
        <div className={styles.articleMeta}>
          <span>{article.type}</span>
          <span className={styles.metaDot}>•</span>
          <span>{article.date}</span>
        </div>

        <h3>
          <Link href={article.href}>
            {article.title}
          </Link>
        </h3>

        <p>{article.excerpt}</p>

        <Link
          href={article.href}
          className={styles.readArticle}
        >
          READ ARTICLE
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}

export default function AdvicePage() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title =
      "Property Maintenance & Home Care Advice | Alpha";

    const description =
      "Practical property maintenance, plumbing, renovation, garden and landlord advice from Alpha, with useful guides for looking after your home or rental property.";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  const featuredArticles = useMemo(
    () =>
      featuredIds
        .map((id) =>
          articles.find(
            (article) => article.id === id
          )
        )
        .filter(
          (article): article is Article =>
            Boolean(article)
        ),
    []
  );

  const latestArticles = useMemo(
    () =>
      [...articles]
        .sort((a, b) =>
          b.dateValue.localeCompare(
            a.dateValue
          )
        )
        .slice(0, 6),
    []
  );

  const articlesByCategory = useMemo(() => {
    const map = new Map<string, Article[]>();

    adviceCategories.forEach(
      (category) => {
        map.set(
          category.name,
          articles.filter(
            (article) =>
              article.category ===
              category.name
          )
        );
      }
    );

    return map;
  }, []);

  const genuinePopularSearches =
    useMemo(
      () =>
        popularSearches.filter(
          (item) =>
            articles.some((article) =>
              matchesSearch(
                article,
                item.query
              )
            )
        ),
      []
    );

  function handleSearch(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const value = search.trim();

    if (!value) {
      router.push("/advice");
      return;
    }

    router.push(
      `/advice/search?q=${encodeURIComponent(
        value
      )}`
    );
  }

  function scrollToCategories() {
    document
      .getElementById("advice-categories")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <main className={styles.page}>
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div
          className={`${styles.container} ${styles.heroContent}`}
        >
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Advice</span>
          </div>

          <span className={styles.heroEyebrow}>
            ALPHA PROPERTY & GARDENING SERVICES
          </span>

          <h1>Advice Hub</h1>

          <p className={styles.heroLead}>
            Practical property advice from the Alpha team.
          </p>

          <p className={styles.heroText}>
            Looking after a property can involve everything
            from small maintenance jobs and plumbing problems
            to seasonal preparation, renovations and garden
            care.
          </p>

          <p className={styles.heroText}>
            The Alpha Advice Hub brings useful guidance
            together in one place, helping homeowners,
            landlords and letting agents understand common
            property issues and decide what to do next.
          </p>

          <div className={styles.heroButtons}>
            <a
              href="#advice-search"
              className={styles.primaryButton}
            >
              SEARCH ADVICE
              <span>→</span>
            </a>

            <button
              type="button"
              className={styles.secondaryButton}
              onClick={scrollToCategories}
            >
              BROWSE TOPICS
              <span>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section
        id="advice-search"
        className={styles.searchSection}
      >
        <div className={styles.container}>
          <div className={styles.searchCard}>
            <div className={styles.sectionEyebrow}>
              FIND THE RIGHT GUIDANCE
            </div>

            <h2>
              What Do You Need Help With?
            </h2>

            <p>
              Search practical advice for common property,
              garden, maintenance and landlord questions.
            </p>

            <form
              className={styles.searchForm}
              onSubmit={handleSearch}
            >
              <div className={styles.searchInputWrap}>
                <svg
                  className={styles.searchIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search property advice..."
                  aria-label="Search property advice"
                />
              </div>

              <button
                type="submit"
                className={styles.searchButton}
              >
                SEARCH
              </button>
            </form>

            {genuinePopularSearches.length > 0 ? (
              <div className={styles.popularSearches}>
                <span>POPULAR SEARCHES</span>

                <div>
                  {genuinePopularSearches.map(
                    (item) => (
                      <Link
                        key={item.query}
                        href={`/advice/search?q=${encodeURIComponent(
                          item.query
                        )}`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section
        id="advice-categories"
        className={styles.categoriesSection}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>ADVICE TOPICS</span>

            <h2>
              Property-first guidance for real questions
            </h2>

            <p>
              Explore practical advice across property
              maintenance, plumbing, renovation, gardens and
              rental-property care. Categories without
              published content are kept clearly marked rather
              than filled with placeholder articles.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {adviceCategories.map(
              (category) => {
                const categoryArticles =
                  articlesByCategory.get(
                    category.name
                  ) ?? [];

                const hasPublishedContent =
                  categoryArticles.length > 0;

                const card = (
                  <div
                    className={`${styles.categoryCard} ${
                      !hasPublishedContent
                        ? styles.categoryCardEmpty
                        : ""
                    }`}
                  >
                    <span
                      className={
                        styles.categoryNumber
                      }
                    >
                      {String(
                        adviceCategories.findIndex(
                          (item) =>
                            item.name ===
                            category.name
                        ) + 1
                      ).padStart(2, "0")}
                    </span>

                    <h3>{category.name}</h3>

                    <p>
                      {category.description}
                    </p>

                    {hasPublishedContent ? (
                      <span
                        className={
                          styles.categoryLink
                        }
                      >
                        VIEW ADVICE
                        <b>→</b>
                      </span>
                    ) : (
                      <span
                        className={
                          styles.categoryEmptyText
                        }
                      >
                        MORE ADVICE COMING SOON
                      </span>
                    )}

                    {hasPublishedContent ? (
                      <span
                        className={
                          styles.articleCount
                        }
                      >
                        {categoryArticles.length}{" "}
                        published article
                        {categoryArticles.length ===
                        1
                          ? ""
                          : "s"}
                      </span>
                    ) : null}
                  </div>
                );

                if (!hasPublishedContent) {
                  return (
                    <div
                      key={category.name}
                      className={styles.categoryLinkWrap}
                    >
                      {card}
                    </div>
                  );
                }

                if (
                  category.name ===
                  "Seasonal Advice"
                ) {
                  return (
                    <Link
                      key={category.name}
                      href="/advice/seasonal-advice"
                      className={styles.categoryLinkWrap}
                    >
                      {card}
                    </Link>
                  );
                }

                if (
                  category.name ===
                  "Home Care Advice"
                ) {
                  return (
                    <Link
                      key={category.name}
                      href="/advice/homecare-advice"
                      className={styles.categoryLinkWrap}
                    >
                      {card}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={category.name}
                    href={`/advice/search?category=${encodeURIComponent(
                      category.name
                    )}`}
                    className={styles.categoryLinkWrap}
                  >
                    {card}
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED
      ===================================================== */}

      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>FEATURED ADVICE</span>

            <h2>
              Useful answers to real property questions
            </h2>

            <p>
              A selection of the strongest published guides
              currently available in the Advice Hub.
            </p>
          </div>

          {featuredArticles.length > 0 ? (
            <div className={styles.featuredGrid}>
              {featuredArticles.map(
                (article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                  />
                )
              )}
            </div>
          ) : (
            <div className={styles.emptyAdvice}>
              More advice coming soon.
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          LATEST
      ===================================================== */}

      <section className={styles.latestSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeadingRow}>
            <div className={styles.sectionHeading}>
              <span>LATEST ADVICE</span>

              <h2>
                Recent guidance from Alpha
              </h2>

              <p>
                Browse the latest published articles across
                the current advice categories.
              </p>
            </div>

            <Link
              href="/advice/search"
              className={styles.outlineButton}
            >
              VIEW ALL ADVICE
              <span>→</span>
            </Link>
          </div>

          {latestArticles.length > 0 ? (
            <div className={styles.latestGrid}>
              {latestArticles.map(
                (article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    compact
                  />
                )
              )}
            </div>
          ) : (
            <div className={styles.emptyAdvice}>
              More advice coming soon.
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          PROPERTY MAINTENANCE FEATURE
      ===================================================== */}

      <section className={styles.darkFeature}>
        <div className={styles.container}>
          <div className={styles.darkFeatureGrid}>
            <div>
              <span className={styles.featureEyebrow}>
                PROPERTY MAINTENANCE
              </span>

              <h2>
                Looking After Your Property
              </h2>

              <p>
                Small maintenance problems can become larger
                property issues when they are ignored.
              </p>

              <p>
                Our property-maintenance advice explains common
                warning signs, practical maintenance
                considerations and when professional help may
                be appropriate.
              </p>

              <div className={styles.featureLinks}>
                <Link href="/advice/search?category=Property%20Maintenance">
                  EXPLORE PROPERTY MAINTENANCE ADVICE →
                </Link>

                <Link href="/request-a-quote">
                  NEED WORK COMPLETED? REQUEST A QUOTE →
                </Link>
              </div>
            </div>

            <div className={styles.topicPanel}>
              <span>TOPICS</span>

              <div>
                <span>Wall & plaster problems</span>
                <span>Failed sealant</span>
                <span>Water damage</span>
                <span>Door & fitting problems</span>
                <span>Winter preparation</span>
                <span>General maintenance checks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LANDLORD FEATURE
      ===================================================== */}

      <section className={styles.landlordSection}>
        <div className={styles.container}>
          <div className={styles.twoColumnFeature}>
            <div className={styles.featureImage}>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85"
                alt="Rental property guidance for landlords and letting agents"
              />
            </div>

            <div className={styles.featureCopy}>
              <span className={styles.featureEyebrow}>
                LANDLORD & LETTING AGENT ADVICE
              </span>

              <h2>
                Advice for Landlords &amp; Letting Agents
              </h2>

              <p>
                Good property maintenance is easier when
                problems are identified and dealt with
                systematically.
              </p>

              <div className={styles.topicList}>
                <span>Void-property checks</span>
                <span>End-of-tenancy maintenance</span>
                <span>Tenant-reported repairs</span>
                <span>Recurring garden care</span>
                <span>Preparing to re-let</span>
                <span>Repair vs renovation decisions</span>
              </div>

              <div className={styles.featureButtons}>
                <Link
                  href="/advice/search?category=Landlord%20Advice"
                  className={styles.primarySmallButton}
                >
                  VIEW LANDLORD ADVICE →
                </Link>

                <Link
                  href="/request-a-quote"
                  className={styles.secondarySmallButton}
                >
                  REQUEST A QUOTE →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEASONAL
      ===================================================== */}

      <section className={styles.seasonalSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>SEASONAL ADVICE</span>

            <h2>
              Seasonal Property &amp; Garden Advice
            </h2>

            <p>
              Property maintenance changes throughout the year.
              Use the seasons as a simple reminder to plan
              ahead.
            </p>
          </div>

          <div className={styles.seasonGrid}>
            <div>
              <span>SPRING</span>

              <ul>
                <li>Garden recovery</li>
                <li>Exterior inspection</li>
                <li>Gutters</li>
                <li>Decorating preparation</li>
              </ul>
            </div>

            <div>
              <span>SUMMER</span>

              <ul>
                <li>Garden maintenance</li>
                <li>Exterior work</li>
                <li>Planned renovations</li>
              </ul>
            </div>

            <div>
              <span>AUTUMN</span>

              <ul>
                <li>Gutter clearance</li>
                <li>Weather preparation</li>
                <li>Garden tidy-ups</li>
              </ul>
            </div>

            <div>
              <span>WINTER</span>

              <ul>
                <li>Plumbing precautions</li>
                <li>Water leaks</li>
                <li>Exterior weather damage</li>
                <li>Urgent property problems</li>
              </ul>
            </div>
          </div>

          <Link
            href="/advice/seasonal-advice"
            className={styles.centerButton}
          >
            VIEW SEASONAL ADVICE →
          </Link>
        </div>
      </section>

      {/* =====================================================
          HOME CARE
      ===================================================== */}

      <section className={styles.homeCareSection}>
        <div className={styles.container}>
          <div className={styles.homeCareGrid}>
            <div>
              <span className={styles.featureEyebrow}>
                HOME CARE
              </span>

              <h2>
                Home Care Advice
              </h2>

              <p>
                Practical advice for everyday property upkeep,
                repairs and maintenance.
              </p>

              <div className={styles.homeCareTopics}>
                <span>Sealant</span>
                <span>Grout</span>
                <span>Small leaks</span>
                <span>Decorating preparation</span>
                <span>Flooring damage</span>
                <span>General maintenance</span>
              </div>
            </div>

            <div className={styles.homeCareAction}>
              <Link
                href="/advice/homecare-advice"
                className={styles.primaryButton}
              >
                VIEW HOME CARE ADVICE
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AREAS / CONTENT NOTE
      ===================================================== */}

      <section className={styles.contentNoteSection}>
        <div className={styles.container}>
          <div className={styles.contentNote}>
            <div>
              <span>USEFUL LOCAL INFORMATION</span>

              <h2>
                Advice answers the question. Our service pages
                explain where Alpha works.
              </h2>

              <p>
                We keep the Advice Hub focused on useful
                property questions rather than filling articles
                with repeated town names. For service-area
                information, use Alpha’s dedicated coverage
                pages.
              </p>
            </div>

            <Link
              href="/areas-we-cover"
              className={styles.outlineButtonDark}
            >
              AREAS WE COVER
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <div>
              <span className={styles.ctaEyebrow}>
                ALPHA PROPERTY & GARDENING SERVICES
              </span>

              <h2>
                Need More Than Advice?
              </h2>

              <p>
                Some property problems need practical work
                rather than another guide.
              </p>

              <p>
                If you need maintenance, repairs, plumbing,
                renovation work or help with the garden, tell
                Alpha what needs doing.
              </p>

              <strong>
                One Team. Complete Property Care.
              </strong>
            </div>

            <div className={styles.finalCtaButtons}>
              <Link
                href="/our-services"
                className={styles.ctaPrimary}
              >
                VIEW OUR SERVICES
                <span>→</span>
              </Link>

              <Link
                href="/request-a-quote"
                className={styles.ctaSecondary}
              >
                REQUEST A QUOTE
              </Link>

              <a
                href="tel:01775518068"
                className={styles.ctaPhone}
              >
                CALL 01775 518068
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}