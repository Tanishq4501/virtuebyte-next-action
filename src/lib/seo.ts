const SITE_URL = "https://virtuebytech.com";

export function getCanonicalUrl(pathname: string) {
 return new URL(pathname, SITE_URL).toString();
}

export function toMetaDescription(text: string, maxLength = 155) {
 const normalized = text.replace(/\s+/g, " ").trim();

 if (normalized.length <= maxLength) {
 return normalized;
 }

 const truncated = normalized.slice(0, maxLength + 1);
 const lastSpace = truncated.lastIndexOf(" ");

 if (lastSpace > 0) {
 return truncated.slice(0, lastSpace).trim();
 }

 return normalized.slice(0, maxLength).trim();
}

