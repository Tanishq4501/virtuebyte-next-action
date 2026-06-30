"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Settings, Database, BarChart3, Workflow, ShieldCheck } from "lucide-react";

const outcomes = [
  {
    text: "Improve sales efficiency through optimized CRM processes",
    icon: Database,
  },
  {
    text: "Reduce manual workload with automated workflows",
    icon: Workflow,
  },
  {
    text: "Enhance visibility across customer and operational data",
    icon: BarChart3,
  },
  {
    text: "Streamline business operations with integrated systems",
    icon: Settings,
  },
  {
    text: "Strengthen performance with scalable and secure infrastructure",
    icon: ShieldCheck,
  },
];

export default function ProductsSection() {
  return (
    <section className="relative py-[60px] bg-[#E5A2FF0A] overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8">
        
        {/* Heading */}
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-[26px] md:text-[32px] font-semibold text-white text-center font-fira mb-10">
            Delivering Real, Measurable Business Outcomes
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {outcomes.map((item, index) => {
            const Icon = item.icon;
            const desktopPositionClass =
              index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "lg:col-span-2 lg:col-start-4";

            return (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 0.1}
                className={`h-full ${desktopPositionClass}`}
              >
                <div className="group relative h-full bg-[#E5A2FF0A] border border-[#E5A2FF0A] rounded-[18px] p-5 hover:shadow-[0px_5px_25px_rgba(0,0,0,0.35)] transition-all duration-300">

                  {/* ✅ Compact Icon */}
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center mb-3">
                    <Icon className="text-primary w-5 h-5" />
                  </div>

                  {/* Text */}
                  <p className="text-text-light text-[15px] md:text-[16px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}