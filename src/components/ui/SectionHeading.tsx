import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
 title: string;
 subtitle?: string;
 centered?: boolean;
 light?: boolean;
 className?: string;
}

export default function SectionHeading({
 title,
 subtitle,
 centered = true,
 light = false,
 className = "",
}: SectionHeadingProps) {
 return (
 <AnimatedSection animation="fadeInUp" className={`mb-10 lg:mb-14 ${centered? "text-center" : ""} ${className}`}>
 <h2
 className={`text-[26px] md:text-[36px] font-semibold font-fira leading-[1.3em] ${
 light? "text-white" : "text-white"
 }`}
 >
 {title}
 </h2>
 {subtitle && (
 <p
 className={`mt-4 text-[16px] md:text-[18px] max-w-3xl leading-relaxed ${
 centered? "mx-auto" : ""
 } text-text-light`}
 >
 {subtitle}
 </p>
 )}
 </AnimatedSection>
 );
}

