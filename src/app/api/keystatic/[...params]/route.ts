/**
 * Keystatic API route handler — Vercel only.
 * Handles OAuth callbacks and content reads/writes via the GitHub API.
 *
 * This file is deleted by the GitHub Actions workflow before the static
 * export build runs, so it is never included in the cPanel output.
 * On Vercel (full Next.js), it runs normally as a server-side route.
 */
import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "../../../../../keystatic.config";

export const dynamic = "force-dynamic";

export const { GET, POST } = makeRouteHandler({ config: keystaticConfig });
