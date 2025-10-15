/**
 * Root Layout Component
 * Blue Marine Bridal Venue
 *
 * Handles:
 * - Font loading strategy (Google Fonts + Next.js optimization)
 * - Global metadata and SEO
 * - RTL (Hebrew) language configuration
 * - CSS variable injection for design tokens
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Inter font configuration
 * Used as a fallback for Latin characters (admin panel, etc.)
 * Loaded via Next.js Font Optimization for best performance
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap', // FOUT strategy for better perceived performance
  preload: true,
});

/**
 * Page metadata for SEO
 * Hebrew content for target audience
 */
export const metadata: Metadata = {
  title: "Blue Marine - Palace of Brides",
  description: "Luxury bridal penthouse overlooking the sea in Ashdod",
  // Future: Add OpenGraph, Twitter cards, etc.
};

/**
 * Root Layout Component
 *
 * Font Loading Strategy:
 * 1. Noto Sans Hebrew: Loaded via Google Fonts (link in head)
 *    - Primary font for Hebrew content
 *    - Weights: 300, 400, 500, 600, 700
 *    - Font family defined in globals.css as --font-hebrew
 * 2. Source Serif Pro: Loaded via Google Fonts (link in head)
 *    - Display font for headings and emphasis
 *    - Weights: 400, 600
 * 3. Inter: Loaded via Next.js Font Optimization
 *    - Fallback for Latin characters
 *    - Variable font for optimal performance
 *
 * Why Google Fonts for Hebrew?
 * - Better Hebrew font rendering than local system fonts
 * - Consistent display across all devices
 * - Optimized for RTL languages
 * - Noto Sans Hebrew has excellent Unicode coverage
 *
 * Performance Considerations:
 * - preconnect to Google Fonts for faster DNS resolution
 * - display=swap prevents FOIT (Flash of Invisible Text)
 * - Font files are cached by browser
 * - CSS variables defined in globals.css to prevent hydration mismatches
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          Load Hebrew fonts via Google Fonts
          Noto Sans Hebrew: Primary font for body text
          Source Serif Pro: Display font for headings

          Using display=swap to prevent FOIT (Flash of Invisible Text)
          Browser will show fallback font immediately, then swap to web font
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@300;400;500;600;700&family=Source+Serif+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
