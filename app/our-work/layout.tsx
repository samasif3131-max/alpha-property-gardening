import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Property Maintenance & Renovations | Alpha",
};

export default function OurWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}