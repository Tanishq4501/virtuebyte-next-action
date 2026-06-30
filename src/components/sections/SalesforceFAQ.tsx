"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
 {
 question: "What is included in Salesforce implementation services?",
 answer: "Our Salesforce implementation services include CRM setup, customization, automation workflows, integrations, data migration, reporting configuration, and ongoing support including Salesforce CRM support services in."
 },
 {
 question: "Can Salesforce be customized to fit our business processes?",
 answer: "Yes. We provide Salesforce custom solutions and advanced Salesforce customization solutions that tailor objects, workflows, dashboards, and automation to match your specific processes."
 },
 {
 question: "Do you provide AppExchange app integration and custom development?",
 answer: "Yes. We implement AppExchange apps, build custom Lightning components, and provide Salesforce integration services for seamless connectivity."
 },
 {
 question: "Do you provide ongoing Salesforce CRM support after implementation?",
 answer: "Yes, we offer continuous Salesforce CRM support services to ensure your system evolves with your business. This includes performance optimization, feature enhancements, user support, and regular system updates to keep your CRM efficient and scalable."
 },
 {
 question: "Can you integrate Salesforce with our existing tools and platforms?",
 answer: "Absolutely. We specialize in Salesforce integration services, connecting your CRM with ERP systems, marketing automation tools, finance software, and third-party applications. This ensures seamless data flow and improved operational efficiency across your organization."
 },
 {
 question: "How do you ensure user adoption during Salesforce implementation?",
 answer: "We focus heavily on user adoption by providing customized training, intuitive UI configurations, and workflow alignment based on your team's daily operations. Our goal is to make Salesforce easy to use so your team can quickly adapt and maximize productivity."
 },
 {
 question: "Do you offer Salesforce AI and analytics capabilities?",
 answer: "Yes, we implement advanced Salesforce AI services and analytics solutions to help businesses gain predictive insights, automate decision-making, and improve forecasting accuracy. This enables smarter business strategies and data-driven growth."
 },
 {
 question: "Is Salesforce suitable for small and mid-sized businesses, or only enterprises?",
 answer: "Salesforce is highly scalable and works for startups, SMBs, and enterprises alike. We customize Salesforce solutions based on your business size, processes, and growth goals, ensuring you get maximum value regardless of your company stage."
 },
 {
 question: "How long does Salesforce implementation take for a business like ours?",
 answer: "The timeline for Salesforce implementation depends on your business size, complexity, and customization requirements. A basic setup can take a few weeks, while more advanced implementations involving integrations, automation, and Salesforce analytics solutions in may take several months. We follow a structured implementation approach to ensure faster deployment, minimal disruption, and long-term scalability."
 }
];

export default function SalesforceFAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[900px] mx-auto">
 <SectionHeading title="Frequently Asked Questions" />
 <div className="space-y-4">
 {faqs.map((faq, index) => (
 <AnimatedSection
 key={index}
 animation="fadeInUp"
 delay={index * 0.05}
 >
 <div className="bg-[#1a0e3a] rounded-[15px] border border-[#E5A2FF1A] overflow-hidden">
 <button
 onClick={() =>
 setOpenIndex(openIndex === index? null : index)
 }
 className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
 >
 <h3 className="text-white text-[16px] md:text-[18px] font-semibold pr-4 leading-snug">
 {faq.question}
 </h3>
 <div className="text-primary flex-shrink-0">
 {openIndex === index? (
 <FiChevronUp className="w-5 h-5" />
 ) : (
 <FiChevronDown className="w-5 h-5" />
 )}
 </div>
 </button>
 {openIndex === index && (
 <div className="px-5 pb-5">
 <p className="text-text-light text-[15px] leading-relaxed">
 {faq.answer}
 </p>
 </div>
 )}
 </div>
 </AnimatedSection>
 ))}
 </div>
 </div>
 </section>
 );
}


