# Postal Presort & Mailing Services n8n Demo Pack

This folder contains the Clear Automations build pack for postal presort companies. The fictional demo client is **Lone Star Mail Services** (Texas presort vendor). The lead-funnel client behind the SKU's first paying engagement is NexSort (Schaumburg IL).

The build promise:

> Inbound speed-to-lead, warm outbound to past inquiries, attorney-cleared cold outbound for postal presort and mailing services companies.

The pack focuses on the lead funnel and pipeline data only. **It never integrates with the production presort stack** (Window Book DAT-MAIL, BCC Mail Manager, Satori Bulk Mailer, Anchor FlexMail, PostalOne!).

## Folder Map

- `demo-client-profile.md` - fictional presort company profile and sales-demo context
- `setup-manual.md` - how to add the demo to self-hosted n8n
- `import-checklist.md` - import and verification checklist
- `client-demo-script.md` - suggested live walkthrough script
- `vapi-script.md` - voice-agent prompts (3 variants: inbound, outbound-warm, outbound-cold)
- `workflows/` - importable workflow JSON plus per-workflow manuals. Phase 1 workflows are built (W01, W02, W03, W05, W06, W07). Phase 2 + 3 are documented in `.md` manuals; JSON build target.
- `demo-data/` - fake JSON payloads for manual tests (Phase 1 set is built)

## n8n Organization

Preferred organization:

- Project: `DEMO - Postal Presort - Lone Star Mail Services`
- Tags: `demo`, `postal-presort`, `mailing-services`, `phase-1`, `speed-to-lead`, `warm-outbound`, `cold-outbound`, `reporting`

Fallback organization for Community/self-hosted instances without projects:

- Keep all workflows in personal space.
- Prefix workflow names with `DEMO - Postal Presort -`.
- Add the tags above so the workflows can be filtered together.

## Demo Safety Rules

- The workflows are templates, not production mailing rules.
- AI collects business workflow data and routes leads; it does not interpret USPS workshare tier eligibility, promise mailing-date delivery, or interpret postage rate changes.
- Production SMS requires opt-in, unsubscribe language, sender registration where applicable, quiet hours (9 AM-4:30 PM CT for outbound), and frequency caps.
- **Phase 3 cold outbound launches only after written attorney sign-off** on B2B exemption applicability for the presort company's state. The attorney-engagement-brief in the NexSort vault assets is a starting framework, not a substitute.
- The presort company should own the CRM, phone numbers, workflow exports, lead list, and customer data.

## Productization Lineage

This pack is productized from the NexSort vault assets. See:

- `Second Brain/02-DayJob/Zion Work/AI-Venture/clients/nexsort/` for the original engineering documents (HubSpot pipeline design, attorney-engagement-brief, number-reputation-guide, compliance-package, workflow-review).
- `Second Brain/02-DayJob/Zion Work/AI-Venture/reference/industry-stack-review/postal-presort.md` for the productization deep dive and v2 workflow set spec.

## Official References

- n8n workflow import/export: https://docs.n8n.io/workflows/export-import/
- USPS workshare overview: https://postalpro.usps.com/
- Telnyx STIR/SHAKEN: https://telnyx.com/resources/stir-shaken
