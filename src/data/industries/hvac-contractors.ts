import type { Industry } from "./types";

export const hvacContractorsIndustry: Industry = {
  slug: "hvac-contractors",
  name: "HVAC Contractors",
  form: {
    kind: "hvac-contractor",
    ctaLabel: "Free Missed-Call Snapshot",
  },
  landingCopy: {
    addonsEyebrow: "Add to the build",
    addonsTitle: "Revenue recovery services around the core HVAC build.",
    blockedPolicyTitle: "Not used for production dispatch",
    faqTitle: "Before the first emergency lead is routed",
    footerTagline:
      "ClearAutomations: the front desk for Texas HVAC contractors",
    proofCards: [
      {
        headline: "You own the system.",
        body:
          "Your website, CRM, phone numbers, workflows, scripts, and handoff docs stay in your accounts.",
      },
      {
        headline: "Emergency calls get priority.",
        body:
          "True emergencies (no-cool in a heat wave, no-heat in a freeze, medically heat-sensitive households) route to a human immediately. The AI never holds them in a queue.",
      },
      {
        headline: "Built for Texas seasonality.",
        body:
          "The demo is designed around summer spikes, after-hours calls, storm-driven demand, and replacement quotes.",
      },
    ],
  },
  metadata: {
    title: "HVAC Contractor Automation | ClearAutomations",
    description:
      "Missed-call recovery, emergency booking, estimate follow-up, and review automation for Texas HVAC contractors.",
    openGraph: {
      title: "HVAC Contractor Automation | ClearAutomations",
      description:
        "Automation systems that help Texas HVAC contractors respond faster, book more urgent jobs, and recover stale estimates.",
      url: "https://www.clearautomations.com/industries/hvac-contractors",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Texas-first automation for HVAC contractors",
    title: "Every missed AC call can become someone else's booked job.",
    mutedTitle: "We recover the lead before it cools off.",
    body:
      "ClearAutomations manages missed-call recovery, lead response, estimate follow-up, booking, and CRM/FSM workflows for HVAC companies. We check the systems you already have before adding custom infrastructure.",
    primaryCta: "Request a Free Missed-Call Snapshot",
    secondaryCta: "See the Workflow Phases",
    stats: [
      { value: "1 page", label: "public-data Snapshot" },
      { value: "1 day", label: "typical delivery" },
      { value: "$0", label: "starting price" },
    ],
  },
  problems: {
    eyebrow: "The leak is response time",
    title: "HVAC owners do not need more software. They need fewer dropped jobs.",
    items: [
      {
        num: "01",
        text:
          "No-cool calls arrive after hours, on weekends, and during heat waves when every competitor is one tap away. The size of that gap varies by shop, so the Blueprint uses actual call records before assigning a dollar value.",
      },
      {
        num: "02",
        text:
          "Estimate requests can be quoted once, then disappear into inboxes, sticky notes, or a dispatcher memory stack. The value of that follow-up gap should be measured from the shop's own estimates and booked work.",
      },
      {
        num: "03",
        text:
          "Maintenance plans, review requests, and aging equipment opportunities are valuable, but rarely get consistent follow-up.",
      },
    ],
    callout:
      "The first build focuses on lead response, booking, and owner visibility. It does not replace your dispatcher, field-service platform, or technician judgment.",
  },
  phases: {
    eyebrow: "One offer ladder",
    title: "Observe the gap. Validate it with real data.",
    mutedTitle: "Build only what the HVAC operation can support and measure.",
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
        result: "A managed workflow tied to the verified HVAC baseline",
        status: "Priced from volume, locations, integrations, and workflows",
        items: [
          "Missed-call and overflow handling",
          "New-lead and open-estimate follow-up",
          "Approved human handoffs and exception tasks",
          "Reliability and performance reporting",
        ],
        note:
          "No production message or call path launches without approved consent, disclosure, escalation, and stop rules.",
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
      name: "Dispatch Handoff Map",
      price: "Component - scoped in Blueprint",
      desc:
        "Document exactly when automation should route to dispatcher, owner, technician, or normal office follow-up.",
      items: [
        "Urgency matrix",
        "Service-area rules",
        "Escalation paths",
        "Approved handoff copy",
      ],
    },
    {
      name: "Review Recovery Sprint",
      price: "Component - scoped in Blueprint",
      desc:
        "Turn completed jobs into a simple, compliant review request system with owner visibility.",
      items: [
        "Review-link setup",
        "Email and SMS copy",
        "Job-type filtering",
        "Weekly review report",
      ],
    },
    {
      name: "Maintenance Plan Reactivation",
      price: "Component - scoped in Blueprint",
      desc:
        "Import old customers or maintenance members and build a seasonal reactivation workflow.",
      items: [
        "Customer segment map",
        "Tune-up campaign copy",
        "Renewal reminders",
        "Conversion report",
      ],
    },
  ],
  complianceBadges: [
    {
      label: "TCPA-aware outreach",
      detail:
        "Production SMS and callback flows need opt-in, unsubscribe language, quiet hours, and frequency caps. We only text people who contacted your business directly (no purchased or shared lists), and opt-outs are honored whether someone replies STOP or just asks to stop.",
    },
    {
      label: "No diagnosis promises",
      detail:
        "AI scripts collect context and route leads; technicians and dispatchers remain responsible for diagnosis and commitments.",
    },
    {
      label: "Customer privacy boundary",
      detail:
        "Do not collect gate codes, payment cards, private notes, or sensitive emergency details through public demo forms.",
    },
    {
      label: "Dispatch-platform friendly",
      detail:
        "Designed to sit beside the client's current dispatch, booking, and lead-tracking systems, using native capabilities first.",
    },
  ],
  resultsModel: {
    eyebrow: "Measurement plan",
    title: "What the Blueprint measures before and after launch",
    note:
      "No performance or revenue claim is made before the shop's real calls, estimates, bookings, and job data establishes a baseline.",
    rows: [
      {
        metric: "After-hours emergency calls",
        today: "Voicemail, owner cell, or next-day callback",
        modeled: "Response time, owner assignment, handoff, and outcome recorded",
      },
      {
        metric: "Missed estimate requests",
        today: "One manual reply, then no structured follow-up",
        modeled: "Follow-up sequence with lost-reason tagging",
      },
      {
        metric: "Maintenance renewals",
        today: "Seasonal reminders when someone remembers",
        modeled: "Segmented renewal and tune-up campaign",
      },
      {
        metric: "Owner visibility",
        today: "CRM checks and call log guesswork",
        modeled: "Weekly digest of leads, booked jobs, and leaks",
      },
    ],
  },
  faq: [
    {
      q: "Will this replace my dispatcher?",
      a:
        "No. The system captures and prioritizes leads, then routes them to your approved dispatcher, owner, or CRM process.",
    },
    {
      q: "Can it handle after-hours emergency calls?",
      a:
        "Yes, as an intake and routing layer. It should collect context, score urgency, and trigger the right callback path without promising diagnosis or availability.",
    },
    {
      q: "Does this work with my current dispatch or field-service system?",
      a:
        "The Blueprint reviews the system's native capabilities, account access, and available integrations before recommending any additional connection or workflow.",
    },
    {
      q: "Can it send SMS follow-ups?",
      a:
        "Yes, after opt-in, unsubscribe language, sender setup, and frequency caps are configured. The demo keeps those rules visible instead of burying them.",
    },
    {
      q: "What does the Snapshot form collect?",
      a:
        "Business name, website, email, an optional phone number, and one front-desk challenge. The Snapshot itself uses public information and does not require customer data.",
    },
  ],
  cta: {
    eyebrow: "Start with the missed-call lane",
    title: "Request a free Missed-Call Snapshot.",
    body:
      "We will use public information to review your published hours, call and booking paths, observable gaps, and the real operating data needed to validate the opportunity.",
    note:
      "Do not include payment details, private customer notes, gate codes, access instructions, or emergency details that should remain inside your dispatch system.",
  },
};
