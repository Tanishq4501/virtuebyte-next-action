"use client";

/**
 * Keystatic Admin — client component
 * Separated from page.tsx so Next.js does not treat the entire
 * catch-all route as a client boundary, which can break builds.
 */
import { makePage } from "@keystatic/next/ui/app";
import keystaticConfig from "../../../keystatic.config";

export default makePage(keystaticConfig);
