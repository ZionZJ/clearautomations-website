# ClearAutomations Site Operations

Use this note when updating, deploying, or auditing the public ClearAutomations website.

## Source Of Truth

- Website code: `C:\Users\ZionZ\clearautomations-website`
- Business notes: `C:\Users\ZionZ\Second Brain\02-DayJob\Zion Work\AI-Venture`
- Client-facing docs: `02-DayJob/Zion Work/AI-Venture/reference/client-facing-docs`
- Demo packs: `docs/industries`
- Pre-client setup checklist: `docs/pre-client-setup-todo.md`

## Release Checklist

- [ ] Public contact details are correct or clearly marked as placeholders.
- [ ] Privacy, terms, trust, contact, about, proof, services, industries, and homepage routes build.
- [ ] Lead forms post to `/api/leads/...`, not directly to n8n URLs.
- [ ] Hosting env vars contain the approved n8n webhook URLs.
- [ ] Public forms warn users not to submit sensitive data.
- [ ] Vertical pages still match their compliance boundaries.
- [ ] Real proof claims are not published without written client permission.
- [ ] `npm run lint` passes.
- [ ] `npx tsc --noEmit --incremental false` passes.
- [ ] `npm run build` passes.
- [ ] `docs/pre-client-setup-todo.md` ready-to-sell gate is complete before pitching a live client.

## Hosting Secrets

Store these in the hosting provider, not in the repo:

- `N8N_FREE_AUDIT_WEBHOOK_URL`
- `N8N_STACK_AUDIT_WEBHOOK_URL`
- `N8N_CHECKLIST_WEBHOOK_URL`
- `N8N_THERAPISTS_AUDIT_WEBHOOK_URL`
- `N8N_HVAC_AUDIT_WEBHOOK_URL`
- `N8N_PLUMBING_AUDIT_WEBHOOK_URL`
- `N8N_ROOFING_AUDIT_WEBHOOK_URL`
- `N8N_DENTAL_AUDIT_WEBHOOK_URL`
- `N8N_POSTAL_PRESORT_AUDIT_WEBHOOK_URL`
- `N8N_LEGAL_INTAKE_AUDIT_WEBHOOK_URL`
- `N8N_HOME_SERVICES_AUDIT_WEBHOOK_URL`

A missing variable returns a 503 to the prospect and the lead is lost. Verify all of them against `src/app/api/leads/` before each deploy.
