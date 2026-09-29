import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Maintenance for Landlords & Letting Agents | Alpha",
};

export default function LandlordsLettingAgentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}