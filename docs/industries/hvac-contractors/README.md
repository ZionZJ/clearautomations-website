# HVAC Contractor n8n Demo Pack

This folder contains the ClearAutomations demo workflow package for the fictional Texas client **Lone Star Comfort Co.** It is designed for sales demos and workflow testing on the self-hosted ClearAutomations n8n instance.

The demo promise is:

> Missed Call Recovery + Emergency Service Booking for HVAC Companies

The demo focuses on business lead and operations data only. Do not put real customer payment details, gate codes, access instructions, private notes, or emergency details into the demo.

## Folder Map

- `demo-client-profile.md` - fictional HVAC company profile and sales-demo context.
- `setup-manual.md` - how to add the demo to self-hosted n8n using a project or tags.
- `import-checklist.md` - import and verification checklist.
- `client-demo-script.md` - suggested live walkthrough script.
- `retell-script.md` - voice-agent prompt and call-flow guardrails. Retell AI is the production voice layer (approx $0.07/min, approx 600ms latency, SOC 2, HIPAA self-service BAA); Vapi is a documented alternate for deep-custom builds.
- `workflows/` - importable workflow JSON plus per-workflow manuals.
- `demo-data/` - fake JSON payloads for manual tests.

## n8n Organization

Preferred organization:

- Project: `DEMO - HVAC Contractors - Lone Star Comfort`
- Tags: `demo`, `hvac`, `home-services`, `phase-1`, `speed-to-lead`, `reviews`, `retention`

Fallback organization for Community/self-hosted instances without projects:

- Keep all workflows in personal space.
- Prefix workflow names with `DEMO - HVAC Contractors -`.
- Add the tags above so the workflows can be filtered together.

## Demo Safety Rules

- The workflows are templates, not production dispatch rules.
- AI can collect context and route work; it cannot diagnose equipment, quote repair prices, or promise availability without approved business rules.
- Production SMS requires completed A2P 10DLC registration with The Campaign Registry before the first automated text. Carriers block 100% of unregistered traffic, and even one automated text requires registration.
- Production SMS also requires opt-in, unsubscribe language, quiet hours, and frequency caps. STOP and informal opt-outs (any reasonable method) are honored within 10 business days.
- The contractor should own the CRM, phone numbers, workflow exports, the n8n instance, and the customer list.

## Official n8n References

- Workflow import/export: https://docs.n8n.io/workflows/export-import/
- Projects: https://docs.n8n.io/user-management/rbac/projects/
- Tags: https://docs.n8n.io/workflows/tags/
- Workflow creation and publishing: https://docs.n8n.io/workflows/create/
- CLI import: https://docs.n8n.io/hosting/cli-commands/
