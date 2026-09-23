import type { Industry } from "./types";

export const homeServicesIndustry: Industry = {
  slug: "home-services",
  name: "General Home Services",
  form: {
    kind: "home-services",
    ctaLabel: "Free Missed-Call Snapshot",
  },
  landingCopy: {
    addonsEyebrow: "Possible build components",
    addonsTitle: "Components selected from the verified workflow, not sold as separate products.",
    blockedPolicyTitle: "Not used inside your FSM",
    faqTitle: "Before the first lead is routed",
    footerTagline:
      "ClearAutomations - managed front-desk revenue recovery for home-service companies",
    proofCards: [
      {
        headline: "Service-aware intake.",
        body:
          "Questions, safety boundaries, urgency rules, and handoffs are approved for the services the company actually provides.",
      },
      {
        headline: "Existing-system coexistence.",
        body:
          "The Blueprint reviews native capabilities first, then defines where any additional workflow should hand off to the current operating system.",
      },
      {
        headline: "Measured on purpose.",
        body:
          "The implementation starts with the verified leak, names the owner of every exception, and reports against the client-approved baseline.",
      },
    ],
  },
  metadata: {
    title: "Home Services Lead-Funnel Automation | Clear Automations",
    description:
      "Managed missed-call, lead-response, estimate-follow-up, and booking workflows for plumbing, electrical, landscape, pest control, and other home-service companies.",
    openGraph: {
      title: "Home Services Automation | Clear Automations",
      description:
        "Managed missed-call recovery, lead response, estimate follow-up, and booking workflows for home-service companies.",
      url: "https://www.clearautomations.com/industries/home-services",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Front-desk revenue recovery for home services",
    title: "Recover missed calls and stalled estimates.",
    mutedTitle: "Measure what comes back.",
    body:
      "ClearAutomations maps and manages missed-call, lead-response, estimate-follow-up, booking, and handoff workflows for home-service companies whose process does not fit the dedicated HVAC or plumbing path.",
    primaryCta: "Request a Free Missed-Call Snapshot",
    secondaryCta: "See the Sub-Verticals",
    stats: [
      { value: "Native", label: "existing systems reviewed first" },
      { value: "Human", label: "approved handoffs and exceptions" },
      { value: "Measured", label: "reporting against real data" },
    ],
  },
  problems: {
    eyebrow: "The leak is the same. The trade is different.",
    title: "Every trade leaks leads in the same three places.",
    items: [
      {
        num: "01",
        text:
          "After-hours and lunch-hour calls hit voicemail; the next contractor on Google wins the booking.",
      },
      {
        num: "02",
        text:
          "Estimates can get one manual follow-up, then disappear into texts and inboxes. The Blueprint measures the actual open-estimate gap before recommending automation.",
      },
      {
        num: "03",
        text:
          "Reviews depend on whoever remembers to ask, and recurring services (pest, landscape) don't get systematic reactivation.",
      },
    ],
    callout:
      "The first build focuses on lead capture and estimate follow-up. Sub-vertical-specific scripting handles plumbing emergencies, electrical hazards, tree-on-house safety branches, and recurring-service economics for pest and landscape.",
  },
  phases: {
    eyebrow: "One offer ladder",
    title: "Observe the gap. Validate it with real data.",
    mutedTitle: "Build only what the home-service operation can support and measure.",
    note:
      "Every engagement follows the same ladder. Implementation scope and price come from call volume, locations, integrations, and workflows rather than a feature menu.",
    items: [
      {
        phase: "Start here",
        name: "Free Missed-Call Snapshot",
        setup: "Free",
        monthly: "-",
        timeline: "1 business day",
        result: "See observable call and booking gaps before sharing internal data",
        status: "Public information only",
        items: [
          "Published hours and after-hours path",
          "Visible call and booking options",
          "Observable gaps separated from assumptions",
          "Real data needed to validate the opportunity",
        ],
        note:
          "Focused only on observable front-desk revenue leakage, with no invented revenue-loss claim.",
      },
      {
        phase: "Validate with real data",
        name: "Revenue-Recovery Blueprint",
        setup: "$1,000",
        monthly: "-",
        timeline: "5 business days",
        result: "Know what is leaking, what can be recovered, and what to build",
        status: "45-minute discovery and actual-data analysis",
        featured: true,
        items: [
          "Call, lead, booking, and estimate baseline",
          "Current-state workflow map",
          "ROI range with assumptions shown",
          "Prioritized implementation and measurement plan",
        ],
        note:
          "The full $1,000 credits toward implementation within 60 days.",
      },
      {
        phase: "Principal engagement",
        name: "Front Desk Revenue Recovery",
        setup: "$5,000-$10,000",
        monthly: "$1,500-$3,000",
        timeline: "Scoped in Blueprint",
        result: "A managed workflow tied to the verified operating baseline",
        status: "Priced from volume, locations, integrations, and workflows",
        items: [
          "Missed-call and overflow handling",
          "New-lead and open-estimate follow-up",
          "Approved human handoffs and exception tasks",
          "Reliability and performance reporting",
        ],
        note:
          "No production message or call path launches without approved consent, disclosure, safety, escalation, and stop rules.",
      },
      {
        phase: "Expansion after proof",
        name: "Advanced Workflow Expansion",
        setup: "Scoped",
        monthly: "Typically $5,000",
        timeline: "After visible ROI",
        result: "Add a measured second workflow for a qualified operation",
        status: "Not a front-door offer",
        items: [
          "Requires baseline metrics and a stable original system",
          "Reserved for higher-volume or multi-location operations",
          "Adds one quantified workflow at a time",
          "Keeps explicit human ownership and handoffs",
        ],
        note:
          "Expansion is proposed only when the original system has demonstrated value and the next workflow has a defensible business case.",
      },
    ],
  },
  addons: [
    {
      name: "Service-Specific Intake Rules",
      price: "Component - scoped in Blueprint",
      desc:
        "Approved questions, urgency rules, safety boundaries, and handoffs for a specialized service line.",
      items: [
        "Sub-vertical-specific qualifying questions",
        "Custom safety branches",
        "Demo client profile",
        "Production sign-off documentation",
      ],
    },
    {
      name: "Additional Service-Line Routing",
      price: "Component - scoped in Blueprint",
      desc:
        "For multi-service companies that need a second set of intake, ownership, and escalation rules.",
      items: [
        "Second service-line intake map",
        "Routing logic by service type",
        "Combined dashboard",
        "Cross-service review filter",
      ],
    },
    {
      name: "Operations-System Integration",
      price: "Component - scoped in Blueprint",
      desc:
        "Scoped connection to the client-approved scheduling, field-service, or CRM system when native capabilities and access allow it.",
      items: [
        "Approved account connection",
        "Job-status writeback",
        "Custom field mapping",
        "Monthly sync monitoring",
      ],
    },
  ],
  complianceBadges: [
    {
      label: "TCPA-aware outreach",
      detail:
        "SMS opt-in, unsubscribe language, calling-hours quiet windows, frequency caps. Same pattern as HVAC and roofing.",
    },
    {
      label: "The system does not diagnose",
      detail:
        "Plumbing, electrical, tree, and pest issues are diagnosed by qualified humans. The workflow collects approved context, routes urgency, and triggers safety branches when needed.",
    },
    {
      label: "Optional license display",
      detail:
        "Plumbing (TX TSBPE), electrical (TDLR), and pest control (TX TDA) require license number on advertising. Optional landing-page footer field surfaces the contractor's number when present.",
    },
    {
      label: "FSM coexistence",
      detail:
        "Designed to work beside the client's current operating system, using native capabilities first and an approved handoff point where needed.",
    },
  ],
  resultsModel: {
    eyebrow: "Measurement plan",
    title: "What the Blueprint baselines and the managed system tracks",
    note:
      "No performance or revenue claim is made before the client's real call, lead, estimate, booking, and job data establishes a baseline.",
    rows: [
      {
        metric: "After-hours emergency calls (plumbing, electrical, tree)",
        today: "Voicemail, owner cell, or next-day callback",
        modeled: "Response time, owner assignment, handoff, and outcome recorded",
      },
      {
        metric: "Estimate follow-up",
        today: "1 manual reply, then no structured follow-up",
        modeled: "Approved follow-up path with stop rules and outcome tracking",
      },
      {
        metric: "Recurring service renewals (pest, landscape)",
        today: "Seasonal reminders depending on staff capacity",
        modeled: "Eligibility, consent, touch history, and resulting booked work tracked",
      },
      {
        metric: "Reviews",
        today: "Whoever remembers to ask",
        modeled: "Approved request path with exceptions routed to a human",
      },
    ],
  },
  faq: [
    {
      q: "I'm a plumber. Can I use this?",
      a:
        "Yes. Plumbing companies can use the dedicated plumbing path, which includes plumbing-specific intake boundaries and immediate human escalation for gas, flooding, sewage, and no-water situations.",
    },
    {
      q: "I'm an HVAC contractor. Should I be on this page?",
      a:
        "No — HVAC contractors should use the HVAC SKU at /industries/hvac-contractors. That SKU includes Texas TDLR §75.71 license display, heat-event lanes, replacement-quote system-age triggers, and post-storm member recall — none of which are in this catch-all.",
    },
    {
      q: "Will this replace my current operating system?",
      a:
        "Not by default. The Blueprint checks native capabilities first and defines any approved handoff or integration only after the current process, access, and data boundaries are understood.",
    },
    {
      q: "What does the 'recurring service reactivation' workflow do?",
      a:
        "For pest control and landscape sub-verticals only: when a customer's last-service date crosses the recurring interval (quarterly pest, monthly landscape), an opt-in-gated reactivation message fires. Other sub-verticals (plumbing, electrical, garage doors, etc.) get a 'not applicable' note.",
    },
    {
      q: "What does the Snapshot form collect?",
      a:
        "Business name, website, email, an optional phone number, and one front-desk challenge. The Snapshot itself uses public information and does not require customer data.",
    },
  ],
  cta: {
    eyebrow: "Start with the lead-capture lane",
    title: "Request a free Missed-Call Snapshot.",
    body:
      "We will use public information to review your published hours, call and booking paths, observable gaps, and the real operating data needed to validate the opportunity.",
    note:
      "Do not include payment details, customer access codes, gate codes, or anything that should remain inside your FSM.",
  },
};
