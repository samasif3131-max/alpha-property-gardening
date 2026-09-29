import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Alpha Property & Gardening Services",
  description:
    "Request a quote from Alpha Property & Gardening Services for property maintenance, repairs, renovations, plumbing, garden services and more.",
};

export default function RequestAQuoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}