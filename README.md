# ClearAutomations Website

Public website for ClearAutomations. The business helps home-service companies recover revenue lost through missed calls, slow lead response, disconnected handoffs, and inconsistent follow-up.

The public offer ladder is:

1. Free Missed-Call Snapshot
2. $1,000 Revenue-Recovery Blueprint, credited toward implementation when implementation starts within 60 days
3. Front Desk Revenue Recovery at $5,000–$10,000 implementation plus $1,500–$3,000 monthly management
4. Advanced Workflow Expansion after the initial system proves its value

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
| `/` | Canonical offer ladder, qualification, proof policy, FAQ, Snapshot, and Blueprint forms |
| `/services` | Current revenue-recovery offer ladder |
| `/services/voice-agent-setup` | Front Desk Revenue Recovery details |
| `/services/founder-content-system` | Redirects visitors back to the current services ladder |
| `/industries` | Live industry-page index |
| `/industries/hvac-contractors` | HVAC revenue-recovery page |
| `/industries/plumbing-contractors` | Plumbing revenue-recovery page |
| `/industries/home-services` | General home-services revenue-recovery page |
| `/about` | ClearAutomations brand and founder/operator positioning |
| `/trust` | Voice, messaging, ownership, and security boundaries |
| `/proof` | Evidence policy and validation process |
| `/contact` | Public contact and business identity |
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
| `/api/leads/industry-audit` with `vertical=hvac-contractors` | `N8N_HVAC_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=plumbing-contractors` | `N8N_PLUMBING_AUDIT_WEBHOOK_URL` |
| `/api/leads/industry-audit` with `vertical=home-services` | `N8N_HOME_SERVICES_AUDIT_WEBHOOK_URL` |

Every variable in this table must exist in the hosting provider before deploy. A missing variable returns a 503 to the prospect and the lead is lost.

Do not commit webhook URLs, access keys, tokens, or client data.

## Public Business Identity

These values are centralized in `src/lib/site-config.ts`:

- Public brand: `ClearAutomations`
- Public-facing name: `ClearAutomations`
- Public mailing address: `5900 Balcones Drive STE 100, Austin, TX 78731`
- Public email: `zion@getclearautomations.com`

The underlying legal entity, `Zion John Ventures LLC d/b/a ClearAutomations`, is disclosed on the Privacy and Terms pages rather than in the general site footer or Contact page.

Use `zion@clearautomations.com` as the eventual primary public address only after it is migrated, authenticated, and actively monitored.

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

Current public industries:

- HVAC Contractors
- Plumbing Contractors
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
