import type { ReactNode } from "react";

export const inputClass =
  "bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors";

export const selectClass =
  "bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors";

export const textareaClass =
  "bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors min-h-[100px] resize-y";

export function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-[12px] font-medium uppercase tracking-wide text-[var(--navy-muted)]">
        {label}
      </span>
      {children}
    </label>
  );
}

export function HoneypotField() {
  return (
    <div className="hidden" aria-hidden="true">
      <label>
        Leave this field blank
        <input
          type="text"
          name="websiteUrlConfirm"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
    </div>
  );
}

export function ContactConsent({
  children,
  name = "contactConsent",
}: {
  children: ReactNode;
  name?: string;
}) {
  return (
    <label className="flex gap-3 items-start text-[13px] leading-[1.6] text-[var(--navy-text)]">
      <input
        type="checkbox"
        name={name}
        required
        className="mt-1 accent-[var(--amber)]"
      />
      <span>{children}</span>
    </label>
  );
}

export function PrivacyNote() {
  return (
    <p className="text-[12px] leading-[1.6] text-[var(--navy-muted)]">
      Do not include patient information, payment cards, access codes, legal
      matter details, insurance IDs, or other sensitive private details in this
      form. See the{" "}
      <a href="/privacy" className="text-[var(--amber)] underline">
        privacy notice
      </a>
      .
    </p>
  );
}

