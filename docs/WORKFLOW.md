# Agent Workflow — Rewrite Stages

This document defines the workflow for implementing each stage of the `preview.html` → Astro rewrite. It is designed for an AI agent that can search files with regex — not a human with a browser and DevTools.

---

## Why the original workflow failed

The following issues were discovered in the completed components (Stages 0–5) despite having a workflow document:

| Issue                                                 | Category          | Why workflow missed it                                                 |
| ----------------------------------------------------- | ----------------- | ---------------------------------------------------------------------- |
| Separator `·` vs `/`                                  | Visual detail     | "Capture text content" didn't capture the exact separator character    |
| "Dom Kultury Kadr" vs "WARSZAWA"                      | Wrong string      | Extracted venue from EVENT object instead of the literal rendered text |
| "MEET 2026" color: only "2026" red vs entire line red | Color per element | Didn't extract color per-element; assumed pattern                      |
| Hallucinated subtitle text                            | Invented content  | Generated plausible-sounding text without verifying against source     |
| "Warszawa, Mokotów" location line                     | Extra element     | Added an element not present in the reference                          |
| Footer flex vs grid                                   | Wrong layout mode | Extracted layout as "space-between" without checking display mode      |

**Root cause**: The workflow relied on human visual inspection ("open in browser", "use DevTools") which the AI agent cannot perform. Regex searching alone was insufficient to capture:

1. Exact rendered text strings (especially single characters like separators)
2. Color assignment per element
3. Display mode (`grid` vs `flex`)
4. The complete list of rendered elements

---

## Corrected Step-by-step Process (per stage)

### Step 1: Locate the section in the source

Find the React component function in `preview.html` using the function name:

