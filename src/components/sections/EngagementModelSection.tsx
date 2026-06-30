"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { FolderKanban, Users, Globe } from "lucide-react";

const models = [
  {
    title: "Project-Based",
    desc: "End-to-end execution for defined scope projects with clear timelines and deliverables.",
    icon: FolderKanban,
  },
  {
    title: "Dedicated Teams",
    desc: "Skilled teams working exclusively on your product with full control and flexibility.",
    icon: Users,
  },
  {
    title: "Offshore Development",
    desc: "Cost-effective offshore teams ensuring scalable development and continuous delivery.",
    icon: Globe,
  },
];

export default function EngagementModelSection() {
  return (
    <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8">

        {/* Heading */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-10">
{/*             <p className="text-primary text-sm uppercase tracking-wider mb-2">
              Our Engagement Model
            </p> */}

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-white font-fira leading-[1.2]">
              Our Engagement Model
            </h2>

            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[#E0E0E0] max-w-[700px] mx-auto">
              We adapt to your business requirements with structured execution,
              clear communication, and reliable delivery across all engagement types.
            </p>
          </div>
        </AnimatedSection>

        {/* Models */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {models.map((model, index) => {
            const Icon = model.icon;

            return (
              <AnimatedSection
                key={model.title}
                animation="fadeInUp"
                delay={index * 0.1}
                className="h-full"
              >
                <div className="group h-full bg-[#E5A2FF0A] border border-[#E5A2FF0A] rounded-[16px] p-5 hover:shadow-[0px_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300">

                  {/* ✅ Inline Icon + Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>

                    <h3 className="text-white text-[16px] md:text-[17px] font-semibold leading-[1.4] group-hover:text-primary transition-colors">
                      {model.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-text-light text-[14px] md:text-[15px] leading-[1.6]">
                    {model.desc}
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