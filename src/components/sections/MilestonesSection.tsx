"use client";

import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { milestones } from "@/data/content";

export default function MilestonesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#FFFFFF00_0%,#F6921E_50%)] opacity-10 pointer-events-none" />
            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                <SectionHeading
                    title="Milestones That Define Us"
                    subtitle="Our success is defined by the numbers that showcase our innovation, impact and global reach"
                    light
                />
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-5">
                    {milestones.map((milestone, index) => (
                        <AnimatedSection key={milestone.label} animation="fadeInUp" delay={index * 0.15}>
                            <div className="bg-dark-3 rounded-[11px] md:rounded-[22px] p-[20px_0] md:p-[30px] m-0 md:m-[10px] border border-[#E5A2FF0A] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] text-center">
                                <div className="text-[26px] md:text-[61px] font-semibold text-primary font-fira leading-[1.3em] mb-2">
                                    {inView ? (
                                        <CountUp end={milestone.value} duration={2} />
                                    ) : (
                                        "0"
                                    )}
                                    {milestone.value === 60 && "+"}
                                </div>
                                <p className="text-text-light font-lato text-[13px] md:text-[17px] font-normal leading-[1.3em]">
                                    {milestone.label}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

