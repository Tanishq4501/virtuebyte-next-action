"use client";

import LazyImage from "@/components/ui/LazyImage";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

export default function CTASection() {
 return (
 <section className="py-[50px]">
 <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] p-5 md:p-[40px] overflow-hidden">
 {/* Gradient overlay */}
 <div className="absolute inset-0 bg-[linear-gradient(180deg,#F6921E_0%,#E5A2FF0A_100%)] opacity-50 pointer-events-none rounded-[20px]" />
 <div className="relative flex flex-col-reverse lg:flex-row gap-10 items-center">
 <AnimatedSection animation="fadeInLeft" className="w-full lg:w-[55%]">
 <h2 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-4" style={{ lineHeight: '1.3em' }}>
 Let&apos;s Build Smarter Systems Together
 </h2>
 <p className="text-text-light text-[16px] md:text-[18px] mb-8 leading-relaxed">
 If you&apos;re looking for a reliable Salesforce, AI, cloud, DevOps, or offshore development partner, VirtueByte is ready to support your growth journey.
 </p>
 <p className="text-white/60 text-[15px] italic mb-6">
 Whether you need strategy, implementation, or optimization - we bring clarity to complex technology through expert-led IT Consulting Services companies trust for long-term growth.
 </p>
 <CTAButton href="/contact/">Request a Free Consultation</CTAButton>
 </AnimatedSection>
 <AnimatedSection animation="fadeInRight" delay={0.2} className="w-full lg:w-[45%]">
 <LazyImage
 src="/images/home/cta-image.webp"
 alt="Business leaders collaborating on digital transformation strategy"
 width={800}
 height={476}
 className="w-full h-auto rounded-[20px]"
 sizes="(min-width: 1024px) 45vw, 100vw"
 />
 </AnimatedSection>
 </div>
 </div>
 </div>
 </section>
 );
}

