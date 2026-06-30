import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
 href: string;
 children: ReactNode;
 variant?: "primary" | "secondary" | "outline";
 size?: "sm" | "md" | "lg";
 className?: string;
 external?: boolean;
}

export default function CTAButton({
 href,
 children,
 variant = "primary",
 size = "md",
 className = "",
 external = false,
}: CTAButtonProps) {
 const baseClasses =
 "inline-flex items-center justify-center font-semibold font-lato uppercase tracking-wide transition-all duration-300";

 const sizeClasses = {
 sm: "px-[20px] py-[10px] text-[14px] rounded-[12px]",
 md: "px-[26px] py-[13px] text-[16px] rounded-[15px]",
 lg: "px-[30px] py-[15px] text-[16px] rounded-[15px]",
 };

 const variantClasses = {
 primary:
 "bg-primary text-white border border-primary hover:shadow-[0px_5px_5px_0px_rgba(251,0,252,0.56)]",
 secondary:
 "bg-dark text-white hover:bg-dark-2 shadow-md hover:shadow-lg rounded-lg",
 outline:
 "border-2 border-primary text-primary hover:bg-primary hover:text-white",
 };

 const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

 if (external) {
 return (
 <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
 {children}
 </a>
 );
 }

 return (
 <Link href={href} className={classes}>
 {children}
 </Link>
 );
}

