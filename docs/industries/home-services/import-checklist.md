# Import Checklist

Use this checklist after importing the home-services demo workflows.

## Compliance Gate (Before Anything Texts)

1. **A2P 10DLC registration with The Campaign Registry is mandatory build step 1.** Carriers block 100% of unregistered traffic. Even one automated text requires registration.
2. **Fix the client's privacy policy first.** It must explicitly state that SMS opt-in data is not shared with third parties. A missing or vague line here is the number 1 cause of contractor 10DLC application rejection.
3. **FCC one-to-one consent.** Consent cannot be shared across brands or bought as leads. No purchased lists in any SMS flow.

## Before Import

- Confirm you are in the demo n8n area or project (`[ContractorName] - [SubVertical]`).
- Confirm workflow JSON files are coming from `docs/industries/home-services/workflows/`.
- Confirm no JSON file contains real credentials.
- Confirm no JSON file contains real customer data.
- **Confirm sub-vertical is selected before configuring the Retell agent.**

## After Import

- Workflow names start with `DEMO - Home Services -`.
- Every workflow is inactive after import.
- Tags are added:
  - `home-services`
  - `phase-1`
  - workflow-specific tags such as `speed-to-lead`, `sub-vertical-aware`, `reviews`, `reporting`
  - sub-vertical-specific tag (e.g., `plumbing`, `electrical`, `landscape`, `pest-control`)
- Timezone is set to the contractor's primary state timezone.
- Successful production execution saving is disabled where available.
- Webhook URLs are copied into the manual only after confirming the final path.

## Sub-Vertical Selection (FIRST)

Before functional testing, confirm the contractor's sub-vertical:

1. Plumbing
2. Electrical
3. Landscaping
4. Pest control
5. Garage doors
6. Fence / deck
7. Tree service
8. Junk removal
9. Painting
10. Pressure washing

The n8n workflow set is sub-vertical-agnostic. Sub-vertical-specific configuration happens at the Retell agent-config level.

## Functional Tests

- Run Workflow 01 with `demo-data/service-request-leads.json` (default plumbing scenario). Confirm `priority: urgent-callback` for the after-hours-emergencies record.
- Modify the input (change `subVertical` to `electrical` and `biggestLeak` to "panel sparking and burning smell") and confirm `priority: safety-emergency` and `safetyHits >= 1`.
- Run Workflow 02 with `demo-data/missed-call-leads.json`. Confirm plumbing leak voicemail sorts above the pest-control routine quarterly call.
- Run Workflow 03 with `demo-data/open-estimates.json`. Confirm cadence steps fire by quote age (D3 / D7 / D14), lost records get `tag-lost-reason` with a valid enum value (price / timing / competitor / no-response / scope), and estimates of $7,500 or more set `financeReminderEligible: true`.
- Run Workflow 04 with `demo-data/completed-jobs.json`. Confirm only happy-job-AND-not-opted-out records receive `send-review-request` (3 of 4 in sample data); the neutral garage-door job routes to manager.
- Run Workflow 05 with `demo-data/recurring-customers.json`. Confirm records without `optInSource` come back as `skipped-no-opt-in` (never `send-reactivation`), the summary record reports `skippedNoOptIn`, and non-pest/non-landscape records return `not-applicable`.
- Run Workflow 06 with `demo-data/weekly-metrics.json`. Confirm digest renders with sub-vertical-aware sections. For `plumbing`, the recurring-service section says "not applicable for plumbing"; if you change `subVertical` to `pest-control` and re-run, the section shows recurring-service metrics.

## Sub-Vertical-Specific Retell Agent Configuration

Per `retell-script.md`, configure ONE Retell agent per contractor with:

- System prompt: base script + sub-vertical parameter substitutions
- Sub-vertical safety branch (plumbing: active-flooding/gas-smell; electrical: sparking/smoke; tree: tree-on-house/power-lines; others: none)
- Voice platform: Retell AI (approx $0.07/min, approx 600ms latency, SOC 2, HIPAA self-service BAA). Vapi is a documented alternate for deep-custom builds.
- Calling-hours config: contractor's local business hours (default: 7 AM-7 PM local)

Multi-service shops (plumber + electrician dual-service, landscape + pest, etc.) need the Second Sub-Vertical Support add-on ($750 setup + $50/mo, per the home-services productization pricing).

## HubSpot Pipeline Setup

- Use `demo-data/hubspot-pipeline.json` as the configuration reference.
- 7 stages: New Lead → Callback Queue → Scheduled → Quoted → Follow-Up Active → Won → Lost.
- 15 custom properties matching the pipeline JSON (note: includes `sub_vertical`, `license_info`, `recurring_service_eligible`).

## Phase Gating

- **Phase 1 workflows (W01, W02, W04, W06)** can run on production webhooks after contractor sign-off.
- **Phase 2 workflows (W03 estimate-followup)** ship with importable JSON but require Phase 1 stabilization (2+ weeks live) before production launch.
- **Phase 3 workflows (W05 recurring-service-reactivation)** are enabled ONLY for pest control + landscape sub-verticals; remain disabled for all others.

## License Display Configuration (Plumbing / Electrical / Pest Control)

For Texas (and other regulated states):

- Plumbing: Texas TSBPE license number required on advertising.
- Electrical: Texas TDLR (Chapter 73) license number required on advertising.
- Pest Control: Texas TDA structural pest control license required.

The optional `licenseInfo` field on the lead form captures the license number; `industry-landing.tsx` surfaces it in the landing page footer when present. For other sub-verticals (landscaping, painting, pressure washing, etc.), the field stays optional and the footer remains clean.

## Publishing Rules

- Demo workflows can be published only against demo accounts.
- Production SMS requires opt-in, unsubscribe language, A2P 10DLC sender registration (mandatory before any automated text, even one), quiet hours, and frequency caps. Opt-outs via STOP or any reasonable method are honored within 10 business days.
- Telnyx STIR/SHAKEN attestation + CNAM registration must complete before launching outbound.
- Do not connect production CRM, FSM, or payment systems until the contractor has approved routing rules.
- Retell safety branches (plumbing / electrical / tree) require sub-vertical-specific approval by a qualified human (master plumber / master electrician / certified arborist) before production deployment.
