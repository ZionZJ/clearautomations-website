import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { siteConfig } from "@/lib/site-config";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/industries",
  "/privacy",
  "/proof",
  "/services",
  "/services/founder-content-system",
  "/services/voice-agent-setup",
  "/terms",
  "/trust",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const industryRoutes = industries.map((industry) => `/industries/${industry.slug}`);

  return [...staticRoutes, ...industryRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
