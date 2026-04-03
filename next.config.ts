import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=true  → used by GitHub Actions when building for cPanel
 * (no env var)        → used by Vercel, enables Keystatic API routes
 */
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport && { output: "export" }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
