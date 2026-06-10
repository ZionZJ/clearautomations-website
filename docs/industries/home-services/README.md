# Home Services (Catch-All Trades) n8n Demo Pack

This folder contains the ClearAutomations build pack for general home-services trades that don't fit the HVAC or roofing SKUs. The fictional demo client (default) is **Lone Star Drain & Pipe Co.** (Texas plumber), but the pack is designed to swap demo client per sub-vertical for sales demos.

The build promise:

> Lead-funnel automation for plumbing, electrical, landscape, pest control, garage doors, fence/deck, tree service, junk removal, painting, and pressure washing. 10 sub-verticals supported.

The pack is intentionally lean: 6 workflows + 1 sub-vertical-parameterized Retell script. The lean design is the productization win.

## Folder Map

- `demo-client-profile.md` - fictional plumbing demo client (default). Swap to electrician / landscaper / pest control / etc. per sales demo.
- `setup-manual.md` - how to add the demo to self-hosted n8n
- `import-checklist.md` - import and verification checklist
- `client-demo-script.md` - suggested live walkthrough script
- `retell-script.md` - parameterized voice-agent prompt with 10 sub-vertical variants (Retell AI is the default voice platform; Vapi is a documented alternate for deep-custom builds)
- `workflows/` - importable workflow JSON plus per-workflow manuals. All six workflows (W01-W06) ship with importable JSON. Phase gating (W03 = Phase 2, W05 = Phase 3) applies to production rollout, not import.
- `demo-data/` - fake JSON payloads for manual tests (full set for W01-W06)

## What's NOT in this pack

The home-services SKU is intentionally lean. These are excluded; they live in dedicated SKUs:

- HVAC heat-event lane → see `hvac-contractors/`
- HVAC replacement-quote system-age trigger → see `hvac-contractors/`
- Roofing storm-damage intake + insurance-claim follow-up + post-storm member recall → see `roofing-contractors/`
- Roofing photo-document collection (CompanyCam integration) → see `roofing-contractors/`

If a prospect is HVAC or roofing, route them to the dedicated SKU. Don't sell home-services to a contractor who fits HVAC or roofing; they get the better-fit dedicated SKU.

## n8n Organization

Preferred organization:

- Project: `DEMO - Home Services - Lone Star Drain & Pipe`
- Tags: `demo`, `home-services`, `phase-1`, `speed-to-lead`, `sub-vertical-aware`, plus sub-vertical-specific tag (e.g., `plumbing` for the default demo)

## Sub-Vertical Parameterization

The 6 workflows are sub-vertical-agnostic. Sub-vertical specificity lives at the Retell agent-config level: 10 different agents share the same n8n workflow set, with system-prompt differences only.

Sub-verticals supported:

1. Plumbing (with active-flooding / gas-smell safety branch)
2. Electrical (with sparking / smoke / burning-smell safety branch)
3. Landscaping (no safety branch; recurring service eligible)
4. Pest control (no safety branch; recurring service eligible)
5. Garage doors (no safety branch)
6. Fence / deck (no safety branch)
7. Tree service (with tree-on-house / power-lines safety branch)
8. Junk removal (no safety branch)
9. Painting (no safety branch)
10. Pressure washing (no safety branch)

Niche sub-verticals (solar, water-treatment, septic, well-drilling, etc.) get the Sub-Vertical Script Customization add-on at $500 flat.

## Demo Safety Rules

- The workflows are templates, not production dispatch rules.
- AI does not diagnose plumbing issues, electrical hazards, tree damage, or pest infestations. Sub-vertical safety branches route emergencies to 911 / utility / professional response.
- Production SMS requires opt-in, unsubscribe language, A2P 10DLC sender registration (mandatory before any automated text), quiet hours, and frequency caps.
- The contractor should own the n8n instance, CRM, phone numbers, workflow exports, and customer list. The demo n8n instance is demo-only; production runs on a client-owned instance.

## Productization Lineage

This pack is greenfield but inherits 80%+ of its substrate from the HVAC pack (`hvac-contractors/`). The home-services SKU is HVAC's pack with HVAC-specific workflows removed and a sub-vertical-parameterized Retell script added. The productization deep dive behind this pack covered sub-vertical selection, add-on pricing, and the lean 6-workflow scope; its conclusions are encoded in this README and the per-workflow manuals.
