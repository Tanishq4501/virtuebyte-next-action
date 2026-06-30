"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";
import { FaHeartbeat, FaIndustry, FaMoneyCheckAlt, FaGraduationCap, FaBuilding, FaRocket, FaFilm } from "react-icons/fa";
import { MoveIcon } from "lucide-react";

const industries = [
    { icon: <FaHeartbeat className="w-8 h-8" />, title: "Healthcare" },
    { icon: <FaIndustry className="w-8 h-8" />, title: "Manufacturing" },
    { icon: <FaMoneyCheckAlt className="w-8 h-8" />, title: "Finance" },
    { icon: <FaGraduationCap className="w-8 h-8" />, title: "Education" },
    { icon: <FaBuilding className="w-8 h-8" />, title: "Logistics and Operations" },
    { icon: <FaFilm className="w-8 h-8" />, title: "Media" },
];

export default function IndustriesSection() {
    return (
        <section className="relative py-[50px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                <SectionHeading title="Solutions Across Industries" />
                <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-center max-w-3xl mx-auto mb-10 -mt-4">
We design and deliver solutions tailored to diverse business needs:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {industries.map((industry, index) => (
                        <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                            <div className="relative bg-[#E5A2FF0A] rounded-[20px] p-6 border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 hover-bob text-center h-full flex flex-col items-center justify-center gap-3">
                                <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
                                <div className="relative text-primary">{industry.icon}</div>
                                <h3 className="relative text-white text-[14px] md:text-[15px] font-semibold leading-tight">{industry.title}</h3>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection animation="fadeInUp" delay={0.3}>
                    <p className="text-primary text-center italic text-[16px] md:text-[18px] mt-8">
                        We also work with businesses across other industries, building solutions aligned with their specific requirements.

                    </p>
                </AnimatedSection>

                {/*   <div className="text-center mt-10">
                    <CTAButton href="/contact/">
                        Discover How We Help Your Industry
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </CTAButton>
                </div> */}
            </div>
        </section>
    );
}

