import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=true  → used by GitHub Actions when building for cPanel
 * (no env var)        → used by Vercel, enables Keystatic API routes
 */
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // output: "export" only for the cPanel static build (GitHub Actions)
  ...(isStaticExport && { output: "export" }),

  // trailingSlash only for the cPanel static build.
  // On Vercel, trailingSlash: true causes a 308 redirect on every OAuth
  // callback URL, which breaks Keystatic Cloud's state validation.
  ...(isStaticExport && { trailingSlash: true }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
