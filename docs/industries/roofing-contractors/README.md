# Roofing Contractor n8n Demo Pack

This folder contains the Clear Automations demo workflow package for the fictional Texas client **Lone Star Roof & Restoration**. It is designed for sales demos and workflow testing on the self-hosted ClearAutomations n8n instance.

The demo promise is:

> Storm Lead Capture + Inspection Booking + Insurance Follow-Up for Texas Roofers

The demo focuses on business lead and operations data only. Do not put real homeowner records, payment details, private notes, claim documents, access codes, or insurance files into the demo.

## Folder Map

- `demo-client-profile.md` - fictional roofing company profile and sales-demo context.
- `setup-manual.md` - how to add the demo to self-hosted n8n using a project or tags.
- `import-checklist.md` - import and verification checklist.
- `client-demo-script.md` - suggested live walkthrough script.
- `vapi-script.md` - voice-agent prompt and call-flow guardrails.
- `workflows/` - importable workflow JSON plus per-workflow manuals.
- `demo-data/` - fake JSON payloads for manual tests.

## n8n Organization

Preferred organization:

- Project: `DEMO - Roofing Contractors - Lone Star Roof`
- Tags: `demo`, `roofing`, `storm-restoration`, `phase-1`, `speed-to-inspection`, `claims`, `reviews`

Fallback organization for Community/self-hosted instances without projects:

- Keep all workflows in personal space.
- Prefix workflow names with `DEMO - Roofing Contractors -`.
- Add the tags above so the workflows can be filtered together.

## Demo Safety Rules

- The workflows are templates, not production claim or dispatch rules.
- AI can collect context and route work; it cannot diagnose roof damage, quote pricing, or promise insurance approval.
- Production SMS requires opt-in, unsubscribe language, sender registration where applicable, quiet hours, and frequency caps.
- The contractor should own the CRM, phone numbers, workflow exports, and homeowner list.

## Official n8n References

- Workflow import/export: https://docs.n8n.io/workflows/export-import/
- Projects: https://docs.n8n.io/user-management/rbac/projects/
- Tags: https://docs.n8n.io/workflows/tags/
- Workflow creation and publishing: https://docs.n8n.io/workflows/create/
- CLI import: https://docs.n8n.io/hosting/cli-commands/
