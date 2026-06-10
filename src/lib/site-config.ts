export const siteConfig = {
  name: "ClearAutomations",
  displayName: "Clear Automations",
  url: "https://clearautomations.com",
  description:
    "The AI employee that runs your small business front desk: answers every lead in under 2 minutes, books the job, and works nights and weekends. You own it.",
  contactEmail: "zion@clearautomations.com",
  legalEntity: "[TODO_LEGAL_ENTITY]",
  mailingAddress: "[TODO_MAILING_ADDRESS]",
  phoneDisplay: "[TODO_PHONE]",
  founderName: "Zion John",
  linkedInUrl: "https://linkedin.com/in/ZionJohn",
};

// True while a site-config value is still an unfilled [TODO_*] token.
// Public pages use this to hide the row instead of rendering the placeholder.
export function isPlaceholder(value: string): boolean {
  return value.startsWith("[TODO_");
}

export const primaryNavLinks = [
  { href: "/#phases", label: "How it works" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/trust", label: "Trust" },
  { href: "/proof", label: "Proof" },
  { href: "/#faq", label: "FAQ" },
];

export const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/trust", label: "Trust" },
  { href: "/proof", label: "Proof" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
