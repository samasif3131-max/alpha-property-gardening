import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./article.module.css";
import {
  getArticleBySlug,
  getPublishedArticles,
  type AdviceArticle,
  type ArticleBodyBlock,
} from "./article-data";

type PageProps = {
  params: Promise<{
    "article-slug": string;
  }>;
};

const SITE_URL =
  "https://alphapropertyandgardening.co.uk";

const COMPANY_NAME =
  "Alpha Property & Gardening Services";

function getReadingTime(article: AdviceArticle) {
  const words = article.body
    .map((block) => {
      if (block.type === "image") {
        return "";
      }

      if (block.type === "list") {
        return block.items.join(" ");
      }

      return block.content;
    })
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  if (!words) {
    return null;
  }

  return Math.max(1, Math.ceil(words / 220));
}

function getCategorySearchUrl(category: string) {
  return `/advice/search?category=${encodeURIComponent(
    category
  )}`;
}

function getArticleCanonical(slug: string) {
  return `${SITE_URL}/advice/${slug}`;
}

function formatArticleDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

function renderBodyBlock(
  block: ArticleBodyBlock,
  index: number
) {
  switch (block.type) {
    case "heading": {
      if (block.level === 3) {
        return (
          <h3
            key={`heading-${index}`}
            className={styles.bodyHeading}
          >
            {block.content}
          </h3>
        );
      }

      return (
        <h2
          key={`heading-${index}`}
          className={styles.bodyHeading}
        >
          {block.content}
        </h2>
      );
    }

    case "paragraph":
      return (
        <p
          key={`paragraph-${index}`}
          className={styles.bodyParagraph}
        >
          {block.content}
        </p>
      );

    case "list": {
      const ListTag =
        block.style === "numbered" ? "ol" : "ul";

      return (
        <ListTag
          key={`list-${index}`}
          className={styles.bodyList}
        >
          {block.items.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>
              {item}
            </li>
          ))}
        </ListTag>
      );
    }

    case "callout": {
      let calloutClass = styles.calloutGoodToKnow;
      let calloutLabel = "Good to Know";

      if (block.variant === "safety") {
        calloutClass = styles.calloutSafety;
        calloutLabel = "Safety Note";
      }

      if (block.variant === "emergency") {
        calloutClass = styles.calloutEmergency;
        calloutLabel = "Emergency";
      }

      if (block.variant === "landlord") {
        calloutClass = styles.calloutLandlord;
        calloutLabel = "Landlord Note";
      }

      if (block.variant === "beforeRepair") {
        calloutClass = styles.calloutBeforeRepair;
        calloutLabel = "Before You Repair";
      }

      return (
        <aside
          key={`callout-${index}`}
          className={`${styles.callout} ${calloutClass}`}
        >
          <strong>{calloutLabel}</strong>

          <p>{block.content}</p>
        </aside>
      );
    }

    case "image":
      return (
        <figure
          key={`image-${index}`}
          className={styles.articleFigure}
        >
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
          />

          {block.caption ? (
            <figcaption>
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    default:
      return null;
  }
}

export async function generateStaticParams() {
  return getPublishedArticles()
    .filter((article) => article.body.length > 0)
    .map((article) => ({
      "article-slug": article.slug,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams["article-slug"];

  const foundArticle = getArticleBySlug(slug);

  if (
    !foundArticle ||
    foundArticle.status !== "Published" ||
    !foundArticle.body.length
  ) {
    return {
      title: "Advice Article | Alpha",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const canonical = getArticleCanonical(
    foundArticle.slug
  );

  return {
    title:
      foundArticle.seoTitle ||
      `${foundArticle.title} | Alpha Advice`,
    description: foundArticle.metaDescription,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title:
        foundArticle.seoTitle ||
        `${foundArticle.title} | Alpha Advice`,
      description: foundArticle.metaDescription,
      type: "article",
      url: canonical,
      siteName: COMPANY_NAME,
      publishedTime: foundArticle.publishedDate,
      modifiedTime:
        foundArticle.updatedDate ||
        foundArticle.publishedDate,
      images: foundArticle.featuredImage
        ? [
            {
              url: foundArticle.featuredImage,
              alt:
                foundArticle.featuredImageAlt ||
                foundArticle.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function AdviceArticlePage({
  params,
}: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams["article-slug"];

  const foundArticle = getArticleBySlug(slug);

  if (
    !foundArticle ||
    foundArticle.status !== "Published" ||
    !foundArticle.body.length
  ) {
    notFound();
  }

  /*
   * From this point onward, TypeScript knows the article
   * exists because the invalid case above exits through
   * notFound().
   */
  const article = foundArticle;

  const readingTime = getReadingTime(article);

  const publishedArticles = getPublishedArticles().filter(
    (item) => item.slug !== article.slug
  );

  const relatedArticles = article.relatedArticleSlugs
    .map((relatedSlug) =>
      publishedArticles.find(
        (item) => item.slug === relatedSlug
      )
    )
    .filter(
      (item): item is AdviceArticle =>
        item !== undefined
    )
    .slice(0, 3);

  const primaryService = article.relatedService;
  const secondaryServices =
    article.secondaryServices ?? [];

  const canonical = getArticleCanonical(
    article.slug
  );

  const breadcrumbItems = [
    {
      name: "Home",
      href: "/",
      absoluteUrl: SITE_URL,
    },
    {
      name: "Advice",
      href: "/advice",
      absoluteUrl: `${SITE_URL}/advice`,
    },
    {
      name: article.category,
      href: getCategorySearchUrl(
        article.category
      ),
      absoluteUrl: `${SITE_URL}${getCategorySearchUrl(
        article.category
      )}`,
    },
    {
      name: article.title,
      href: `/advice/${article.slug}`,
      absoluteUrl: canonical,
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    datePublished: article.publishedDate,
    dateModified:
      article.updatedDate ||
      article.publishedDate,
    ...(article.featuredImage
      ? {
          image: [article.featuredImage],
        }
      : {}),
    ...(article.author
      ? {
          author: {
            "@type": "Person",
            name: article.author,
          },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    articleSection: article.category,
    keywords: article.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.absoluteUrl,
      })
    ),
  };

  return (
    <>
      <Header />

      <main className={styles.page}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(articleSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                breadcrumbSchema
              ),
          }}
        />

        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav
              className={styles.breadcrumbs}
              aria-label="Breadcrumb"
            >
              {breadcrumbItems.map(
                (item, index) => (
                  <span
                    key={`${item.name}-${index}`}
                    className={styles.breadcrumbItem}
                  >
                    {index <
                    breadcrumbItems.length - 1 ? (
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    ) : (
                      <span>{item.name}</span>
                    )}

                    {index <
                      breadcrumbItems.length - 1 && (
                      <span
                        aria-hidden="true"
                      >
                        →
                      </span>
                    )}
                  </span>
                )
              )}
            </nav>

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <Link
                  href={getCategorySearchUrl(
                    article.category
                  )}
                  className={styles.category}
                >
                  {article.category}
                </Link>

                <h1>{article.title}</h1>

                <p className={styles.excerpt}>
                  {article.excerpt}
                </p>

                <div
                  className={styles.articleMeta}
                  aria-label="Article information"
                >
                  {article.publishedDate ? (
                    <span>
                      Published{" "}
                      {formatArticleDate(
                        article.publishedDate
                      )}
                    </span>
                  ) : null}

                  {article.updatedDate ? (
                    <span>
                      Updated{" "}
                      {formatArticleDate(
                        article.updatedDate
                      )}
                    </span>
                  ) : null}

                  {readingTime ? (
                    <span>
                      {readingTime} min read
                    </span>
                  ) : null}
                </div>
              </div>

              {article.featuredImage ? (
                <div className={styles.heroImage}>
                  <img
                    src={article.featuredImage}
                    alt={
                      article.featuredImageAlt ||
                      article.title
                    }
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <div className={styles.container}>
          {article.quickAnswer ? (
            <section
              className={styles.quickAnswer}
              aria-labelledby="quick-answer-heading"
            >
              <span
                className={styles.sectionEyebrow}
              >
                QUICK ANSWER
              </span>

              <h2 id="quick-answer-heading">
                Quick Answer
              </h2>

              <p>{article.quickAnswer}</p>
            </section>
          ) : null}

          <div className={styles.articleLayout}>
            <article
              className={styles.articleContent}
            >
              <div className={styles.articleBody}>
                {article.body.map(
                  (block, index) =>
                    renderBodyBlock(
                      block,
                      index
                    )
                )}
              </div>

              {article.emergencyFlag ? (
                <section
                  className={
                    styles.emergencyArticleCta
                  }
                >
                  <div>
                    <span
                      className={
                        styles.emergencyEyebrow
                      }
                    >
                      EMERGENCY PROPERTY SUPPORT
                    </span>

                    <h2>
                      Is Water Escaping Right Now?
                    </h2>

                    <p>
                      If there is an active property
                      or plumbing emergency, contact
                      Alpha directly.
                    </p>

                    <strong>
                      24/7 Emergency Call
                    </strong>
                  </div>

                  <a
                    href="tel:01775518068"
                    className={
                      styles.emergencyButton
                    }
                  >
                    01775 518068
                    <span>Call Now</span>
                  </a>
                </section>
              ) : null}

              {article.landlordNote ? (
                <section
                  className={
                    styles.landlordCallout
                  }
                >
                  <span
                    className={
                      styles.sectionEyebrow
                    }
                  >
                    LANDLORD / AGENT NOTE
                  </span>

                  <h2>
                    Landlord / Agent Note
                  </h2>

                  <p>
                    {article.landlordNote}
                  </p>

                  <Link
                    href="/landlords-letting-agents"
                    className={
                      styles.outlineButton
                    }
                  >
                    View Landlord Services
                    <span>→</span>
                  </Link>
                </section>
              ) : null}

              <section
                className={
                  styles.needHelpSection
                }
              >
                <div>
                  <span
                    className={
                      styles.sectionEyebrow
                    }
                  >
                    RELATED ALPHA SERVICE
                  </span>

                  <h2>
                    {primaryService.heading}
                  </h2>

                  <p>
                    {primaryService.description}
                  </p>
                </div>

                <div
                  className={
                    styles.needHelpActions
                  }
                >
                  <Link
                    href={primaryService.href}
                    className={
                      styles.primaryButton
                    }
                  >
                    {primaryService.label}
                    <span>→</span>
                  </Link>

                  <Link
                    href="/request-a-quote"
                    className={
                      styles.secondaryButton
                    }
                  >
                    Request a Quote
                    <span>→</span>
                  </Link>
                </div>
              </section>

              {article.photoCta ? (
                <section
                  className={styles.photoCta}
                >
                  <div>
                    <span
                      className={
                        styles.sectionEyebrow
                      }
                    >
                      SEND PHOTOS
                    </span>

                    <h2>
                      Not Sure What the Problem Is?
                    </h2>

                    <p>
                      {article.photoCta}
                    </p>
                  </div>

                  <Link
                    href="/request-a-quote"
                    className={
                      styles.primaryButton
                    }
                  >
                    Send Photos &amp; Request a Quote
                    <span>→</span>
                  </Link>
                </section>
              ) : null}

              {secondaryServices.length > 0 ? (
                <section
                  className={
                    styles.secondaryServices
                  }
                >
                  <span
                    className={
                      styles.sectionEyebrow
                    }
                  >
                    ALSO RELEVANT
                  </span>

                  <div>
                    {secondaryServices
                      .slice(0, 2)
                      .map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                        >
                          {service.label}
                          <span>→</span>
                        </Link>
                      ))}
                  </div>
                </section>
              ) : null}

              {relatedArticles.length > 0 ? (
                <section
                  className={
                    styles.relatedSection
                  }
                >
                  <div
                    className={
                      styles.sectionHeadingRow
                    }
                  >
                    <div>
                      <span
                        className={
                          styles.sectionEyebrow
                        }
                      >
                        RELATED ADVICE
                      </span>

                      <h2>Related Advice</h2>
                    </div>
                  </div>

                  <div
                    className={
                      styles.relatedGrid
                    }
                  >
                    {relatedArticles.map(
                      (relatedArticle) => (
                        <article
                          key={
                            relatedArticle.slug
                          }
                          className={
                            styles.relatedCard
                          }
                        >
                          <span
                            className={
                              styles.relatedCategory
                            }
                          >
                            {
                              relatedArticle.category
                            }
                          </span>

                          <h3>
                            <Link
                              href={`/advice/${relatedArticle.slug}`}
                            >
                              {
                                relatedArticle.title
                              }
                            </Link>
                          </h3>

                          <p>
                            {
                              relatedArticle.excerpt
                            }
                          </p>

                          <Link
                            href={`/advice/${relatedArticle.slug}`}
                            className={
                              styles.readMore
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
              ) : null}

              <section
                className={
                  styles.articleNavigation
                }
              >
                <Link
                  href={getCategorySearchUrl(
                    article.category
                  )}
                >
                  View More{" "}
                  {article.category} Advice
                  <span>→</span>
                </Link>

                <Link href="/advice/search">
                  Search Alpha Advice
                  <span>→</span>
                </Link>

                <Link href="/advice">
                  Back to Advice Hub
                  <span>→</span>
                </Link>
              </section>
            </article>

            <aside className={styles.sidebar}>
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
                  ARTICLE CATEGORY
                </span>

                <Link
                  href={getCategorySearchUrl(
                    article.category
                  )}
                  className={
                    styles.sidebarCategory
                  }
                >
                  {article.category}
                </Link>

                {article.tags.length > 0 ? (
                  <>
                    <span
                      className={
                        styles.sidebarLabel
                      }
                    >
                      TOPICS
                    </span>

                    <div
                      className={
                        styles.tagList
                      }
                    >
                      {article.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>

              <div
                className={
                  styles.sidebarService
                }
              >
                <span
                  className={
                    styles.sidebarEyebrow
                  }
                >
                  NEED PRACTICAL HELP?
                </span>

                <h3>
                  {primaryService.heading}
                </h3>

                <p>
                  {primaryService.description}
                </p>

                <Link
                  href={primaryService.href}
                  className={
                    styles.sidebarPrimary
                  }
                >
                  {primaryService.label}
                  <span>→</span>
                </Link>

                <Link
                  href="/request-a-quote"
                  className={
                    styles.sidebarSecondary
                  }
                >
                  Request a Quote
                </Link>
              </div>

              <div
                className={
                  styles.sidebarLinks
                }
              >
                <Link href="/advice/search">
                  Search Alpha Advice
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

                <Link href="/advice">
                  Back to Advice Hub
                  <span>→</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <div>
                <span
                  className={
                    styles.finalEyebrow
                  }
                >
                  ONE TEAM. COMPLETE PROPERTY CARE.
                </span>

                <h2>
                  Need Help With the Problem?
                </h2>

                <p>
                  If you&apos;d rather show us the
                  problem, you can send Alpha a quote
                  request with photographs and details
                  of the work.
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
                >
                  Request a Quote
                  <span>→</span>
                </Link>

                <Link
                  href="/our-services"
                  className={
                    styles.finalSecondary
                  }
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}