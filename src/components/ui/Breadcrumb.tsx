import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";
import HeroImagePreload from "@/components/ui/HeroImagePreload";
import { HERO_IMAGES } from "@/lib/hero-images";

interface BreadcrumbProps {
 items: { label: string; href?: string }[];
 titleAs?: "h1" | "p";
}

export default function Breadcrumb({
 items,
 titleAs = "h1",
}: BreadcrumbProps) {
 const pageTitle = items[items.length - 1]?.label || "";
 const TitleTag = titleAs;

 return (
 <>
 <HeroImagePreload href={HERO_IMAGES.subPageBanner} />
 <section
 className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[450px] flex flex-col justify-center items-center -mt-[70px] pt-[130px] sm:pt-[160px] md:pt-[180px] pb-[40px] md:pb-[50px] px-5"
 style={{
 backgroundImage: "url('/images/banners/sub-page-hero-img.webp')",
 backgroundPosition: "top center",
 backgroundRepeat: "no-repeat",
 backgroundSize: "cover",
 }}
 >
 {/* Gradient overlay */}
 <div className="absolute inset-0 bg-[radial-gradient(at_bottom_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 {/* Dark overlay for readability */}
 <div className="absolute inset-0 bg-dark/60 pointer-events-none" />

 <div className="relative z-10 text-center">
 <TitleTag className="text-[28px] sm:text-[32px] md:text-[56px] font-semibold font-fira text-white leading-[1.2em] mb-4">
 {pageTitle}
 </TitleTag>
 <nav>
 <ol className="flex items-center justify-center space-x-2 text-[14px] uppercase">
 <li>
 <Link href="/" className="text-white hover:text-primary transition-colors flex items-center gap-1">
 <FiHome className="w-3.5 h-3.5 text-primary" />
 Home
 </Link>
 </li>
 {items.map((item, index) => (
 <li key={index} className="flex items-center space-x-2">
 <FiChevronRight className="w-3.5 h-3.5 text-primary" />
 {item.href? (
 <Link href={item.href} className="text-white hover:text-primary transition-colors">
 {item.label}
 </Link>
 ) : (
 <span className="text-primary font-medium">{item.label}</span>
 )}
 </li>
 ))}
 </ol>
 </nav>
 </div>
 </section>
 </>
 );
}

