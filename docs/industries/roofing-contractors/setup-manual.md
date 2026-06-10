# Setup Manual: Roofing Contractor n8n Demo

Use this manual to add the Lone Star Roof & Restoration demo pack to the main self-hosted n8n instance.

## 1. Prepare the n8n Area

If the instance supports projects:

1. Log in as an owner or admin.
2. Create a project named `DEMO - Roofing Contractors - Lone Star Roof`.
3. Add only users who should edit demo workflows.
4. Create or confirm these tags: `demo`, `roofing`, `storm-restoration`, `phase-1`, `speed-to-inspection`, `claims`, `reviews`.

If the instance does not support projects:

1. Keep the workflows in personal space.
2. Use the workflow name prefix `DEMO - Roofing Contractors -`.
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
n8n import:workflow --separate --input=/path/to/docs/industries/roofing-contractors/workflows/
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
- Any CRM, calendar, photo storage, or phone integration is connected to a demo account first.

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
- `DEMO_HUBSPOT_OR_JOBNIMBUS`
- `DEMO_CALENDAR`
- `DEMO_PHOTO_STORAGE`
- `DEMO_CLEARAUTOMATIONS_INTERNAL`

Do not attach a real contractor CRM, phone number, calendar, photo account, or homeowner list to this demo project.

## 6. Webhook Paths

Recommended demo paths:

- `demo-roofing-storm-intake`
- `demo-roofing-missed-call`
- `demo-roofing-inspection-scheduler`
- `demo-roofing-photo-docs`
- `demo-roofing-claim-follow-up`
- `demo-roofing-estimate-contract`
- `demo-roofing-review-request`
- `demo-roofing-storm-digest`
