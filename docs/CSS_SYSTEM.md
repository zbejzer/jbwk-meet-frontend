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
    - Imports `reset.css` (via `@layer base`) and `theme.css`.
    - Applies the global HTML and body defaults for the site.
    - Includes base rules for smooth scrolling, text rendering, body background, text color, and responsive images.
    - Defines the `.content-container` utility class for consistent content width and padding.

- `src/assets/styles/cta-button.css`
    - Reusable button classes (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--cta`).
    - Imported per-component where CTA buttons are needed (SiteHeader, HeroBanner).
    - Avoids the need for a `Button.astro` wrapper component.

## Design token categories

### Palette

**Naming convention:** tone-based — each token describes _what color it is_, not _what it's used for_. Variables are grouped by color family (white, black, gray, red, event-specific).

**Neutral scale:**

- `--color-white` — full white (`oklch(1 0 0)`)
- `--color-white-70` — 70% opacity white, for nav links and interactive text
- `--color-white-55` — 55% opacity white, for subdued text like section labels and footer links
- `--color-white-35` — 35% opacity white, for very subtle text and footer descriptions
- `--color-white-border` — 8% opacity white, for hairline borders
- `--color-white-border-strong` — 14% opacity white, for prominent borders
- `--color-black` — pure black (`oklch(0 0 0)`)
- `--color-black-800` — `oklch(0.252 0 0)`, lightest black surface
- `--color-black-900` — `oklch(0.2134 0 0)`, page background
- `--color-black-905` — `oklch(0.2002 0 0)`
- `--color-black-910` — `oklch(0.1913 0 0)`
- `--color-black-925` — `oklch(0.1638 0 0)`
- `--color-black-950` — `oklch(0.1448 0 0)`, darkest black surface (footer background)
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

- `--font-jockey-one`
- `--font-body`
- `--text-xs` through `--text-5xl`
- `--leading-tight`, `--leading-normal`, `--leading-relaxed`
- `--tracking-tight`, `--tracking-normal`, `--tracking-wide`, `--tracking-wider`, `--tracking-widest`

Use these tokens for component font sizes and text rhythm instead of hard-coded values.

### Spacing

- `--space-1` through `--space-24`
- `--section-padding-y`
- `--section-padding-x`

This gives a consistent spacing scale for margin, padding, and section layout.

### Layout

- `--content-container-desktop` — max-width for main content (1400px)
- `--content-narrow` — max-width for narrow content blocks (640px)
- `--header-height` — fixed height of the sticky site header (68px)

The `.content-container` utility class (defined in `global.css`) applies `max-width: var(--content-container-desktop)`, horizontal padding of 48px, and centers with `margin: 0px auto`. It is used as a wrapper in SiteHeader, SiteFooter, and every meet section.

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

- `--breakpoint-sm` — 40rem (640px)
- `--breakpoint-md` — 48rem (768px)
- `--breakpoint-lg` — 64rem (1024px)
- `--breakpoint-xl` — 80rem (1280px)
- `--breakpoint-2xl` — 96rem (1536px)
- `--breakpoint-3xl` — 120rem (1920px)

These are the responsive breakpoints used in the project. Note that component media queries currently use hard-coded pixel values (719px for mobile, 1023px for tablet) rather than these tokens — this may be aligned in a future refactoring pass.

## Usage guidelines

- Prefer `var(--*)` tokens in component styles.
- Keep component styles focused on structure and local layout.
- Reuse the global spacing scale rather than inventing new numeric values.
- Use tone-based color tokens like `--color-white-55` and `--color-black-910` rather than hard-coded hex values.
- Use `--section-padding-y` and `--section-padding-x` for section spacing to keep section layouts consistent.
- Use `--content-container` and `--content-narrow` for maximum container widths.
- Apply `box-sizing: border-box` globally via `reset.css` so padding is easy to reason about.

## Current global conventions

- `global.css` sets the root scroll behavior and body typography.
- `body` uses `font-family: var(--font-body)` and `background: var(--color-black-900)`.
- Images are responsive with `display: block`, `max-width: 100%`, and `height: auto`.
- The `.content-container` class applies `max-width: var(--content-container-desktop)` (1400px), horizontal padding of 48px, and is centered with auto margins. It is the standard content wrapper used across all page sections.
- The project currently uses a dark theme with a single bright red accent color.
- CTA buttons use the `.btn` class family from `cta-button.css` rather than a component. Import `cta-button.css` in any `.astro` file that renders a CTA button.

## Future notes

- Add semantic tokens as needed, such as `--color-surface-card`, `--color-link`, or `--color-background-secondary`.
- Keep `theme.css` as the single source of truth for all shared design values.
- Components should not import `theme.css` directly; import `global.css` once from the layout.
- Prefer component CSS modules or scoped styles in Astro components for local styling.
