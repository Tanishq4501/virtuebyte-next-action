"use client";

import LazyImage from "@/components/ui/LazyImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { clientLogos } from "@/data/content";

function getLogoAlt(logoPath: string, index: number) {
    const file = logoPath.split("/").pop() || "";
    const base = file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
    if (!base) return `Client logo ${index + 1}`;
    return `${base.replace(/\b\w/g, (c) => c.toUpperCase())} logo`;
}

export default function ClientLogosSection() {
    const logoVersion = process.env.NEXT_PUBLIC_CLIENT_LOGOS_VERSION || "20260331";

    return (
        <section className="relative py-[40px] bg-[#E5A2FF0A] overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                <AnimatedSection animation="fadeInUp">
                    <h2 className="text-[24px] md:text-[28px] font-semibold text-white text-start md:text-center font-fira mb-8">
                        Esteemed customers who have faith in our deliverables
                    </h2>
                </AnimatedSection>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={8} // reduced gap
                    slidesPerView={2}
                    loop
                    autoplay={{ delay: 1200, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 12 },
                        768: { slidesPerView: 4, spaceBetween: 12 },
                        1024: { slidesPerView: 5, spaceBetween: 16 },
                    }}
                >
                    {clientLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center p-3 min-h-[90px]">
                                <LazyImage
                                    src={`${logo}?v=${logoVersion}`}
                                    alt={getLogoAlt(logo, index)}
                                    width={280}
                                    height={140}
                                    className="h-20 md:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                                    sizes="280px"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}