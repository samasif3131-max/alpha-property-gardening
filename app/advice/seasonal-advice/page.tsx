"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./seasonal-advice.module.css";

type Season =
  | "Spring"
  | "Summer"
  | "Autumn"
  | "Winter";

type SeasonalArticle = {
  title: string;
  season: Season;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
};

/*
 * IMPORTANT:
 * Only genuine published articles should be added here.
 *
 * The previous four placeholder / 404 article cards have
 * intentionally been removed:
 *
 * - Spring Garden Checklist
 * - Preparing Your Garden for Summer
 * - How to Keep Your Home Warm in Winter
 * - Preparing Your Property for Winter
 *
 * No unpublished article cards, dates, categories or
 * READ ARTICLE links are shown on the public page.
 */
const seasonalArticles: SeasonalArticle[] = [];

const seasonNavigation: Array<{
  name: Season;
  description: string;
  icon: string;
}> = [
  {
    name: "Spring",
    description:
      "Prepare the property and garden after winter.",
    icon: "◒",
  },
  {
    name: "Summer",
    description:
      "Make the most of better weather for maintenance and improvement work.",
    icon: "☼",
  },
  {
    name: "Autumn",
    description:
      "Prepare roofs, gutters, gardens and outside areas before winter.",
    icon: "✦",
  },
  {
    name: "Winter",
    description:
      "Deal with cold-weather risks, leaks and urgent property problems.",
    icon: "❄",
  },
];

const currentSeasonArticles: Record<
  Season,
  SeasonalArticle[]
> = {
  Spring: seasonalArticles.filter(
    (article) => article.season === "Spring",
  ),

  Summer: seasonalArticles.filter(
    (article) => article.season === "Summer",
  ),

  Autumn: seasonalArticles.filter(
    (article) => article.season === "Autumn",
  ),

  Winter: seasonalArticles.filter(
    (article) => article.season === "Winter",
  ),
};

function getCurrentUkSeason(): Season {
  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) {
    return "Spring";
  }

  if (month >= 5 && month <= 7) {
    return "Summer";
  }

  if (month >= 8 && month <= 10) {
    return "Autumn";
  }

  return "Winter";
}

