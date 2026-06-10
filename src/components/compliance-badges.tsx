import type { ComplianceBadge } from "@/data/industries";

type ComplianceBadgesProps = {
  badges: ComplianceBadge[];
};

export function ComplianceBadges({ badges }: ComplianceBadgesProps) {
  return (
    <section className="py-12 sm:py-16 border-t border-[var(--rule)]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="border border-[rgba(212,168,67,0.25)] rounded-lg p-5 bg-[rgba(212,168,67,0.04)]"
            >
              <p className="text-[14px] font-semibold text-[var(--amber)] leading-snug mb-2">
                {badge.label}
              </p>
              <p className="text-[13px] text-[var(--ink-soft)] leading-[1.6]">
                {badge.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
