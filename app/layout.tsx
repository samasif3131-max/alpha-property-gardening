import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpha Property & Gardening Services",
  description:
    "One Team. Complete Property Care. Property maintenance, garden services, plumbing, bathrooms and kitchens across our service area.",
  keywords: [
    "Alpha Property & Gardening Services",
    "property maintenance",
    "garden services",
    "plumbing services",
    "bathroom installation",
    "kitchen installation",
    "property services",
    "Lincolnshire",
  ],
  icons: {
    icon: "/images/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}