function SeasonalArticleCard({
  article,
}: {
  article: SeasonalArticle;
}) {
  return (
    <article className={styles.articleCard}>
      <Link
        href={article.href}
        className={styles.articleImageLink}
      >
        <div className={styles.articleImageWrap}>
          <img
            src={article.image}
            alt={article.title}
          />

          <span className={styles.articleSeasonTag}>
            {article.season}
          </span>
        </div>
      </Link>

      <div className={styles.articleBody}>
        <div className={styles.articleMeta}>
          <span>{article.category}</span>
          <span>•</span>
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

export default function SeasonalAdvicePage() {
  const [search, setSearch] = useState("");

  const currentSeason = useMemo(
    () => getCurrentUkSeason(),
    [],
  );

  const articlesForCurrentSeason =
    currentSeasonArticles[currentSeason];

  useEffect(() => {
    /*
     * SEO / Browser title
     *
     * Client requested:
     * Seasonal Property Maintenance Advice | Alpha
     */
    document.title =
      "Seasonal Property Maintenance Advice | Alpha";

    const description =
      "Seasonal property and garden maintenance advice for spring, summer, autumn and winter, with practical guidance for homeowners and landlords.";

    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      window.location.href =
        "/advice/search";

      return;
    }

    window.location.href =
      `/advice/search?q=${encodeURIComponent(
        query,
      )}`;
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
          className={`${styles.container} ${styles.heroInner}`}
        >
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>

            <span>→</span>

            <Link href="/advice">
              Advice
            </Link>

            <span>→</span>

            <span>Seasonal Advice</span>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>
              SEASONAL PROPERTY MAINTENANCE
            </span>

            {/* Existing H1 intentionally unchanged */}
            <h1>
              Seasonal Property &amp; Garden Advice
            </h1>

            <p className={styles.heroLead}>
              Every season places different demands on a
              property.
            </p>

            <p>
              From spring garden recovery and summer exterior
              maintenance to autumn gutter clearing and
              winter plumbing problems, staying ahead of
              seasonal issues can help prevent larger repairs
              later.
            </p>

            <p>
              Explore practical advice for looking after your
              property throughout the year.
            </p>

            <strong className={styles.heroSlogan}>
              One Team. Complete Property Care.
            </strong>

            <div className={styles.heroActions}>
              <a
                href="#season-navigation"
                className={styles.primaryButton}
              >
                BROWSE BY SEASON
                <span>↓</span>
              </a>

              <a
                href="#seasonal-search"
                className={styles.secondaryButton}
              >
                SEARCH ADVICE
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEASON NAVIGATION
      ===================================================== */}

      <section
        id="season-navigation"
        className={styles.seasonNavigation}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>FOUR SEASONS</span>

            <h2>
              Property care throughout the year
            </h2>

            <p>
              Choose a season to see the practical property
              and garden issues worth thinking about at that
              time of year.
            </p>
          </div>

          <div className={styles.seasonNavigationGrid}>
            {seasonNavigation.map(
              (season) => {
                const active =
                  currentSeason === season.name;

                return (
                  <a
                    key={season.name}
                    href={`#${season.name.toLowerCase()}`}
                    className={`${styles.seasonCard} ${
                      active
                        ? styles.seasonCardActive
                        : ""
                    }`}
                  >
                    {active ? (
                      <span
                        className={
                          styles.currentSeasonBadge
                        }
                      >
                        CURRENT SEASON
                      </span>
                    ) : null}

                    <span
                      className={`${styles.seasonIcon} ${
                        styles[
                          `season${season.name}`
                        ]
                      }`}
                    >
                      {season.icon}
                    </span>

                    <h3>{season.name}</h3>

                    <p>
                      {season.description}
                    </p>

                    <strong>
                      VIEW {season.name.toUpperCase()}{" "}
                      ADVICE →
                    </strong>
                  </a>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section
        id="seasonal-search"
        className={styles.searchSection}
      >
        <div className={styles.container}>
          <div className={styles.searchCard}>
            <div>
              <span>
                SEARCH SEASONAL ADVICE
              </span>

              <h2>
                Looking for a specific answer?
              </h2>

              <p>
                Search the main Advice Hub for property,
                garden, plumbing, maintenance and landlord
                guidance.
              </p>
            </div>

            <form
              className={styles.searchForm}
              onSubmit={handleSearch}
            >
              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value,
                  )
                }
                placeholder="Search property advice..."
                aria-label="Search seasonal advice"
              />

              <button
                type="submit"
                className={styles.searchButton}
              >
                SEARCH
              </button>
            </form>

            <div className={styles.searchLinks}>
              <span>TRY:</span>

              <Link href="/advice/search?q=gutter+maintenance">
                Gutter maintenance
              </Link>

              <Link href="/advice/search?q=spring+garden">
                Spring garden
              </Link>

              <Link href="/advice/search?q=winter+property">
                Winter property
              </Link>

              <Link href="/advice/search?q=landlord+maintenance">
                Landlord maintenance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SPRING
      ===================================================== */}

      <section
        id="spring"
        className={styles.seasonSection}
      >
        <div className={styles.container}>
          <div className={styles.seasonSectionGrid}>
            <div className={styles.seasonIntro}>
              <span
                className={`${styles.largeSeasonIcon} ${styles.springIcon}`}
              >
                ◒
              </span>

              <span className={styles.sectionEyebrow}>
                SPRING
              </span>

              <h2>
                Spring Property Maintenance
              </h2>

              <p>
                Spring is a useful time to assess how the
                property and garden have come through winter.
              </p>

              <div className={styles.currentSeasonLine}>
                {currentSeason === "Spring"
                  ? "This is the current season."
                  : "Plan ahead for the coming months."}
              </div>
            </div>

            <div className={styles.advicePanel}>
              <h3>
                Areas Worth Checking
              </h3>

              <ul>
                <li>
                  Exterior weather damage
                </li>

                <li>
                  Gutters and downpipes
                </li>

                <li>
                  Damp or water staining
                </li>

                <li>
                  Cracked or failed sealant
                </li>

                <li>
                  Garden overgrowth
                </li>

                <li>
                  Hedge and shrub growth
                </li>

                <li>
                  Decorating requirements
                </li>

                <li>
                  Exterior maintenance
                </li>

                <li>
                  Repairs delayed during winter
                </li>
              </ul>

              <div className={styles.infoNote}>
                Spring maintenance can be a good opportunity
                to identify smaller issues before the warmer
                months become busy with larger projects.
              </div>
            </div>
          </div>

          <div className={styles.subsectionGrid}>
            <div className={styles.subsection}>
              <span>SPRING GARDEN ADVICE</span>

              <h3>
                Getting the Garden Back Under Control
              </h3>

              <p>
                Winter can leave gardens untidy or overgrown.
                Useful spring maintenance can include:
              </p>

              <ul>
                <li>First grass cuts</li>
                <li>Strimming overgrown areas</li>
                <li>Garden tidy-ups</li>
                <li>Hedge and shrub maintenance</li>
                <li>Weed control</li>
                <li>
                  Preparing for recurring maintenance
                </li>
                <li>
                  Clearing neglected rental-property gardens
                </li>
              </ul>

              <Link
                href="/garden-services"
                className={styles.textButton}
              >
                VIEW GARDEN SERVICES →
              </Link>
            </div>

            <div className={styles.subsection}>
              <span>
                SPRING PROPERTY ADVICE
              </span>

              <h3>
                Plan Repairs Before Summer
              </h3>

              <p>
                Spring is also useful for reviewing defects
                that appeared during winter and deciding which
                repairs or improvements should be planned
                next.
              </p>

              <div className={styles.topicPills}>
                <span>Winter damage</span>

                <span>Water staining</span>

                <span>Exterior sealant</span>

                <span>Decorating</span>
              </div>

              <Link
                href="/property-maintenance"
                className={styles.textButton}
              >
                VIEW PROPERTY MAINTENANCE →
              </Link>
            </div>
          </div>

          <PublishedSeasonArticles
            season="Spring"
            articles={currentSeasonArticles.Spring}
          />
        </div>
      </section>

      {/* =====================================================
          SUMMER
      ===================================================== */}

      <section
        id="summer"
        className={`${styles.seasonSection} ${styles.seasonSectionAlt}`}
      >
        <div className={styles.container}>
          <div className={styles.seasonSectionGrid}>
            <div className={styles.seasonIntro}>
              <span
                className={`${styles.largeSeasonIcon} ${styles.summerIcon}`}
              >
                ☼
              </span>

              <span className={styles.sectionEyebrow}>
                SUMMER
              </span>

              <h2>
                Summer Property Maintenance
              </h2>

              <p>
                Longer days and generally better weather can
                make summer suitable for planned property work.
              </p>

              <div className={styles.currentSeasonLine}>
                {currentSeason === "Summer"
                  ? "This is the current season."
                  : "Plan ahead for suitable summer work."}
              </div>
            </div>

            <div className={styles.advicePanel}>
              <h3>
                Useful Summer Work
              </h3>

              <ul>
                <li>Exterior painting</li>
                <li>Property repairs</li>
                <li>Garden maintenance</li>
                <li>Renovations</li>
                <li>Kitchen or bathroom projects</li>
                <li>Flooring</li>
                <li>Decorating</li>
                <li>
                  Suitable roof and gutter maintenance
                </li>
                <li>Planned landlord work</li>
              </ul>

              <div className={styles.infoNote}>
                Summer can be a useful time to complete
                planned work that is harder to undertake during
                colder or wetter months.
              </div>
            </div>
          </div>

          <div className={styles.subsectionGrid}>
            <div className={styles.subsection}>
              <span>
                SUMMER GARDEN MAINTENANCE
              </span>

              <h3>
                Keeping Gardens Under Control During Faster Growth
              </h3>

              <p>
                Grass, hedges, shrubs and weeds can grow
                quickly during warmer months.
              </p>

              <div className={styles.topicPills}>
                <span>Mowing</span>
                <span>Strimming</span>
                <span>Hedge maintenance</span>
                <span>Tidy-ups</span>
                <span>Recurring maintenance</span>
                <span>Rental gardens</span>
              </div>

              <Link
                href="/garden-services"
                className={styles.textButton}
              >
                VIEW GARDEN SERVICES →
              </Link>
            </div>

            <div className={styles.subsection}>
              <span>
                SUMMER RENOVATIONS
              </span>

              <h3>
                Planning Property Improvements
              </h3>

              <p>
                Summer can also be useful for planned
                renovations, decorating, bathroom work,
                kitchen work, flooring and exterior maintenance.
              </p>

              <Link
                href="/property-renovations"
                className={styles.textButton}
              >
                VIEW PROPERTY RENOVATIONS →
              </Link>
            </div>
          </div>

          <PublishedSeasonArticles
            season="Summer"
            articles={currentSeasonArticles.Summer}
          />
        </div>
      </section>

      {/* =====================================================
          AUTUMN
      ===================================================== */}

      <section
        id="autumn"
        className={styles.seasonSection}
      >
        <div className={styles.container}>
          <div className={styles.seasonSectionGrid}>
            <div className={styles.seasonIntro}>
              <span
                className={`${styles.largeSeasonIcon} ${styles.autumnIcon}`}
              >
                ✦
              </span>

              <span className={styles.sectionEyebrow}>
                AUTUMN
              </span>

              <h2>
                Autumn Property Maintenance
              </h2>

              <p>
                Autumn should place particular emphasis on
                preparing the property before winter weather.
              </p>

              <div className={styles.currentSeasonLine}>
                {currentSeason === "Autumn"
                  ? "This is the current season."
                  : "A useful season to prepare before winter."}
              </div>
            </div>

            <div className={styles.advicePanel}>
              <h3>
                Important Areas
              </h3>

              <ul>
                <li>Gutters</li>
                <li>Downpipes</li>
                <li>Roofline maintenance</li>
                <li>Exterior repairs</li>
                <li>Garden clearance</li>
                <li>Fallen leaves and debris</li>
                <li>
                  Water-ingress warning signs
                </li>
                <li>
                  Sealant and exposed finishes
                </li>
              </ul>

              <div className={styles.infoNote}>
                Autumn maintenance is often about preventing
                water and weather-related problems from becoming
                more serious over winter.
              </div>
            </div>
          </div>

          <div className={styles.subsectionGrid}>
            <div className={styles.subsection}>
              <span>
                AUTUMN GUTTERS
              </span>

              <h3>
                Gutters &amp; Rainwater Systems
              </h3>

              <p>
                Autumn is particularly relevant to gutters as
                leaves and debris can reduce effective
                drainage.
              </p>

              <ul>
                <li>
                  Why gutters become blocked
                </li>

                <li>
                  Signs gutters are overflowing
                </li>

                <li>
                  Why downpipes matter
                </li>

                <li>
                  When gutter cleaning is needed
                </li>

                <li>
                  Water staining around exterior walls
                </li>
              </ul>

              <Link
                href="/roofing-and-gutter-services"
                className={styles.textButton}
              >
                VIEW ROOFING &amp; GUTTERS →
              </Link>
            </div>

            <div className={styles.subsection}>
              <span>
                AUTUMN GARDENS
              </span>

              <h3>
                Preparing Gardens for Winter
              </h3>

              <p>
                Autumn is a useful time for final grass
                cutting, hedge and shrub maintenance, general
                tidy-ups and clearing accumulated garden
                debris.
              </p>

              <Link
                href="/garden-services"
                className={styles.textButton}
              >
                VIEW GARDEN SERVICES →
              </Link>
            </div>
          </div>

          <PublishedSeasonArticles
            season="Autumn"
            articles={currentSeasonArticles.Autumn}
          />
        </div>
      </section>

      {/* =====================================================
          WINTER
      ===================================================== */}

      <section
        id="winter"
        className={`${styles.seasonSection} ${styles.seasonSectionAlt}`}
      >
        <div className={styles.container}>
          <div className={styles.seasonSectionGrid}>
            <div className={styles.seasonIntro}>
              <span
                className={`${styles.largeSeasonIcon} ${styles.winterIcon}`}
              >
                ❄
              </span>

              <span className={styles.sectionEyebrow}>
                WINTER
              </span>

              <h2>
                Winter Property Maintenance
              </h2>

              <p>
                Cold, wet and windy weather can expose
                weaknesses in properties.
              </p>

              <div className={styles.currentSeasonLine}>
                {currentSeason === "Winter"
                  ? "This is the current season."
                  : "Useful preparation for the colder months."}
              </div>
            </div>

            <div className={styles.advicePanel}>
              <h3>
                Seasonal Concerns
              </h3>

              <ul>
                <li>Plumbing leaks</li>
                <li>
                  Burst or damaged pipework
                </li>
                <li>Water ingress</li>
                <li>
                  Roof and gutter problems
                </li>
                <li>Damp-looking areas</li>
                <li>
                  Interior damage following leaks
                </li>
                <li>
                  Emergency property repairs
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.subsectionGrid}>
            <div className={styles.subsection}>
              <span>
                WINTER PLUMBING
              </span>

              <h3>
                Cold-Weather Plumbing Problems
              </h3>

              <p>
                Useful winter advice can cover water leaks,
                damaged pipework, locating the stop tap and
                knowing when a water-related problem needs
                urgent attention.
              </p>

              <div className={styles.topicPills}>
                <span>Water leaks</span>
                <span>Burst pipes</span>
                <span>Stop tap</span>
                <span>Urgent water escape</span>
              </div>

              <Link
                href="/plumbing-services"
                className={styles.textButton}
              >
                VIEW PLUMBING SERVICES →
              </Link>
            </div>

            <div className={styles.subsection}>
              <span>
                WINTER ROOF &amp; GUTTER ISSUES
              </span>

              <h3>
                Weather-Related Exterior Problems
              </h3>

              <p>
                Storm damage, overflowing gutters, damaged
                downpipes, localised roof defects and ceiling
                staining after heavy rain can all require
                appropriate assessment.
              </p>

              <Link
                href="/roofing-and-gutter-services"
                className={styles.textButton}
              >
                VIEW ROOFING &amp; GUTTERS →
              </Link>
            </div>
          </div>

          <div className={styles.winterDamagePanel}>
            <div>
              <span>
                AFTER A LEAK HAS BEEN RESOLVED
              </span>

              <h3>
                Winter Interior Damage
              </h3>

              <p>
                Once the source of water has been addressed,
                the property may still require wall repairs,
                ceiling repairs, making good, decorating or
                flooring assessment.
              </p>
            </div>

            <div className={styles.winterDamageLinks}>
              <Link href="/property-maintenance">
                VIEW PROPERTY MAINTENANCE →
              </Link>

              <Link href="/painting-and-decorating">
                VIEW PAINTING &amp; DECORATING →
              </Link>
            </div>
          </div>

          <div className={styles.emergencyPanel}>
            <div>
              <span>
                URGENT PROPERTY OR PLUMBING PROBLEM?
              </span>

              <h3>
                24/7 Emergency Property &amp; Plumbing Support
              </h3>

              <p>
                If an active leak, burst pipe or significant
                property water problem is happening now, call
                Alpha directly. Do not rely on online advice
                alone.
              </p>
            </div>

            <a href="tel:01775518068">
              CALL 01775 518068
            </a>
          </div>

          <PublishedSeasonArticles
            season="Winter"
            articles={currentSeasonArticles.Winter}
          />
        </div>
      </section>

      {/* =====================================================
          LANDLORD SEASONAL MAINTENANCE
      ===================================================== */}

      <section className={styles.landlordSection}>
        <div className={styles.container}>
          <div className={styles.landlordGrid}>
            <div>
              <span className={styles.sectionEyebrow}>
                LANDLORDS &amp; LETTING AGENTS
              </span>

              <h2>
                Seasonal Maintenance for Rental Properties
              </h2>

              <p>
                Landlords and letting agents can use seasonal
                maintenance to reduce reactive problems across
                rental properties.
              </p>

              <div className={styles.landlordSeasons}>
                <div>
                  <strong>SPRING</strong>

                  <span>
                    Inspect winter damage
                  </span>

                  <span>
                    Garden recovery
                  </span>

                  <span>
                    General property repairs
                  </span>
                </div>

                <div>
                  <strong>SUMMER</strong>

                  <span>
                    Planned decorating
                  </span>

                  <span>
                    Renovation
                  </span>

                  <span>
                    Garden maintenance
                  </span>
                </div>

                <div>
                  <strong>AUTUMN</strong>

                  <span>
                    Gutters
                  </span>

                  <span>
                    Exterior repairs
                  </span>

                  <span>
                    Garden tidy-ups
                  </span>
                </div>

                <div>
                  <strong>WINTER</strong>

                  <span>
                    Plumbing
                  </span>

                  <span>
                    Water ingress
                  </span>

                  <span>
                    Emergency call-outs
                  </span>
                </div>
              </div>

              <Link
                href="/landlords-letting-agents"
                className={styles.textButton}
              >
                VIEW LANDLORD &amp; LETTING AGENT SERVICES →
              </Link>
            </div>

            <div className={styles.landlordPanel}>
              <span>
                PROPERTY CARE
              </span>

              <strong>
                One maintenance approach across the year.
              </strong>

              <p>
                Keeping a property portfolio organised can
                make seasonal maintenance easier to plan before
                problems become larger repairs.
              </p>

              <Link href="/request-a-quote">
                DISCUSS PROPERTY MAINTENANCE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHECKLIST
      ===================================================== */}

      <section className={styles.checklistSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>
              PRACTICAL CHECKLIST
            </span>

            <h2>
              A Simple Seasonal Property Checklist
            </h2>

            <p>
              Use this as a practical reminder rather than a
              formal property inspection.
            </p>
          </div>

          <div className={styles.checklistGrid}>
            <ChecklistColumn
              season="Spring"
              items={[
                "Check winter-related property damage",
                "Look for water staining",
                "Assess gutters and exterior areas",
                "Bring garden maintenance back under control",
                "Plan repairs or renovations",
              ]}
            />

            <ChecklistColumn
              season="Summer"
              items={[
                "Keep garden growth manageable",
                "Complete planned decorating",
                "Consider exterior maintenance",
                "Progress renovation projects",
                "Deal with outstanding repairs",
              ]}
            />

            <ChecklistColumn
              season="Autumn"
              items={[
                "Check and clear suitable gutters",
                "Inspect visible downpipe issues",
                "Tidy gardens",
                "Address exterior defects",
                "Prepare property for wetter weather",
              ]}
            />

            <ChecklistColumn
              season="Winter"
              items={[
                "Watch for water leaks",
                "Know where the stop tap is",
                "Monitor water ingress",
                "Respond quickly to urgent property problems",
                "Record damage before repairs where useful",
              ]}
            />
          </div>

          <div className={styles.safetyNote}>
            <strong>
              Safety first
            </strong>

            <p>
              If inspection would require unsafe access or
              specialist work, arrange appropriate professional
              assessment. Do not climb onto roofs, attempt gas
              repairs, alter electrical systems, disturb
              suspected asbestos or attempt structural repairs.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEASONAL ARTICLES
      ===================================================== */}

      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>
              SEASONAL ADVICE
            </span>

            <h2>
              Seasonal Advice Guides
            </h2>

            <p>
              Genuine seasonal articles will appear here when
              their real article pages have been created and
              published.
            </p>
          </div>

          {articlesForCurrentSeason.length > 0 ? (
            <>
              <div className={styles.currentSeasonHeading}>
                <strong>
                  {currentSeason}
                </strong>

                <span>
                  Current seasonal guidance
                </span>
              </div>

              <div className={styles.articleGrid}>
                {articlesForCurrentSeason.map(
                  (article) => (
                    <SeasonalArticleCard
                      key={article.href}
                      article={article}
                    />
                  ),
                )}
              </div>
            </>
          ) : (
            <div className={styles.emptySeason}>
              <strong>
                More {currentSeason.toLowerCase()} advice
                coming soon.
              </strong>

              <p>
                The seasonal guidance above remains useful
                for planning ahead, and the wider Advice Hub
                contains other published property and garden
                articles.
              </p>

              <Link href="/advice">
                BROWSE THE ADVICE HUB →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          SEARCH / ADVICE HUB
      ===================================================== */}

      <section className={styles.hubLinkSection}>
        <div className={styles.container}>
          <div className={styles.hubLinkCard}>
            <div>
              <span>
                LOOKING FOR SOMETHING MORE SPECIFIC?
              </span>

              <h2>
                Search the full Advice Hub
              </h2>

              <p>
                Find practical guidance across property
                maintenance, plumbing, bathrooms, kitchens,
                gardens, landlords and home care.
              </p>
            </div>

            <Link
              href="/advice/search"
              className={styles.primaryButton}
            >
              SEARCH ADVICE
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
              <span className={styles.finalEyebrow}>
                SEASONAL PROPERTY CARE
              </span>

              <h2>
                Found Something That Needs Attention?
              </h2>

              <p>
                Seasonal maintenance can identify problems that
                need more than advice.
              </p>

              <p>
                If you need repairs, plumbing, decorating,
                garden maintenance or a larger property
                project, tell Alpha what you’ve found.
              </p>

              <strong>
                One Team. Complete Property Care.
              </strong>
            </div>

            <div className={styles.finalActions}>
              <Link
                href="/request-a-quote"
                className={styles.finalPrimary}
              >
                REQUEST A QUOTE
              </Link>

              <Link
                href="/our-services"
                className={styles.finalSecondary}
              >
                VIEW OUR SERVICES
              </Link>

              <a
                href="tel:01775518068"
                className={styles.finalPhone}
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

/* =========================================================
   PUBLISHED SEASON ARTICLES
   ========================================================= */

function PublishedSeasonArticles({
  season,
  articles,
}: {
  season: Season;
  articles: SeasonalArticle[];
}) {
  /*
   * When no genuine article exists, show only the honest
   * empty state. Do not show:
   * - publication date
   * - category
   * - READ ARTICLE
   * - Published advice
   */
  if (articles.length === 0) {
    return (
      <div className={styles.seasonArticleEmpty}>
        <strong>
          More {season.toLowerCase()} advice coming soon.
        </strong>

        <p>
          This seasonal section contains practical guidance
          now. Published article cards will appear here as
          genuine content becomes available.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.seasonArticleSection}>
      <div className={styles.subsectionHeading}>
        <span>
          {season.toUpperCase()} ARTICLES
        </span>

        <h3>
          Published advice
        </h3>
      </div>

      <div className={styles.articleGrid}>
        {articles.map((article) => (
          <SeasonalArticleCard
            key={article.href}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   CHECKLIST
   ========================================================= */

function ChecklistColumn({
  season,
  items,
}: {
  season: Season;
  items: string[];
}) {
  return (
    <div className={styles.checklistCard}>
      <div
        className={`${styles.checklistIcon} ${
          styles[`checklist${season}`]
        }`}
      >
        {season === "Spring"
          ? "◒"
          : season === "Summer"
            ? "☼"
            : season === "Autumn"
              ? "✦"
              : "❄"}
      </div>

      <h3>{season}</h3>

      <div>
        {items.map((item) => (
          <span key={item}>
            <b>✓</b>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}