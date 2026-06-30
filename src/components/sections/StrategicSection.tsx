"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { FaRocket, FaCogs, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";

const highlights = [
    { icon: <FaRocket className="w-6 h-6" />, text: "Highly scalable Salesforce environment" },
    { icon: <FaCogs className="w-6 h-6" />, text: "AI-driven smart automation" },
    { icon: <FaShieldAlt className="w-6 h-6" />, text: "Secure cloud infrastructure" },
    { icon: <FaChartLine className="w-6 h-6" />, text: "Data insights for better decision making" },
    { icon: <FaUsers className="w-6 h-6" />, text: "Reliable offshore development teams" },
];

export default function StrategicSection() {
    return (
        <section className="relative py-[60px] md:py-[80px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                <AnimatedSection animation="fadeInUp">
                    <h2
                        className="text-[26px] md:text-[36px] font-semibold text-white text-center font-fira mb-6"
                        style={{ lineHeight: "1.3em" }}
                    >
                        Strategic Technology That Drives Real Business Results
                    </h2>
                    <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-center max-w-3xl mx-auto mb-3">
                        At VirtueByte, we combine deep technical expertise with business
                        understanding. Our focus is not just implementation - it&apos;s
                        transformation.
                    </p>
                    <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-center max-w-3xl mx-auto mb-12">
                        From Salesforce consulting to AI-powered automation and cloud migration services, we help organizations stay competitive in today&apos;s digital landscape. Our approach to IT Consulting Services is centered on aligning technology with business outcomes.
                    </p>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-white text-[18px] md:text-[20px] font-semibold mb-8 text-center font-fira">
                            Businesses trust VirtueByte because we deliver solutions that are:
                        </p>

                        {/* Top row: 3 items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            {highlights.slice(0, 3).map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-[#E5A2FF0A] rounded-[15px] p-5 border border-[#E5A2FF1A] hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-white text-[15px] md:text-[16px] leading-snug">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom row: 2 items centered */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {highlights.slice(3).map((item, index) => (
                                <div
                                    key={index + 3}
                                    className="flex items-center gap-4 bg-[#E5A2FF0A] rounded-[15px] p-5 border border-[#E5A2FF1A] hover:border-primary/30 transition-colors"
                                >
                                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-white text-[15px] md:text-[16px] leading-snug">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-text-light text-[16px] md:text-[17px] leading-relaxed text-center mt-10 max-w-3xl mx-auto">
                            We partner with companies to address complex operational
                            challenges by leveraging structured, measurable, and
                            development-focused technology strategies.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}


