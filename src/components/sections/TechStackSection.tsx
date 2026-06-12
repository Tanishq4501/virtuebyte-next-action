"use client";

import LazyImage from "@/components/ui/LazyImage";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TechStackSection() {
 return (
 <section className="relative py-[50px] md:py-[80px] lg:py-[50px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <AnimatedSection animation="fadeInUp">
 <h2 className="text-[26px] md:text-[36px] font-semibold text-white text-center font-fira mb-10" style={{ lineHeight: '1.3em' }}>
 Technology Stack
 </h2>
 </AnimatedSection>
 <AnimatedSection animation="fadeIn" delay={0.2}>
 <div className="max-w-6xl mx-auto">
 <LazyImage
 src="/images/home/tech-stack.webp"
 alt="Technology stack and platform ecosystem diagram"
 width={1667}
 height={956}
 className="w-full h-auto rounded-[7px]"
 sizes="(max-width: 1024px) 100vw, 1152px"
 />
 </div>
 </AnimatedSection>
 </div>
 </section>
 );
}

