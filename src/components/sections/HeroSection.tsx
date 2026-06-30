"use client";

import { useEffect, useState } from "react";
import LazyImage from "@/components/ui/LazyImage";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HERO_VIDEO_ID = "VvqWZOE0fzc";

export default function HeroSection() {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => setShowVideo(true), 1200);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[#403068]">
                {showVideo && (
                    <iframe
                        src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                        className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none md:h-[150%] md:w-[150%]"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        loading="lazy"
                        title="Hero background video"
                    />
                )}
                <div className="absolute inset-0 bg-[#403068]/90" aria-hidden />
            </div>

            <div className="relative z-10 w-full px-5 md:px-10 lg:px-[60px] py-[40px] md:py-20">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[55%_45%]">
                    <div className="lg:ml-[35px]">
                        <AnimatedSection animation="fadeIn">
                            <h1 className="mb-10 font-fira text-[32px] font-semibold leading-[1.15] text-white sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
                                Build Scalable Digital Solutions That Drive Real Business Growth
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInUp" delay={0.2}>
                            <p className="mt-4 max-w-2xl text-[16px] leading-[1.5em] tracking-[0.2px] text-[#E0E0E0] md:text-[18px] md:leading-[1.3em] md:tracking-[0.4px] lg:leading-[24px]">
                                Helping businesses around the world leverage technology to transform their operations and unlock the power of data-driven decision-making through Salesforce consulting, AI, cloud transformation, and software development.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInUp" delay={0.4}>
                            <div className="mt-8">
                                <Link
                                    href="/contact/"
                                    className="inline-flex items-center justify-center rounded-[15px] border border-primary bg-primary px-[30px] py-[15px] font-lato text-[15px] font-semibold uppercase leading-[1.3em] text-white shadow-md transition-all duration-300 hover:shadow-[0px_5px_5px_0px_rgba(251,0,252,0.56)] md:text-[16px]"
                                >
                                    Request a Free Strategy Call
                                    <svg
                                        className="ml-2 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection animation="fadeIn" className="flex items-center justify-center">
                        <LazyImage
                            src="/images/home/hero-banner.webp"
                            alt="VirtueByte expertise — Salesforce, AI, cloud, DevOps, and software development services"
                            width={1024}
                            height={1024}
                            className="h-auto w-full max-w-[800px] bg-transparent drop-shadow-[0_0_40px_rgba(90,61,158,0.45)]"
                            fetchPriority="high"
                            priority
                            sizes="(min-width: 1024px) 45vw, 100vw"
                        />
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
