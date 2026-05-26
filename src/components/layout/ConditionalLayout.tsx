"use client";

/**
 * ConditionalLayout
 * Hides the main site Header and Footer when the user is inside
 * the Keystatic admin panel (/keystatic/...).
 */
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "@/components/ui/Chatbot";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/keystatic");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="pt-[70px]">{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
}
