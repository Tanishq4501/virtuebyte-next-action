import { Metadata } from "next";
import LazyImage from "@/components/ui/LazyImage";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroImagePreload from "@/components/ui/HeroImagePreload";
import { HERO_IMAGES } from "@/lib/hero-images";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { getCanonicalUrl } from "@/lib/seo";
import {
    FaBullseye,
    FaCheckCircle,
    FaHandshake,
    FaSyncAlt,
    FaSearch,
    FaRoute,
    FaTools,
    FaRocket,
    FaChartLine,
    FaShieldAlt,
    FaComments,
} from "react-icons/fa";
import FAQAboutSection from "@/components/sections/FAQAboutSection";
import OurApproachSection from "@/components/sections/OurApproachSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import EngagementModelSection from "@/components/sections/EngagementModelSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import LifeAtVirtuebyteSection from "@/components/sections/LifeAtVirtuebyteSection";
import VisionSection from "@/components/sections/VisionSection";
import DifferenceSection2 from "@/components/sections/DifferenceSection2";

export const metadata: Metadata = {
    title: "About Us | VirtueByte - Trusted Technology Consulting Partner",
    description:
        "Learn how VirtueByte helps businesses grow with Salesforce, AI, cloud, DevOps, and data consulting focused on measurable outcomes.",
    alternates: {
        canonical: getCanonicalUrl("/about/"),
    },
};

const coreValues = [
    {
        icon: FaBullseye,
        title: "Client-Centric Thinking",
        description:
            "We start solving problems by first understanding your business goals, not just the technical aspects.",
        image: "/images/about/commitments.webp",
    },
    {
        icon: FaCheckCircle,
        title: "Quality & Precision",
        description:
            "We build solutions that are scalable, secure, and performance-driven.",
        image: "/images/about/collaboration.webp",
    },
    {
        icon: FaHandshake,
        title: "Integrity & Transparency",
        description:
            "Clear communication, realistic timelines, and structured reporting define our engagement process.",
        image: "/images/about/transparency.webp",
    },
    {
        icon: FaSyncAlt,
        title: "Continuous Improvement",
        description:
            "With such a rapid evolution of technology, we continuously refine and optimize systems to ensure performance and relevance.",
        image: "/images/about/continuity.gif",
    },
];

const methodologySteps = [
    {
        icon: FaSearch,
        title: "Discovery",
        description:
            "We evaluate your existing technology environment, operational challenges, and growth strategy.",
    },
    {
        icon: FaRoute,
        title: "Strategy",
        description:
            "We outline a practical roadmap aligned with your business KPIs.",
    },
    {
        icon: FaTools,
        title: "Build",
        description: "Our team builds and configures tailored solutions.",
    },
    {
        icon: FaRocket,
        title: "Deploy",
        description:
            "We ensure smooth implementation with minimal disruption.",
    },
    {
        icon: FaChartLine,
        title: "Optimize",
        description:
            "We continuously monitor performance and implement changes to drive higher ROI.",
    },
];

const whyChooseItems = [
    { icon: FaBullseye, text: "Outcome-driven execution" },
    { icon: FaShieldAlt, text: "Scalable and secure architecture" },
    { icon: FaChartLine, text: "Measurable performance improvements" },
    { icon: FaComments, text: "Transparent communication" },
    { icon: FaHandshake, text: "Long-term partnership mindset" },
];

const galleryImages = [
    "/images/about/life-1.webp",
    "/images/about/life-2.webp",
    "/images/about/life-3.webp",
    "/images/about/life-4.webp",
];

