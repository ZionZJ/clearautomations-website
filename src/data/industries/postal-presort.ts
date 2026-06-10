import type { Industry } from "./types";

export const postalPresortIndustry: Industry = {
  slug: "postal-presort",
  name: "Postal Presort & Mailing Services",
  form: {
    kind: "postal-presort",
    ctaLabel: "Inbound Audit",
  },
  landingCopy: {
    addonsEyebrow: "Add to any phase",
    addonsTitle:
      "Inbound, outbound, and growth services around the core mailing build.",
    blockedPolicyTitle: "Not used inside the production presort stack",
    faqTitle: "Before the first piece is intaked",
    footerTagline:
      "ClearAutomations - inbound and outbound automation for postal presort companies",
    proofCards: [
      {
        headline: "You own the system.",
        body:
          "Your CRM, phone numbers, lead pipeline, scripts, and workflows live in your accounts.",
      },
      {
        headline: "30-second speed-to-lead.",
        body:
          "SMS warm-up plus AI callback collapses the typical 2-minute industry response window into 30-45 seconds.",
      },
      {
        headline: "We do not touch your production stack.",
        body:
          "Window Book, BCC, Satori, Anchor FlexMail, and PostalOne stay where they are. The lead funnel is a separate layer that hands off at deal-stage = won.",
      },
    ],
  },
  metadata: {
    title: "Postal Presort Inbound & Outbound Automation | Clear Automations",
    description:
      "AI-powered inbound qualification, warm outbound, and cold pipeline automation for postal presort and mailing services companies.",
    openGraph: {
      title: "Postal Presort Automation | Clear Automations",
      description:
        "Inbound qualification, warm outbound, and compliant cold outreach automation for presort companies serving healthcare, finance, insurance, and government mailers.",
      url: "https://clearautomations.com/industries/postal-presort",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Automation for postal presort and mailing services",
    title: "Inbound dries up. Outbound takes too long.",
    mutedTitle: "We rebuild the funnel around it.",
    body:
      "Clear Automations builds AI-powered inbound qualification, warm outbound to past inquiries, and compliant cold outreach for presort companies serving healthcare, finance, insurance, government, utilities, universities, and nonprofits.",
    primaryCta: "Request an Inbound Audit",
    secondaryCta: "See the Phases",
    stats: [
      { value: "30-45s", label: "speed-to-lead callback" },
      { value: "11", label: "workflows in the build target" },
      { value: "100%", label: "presort-company-owned accounts" },
    ],
  },
  problems: {
    eyebrow: "The leak is the funnel",
    title: "Presort companies do not need more software. They need a working pipeline.",
    items: [
      {
        num: "01",
        text:
          "Inbound inquiries arrive after hours, on weekends, and when the front desk is on the line; the next mailer picks the first presort to respond.",
      },
      {
        num: "02",
        text:
          "Past inquiries and proximity leads sit in spreadsheets and inboxes; warm outbound depends on whoever has time today.",
      },
      {
        num: "03",
        text:
          "Cold outbound to mailrooms is the highest-leverage growth lever, but TCPA, B2B exemption documentation, and DNC scrubbing block most teams from running it cleanly.",
      },
    ],
    callout:
      "The first build focuses on inbound speed-to-lead. Phase 2 unlocks warm outbound. Phase 3 (cold outreach) requires attorney clearance for the B2B exemption framework before launch.",
  },
  phases: {
    eyebrow: "Three phases. One funnel rebuild.",
    title: "Start with inbound speed-to-lead.",
    mutedTitle: "Then warm outbound, then attorney-cleared cold outbound.",
    note:
      "Phase 1 launches as a production workflow on the presort company's domain. Phase 2 adds outbound dial queue. Phase 3 cold outbound launches only after attorney sign-off on B2B exemption applicability for the company's state.",
    items: [
      {
        phase: "Phase 1",
        name: "Inbound Audit & Speed-to-Lead",
        setup: "$2,500",
        monthly: "$350/mo",
        timeline: "2-3 weeks",
        result: "30-45 second response to inbound inquiries",
        status: "Available now - production workflow",
        featured: true,
        items: [
          "Inbound form with savings-calculator hook",
          "AI callback workflow with SMS warm-up (30-45s vs industry 2-minute standard)",
          "5-way post-call branching (qualified / no-answer / not-interested / email-only / DNC)",
          "Daily and weekly pipeline digests for owner visibility",
          "HubSpot pipeline with 8 stages and presort-specific custom properties",
        ],
        note:
          "The system collects business workflow data only. Volume, mail-class mix, and tooling questions are non-PHI even when the prospect's clients are healthcare mailers.",
      },
      {
        phase: "Phase 2",
        name: "Warm Outbound + Re-engagement",
        setup: "$1,500",
        monthly: "$500/mo",
        timeline: "2 weeks",
        result: "Past inquiries and proximity leads worked daily",
        status: "Ready after Phase 1 stabilization",
        items: [
          "Outbound dial queue (Tier 1: past inquiries 30+ days; Tier 2: proximity leads)",
          "60-80 daily call cap with retry scheduler",
          "14-day multi-channel ghosting re-engagement",
          "SMS warm-up before outbound calls",
          "Vapi outbound-warm script with state-specific recording disclosure",
        ],
        note:
          "Outbound to past inquiries is consent-by-prior-engagement. Proximity-lead outbound is gated on the lead source's consent posture.",
      },
      {
        phase: "Phase 3",
        name: "Cold Outbound (Attorney-Cleared)",
        setup: "$1,000",
        monthly: "$150/mo",
        timeline: "1-2 weeks after attorney clearance",
        result: "Cold pipeline running on B2B-exemption framework",
        status: "Hard-gated on attorney sign-off",
        items: [
          "Apollo lead list integration with DNCcheck.com scrub",
          "10DLC SMS registration for compliant warm-up texts",
          "Vapi cold-caller script with universal disclosure",
          "B2B-exemption documentation framework adapted to client's state",
          "Competitor intelligence as paid add-on, not core",
        ],
        note:
          "Phase 3 will not launch without written attorney sign-off on B2B exemption applicability for the presort company's state. The NexSort attorney-engagement-brief is a starting template, not a substitute.",
      },
    ],
  },
  addons: [
    {
      name: "Competitor Intelligence Sprint",
      price: "$1,500 setup + $250/mo",
      desc:
        "Weekly competitor monitor and monthly briefing on pricing and messaging changes in named competitors.",
      items: [
        "Weekly scrape of named competitors",
        "Pricing-change alerts",
        "Messaging-shift summaries",
        "Monthly briefing report",
      ],
    },
    {
      name: "Google Ads Setup",
      price: "$1,500 flat",
      desc:
        "Google Ads campaign setup and first-month management adapted from the NexSort google-ads-plan template.",
      items: [
        "Campaign structure",
        "Keyword research",
        "Ad copy + extensions",
        "First-month optimization",
      ],
    },
    {
      name: "Industry Research Deep-Dive",
      price: "$1,000 flat",
      desc:
        "One-time market intelligence pass adapted from the NexSort industry-research method.",
      items: [
        "Buyer persona map",
        "Competitive landscape",
        "Pricing benchmarks",
        "Market opportunity sizing",
      ],
    },
  ],
  complianceBadges: [
    {
      label: "TCPA-aware outreach",
      detail:
        "Production SMS and callback flows respect opt-in records, unsubscribe language, calling hours, and frequency caps.",
    },
    {
      label: "Universal recording disclosure",
      detail:
        "Vapi script opens with AI disclosure plus recording disclosure regardless of state, satisfying Illinois, California, Florida, and other two-party-consent states.",
    },
    {
      label: "STIR/SHAKEN + CNAM + reputation",
      detail:
        "Telnyx attestation, CNAM registration, and First Orion / Hiya submissions prevent spam-flag tagging on outbound calls.",
    },
    {
      label: "Production-stack independent",
      detail:
        "Designed to sit beside Window Book DAT-MAIL, BCC Mail Manager, Satori Bulk Mailer, Anchor FlexMail, and PostalOne. Never integrates into the production presort stack.",
    },
  ],
  toolsPolicy: {
    title: "Tools we use around the presort funnel",
    intro:
      "The funnel uses self-hosted n8n as the backbone and connects to the presort company's CRM, phone, email, and outreach stack after access is approved. We do not write to or read from the production presort software.",
    approved: [
      {
        name: "Self-hosted n8n",
        detail:
          "Coordinates form intake, callback queues, follow-up sequences, ghosting re-engagement, and reporting digests on the presort company's DigitalOcean instance.",
      },
      {
        name: "Vapi (cheap stack)",
        detail:
          "GPT-4o mini + Deepgram Nova-2 + ElevenLabs Turbo for ~$0.15/min all-in. Three prompt variants: inbound callback, outbound warm, outbound cold (Phase 3, attorney-gated).",
      },
      {
        name: "HubSpot Free or existing CRM",
        detail:
          "Lead-funnel CRM. 8-stage pipeline with 13 custom properties productized from the NexSort design.",
      },
      {
        name: "Telnyx + Resend + Twilio",
        detail:
          "Telnyx voice with STIR/SHAKEN attestation and CNAM. Resend for transactional email. Twilio 10DLC for SMS warm-up before outbound calls.",
      },
    ],
    blocked: [
      {
        name: "Production presort software",
        detail:
          "Window Book, BCC, Satori, Anchor, PostalOne are the presort company's domain. We do not integrate, write to, or read from the production stack.",
      },
      {
        name: "Phase 3 cold outreach without attorney clearance",
        detail:
          "Cold outbound launches only after written attorney sign-off on B2B exemption applicability for the presort company's state.",
      },
      {
        name: "Cold-call homeowners or non-business contacts",
        detail:
          "B2B-only. The SKU does not target individual consumers.",
      },
      {
        name: "Hidden lead ownership",
        detail:
          "ClearAutomations does not own the presort company's phone number, CRM, workflow exports, or lead list.",
      },
    ],
  },
  resultsModel: {
    eyebrow: "Illustrative results",
    title: "What a 10-inquiry-per-week presort company could recover",
    note:
      "This is a planning model based on NexSort's revenue analysis, not a published case study. Replace with approved client numbers after a pilot.",
    rows: [
      {
        metric: "Inbound speed-to-lead",
        today: "Voicemail or 1-2 hour callback during business hours",
        modeled: "30-45 second SMS warm-up + AI callback",
      },
      {
        metric: "Past-inquiry follow-up",
        today: "Manual; depends on staff time",
        modeled: "Daily Tier 1 + Tier 2 dial queue with 60-80 call cap",
      },
      {
        metric: "Ghosted opportunities",
        today: "Lost after one or two manual touches",
        modeled: "14-day multi-channel re-engagement before mark-stale",
      },
      {
        metric: "Cold outbound (Phase 3)",
        today: "None or ad-hoc",
        modeled: "Apollo + DNC + 10DLC SMS warm-up + AI cold script (attorney-cleared)",
      },
    ],
  },
  faq: [
    {
      q: "Does this replace our presort software?",
      a:
        "No. Window Book, BCC, Satori, Anchor, and PostalOne stay where they are. The lead funnel is a separate layer that ends at HubSpot deal-stage = won.",
    },
    {
      q: "How does the 30-45 second response time work?",
      a:
        "When a lead submits the form, the workflow fires an SMS confirmation immediately and triggers an AI callback 30-45 seconds later. The lead hears from your business before they have time to look up a competitor.",
    },
    {
      q: "Can you sign a BAA?",
      a:
        "Postal presort is a B2B service. Even when your clients send healthcare mail, your relationship with them does not require a BAA on your inbound funnel because the funnel collects business workflow data only, not patient-identifiable information.",
    },
    {
      q: "What about TCPA and cold outbound?",
      a:
        "Phase 3 cold outbound only launches after written attorney sign-off on B2B exemption applicability for your state. We provide a starting framework adapted from the NexSort attorney-engagement-brief.",
    },
    {
      q: "What does the audit form collect?",
      a:
        "Only business workflow data: company, contact, monthly piece volume, mail-class mix, current production tools, biggest pain. Never includes patient or end-recipient information.",
    },
  ],
  cta: {
    eyebrow: "Start with the inbound funnel",
    title: "Request an inbound audit.",
    body:
      "We will review your inbound speed, past-inquiry handling, ghosting recovery, outbound posture, and growth pipeline.",
    note:
      "Do not include client mail-piece content, end-recipient information, payment details, or anything from your production presort stack.",
  },
};