```
search_files: regex `function ComponentName\(\{`
```

Note the line number. This gives you the section boundaries.

### Step 2: Extract EVERY rendered element

Search the rendered HTML portion of the file (after the React source) for the section's rendered output. For each visible element, extract:

- **Exact text content** — copy the literal string, including punctuation and whitespace
- **Element type** — `span`, `p`, `h1`, `div`, `a`, etc.
- **Color per element** — which elements use `color: accent` (red), which use white, which use muted
- **Layout properties** — `display`, `flex-direction`, `align-items`, `justify-content`, `grid-template-columns`
- **Sizing** — exact `font-size` (including `clamp()` values), `max-width`, `min-height`, `padding`
- **Separators and decorations** — what character divides items? What icons or decorative elements appear?

**Mandatory**: Produce a table like this before writing any code:

| #   | Element        | Text content                        | Color                 | Notes                |
| --- | -------------- | ----------------------------------- | --------------------- | -------------------- |
| 1   | `span`         | "REJESTRACJA OTWARTA · EDYCJA 2026" | muted                 | uppercase            |
| 2   | `span` (block) | "JBWK"                              | white                 | line 1 of heading    |
| 3   | `span` (block) | "MEET 2026"                         | accent (red)          | line 2, entirely red |
| 4   | `span`         | "25.07.2026"                        | muted                 | date segment         |
| 5   | `span`         | "/"                                 | accent at 60% opacity | separator            |
| 6   | `span`         | "WARSZAWA"                          | muted                 | city segment         |
| 7   | `span`         | "/"                                 | accent at 60% opacity | separator            |
| 8   | `span`         | "11:00 — 17:00"                     | muted                 | hours segment        |

**This table is the single source of truth.** Every element must appear in the final component exactly as documented.

### Step 3: Update the data file

Open `src/data/meet.ts`. For each piece of content identified in Step 2:

- Add missing strings as typed exports
- Remove hallucinated/extra strings that don't exist in the reference
- Verify array lengths match the reference

**Checklist**:

- Every string from the table exists in a data export
- No string in the data file is NOT in the reference
- URLs from reference match URLs in data

### Step 4: Build the component

Create the `.astro` file. For every element in the Step 2 table:

- Use the exact text content (from data)
- Apply the correct color class
- Reproduce the layout structure exactly (display, flex-direction, grid-template, alignment)
- Use exact sizing values from the reference (not approximations)

### Step 5: Import and build

```bash
npx astro build
```

### Step 6: Verify by grepping the output

Search `dist/index.html` for key strings from the step 2 table:

```
search_files: regex `REJESTRACJA OTWARTA.*EDYCJA|hero__title-line--accent.*MEET`
```

Verify:

- All expected text strings appear in the output
- No extra/hallucinated strings appear
- Layout classes are applied correctly (check `display:grid`, `grid-template-columns`, etc.)

If ANY element differs, fix the component and rebuild.

### Step 7: Mark stage complete

Update `docs/REWRITE_PLAN.md` progress tracker.

---

## Per-stage checklist

```
- [ ] Located component function in preview.html
- [ ] Extracted complete element table (text + color + layout per element)
- [ ] Verified element count matches reference
- [ ] No hallucinated/extra elements
- [ ] All strings in meet.ts match reference exactly
- [ ] Component built with 1:1 element mapping
- [ ] astro build succeeds
- [ ] Grepped dist/index.html — all expected strings present
- [ ] Grepped dist/index.html — no extra strings
- [ ] Marked stage complete in REWRITE_PLAN.md
```

---

## Common pitfalls (updated)

| Symptom                     | Root cause                         | Prevention                                                           |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------- |
| Wrong separator character   | Didn't extract exact rendered text | **Step 2**: Copy every character literally                           |
| Wrong color on an element   | Assumed color pattern from memory  | **Step 2**: Check color per element in the source                    |
| Hallucinated text           | Built from context, not source     | **Step 2**: Produce table from source first; never write from memory |
| Extra elements in component | Added elements not in reference    | **Step 2**: Count elements in reference; match 1:1                   |
| Wrong `display` mode        | Guessed "flex" or "space-between"  | **Step 2**: Check actual `display` and `grid-template` in source     |
| Wrong `max-width`           | Used arbitrary value (`860px`)     | **Step 2**: Extract exact `max-width` value from source              |

---

## Section layout reference

Updated as sections are inspected. Fill in from Step 2 tables.

| Section   | Layout                                                                                                       | Max-width                             | Key values                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero      | Column, left-aligned, vertically centered. `<section>` with absolute-positioned bg image + gradient overlay. | Flows in `content-container` (1400px) | Title: `clamp(3.5rem, 9vw, 10.5rem)`, line-height: 0.9, grid-template. Subtitle: flex row with `/` separators. CTA button: `clamp(56px, 9vw, 168px)`                  |
| Footer    | Grid, 4 columns (2fr 1fr 1fr 1fr), border-top. Copyright bar: flex row, space-between.                       | 1400px container, 48px padding        | `grid-template-columns: 2fr 1fr 1fr 1fr`, gap: 40px. Brand logo: `font-size: var(--text-xl)`, height: 1lh. Description: 70% width.                                    |
| Navbar    | Flex row, space-between, centered. `<header>` fixed top, z-index 100. Alpine scroll detection.               | `content-container` (1400px)          | Height: `--header-height` (68px). Logo: `justify-self: start`. Nav links: flex gap 4px, hidden at ≤1023px. CTA: `margin-left: 12px`.                                  |
| Countdown | Flex row, centered. Four items separated by vertical `1px` bars.                                             | —                                     | Items: `min-width: var(--space-16)` (64px). Values: `var(--text-3xl)`, tabular-nums. Labels: `var(--text-xs)`, uppercase. Separators: 1px × `var(--text-2xl)` height. |
| What Is   | (TBD Stage 6)                                                                                                |                                       |                                                                                                                                                                       |
| Program   | (TBD Stage 7)                                                                                                |                                       |                                                                                                                                                                       |
| ...       |                                                                                                              |                                       |                                                                                                                                                                       |
