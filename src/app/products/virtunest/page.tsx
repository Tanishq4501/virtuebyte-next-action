"use client";

import LazyImage from "@/components/ui/LazyImage";
import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconBox from "@/components/ui/IconBox";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaRegClone, FaSearchLocation, FaRegEyeSlash, FaTools, FaUserSecret, FaExclamationTriangle, FaShieldAlt, FaChartBar } from "react-icons/fa";

const accordionItems = [
 { title: "Electrical Inspection", description: "Check electrical panels, wiring, and outlets, including GFCI and AFCI outlets. Inspect lighting fixtures, such as ceiling lights and emergency lighting, along with major appliances like water heaters and HVAC systems" },
 { title: "Plumbing Inspection", description: "Inspect water supply systems, drainage pipes, and water pressure. Evaluate traps, ventilation, and water quality to ensure an efficient and safe plumbing system" },
 { title: "Furniture Inspection", description: "Ensure structural integrity by inspecting frames, supports, and bases. Evaluate upholstery, stitching, and cushioning to ensure durability and comfort" },
 { title: "Exterior Inspection", description: "Assess the roof's condition and check for visible damage or age-related issues. Examine foundations for cracks, walls for water intrusion, windows for proper sealing, and driveways for tripping hazards" },
 { title: "Interior Inspection", description: "Inspect walls, ceilings, and floors for structural issues or water damage. Evaluate plumbing systems for leaks and pipe conditions, check electrical systems for wiring safety, and ensure HVAC systems function efficiently" },
];

const trackCards = [
 {
 title: "Pre-built Templates are Available",
 description: "Electric Inspection, House Inspection, Plumbing Inspection, Roof Inspection, HVAC System Inspection, Safety Inspection",
 icon: <FaRegClone className="w-6 h-6" />,
 },
 {
 title: "Creating a Fully Customized Report",
 description: "Photo Management, Editable Text, Clickable Links, Custom Colors and Borders, Formatting Options, Preview Mode",
 icon: <FaChartBar className="w-6 h-6" />,
 },
 {
 title: "Dashboard for Inspection Tracking",
 description: "Comprehensive Tracking, Information Overview, Data Review, Detailed Insights, Custom Filters and Sorting, Real-Time Update",
 icon: <FaSearchLocation className="w-6 h-6" />,
 },
];

const clarityCards = [
 {
 title: "Identify Problems",
 description: "Find any issues or defects in the property, such as structural problems, faulty systems, or needed repairs",
 icon: <FaRegEyeSlash className="w-6 h-6" />,
 },
 {
 title: "Assess Condition",
 description: "Evaluate the overall condition of the home to understand how well it has been maintained",
 icon: <FaTools className="w-6 h-6" />,
 },
 {
 title: "Inform Buyers",
 description: "Provide buyers with detailed information about the property's condition to help them make an informed decision",
 icon: <FaUserSecret className="w-6 h-6" />,
 },
 {
 title: "Negotiate Repairs",
 description: "Help buyers negotiate with sellers for repairs or price adjustments based on the inspection findings",
 icon: <FaExclamationTriangle className="w-6 h-6" />,
 },
 {
 title: "Ensures Safety",
 description: "Ensure that the home meets safety standards and is free from hazards like electrical faults or plumbing leaks",
 icon: <FaShieldAlt className="w-6 h-6" />,
 },
];

export default function VirtuNestPage() {
 const [openAccordion, setOpenAccordion] = useState<number | null>(0);

 return (
 <>
 <Breadcrumb items={[{ label: "VirtuNest" }]} titleAs="p" />

 {/* Hero */}
 <section className="relative py-[50px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
 <AnimatedSection animation="fadeInLeft">
 <span className="text-primary font-semibold text-sm uppercase tracking-wider">
 Home Inspection Platform
 </span>
 <h1 className="text-[36px] lg:text-[50px] font-semibold text-white font-fira mt-3 mb-6" style={{ lineHeight: '1.3em' }}>
 Comprehensive Solution For Home Inspections
 </h1>
 <p className="text-text-light text-[18px] leading-relaxed">
 This product offers a comprehensive platform for home inspections, streamlining the entire lifecycle. From initial data collection and report generation to seamless collaboration and real-time updates, VirtueNest ensures efficient coordination and flawless delivery for every inspection task
 </p>
 </AnimatedSection>
 <AnimatedSection animation="fadeInRight" delay={0.2}>
 <LazyImage
 src="/images/products/virtunest-hero.webp"
 alt="VirtuNest home inspection platform dashboard preview"
 width={800}
 height={534}
 className="w-full h-auto rounded-[20px]"
 priority
 sizes="(min-width: 1024px) 50vw, 100vw"
 />
 </AnimatedSection>
 </div>
 </div>
 </section>

 {/* Accordion: Multiple Inspections */}
 <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading title="Support for multiple inspections" />
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
 {/* Left: Inspection image */}
 <AnimatedSection animation="fadeInLeft">
 <LazyImage
 src="/images/products/virtunest-inspections.webp"
 alt="VirtuNest interface for managing multiple inspection types"
 width={700}
 height={467}
 className="w-full h-auto rounded-[20px]"
 sizes="(min-width: 1024px) 50vw, 100vw"
 />
 </AnimatedSection>
 {/* Right: Accordion */}
 <div className="space-y-3">
 {accordionItems.map((item, index) => (
 <AnimatedSection key={index} animation="fadeIn" delay={index * 0.1}>
 <div className={`rounded-[20px] border border-[#E5A2FF0A] overflow-hidden ${openAccordion === index? "bg-[#6B3FA0]" : "bg-[#E5A2FF0A]"}`}>
 <button
 className="w-full flex items-center justify-between p-5 text-left hover:bg-[#E5A2FF14] transition-colors"
 onClick={() => setOpenAccordion(openAccordion === index? null : index)}
 >
 <span className={`font-semibold font-fira ${openAccordion === index? "text-primary" : "text-white"}`}>{item.title}</span>
 {openAccordion === index? (
 <FiChevronUp className="w-5 h-5 text-primary" />
 ) : (
 <FiChevronDown className="w-5 h-5 text-primary" />
 )}
 </button>
 <div
 className={`overflow-hidden transition-all duration-300 ${
 openAccordion === index? "max-h-60 opacity-100" : "max-h-0 opacity-0"
 }`}
 >
 <p className="px-5 pb-5 text-text-light text-[18px] leading-relaxed">
 {item.description}
 </p>
 </div>
 </div>
 </AnimatedSection>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* Track Operations */}
 <section className="relative py-[50px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading title="Track Your Home Inspection Operations" />
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {trackCards.map((card, index) => (
 <IconBox
 key={index}
 title={card.title}
 description={card.description}
 icon={card.icon}
 delay={index * 0.15}
 />
 ))}
 </div>
 </div>
 </section>

 {/* Clarity At Every Stage */}
 <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading title="Clarity At Every Stage of Inspection" />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 {clarityCards.map((card, index) => (
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

