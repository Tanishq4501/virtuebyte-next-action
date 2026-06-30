"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    title: "Understand",
    desc: "Gain a clear view of business processes, workflows, and key challenges to identify what truly needs to be solved.",
  },
  {
    title: "Strategize",
    desc: "Define the right solution approach, architecture, and roadmap aligned with business goals and operational needs.",
  },
  {
    title: "Deliver",
    desc: "Build and implement scalable systems with structured execution, ensuring reliability, performance, and long-term usability.",
  },
];

interface OurApproachSectionProps {
  sectionClass?: string;
}

export default function OurApproachSection({ sectionClass = "" }: OurApproachSectionProps) {
  return (
    <section className={`relative py-[80px] bg-[#E5A2FF0A] overflow-hidden ${sectionClass}`}>

      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8">

        {/* Heading */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-white font-fira">
              Our Approach
            </h2>

            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[#E0E0E0] max-w-[650px] mx-auto">
              A streamlined process focused on clarity, alignment, and execution.
            </p>
          </div>
        </AnimatedSection>

        {/* Process Line */}
        <div className="relative flex flex-col md:flex-row items-start md:items-start justify-between gap-8">

          {steps.map((step, index) => (
            <AnimatedSection
              key={step.title}
              animation="fadeInUp"
              delay={index * 0.1}
              className="flex-1"
            >
              <div className="flex flex-col items-start md:items-center text-left md:text-center">

                {/* Dot */}
                <div className="w-3 h-3 bg-primary rounded-full mb-3" />

                {/* Title */}
                <h3 className="text-white text-[18px] md:text-[20px] font-semibold mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-light text-[14px] md:text-[15px] leading-[1.6] max-w-[220px]">
                  {step.desc}
                </p>

              </div>
            </AnimatedSection>
          ))}

          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-[6px] left-0 right-0 h-[1px] bg-white/10" />
        </div>

      </div>
    </section>
  );
}