# ClearAutomations Website

Public website for ClearAutomations. ClearAutomations builds the AI employee that runs a small business front desk: missed-call recovery, AI call answering, follow-up workflows, CRM setup, and client-owned automation systems.

## Local Commands

```bash
npm run dev
npm run lint
npx tsc --noEmit --incremental false
npm run build
```

## Public Routes

| Route | Purpose |
| --- | --- |
| `/` | Main offer, phases, stack audit, proof, FAQ, free audit CTA |
| `/services` | Service index for public productized offers |
| `/services/voice-agent-setup` | AI Front-Desk Employee Setup + Retainer details |
| `/services/founder-content-system` | Founder Content System details |
| `/industries` | Industry playbook index |
| `/industries/therapists` | Therapist-practice automation page |
| `/industries/hvac-contractors` | HVAC contractor automation page |
| `/industries/plumbing-contractors` | Plumbing contractor automation page |
| `/industries/roofing-contractors` | Roofing contractor automation page |
| `/industries/dental-practices` | Dental-practice automation page |
| `/industries/postal-presort` | Postal presort and mailing services page |
| `/industries/legal-intake` | Legal intake automation page |
| `/industries/home-services` | General home-services automation page |
| `/about` | ClearAutomations brand and founder/operator positioning |
| `/trust` | AI voice, SMS/email, healthcare, ownership, and security boundaries |
| `/proof` | Modeled proof examples until client results are approved |
| `/contact` | Public contact and business identity placeholders |
| `/privacy` | Public privacy notice |
| `/terms` | Public terms outline placeholder |
| `/robots.txt` | Search crawler policy |
| `/sitemap.xml` | Search sitemap |

## Lead API Routes

Client forms post to branded Next routes. These routes validate payload size, reject missing required fields, ignore honeypot spam, and forward approved submissions to n8n through environment variables.

| Route | Environment variable |
| --- | --- |
| `/api/leads/free-audit` | `N8N_FREE_AUDIT_WEBHOOK_URL` |
| `/api/leads/stack-audit` | `N8N_STACK_AUDIT_WEBHOOK_URL` |
| `/api/leads/checklist` | `N8N_CHECKLIST_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=therapists` | `N8N_THERAPISTS_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=hvac-contractors` | `N8N_HVAC_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=plumbing-contractors` | `N8N_PLUMBING_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=roofing-contractors` | `N8N_ROOFING_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=dental-practices` | `N8N_DENTAL_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=postal-presort` | `N8N_POSTAL_PRESORT_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=legal-intake` | `N8N_LEGAL_INTAKE_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=home-services` | `N8N_HOME_SERVICES_AUDIT_WEBHOOK_URL` |

Every variable in this table must exist in the hosting provider before deploy. A missing variable returns a 503 to the prospect and the lead is lost.

Do not commit webhook URLs, access keys, tokens, or client data.

## Business Placeholders To Finalize

These are intentionally centralized in `src/lib/site-config.ts`:

- Legal entity: `[TODO_LEGAL_ENTITY]`
- Mailing address: `[TODO_MAILING_ADDRESS]`
- Phone: `[TODO_PHONE]`

Replace these before relying on the public terms/privacy/contact pages as final submission or sales assets.

## Trust And Compliance Rules

- Public forms collect business workflow information only.
- Do not collect PHI, payment card details, access codes, insurance IDs, legal matter details, passwords, or clinical notes through public forms.
- SMS/email outreach requires client-approved consent, opt-out language, sender identity, and frequency rules.
- AI voice workflows require approved disclosure, escalation, recording, and stop/handoff behavior.
- Healthcare and dental production workflows require the approved BAA/vendor/access/retention path before PHI is involved.
- Real client proof requires written permission before publishing names, metrics, screenshots, quotes, or workflow details.

## Demo Library

Internal demo packs live in `docs/industries/`.

Pre-client setup and demo readiness checklist: `docs/pre-client-setup-todo.md`.

Active demos:

- Therapist Practice
- HVAC Contractors
- Plumbing Contractors
- Roofing Contractors
- Dental Practices
- Home Services

Demo data is fake by design. Do not connect demo workflows to production client accounts without a signed client-specific scope and readiness review.

## Deployment Notes

The site is a Next.js app. Keep production environment variables in the hosting provider, not in the repository.

Before deploying:

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
rg "X{3}|X{10}" .
rg "n8n[.]zionjohn[.]com" .
rg "Next[.]js project bootstrapped|Vercel[ ]Platform" .
```

Then confirm every `N8N_*_WEBHOOK_URL` from the Lead API Routes table exists in the hosting provider's environment variables.

If the repo is inspected from the Codex sandbox and Git reports dubious ownership, use a command-scoped safe-directory flag for read-only status checks instead of changing global Git config:

```bash
git -C C:/Users/ZionZ/clearautomations-website -c safe.directory=C:/Users/ZionZ/clearautomations-website status --short --branch
```
