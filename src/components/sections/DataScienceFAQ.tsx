"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
 {
 question: "What is the cost of data science & analytics consulting?",
 answer: "Costs vary depending on scope, data complexity, and infrastructure requirements. We provide customized proposals after assessing your business needs and objectives."
 },
 {
 question: "What technologies or tools do you use?",
 answer: "We work with modern analytics stacks including Python, R, SQL, Power BI, Tableau, AWS analytics tools, Azure analytics services, and enterprise data warehouse platforms."
 },
 {
 question: "How long does implementation take?",
 answer: "Timelines depend on project scope. Small analytics deployments may take 4-8 weeks, while enterprise-scale transformations may require phased implementation over several months."
 },
 {
 question: "What business outcomes can clients expect?",
 answer: "Clients typically experience improved forecasting accuracy, operational efficiency, cost reduction, revenue optimization, and enhanced customer intelligence."
 },
 {
 question: "How do you ensure data quality and security?",
 answer: "We implement strong data governance frameworks, validation testing, encryption protocols, and compliance standards to maintain data integrity and security."
 },
 {
 question: "Do you provide customized Data Analytics Services for different industries?",
 answer: "Yes, our data analytics services are fully customized based on your industry, business model, and data maturity level. Whether you're in healthcare, finance, retail, or logistics, we design tailored analytics solutions that align with your operational goals, compliance requirements, and growth strategy."
 },
 {
 question: "How do Data Science Services help improve business decision-making?",
 answer: "Data science services enable businesses to move from guesswork to data-driven decisions. By using predictive analytics, real-time dashboards, and machine learning models, organizations can identify trends, forecast outcomes, and make faster, more accurate strategic decisions."
 },
 {
 question: "Can you integrate data analytics solutions with our existing systems?",
 answer: "Absolutely. We specialize in integrating analytics solutions with your existing CRM, ERP, cloud platforms, and third-party tools. Our team ensures seamless data flow, minimal disruption, and improved system performance through secure API integrations and modern data pipelines."
 },
 {
 question: "What types of data can you work with for analytics projects?",
 answer: "We work with structured, semi-structured, and unstructured data, including customer data, transaction data, operational data, IoT data, and third-party datasets. Our team ensures proper data cleaning, transformation, and modeling to extract meaningful insights regardless of data complexity."
 },
 {
 question: "How do you measure the success of data analytics implementation?",
 answer: "We measure success based on clear KPIs such as improved decision-making speed, increased operational efficiency, cost reduction, revenue growth, and enhanced customer insights. Our ROI-driven approach ensures that every analytics solution delivers measurable business value."
 }
];

export default function DataScienceFAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section className="relative py-[50px] overflow-hidden">
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


