import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.CLEARAUTOMATIONS_DIST_DIR || ".next",
  async redirects() {
    return [
      // Renamed to match the canonical offer name. 308 keeps old links and search results working.
      {
        source: "/services/voice-agent-setup",
        destination: "/services/front-desk-revenue-recovery",
        permanent: true,
      },
      // Retired verticals (removed 2026-09-15) point to the industries index instead of 404ing.
      {
        source: "/industries/:slug(therapists|dental-practices|roofing-contractors|postal-presort|legal-intake)",
        destination: "/industries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
