import type { Metadata } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Clear Automations — AI Systems for Small Business",
  description:
    "We build AI phone agents, automated follow-ups, and smart CRM systems for small businesses. First lead in 1-3 weeks. You own everything.",
  openGraph: {
    title: "Clear Automations — AI Systems for Small Business",
    description:
      "AI phone agents, automated follow-ups, and CRM systems. First lead in 1-3 weeks. Transparent pricing. You own everything.",
    type: "website",
    url: "https://clearautomations.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geist.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
