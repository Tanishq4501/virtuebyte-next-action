import { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LazyImage from "@/components/ui/LazyImage";
import Link from "next/link";
import { products } from "@/data/content";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
 title: "Products",
 description:
 "Explore our innovative products - VirtuElite for event management and VirtuNest for home inspections.",
 alternates: {
 canonical: getCanonicalUrl("/products/"),
 },
};

export default function ProductsPage() {
 return (
 <>
 <Breadcrumb items={[{ label: "Products" }]} />
 <section className="relative py-[50px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading title="Products" />
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
 {products.map((product, index) => (
 <AnimatedSection key={product.id} animation="fadeInUp" delay={index * 0.2}>
 <Link href={product.href} className="block group h-full">
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 hover-bob h-full flex flex-col">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative h-56 md:h-[274px] overflow-hidden rounded-[20px]">
 <LazyImage
 src={product.image}
 alt={`${product.title} product preview`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 <div className="relative p-5 flex-1 flex flex-col">
 <h3 className="text-[21px] font-semibold font-fira text-white mb-2 leading-[1.4em]">
 {product.title}
 </h3>
 <p className="text-text-light text-[18px] mb-4">{product.description}</p>
 <div className="mt-auto pt-2">
 <span className="inline-flex items-center bg-primary text-white text-[14px] font-semibold uppercase px-[25px] py-[10px] rounded-[12px] tracking-wide">
 Read More
 </span>
 </div>
 </div>
 </div>
 </Link>
 </AnimatedSection>
 ))}
 </div>
 </div>
 </section>
 </>
 );
}

