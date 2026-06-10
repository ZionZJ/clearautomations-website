import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "ClearAutomations | AI Systems for Small Business",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: ["/favicon.ico", "/icon.svg"],
  },
  openGraph: {
    title: "ClearAutomations | AI Systems for Small Business",
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ClearAutomations AI systems for small business",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.displayName,
  url: siteConfig.url,
  email: siteConfig.contactEmail,
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
