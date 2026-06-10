# ClearAutomations Docs

Navigation hub for everything ClearAutomations produces outside the live Next.js site code.

## Top-level layout

| Folder | What's in it |
|---|---|
| **[clients/](./clients/)** | Per-client engagement docs. Each paying or pilot client gets a folder. Start with [`clients/_template/`](./clients/_template/) when a new client signs. |
| **[industries/](./industries/)** | The 7 productized industry SKU packs (therapist, dental, HVAC, roofing, legal-intake, postal-presort, home-services). Each has a generic workflow set + fictional demo persona + setup guide. |
| **[internal/](./internal/)** | ClearAutomations business strategy, market research, audits, SKU briefs. Not for client distribution. |
| **[sales-collateral/](./sales-collateral/)** | Reusable client-facing assets (demo scripts, one-pagers, Loom storyboards). Built post-EM-cutover under Group B of the strategic review. |
| **superpowers/** | Legacy / superpowers skill folder. |

## How a new client engagement starts

1. Copy [`clients/_template/`](./clients/_template/) to `clients/{client-slug}/` (e.g., `clients/cedar-park-counseling/`).
2. Fill in `profile.md` with the practice context.
3. Use the engagement/, intake-and-routing/, website/, and directory/ subfolders to hold the live working docs as the engagement progresses.
4. Cross-reference the relevant industry pack (e.g., `industries/therapist-practice/`) for the generic templates.

## Related code

| Path | Purpose |
|---|---|
| `src/data/industries/*.ts` | The 7 industry SKU configs that drive the public-facing industry landing pages |
| `public/workflow-diagrams/*.svg` | Client-facing workflow diagrams embedded on each industry page |

## Change log

- 2026-05-15: Restructured from flat layout to client + industries + internal hierarchy. EM docs consolidated under `clients/embracing-minds/`. `n8n-demos/` renamed to `industries/`. Internal strategy docs moved to `internal/`.
