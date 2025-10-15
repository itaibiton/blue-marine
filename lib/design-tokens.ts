/**
 * Design Tokens for Blue Marine Bridal Venue
 *
 * This file contains all design tokens used throughout the application.
 * All spacing and typography values use rem units for better accessibility
 * and consistent scaling based on user preferences.
 *
 * Why rem units?
 * - Respects user's browser font size preferences (accessibility)
 * - Consistent scaling across the entire application
 * - Better support for zoom and responsive design
 * - Easier maintenance and refactoring
 *
 * Base: 1rem = 16px (browser default)
 *
 * @see https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html
 */

// ============================================================================
// SPACING TOKENS
// ============================================================================

/**
 * Spacing scale based on 8px grid system (0.5rem)
 *
 * Why 8px grid?
 * - Creates visual rhythm and consistency
 * - Most screen dimensions are divisible by 8
 * - Balances granularity with simplicity
 *
 * @example
 * // Using in components
 * <div className="p-4 mb-8">...</div>
 *
 * // Using programmatically
 * const gap = spacing[4]; // "1rem"
 */
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px - Micro spacing (icon padding, borders)
  2: '0.5rem',    // 8px - Base unit of our grid system
  3: '0.75rem',   // 12px - Small spacing (tight groups)
  4: '1rem',      // 16px - Standard spacing (between elements)
  5: '1.25rem',   // 20px - Medium spacing
  6: '1.5rem',    // 24px - Large spacing (sections)
  8: '2rem',      // 32px - XL spacing (major sections)
  10: '2.5rem',   // 40px - 2XL spacing
  12: '3rem',     // 48px - 3XL spacing (hero sections)
  16: '4rem',     // 64px - 4XL spacing (major breaks)
  20: '5rem',     // 80px - 5XL spacing
  24: '6rem',     // 96px - 6XL spacing (page sections)
  32: '8rem',     // 128px - 7XL spacing (dramatic spacing)
} as const;

/**
 * Spacing keys type for TypeScript safety
 * @example
 * const key: SpacingKey = '4'; // Valid
 * const invalid: SpacingKey = '7'; // Error
 */
export type SpacingKey = keyof typeof spacing;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

/**
 * Font size scale following a modular scale
 *
 * Scale progression:
 * - xs to base: increments of ~0.125rem
 * - base to xl: increments of ~0.125-0.25rem
 * - xl and above: increments of 0.25-0.5rem for hierarchy
 *
 * @example
 * <h1 className="text-6xl">Main Heading</h1>
 * <p className="text-base">Body text</p>
 */
export const fontSize = {
  xs: '0.75rem',    // 12px - Captions, labels, metadata
  sm: '0.875rem',   // 14px - Small body text, secondary info
  base: '1rem',     // 16px - Default body text
  lg: '1.125rem',   // 18px - Large body text, emphasis
  xl: '1.25rem',    // 20px - Subheadings, card titles
  '2xl': '1.5rem',  // 24px - Section headings
  '3xl': '2rem',    // 32px - Page titles
  '4xl': '2.5rem',  // 40px - Hero headings
  '5xl': '3rem',    // 48px - Major hero headings
  '6xl': '3.5rem',  // 56px - Landing page hero
} as const;

/**
 * Font weights
 * Using Hebrew-optimized weights for Noto Sans Hebrew
 */
export const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

/**
 * Line heights for optimal readability
 *
 * Guidelines:
 * - Headings: tighter (1.1-1.3) for visual impact
 * - Body text: comfortable (1.5-1.6) for readability
 * - Small text: slightly increased (1.4) for clarity
 */
export const lineHeight = {
  none: '1',
  tight: '1.25',      // Headings
  snug: '1.375',      // Subheadings
  normal: '1.5',      // Body text
  relaxed: '1.625',   // Large body text
  loose: '2',         // Spacious text
} as const;

/**
 * Letter spacing for fine typography control
 * Hebrew text typically needs less tracking than Latin
 */
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// ============================================================================
// COLOR TOKENS
// ============================================================================

/**
 * Brand color palette for Blue Marine
 *
 * Primary: Teal - Evokes ocean, tranquility, luxury
 * Secondary: Gold - Represents elegance, premium quality
 * Background: Warm off-white - Soft, welcoming atmosphere
 */
export const colors = {
  primary: {
    DEFAULT: '#4c6973',  // Main brand color
    light: '#6e8891',    // Hover states, highlights
    dark: '#3a5159',     // Active states, emphasis
  },
  secondary: {
    DEFAULT: '#d9c7a3',  // Gold accent
    light: '#ede1c9',    // Subtle backgrounds
    dark: '#bfa273',     // Emphasis, borders
  },
  background: {
    DEFAULT: '#faf9f7',  // Main background
  },
  // Extend with semantic colors as needed
} as const;

