"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
    {
        question: "Do you provide dedicated offshore development teams?",
        answer: "Yes, we offer dedicated offshore development teams that work as an extension of your in-house team. With our offshore model, companies can reduce development costs, scale faster, access specialized technical expertise, and accelerate project timelines. We maintain transparent communication, structured reporting, and alignment with your business objectives to ensure seamless collaboration.",
    },
    {
        question: "Can you integrate multiple systems like CRM, cloud, and analytics tools?",
        answer: "Yes, we specialize in end-to-end system integration. Whether it's Salesforce CRM, cloud platforms, analytics tools, or third-party applications, we ensure seamless data flow and connectivity across systems. This creates a unified ecosystem that improves efficiency, reporting accuracy, and business visibility.",
    },
    /* {
        question: "What services does VirtueByte offer as a technology consulting company?",
        answer: "VirtueByte provides end-to-end technology consulting services including Salesforce implementation and CRM optimization, AI and machine learning solutions, cloud migration, DevOps automation, data analytics, and offshore development teams. Our goal is to help businesses build scalable, efficient, and future-ready technology ecosystems."
    },
    {
        question: "How do I know if my business needs a technology consulting partner?",
        answer: "If your business is facing challenges like inefficient workflows, disconnected systems, lack of data visibility, or difficulty scaling operations, a technology consulting partner can help. We assess your current systems and provide a roadmap to improve performance, automation, and overall business efficiency."
    },
    {
        question: "Do you work with startups, mid-sized companies, or enterprise businesses?",
        answer: "We work with startups, growing businesses, and enterprise organizations. Our flexible engagement models allow us to adapt our solutions based on your business size, industry, and growth stage."
    },
    {
        question: "How does VirtueByte approach digital transformation projects?",
        answer: "We follow a structured approach: Discovery, Strategy, Build, Deploy, and Optimize. This ensures that every solution is aligned with your business goals, implemented efficiently, and continuously improved for long-term success."
    },
    {
        question: "Can you customize solutions based on our specific business processes?",
        answer: "Yes, all our solutions are fully customized. We do not use one-size-fits-all approaches. Whether it's CRM customization, AI models, or cloud architecture, everything is tailored to match your business workflows and objectives."
    },
    {
        question: "What makes VirtueByte different from other software development companies?",
        answer: "Our focus is on outcomes, not just implementation. We combine business understanding with technical expertise to deliver measurable results. Our transparent communication, scalable solutions, and long-term partnership approach set us apart."
    },
    {
        question: "How do you ensure the success of a project or implementation?",
        answer: "We define clear KPIs at the beginning of every project and track performance throughout the engagement. Our focus is on measurable outcomes such as improved efficiency, reduced operational costs, faster deployment cycles, and better decision-making."
    },
    {
        question: "Do you provide ongoing support after implementation?",
        answer: "Yes, we offer continuous monitoring, optimization, and support services. Technology evolves, and so should your systems. We ensure your solutions remain efficient, secure, and aligned with your business growth."
    },
    {
        question: "Can you integrate new technologies with our existing systems?",
        answer: "Absolutely. We specialize in integrating modern technologies with existing CRM systems, cloud platforms, and enterprise tools. Our goal is to enhance your current ecosystem without disrupting operations."
    },
    {
        question: "How can offshore development teams benefit my business?",
        answer: "Offshore development teams help reduce costs, accelerate development cycles, and provide access to global talent. With our structured communication and delivery model, you get high-quality output while maintaining transparency and control."
    } */
];

export default function FAQAboutSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
            <div className="relative max-w-[900px] mx-auto">
                <SectionHeading title="Frequently Asked Questions" />
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.05}>
                            <div className="bg-[#1a0e3a] rounded-[15px] border border-[#E5A2FF1A] overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                                >
                                    <h3 className="text-white text-[16px] md:text-[18px] font-semibold pr-4 leading-snug">
                                        {faq.question}
                                    </h3>
                                    <div className="text-primary flex-shrink-0">
                                        {openIndex === index ? (
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

