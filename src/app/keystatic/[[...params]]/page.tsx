"use client";

/**
 * Keystatic Admin UI — catch-all route
 * Accessible at: /keystatic/
 *
 * This page only functions on Vercel (requires API routes).
 * On the cPanel static build it produces a non-functional shell,
 * which is harmless — writers always use the Vercel URL.
 */
import { makePage } from "@keystatic/next/ui/app";
import keystaticConfig from "../../../../keystatic.config";

export default makePage(keystaticConfig);
