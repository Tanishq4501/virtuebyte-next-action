"use client";

/**
 * ConditionalLayout
 * Hides the main site Header and Footer when the user is inside
 * the Keystatic admin panel (/keystatic/...).
 */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";

const Footer = dynamic(() => import("./Footer"));
const Chatbot = dynamic(() => import("@/components/ui/Chatbot"), { ssr: false });

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/keystatic");
  const [showFooter, setShowFooter] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const schedule = (fn: () => void, timeout: number) => {
      if (typeof window.requestIdleCallback === "function") {
        const id = window.requestIdleCallback(fn, { timeout });
        return () => window.cancelIdleCallback(id);
      }
      const timer = setTimeout(fn, Math.min(timeout, 2000));
      return () => clearTimeout(timer);
    };

    const cancelFooter = schedule(() => setShowFooter(true), 2000);
    const cancelChatbot = schedule(() => setShowChatbot(true), 4000);

    return () => {
      cancelFooter();
      cancelChatbot();
    };
  }, []);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="pt-[70px]">{children}</main>
      {showFooter ? (
        <Footer />
      ) : (
        <footer className="min-h-[320px] bg-[#462D84]" aria-hidden />
      )}
      {showChatbot ? <Chatbot /> : null}
    </>
  );
}
