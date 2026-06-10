# Legal Intake n8n Demo Pack

This folder contains the Clear Automations build pack for legal intake firms. The fictional demo client is **Lone Star Personal Injury Group** (Texas solo PI attorney).

The build promise:

> Conflict-cleared intake, case-type routing, document collection, engagement-letter follow-up, and statute-of-limitations tracking for plaintiff-side and small-firm legal practices.

The pack focuses on the lead funnel and pre-engagement workflow only. **It never collects fact pattern before the conflict-check gate clears, and it never gives legal advice.**

## Folder Map

- `demo-client-profile.md` - fictional firm profile and sales-demo context
- `setup-manual.md` - how to add the demo to self-hosted n8n
- `import-checklist.md` - import and verification checklist
- `client-demo-script.md` - suggested live walkthrough script
- `vapi-script.md` - voice-agent prompt with conflict-gate architecture and crisis branch
- `workflows/` - importable workflow JSON plus per-workflow manuals. Phase 1 workflows are built (W01, W02, W07, W08). Phase 2 + 3 are documented in `.md` manuals; JSON build target.
- `demo-data/` - fake JSON payloads for manual tests (Phase 1 set is built)

## n8n Organization

Preferred organization:

- Project: `DEMO - Legal Intake - Lone Star PI Group`
- Tags: `demo`, `legal-intake`, `phase-1`, `conflict-gate`, `upl-strict`, `aba-compliant`

## Demo Safety Rules — ETHICS BRIGHT LINES

These are not optional. They are the architectural moat.

- **Conflict-check gate before fact-gathering** (ABA Rule 1.18). The Vapi script collects only minimum information (caller name, state, case-type bucket, opposing-party names) before the workflow calls the firm's CMS conflict-check API.
- **No legal advice from AI** (ABA Rule 5.5). The script does not discuss case merits, statute of limitations applicability, jurisdiction fit, damages estimates, or strategy.
- **Attorney sign-off on the script is non-negotiable** for any production deployment. Document the sign-off in the firm's vendor file.
- **No outbound to prospective clients** (ABA Rule 7.3 + state advertising rules). The SKU is inbound-only.
- **Confidentiality preserved** (ABA Rule 1.6). Prospective-client data is encrypted at rest, restricted to firm staff only after handoff, and retained per the firm's records-retention policy.
- **State advertising disclaimers** required on the landing page footer (firm name, primary attorney, bar admission state, "Attorney Advertising" text where applicable).

## Compliance References

- ABA Model Rules of Professional Conduct: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/
- ABA Formal Opinion 512 (2024) on Generative AI: https://www.americanbar.org/news/abanews/aba-news-archives/2024/07/aba-issues-first-ethics-guidance-ai-tools/
- Re-Regulating UPL in the Age of AI (ABA Law Practice 2025): https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/march-april-2025/re-regulating-upl-in-the-age-of-ai/

## Productization Lineage

This pack is greenfield. There is no NexSort-equivalent vault substrate; the productization deep dive at `Second Brain/02-DayJob/Zion Work/AI-Venture/reference/industry-stack-review/legal-intake.md` is the source of truth. Read that doc before extending this pack.
