import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "ClearAutomations | Missed-Call Recovery for HVAC & Plumbing",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: ["/favicon.ico", "/icon.svg"],
  },
  openGraph: {
    title: "Recover missed calls and stalled estimates | ClearAutomations",
    description:
      "Managed front-desk revenue recovery for HVAC and plumbing companies. Start with a free Missed-Call Snapshot.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClearAutomations: recover missed calls and stalled estimates for HVAC and plumbing companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover missed calls and stalled estimates | ClearAutomations",
    description:
      "Managed front-desk revenue recovery for HVAC and plumbing companies. Start with a free Missed-Call Snapshot.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.displayName,
  legalName: "Zion John Ventures LLC",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  email: siteConfig.contactEmail,
  telephone: "+1-832-299-5110",
  areaServed: "Houston, TX",
  founder: {
    "@type": "Person",
    name: siteConfig.founderName,
  },
  sameAs: [siteConfig.linkedInUrl],
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
