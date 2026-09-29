import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasonal Property Maintenance Advice | Alpha",
};

export default function SeasonalAdviceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}