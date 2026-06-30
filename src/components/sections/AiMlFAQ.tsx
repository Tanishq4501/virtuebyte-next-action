"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
 {
 question: "What is the cost of AI & ML consulting?",
 answer:
 "The cost varies depending on project complexity, data maturity, infrastructure requirements, and deployment scope. We provide a structured assessment to define budget expectations before implementation begins.",
 },
 {
 question: "What technologies do you use?",
 answer:
 "We work with modern AI frameworks including Python-based ML libraries, cloud AI services, API integrations, and scalable enterprise infrastructure platforms.",
 },
 {
 question: "How long does AI implementation take?",
 answer:
 "Timelines depend on use case complexity. Pilot implementations may take a few weeks, while enterprise-scale AI deployment can range from several weeks to a few months.",
 },
 {
 question: "What outcomes can clients expect?",
 answer:
 "Clients typically experience improved operational efficiency, better forecasting accuracy, reduced manual workload, enhanced customer experience, and measurable ROI.",
 },
 {
 question: "How do I choose the right AI consulting company for my business?",
 answer: "Choosing the right AI consulting partner depends on their industry experience, technical expertise, and ability to deliver measurable ROI. Look for a company that offers end-to-end services - from strategy and model development to deployment and optimization. A reliable provider of AI Consulting Services should also align AI solutions with your specific business goals rather than offering generic implementations."
 },
 {
 question: "Can AI solutions be integrated with my existing business systems?",
 answer: "Yes, modern AI solutions are designed to integrate seamlessly with existing systems such as CRM platforms, ERP software, cloud infrastructure, and data warehouses. Through APIs and cloud-based architectures, AI can enhance your current workflows without disrupting operations."
 },
 {
 question: "Do I need a large amount of data to implement AI in my business?",
 answer: "While having quality data improves AI performance, you don't always need massive datasets to get started. Many AI consulting services begin with available structured data and gradually scale as more data is collected and refined. Data preparation and preprocessing play a key role in maximizing results."
 },
 {
 question: "What industries benefit the most from AI consulting services?",
 answer: "AI consulting delivers value across multiple industries including healthcare, finance, retail, manufacturing, and logistics. Each industry benefits differently - ranging from predictive analytics and automation to customer personalization and operational efficiency improvements."
 },
 {
 question: "How do AI consulting services help improve ROI?",
 answer: "AI consulting services improve ROI by automating repetitive tasks, reducing operational costs, improving decision-making accuracy, and identifying new revenue opportunities. Businesses leveraging AI Consulting Services often see faster processes, better forecasting, and improved customer experiences that directly impact profitability."
 },
 {
 question: "How do AI consulting services help automate business processes?",
 answer: "AI consulting services help automate repetitive and time-consuming business processes by implementing machine learning models, intelligent workflows, and AI-powered systems. This includes automating tasks such as customer support through chatbots, data processing, predictive analysis, and decision-making workflows. With structured AI implementation, businesses can reduce manual effort, improve accuracy, and increase operational efficiency while scaling faster with minimal human intervention."
 }
];

export default function AiMlFAQ() {
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


