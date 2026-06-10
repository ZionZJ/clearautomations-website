# Dental Practice n8n Demo Pack

This folder contains the Clear Automations demo workflow package for the fictional Texas client **Cedar Bend Dental Studio**. It is designed for sales demos and workflow testing on the self-hosted ClearAutomations n8n instance.

The demo promise is:

> Missed Calls + No-Shows + Treatment Plan Recovery for Texas Dental Practices

The demo has two lanes:

- **Phase 1 non-PHI workflows:** safe to test with practice/business lead data only.
- **Phase 2/3 fake-data simulations:** patient-like examples using fake data only.

No file in this pack should contain real patient information, clinical details, diagnosis details, treatment details, insurance IDs, appointment reasons, x-rays, payment card data, or payer-specific patient data.

## Folder Map

- `demo-client-profile.md` - fictional practice profile and sales-demo context.
- `setup-manual.md` - how to add the demo to self-hosted n8n using a project or tags.
- `import-checklist.md` - import and verification checklist.
- `client-demo-script.md` - suggested live walkthrough script.
- `vapi-script.md` - voice-agent prompt and call-flow guardrails.
- `workflows/` - importable workflow JSON plus per-workflow manuals.
- `demo-data/` - fake JSON payloads for manual tests.

## n8n Organization

Preferred organization:

- Project: `DEMO - Dental Practices - Cedar Bend Dental`
- Tags: `demo`, `dental`, `phase-1`, `non-phi`, `recall-demo`, `treatment-plan-demo`

Fallback organization for Community/self-hosted instances without projects:

- Keep all workflows in personal space.
- Prefix workflow names with `DEMO - Dental Practices -`.
- Add the tags above so the workflows can be filtered together.

## Demo Safety Rules

- The workflows are templates, not production patient workflows.
- Public forms collect practice and business data only.
- Fake patient-like data can be used in demos, but real patient workflows require BAA, vendor, access, retention, and approved-copy review.
- AI can route, remind, classify, and summarize workflow data; it cannot diagnose, recommend treatment, interpret x-rays, or make insurance/payment promises.

## Official n8n References

- Workflow import/export: https://docs.n8n.io/workflows/export-import/
- Projects: https://docs.n8n.io/user-management/rbac/projects/
- Tags: https://docs.n8n.io/workflows/tags/
- Workflow creation and publishing: https://docs.n8n.io/workflows/create/
- CLI import: https://docs.n8n.io/hosting/cli-commands/
