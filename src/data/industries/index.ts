import { homeServicesIndustry } from "./home-services";
import { hvacContractorsIndustry } from "./hvac-contractors";
import { plumbingContractorsIndustry } from "./plumbing-contractors";
import type { Industry } from "./types";

export const industries = [
  hvacContractorsIndustry,
  plumbingContractorsIndustry,
  homeServicesIndustry,
] satisfies Industry[];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustryStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export type { ComplianceBadge, Industry } from "./types";
