import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

type SimplePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SimplePage({
  eyebrow,
  title,
  description,
  children,
}: SimplePageProps) {
  return (
    <>
      <SiteNav />
      <main className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10">
          <p className="text-[13px] font-medium text-[var(--amber)] tracking-wide uppercase mb-6">
            {eyebrow}
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.08] text-[var(--ink)] mb-6">
            {title}
          </h1>
          <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] text-[var(--ink-soft)] mb-12">
            {description}
          </p>
          <div className="space-y-10">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function PageSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[var(--rule)] pt-8">
      <h2 className="font-[var(--font-display)] text-[1.7rem] font-bold text-[var(--ink)] mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-[1.8] text-[var(--ink-soft)]">
        {children}
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-[var(--amber)] shrink-0">-</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

