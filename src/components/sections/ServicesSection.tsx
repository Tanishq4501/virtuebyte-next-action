"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import CTAButton from "@/components/ui/CTAButton";
import { services } from "@/data/services";

export default function ServicesSection() {
    return (
        <section className="relative py-[50px] md:py-[80px] lg:py-[50px] overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                {/* Services intro row: heading | description | VIEW ALL */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 lg:mb-14">
                    <h2 className="text-[26px] md:text-[30px] lg:text-[36px] font-semibold font-fira leading-[1.3em] text-white lg:max-w-[340px] flex-shrink-0">
                        Our Core Services
                    </h2>
                    <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed lg:max-w-[600px]">
                        We deliver AI, cloud, Salesforce, and data-driven solutions to transform businesses. From streamlined operations to scalable offshore teams, we drive innovation and deliver measurable impact.
                    </p>
                    <div className="flex-shrink-0">
                        <CTAButton href="/services/" variant="outline">
                            View All
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </CTAButton>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            tagline={service.tagline}
                            description={service.description}
                            image={service.image}
                            href={service.href}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

