import type { Industry } from "./types";

export const homeServicesIndustry: Industry = {
  slug: "home-services",
  name: "General Home Services",
  form: {
    kind: "home-services",
    ctaLabel: "Free Missed-Call Snapshot",
  },
  landingCopy: {
    addonsEyebrow: "Add to any phase",
    addonsTitle: "Sub-vertical and growth services around the core trades build.",
    blockedPolicyTitle: "Not used inside your FSM",
    faqTitle: "Before the first lead is routed",
    footerTagline:
      "ClearAutomations - lead-funnel automation for plumbing, electrical, landscape, pest, and other home-services trades",
    proofCards: [
      {
        headline: "Sub-vertical-aware AI agent.",
        body:
          "Plumber, electrician, landscaper, pest control, garage door, fence/deck, tree service, junk removal, painter, pressure-washer — 10 sub-vertical agents share the same n8n workflows with parameterized scripts.",
      },
      {
        headline: "FSM coexistence.",
        body:
          "Jobber, Housecall Pro, ServiceTitan, FieldEdge, or spreadsheet — your tools stay where they are. The lead funnel hands off at deal-stage = won.",
      },
      {
        headline: "Lean on purpose.",
        body:
          "6 workflows instead of HVAC's 9 or roofing's 11. No weather lanes, no insurance-claim follow-up. Ships fast, costs less to maintain, fits any trade.",
      },
    ],
  },
  metadata: {
    title: "Home Services Lead-Funnel Automation | Clear Automations",
    description:
      "Lead-funnel automation for plumbing, electrical, landscape, pest control, and other home-services trades. Sub-vertical-aware AI callback with FSM coexistence.",
    openGraph: {
      title: "Home Services Automation | Clear Automations",
      description:
        "Lead capture, estimate follow-up, and review automation for home-services trades. 10 sub-verticals supported.",
      url: "https://clearautomations.com/industries/home-services",
      type: "website",
    },
  },
  hero: {
    eyebrow: "Lead-funnel automation for home-services trades",
    title: "Not HVAC. Not roofing. Still leaking leads.",
    mutedTitle: "We build the funnel for any trade.",
    body:
      "Clear Automations builds lead-capture, estimate follow-up, and review-recovery workflows for plumbing, electrical, landscape, pest, garage door, fence, tree service, and other home-services trades that don't fit our HVAC or roofing SKUs.",
    primaryCta: "Request a Free Missed-Call Snapshot",
    secondaryCta: "See the Sub-Verticals",
    stats: [
      { value: "10", label: "sub-verticals supported" },
      { value: "6", label: "workflows in the build target" },
      { value: "100%", label: "contractor-owned accounts" },
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
    eyebrow: "Start with a free Snapshot, then validate with the $1,000 Blueprint.",
    title: "First we observe. Then we verify. Then we build.",
    mutedTitle: "Lead capture, then estimate follow-up, then retention.",
    note:
      "The free Missed-Call Snapshot uses public information and names the data needed to validate the opportunity. The $1,000 Revenue-Recovery Blueprint then maps the real workflow, baseline, ROI range, implementation, and measurement plan. Its full fee credits toward implementation within 60 days.",
    items: [
      {
        phase: "Build · Stage 1",
        name: "Lead Capture",
        setup: "Within implementation",
        monthly: "Within management",
        timeline: "2-3 weeks",
        result: "Faster callbacks across business and after-hours",
        status: "The core build",
        featured: true,
        items: [
          "Sub-vertical-aware audit form (10 sub-verticals + license-info field for plumbing/electrical/pest)",
          "Sub-vertical Retell callback agent (10 pre-configured agents sharing the same workflow set)",
          "Missed-call callback queue with sub-vertical urgency scoring",
          "Post-job review filter with manager-route on negative",
          "Weekly owner digest",
        ],
        note:
          "AI does not diagnose plumbing, electrical, tree, or pest issues. Safety branches route to 911 / utility company / professional response as appropriate.",
      },
      {
        phase: "Build · Stage 2",
        name: "Estimate Follow-Up",
        setup: "Within implementation",
        monthly: "Within management",
        timeline: "2 weeks",
        result: "More quoted work moved to signed jobs",
        status: "Added once Stage 1 is stable",
        items: [
          "3-touch email + 1-touch SMS estimate sequence",
          "Lost-reason tagging (price / timing / competitor / no-response / scope)",
          "Jobber webhook handoff at deal-stage = won (Housecall Pro alt at +$750)",
          "HubSpot quote-recovery dashboard",
        ],
        note:
          "Estimate follow-up is sub-vertical-agnostic. The same workflow handles plumbing repair quotes, electrical panel upgrades, fence installs, and tree-removal estimates.",
      },
      {
        phase: "Build · Stage 3",
        name: "Retention + Reviews",
        setup: "Within implementation",
        monthly: "Within management",
        timeline: "1-2 weeks",
        result: "Recurring services reactivated, reviews collected",
        status: "Added once Stages 1+2 are stable",
        items: [
          "Post-job review request full sequence (manager-route on negative)",
          "Recurring service reactivation (pest, landscape only)",
          "Monthly owner report",
          "Sub-vertical-specific recurring-cadence config",
        ],
        note:
          "Recurring service reactivation is enabled only for pest control + landscape sub-verticals. Other sub-verticals (plumbing, electrical, garage doors, etc.) get a 'not applicable' note in the dashboard.",
      },
    ],
  },
  addons: [
    {
      name: "Sub-Vertical Script Customization",
      price: "Component - scoped in Blueprint",
      desc:
        "Heavily-tailored Retell script for niche sub-vertical not in the default 10. Examples: solar install, water-treatment, septic, well-drilling.",
      items: [
        "Sub-vertical-specific qualifying questions",
        "Custom safety branches",
        "Demo client profile",
        "Production sign-off documentation",
      ],
    },
    {
      name: "Second Sub-Vertical Support",
      price: "Component - scoped in Blueprint",
      desc:
        "For dual-service shops (plumbing + electrical, landscape + pest, etc.) — adds a second sub-vertical agent to the same n8n instance.",
      items: [
        "Second Retell agent config",
        "Routing logic by service type",
        "Combined dashboard",
        "Cross-service review filter",
      ],
    },
    {
      name: "ServiceTitan Integration",
      price: "Component - scoped in Blueprint",
      desc:
        "API token integration for larger plumbing + electrical shops on ServiceTitan ($245-$500/tech/mo).",
      items: [
        "ServiceTitan API token setup",
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
      label: "AI does not diagnose",
      detail:
        "Plumbing / electrical / tree / pest issues are diagnosed by humans. AI collects context, routes urgency, and triggers safety branches when needed.",
    },
    {
      label: "Optional license display",
      detail:
        "Plumbing (TX TSBPE), electrical (TDLR), and pest control (TX TDA) require license number on advertising. Optional landing-page footer field surfaces the contractor's number when present.",
    },
    {
      label: "FSM coexistence",
      detail:
        "Designed to sit beside Jobber, Housecall Pro, ServiceTitan, FieldEdge, or a simple spreadsheet pipeline. Lead funnel ends at deal-stage = won.",
    },
  ],
  toolsPolicy: {
    title: "Tools we use around the trades funnel",
    intro:
      "The funnel uses self-hosted n8n as the backbone and connects to the contractor's CRM, phone, FSM, and messaging stack after access is approved. We do not write to or read from the FSM until the Stage 2 webhook handoff.",
    approved: [
      {
        name: "Self-hosted n8n",
        detail:
          "Coordinates form intake, callback queues, estimate follow-up, review requests, recurring-service reactivation (pest/landscape), and owner digest.",
      },
      {
        name: "Retell AI",
        detail:
          "About $0.07/min with roughly 600ms latency, SOC 2, and a self-service BAA. 10 sub-vertical agents share the n8n workflow set; only the system prompt + safety branches differ. Vapi stays a documented alternate for deep-custom builds.",
      },
      {
        name: "HubSpot Free or existing CRM",
        detail:
          "Lead-funnel CRM (pre-job). 8-stage pipeline with sub-vertical, biggest-leak, and license-info custom properties.",
      },
      {
        name: "Telnyx + Resend",
        detail:
          "Telnyx for voice + SMS with STIR/SHAKEN attestation. Resend for transactional email. Same as HVAC and roofing.",
      },
    ],
    blocked: [
      {
        name: "Diagnosis or DIY recommendations from AI",
        detail:
          "Plumbing, electrical, tree, pest issues are diagnosed by qualified humans. AI does not recommend DIY repairs (water + electrical + gas + chemical safety).",
      },
      {
        name: "Personal cell as primary callback target",
        detail:
          "Avoid routing customer emergencies to a personal phone without hours, ownership, and backup rules.",
      },
      {
        name: "Vertical-specific weather or storm workflows",
        detail:
          "HVAC's heat-event lane and roofing's storm-recall live in their dedicated SKUs — not in the home-services catch-all.",
      },
      {
        name: "Hidden lead ownership",
        detail:
          "ClearAutomations does not own the contractor's phone number, CRM, workflow exports, or customer list.",
      },
    ],
  },
  resultsModel: {
    eyebrow: "Illustrative results",
    title: "What a typical home-services shop could recover",
    note:
      "This is a planning model varying by sub-vertical, not a published case study. Replace with approved client numbers after a pilot.",
    rows: [
      {
        metric: "After-hours emergency calls (plumbing, electrical, tree)",
        today: "Voicemail, owner cell, or next-day callback",
        modeled: "Sub-vertical-aware callback within 5 minutes",
      },
      {
        metric: "Estimate follow-up",
        today: "1 manual reply, then no structured follow-up",
        modeled: "3 email + 1 SMS sequence with lost-reason tagging",
      },
      {
        metric: "Recurring service renewals (pest, landscape)",
        today: "Seasonal reminders depending on staff capacity",
        modeled: "Sub-vertical-cadence reactivation campaigns (quarterly pest, monthly landscape)",
      },
      {
        metric: "Reviews",
        today: "Whoever remembers to ask",
        modeled: "Filtered post-job request with manager-route on negative",
      },
    ],
  },
  faq: [
    {
      q: "I'm a plumber. Can I use this?",
      a:
        "Yes. Plumbing is one of the 10 supported sub-verticals, and plumbing companies also get a dedicated page at /industries/plumbing-contractors. The voice agent uses plumbing-specific qualifying questions (leak / clog / no-water / water-heater / fixture) and a plumbing-specific safety branch (active flooding, gas smell).",
    },
    {
      q: "I'm an HVAC contractor. Should I be on this page?",
      a:
        "No — HVAC contractors should use the HVAC SKU at /industries/hvac-contractors. That SKU includes Texas TDLR §75.71 license display, heat-event lanes, replacement-quote system-age triggers, and post-storm member recall — none of which are in this catch-all.",
    },
    {
      q: "Will this replace my Jobber / Housecall Pro / ServiceTitan?",
      a:
        "No. Your FSM stays where it is. The lead funnel is a separate layer that hands off at deal-stage = won. Stage 2 includes a webhook integration with Jobber (default) or Housecall Pro (alternate); ServiceTitan is a paid add-on.",
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
