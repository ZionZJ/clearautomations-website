# Setup Manual: Plumbing Contractor n8n Demo

Use this manual to add the Bayou City Pipe & Drain demo pack to the ClearAutomations demo n8n instance. Production builds run on a client-owned n8n instance, never the demo instance.

## Compliance gate (before anything texts)

These steps come first on every production build. Nothing sends an SMS until all three are done.

1. **A2P 10DLC registration with The Campaign Registry. Mandatory build step 1.** Carriers block 100 percent of unregistered 10DLC traffic, and even one automated text from the workflow requires registration. There is no low-volume exception.
2. **Privacy-policy fix.** The client's privacy policy must explicitly state that SMS opt-in data is not shared with third parties. A missing or vague line here is the number 1 cause of contractor 10DLC application rejections. Fix the policy before submitting the registration.
3. **FCC one-to-one consent.** Consent cannot be shared across brands or bought as leads. The workflows only message people who contacted this contractor directly. No purchased lists enter the SMS flow, ever.

Ongoing obligations once live:

- Honor opt-outs sent via STOP or any reasonable method (email, voicemail, "stop texting me" to a tech) within 10 business days.
- Respect quiet hours and frequency caps on every outbound sequence.

The demo workflows ship without any SMS nodes connected, so the demo itself sends nothing.

## 1. Prepare the n8n Area

If the instance supports projects:

1. Log in as an owner or admin.
2. Create a project named `DEMO - Plumbing Contractors - Bayou City Pipe & Drain`.
3. Add only users who should edit demo workflows.
4. Create or confirm these tags: `demo`, `plumbing`, `home-services`, `phase-1`, `speed-to-lead`, `reviews`, `retention`.

If the instance does not support projects:

1. Keep the workflows in personal space.
2. Use the workflow name prefix `DEMO - Plumbing Contractors -`.
3. Add the tags listed above to every workflow so they filter as one demo group.

## 2. Import the Workflows (in order)

Import in numbered order, 01 through 06, so the demo narrative builds correctly:

1. `01-emergency-service-intake.json`
2. `02-missed-call-callback-queue.json`
3. `03-estimate-follow-up.json`
4. `04-post-job-review-request.json`
5. `05-past-customer-reactivation.json`
6. `06-weekly-owner-digest.json`

Recommended UI import:

1. Open n8n.
2. Select the demo project if available.
3. Create a new workflow.
4. Open the workflow menu.
5. Choose **Import from File**.
6. Import each JSON file from `workflows/`.
7. Save the imported workflow.
8. Add the tags listed in the workflow manual.

CLI import option:

```bash
n8n import:workflow --separate --input=/path/to/docs/industries/plumbing-contractors/workflows/
```

If importing into a project by CLI, use the instance-specific project ID:

```bash
n8n import:workflow --separate --input=/path/to/workflows/ --projectId=<PROJECT_ID>
```

## 3. Keep Workflows Inactive Until Reviewed

All templates ship with `active: false`. Keep them inactive until:

- The webhook path for workflow 01 is confirmed.
- Demo credentials are attached.
- SMS opt-in and unsubscribe language is reviewed.
- Any CRM or dispatch integration is connected to a demo account first.

## 4. Configure Execution Settings

For every workflow:

1. Open workflow settings.
2. Set timezone to `America/Chicago`.
3. Disable saving successful production executions where possible.
4. Enable failed execution logging only as needed for debugging.
5. Add an error workflow before production use.

## 5. HubSpot Pipeline Setup

Create one deal pipeline in the demo HubSpot account matching `demo-data/hubspot-pipeline.json`:

- Pipeline name: `Plumbing Revenue Recovery`
- Stages, in order: `New Lead`, `Scheduled`, `Quoted`, `Won`, `Lost`
- Custom properties: `service_type`, `urgency_tier`, `safety_emergency`, `service_area`, `estimate_value`, `last_follow_up_at`, `lost_reason`, `opt_in_source`

Every lead from workflow 01 lands in `New Lead` with `urgency_tier` and `service_type` set. Safety emergencies also set `safety_emergency` to true so the owner can audit escalations. Stage 2 workflows read from `Quoted`; `lost_reason` accepts only `price`, `timing`, `competitor`, `no-response`, or `scope`.

## 6. Retell Agent Configuration

The voice layer is Retell AI (about $0.07 per minute, around 600ms latency, SOC 2, HIPAA self-service BAA). Vapi is a documented alternate for deep-custom builds.

1. Create the demo agent in the Retell dashboard using the prompt and call flow in `retell-script.md`.
2. Store the API key in n8n as credential `DEMO_RETELL_PLUMBING`. Never paste keys into workflow JSON.
3. Configure the agent's post-call webhook to POST the structured lead payload to workflow 01's webhook path (below).
4. Confirm the agent opens every call with the AI self-identification lines from the script. This is mandatory: AI voices are artificial voices under TCPA.
5. Confirm the safety branch transfers gas, sewage, and flooding calls to the on-call human number, with the gas safety language intact.
6. Set the agent to inbound and callback use only. Outbound AI calling requires prior express consent on file.

## 7. Credentials

The workflow JSON files do not include real credentials.

Use demo-only credentials if connecting external systems:

- `DEMO_RETELL_PLUMBING`
- `DEMO_HUBSPOT`
- `DEMO_TWILIO_OR_TELNYX`
- `DEMO_RESEND_OR_GMAIL`
- `DEMO_CLEARAUTOMATIONS_INTERNAL`

Do not attach a real contractor CRM, phone number, dispatch account, or customer list to this demo project.

## 8. Webhook Paths

Production target paths (demo JSONs use manual triggers except workflow 01):

- `demo-plumbing-emergency-intake` (live in the workflow 01 demo JSON)
- `demo-plumbing-missed-call`
- `demo-plumbing-estimate-follow-up`
- `demo-plumbing-review-request`
- `demo-plumbing-reactivation`
- `demo-plumbing-owner-digest`

Use the final production paths only after client approval.
