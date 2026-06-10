import { SiteLogo } from "@/components/site-nav";
import { footerLinks, siteConfig } from "@/lib/site-config";

type SiteFooterProps = {
  tagline?: string;
};

export function SiteFooter({
  tagline = "ClearAutomations: the AI employee that runs your front desk",
}: SiteFooterProps) {
  return (
    <footer className="border-t border-[var(--rule)] py-8">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="mb-2">
            <SiteLogo />
          </div>
          <p className="text-[13px] text-[var(--ink-dim)]">{tagline}</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-[13px] text-[var(--ink-dim)] hover:text-[var(--amber)] transition-colors"
          >
            Email
          </a>
          <a
            href={siteConfig.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--ink-dim)] hover:text-[var(--amber)] transition-colors"
          >
            LinkedIn
          </a>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[var(--ink-dim)] hover:text-[var(--amber)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 mt-6 pt-6 border-t border-[var(--rule)]">
        <p className="text-[12px] text-[var(--ink-faint)]">
          &copy; 2026 ClearAutomations. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
