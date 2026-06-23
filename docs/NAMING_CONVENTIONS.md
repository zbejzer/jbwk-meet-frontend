# Naming Conventions

This document defines the naming conventions used in this Astro project. Following these rules ensures a consistent
developer experience, predictable routing, and easier collaboration.

---

## General File Naming Rules

- Use **lowercase** characters exclusively.
- Separate words with **hyphens** (`-`), not underscores or spaces.
- Never use special characters (e.g., `%`, `&`, `#`) in file or directory names.
- File extensions must be lower-case and match the technology used (`.astro`, `.ts`, `.js`, `.tsx`, `.jsx`, `.vue`, etc.).
- Keep names **descriptive** but **concise**.

---

## Pages (`src/pages/`)

Astro uses file-based routing. The file path and name directly define the URL.

| Rule                                    | Example filename                   | Resulting URL               |
| --------------------------------------- | ---------------------------------- | --------------------------- |
| File name uses **kebab-case**           | `about.astro`                      | `/about`                    |
| Directory names use **kebab-case**      | `blog/index.astro`                 | `/blog`                     |
| Dynamic route files use `[param].astro` | `blog/[slug].astro`                | `/blog/:slug`               |
| Nested dynamic routes                   | `dashboard/[user]/[project].astro` | `/dashboard/:user/:project` |
| Rest parameters (catch-all)             | `[...path].astro`                  | `/anything/here/will/match` |
| Home page                               | `index.astro`                      | `/`                         |

**Exceptions:**

- Must never contain uppercase letters, as URLs are case‑sensitive and unexpected casing can lead to broken links.
- Trailing slashes are handled by the framework; do not attempt to create a folder structure that forces a trailing slash (e.g., avoid `about/index.astro` unless you need sub‑routes).

Good: `pages/contact-us.astro`  
Bad: `pages/ContactUs.astro`, `pages/contact_us.astro`

---

## Layouts (`src/layouts/`)

Layouts wrap entire pages or groups of pages. They are Astro components that receive `content` and optional props.

- **PascalCase** for layout files.
- Suffix with `Layout` to make the purpose clear.
- Keep layout files as close to the components that use them as possible (common layouts live in `src/layouts/`).

| ✅ Good                 | ❌ Avoid                 |
| ----------------------- | ------------------------ |
| `BaseLayout.astro`      | `base.layout.astro`      |
| `BlogPostLayout.astro`  | `blogPostLayout.astro`   |
| `DashboardLayout.astro` | `dashboard-layout.astro` |
| `MarketingLayout.astro` | `marketingLayout.astro`  |

When a layout is only used by one route, consider placing it in the same directory as the page (e.g., `src/pages/blog/_layout.astro`), but still name it in PascalCase: `_BlogLayout.astro`.

---

## Reusable Components (`src/components/`)

### Astro Components (`.astro` files)

- **PascalCase** for file names.
- Avoid generic names like `Header.astro`; prefer predictable, domain‑specific names.

| ✅ Good              | ❌ Bad          |
| -------------------- | --------------- |
| `SiteHeader.astro`   | `header.astro`  |
| `PrimaryNav.astro`   | `nav.astro`     |
| `HeroBanner.astro`   | `banner1.astro` |
| `CallToAction.astro` | `cta.astro`     |

If a component belongs to a specific feature or page, place it in a sub‑directory with the feature name (kebab-case):

```
src/components/
  checkout/
    CheckoutForm.astro
    PaymentSummary.astro
  blog/
    PostCard.astro
    AuthorBio.astro
```

### Framework Components (React, Vue, Svelte, etc.)

Follow the naming standards of the respective framework, but always use a PascalCase file name to be consistent with Astro’s import expectations:

- **React/Preact** (`.tsx`, `.jsx`): `MyComponent.tsx`
- **Vue** (`.vue`): `MyComponent.vue`
- **Svelte** (`.svelte`): `MyComponent.svelte`
- **Solid** (`.tsx`, `.jsx`): `MyComponent.tsx`

Even if the framework prefers kebab-case or camelCase filenames, keep the file name in PascalCase for visual consistency across the project.

---

## Directories

- **Route directories** (`src/pages/` sub‑directories): **kebab-case** (they directly influence URLs).
- **Component sub‑directories**: **kebab-case** (feature grouping or category).
- **Layout directories**: **kebab-case** when grouping by domain (e.g., `src/layouts/marketing/`), but the layout files inside remain PascalCase.
- **Utility / lib directories**: **kebab-case**.

Examples:

```
src/
  pages/
    blog/             ← kebab-case (URL segment)
      index.astro
      [slug].astro
    products/
      [category]/
        index.astro
  components/
    checkout/         ← kebab-case
    shared/           ← kebab-case
  layouts/
    marketing/        ← kebab-case
```

---

## Non‑Page Resources (images, fonts, data)

- **Images**: `kebab-case.jpg`, `kebab-case.png`, `kebab-case.svg`.
- **Fonts**: `kebab-case.woff2`.
- **Data files (JSON/YAML)**: `kebab-case.json` if they are static data, or `camelCase.json` if they are imported as JavaScript/TypeScript objects. The convention for static assets is kebab-case.
- **Public directory** (`public/`): All files in `public/` are served directly. Use **kebab-case** for all filenames to stay compatible with CDNs and case‑sensitive servers.

---

## TypeScript / Utility Modules

- **Utility files**: `kebab-case.ts` (e.g., `format-date.ts`, `slugify.ts`).
- **Type definition files**: `kebab-case.types.ts` or `kebab-case.d.ts`.
- **Constants / config files**: `kebab-case.ts`.

If a file exports a single function or class, a matching PascalCase filename is acceptable but must be imported with the exact casing, e.g., `formatDate.ts` is okay. The project default is kebab-case for modules.

---

## Import Aliases

This project defines path aliases in `tsconfig.json` and/or `astro.config.mjs`. Use them consistently:

```ts
import BaseLayout from '@layouts/BaseLayout.astro'
import SiteHeader from '@components/SiteHeader.astro'
import { formatDate } from '@lib/format-date'
```

The alias path segments should align with the directory naming (e.g., `@components`, `@layouts`, `@lib`, `@assets`). Never mix casing.

---

## Summary Cheat Sheet

| Artifact type          | File naming         | Example                   |
| ---------------------- | ------------------- | ------------------------- |
| Page                   | kebab-case          | `contact-us.astro`        |
| Dynamic page           | kebab-case          | `[slug].astro`            |
| Layout                 | PascalCase + Layout | `BaseLayout.astro`        |
| Component (Astro)      | PascalCase          | `PrimaryNav.astro`        |
| Component (React/Vue)  | PascalCase          | `Alert.tsx` / `Alert.vue` |
| Utility / lib module   | kebab-case          | `format-date.ts`          |
| Static asset           | kebab-case          | `hero-background.webp`    |
| Directory (routes)     | kebab-case          | `blog/`                   |
| Directory (components) | kebab-case          | `shared/`                 |

---

This document is maintained by the team. If you encounter a situation not covered here, please raise a discussion or issue in the repository.
