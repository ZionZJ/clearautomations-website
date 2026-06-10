# Import Checklist

Use this checklist after importing the plumbing contractor demo workflows.

## Before Import

- Confirm you are in the demo n8n area or project.
- Confirm workflow JSON files are coming from `docs/industries/plumbing-contractors/workflows/`.
- Confirm no JSON file contains real credentials.
- Confirm no JSON file contains real customer data.

## After Import

- Workflow names start with `DEMO - Plumbing Contractors -`.
- Every workflow is inactive after import.
- Tags are added:
  - `demo`
  - `plumbing`
  - `home-services`
  - `phase-1`
  - workflow-specific tags such as `speed-to-lead`, `reviews`, or `retention`
- Timezone is set to `America/Chicago`.
- Successful production execution saving is disabled where available.
- Webhook URLs are copied into the manual only after confirming the final path.

## Functional Tests

### Workflow 01 - Emergency Service Intake

- Run with each record in `demo-data/emergency-service-requests.json`.
- Safety branch: the gas-smell and sewage-backup records return `tier: safety-emergency`, `safetyEmergency: true`, and route to the immediate-human branch. They never land in the AI-managed queue.
- The gas-smell record also returns `gasInvolved: true` with the leave-the-area / gas-utility / 911 escalation note.
- The burst-pipe record returns `tier: emergency` with an immediate human callback action.
- The repipe record returns `tier: quote` and the drain-cleaning record returns `tier: routine`.

### Voice agent (paired with workflow 01)

- AI self-identifies at call open: place a test call to the Retell demo agent and confirm the first two sentences disclose that the caller is speaking with an AI.
- Safety branch routes gas, sewage, and flooding to a human immediately: say "I smell gas" on a test call and confirm the agent gives the leave-the-area and gas-utility / 911 language, then transfers. Repeat with "sewage is backing up" and "water is flooding the kitchen".
- Confirm the agent refuses to quote prices, diagnose, or promise a dispatch window when pushed.

### Workflow 02 - Missed Call Callback Queue

- Run with `demo-data/missed-call-leads.json` pinned.
- After-hours calls (17:00 to 23:59 timestamps) and weekend calls score above weekday business-hours calls.
- The Saturday 2am burst-pipe voicemail sorts to the top of the queue.

### Workflow 03 - Estimate Follow-Up

- Run with `demo-data/open-estimates.json` pinned.
- Estimates at $5,000 or more return `financeReminderEligible: true`.
- Quote-age cadence resolves to `wait`, `follow-up-now`, or `manager-review` correctly.
- A record with a `lostReason` value resolves to `closed-lost` and the reason is one of: price, timing, competitor, no-response, scope.

### Workflow 04 - Post-Job Review Request

- Run with `demo-data/completed-jobs-for-review.json` pinned.
- Records with `reviewOptOut: true` return `excluded-review-opt-out` and get no message.
- The unhappy-customer record routes to `manager-follow-up-first`, never a public review ask.
- The warranty-callback record is excluded by job type.

### Workflow 05 - Past-Customer Reactivation

- Run with `demo-data/past-customers.json` pinned.
- Records missing `optInSource` are skipped, and the summary row reports the skipped count.
- Water heaters at 8 plus years segment to `water-heater-replacement-watch`; drain customers at 12 plus months segment to `drain-service-due`.

### Workflow 06 - Weekly Owner Digest

- Run with `demo-data/dashboard-metrics.json` pinned.
- The digest text includes booked-job rate, safety escalations, and opt-outs honored.

### Opt-out handling (production gate, verify before any SMS goes live)

- A STOP reply suppresses the contact in every workflow that sends messages.
- An informal opt-out (email, voicemail, or a "stop texting me" note from the field) is logged and honored within 10 business days.
- Suppressed contacts do not reappear in workflows 02, 03, 04, or 05.

## Publishing Rules

- Demo workflows can be published only against demo accounts.
- No production SMS before A2P 10DLC registration with The Campaign Registry is approved. This is mandatory; carriers block 100 percent of unregistered traffic.
- The client privacy policy must state that SMS opt-in data is not shared with third parties before registration is submitted.
- Production SMS requires opt-in records, unsubscribe language, quiet hours, and frequency caps.
- Do not connect production dispatch, payment, or customer-list systems until the client has approved routing rules and the Dispatch Handoff Map.
