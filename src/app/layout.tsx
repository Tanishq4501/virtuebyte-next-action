import type { Metadata } from "next";
import { Fira_Sans, Outfit, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
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
});

const lato = Lato({
 variable: "--font-lato",
 subsets: ["latin"],
 weight: ["300", "400", "700"],
 display: "swap",
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
 <head>
 <meta charSet="UTF-8" />
 <Script
 src="https://www.googletagmanager.com/gtag/js?id=G-WT3KJTGEN5"
 strategy="beforeInteractive"
 />
 <Script id="ga4-init" strategy="beforeInteractive">
 {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-WT3KJTGEN5');`}
 </Script>
 <Script id="content-protection" strategy="afterInteractive">
 {`(function () {
	const isEditable = (target) => {
		if (!(target instanceof Element)) return false;
		const tag = target.tagName;
		return (
			target.isContentEditable ||
			tag === 'INPUT' ||
			tag === 'TEXTAREA' ||
			tag === 'SELECT'
		);
	};

	document.addEventListener('contextmenu', function (event) {
		event.preventDefault();
	}, true);

	document.addEventListener('copy', function (event) {
		if (isEditable(event.target)) return;
		event.preventDefault();
	}, true);

	document.addEventListener('cut', function (event) {
		if (isEditable(event.target)) return;
		event.preventDefault();
	}, true);

	document.addEventListener('selectstart', function (event) {
		if (isEditable(event.target)) return;
		event.preventDefault();
	}, true);

	document.addEventListener('keydown', function (event) {
		const key = event.key.toLowerCase();
		const withModifier = event.ctrlKey || event.metaKey;

		if (withModifier && (key === 'c' || key === 'x')) {
			if (isEditable(event.target)) return;
			event.preventDefault();
		}
	}, true);
})();`}
 </Script>
 </head>
 <body
 className={`${firaSans.variable} ${outfit.variable} ${lato.variable} antialiased`}
 >
 <ConditionalLayout>{children}</ConditionalLayout>
 </body>
 </html>
 );
}
