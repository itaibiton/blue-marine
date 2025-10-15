/**
 * Tailwind CSS v4 Configuration
 * Blue Marine Bridal Venue
 *
 * Tailwind v4 introduces a CSS-first configuration approach.
 * Most configuration now lives in CSS files using @theme inline.
 *
 * This config file is now primarily used for:
 * - TypeScript type definitions
 * - Plugin registration
 * - Advanced customization not suitable for CSS
 * - Build-time optimizations
 *
 * @see /app/globals.css - Primary theme configuration
 * @see /lib/design-tokens.ts - TypeScript design tokens
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  /**
   * Content paths for Tailwind's JIT compiler
   * Specifies which files to scan for class names
   */
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  /**
   * Dark mode configuration
   * Using 'class' strategy for manual control via .dark class
   * Allows toggle button rather than system preference only
   */
  darkMode: 'class',

  /**
   * Theme extensions
   * Note: In Tailwind v4, most theme customization is done via CSS
   * using @theme inline in globals.css
   *
   * Only use this section for:
   * - Complex JavaScript-based values
   * - Plugin-specific extensions
   * - Build-time calculations
   */
  theme: {
    extend: {
      /**
       * Font families
       * Configured in layout.tsx and globals.css
       * Extended here for TypeScript autocomplete
       */
      fontFamily: {
        hebrew: ['var(--font-hebrew)', 'Noto Sans Hebrew', 'Arial', 'sans-serif'],
        serif: ['Source Serif Pro', 'serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },

      /**
       * Animation extensions
       * Custom animations via tw-animate-css plugin
       * Additional custom animations can be defined here
       */
      animation: {
        // Custom animations can be added here
        // Example: 'fade-in': 'fadeIn 0.5s ease-in-out',
      },

      /**
       * Keyframes for custom animations
       */
      keyframes: {
        // Custom keyframes can be added here
        // Example: fadeIn: {
        //   '0%': { opacity: '0' },
        //   '100%': { opacity: '1' },
        // },
      },
    },
  },

  /**
   * Plugins
   * Extend Tailwind's functionality with plugins
   */
  plugins: [
    /**
     * Future plugins can be added here
     * Examples:
     * - @tailwindcss/typography - Rich text styling
     * - @tailwindcss/forms - Form styling
     * - @tailwindcss/container-queries - Container query support
     */
  ],
};

export default config;
