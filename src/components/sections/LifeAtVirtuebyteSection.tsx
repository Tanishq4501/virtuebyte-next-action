"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import LazyImage from "@/components/ui/LazyImage";
import { Lightbulb, Users, RefreshCw } from "lucide-react";

const culturePoints = [
  {
    title: "Problem-Solving Mindset",
    icon: Lightbulb,
  },
  {
    title: "Collaborative Environment",
    icon: Users,
  },
  {
    title: "Continuous Learning",
    icon: RefreshCw,
  },
];

export default function LifeAtVirtuebyteSection({ galleryImages }: { galleryImages: string[] }) {
  return (
    <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
      
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-8">

        {/* Heading */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-10">
  {/*           <p className="text-primary text-sm uppercase tracking-wider mb-2">
              Life at VirtueByte
            </p> */}

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-white font-fira leading-[1.2]">
              Life at VirtueByte
            </h2>

            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.6] text-[#E0E0E0] max-w-[700px] mx-auto">
              We are a team driven by problem-solving, collaboration, and continuous learning - focused on building practical solutions while growing together.
            </p>
          </div>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left - Culture Points */}
          <AnimatedSection animation="fadeInLeft">
            <div className="space-y-5 max-w-[500px]">

              {culturePoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#E5A2FF0A] border border-[#E5A2FF0A] rounded-[14px] p-4"
                  >
                    <div className="w-9 h-9 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <p className="text-white text-[15px] md:text-[16px] font-medium">
                      {item.title}
                    </p>
                  </div>
                );
              })}

              {/* Supporting Text */}
              <p className="text-text-light text-[15px] md:text-[16px] leading-[1.6] mt-4">
                Our culture emphasizes transparency, ownership, and shared growth - enabling teams to deliver meaningful solutions and evolve continuously.
              </p>

            </div>
          </AnimatedSection>

          {/* Right - Image Grid */}
          <AnimatedSection animation="fadeInRight" delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="relative h-40 md:h-44 rounded-[16px] overflow-hidden group"
                >
                  <LazyImage
                    src={img}
                    alt={`Life at VirtueByte ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-[700ms] group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}
