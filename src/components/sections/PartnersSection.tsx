"use client";

import LazyImage from "@/components/ui/LazyImage";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { partners } from "@/data/content";

export default function PartnersSection() {
    return (
        <section className="py-[50px] px-5">
            <div className="relative max-w-[1280px] mx-auto p-5 md:p-[40px] bg-[#E5A2FF0A] rounded-[20px] overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#E5A2FF00_0%,#F6921E2E_100%)] pointer-events-none " />
                <div className="relative flex flex-col-reverse md:flex-col">
                    <AnimatedSection animation="fadeInUp">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-white text-center font-fira mb-10 mt-8 md:mt-0" style={{ lineHeight: '1.3em' }}>
                            Our Trusted Partners
                        </h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-[33px] md:gap-8 items-center">
                        {partners.map((partner, index) => (
                            <AnimatedSection key={partner.name} animation="fadeInUp" delay={index * 0.1}>
                                <div className="flex items-center justify-center p-4">
                                    <LazyImage
                                        src={partner.image}
                                        alt={`${partner.name} logo`}
                                        width={200}
                                        height={100}
                                        className="h-[90px] md:max-h-[100px] w-[90%] object-contain opacity-80 hover:opacity-100 transition-opacity"
                                        sizes="200px"
                                    />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

