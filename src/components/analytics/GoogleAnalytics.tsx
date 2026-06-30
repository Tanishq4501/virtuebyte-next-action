"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-WT3KJTGEN5";

/** Skip analytics on admin routes; load GA only after the page is idle. */
export default function GoogleAnalytics() {
  const pathname = usePathname();

  if (
    !GA_MEASUREMENT_ID ||
    pathname.startsWith("/keystatic") ||
    pathname.startsWith("/admin")
  ) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });`}
      </Script>
    </>
  );
}
