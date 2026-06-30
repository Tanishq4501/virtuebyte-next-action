import type { Metadata } from "next";
import HeroImagePreload from "@/components/ui/HeroImagePreload";
import DeferredSection from "@/components/ui/DeferredSection";
import HeroSection from "@/components/sections/HeroSection";
import VirtuebyteIntro from "@/components/sections/VirtuebyteIntro";
import { HERO_IMAGES } from "@/lib/hero-images";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
    description:
        "Salesforce, AI/ML, cloud, DevOps, and data consulting that help growing businesses modernize operations and scale with confidence.",
    alternates: {
        canonical: getCanonicalUrl("/"),
    },
    openGraph: {
        description:
            "Salesforce, AI/ML, cloud, DevOps, and data consulting that help growing businesses modernize operations and scale with confidence.",
    },
    twitter: {
        description:
            "Salesforce, AI/ML, cloud, DevOps, and data consulting that help growing businesses modernize operations and scale with confidence.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What industries does VirtueByte serve?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "VirtueByte provides IT consulting, Salesforce implementation, AI solutions, cloud services, and offshore development support to businesses across healthcare technology, manufacturing, fintech, edtech, SMBs, and enterprise organizations globally. Our solutions are tailored to each industry's operational and compliance requirements.",
            },
        },
        {
            "@type": "Question",
            name: "How can Salesforce consulting improve my business operations?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our Salesforce consulting services help businesses streamline sales processes, automate workflows, integrate third-party systems, and improve reporting visibility. We focus on measurable ROI by enhancing pipeline forecasting, customer retention, and operational efficiency.",
            },
        },
        {
            "@type": "Question",
            name: "Do you offer AI and machine learning solutions for growing businesses?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. VirtueByte delivers AI and machine learning consulting services including predictive analytics, intelligent automation, and data-driven dashboards. Our AI solutions are designed to improve decision-making, reduce manual processes, and increase operational efficiency.",
            },
        },
        {
            "@type": "Question",
            name: "Can VirtueByte help with cloud migration and infrastructure management?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We provide cloud consulting and migration services across AWS, Azure, and hybrid environments. Our team ensures secure migration, cost optimization, scalable infrastructure, and ongoing performance monitoring to support long-term business growth.",
            },
        },
        {
            "@type": "Question",
            name: "Do you provide dedicated offshore development teams?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer dedicated offshore development teams that work as an extension of your in-house team. Our offshore model helps businesses reduce costs, scale faster, and access specialized technical expertise while maintaining structured communication and transparency.",
            },
        },
        {
            "@type": "Question",
            name: "How do I get started with VirtueByte?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Getting started begins with a discovery consultation where we assess your current technology environment and business goals. Based on this evaluation, we provide a customized roadmap covering strategy, implementation, and measurable KPIs.",
            },
        },
    ],
};

export default function HomePage() {
    return (
        <>
            <HeroImagePreload href={HERO_IMAGES.homeBanner} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HeroSection />
            <VirtuebyteIntro />
            <DeferredSection section="clientLogos" minHeight="200px" />
            <DeferredSection section="partners" minHeight="180px" />
            <DeferredSection section="services" minHeight="320px" />
            <DeferredSection section="techStack" minHeight="280px" />
            <DeferredSection section="newProducts" minHeight="360px" />
            <DeferredSection section="milestones" minHeight="240px" />
            <DeferredSection section="products" minHeight="320px" />
            <DeferredSection section="difference" minHeight="400px" />
            <DeferredSection section="testimonials" minHeight="360px" />
            <DeferredSection section="faq" minHeight="280px" />
            <DeferredSection section="cta" minHeight="200px" />
        </>
    );
}
