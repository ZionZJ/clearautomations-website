import type { Metadata } from "next";

export type IndustryStat = {
  value: string;
  label: string;
};

export type IndustryProblem = {
  num: string;
  text: string;
};

export type IndustryPhase = {
  phase: string;
  name: string;
  setup: string;
  monthly: string;
  timeline: string;
  result: string;
  status: string;
  items: string[];
  featured?: boolean;
  note?: string;
};

export type IndustryAddon = {
  name: string;
  price: string;
  desc: string;
  items: string[];
};

export type ComplianceBadge = {
  label: string;
  detail: string;
};

export type ToolPolicyItem = {
  name: string;
  detail: string;
};

export type ResultModelRow = {
  metric: string;
  today: string;
  modeled: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ServiceType =
  | "therapy-individual"
  | "therapy-couples"
  | "therapy-family"
  | "therapy-child-or-teen"
  | "clinical-supervision";

/**
 * Therapist-vertical-specific configuration for parameterizing the Vapi/Retell
 * agent script + lead form + HubSpot pipeline custom properties.
 *
 * All fields optional. Therapist practices that don't populate them get the
 * default-English / no-supervision / generic-insurance behavior.
 *
 * Used by:
 *   - therapist-practice/vapi-script.md (parameterized insurance question, Spanish opener, supervision branch, minor branch)
 *   - therapist-practice-audit-form.tsx (form fields visibility)
 *   - HubSpot pipeline custom properties
 */
export type TherapistConfig = {
  /** Insurance carriers the practice is in-network with. Surfaced in the Vapi insurance question and the lead form's insurance dropdown. e.g., ["aetna", "cigna", "bcbs", "uhc-optum", "self-pay"] */
  acceptedInsuranceCarriers?: string[];
  /** Set true if practice offers bilingual services. Enables Spanish opener variant + Spanish crisis branch. */
  practiceOffersBilingual?: boolean;
  /** ISO language codes the practice supports beyond English. e.g., ["es"] for Spanish-only bilingual; ["es", "vi"] for Spanish + Vietnamese. */
  bilingualLanguages?: string[];
  /** Set true if practice serves clients under 18. Enables the adult-vs-minor branch in the Vapi script. Default false (adult-only). */
  practiceServesMinors?: boolean;
  /** Names of clinicians who offer sliding-scale rates (typically pre-licensed under supervision). Surfaced in cost-sensitivity branch of Vapi script. */
  slidingScaleClinicians?: string[];
  /** State codes where the practice's clinicians are licensed. Used for state-of-residence routing. e.g., ["TX"] for Texas-only; ["TX", "NY"] for multi-state. */
  licensedStates?: string[];
  /** Service types the practice offers. Drives the service-type triage step in the Vapi script. */
  serviceTypesOffered?: ServiceType[];
};

export type Industry = {
  slug: string;
  name: string;
  metadata: Metadata;
  form: {
    kind:
      | "therapist-practice"
      | "hvac-contractor"
      | "plumbing-contractor"
      | "roofing-contractor"
      | "dental-practice"
      | "postal-presort"
      | "legal-intake"
      | "home-services";
    ctaLabel: string;
  };
  landingCopy?: {
    addonsEyebrow?: string;
    addonsTitle?: string;
    blockedPolicyTitle?: string;
    proofCards?: {
      headline: string;
      body: string;
    }[];
    faqEyebrow?: string;
    faqTitle?: string;
    footerTagline?: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    mutedTitle: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    stats: IndustryStat[];
  };
  problems: {
    eyebrow: string;
    title: string;
    items: IndustryProblem[];
    callout: string;
  };
  phases: {
    eyebrow: string;
    title: string;
    mutedTitle: string;
    items: IndustryPhase[];
    note: string;
  };
  addons: IndustryAddon[];
  complianceBadges: ComplianceBadge[];
  toolsPolicy: {
    title: string;
    intro: string;
    approved: ToolPolicyItem[];
    blocked: ToolPolicyItem[];
  };
  resultsModel: {
    eyebrow: string;
    title: string;
    note: string;
    rows: ResultModelRow[];
  };
  faq: FaqItem[];
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
  };
  /** Optional vertical-specific config (only populated for therapist-practice today). */
  therapistConfig?: TherapistConfig;
};
