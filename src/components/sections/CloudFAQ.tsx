"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
 {
 question: "What is cloud consulting?",
 answer:
 "Cloud consulting helps businesses plan, migrate, and optimize their infrastructure using cloud platforms to improve scalability, security, and performance.",
 },
 {
 question: "How much does cloud migration cost?",
 answer:
 "Cloud migration costs depend on infrastructure size, application complexity, and compliance requirements. We provide customized assessments to estimate accurate project budgets.",
 },
 {
 question: "How long does cloud implementation take?",
 answer:
 "Timelines vary based on scope. Small migrations may take a few weeks, while enterprise cloud transformation projects can take several months.",
 },
 {
 question: "Which cloud platforms do you support?",
 answer:
 "We support AWS, Microsoft Azure, and multi-cloud environments, along with container-based deployments using Kubernetes.",
 },
 {
 question: "How do you ensure cloud security and compliance?",
 answer:
 "We implement encryption, access controls, compliance frameworks, continuous monitoring, and governance policies to ensure secure cloud operations.",
 },
 {
 question: "What are Cloud Consulting Services businesses typically look for?",
 answer: "Businesses usually look for end-to-end support including cloud strategy, migration, cost optimization, DevOps automation, and ongoing infrastructure management. The goal is to improve scalability, reduce costs, and ensure secure cloud operations aligned with business growth."
 },
 {
 question: "How do I know if my business is ready for cloud migration?",
 answer: "Cloud readiness depends on your current infrastructure, application architecture, data sensitivity, and business goals. A cloud readiness assessment helps identify gaps, risks, and the best migration strategy to ensure a smooth transition without disrupting operations."
 },
 {
 question: "What is the difference between cloud migration and cloud modernization?",
 answer: "Cloud migration involves moving applications and infrastructure to the cloud, while cloud modernization focuses on optimizing and transforming those applications using cloud-native technologies like microservices, containers, and serverless architecture for better performance and scalability."
 },
 {
 question: "Can cloud solutions help reduce long-term IT costs?",
 answer: "Yes. Cloud solutions eliminate the need for heavy upfront hardware investments and allow businesses to pay only for what they use. With proper cost optimization strategies, organizations can significantly reduce operational expenses while improving efficiency."
 },
 {
 question: "Do you provide ongoing cloud support and optimization after deployment?",
 answer: "Absolutely. Continuous monitoring, performance optimization, security updates, and cost management are critical for long-term success. Ongoing cloud support ensures your infrastructure remains efficient, secure, and aligned with evolving business needs."
 }
];

export default function CloudFAQ() {
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

