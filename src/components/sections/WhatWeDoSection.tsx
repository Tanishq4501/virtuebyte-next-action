"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Code,
  Database,
  Globe,
  Brain,
  Cloud,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    icon: Code,
  },
  {
    title: "CRM & Salesforce Consulting",
    icon: Database,
  },
  {
    title: "Web & Mobile Applications",
    icon: Globe,
  },
  {
    title: "AI & Data Analytics",
    icon: Brain,
  },
  {
    title: "Cloud & DevOps Services",
    icon: Cloud,
  },
  {
    title: "Offshore Development Center (ODC)",
    icon: Users,
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8">

        {/* Heading */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-10">
{/*             <p className="text-primary text-sm uppercase tracking-wider mb-2">
              What We Do
            </p> */}

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-white font-fira leading-[1.2]">
What We Do            </h2>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedSection
                key={service.title}
                animation="fadeInUp"
                delay={index * 0.08}
                className="h-full"
              >
                <div className="group h-full bg-[#E5A2FF0A] border border-[#E5A2FF0A] rounded-[16px] p-5 hover:shadow-[0px_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300">

                  {/* Icon */}
                  <div className="flex items-center gap-3">
  <div className="w-8 h-8 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
    <Icon className="w-4 h-4 text-primary" />
  </div>

  <h3 className="text-white text-[15px] md:text-[16px] font-semibold leading-[1.4] group-hover:text-primary transition-colors">
    {service.title}
  </h3>
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