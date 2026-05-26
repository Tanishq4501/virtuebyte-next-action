import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

interface IconBoxProps {
 title: string;
 description: string;
 descriptionEmphasis?: boolean;
 image?: string;
 features?: string[];
 footer?: string;
 icon?: React.ReactNode;
 delay?: number;
 className?: string;
}

export default function IconBox({
 title,
 description,
 descriptionEmphasis = false,
 image,
 features,
 footer,
 icon,
 delay = 0,
 className = "",
}: IconBoxProps) {
 return (
 <AnimatedSection animation="fadeInUp" delay={delay} className={className}>
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] p-6 border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 h-full group overflow-hidden">
 {/* Gradient overlay */}
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative">
 {image && (
 <div className="relative w-full h-44 mb-4 rounded-[20px] overflow-hidden">
 <Image
 src={image}
 alt={`${title} illustration`}
 fill
 className="object-cover transition-transform duration-500 group-hover:-translate-y-1"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />
 </div>
 )}
 {icon && (
 <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 text-white">
 {icon}
 </div>
 )}
 <h3 className="text-[18px] md:text-[24px] font-semibold font-fira text-white mb-2 leading-[1.4em] group-hover:text-primary transition-colors">
 {title}
 </h3>
 <p
 className={`text-text-light text-[16px] md:text-[18px] leading-relaxed${
 descriptionEmphasis ? " font-semibold" : ""
 }`}
 >
 {description}
 </p>
 {features && features.length > 0 && (
 <ul className="mt-4 space-y-2">
 {features.map((feature, index) => (
 <li key={index} className="text-text-light text-[16px] md:text-[18px] leading-relaxed flex items-start gap-2">
 <span className="text-primary mt-1 text-sm">{"✦"}</span>
 <span>{feature}</span>
 </li>
 ))}
 </ul>
 )}
 {footer && (
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mt-4">{footer}</p>
 )}
 </div>
 </div>
 </AnimatedSection>
 );
}
