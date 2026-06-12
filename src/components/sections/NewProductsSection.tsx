"use client";

import LazyImage from "@/components/ui/LazyImage";
import AnimatedSection from "@/components/ui/AnimatedSection";

import { products } from "@/data/content";
import CTAButton from "@/components/ui/CTAButton";

export default function NewProductsSection() {
  return (
    <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">

      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-5 lg:px-8">

        {/* Heading */}
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-white font-fira text-center mb-12">
            Our Products
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <AnimatedSection
              key={product.id}
              animation="fadeInUp"
              delay={index * 0.1}
              className="h-full"
            >
              <div className="group h-full bg-[#E5A2FF0A] border border-[#E5A2FF0A] rounded-[18px] overflow-hidden transition-all duration-300 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <LazyImage
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                  {/* Title */}
                  <h3 className="text-white text-[18px] md:text-[20px] font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  {/* Description */}
                  <p className="text-text-light text-[14px] md:text-[15px] leading-[1.6] mb-4">
                    {product.description}
                  </p>
                  {/* Button (bottom aligned, styled to theme) */}
                  <div className="mt-auto flex justify-center">
                    <CTAButton href={product.href} size="md" variant="primary">
                      Read More
                    </CTAButton>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}