# Therapist Practice SKU — Dual-Tier Front Desk

This folder contains the productized Phase 1 deliverables for the therapist-practice vertical. Two tiers are available; pick the one that fits the client's preferences + volume.

## The two Phase 1 tiers

| Tier | Setup | Monthly | Timeline | When to use |
|---|---|---|---|---|
| **Phase 1 Admin-Augmented Front Desk** | $1,500-$2,500 | $200-$300/mo | 2 weeks | Practice owner wants human first contact; admin bandwidth is available; budget-sensitive entry point |
| **Phase 1 AI Front Desk** | $3,500-$5,000 | $400-$600/mo | 3 weeks | Practice wants 24/7 autonomous response; no bilingual staff; volume too high for admin |

Most therapy practices start with **Admin-Augmented** and graduate to **AI Front Desk** at 90-180 days when admin bandwidth becomes the bottleneck. Document this upgrade path in the proposal as a Phase 1B option.

**Start guides:**

- 📘 [`phase-1-admin-tier.md`](./phase-1-admin-tier.md) — Admin-Augmented Front Desk setup guide (2-week timeline; admin handles calls; smaller vendor stack: HubSpot + Resend + 1Password)
- 📘 [`phase-1-setup.md`](./phase-1-setup.md) — AI Front Desk setup guide (3-week timeline; Retell + Telnyx + Vapi alternative; 16-phrase crisis test required)

This folder also contains the demo workflow package for the fictional client **Cedar Park Counseling Collective**, designed for sales demos and workflow testing on the self-hosted ClearAutomations n8n instance.

The demo has two lanes:

- **Phase 1 non-PHI workflows:** safe to test with business lead data only.
- **Phase 2/3 simulations:** fake-data-only workflows that stay disabled unless running in a demo-only environment.

No file in this pack should contain real patient information, clinical notes, symptoms, diagnosis details, appointment reasons, insurance member IDs, or payer-specific patient data.

## First admin-tier deployment (case study in progress)

**Embracing Minds Counseling** (Humble, TX) is the first client on the Admin-Augmented tier. Go-live target: Tue 2026-05-26. See [`clients/embracing-minds/`](../../clients/embracing-minds/) for the full engagement, including [`admin-callback-playbook.md`](../../clients/embracing-minds/intake-and-routing/admin-callback-playbook.md) which serves as the reference template for future admin-tier clients.

## Folder Map

### Tier-specific setup guides

- **[`phase-1-admin-tier.md`](./phase-1-admin-tier.md)** — Admin-Augmented Front Desk SKU setup guide. 2-week timeline. Admin handles calls; system handles notifications + CRM + reminders + directory + metrics. First deployed: Embracing Minds (Humble, TX) 2026-05-26.
- **[`phase-1-setup.md`](./phase-1-setup.md)** — AI Front Desk SKU setup guide. 3-week timeline. Retell/Vapi voice agent handles autonomous callbacks. Requires 16-phrase crisis test + STIR/SHAKEN + bilingual voice review.

### Generic SKU files (shared by both tiers)

- **[`vapi-retell-agent-setup-guide.md`](./vapi-retell-agent-setup-guide.md)** — research-backed step-by-step Vapi + Retell agent configuration walkthrough (AI tier only).
- [`vapi-script.md`](./vapi-script.md) — Vapi/Retell agent system prompt template (AI tier). Admin tier adapts via `admin-callback-playbook.md` at the client-overlay level.
- [`demo-client-profile.md`](./demo-client-profile.md) — fictional Cedar Park Counseling Collective practice profile (sales-demo context for prospects).
- [`setup-manual.md`](./setup-manual.md) — basic n8n import instructions (superseded by tier-specific setup guides for first-time deployment).
- [`import-checklist.md`](./import-checklist.md) — concise post-import verification.
- [`client-demo-script.md`](./client-demo-script.md) — suggested live walkthrough script.
- [`workflows/`](./workflows/) — importable workflow JSON plus per-workflow manuals. W01-W04 + W07 cover both tiers; W05-W06 are Phase 2/3 simulations.
- [`demo-data/`](./demo-data/) — fake JSON payloads for manual tests.

### Live client engagements

Client-specific overlays live in `docs/clients/{client-slug}/`. The Embracing Minds engagement at [`clients/embracing-minds/`](../../clients/embracing-minds/) is the first admin-tier pilot — start there when looking at admin-tier reference implementations. Files that originally lived in this folder (production-readiness-gates.md, profile.md, EM-specific vapi-script.md, email-templates.md, hubspot-pipeline.md, w04-directory-data.json, form-spec.md, routing-matrix.md) all moved to that client folder during the 2026-05-15 reorganization.

## n8n Organization

Preferred organization:

- Project: `DEMO - Therapist Practice - Cedar Park Counseling`
- Tags: `demo`, `therapist`, `phase-1`, `non-phi`, `phase-2-simulated`, `phase-3-simulated`

Fallback organization for Community/self-hosted instances without projects:

- Keep all workflows in personal space.
- Prefix workflow names with `DEMO - Therapist Practice -`.
- Add the tags above so the workflows can be filtered together.

## Official n8n References

- Workflow import/export: https://docs.n8n.io/workflows/export-import/
- Projects: https://docs.n8n.io/user-management/rbac/projects/
- Tags: https://docs.n8n.io/workflows/tags/
- Workflow creation and publishing: https://docs.n8n.io/workflows/create/
- CLI import: https://docs.n8n.io/hosting/cli-commands/
