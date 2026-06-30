"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
    return (
        <section
            className="relative py-[50px] md:py-[80px] lg:py-[50px] pb-[50px] md:pb-[120px] lg:pb-[100px] overflow-x-hidden"
            style={{
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                <div className="flex items-center justify-start md:justify-center gap-2 mb-2">
                    <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                        Testimonials
                    </span>
                </div>
                <SectionHeading title="What Our Clients Say" />
                <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-center max-w-3xl mx-auto mb-10 -mt-4">
                    Our clients value our structured approach, transparency, and skill in converting technical complexity into business value.
                </p>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1024: { slidesPerView: 3, spaceBetween: 15 },
                    }}
                    className="pb-16 testimonial-swiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-auto pb-[2px]">
                            <div className="relative bg-dark rounded-[20px] p-[24px] md:p-[30px] border border-[#FFFFFFB0] h-full overflow-hidden flex flex-col">
                                <p className="text-white text-[16px] md:text-[18px] leading-relaxed text-justify mb-6 flex-1">
                                    {testimonial.quote}
                                </p>
                                <div className="flex mb-3 gap-[5px]">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <FaStar key={i} className="w-4 h-4 text-gold" />
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white font-fira">{testimonial.name}</h4>
                                    <p className="text-sm text-white">{testimonial.role}</p>
                                </div>
                                {/* Watermark quote */}
                                <FaQuoteLeft className="absolute bottom-[30px] right-[30px] text-primary text-3xl opacity-30" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

