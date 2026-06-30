"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Target, Layers, TrendingUp, CheckCircle } from "lucide-react";

const items = [
  {
    text: "Business-first approach to problem-solving",
    icon: Target,
  },
  {
    text: "Experience across multiple industries and use cases",
    icon: Layers,
  },
  {
    text: "Scalable and future-ready systems",
    icon: TrendingUp,
  },
  {
    text: "Transparent and structured delivery approach",
    icon: CheckCircle,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-[80px] overflow-hidden bg-[#E5A2FF0A]">
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8">

        {/* Heading */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-10">
{/*             <p className="text-primary text-sm uppercase tracking-wider mb-2">
              Why Choose VirtueByte
            </p> */}

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-white font-fira leading-[1.2]">
              Why Organizations Choose VirtueByte
            </h2>

            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[#E0E0E0] max-w-[700px] mx-auto">
              Businesses trust Virtuebyte for delivering scalable IT solutions that are aligned with operational needs and long-term business goals
            </p>
          </div>
        </AnimatedSection>

        {/* ✅ 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
              >
                <div className="group bg-[#E5A2FF0A] border border-[#E5A2FF0A] rounded-[16px] p-5 hover:shadow-[0px_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300 h-full">

                  {/* ✅ Inline Layout */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>

                    <p className="text-white text-[15px] md:text-[16px] leading-[1.6] font-medium">
                      {item.text}
                    </p>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}