import Link from "next/link";
import { primaryNavLinks } from "@/lib/site-config";

type NavLink = {
  href: string;
  label: string;
};

type SiteNavProps = {
  links?: NavLink[];
  ctaHref?: string;
  ctaLabel?: string;
};

const defaultLinks: NavLink[] = primaryNavLinks;

function LogoMark({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <svg
      className={`${className} text-[var(--amber)] group-hover:scale-105 transition-transform`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 8 A10 10 0 1 0 22 24" />
      <path d="M10 24 L16 8 L22 24" />
      <path d="M12.2 18 L19.8 18" />
    </svg>
  );
}

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <LogoMark />
      <span className="font-[var(--font-display)] text-[18px] tracking-tight">
        <span className="text-[var(--ink)] font-bold">
          <span className="text-[var(--amber)]">C</span>lear
        </span>
        <span className="text-[var(--ink-dim)] font-medium">
          <span className="text-[var(--amber)]">A</span>utomations
        </span>
      </span>
    </Link>
  );
}

export function SiteNav({
  links = defaultLinks,
  ctaHref = "/#audit",
  ctaLabel = "Get a Free Audit",
}: SiteNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060608]/95 backdrop-blur-sm border-b border-[var(--rule)]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        <SiteLogo />

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="text-[13px] font-medium text-[var(--ink-dim)] hover:text-[var(--amber)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="text-[13px] font-medium text-[var(--amber)] border border-[rgba(212,168,67,0.3)] px-4 py-2 rounded hover:bg-[rgba(212,168,67,0.1)] transition-colors"
          >
            {ctaLabel}
          </a>

          <details className="md:hidden relative group">
            <summary className="list-none cursor-pointer flex items-center justify-center w-9 h-9 rounded border border-[rgba(255,255,255,0.1)] hover:border-[var(--ink-dim)] transition-colors">
              <svg
                className="w-4 h-4 text-[var(--ink-soft)] group-open:hidden"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="2" y1="4" x2="14" y2="4" />
                <line x1="2" y1="8" x2="14" y2="8" />
                <line x1="2" y1="12" x2="14" y2="12" />
              </svg>
              <svg
                className="w-4 h-4 text-[var(--ink-soft)] hidden group-open:block"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="4" x2="12" y2="12" />
                <line x1="12" y1="4" x2="4" y2="12" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-52 bg-[var(--surface)] border border-[var(--rule)] rounded-lg py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              {links.map((link) => (
                <a
                  key={`mobile-${link.href}-${link.label}`}
                  href={link.href}
                  className="block px-4 py-2.5 text-[14px] text-[var(--ink-soft)] hover:text-[var(--amber)] hover:bg-[rgba(212,168,67,0.06)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
