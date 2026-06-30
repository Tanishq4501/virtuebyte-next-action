"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Eye } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">

      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[900px] mx-auto px-5 lg:px-8 text-center">

        {/* Label */}
        <AnimatedSection animation="fadeInUp">
          {/* <p className="text-primary text-sm uppercase tracking-wider mb-3">
            Our Vision
          </p> */}
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-white font-fira leading-[1.2] mb-4">
              Our Vision
            </h2>
        </AnimatedSection>

        {/* Icon */}
{/*         <AnimatedSection animation="fadeInUp" delay={0.1}>
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
              <Eye className="w-5 h-5 text-primary" />
            </div>
          </div>
        </AnimatedSection>
 */}
        {/* Main Statement */}
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[#E0E0E0] max-w-[700px] mx-auto">
            To empower businesses with scalable software, CRM, AI, and cloud solutions 
            that drive <span className="text-primary">efficiency</span>, 
            <span className="text-primary"> innovation</span>, and 
            <span className="text-primary"> long-term growth</span>.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}