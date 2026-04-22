"use client";

import { useState, type FormEvent } from "react";

const WEBHOOK_URL = "https://n8n.zionjohn.com/webhook/clearautomations-audit";

export function AuditForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      challenge: (form.elements.namedItem("challenge") as HTMLSelectElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <div className="text-[var(--amber)] text-3xl mb-4">&#10003;</div>
        <h3 className="font-[var(--font-display)] text-[1.4rem] font-bold text-white mb-2">
          Audit requested.
        </h3>
        <p className="text-[var(--navy-text)] text-[15px] leading-[1.7]">
          You&apos;ll receive a personalized video walkthrough within 48 hours
          at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="business"
        placeholder="Business name"
        required
        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors"
      />
      <input
        type="url"
        name="website"
        placeholder="Website URL"
        required
        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors"
      />
      <select
        name="challenge"
        required
        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors"
        defaultValue=""
      >
        <option value="" disabled>Biggest lead gen challenge</option>
        <option value="slow-followup">Slow follow-up on leads</option>
        <option value="no-online-presence">Weak online presence</option>
        <option value="wasting-ad-spend">Wasting money on ads</option>
        <option value="manual-processes">Too many manual processes</option>
        <option value="other">Something else</option>
      </select>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className="bg-white/5 border border-white/10 rounded px-4 py-3 text-[15px] text-white placeholder:text-[var(--navy-muted)] focus:outline-none focus:border-[var(--amber)] transition-colors"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[var(--amber)] text-[var(--stone)] text-[15px] font-semibold py-3.5 px-8 rounded hover:bg-[var(--amber-hover)] transition-colors mt-2 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Audit"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Email us directly at{" "}
          <a href="mailto:zion@clearautomations.com" className="underline">
            zion@clearautomations.com
          </a>
        </p>
      )}
    </form>
  );
}
