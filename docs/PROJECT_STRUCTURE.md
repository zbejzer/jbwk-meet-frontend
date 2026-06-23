# Project Structure

This document explains the directory layout, the reasoning behind it, and the rules governing where new files should be placed.

---

## Guiding Principles

1. **Shared components live at the root of `src/components/`.** Anything used by more than one page stays there.
2. **Page-specific sections live in a named subdirectory.** The meet landing page owns `src/components/meet/`. Future pages (gallery, archive) will get their own subdirectories if they grow beyond a single file.
3. **Content data is extracted from components.** All copy, URLs, FAQ items, and schedule entries live in `src/data/` so components stay pure templates.
4. **One layout, many pages.** `BaseLayout.astro` provides the HTML shell (`<html>`, `<head>`, fonts, meta tags). Every page slots its content into it. If a page later needs a radically different shell, a second layout can be added.
5. **Naming conventions are enforced.** See [`NAMING_CONVENTIONS.md`](./NAMING_CONVENTIONS.md) for the full rules.

---

## Directory Map

```
src/
├── assets/
│   └── images/                        # Static images (kebab-case filenames)
│
├── components/
│   │
│   ├── SiteHeader.astro               # Shared — navbar, used by ALL pages
│   ├── SiteFooter.astro               # Shared — footer, used by ALL pages
│   ├── MeetLogo.astro                 # Shared — logo, reused in 3+ places
│   ├── Countdown.astro                # Shared — Alpine island, countdown timer
│   ├── FaqAccordion.astro             # Shared — <details>/<summary> accordion
│   ├── SectionLabel.astro             # Shared — consistent section headings
│   ├── Button.astro                   # Shared — CTA / link button
│   │
│   └── meet/                          # Sections for the meet landing page ONLY
│       ├── HeroBanner.astro
│       ├── WhatIsSection.astro
│       ├── ProgramSection.astro
│       ├── CompetitionsSection.astro
│       ├── VenueSection.astro
│       ├── BringYourKeyboardSection.astro
│       ├── PartnersSection.astro
│       ├── RegistrationSection.astro
│       └── RegulationsSection.astro
│
├── data/
│   └── meet.ts                        # Event constants, FAQ, schedule — meet page only
│
├── layouts/
│   └── BaseLayout.astro               # HTML shell — all pages use this
│
└── pages/
    ├── index.astro                    # → /           (meet landing page)
    ├── gallery.astro                  # → /gallery    (future)
    └── archive.astro                  # → /archive    (future, distinct design)
```

---

## Why a `meet/` Subdirectory?

The meet landing page is a **one-page composition of many sections** — 9 section components in total. Keeping them all at the root of `components/` would create noise and make it unclear which components belong to which page.

By grouping them under `components/meet/`, we get:

- **Clear ownership.** Opening `components/meet/` shows every piece that makes up the meet landing.
- **Easy cleanup.** If the meet page is ever retired, the entire `meet/` directory can be removed without touching shared components.
- **Room for other pages.** When `gallery` or `archive` need their own section components, they follow the same pattern: `components/gallery/`, `components/archive/`.

## Why `meet` and Not `meet-2026`?

The meet landing page represents **the current edition**. When a new edition happens in 2027, this page is **replaced**, not archived alongside the old one. The archive page (`/archive`) will have a completely distinct design and does not share components with any meet landing page — current or future. A versioned directory name like `meet-2026` would misleadingly suggest that multiple edition directories will coexist. They won't.

## Shared vs. Page-Specific

| Component             | Location           | Used By                                           |
| --------------------- | ------------------ | ------------------------------------------------- |
| `SiteHeader.astro`    | `components/`      | `/`, `/gallery`, `/archive`                       |
| `SiteFooter.astro`    | `components/`      | `/`, `/gallery`, `/archive`                       |
| `MeetLogo.astro`      | `components/`      | `SiteHeader`, `SiteFooter`, `HeroBanner`          |
| `Countdown.astro`     | `components/`      | `/` (meet landing), potentially future meet pages |
| `FaqAccordion.astro`  | `components/`      | `/` (meet landing), potentially any page          |
| `SectionLabel.astro`  | `components/`      | Any page with sections                            |
| `Button.astro`        | `components/`      | Any page with CTAs                                |
| `HeroBanner.astro`    | `components/meet/` | `/` only                                          |
| `WhatIsSection.astro` | `components/meet/` | `/` only                                          |
| …remaining 7 sections | `components/meet/` | `/` only                                          |

## Adding a New Page

To add a page (e.g., `/gallery`):

1. Create `src/pages/gallery.astro`.
2. Import `BaseLayout`, `SiteHeader`, and `SiteFooter`.
3. If the page needs custom section components, create `src/components/gallery/` and place them there.
4. If the page needs content data, create `src/data/gallery.ts`.

A new page **never** imports from `src/components/meet/` — that directory is exclusive to the meet landing.

## Adding a New Shared Component

If a component will be used by **two or more pages**, place it at `src/components/`. If it starts page-specific and later becomes shared, move it to the root and update imports.

---

## Technology Notes

- **Astro 5** for templating and static generation.
- **Alpine.js** for minimal client-side interactivity (navbar scroll detection, countdown timer). The project uses `@astrojs/alpinejs` for integration.
- **No React/Vue/Svelte.** The original `preview.html` used React, but the rewrite replaces all React components with `.astro` templates and Alpine.js islands. The only remaining JavaScript is ~20 lines for the countdown and scroll-aware header.
- **Native `<details>/<summary>`** for the FAQ accordion — no JavaScript required.

---

## Related Documents

- [`NAMING_CONVENTIONS.md`](./NAMING_CONVENTIONS.md) — file and directory naming rules
- [`CONTRIBUTING.md`](./CONTRIBUTING.md) — contribution guidelines
