"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type AnimationType = "fadeInUp" | "fadeIn" | "fadeInLeft" | "fadeInRight" | "scaleIn";

const initialTransforms: Record<AnimationType, string> = {
 fadeInUp: "translate3d(0, 40px, 0)",
 fadeIn: "none",
 fadeInLeft: "translate3d(-40px, 0, 0)",
 fadeInRight: "translate3d(40px, 0, 0)",
 scaleIn: "scale(0.9)",
};

interface AnimatedSectionProps {
 children: ReactNode;
 animation?: AnimationType;
 delay?: number;
 duration?: number;
 className?: string;
}

export default function AnimatedSection({
 children,
 animation = "fadeInUp",
 delay = 0,
 duration = 0.6,
 className = "",
}: AnimatedSectionProps) {
 const ref = useRef<HTMLDivElement>(null);
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
 const element = ref.current;
 if (!element) {
 return;
 }

 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true);
 observer.disconnect();
 }
 },
 { threshold: 0.1, rootMargin: "-50px 0px" }
 );

 observer.observe(element);
 return () => observer.disconnect();
 }, []);

 const style = useMemo(
 () => ({
 opacity: isVisible ? 1 : 0,
 transform: isVisible ? "none" : initialTransforms[animation],
 transitionProperty: "opacity, transform",
 transitionDuration: `${duration}s`,
 transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
 transitionDelay: `${delay}s`,
 willChange: "opacity, transform",
 }),
 [animation, delay, duration, isVisible]
 );

 return (
 <div
 ref={ref}
 style={style}
 className={className}
 >
 {children}
 </div>
 );
}

