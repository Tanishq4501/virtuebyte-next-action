"use client";

import LazyImage from "@/components/ui/LazyImage";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Target, Layers, TrendingUp, CheckCircle } from "lucide-react";

const items = [
  {
    title: "Clear understanding of business workflows and requirements",
    description: "",
    icon: Target,
    position: "left",
  },
  {
    title: "Structured execution with defined processes and timelines",
    description: "",
    icon: Layers,
    position: "left",
  },
  {
    title: "Flexible engagement models based on business needs",
    description: "",
    icon: TrendingUp,
    position: "right",
  },
  {
    title: "Consistent focus on quality and long-term scalability",
    description: "",
    icon: CheckCircle,
    position: "right",
  },
];

export default function DifferenceSection2() {
  const leftItems = items.filter((item) => item.position === "left");
  const rightItems = items.filter((item) => item.position === "right");

  return (
    <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
        <SectionHeading
          title="Why Organizations Choose Virtuebyte"
          subtitle=""
        />

        <div className="grid grid-cols-1 lg:grid-cols-[32%_36%_32%] gap-5 lg:gap-4 items-center">

          {/* Left Column */}
          <div className="space-y-6 order-1 lg:order-1">
            {leftItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fadeInLeft"
                  delay={index * 0.15}
                >
                  <div className="flex items-center gap-[15px] text-left lg:text-right flex-row lg:flex-row-reverse lg:-mr-[35px] z-10 relative">

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-[17px] leading-relaxed">
                        {item.title}
                      </h3>
                      {item.description ? (
                        <p className="text-text-light text-[15px] md:text-[16px] leading-relaxed">
                          {item.description}
                        </p>
                      ) : null}
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Center Image */}
          <AnimatedSection animation="fadeIn" delay={0.2} className="flex justify-center order-3 lg:order-2">
            <div className="bg-[#E5A2FF0A] rounded-[100px] p-[30px] lg:p-10 border border-[#E5A2FF0A]">
              <LazyImage
                src="/images/home/why-choose-us.webp"
                alt="Why choose VirtueByte"
                width={400}
                height={400}
                className="rounded-[20px] w-full h-auto opacity-90"
              />
            </div>
          </AnimatedSection>

          {/* Right Column */}
          <div className="space-y-6 order-2 lg:order-3">
            {rightItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fadeInRight"
                  delay={index * 0.15}
                >
                  <div className="flex items-center gap-[15px] lg:-ml-[35px] z-10 relative">

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-[17px] leading-relaxed">
                        {item.title}
                      </h3>
                      {item.description ? (
                        <p className="text-text-light text-[15px] md:text-[16px] leading-relaxed">
                          {item.description}
                        </p>
                      ) : null}
                    </div>

                  </div>
                </AnimatedSection>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}