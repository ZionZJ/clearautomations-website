# Setup Manual: Postal Presort n8n Demo

Use this manual to add the Lone Star Mail Services demo pack to the main self-hosted n8n instance.

## 1. Prepare the n8n Area

If the instance supports projects:

1. Log in as an owner or admin.
2. Create a project named `DEMO - Postal Presort - Lone Star Mail Services`.
3. Add only users who should edit demo workflows.
4. Create or confirm these tags: `demo`, `postal-presort`, `mailing-services`, `phase-1`, `speed-to-lead`, `warm-outbound`, `cold-outbound`, `reporting`.

If the instance does not support projects:

1. Keep the workflows in personal space.
2. Use the workflow name prefix `DEMO - Postal Presort -`.
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
n8n import:workflow --separate --input=/path/to/docs/industries/postal-presort/workflows/
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
- Phase 3 cold outbound has the attorney-clearance sign-off on file.

## 4. Configure Execution Settings

For every workflow:

1. Open workflow settings.
2. Set timezone to the presort company's timezone (e.g., `America/Chicago` for NexSort, `America/Chicago` for Lone Star).
3. Disable saving successful production executions where possible.
4. Enable failed execution logging only as needed for debugging.
5. Add an error workflow before production use.

## 5. Credentials

The workflow JSON files do not include real credentials.

Use demo-only credentials if connecting external systems:

- `DEMO_RESEND` (transactional email)
- `DEMO_TWILIO` (10DLC SMS)
- `DEMO_TELNYX` (voice + STIR/SHAKEN)
- `DEMO_VAPI` (voice agent)
- `DEMO_HUBSPOT` (CRM)
- `DEMO_DNCCHECK` (DNC scrub - Phase 3 only)
- `DEMO_APOLLO` (lead enrichment - Phase 3 only)
- `DEMO_CLEARAUTOMATIONS_INTERNAL`

Do not attach a real customer phone number, real CRM credentials, or real outbound dial list to this demo project.

## 6. Webhook Paths

Recommended demo paths:

- `demo-postal-presort-form-intake`
- `demo-postal-presort-missed-call`
- `demo-postal-presort-post-call`
- `demo-postal-presort-followup`
- `demo-postal-presort-ghosting-reengage`
- `demo-postal-presort-review-campaign`
- `demo-postal-presort-weekly-digest`
- `demo-postal-presort-daily-digest`
- `demo-postal-presort-outbound-queue`
- `demo-postal-presort-retry-scheduler`
- `demo-postal-presort-cold-orchestrator`

Use the final production paths only after presort-company approval and (Phase 3) attorney sign-off.

## 7. Phase Gating

This pack ships with strict phase gating:

- **Phase 1 workflows** (W01-W07) can run on production webhooks after presort-company sign-off.
- **Phase 2 workflows** (W08-W09) require Phase 1 stabilization (2+ weeks live) before launch.
- **Phase 3 workflows** (W10) require **written attorney sign-off on B2B exemption applicability** for the presort company's state. Do not enable W10 without this on file. The NexSort `attorney-engagement-brief.md` is a starting framework, not a substitute.
