# Setup Manual: Legal Intake n8n Demo

Use this manual to add the Lone Star Personal Injury Group demo pack to the main self-hosted n8n instance.

## 1. Prepare the n8n Area

If the instance supports projects:

1. Log in as an owner or admin.
2. Create a project named `DEMO - Legal Intake - Lone Star PI Group`.
3. Add only users who should edit demo workflows.
4. Create or confirm these tags: `demo`, `legal-intake`, `phase-1`, `conflict-gate`, `upl-strict`, `aba-compliant`.

## 2. Import the Workflows

CLI import option:

```bash
n8n import:workflow --separate --input=/path/to/docs/industries/legal-intake/workflows/
```

## 3. Keep Workflows Inactive Until Reviewed

All templates ship with `active: false`. Keep them inactive until:

- The webhook paths are confirmed.
- Demo credentials are attached.
- **Attorney sign-off on the Vapi script is on file.** This is non-negotiable.
- The conflict-check API integration with the firm's CMS has been tested with both clear and conflict scenarios.

## 4. Configure Execution Settings

For every workflow:

1. Open workflow settings.
2. Set timezone to the firm's primary state timezone.
3. Disable saving successful production executions where possible.
4. Enable failed execution logging for debugging.
5. Add an error workflow before production use.

## 5. Credentials

The workflow JSON files do not include real credentials.

Use demo-only credentials if connecting external systems:

- `DEMO_RESEND` (transactional email)
- `DEMO_TELNYX` (voice + STIR/SHAKEN)
- `DEMO_VAPI` (voice agent)
- `DEMO_HUBSPOT` (lead-funnel CRM)
- `DEMO_CLIO_API` (conflict-check gate; or `DEMO_MYCASE_API`, `DEMO_PRACTICEPANTHER_API`, `DEMO_FILEVINE_API` per chosen integration)
- `DEMO_DOCUSIGN` (Phase 3 engagement-letter e-sign)
- `DEMO_CLEARAUTOMATIONS_INTERNAL`

Do not attach real CMS credentials, real prospective-client lists, real attorney calendars, or real DocuSign accounts to this demo project.

## 6. Webhook Paths

Recommended demo paths:

- `demo-legal-intake-conflict-cleared`
- `demo-legal-intake-missed-call`
- `demo-legal-intake-case-type-routing`
- `demo-legal-intake-document-collection`
- `demo-legal-intake-engagement-letter-followup`
- `demo-legal-intake-sol-tracker`
- `demo-legal-intake-review-request`
- `demo-legal-intake-weekly-digest`

## 7. Conflict-Check API Integration — The Critical-Path Build Item

The conflict-check gate is the architectural moat of this SKU. Without it, the Vapi script's conflict-gate is a fiction.

### Per-CMS integration notes

- **Clio** — best-documented API; `Matter` and `RelatedContact` endpoints support conflict-check queries. Estimated 8-10 hours of integration work. ([Clio API docs](https://docs.developers.clio.com/))
- **MyCase** — REST API available; conflict-check via `Cases` + `Contacts` endpoints. Estimated 10-12 hours.
- **PracticePanther** — REST API; conflict-check via `Matters` + `Contacts`. Estimated 10-12 hours.
- **Filevine** — Enterprise API tier required for full access; integration takes 12-16 hours and may require firm to upgrade Filevine plan.
- **Manual fallback** — if firm has no integrated CMS, n8n workflow pauses after collecting minimum info and emails the intake coordinator with the conflict-check input fields. Coordinator runs the check manually. Slower but compliant.

## 8. Phase Gating

- **Phase 1 workflows** require attorney sign-off on Vapi script + conflict-check API integration test pass.
- **Phase 2 workflows** require Phase 1 stabilization (2+ weeks live) before launch.
- **Phase 3 workflows** require Phase 2 stabilization. SOL tracker requires firm to provide initial case-list with SOL dates pre-loaded.

## 9. State-Specific Bar Rules

If the firm operates in multiple states, the Multi-Jurisdiction Routing add-on (per `industry-stack-review/legal-intake.md` §8) handles per-state opener variants and bar-rule-specific intake matrices. Texas, Florida, and California are the strictest; New York and New Jersey have specific phone-contact rules.
