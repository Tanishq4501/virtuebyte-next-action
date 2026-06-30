import { Metadata } from "next";
import LazyImage from "@/components/ui/LazyImage";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/data/content";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
 title: "Case Studies",
 description:
 "Explore our case studies showcasing successful implementations across Salesforce, ERP, Edutech, Manufacturing, Real Estate, and Travel industries.",
 alternates: {
 canonical: getCanonicalUrl("/case-studies/"),
 },
};

export default function CaseStudiesPage() {
 return (
 <>
 <Breadcrumb items={[{ label: "Case Studies" }]} />
 <section className="relative py-[50px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading title="Case Studies" />
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {caseStudies.map((study, index) => (
 <AnimatedSection key={study.id} animation="fadeInUp" delay={index * 0.1}>
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 h-full group hover-bob">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative h-56 md:h-[274px] overflow-hidden rounded-[20px]">
 <LazyImage
 src={study.image}
 alt={`${study.title} case study cover image`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />
 </div>
 <div className="relative p-5">
 <h3 className="text-[21px] font-semibold font-fira text-white mb-4 leading-[1.4em]">
 {study.title}
 </h3>
 <div className="space-y-3 text-[16px]">
 <div>
 <span className="font-semibold text-primary">Objective: </span>
 <span className="text-text-light">{study.objective}</span>
 </div>
 <div>
 <span className="font-semibold text-primary">Solution: </span>
 <span className="text-text-light">{study.solution}</span>
 </div>
 <div>
 <span className="font-semibold text-primary">Features: </span>
 <span className="text-text-light">{study.features}</span>
 </div>
 </div>
 </div>
 </div>
 </AnimatedSection>
 ))}
 </div>
 </div>
 </section>
 </>
 );
}

