import type { ComponentType } from "react";

type SectionModule = { default: ComponentType };

export const homeSectionLoaders = {
  clientLogos: () => import("@/components/sections/ClientLogosSection"),
  partners: () => import("@/components/sections/PartnersSection"),
  services: () => import("@/components/sections/ServicesSection"),
  techStack: () => import("@/components/sections/TechStackSection"),
  newProducts: () => import("@/components/sections/NewProductsSection"),
  milestones: () => import("@/components/sections/MilestonesSection"),
  products: () => import("@/components/sections/ProductsSection"),
  difference: () => import("@/components/sections/DifferenceSection"),
  testimonials: () => import("@/components/sections/TestimonialsSection"),
  faq: () => import("@/components/sections/FAQSection"),
  cta: () => import("@/components/sections/CTASection"),
} satisfies Record<string, () => Promise<SectionModule>>;

export type HomeSectionKey = keyof typeof homeSectionLoaders;
