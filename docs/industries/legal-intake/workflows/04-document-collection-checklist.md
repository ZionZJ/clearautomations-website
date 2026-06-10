# 04 - Document Collection Checklist (Phase 2)

## Purpose

Sends a case-type-specific document checklist to the prospective client via the firm's CMS portal. PI: police report, medical records, photos. Immigration: passport, visa history. Etc.

## Tags

`demo`, `legal-intake`, `phase-2`, `document-collection`

## Inputs

Use `../demo-data/case-type-document-templates.json`.

## n8n Steps

1. Import `04-document-collection-checklist.json`.
2. Configure case-type document templates per practice area.
3. Configure CMS portal link (Clio's built-in portal default; MyCase / PracticePanther alternates).
4. Pin the sample lead payload.
5. Execute manually.
6. Confirm checklist email + portal link fire to the right contact.

## Demo Notes

Documents are NEVER collected via the public form or shared inbox. Always via the firm's CMS portal (encrypted, privileged-data-aware, retained per firm policy). This is a confidentiality (Rule 1.6) compliance feature.
