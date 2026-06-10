# Setup Manual: HVAC Contractor n8n Demo

Use this manual to add the Lone Star Comfort Co. demo pack to the main self-hosted n8n instance. The shared demo instance is demo-only; production runs on a client-owned n8n instance.

## Compliance Gate (Before Anything Texts)

Complete every item below before any SMS node goes live. These are build requirements, not optional polish.

1. **A2P 10DLC registration is mandatory step 1, not optional.** Register the client's brand and campaign with The Campaign Registry before the first automated text. Carriers block 100% of unregistered traffic, and even one automated text requires registration.
2. **Fix the client's privacy policy before registration.** It must explicitly state that SMS opt-in data is not shared with third parties. A missing or vague statement is the number 1 cause of contractor 10DLC application rejections.
3. **FCC one-to-one consent.** Consent cannot be shared across brands or bought as leads. No purchased or shared lead lists enter any SMS flow. The system only texts people who contacted this contractor directly.

## 1. Prepare the n8n Area

If the instance supports projects:

1. Log in as an owner or admin.
2. Create a project named `DEMO - HVAC Contractors - Lone Star Comfort`.
3. Add only users who should edit demo workflows.
4. Create or confirm these tags: `demo`, `hvac`, `home-services`, `phase-1`, `speed-to-lead`, `reviews`, `retention`.

If the instance does not support projects:

1. Keep the workflows in personal space.
2. Use the workflow name prefix `DEMO - HVAC Contractors -`.
3. Add the tags listed above to every workflow so they filter as one demo group.

## 2. Import the Workflows

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
n8n import:workflow --separate --input=/path/to/docs/industries/hvac-contractors/workflows/
```

If importing into a project by CLI, use the instance-specific project ID:

```bash
n8n import:workflow --separate --input=/path/to/workflows/ --projectId=<PROJECT_ID>
```

## 3. Keep Workflows Inactive Until Reviewed

All templates are shipped with `active: false`. Keep them inactive until:

- The webhook paths are confirmed.
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

## 5. Credentials

The workflow JSON files do not include real credentials.

Use demo-only credentials if connecting external systems:

- `DEMO_RESEND_OR_GMAIL`
- `DEMO_TWILIO_OR_TELNYX`
- `DEMO_HUBSPOT`
- `DEMO_RETELL_VOICE`
- `DEMO_CLEARAUTOMATIONS_INTERNAL`

Do not attach a real contractor CRM, phone number, dispatch account, or customer list to this demo project.

## 6. Webhook Paths

Production target paths (demo JSONs use manual triggers except workflow 01):

- `demo-hvac-emergency-intake`
- `demo-hvac-missed-call`
- `demo-hvac-estimate-follow-up`
- `demo-hvac-review-request`
- `demo-hvac-maintenance-reactivation`
- `demo-hvac-owner-digest`

Use the final production paths only after client approval.
