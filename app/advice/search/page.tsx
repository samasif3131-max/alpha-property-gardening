import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchResultsClient from "./search-results-client";

type SearchParams = {
  q?: string;
  category?: string;
};

type PageProps = {
  searchParams: Promise<SearchParams>;
};

function cleanQuery(value: string | undefined) {
  if (!value) return "";

  return value
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 300);
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const query = cleanQuery(params.q);

  return {
    title: query
      ? `Search Results for “${query.slice(0, 90)}” | Alpha Advice`
      : "Search Alpha Advice | Alpha",
    description:
      "Search published Alpha Advice content for practical property maintenance, plumbing, bathroom, garden, landlord and seasonal guidance.",
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function AdviceSearchPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  const initialQuery = cleanQuery(params.q);
  const initialCategory = (params.category || "").trim();

  return (
    <>
      <Header />

      <main>
        <SearchResultsClient
          initialQuery={initialQuery}
          initialCategory={initialCategory}
        />
      </main>

      <Footer />
    </>
  );
}