/**
 * Color keys type for TypeScript safety
 */
export type ColorKey = keyof typeof colors;
export type PrimaryColorKey = keyof typeof colors.primary;
export type SecondaryColorKey = keyof typeof colors.secondary;

// ============================================================================
// LAYOUT TOKENS
// ============================================================================

/**
 * Border radius scale for consistent rounded corners
 */
export const borderRadius = {
  none: '0',
  sm: '0.375rem',    // 6px - Small elements (buttons)
  DEFAULT: '0.625rem', // 10px - Standard (cards, inputs)
  md: '0.75rem',     // 12px - Medium elements
  lg: '1rem',        // 16px - Large elements (modals)
  xl: '1.25rem',     // 20px - Extra large (hero cards)
  '2xl': '1.5rem',   // 24px - Dramatic rounding
  full: '9999px',    // Pill shapes
} as const;

/**
 * Container padding for consistent content spacing
 */
export const containerPadding = {
  mobile: spacing[4],      // 1rem on mobile
  tablet: spacing[6],      // 1.5rem on tablet
  desktop: spacing[8],     // 2rem on desktop
} as const;

/**
 * Layout-specific dimensions
 */
export const layout = {
  navbarHeight: '4rem',        // 64px - Fixed navbar height
  navbarMobileHeight: '3.5rem', // 56px - Mobile navbar
  maxContentWidth: '75rem',     // 1200px - Max content width
  sidebarWidth: '16rem',        // 256px - Sidebar width
} as const;

// ============================================================================
// EFFECT TOKENS
// ============================================================================

/**
 * Box shadow scale for depth and hierarchy
 */
export const boxShadow = {
  sm: '0 0.0625rem 0.125rem rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
  md: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
  lg: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  xl: '0 1rem 2rem rgba(0, 0, 0, 0.2)',
  '2xl': '0 1.5rem 3rem rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 0.125rem 0.25rem rgba(0, 0, 0, 0.06)',
  none: 'none',
} as const;

/**
 * Transition durations for animations
 * Following Material Design motion principles
 */
export const transitionDuration = {
  fast: '150ms',      // Micro-interactions (hover, focus)
  DEFAULT: '250ms',   // Standard transitions
  slow: '350ms',      // Complex animations
  slower: '500ms',    // Page transitions
} as const;

/**
 * Transition timing functions
 */
export const transitionTimingFunction = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Custom easing for smooth, premium feel
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

/**
 * Z-index scale for consistent layering
 * Prevents z-index wars and maintains hierarchy
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Calculate spacing by multiplying base spacing value
 * Useful for custom spacing that follows the 8px grid
 *
 * @param multiplier - Number to multiply the base spacing by
 * @returns Calculated spacing value in rem
 *
 * @example
 * const customSpacing = calculateSpacing(3.5); // "1.75rem" (28px)
 */
export function calculateSpacing(multiplier: number): string {
  const baseSpacing = 0.5; // 8px in rem
  return `${baseSpacing * multiplier}rem`;
}

/**
 * Convert pixel value to rem based on 16px base
 * Use sparingly - prefer using predefined tokens
 *
 * @param px - Pixel value to convert
 * @returns Converted rem value
 *
 * @example
 * const customSize = pxToRem(20); // "1.25rem"
 */
export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

/**
 * Get spacing value by key with TypeScript safety
 *
 * @param key - Spacing key
 * @returns Spacing value in rem
 *
 * @example
 * const gap = getSpacing('4'); // "1rem"
 */
export function getSpacing(key: SpacingKey): string {
  return spacing[key];
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type FontSizeKey = keyof typeof fontSize;
export type FontWeightKey = keyof typeof fontWeight;
export type LineHeightKey = keyof typeof lineHeight;
export type LetterSpacingKey = keyof typeof letterSpacing;
export type BorderRadiusKey = keyof typeof borderRadius;
export type BoxShadowKey = keyof typeof boxShadow;
export type TransitionDurationKey = keyof typeof transitionDuration;
export type TransitionTimingFunctionKey = keyof typeof transitionTimingFunction;
export type ZIndexKey = keyof typeof zIndex;

/**
 * Combined design tokens export for convenience
 */
export const designTokens = {
  spacing,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  colors,
  borderRadius,
  containerPadding,
  layout,
  boxShadow,
  transitionDuration,
  transitionTimingFunction,
  zIndex,
} as const;

export default designTokens;
