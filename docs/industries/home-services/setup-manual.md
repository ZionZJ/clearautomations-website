# Setup Manual: Home Services n8n Demo

Use this manual to add the home-services demo pack to the main self-hosted n8n instance. The demo n8n instance is demo-only; production runs on a client-owned instance.

## 0. Compliance Gate (Before Anything Texts)

Nothing in this pack sends a production SMS until all three items clear:

1. **A2P 10DLC registration with The Campaign Registry is mandatory build step 1.** Carriers block 100% of unregistered traffic. Even one automated text requires registration.
2. **Fix the client's privacy policy first.** It must explicitly state that SMS opt-in data is not shared with third parties. A missing or vague line here is the number 1 cause of contractor 10DLC application rejection.
3. **FCC one-to-one consent.** Consent cannot be shared across brands or bought as leads. No purchased lists in any SMS flow; the workflows only text people who contacted this contractor directly.

## 1. Sub-Vertical Selection (FIRST)

Before importing workflows, select the contractor's sub-vertical:

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

The n8n workflow set is sub-vertical-agnostic. Sub-vertical-specific configuration happens at the Retell agent-config level (next steps).

## 2. Prepare the n8n Area

If the instance supports projects:

1. Log in as an owner or admin.
2. Create a project named `[ContractorName] - [SubVertical]` (e.g., `Acme Plumbing - Plumbing`).
3. Add only users who should edit production workflows.
4. Create or confirm tags: `home-services`, `phase-1`, plus sub-vertical-specific tag (e.g., `plumbing`).

## 3. Import the Workflows

CLI import option:

```bash
n8n import:workflow --separate --input=/path/to/docs/industries/home-services/workflows/
```

## 4. Retell Agent Configuration (Sub-Vertical-Specific)

For the contractor's sub-vertical, configure a dedicated Retell agent with:

- System prompt: base script from `retell-script.md` + sub-vertical parameter substitutions (per the Sub-Vertical Parameterization Table in the script)
- Sub-vertical safety branch (plumbing: active-flooding/gas-smell; electrical: sparking/smoke; tree: tree-on-house/power-lines; others: none)
- Voice platform: Retell AI (approx $0.07/min, approx 600ms latency, SOC 2, HIPAA self-service BAA). Vapi is a documented alternate for deep-custom builds.
- Calling-hours config: contractor's local business hours

## 5. Keep Workflows Inactive Until Reviewed

All templates ship with `active: false`. Keep them inactive until:

- Webhook paths confirmed.
- Demo credentials attached.
- SMS opt-in and unsubscribe language reviewed.
- Sub-vertical-specific Retell agent tested with synthetic test calls.
- Recurring-service reactivation (W05) ONLY enabled for pest control + landscape; remains disabled for other sub-verticals.

## 6. Configure Execution Settings

For every workflow:

1. Open workflow settings.
2. Set timezone to the contractor's primary state timezone.
3. Disable saving successful production executions where possible.
4. Enable failed execution logging for debugging.

## 7. Credentials

The workflow JSON files do not include real credentials. Use demo-only credentials:

- `DEMO_RESEND` (transactional email)
- `DEMO_TELNYX` (voice + SMS + STIR/SHAKEN)
- `DEMO_RETELL_{SUBVERTICAL}` (sub-vertical-specific Retell agent)
- `DEMO_HUBSPOT` (CRM)
- `DEMO_JOBBER` or `DEMO_HOUSECALLPRO` (Phase 2 FSM webhook handoff)
- `DEMO_CLEARAUTOMATIONS_INTERNAL`

## 8. Production Target Paths (Demo JSONs Use Manual Triggers Except Workflow 01)

These are production target paths. In the demo pack, only workflow 01 ships with a webhook trigger; workflows 02-06 use manual demo triggers and pinned sample data.

- `demo-home-services-form-intake`
- `demo-home-services-missed-call`
- `demo-home-services-estimate-followup`
- `demo-home-services-review-request`
- `demo-home-services-recurring-reactivation` (pest + landscape only)
- `demo-home-services-weekly-digest`

## 9. Recurring Service Reactivation Sub-Vertical Gate

W05 (Recurring Service Reactivation) is enabled ONLY for sub-verticals where it makes sense:

- Pest control: quarterly cadence
- Landscaping: monthly seasonal cadence (Mar-Nov in TX; varies by climate)

For all other sub-verticals (plumbing, electrical, garage doors, etc.), W05 should remain disabled. The dashboard surfaces a "not applicable" note rather than empty data.

## 10. License Display Configuration

For plumbing / electrical / pest control sub-verticals operating in Texas, the contractor's state license number is required on advertising. Configure the optional `licenseInfo` field in `src/data/industries/home-services.ts` with the contractor's license number; landing page footer surfaces it automatically.

For other sub-verticals (landscaping, painting, pressure washing) and other states, the field is optional and remains hidden on the landing page when blank.
