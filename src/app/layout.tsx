import type { Metadata } from "next";
import { Fira_Sans, Outfit, Lato } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const firaSans = Fira_Sans({
 variable: "--font-fira-sans",
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700"],
 display: "swap",
});

const outfit = Outfit({
 variable: "--font-outfit",
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700"],
 display: "swap",
 preload: false,
});

const lato = Lato({
 variable: "--font-lato",
 subsets: ["latin"],
 weight: ["300", "400", "700"],
 display: "swap",
 preload: false,
});

export const metadata: Metadata = {
 metadataBase: new URL("https://virtuebytech.com"),
 title: {
 default: "IT Consulting & Software Development Services | VirtuByte",
 template: "%s | VirtuByte",
 },
 description:
 "VirtueByte delivers Salesforce consulting, AI/ML, cloud, DevOps, and data solutions that help businesses scale securely and efficiently.",
 keywords: [
 "Salesforce Implementation",
 "AI ML Consulting",
 "Cloud Services",
 "Data Science",
 "DevOps",
 "Offshore Development",
 "VirtueByte",
 ],
 openGraph: {
 type: "website",
 locale: "en_US",
 url: "https://virtuebytech.com",
 siteName: "VirtueByte",
 title: "VirtueByte - Salesforce Solutions Powered by AI and Innovation",
 description:
 "VirtueByte delivers Salesforce consulting, AI/ML, cloud, DevOps, and data solutions that help businesses scale securely and efficiently.",
 },
 twitter: {
 card: "summary_large_image",
 title: "VirtueByte - Salesforce Solutions Powered by AI and Innovation",
 description:
 "VirtueByte delivers Salesforce consulting, AI/ML, cloud, DevOps, and data solutions that help businesses scale securely and efficiently.",
 },
 icons: {
 icon: "/images/favicons/favicon-32x32.png",
 apple: "/images/favicons/apple-touch-icon.png",
 },
 verification: {
 google: "pc1dH-zZluuSzxvUP5aCEsY9aFFdrYn8BeUFnN0GuOw",
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en">
 <body
 className={`${firaSans.variable} ${outfit.variable} ${lato.variable} antialiased`}
 >
 <ConditionalLayout>{children}</ConditionalLayout>
 <GoogleAnalytics />
 </body>
 </html>
 );
}
