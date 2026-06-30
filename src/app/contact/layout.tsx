import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
 title: "Contact Us",
 description:
 "Talk to VirtueByte about Salesforce, AI/ML, cloud, DevOps, and offshore development services for your business.",
 alternates: {
 canonical: getCanonicalUrl("/contact/"),
 },
 openGraph: {
 description:
 "Talk to VirtueByte about Salesforce, AI/ML, cloud, DevOps, and offshore development services for your business.",
 },
 twitter: {
 description:
 "Talk to VirtueByte about Salesforce, AI/ML, cloud, DevOps, and offshore development services for your business.",
 },
};

export default function ContactLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return children;
}

