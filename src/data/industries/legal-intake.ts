import type { Industry } from "./types";

export const legalIntakeIndustry: Industry = {
  slug: "legal-intake",
  name: "Legal Intake Firms",
  form: {
    kind: "legal-intake",
    ctaLabel: "Intake Audit",
  },
  landingCopy: {
    addonsEyebrow: "Add to any phase",
    addonsTitle: "Ethics-aware services around the conflict-cleared intake build.",
    blockedPolicyTitle: "Not used inside the firm's case management",
    faqTitle: "Before the first prospective client is screened",
    footerTagline:
      "ClearAutomations - conflict-cleared intake automation for plaintiff-side and small-firm legal practices",
    proofCards: [
      {
        headline: "Conflict check before fact-gathering.",
        body:
          "The Vapi script collects only minimum information for a conflict check before the firm's case management system clears the prospect. ABA Rule 1.18 architecture, not a marketing chatbot.",
      },
      {
        headline: "UPL bright line, enforced.",
        body:
          "AI does not discuss case merits, statute of limitations, jurisdiction, damages, or strategy. Attorney sign-off on the script is non-negotiable for production.",
      },
      {
        headline: "You own the system.",
        body:
          "Your CMS, phone numbers, lead pipeline, scripts, and workflows live in your accounts. Clio, MyCase, PracticePanther, Filevine — coexist, never replace.",
      },
    ],
  },
  metadata: {
    title: "Legal Intake Automation | Clear Automations",
    description:
      "Conflict-cleared intake, case-type routing, and lifecycle communications for plaintiff-side and small-firm legal practices. ABA + UPL aware.",
    openGraph: {
      title: "Legal Intake Automation | Clear Automations",
      description:
        "Speed-to-lead with conflict-check gating, ABA Model Rule compliance, and Clio / MyCase / PracticePanther / Filevine coexistence for legal intake.",
      url: "https://clearautomations.com/industries/legal-intake",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Compliance-first automation for legal intake",
    title: "Speed-to-lead is a conflict-check problem.",
    mutedTitle: "We build the gate, not just the funnel.",
    body:
      "Clear Automations builds conflict-cleared inbound intake, case-type routing, document collection, engagement-letter follow-up, and statute-of-limitations tracking for plaintiff-side and small-firm legal practices.",
    primaryCta: "Request an Intake Audit",
    secondaryCta: "See the Phases",
    stats: [
      { value: "4hr", label: "conflict-cleared callback target" },
      { value: "ABA 1.18", label: "prospective-client architecture" },
      { value: "100%", label: "firm-owned accounts" },
    ],
  },
  problems: {
    eyebrow: "The leak is intake architecture",
    title: "Most AI intake tools collect too much, too fast — and create exposure.",
    items: [
      {
        num: "01",
        text:
          "After-hours inquiries arrive 24/7 in personal injury, family, immigration, and criminal practices; the firm that calls back first wins, and voicemail loses.",
      },
      {
        num: "02",
        text:
          "Generic AI intake bots collect fact pattern before running a conflict check — under ABA Rule 1.18, that creates exposure if the firm has to decline the matter due to a conflict.",
      },
      {
        num: "03",
        text:
          "Statute of limitations slip-through, engagement-letter ghosting, and case-status communication gaps are real revenue and ethics risks that manual intake can't catch.",
      },
    ],
    callout:
      "The first build focuses on conflict-cleared intake — the architectural feature that separates this SKU from generic AI chatbots. Phase 2 adds case-type routing and document collection. Phase 3 adds lifecycle communications.",
  },
  phases: {
    eyebrow: "Three phases. One ethics-aware funnel.",
    title: "Start with conflict-cleared intake.",
    mutedTitle: "Then case-type routing, then lifecycle communications.",
    note:
      "Every phase requires attorney sign-off on the Vapi script before production deployment. The conflict-check gate is the architectural moat.",
    items: [
      {
        phase: "Phase 1",
        name: "Conflict-Cleared Intake",
        setup: "$4,500",
        monthly: "$450/mo",
        timeline: "3-5 weeks",
        result: "After-hours inquiries cleared and routed inside 4 business hours",
        status: "Available now - attorney sign-off required",
        featured: true,
        items: [
          "Inbound landing page with state-specific Attorney Advertising disclaimer",
          "UPL-strict Vapi script with conflict-gate architecture (minimum-info collection only)",
          "Conflict-check API integration with one CMS platform (Clio default; MyCase / PracticePanther / Filevine as alternates)",
          "Missed-call callback queue with case-type prioritization",
          "Post-engagement review request with manager-route on negative",
          "Weekly firm digest with conflict-clearance rate and SLA pulse",
        ],
        note:
          "AI does not provide legal advice. Per ABA Model Rules 1.18 + 5.5, the script collects only minimum information for a conflict check. Attorney sign-off on the script is non-negotiable.",
      },
      {
        phase: "Phase 2",
        name: "Case-Type Routing + Document Collection",
        setup: "$7,500",
        monthly: "$750/mo",
        timeline: "3 weeks",
        result: "Conflict-cleared leads routed by practice area + state licensure",
        status: "Ready after Phase 1 stabilization",
        items: [
          "Practice-area routing (PI / family / immigration / criminal / estate / employment)",
          "Jurisdictional fit + state licensure routing",
          "Case-type-specific document checklist (PI: police report, medical records, photos; immigration: passport, visa history)",
          "Secure-portal link delivery (firm CMS portal)",
          "Conversion-by-practice-area dashboard",
        ],
        note:
          "Documents are collected via the firm's CMS portal, not the public form. Document content stays inside the firm's secured environment.",
      },
      {
        phase: "Phase 3",
        name: "Lifecycle Communications",
        setup: "$9,500",
        monthly: "$1,250/mo",
        timeline: "3 weeks",
        result: "Engagement letters signed faster, SOL tracked, reviews collected",
        status: "Ready after Phase 2 stabilization",
        items: [
          "Engagement letter follow-up (3-touch D3 / D7 / D14)",
          "Statute of limitations tracker (90 / 60 / 30 / 14 day warnings)",
          "DocuSign or Adobe Sign integration",
          "Monthly firm report with conversion-by-practice-area + SOL pulse + review pulse",
          "Crisis-protocol customization for DV-adjacent inquiries",
        ],
        note:
          "Phase 3 is internal lifecycle work. No outbound to prospective clients (ABA Rule 7.3 + state advertising rules).",
      },
    ],
  },
  addons: [
    {
      name: "Ethics Compliance Sprint",
      price: "$2,500 flat",
      desc:
        "UPL audit + state-specific advertising review + Vapi script attorney sign-off documentation.",
      items: [
        "UPL audit report",
        "State advertising rule review",
        "Attorney sign-off documentation",
        "Production-deployment checklist",
      ],
    },
    {
      name: "Multi-Jurisdiction Routing",
      price: "$1,500 flat",
      desc:
        "Custom routing for firms operating in 3+ states with different bar rules.",
      items: [
        "State-by-state intake matrix",
        "Bar-rule-specific opener variants",
        "Multi-state SOL tracking",
        "Compliance documentation",
      ],
    },
    {
      name: "PI-Specific Workflow Pack",
      price: "$3,000 flat",
      desc:
        "Lien tracking, medical-records request automation, and settlement-disbursement reminders for personal injury practices.",
      items: [
        "Lien-tracking workflow",
        "Medical-records request automation",
        "Settlement-disbursement reminders",
        "Lien-resolution dashboard",
      ],
    },
  ],
  complianceBadges: [
    {
      label: "ABA Model Rule 1.18 architecture",
      detail:
        "The Vapi script collects only minimum information (caller name, state, case-type bucket, opposing-party names) before the conflict-check gate clears further fact-gathering.",
    },
    {
      label: "ABA Model Rule 5.5 (UPL) bright line",
      detail:
        "AI does not discuss case merits, statute of limitations applicability, jurisdiction fit, damages estimates, or legal strategy. Attorney sign-off on the script is non-negotiable for production.",
    },
    {
      label: "ABA Formal Opinion 512 (2024) compliant",
      detail:
        "Attorney supervision of AI output, confidentiality obligations under Rule 1.6, and competence in selecting AI tools — built into the SKU's onboarding checklist.",
    },
    {
      label: "No outbound to prospective clients",
      detail:
        "Per ABA Rule 7.3 + state advertising rules (TX, FL, CA particularly strict), the SKU is inbound-only. Recall, marketing outbound, and cold-call workflows are explicitly out of scope.",
    },
  ],
  toolsPolicy: {
    title: "Tools we use around the legal intake funnel",
    intro:
      "The funnel uses self-hosted n8n as the backbone and connects to the firm's case management system for the conflict-check gate. We do not write to or read from privileged matter data inside the CMS.",
    approved: [
      {
        name: "Self-hosted n8n",
        detail:
          "Coordinates form intake, callback queues, conflict-check API calls, document-collection reminders, engagement-letter follow-up, and reporting digests on the firm's DigitalOcean instance.",
      },
      {
        name: "Vapi (cheap stack)",
        detail:
          "GPT-4o mini + Deepgram Nova-2 + ElevenLabs Turbo for ~$0.15/min all-in. UPL-strict script with conflict-gate branch and crisis branch.",
      },
      {
        name: "HubSpot Free or Sales Starter",
        detail:
          "Lead-funnel CRM (pre-conflict-clearance). Stores minimum-info-collected fields only — no fact pattern, no privileged information.",
      },
      {
        name: "Firm CMS API (Clio / MyCase / PracticePanther / Filevine)",
        detail:
          "Conflict-check gate via the firm's existing CMS API. Default integration is Clio; alternates available at +$1,500 setup.",
      },
    ],
    blocked: [
      {
        name: "Outbound to prospective clients",
        detail:
          "Per ABA Rule 7.3 + state advertising rules. The SKU is inbound-only. Recall, cold-outbound, and lead-purchasing workflows are out of scope.",
      },
      {
        name: "AI legal advice or case-merit discussion",
        detail:
          "The Vapi script does not discuss case merits, SOL applicability, jurisdiction fit, damages estimates, or legal strategy. UPL bright line.",
      },
      {
        name: "Fact-pattern collection before conflict clearance",
        detail:
          "Per ABA Rule 1.18, collecting fact pattern from a prospective client before the conflict check creates exposure if the firm has to decline. Architectural enforcement, not a soft guideline.",
      },
      {
        name: "Hidden lead ownership",
        detail:
          "ClearAutomations does not own the firm's phone number, CMS, workflow exports, or prospective-client list.",
      },
    ],
  },
  resultsModel: {
    eyebrow: "Illustrative results",
    title: "What a small PI firm could recover",
    note:
      "This is a planning model, not a published case study. Replace with approved client numbers after a pilot.",
    rows: [
      {
        metric: "After-hours inquiries",
        today: "Voicemail or answering service; 30-40% lost to faster-responding firms",
        modeled: "Conflict-cleared callback inside 4 business hours",
      },
      {
        metric: "Tire-kicker triage",
        today: "Paralegal time burned on jurisdictional / SOL / conflict declines",
        modeled: "Vapi script collects minimum-info; conflict gate filters automatically",
      },
      {
        metric: "Engagement-letter signing",
        today: "1 manual reminder, then ghosted",
        modeled: "3-touch sequence (D3 / D7 / D14) with DocuSign integration",
      },
      {
        metric: "Statute of limitations exposure",
        today: "Calendar reminders depending on attorney memory",
        modeled: "Weekly tracker with 90 / 60 / 30 / 14 day warnings",
      },
    ],
  },
  faq: [
    {
      q: "Will AI give legal advice on my behalf?",
      a:
        "No. The Vapi script collects only minimum information for a conflict check (caller name, state, case-type bucket, opposing-party names). It does not discuss case merits, SOL, jurisdiction, damages, or strategy. Per ABA Model Rule 5.5 and Formal Opinion 512.",
    },
    {
      q: "How does the conflict-check gate work?",
      a:
        "After collecting minimum information, the workflow calls your CMS's conflict-check API (Clio / MyCase / PracticePanther / Filevine). If clear, the prospect is routed to your intake coordinator for full intake. If conflict, the AI politely declines and ends the call.",
    },
    {
      q: "Can you sign a BAA?",
      a:
        "Legal intake is not a HIPAA vertical. We provide an attorney-vendor agreement covering Rule 5.3 supervision, Rule 1.6 confidentiality, and data-handling boundaries. Available on request.",
    },
    {
      q: "Does this support my CMS?",
      a:
        "Phase 1 includes one CMS integration (Clio default). MyCase, PracticePanther, and Filevine are available at +$1,500 setup. If you don't have a CMS, the workflow falls back to a manual conflict-check gate (n8n pauses and emails the intake coordinator).",
    },
    {
      q: "What does the audit form collect?",
      a:
        "Only firm/business workflow information: firm name, contact, practice areas, attorney count, monthly inquiry volume, CMS in use, biggest pain. No prospective-client information.",
    },
  ],
  cta: {
    eyebrow: "Start with conflict-cleared intake",
    title: "Request an intake audit.",
    body:
      "We will review your inbound intake speed, conflict-check workflow, tire-kicker burden, and lifecycle-communication gaps.",
    note:
      "Do not include prospective-client information, fact patterns, opposing-party names, or anything privileged. The form is for your firm's workflow data only.",
  },
};
