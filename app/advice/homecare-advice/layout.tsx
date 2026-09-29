import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Maintenance & Property Care Advice | Alpha",
  description:
    "Practical home maintenance and property-care advice covering repairs, plumbing, bathrooms, kitchens, decorating, flooring, gutters and gardens.",
  alternates: {
    canonical: "/advice/homecare-advice",
  },
};

export default function HomeCareAdviceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}