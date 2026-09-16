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

export type TherapistConfig = {
  acceptedInsuranceCarriers?: string[];
  practiceOffersBilingual?: boolean;
  bilingualLanguages?: string[];
  practiceServesMinors?: boolean;
  slidingScaleClinicians?: string[];
  licensedStates?: string[];
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
  toolsPolicy?: {
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
  therapistConfig?: TherapistConfig;
};
