import React from "react";
import { Metadata } from "next";
import LazyImage from "@/components/ui/LazyImage";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HeroImagePreload from "@/components/ui/HeroImagePreload";
import { HERO_IMAGES } from "@/lib/hero-images";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconBox from "@/components/ui/IconBox";
import { getCanonicalUrl } from "@/lib/seo";
import { FaCheckCircle } from "react-icons/fa";
import { MdGroups, MdTimer, MdAccountTree, MdBuild, MdVerifiedUser, MdShield } from "react-icons/md";

export const metadata: Metadata = {
 title: "VirtuElite - Event Management Platform",
 description:
 "All-in-one solution for efficient event management. Manage event planning, vendors, budgets, attendees, and more.",
 alternates: {
 canonical: getCanonicalUrl("/products/virtuelite/"),
 },
};

const featureListCol1 = [
 "Task Management",
 "Report Generation",
 "Web & Mobile Application",
 "Centralized DB for Invoice Generation",
];

const featureListCol2 = [
 "Proposal Creation",
 "AI-Based Notification",
 "Event Creation & Management",
 "User Management System",
];

const operationsCards = [
 {
 title: "Improved Communication and Alignment",
 description:
 "Ensures clear and seamless communication across teams and stakeholders, eliminating misunderstandings and delays",
 icon: <MdGroups className="w-6 h-6" />,
 },
 {
 title: "Time-Saving Automation",
 description:
 "Automates repetitive tasks and processes, significantly reducing manual effort and speeding up workflows",
 icon: <MdTimer className="w-6 h-6" />,
 },
 {
 title: "Effortless Multi-Event Management",
 description:
 "Simplifies the management of multiple events with a centralized platform, offering clear oversight and control",
 icon: <MdAccountTree className="w-6 h-6" />,
 },
 {
 title: "Scalable and Customizable Solutions",
 description:
 "Adapts easily to events of any size, offering flexible customization to meet diverse client needs",
 icon: <MdBuild className="w-6 h-6" />,
 },
 {
 title: "Streamlined Vendor Management",
 description:
 "Enhances vendor coordination with integrated tools, ensuring smooth and efficient collaboration throughout the event",
 icon: <MdVerifiedUser className="w-6 h-6" />,
 },
 {
 title: "Enhanced Compliance and Data Security",
 description:
 "Protects sensitive information with advanced security protocols and ensures full regulatory compliance",
 icon: <MdShield className="w-6 h-6" />,
 },
];

export default function VirtuElitePage() {
 return (
 <>
 <HeroImagePreload href={HERO_IMAGES.virtueliteHero} />
 <Breadcrumb items={[{ label: "VirtuElite" }]} titleAs="p" />

 {/* Hero */}
 <section className="relative py-[50px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <AnimatedSection animation="fadeInLeft">
 <span className="text-primary font-semibold text-sm uppercase tracking-wider">
 Event Management Platform
 </span>
 <h1 className="text-[36px] lg:text-[50px] font-semibold text-white font-fira mt-3 mb-6" style={{ lineHeight: '1.3em' }}>
 All-in-One Solution For Event Management
 </h1>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed">
 Our software offers comprehensive event planning, streamlining
 the entire event lifecycle. From planning and execution to
 post-event analysis, our solution provides a one-stop platform
 that ensures efficient coordination, seamless communication, and
 flawless event delivery
 </p>
 </AnimatedSection>
 <AnimatedSection animation="fadeInRight" delay={0.2}>
 <LazyImage
 src="/images/products/virtuelite-laptop.webp"
 alt="VirtuElite event management platform dashboard on laptop"
 width={600}
 height={400}
 className="w-full h-auto rounded-[20px]"
 priority
 sizes="(min-width: 1024px) 50vw, 100vw"
 />
 </AnimatedSection>
 </div>
 </div>
 </section>

 {/* Making Every Event Success */}
 <section className="relative py-[50px] overflow-hidden">
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading title="Making Every Event Success" />
 <AnimatedSection animation="fadeIn">
 <div className="bg-white rounded-[20px] p-6 md:p-10 max-w-4xl mx-auto">
 <LazyImage
 src="/images/products/virtuelite-workflow.webp"
 alt="VirtuElite workflow diagram for event planning lifecycle"
 width={800}
 height={286}
 className="w-full h-auto"
 sizes="(max-width: 1024px) 100vw, 800px"
 />
 </div>
 </AnimatedSection>
 </div>
 </section>

 {/* Simplify Event Management Workflow */}
 <section className="relative py-[50px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <AnimatedSection animation="fadeInLeft">
 <LazyImage
 src="/images/products/virtuelite-features.webp"
 alt="VirtuElite feature overview for event operations"
 width={600}
 height={400}
 className="w-full h-auto rounded-[20px]"
 sizes="(min-width: 1024px) 50vw, 100vw"
 />
 </AnimatedSection>
 <AnimatedSection animation="fadeInRight" delay={0.2}>
 <h2
 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-6"
 style={{ lineHeight: "1.3em" }}
 >
 Simplify Event Management Workflow
 </h2>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-8">
 VirtuElite offers a range of powerful features designed to
 streamline event planning, including centralized invoice
 generation, task management, and seamless communication across
 teams
 </p>
 <div className="bg-[#E5A2FF0A] rounded-[20px] p-6 border border-[#E5A2FF0A]">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
 {featureListCol1.map((item, index) => {
 const col2Item = featureListCol2[index];
 return (
 <React.Fragment key={index}>
 <div className="flex items-start gap-3">
 <FaCheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
 <span className="text-text-light text-[16px] md:text-[18px]">
 {item}
 </span>
 </div>
 <div className="flex items-start gap-3">
 <FaCheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
 <span className="text-text-light text-[16px] md:text-[18px]">
 {col2Item}
 </span>
 </div>
 </React.Fragment>
 );
 })}
 </div>
 </div>
 </AnimatedSection>
 </div>
 </div>
 </section>

 {/* Daily Operations */}
 <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading
 title="Manage Daily Operations Efficiently"
 />
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {operationsCards.map((card, index) => (
 <IconBox
 key={index}
 title={card.title}
 description={card.description}
 icon={card.icon}
 delay={index * 0.1}
 />
 ))}
 </div>
 </div>
 </section>
 </>
 );
}

