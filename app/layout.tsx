import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://prasannapingale.vercel.app"),
  title: "Prasanna Pingale — Product Analyst | Data & Funnels",
  description:
    "Product Analyst with 3+ years turning user behavior, funnels, and experimentation data into clear decisions for product teams.",
  openGraph: {
    title: "Prasanna Pingale — Product Analyst | Data & Funnels",
    description:
      "Product Analyst with 3+ years turning user behavior, funnels, and experimentation data into clear decisions for product teams.",
    url: "https://prasannapingale.vercel.app",
    siteName: "Prasanna Pingale",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanna Pingale — Product Analyst | Data & Funnels",
    description:
      "Product Analyst with 3+ years turning user behavior, funnels, and experimentation data into clear decisions for product teams.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}