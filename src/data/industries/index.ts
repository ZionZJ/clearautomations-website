import { dentalPracticesIndustry } from "./dental-practices";
import { homeServicesIndustry } from "./home-services";
import { hvacContractorsIndustry } from "./hvac-contractors";
import { legalIntakeIndustry } from "./legal-intake";
import { plumbingContractorsIndustry } from "./plumbing-contractors";
import { postalPresortIndustry } from "./postal-presort";
import { roofingContractorsIndustry } from "./roofing-contractors";
import { therapistsIndustry } from "./therapists";
import type { Industry } from "./types";

export const industries = [
  therapistsIndustry,
  hvacContractorsIndustry,
  plumbingContractorsIndustry,
  roofingContractorsIndustry,
  dentalPracticesIndustry,
  postalPresortIndustry,
  legalIntakeIndustry,
  homeServicesIndustry,
] satisfies Industry[];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustryStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export type { ComplianceBadge, Industry } from "./types";
