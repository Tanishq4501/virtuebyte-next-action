"use client";

import Link from "next/link";
import LazyImage from "@/components/ui/LazyImage";
import AnimatedSection from "./AnimatedSection";

interface ServiceCardProps {
    title: string;
    tagline: string;
    description: string;
    image: string;
    href: string;
    delay?: number;
}

export default function ServiceCard({
    title,
    tagline,
    description,
    image,
    href,
    delay = 0,
}: ServiceCardProps) {
    return (
        <AnimatedSection animation="fadeInUp" delay={delay} className="group hover-bob h-full">
            <Link href={href} className="block h-full">
                <div className="relative bg-[#E5A2FF0A] rounded-[20px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 h-full flex flex-col">

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />

                    {/* Image */}
                    <div className="relative overflow-hidden h-56 md:h-[274px] rounded-[20px]">
                        <LazyImage
                            src={image}
                            alt={`${title} service illustration`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative p-5 flex flex-col flex-1">

                        {/* Top Content (fixed alignment block) */}
                        <div className="space-y-3">
                            <h3 className="text-[21px] md:text-[24px] font-semibold font-fira text-white leading-[1.4em] group-hover:text-primary transition-colors min-h-[60px]">
                                {title}
                            </h3>

                            <p className="text-sm font-semibold italic text-primary min-h-[20px]">
                                {tagline}
                            </p>

                            <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed min-h-[72px]">
                                {description}
                            </p>
                        </div>

                        {/* Button (always bottom aligned) */}
                        <div className="mt-auto pt-6 flex justify-center">
                            <span className="inline-flex items-center justify-center bg-primary text-white font-lato font-semibold uppercase text-[14px] md:text-[16px] px-[20px] md:px-[26px] py-[11px] md:py-[13px] rounded-[12px] border border-primary hover:shadow-[0px_5px_5px_0px_rgba(251,0,252,0.56)] transition-all">
                                Explore
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>

                    </div>
                </div>
            </Link>
        </AnimatedSection>
    );
}