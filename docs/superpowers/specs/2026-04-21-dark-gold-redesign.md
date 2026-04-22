# Clear Automations — Dark + Gold Redesign Spec

## Context
The clearautomations.com consulting site uses a warm stone (#F5F2ED) + amber (#C2742F) palette with Fraunces + Outfit fonts. The brand guide specifies dark mode + gold (#D4A843) with Instrument Serif + Geist. The site also has excessive whitespace (80-112px section padding). This redesign aligns the site to the brand guide, reduces whitespace, and creates a premium AI automation aesthetic.

## Design Decisions (Approved)
- **Color:** Dark + Gold (brand guide #D4A843)
- **Typography:** Instrument Serif italic (headlines) + Geist (body)
- **Layout:** Compact (40-60px section padding, down from 80-112px)
- **Navy sections:** Keep Phases + CTA as distinct navy (#1E293B) for visual variety — don't merge with main dark bg

---

## Color System

### CSS Variables to Replace

| Variable | Old Value | New Value |
|----------|-----------|-----------|
| `--stone` | `#F5F2ED` | `#060608` |
| `--stone-dark` | `#EBE7E0` | `#0E0E12` |
| `--ink` | `#1C1917` | `#F0F0F2` |
| `--ink-soft` | `#44403C` | `#8A8A9A` |
| `--ink-muted` | `#78716C` | `#5A5A6A` |
| `--ink-faint` | `#A8A29E` | `#3A3A4A` |
| `--amber` | `#C2742F` | `#D4A843` |
| `--amber-hover` | `#A8622A` | `#E8BD52` |
| `--amber-dim` | `rgba(194,116,47,0.08)` | `rgba(212,168,67,0.08)` |
| `--navy` | `#1E293B` | `#1E293B` (keep) |
| `--navy-text` | `#CBD5E1` | `#CBD5E1` (keep) |
| `--navy-muted` | `#64748B` | `#64748B` (keep) |
| `--rule` | `#D6D3CD` | `rgba(255,255,255,0.06)` |

### New Variables to Add

| Variable | Value | Usage |
|----------|-------|-------|
| `--surface` | `#0E0E12` | Card backgrounds, alt sections |
| `--surface-raised` | `#14141A` | Hover states |
| `--border-accent` | `rgba(212,168,67,0.2)` | Gold borders on featured elements |
| `--glow` | `rgba(212,168,67,0.15)` | Subtle gold glow effects |

---

## Typography

### Font Changes in layout.tsx

**Remove:**
- `Outfit` import (weights 300-700)
- `Fraunces` import

**Add:**
- `Instrument_Serif` from `next/font/google` (weight 400, italic style)
- `Geist` from `next/font/google` (weights 400, 500, 600)

```tsx
import { Instrument_Serif, Geist } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
```

### CSS Updates in globals.css

```css
@theme inline {
  --font-sans: var(--font-sans);    /* Geist */
  --font-display: var(--font-display); /* Instrument Serif */
}

body {
  font-family: var(--font-sans), 'Geist', sans-serif;
}
```

### Usage in page.tsx

All `font-[var(--font-fraunces)]` → `font-[var(--font-display)]`

No change needed since the CSS variable name `--font-display` is already referenced by Fraunces — just the underlying font changes.

Wait — current code uses `--font-fraunces` explicitly. All instances of `font-[var(--font-fraunces)]` must be updated to `font-[var(--font-display)]`.

---

## Layout Changes

### Global Padding Reduction

| Section | Current Padding | New Padding |
|---------|----------------|-------------|
| Hero | `pt-32 pb-20 sm:pt-40 sm:pb-28` | `pt-24 pb-14 sm:pt-32 sm:pb-20` |
| Problem | `py-20 sm:py-28` | `py-12 sm:py-16` |
| Before/After | `py-20 sm:py-28` | `py-12 sm:py-16` |
| Why Us | `py-20 sm:py-28` | `py-12 sm:py-16` |
| FAQ | `py-20 sm:py-28` | `py-12 sm:py-16` |
| Phases (navy) | `py-20 sm:py-28` | `py-16 sm:py-20` (slightly more since it's a feature section) |
| CTA (navy) | `py-20 sm:py-28` | `py-16 sm:py-20` |
| Footer | `py-10` | `py-8` |

### Section-Specific Changes

**Nav:**
- `bg-[var(--stone)]/95` → `bg-[#060608]/95`
- Logo: add `font-[var(--font-display)] italic` to "Clear" text
- Border: `border-[var(--rule)]` auto-updates via variable

**Hero:**
- Background: inherits from body (dark)
- No radial gradient needed (or change to gold-tinted: `rgba(212,168,67,0.05)`)
- All text colors auto-update via CSS variables

**Problem section:**
- Remove `border-t border-[var(--rule)]` — use subtle gold border instead: `border-t border-[var(--border-accent)]`
- Gap between items: `gap-10 sm:gap-16` → `gap-8 sm:gap-10`
- Number markers will use `--rule` which is now `rgba(255,255,255,0.06)` — subtle on dark bg

**Phases section (navy — KEEP DISTINCT):**
- Stays `bg-[var(--navy)]` — visually distinct from main `#060608` bg
- Phase 1 card: add `border border-[var(--border-accent)]` to highlight as recommended entry
- Tighten internal padding: `p-8 sm:p-10` → `p-6 sm:p-8`

**Before/After:**
- Remove `border-t border-[var(--rule)]` top border — replaced by natural dark section flow
- Table header `border-b-2 border-[var(--ink)]` → `border-b-2 border-[var(--border-accent)]`
- Row borders auto-update via `--rule`

**Why Us:**
- `bg-[var(--stone-dark)]` → auto-updates to `#0E0E12` (surface)
- Provides visual break from main bg

**FAQ:**
- Remove top border
- `+` icon color: `--ink-faint` auto-updates to darker gray
- Dividers auto-update via `--rule`

**CTA/Audit section (navy — KEEP DISTINCT):**
- Stays `bg-[var(--navy)]`
- Form inputs: `bg-white/5 border-white/10` stays as-is (already dark-mode ready)
- Focus border: `focus:border-[var(--amber)]` auto-updates to gold

**Footer:**
- Background: inherits from body (dark)
- All text colors auto-update via variables

---

## Files to Modify

### 1. `src/app/layout.tsx`
- Swap font imports: Fraunces + Outfit → Instrument_Serif + Geist
- Update CSS variable names in className
- Update `<html>` className to use new font variables

### 2. `src/app/globals.css`
- Replace all CSS variable values (color swap table above)
- Add new variables (`--surface`, `--surface-raised`, `--border-accent`, `--glow`)
- Update `@theme inline` block
- Update `body` font-family
- Update `::selection` colors

### 3. `src/app/page.tsx`
- Replace all `font-[var(--font-fraunces)]` with `font-[var(--font-display)]`
- Reduce all section padding values (see table above)
- Reduce gap values in Problem section
- Add gold border to Phase 1 card
- Update nav logo styling (add italic serif)
- Remove/update section top borders
- Most color classes auto-update via CSS variable changes — no manual class changes needed

---

## What Does NOT Change
- All copy/text content
- Form action URL (Formspree `PLACEHOLDER`)
- Page structure (8 sections, same order)
- Responsive breakpoints
- Fade-up animation
- Meta tags and SEO

---

## Verification
1. `npm run build` — zero errors
2. `npm run dev` — check every section visually
3. Verify Instrument Serif loads (italic serif headlines)
4. Verify Geist loads (clean sans body text)
5. Verify gold (#D4A843) appears on CTAs, labels, links
6. Verify navy sections (Phases + CTA) are visually distinct from main dark bg
7. Verify form still submits (Formspree)
8. Mobile check at 375px
9. Check no leftover warm stone colors (#F5F2ED, #EBE7E0, #C2742F) in rendered output
