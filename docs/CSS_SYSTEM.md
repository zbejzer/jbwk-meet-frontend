# CSS System

This document describes the current CSS architecture for the JBWK Meet frontend rewrite.
It explains how global styles are organized, what design tokens are available, and how components should consume the theme.

## Files

- `src/assets/styles/reset.css`
    - A modern CSS reset based on the CSS Remedy approach.
    - Normalizes the browser defaults for box-sizing, margins, typography, form controls, media, and hidden elements.

- `src/assets/styles/theme.css`
    - The design token file for the project.
    - Defines the dark theme palette, typography scale, spacing scale, layout values, radii, shadows, transitions, and breakpoints.
    - This is the single source of truth for colors, sizes, and other reusable style values.

- `src/assets/styles/global.css`
    - Imports `reset.css` and `theme.css`.
    - Applies the global HTML and body defaults for the site.
    - Includes base rules for smooth scrolling, text rendering, body background, text color, and responsive images.

## Design token categories

### Palette

**Naming convention:** tone-based — each token describes _what color it is_, not _what it's used for_. Variables are grouped by color family (white, black, gray, red, event-specific).

**Neutral scale:**

- `--color-white` — full white (`oklch(1 0 0)`)
- `--color-white-muted` — 55% opacity white, for subdued text like section labels
- `--color-white-dim` — 35% opacity white, for very subtle text
- `--color-white-border` — 8% opacity white, for hairline borders
- `--color-white-border-strong` — 14% opacity white, for prominent borders
- `--color-black` — pure black (`oklch(0 0 0)`)
- `--color-black-800` — `oklch(0.252 0 0)`, lightest black surface
- `--color-black-900` — `oklch(0.2134 0 0)`, page background
- `--color-black-905` — `oklch(0.2002 0 0)`
- `--color-black-910` — `oklch(0.1913 0 0)`
- `--color-black-925` — `oklch(0.1638 0 0)`
- `--color-black-950` — `oklch(0.1448 0 0)`, darkest black surface
- `--color-gray-light` — `oklch(0.3829 0 0)`, mid-gray

Higher numbers = darker blacks (from 800 lightest to 950 darkest).

**Accent:**

- `--color-red` — primary accent (`oklch(0.6223 0.2162 26.67)`)
- `--color-red-muted` — hover/pressed accent (`oklch(0.5446 0.188 26.67)`)

**Event palette (future editions):**

- `--color-pixel-heaven` — `oklch(0.4541 0.1131 350.15)`
- `--color-replay-fest` — `oklch(0.8865 0.1507 198.98)`
- `--color-bit-boat-2026` — `oklch(0.4445 0.1193 343.79)`

All colors use the Oklch color space. The tone-based naming makes it clear what each variable represents without implying usage — compose them as needed in components.

### Typography

- `--font-display`
- `--font-body`
- `--text-xs` through `--text-5xl`
- `--leading-tight`, `--leading-normal`, `--leading-relaxed`
- `--tracking-tight`, `--tracking-normal`, `--tracking-wide`

Use these tokens for component font sizes and text rhythm instead of hard-coded values.

### Spacing

- `--space-1` through `--space-24`
- `--section-padding-y`
- `--section-padding-x`

This gives a consistent spacing scale for margin, padding, and section layout.

### Layout

- `--content-max-width`
- `--content-narrow`

Use these values for container widths and content alignment.

### Radii

- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- `--radius-xl`
- `--radius-full`

### Shadows

- `--shadow-sm`
- `--shadow-md`
- `--shadow-lg`

### Transitions

- `--ease-out`
- `--duration-fast`
- `--duration-normal`
- `--duration-slow`

### Breakpoints

- `--breakpoint-sm`
- `--breakpoint-md`
- `--breakpoint-lg`
- `--breakpoint-xl`
- `--breakpoint-2xl`

These are the responsive breakpoints used in the project.

## Usage guidelines

- Prefer `var(--*)` tokens in component styles.
- Keep component styles focused on structure and local layout.
- Reuse the global spacing scale rather than inventing new numeric values.
- Use tone-based color tokens like `--color-white-muted` and `--color-black-910` rather than hard-coded hex values.
- Use `--section-padding-y` and `--section-padding-x` for section spacing to keep section layouts consistent.
- Use `--content-max-width` and `--content-narrow` for maximum container widths.
- Apply `box-sizing: border-box` globally via `reset.css` so padding is easy to reason about.

## Current global conventions

- `global.css` sets the root scroll behavior and body typography.
- `body` uses `font-family: var(--font-body)` and `background: var(--color-black-900)`.
- Images are responsive with `display: block`, `max-width: 100%`, and `height: auto`.
- The project currently uses a dark theme with a single bright red accent color.

## Future notes

- Add semantic tokens as needed, such as `--color-surface-card`, `--color-link`, or `--color-background-secondary`.
- Keep `theme.css` as the single source of truth for all shared design values.
- Components should not import `theme.css` directly; import `global.css` once from the layout.
- Prefer component CSS modules or scoped styles in Astro components for local styling.
