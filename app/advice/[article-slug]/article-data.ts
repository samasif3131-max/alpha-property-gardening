export type ArticleStatus =
  | "Draft"
  | "Review"
  | "Published"
  | "Archived";

export type ArticleBodyBlock =
  | {
      type: "heading";
      level: 2 | 3;
      content: string;
    }
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "list";
      style: "bulleted" | "numbered";
      items: string[];
    }
  | {
      type: "callout";
      variant:
        | "goodToKnow"
        | "safety"
        | "landlord"
        | "emergency"
        | "beforeRepair";
      content: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export type AdviceService = {
  label: string;
  heading: string;
  description: string;
  href: string;
};

export type AdviceArticle = {
  id: string;
  status: ArticleStatus;

  title: string;
  slug: string;

  seoTitle: string;
  metaDescription: string;
  excerpt: string;

  category: string;
  tags: string[];

  body: ArticleBodyBlock[];

  quickAnswer?: string;

  featuredImage?: string;
  featuredImageAlt?: string;

  author?: string;

  publishedDate: string;
  updatedDate?: string;

  relatedService: AdviceService;
  secondaryServices?: Array<{
    label: string;
    href: string;
  }>;

  relatedArticleSlugs: string[];

  emergencyFlag?: boolean;
  landlordNote?: string;
  photoCta?: string;

  seasonalTags?: string[];

  createdAt: string;
  updatedAt: string;
};

/*
 * Add fully reviewed article records here.
 *
 * IMPORTANT:
 * Only records with:
 *
 * status: "Published"
 *
 * body content
 *
 * and complete SEO/content fields
 *
 * will be publicly rendered by the article route.
 *
 * Existing title-only Advice Hub entries should remain Draft/Review
 * until the complete article body has been written and checked.
 */

export const adviceArticles: AdviceArticle[] = [
  /*
  {
    id: "example-id",
    status: "Published",

    title: "Example Published Advice Article",
    slug: "example-published-advice-article",

    seoTitle:
      "Example Published Advice Article | Alpha Advice",

    metaDescription:
      "Article-specific meta description written for the actual search intent.",

    excerpt:
      "A concise introduction explaining the customer problem and what the article covers.",

    category: "Property Maintenance",

    tags: [
      "Home Care",
      "Property Maintenance",
    ],

    quickAnswer:
      "A concise, accurate answer to the customer's main question.",

    featuredImage:
      "https://example.com/real-image.jpg",

    featuredImageAlt:
      "Meaningful description of the actual image",

    publishedDate: "2026-09-01",
    updatedDate: "2026-09-20",

    body: [
      {
        type: "heading",
        level: 2,
        content: "What Is Happening?",
      },
      {
        type: "paragraph",
        content:
          "Explain the symptom or problem clearly without overdiagnosing.",
      },
      {
        type: "heading",
        level: 2,
        content: "Common Causes",
      },
      {
        type: "paragraph",
        content:
          "Explain reasonable possibilities using careful language such as may, can or could indicate.",
      },
      {
        type: "list",
        style: "bulleted",
        items: [
          "Observable sign one",
          "Observable sign two",
          "Observable sign three",
        ],
      },
      {
        type: "callout",
        variant: "safety",
        content:
          "If the work requires specialist competence, regulated work or unsafe access, arrange appropriate professional help.",
      },
    ],

    relatedService: {
      label: "View Property Maintenance",
      heading: "Need Help With This Property Problem?",
      description:
        "If the issue needs repair or practical attention, Alpha may be able to help.",
      href: "/property-maintenance",
    },

    secondaryServices: [
      {
        label: "View Painting & Decorating",
        href: "/painting-and-decorating",
      },
    ],

    relatedArticleSlugs: [],

    emergencyFlag: false,

    photoCta:
      "Tell Alpha what you're seeing and upload photographs through the quote form.",

    seasonalTags: [],

    createdAt: "2026-09-01T09:00:00.000Z",
    updatedAt: "2026-09-20T09:00:00.000Z",
  },
  */
];

export function getArticleBySlug(slug: string) {
  return adviceArticles.find(
    (article) => article.slug === slug
  );
}

export function getPublishedArticles() {
  return adviceArticles.filter(
    (article) => article.status === "Published"
  );
}