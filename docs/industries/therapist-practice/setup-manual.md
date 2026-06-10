# Setup Manual: Therapist Practice n8n Demo

Use this manual to add the Cedar Park Counseling Collective demo pack to the main self-hosted n8n instance.

## 1. Prepare the n8n Area

If the instance supports projects:

1. Log in as an owner or admin.
2. Create a project named `DEMO - Therapist Practice - Cedar Park Counseling`.
3. Add only users who should edit demo workflows.
4. Create or confirm these tags: `demo`, `therapist`, `phase-1`, `non-phi`, `phase-2-simulated`, `phase-3-simulated`.

If the instance does not support projects:

1. Keep the workflows in personal space.
2. Use the workflow name prefix `DEMO - Therapist Practice -`.
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
n8n import:workflow --separate --input=/path/to/docs/industries/therapist-practice/workflows/
```

If importing into a project by CLI, use the instance-specific project ID:

```bash
n8n import:workflow --separate --input=/path/to/workflows/ --projectId=<PROJECT_ID>
```

## 3. Keep Workflows Inactive Until Reviewed

All templates are shipped with `active: false`. Keep them inactive until:

- The webhook paths are confirmed.
- The data boundary is reviewed.
- Any credentials are replaced with demo-safe credentials.
- Execution data settings are reviewed.

For Phase 2/3 simulated workflows, keep them inactive unless you are running a live sales demo with fake data only.

## 4. Configure Execution Settings

For every workflow:

1. Open workflow settings.
2. Set timezone to `America/Chicago`.
3. For demo workflows with any lead data, disable saving successful production executions where possible.
4. Enable failed execution logging only as needed for debugging.
5. Redact production and manual execution data when the instance/version supports it.
6. Add an error workflow later if this pack becomes a production client template.

## 5. Credentials

The workflow JSON files do not include real credentials.

Use demo-only credentials if you connect external systems:

- `DEMO_GMAIL_OR_RESEND`
- `DEMO_TWILIO`
- `DEMO_GOOGLE_SHEETS`
- `DEMO_CLEARAUTOMATIONS_INTERNAL`

Do not attach production therapist credentials or real EHR credentials to this demo project.

## 6. Webhook Paths

The website therapist audit form is planned for:

```text
Set `N8N_THERAPISTS_AUDIT_WEBHOOK_URL` to the approved n8n webhook URL for the therapist-practice audit flow.
```

The importable demo workflow uses a separate demo path:

```text
/webhook/demo-therapist-practice-audit
```

Use the production path only for the actual website lead workflow. Keep demo paths separate so test payloads do not mix with live leads.

## 7. Recommended Demo Order

1. `01 - Practice Audit Intake - Non-PHI`
2. `02 - Speed-to-Lead Callback Queue - Non-PHI`
3. `03 - Consult Reminder Sequence - Non-PHI`
4. `04 - Directory Health Check`
5. `07 - Demo Dashboard Digest`
6. `05 - Intake Handoff Simulation - Disabled`
7. `06 - Session-to-Claim Reconciliation Simulation - Disabled`

Use the first four to sell the immediate Phase 1 offer. Use the last two only to explain where the roadmap goes after BAA, insurance, subprocessors, hosting, and internal risk analysis are complete.
