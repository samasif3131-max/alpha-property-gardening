import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Alpha Property & Gardening Services",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}