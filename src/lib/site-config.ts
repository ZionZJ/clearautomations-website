export const siteConfig = {
  name: "ClearAutomations",
  displayName: "ClearAutomations",
  url: "https://www.clearautomations.com",
  description:
    "Managed front-desk revenue recovery for HVAC and plumbing companies: missed calls, lead response, estimate follow-up, booking, and CRM workflows measured against real operating data.",
  contactEmail: "zion@getclearautomations.com",
  legalEntity: "Zion John Ventures LLC d/b/a ClearAutomations",
  mailingAddress: "5900 Balcones Drive STE 100, Austin, TX 78731",
  phoneDisplay: "(832) 299-5110",
  phoneHref: "tel:+18322995110",
  bookingUrl: "https://cal.com/clearautomations/discovery",
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
