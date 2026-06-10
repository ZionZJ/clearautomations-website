import type { Industry } from "./types";

export const roofingContractorsIndustry: Industry = {
  slug: "roofing-contractors",
  name: "Roofing Contractors",
  form: {
    kind: "roofing-contractor",
    ctaLabel: "Roofing Audit",
  },
  landingCopy: {
    addonsEyebrow: "Add to any phase",
    addonsTitle: "Storm-response services around the core roofing build.",
    blockedPolicyTitle: "Not used for claims or pricing decisions",
    faqTitle: "Before the first storm lead is routed",
    footerTagline:
      "ClearAutomations - storm restoration automation for Texas roofers",
    proofCards: [
      {
        headline: "You own the storm system.",
        body:
          "Your CRM, phone number, inspection calendar, workflows, templates, and homeowner list stay in your accounts.",
      },
      {
        headline: "Inspection speed comes first.",
        body:
          "The workflow prioritizes storm calls, routes qualified leads, and keeps photo/document collection from becoming chaos.",
      },
      {
        headline: "Built against the storm-chaser problem.",
        body:
          "The demo leans into local credibility, documentation, follow-up, and transparent handoff instead of pressure tactics.",
      },
    ],
  },
  metadata: {
    title: "Roofing Contractor Automation | Clear Automations",
    description:
      "Storm lead capture, inspection booking, insurance follow-up, and review automation for Texas roofing contractors.",
    openGraph: {
      title: "Roofing Contractor Automation | Clear Automations",
      description:
        "Automation systems that help Texas roofers capture storm leads, book inspections faster, and keep insurance follow-up moving.",
      url: "https://clearautomations.com/industries/roofing-contractors",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Texas-first automation for roofing and storm restoration",
    title: "Storm leads go cold fast.",
    mutedTitle: "We help you capture them before storm chasers do.",
    body:
      "Clear Automations builds storm lead capture, inspection booking, photo/document collection, insurance follow-up, and review workflows for Texas roofers who need speed without losing control of the customer relationship.",
    primaryCta: "Request a Roofing Workflow Audit",
    secondaryCta: "See the Storm Workflow",
    stats: [
      { value: "2 min", label: "target storm callback task" },
      { value: "8", label: "demo workflows ready" },
      { value: "100%", label: "contractor-owned accounts" },
    ],
  },
  problems: {
    eyebrow: "The leak is storm response",
    title: "Roofers do not lose storm jobs because nobody needs a roof.",
    items: [
      {
        num: "01",
        text:
          "Hail and wind leads arrive in waves, and homeowners often talk to the first local roofer who responds clearly.",
      },
      {
        num: "02",
        text:
          "Inspection scheduling, photos, claim numbers, adjuster appointments, estimates, and contracts get scattered across calls, texts, and inboxes.",
      },
      {
        num: "03",
        text:
          "Storm follow-up gets messy fast, which lets out-of-area storm chasers look more organized than the local contractor.",
      },
    ],
    callout:
      "The first build focuses on speed-to-inspection, documentation, and follow-up visibility. It does not diagnose roof damage, promise insurance approval, quote pricing, or replace contractor judgment.",
  },
  phases: {
    eyebrow: "Three phases. One storm pipeline.",
    title: "Start with storm lead capture.",
    mutedTitle: "Then tighten claims, estimates, and reviews.",
    note:
      "Phase 1 can launch as a demo-safe workflow using business lead data. Production launch requires real phone, CRM, calendar, photo storage, and messaging rules to be reviewed first.",
    items: [
      {
        phase: "Phase 1",
        name: "Storm Lead Capture",
        setup: "$3,500",
        monthly: "$450/mo",
        timeline: "2-3 weeks",
        result: "Faster callbacks and more booked inspections",
        status: "Available now - demo workflow ready",
        featured: true,
        items: [
          "Storm damage intake form with hail, wind, leak, and urgency scoring",
          "Missed-call callback queue for storm surges and after-hours calls",
          "Inspection scheduler handoff for qualified leads",
          "CRM pipeline for new lead, inspection booked, claim active, estimate sent, contract signed, and lost",
          "Owner digest for leads, inspections, stalled claims, and workflow failures",
        ],
        note:
          "The system routes and organizes leads. It should not promise claim outcomes, adjuster decisions, or repair pricing.",
      },
      {
        phase: "Phase 2",
        name: "Claim and Document Follow-Up",
        setup: "$2,500",
        monthly: "$650/mo",
        timeline: "2 weeks",
        result: "Fewer stalled claim and documentation steps",
        status: "Ready after CRM and claim-process review",
        items: [
          "Photo and document collection checklist",
          "Insurance claim status follow-up",
          "Adjuster appointment reminder workflow",
          "Missing-document task queue",
          "Claim-stage owner dashboard",
        ],
        note:
          "This phase tracks documents and follow-up. It does not provide legal advice or interpret coverage.",
      },
      {
        phase: "Phase 3",
        name: "Estimate, Contract, and Review Recovery",
        setup: "$2,000",
        monthly: "$500/mo",
        timeline: "1-2 weeks",
        result: "More open estimates moved to signed work",
        status: "Add after lead and claim flows are stable",
        items: [
          "Estimate follow-up sequence",
          "Unsigned contract reminder workflow",
          "Manager review queue for delayed decisions",
          "Post-job review request workflow",
          "Monthly storm-pipeline report",
        ],
        note:
          "Review and SMS workflows require opt-in, unsubscribe language, and realistic frequency caps before production use.",
      },
    ],
  },
  addons: [
    {
      name: "Storm Response Playbook",
      price: "$750 flat",
      desc:
        "Document exactly how leads, inspections, claims, and estimate follow-up should move after a storm.",
      items: [
        "Storm lead stages",
        "Inspection rules",
        "Escalation paths",
        "Approved handoff copy",
      ],
    },
    {
      name: "Photo and Claim Checklist",
      price: "$1,000 flat",
      desc:
        "Create a homeowner-friendly checklist for safe photo collection and claim-status organization.",
      items: [
        "Photo checklist",
        "Claim info fields",
        "Safe language review",
        "CRM field map",
      ],
    },
    {
      name: "Review Recovery Sprint",
      price: "$1,000 flat",
      desc:
        "Turn completed roofing jobs into a consistent review request system with manager filtering.",
      items: [
        "Review-link setup",
        "Email and SMS copy",
        "Eligibility filter",
        "Weekly review report",
      ],
    },
  ],
  complianceBadges: [
    {
      label: "No claim-outcome promises",
      detail:
        "The automation tracks claim stages and follow-up; it does not promise insurance approval or coverage.",
    },
    {
      label: "No roof diagnosis by AI",
      detail:
        "AI can collect context and route leads; inspection and damage assessment stay with qualified humans.",
    },
    {
      label: "Homeowner privacy boundary",
      detail:
        "Do not collect payment cards, access codes, private notes, or full claim documents through public demo forms.",
    },
    {
      label: "Contractor-owned pipeline",
      detail:
        "Designed to sit beside HubSpot, JobNimbus, Jobber, AccuLynx, Roofr, CompanyCam, or a simple spreadsheet pipeline.",
    },
  ],
  toolsPolicy: {
    title: "Tools we use around the storm restoration workflow",
    intro:
      "The demo uses n8n as the automation backbone and can connect to the contractor-owned CRM, phone, calendar, photo storage, and messaging stack after access is approved.",
    approved: [
      {
        name: "Self-hosted n8n",
        detail:
          "Coordinates storm intake, callback queues, inspection scheduling, document reminders, review requests, and owner digests.",
      },
      {
        name: "Retell AI (or approved voice agent)",
        detail:
          "Handles scripted lead capture and callback support without diagnosing roof damage or promising claim outcomes.",
      },
      {
        name: "HubSpot or roofing CRM",
        detail:
          "Stores lead status, damage type, inspection stage, claim status, estimate stage, and follow-up tasks in the contractor's account.",
      },
      {
        name: "Twilio, Telnyx, Resend, or Gmail",
        detail:
          "Used for production messaging only after sender identity, opt-in, and unsubscribe rules are configured.",
      },
    ],
    blocked: [
      {
        name: "AI claim advice",
        detail:
          "The demo does not tell homeowners what insurance will cover or how an adjuster will rule.",
      },
      {
        name: "AI roof diagnosis",
        detail:
          "The demo does not diagnose hail, wind, leak, decking, flashing, or structural damage.",
      },
      {
        name: "Unregistered bulk SMS",
        detail:
          "Production SMS campaigns need proper registration, opt-in records, and unsubscribe handling.",
      },
      {
        name: "Hidden lead ownership",
        detail:
          "Clear Automations should not own the roofer's phone number, CRM, workflow exports, or homeowner list.",
      },
    ],
  },
  resultsModel: {
    eyebrow: "Illustrative results",
    title: "What a storm week could make visible",
    note:
      "This is a planning model, not a case study. Replace it with approved client numbers after a pilot.",
    rows: [
      {
        metric: "Storm calls",
        today: "Voicemail, owner cell, or scattered texts",
        modeled: "Prioritized callback queue with inspection next action",
      },
      {
        metric: "Inspection booking",
        today: "Manual calendar coordination",
        modeled: "Qualified leads routed to inspection slots or dispatcher tasks",
      },
      {
        metric: "Claim follow-up",
        today: "Status spread across inbox, phone, and memory",
        modeled: "Claim stage and missing-document task list",
      },
      {
        metric: "Owner visibility",
        today: "End-of-week guessing",
        modeled: "Weekly digest of leads, inspections, claims, estimates, and failures",
      },
    ],
  },
  faq: [
    {
      q: "Will this replace my sales reps or office manager?",
      a:
        "No. The system captures, prioritizes, and organizes storm leads so your team can respond faster and with better context.",
    },
    {
      q: "Can it handle storm surges after hail?",
      a:
        "Yes, as an intake and routing layer. It can classify leads, flag urgency, start photo/document collection, and create inspection tasks.",
    },
    {
      q: "Does this work with JobNimbus, AccuLynx, Roofr, or CompanyCam?",
      a:
        "The first build can run beside those systems. Direct integrations depend on the platform, account access, and API/export options.",
    },
    {
      q: "Can it help with insurance follow-up?",
      a:
        "It can track claim status, remind homeowners about missing information, and surface stalled steps. It does not promise coverage or give legal advice.",
    },
    {
      q: "What does the audit form collect?",
      a:
        "Only business workflow information: company, contact, service area, tools, lead volume, storm lead source, and the biggest revenue leak.",
    },
  ],
  cta: {
    eyebrow: "Start with the storm lead lane",
    title: "Request a roofing workflow audit.",
    body:
      "We will review your storm lead intake, missed-call handling, inspection booking, photo/document collection, claim follow-up, estimates, reviews, and owner visibility.",
    note:
      "Do not include payment details, private homeowner notes, claim documents, access codes, or anything that should remain inside your CRM or job files.",
  },
};
