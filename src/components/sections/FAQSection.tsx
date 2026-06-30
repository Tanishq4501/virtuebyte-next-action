"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
    {
        question:"What industries do you work with?",
        answer:"VirtueByte provides IT consulting, Salesforce, AI, and cloud solutions to startups and enterprises across industries, with a tailored approach based on each business needs and growth goals.",
    },
    {
        question: "Do you work with startups or only enterprise-level companies?",
        answer: "We work with both startups and growing enterprises, delivering solutions tailored to their stage, scale, and business needs.",
    },
    {
        question: "What makes you different from other IT consulting companies?",
        answer: "We focus on solving real business challenges with practical, scalable solutions and a structured, transparent approach.",
    },
    {
        question: "Do you provide end-to-end development services?",
        answer: "Yes, we handle everything from planning and design to development, deployment, and ongoing support.",
    },
    /* {
        question: "What industries does VirtueByte serve?",
        answer: "VirtueByte offers IT consulting, Salesforce implementation, AI solutions, and cloud services to companies in various industries in the United States. Among our most frequent partners are health tech companies, manufacturing and logistics enterprises, fintech startups, education tech platforms, and SMBs on the growth track. Our approach is industry-specific, meaning we tailor Salesforce consulting, cloud infrastructure, and automation solutions based on your operational challenges, compliance requirements, and growth goals.",
    },
    {
        question: "How can Salesforce consulting enhance my business activities?",
        answer: "We provide Salesforce consulting services that empower businesses to optimize sales processes, automate workflows, and have a clearer view of customer data. By customizing CRM dashboards, integrating third-party systems, and implementing automation, we help organizations improve pipeline forecasting, reduce manual administrative work, increase customer retention, and enhance reporting accuracy. Whether it's integration, optimization, or ongoing support, our solutions are designed to deliver measurable ROI.",
    },
    {
        question: "Do you offer AI and machine learning solutions for growing businesses?",
        answer: "Yes. Through our AI and machine learning consulting services, we assist businesses in leveraging data to extract meaningful insights. We develop AI-driven automation solutions, forecasting algorithms, and smart visualization tools that enable enterprises to forecast trends, automate repetitive processes, improve decision-making, and enhance customer experiences. Our AI solutions are practical and scalable, designed for real business outcomes, not just experimentation.",
    },
    {
        question: "Can VirtueByte help with cloud migration and infrastructure management?",
        answer: "Yes, we provide cloud consulting and migration services across AWS, Azure, and hybrid environments. Whether you're moving from legacy systems to cloud infrastructure or optimizing an existing cloud environment, we ensure secure migration with minimal downtime, cost optimization, scalable architecture, and performance monitoring and support. Our cloud solutions are designed to support your company's growth and operational stability for a longer period.",
    },
    {
        question: "Do you provide dedicated offshore development teams?",
        answer: "Yes, we offer dedicated offshore development teams that work as an extension of your in-house team. With our offshore model, companies can reduce development costs, scale faster, access specialized technical expertise, and accelerate project timelines. We maintain transparent communication, structured reporting, and alignment with your business objectives to ensure seamless collaboration.",
    },
    {
        question: "How do I determine if VirtueByte is the most suitable IT consulting partner for my business?",
        answer: "If you're looking for measurable growth, operational efficiency, and scalable technology solutions, VirtueByte delivers beyond traditional services through a strategic approach to IT Consulting Services and global technology consulting.",
    },
    {
        question: "Do you work with startups or only enterprise-level companies?",
        answer: "We work with both startups and enterprise organizations. For startups, we help build scalable technology foundations and optimize early-stage processes. For enterprises, we focus on system modernization, automation, and performance optimization across departments. Our solutions are flexible and tailored to your business size and growth stage.",
    },
    {
        question: "Can you integrate multiple systems like CRM, cloud, and analytics tools?",
        answer: "Yes, we specialize in end-to-end system integration. Whether it's Salesforce CRM, cloud platforms, analytics tools, or third-party applications, we ensure seamless data flow and connectivity across systems. This creates a unified ecosystem that improves efficiency, reporting accuracy, and business visibility.",
    },
    {
        question: "What makes VirtueByte different from other IT consulting companies?",
        answer: "VirtueByte is the IT services & consulting company in that stands out because of its business-first approach. Instead of offering generic solutions, we focus on understanding your goals and delivering customized strategies backed by measurable outcomes. Our expertise across Salesforce, AI, cloud, and DevOps allows us to provide complete, end-to-end technology solutions under one roof.",
    },
    {
        question: "How quickly can you start working on a new project?",
        answer: "We can typically begin within a few days after the initial consultation and requirement alignment. Our onboarding process is structured to ensure quick understanding of your business needs, followed by a clear roadmap and execution plan. This helps us deliver faster results without compromising quality.",
    }, */
];

export default function FAQSection() {
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

