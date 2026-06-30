"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
 {
 question: "What is DevOps consulting?",
 answer:
 "DevOps consulting helps organizations streamline software development and IT operations through automation, CI/CD implementation, infrastructure as code, and cultural transformation - resulting in faster releases, fewer failures, and improved collaboration.",
 },
 {
 question: "How long does it take to implement DevOps?",
 answer:
 "Initial pipeline setup and CI/CD integration can take 4-8 weeks. Full DevOps transformation - including automation, monitoring, and culture alignment - may take 3-6 months depending on the organization's size and existing infrastructure.",
 },
 {
 question: "Which tools do you use for DevOps?",
 answer:
 "We work with industry-standard tools including Jenkins, GitLab CI/CD, GitHub Actions, Docker, Kubernetes, Terraform, Ansible, Prometheus, Grafana, and cloud-native services from AWS, Azure, and GCP.",
 },
 {
 question: "Can DevOps work with legacy systems?",
 answer:
 "Yes. We help modernize legacy environments by introducing containerization, automated testing, and incremental CI/CD pipelines - enabling DevOps benefits without requiring a full system rewrite.",
 },
 {
 question: "What industries benefit most from DevOps?",
 answer:
 "DevOps benefits any industry that relies on software delivery - including healthcare, finance, retail, manufacturing, and logistics. Any organization seeking faster releases, improved reliability, and reduced operational costs can benefit.",
 },
 {
 question: "How do you measure DevOps success?",
 answer:
 "We track key DORA metrics including deployment frequency, lead time for changes, change failure rate, and mean time to recovery (MTTR). We also monitor infrastructure costs, uptime, and team velocity improvements.",
 },
 {
 question: "What makes DevOps Consulting Services different from other regions?",
 answer: "DevOps Consulting Services are often tailored for fast-growing startups and enterprise tech companies that require rapid deployment, cloud scalability, and automation. Businesses in this market prioritize agile delivery, CI/CD pipelines, and cloud-native architectures, which is why our solutions focus on speed, reliability, and scalability."
 },
 {
 question: "How can DevOps consulting help reduce cloud infrastructure costs?",
 answer: "DevOps consulting helps optimize cloud usage through automation, infrastructure as code, and continuous monitoring. By eliminating resource waste, improving scaling strategies, and automating deployments, businesses can significantly reduce operational costs while maintaining high performance."
 },
 {
 question: "Do you provide DevOps support for startups as well as enterprise companies?",
 answer: "Yes. Our DevOps consulting services are designed for both startups and enterprise organizations. Startups benefit from faster go-to-market strategies and scalable infrastructure, while enterprises gain improved system reliability, automation, and streamlined operations."
 },
 {
 question: "How do I know if my business needs DevOps consulting services?",
 answer: "If your business is facing slow deployments, frequent system failures, lack of automation, or difficulty scaling infrastructure, it's a strong indicator that you need DevOps consulting. Companies looking to adopt cloud technologies, CI/CD pipelines, or improve development efficiency can benefit significantly from DevOps transformation."
 }
];

export default function DevOpsFAQ() {
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