export default function AboutPage() {
    return (
        <>
            <HeroImagePreload href={HERO_IMAGES.aboutHero} />
            <Breadcrumb items={[{ label: "About Us" }]} />

            {/* Hero Section */}
            <section className="relative py-[50px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        <AnimatedSection animation="fadeInLeft">
                            <h2
                                className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-4"
                                style={{ lineHeight: "1.3em" }}
                            >
                                A Trusted Technology Consulting Partner for Growth-Focused
                                Businesses
                            </h2>
                            <p className="text-primary text-[16px] md:text-[18px] italic mb-6">
                                Technology should empower growth, not create complexity.
                            </p>
                            <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-4 text-justify">
                                VirtueByte is a technology consulting and digital transformation company that assists businesses in modernizing their operations via Salesforce consulting, AI, based automation, cloud infrastructure, DevOps engineering, and data analytics. As a growing software development company businesses trust, we focus on building scalable and future-ready technology ecosystems.
                            </p>
                            <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify">
                                We partner with growth-focused organizations that want scalable
                                systems, streamlined workflows, and measurable business
                                outcomes. Our work goes beyond implementation - we design
                                intelligent technology ecosystems that evolve with your company.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInRight" delay={0.2} className="h-full">
                            <div className="relative h-full min-h-[320px] rounded-[20px] overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#E5A2FF0A_65%,#FFFFFF00_50%)] opacity-100 pointer-events-none z-10" />
                                <LazyImage
                                    src="/images/about/about-hero.webp"
                                    alt="Technology consulting team workspace and modern office environment"
                                    fill
                                    className="object-cover rounded-[20px]"
                                    priority
                                    sizes="(min-width: 1024px) 45vw, 100vw"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="relative py-[80px] bg-[--color-dark-2] overflow-hidden">
                {/* Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_60%)] opacity-20 pointer-events-none" />

                <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8 text-center">

                    {/* Heading */}
                    <AnimatedSection animation="fadeInUp">
                        <div className="mb-6 flex flex-col items-center">
                            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-white font-fira leading-[1.2] max-w-[700px] mx-auto">
                                Who We Are
                            </h2>
                        </div>
                    </AnimatedSection>

                    {/* Content */}
                    <AnimatedSection animation="fadeInUp" delay={0.1}>
                        <div className="space-y-5 max-w-[750px] mx-auto">
                            <p className="text-[16px] sm:text-[18px] md:text-[19px] leading-[1.6] text-[#E0E0E0]">
                                Virtuebyte is a technology-driven company providing IT consulting
                                services and custom software development solutions to businesses across industries.
                            </p>

                            <p className="text-[16px] sm:text-[18px] md:text-[19px] leading-[1.6] text-[#E0E0E0]">
                                We help organisations leverage
                                <span className="text-white"> CRM solutions</span>, including
                                <span className="text-white"> Salesforce</span>, along with
                                <span className="text-white"> AI</span>,
                                <span className="text-white"> cloud technologies</span>, and
                                <span className="text-white"> data-driven systems</span> to streamline operations,
                                improve efficiency, and enable scalable business growth.
                            </p>
                        </div>
                    </AnimatedSection>

                </div>
            </section>

            <div className="relative z-10">
                <OurApproachSection sectionClass="bg-[--color-primary-light] bg-opacity-30" />
            </div>

                         <WhatWeDoSection />
 
            <IndustriesSection />

            <EngagementModelSection />

            <DifferenceSection2 />


            <LifeAtVirtuebyteSection galleryImages={galleryImages} />

            <VisionSection />

            {/* Vision & Mission */}
            {/* <section className="relative py-[80px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedSection animation="fadeInLeft">
                            <div className="relative bg-[#E5A2FF0A] rounded-[20px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all h-full hover-bob">
                                <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                                <LazyImage
                                    src="/images/about/vision.webp"
                                    alt="Vision concept for digital transformation and long-term growth"
                                    width={600}
                                    height={400}
                                    className="w-full h-56 md:h-[297px] object-cover rounded-[20px] relative"
                                />
                                <div className="relative p-5 pb-5">
                                    <h3 className="text-[24px] font-semibold font-fira text-white mb-3 leading-[1.4em]">
                                        VISION
                                    </h3>
                                    <p className="text-text-light text-[18px] leading-relaxed">
                                        We aspire to become a trusted global partner helping
                                        businesses transform operations through scalable,
                                        intelligent, and secure digital solutions.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInRight" delay={0.2}>
                            <div className="relative bg-[#E5A2FF0A] rounded-[20px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all h-full hover-bob">
                                <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                                <LazyImage
                                    src="/images/about/mission.webp"
                                    alt="Mission concept showing strategic implementation and measurable outcomes"
                                    width={600}
                                    height={400}
                                    className="w-full h-56 md:h-[297px] object-cover rounded-[20px] relative"
                                />
                                <div className="relative p-5 pb-5">
                                    <h3 className="text-[24px] font-semibold font-fira text-white mb-3 leading-[1.4em]">
                                        MISSION
                                    </h3>
                                    <p className="text-text-light text-[18px] leading-relaxed">
                                        To design, implement, and optimize technology ecosystems
                                        that drive efficiency, reduce operational friction, and
                                        create sustainable growth for our clients.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <AnimatedSection animation="fadeInUp" delay={0.3}>
                        <p className="text-primary text-center italic text-[16px] md:text-[18px] mt-8">
                            We believe technology should simplify workflows, enhance
                            visibility, and empower leadership teams with actionable insights.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
 */}
            {/* Core Values */}
            {/*            <section className="relative py-[70px] bg-[#E5A2FF0A] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <SectionHeading
                        title="Our Core Values"
                        subtitle="Our work is guided by principles that ensure consistency and long-term partnerships."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
                        {coreValues.map((value, index) => (
                            <AnimatedSection
                                key={value.title}
                                animation="fadeInUp"
                                delay={index * 0.1}
                            >
                                <div className="group relative bg-[#E5A2FF0A] rounded-[18px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_25px_rgba(0,0,0,0.35)] transition-all duration-300 h-full flex flex-col">

                                    <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[18px]" />

                                    <div className="relative h-40 md:h-44 overflow-hidden rounded-t-[18px]">
                                        <LazyImage
                                            src={value.image}
                                            alt={`${value.title} core value illustration`}
                                            fill
                                            className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="relative p-5 flex flex-col flex-1">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <value.icon className="text-primary text-xl flex-shrink-0" />

                                            <h3 className="text-[18px] md:text-[20px] font-semibold font-fira text-white leading-[1.3em]">
                                                {value.title}
                                            </h3>
                                        </div>

                                        <p className="text-text-light text-[15px] md:text-[16px] leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
 */}
            {/* Expertise & Approach */}
            {/*          <section className="relative py-[80px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <SectionHeading
                        title="Our Expertise & Approach"
                        subtitle="VirtueByte combines deep technical specialization with practical business understanding. As a modern Software Development Company enterprises rely on, we deliver integrated solutions that align with evolving business needs."
                    />
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection animation="fadeInUp">
                            <h3 className="text-[18px] md:text-[20px] font-semibold text-white font-fira mb-6">
                                Our expertise spans:
                            </h3>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Salesforce implementation, customization, and integration",
                                    "AI-driven automation and predictive analytics",
                                    "Secure cloud infrastructure across AWS and Azure",
                                    "Data engineering, reporting, and business intelligence",
                                    "DevOps automation and CI/CD implementation",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                        <span className="text-text-light text-[16px] md:text-[18px] leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInUp" delay={0.2}>
                            <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF1A] p-8">
                                <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                                <p className="relative text-text-light text-[16px] md:text-[18px] leading-relaxed text-center">
                                    Rather than offering isolated services, we develop integrated
                                    technological frameworks that allow businesses to grow and
                                    scale sustainably over time.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
 */}
            {/* Methodology */}
            {/*           <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_bottom_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <SectionHeading
                        title="Our Methodology"
                        subtitle="Our structured framework maintains clarity, alignment, and measurable success throughout the process."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {methodologySteps.map((step, index) => (
                            <AnimatedSection
                                key={step.title}
                                animation="fadeInUp"
                                delay={index * 0.1}
                            >
                                <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 text-center h-full hover-bob">
                                    <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                            <step.icon className="text-primary text-2xl" />
                                        </div>
                                        <span className="text-primary font-fira text-sm font-semibold">
                                            Step {index + 1}
                                        </span>
                                        <h3 className="text-[18px] font-semibold font-fira text-white mt-1 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-text-light text-[15px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection animation="fadeInUp" delay={0.6}>
                        <p className="text-primary text-center italic text-[16px] md:text-[18px] mt-8">
                            This disciplined approach enables us to deliver predictable,
                            outcome-driven results.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
 */}
            {/* Engagement Model */}
            {/*       <section className="relative py-[80px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <SectionHeading
                        title="Our Engagement Model"
                        subtitle="We offer flexible collaboration models designed for modern businesses."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Project-Based Consulting",
                            "Long-Term Digital Transformation Partnerships",
                            "Dedicated Offshore Development Teams",
                            "Ongoing Optimization & Managed Support",
                        ].map((model, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fadeInUp"
                                delay={index * 0.1}
                            >
                                <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 text-center h-full hover-bob">
                                    <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                                    <div className="relative">
                                        <span className="text-primary font-fira text-3xl font-bold">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-white text-[18px] font-semibold font-fira mt-3">
                                            {model}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection animation="fadeInUp" delay={0.5}>
                        <p className="text-text-light text-center text-[16px] md:text-[18px] mt-8 max-w-3xl mx-auto">
                            Our hybrid delivery model helps companies keep up the pace while
                            maintaining quality and transparency.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
 */}
            {/* Team & Culture */}
            {/*      <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <SectionHeading
                        title="Our Team & Culture"
                        subtitle="Behind every successful digital transformation is a capable and accountable team."
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="fadeInLeft">
                            <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-6 text-justify">
                                Our professionals bring experience in various fields such as
                                CRM, AI, cloud computing, DevOps, and enterprise architecture.
                            </p>
                            <h3 className="text-[20px] font-semibold text-white font-fira mb-4">
                                We focus on:
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Ongoing technical upskilling",
                                    "Cloud and platform certifications",
                                    "Agile project management",
                                    "Cross-functional collaboration",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-primary mt-1.5 text-sm">{"\u2726"}</span>
                                        <span className="text-text-light text-[16px] md:text-[18px]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mt-6 text-justify">
                                We foster a culture of accountability, ownership, and long-term
                                partnership. Our team doesn&apos;t just deliver projects - we
                                build systems that evolve with your business.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInRight" delay={0.2}>
                            <div className="grid grid-cols-2 gap-[10px]">
                                {galleryImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className="relative h-48 rounded-[20px] overflow-hidden group"
                                    >
                                        <LazyImage
                                            src={img}
                                            alt={`Life at VirtueByte ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-[800ms] group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms]" />
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
 */}
            {/* Why Organizations Choose VirtueByte */}
            {/*         <section className="relative py-[80px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <SectionHeading
                        title="Why Organizations Choose VirtueByte"
                        subtitle="Technology consulting should result in clarity, increased performance, and confidence."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {whyChooseItems.map((item, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fadeInUp"
                                delay={index * 0.1}
                            >
                                <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 text-center h-full hover-bob">
                                    <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                                    <div className="relative">
                                        <item.icon className="text-primary text-3xl mx-auto mb-3" />
                                        <p className="text-white text-[16px] font-semibold font-fira">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

     */}        {/* Technology Partnerships */}
            {/* <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
                <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                    <SectionHeading
                        title="Technology Partnerships & Ecosystem Expertise"
                        subtitle="We work across top enterprise platforms and cloud ecosystems to deliver robust, future-ready solutions."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Salesforce Ecosystem Solutions",
                                image: "/images/services/salesforce-implementation.webp",
                            },
                            {
                                title: "Cloud Infrastructure Across AWS & Azure",
                                image: "/images/services/cloud-services.webp",
                            },
                            {
                                title: "DevOps & CI/CD Automation Frameworks",
                                image: "/images/services/cicd.webp",
                            },
                            {
                                title: "Data Analytics & Reporting Platforms",
                                image: "/images/services/ai-ml-consulting.webp",
                            },
                        ].map((item, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fadeInUp"
                                delay={index * 0.1}
                            >
                                <div className="relative bg-[#E5A2FF0A] rounded-[20px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 h-full group hover-bob">
                                    <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                                    <div className="relative h-40 overflow-hidden rounded-t-[20px]">
                                        <LazyImage
                                            src={item.image}
                                            alt={`${item.title} technology partnership illustration`}
                                            fill
                                            className="object-cover transition-transform duration-[800ms] group-hover:scale-110"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                    <div className="relative p-5 text-center">
                                        <span className="text-primary text-sm">{"\u2726"}</span>
                                        <p className="text-white text-[18px] font-semibold font-fira mt-2">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection animation="fadeInUp" delay={0.5}>
                        <p className="text-text-light text-center text-[16px] md:text-[18px] mt-8 max-w-3xl mx-auto">
                            Our commitment to continuous learning ensures that our clients
                            benefit from current best practices and evolving industry
                            standards.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
 */}
                <FAQAboutSection />

           {/* CTA Section */}
            <section className="relative py-[80px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
                <div className="relative max-w-[900px] mx-auto px-5 lg:px-8 text-center">
                    <AnimatedSection animation="fadeInUp">
                        <h2
                            className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-white font-fira mb-6 leading-[1.25]"
                            style={{ lineHeight: "1.3em" }}
                        >
                            Let&apos;s Build Technology That Moves Your Business Forward
                        </h2>
                        <div className="max-w-3xl mx-auto text-left space-y-4 mb-8">
                            <p
                                className="text-text-light text-[15px] sm:text-[16px] md:text-[18px] leading-[1.7] break-words"
                                style={{ textAlign: "left", wordSpacing: "normal", letterSpacing: "normal" }}
                            >
                                Whether you&apos;re implementing Salesforce, adopting AI
                                automation, migrating infrastructure to the cloud, or expanding
                                development capacity - VirtueByte is ready to support your
                                journey.
                            </p>
                            <p
                                className="text-text-light text-[15px] sm:text-[16px] md:text-[18px] leading-[1.7] break-words"
                                style={{ textAlign: "left", wordSpacing: "normal", letterSpacing: "normal" }}
                            >
                                Combining deep business understanding and high engineering
                                accuracy, we make sure that your systems are not only fit for
                                today but also capable of continuous growth.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
                        >
                            Request a Strategic Consultation
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}


