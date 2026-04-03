/**
 * Keystatic API route handler
 * Handles: OAuth callback, content reads/writes via GitHub API
 *
 * dynamic = "force-static"  → cPanel build (STATIC_EXPORT=true)
 *   Next.js requires this flag to skip the route during static export.
 *   The route is NOT included in the /out directory — it's just omitted cleanly.
 *
 * dynamic = "force-dynamic" → Vercel
 *   Normal server-side route handler, fully active.
 */
export const dynamic =
  process.env.STATIC_EXPORT === "true" ? "force-static" : "force-dynamic";

import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "../../../../../keystatic.config";

export const { GET, POST } = makeRouteHandler({ config: keystaticConfig });
