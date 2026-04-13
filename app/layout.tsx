import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Prasanna Pingale — Product Analyst",
  description:
    "Product Analyst with 3+ years turning user behavior, funnels, and experiments into clarity for product teams.",
  openGraph: {
    title: "Prasanna Pingale — Product Analyst",
    description: "Product Analyst with 3+ years turning user behavior, funnels, and experiments into clarity for product teams.",
    url: "https://YOUR-DOMAIN-HERE.com",
    siteName: "Prasanna Pingale Portfolio",
    images: [
      {
        url: "/Headshot.jpeg",
        width: 800,
        height: 600,
        alt: "Prasanna Pingale — Product Analyst",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanna Pingale — Product Analyst",
    description: "Product Analyst with 3+ years turning user behavior, funnels, and experiments into clarity for product teams.",
    images: ["/Headshot.jpeg"],
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