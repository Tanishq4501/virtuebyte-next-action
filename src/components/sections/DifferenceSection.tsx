"use client";

import LazyImage from "@/components/ui/LazyImage";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FaBullseye, FaShieldAlt, FaBolt, FaHandshake } from "react-icons/fa";

const points = [
    {
        title: "Strong understanding of real business challenges",
        icon: <FaBullseye className="w-6 h-6" />,
        position: "left" as const,
    },
    {
        title: "Experience across multiple industries and use cases",
        icon: <FaHandshake className="w-6 h-6" />,
        position: "left" as const,
    },
    {
        title: "Scalable solutions designed for long-term growth",
        icon: <FaShieldAlt className="w-6 h-6" />,
        position: "right" as const,
    },
    {
        title: "Agile and transparent execution approach",
        icon: <FaBolt className="w-6 h-6" />,
        position: "right" as const,
    },
];

export default function DifferenceSection() {
    const leftItems = points.filter((item) => item.position === "left");
    const rightItems = points.filter((item) => item.position === "right");

    return (
        <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                <SectionHeading
                    title="Why Businesses Choose Virtuebyte"
                    subtitle=""
                />

                <div className="grid grid-cols-1 lg:grid-cols-[32%_36%_32%] gap-5 lg:gap-4 items-center">
                    {/* Left Column */}
                    <div className="space-y-6 order-1 lg:order-1">
                        {leftItems.map((item, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fadeInLeft"
                                delay={index * 0.15}
                            >
                                <div className="flex items-center gap-[15px] text-left lg:text-right flex-row lg:flex-row-reverse lg:-mr-[35px] z-10 relative">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0" style={{ fontSize: '36px' }}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold text-[17px] leading-relaxed">{item.title}</h3>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Center Image - visible on all devices */}
                    <AnimatedSection animation="fadeIn" delay={0.2} className="flex justify-center order-3 lg:order-2">
                        <div className="bg-[#E5A2FF0A] rounded-[100px] p-[30px] lg:p-10 border border-[#E5A2FF0A]">
                            <LazyImage
                                src="/images/home/why-choose-us.webp"
                                alt="Illustration representing why businesses choose VirtueByte"
                                width={400}
                                height={400}
                                className="rounded-[20px] w-full h-auto opacity-90"
                            />
                        </div>
                    </AnimatedSection>

                    {/* Right Column */}
                    <div className="space-y-6 order-2 lg:order-3">
                        {rightItems.map((item, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fadeInRight"
                                delay={index * 0.15}
                            >
                                <div className="flex items-center gap-[15px] lg:-ml-[35px] z-10 relative">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0" style={{ fontSize: '36px' }}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold text-[17px] leading-relaxed">{item.title}</h3>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

