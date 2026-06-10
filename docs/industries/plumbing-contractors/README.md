# Plumbing Contractor n8n Demo Pack

This folder contains the ClearAutomations demo workflow package for the fictional Houston-area client **Bayou City Pipe & Drain**. It is designed for sales demos and workflow testing on the ClearAutomations demo n8n instance.

The demo promise is:

> Missed Call Recovery + Emergency Intake for Plumbing Companies

The demo focuses on business lead and operations data only. Do not put real customer payment details, gate codes, access instructions, private notes, or emergency details into the demo.

## Folder Map

- `demo-client-profile.md` - fictional plumbing company profile and sales-demo context.
- `setup-manual.md` - compliance gate, import order, HubSpot pipeline setup, and Retell agent configuration.
- `import-checklist.md` - import and verification checklist, including the safety-branch test.
- `client-demo-script.md` - suggested live walkthrough script that closes on the $1,000 AI Assessment.
- `retell-script.md` - voice-agent prompt, 5-tier urgency taxonomy, and call-flow guardrails.
- `workflows/` - importable workflow JSON plus per-workflow manuals.
- `demo-data/` - fake JSON payloads for manual tests.

## n8n Organization

Preferred organization:

- Project: `DEMO - Plumbing Contractors - Bayou City Pipe & Drain`
- Tags: `demo`, `plumbing`, `home-services`, `phase-1`, `speed-to-lead`, `reviews`, `retention`

Fallback organization for Community/self-hosted instances without projects:

- Keep all workflows in personal space.
- Prefix workflow names with `DEMO - Plumbing Contractors -`.
- Add the tags above so the workflows can be filtered together.

## Demo Safety Rules

- The workflows are templates, not production dispatch rules.
- AI can collect context and route work; it cannot diagnose plumbing problems, quote repair prices, or promise dispatch windows without approved business rules.
- The safety branch is non-negotiable: gas smell, sewage backup, and major flooding route to a human immediately. The AI never holds a true emergency.
- Production SMS requires A2P 10DLC sender registration with The Campaign Registry before any automated text. This is mandatory, not optional: carriers block 100% of unregistered traffic, and even one automated text requires registration.
- Production SMS also requires opt-in records, unsubscribe language, quiet hours, and frequency caps.

## What the Contractor Owns

In a production build, the contractor owns every account in the stack:

- The n8n instance. The ClearAutomations demo instance is demo-only; production workflows run on an n8n instance the client owns.
- Phone numbers and telephony accounts (Twilio or Telnyx).
- The HubSpot CRM and the customer list.
- The Retell voice agent configuration and approved scripts.
- Workflow exports and handoff documentation.

ClearAutomations builds and tunes with admin access. It does not own the accounts.

## Official n8n References

- Workflow import/export: https://docs.n8n.io/workflows/export-import/
- Projects: https://docs.n8n.io/user-management/rbac/projects/
- Tags: https://docs.n8n.io/workflows/tags/
- Workflow creation and publishing: https://docs.n8n.io/workflows/create/
- CLI import: https://docs.n8n.io/hosting/cli-commands/
