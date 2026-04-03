/**
 * Keystatic API route handler
 * Handles: OAuth callback, content reads/writes via GitHub API
 * Only active on Vercel (not included in static export)
 */
import { makeRouteHandler } from "@keystatic/next/api";
import keystaticConfig from "../../../../../keystatic.config";

export const { GET, POST } = makeRouteHandler({ config: keystaticConfig });
