"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Header() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [openDropdown, setOpenDropdown] = useState<string | null>(null);
 const pathname = usePathname();

 useEffect(() => {
 const handleScroll = () => setScrolled(window.scrollY > 10);
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 useEffect(() => {
 setMobileMenuOpen(false);
 setOpenDropdown(null);
 }, [pathname]);

 return (
 <header
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
 scrolled? "bg-white shadow-lg" : "bg-white"
 } border-b border-[#E5A2FF0A]`}
 >
 <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between" style={{ minHeight: '70px' }}>
 {/* Logo */}
 <Link href="/" className="flex-shrink-0">
         <Image
           src={navigation.logo}
           alt="VirtueByte logo"
           width={300}
           height={45}
           className="h-8 lg:h-11 w-auto"
           fetchPriority="low"
         />
 </Link>

 {/* Desktop Navigation */}
 <nav className="hidden lg:flex items-center">
 {navigation.items.map((item) => {
 const isActive =
 pathname === item.href ||
 (item.href !== "/" && pathname?.startsWith(item.href.replace(/\/$/, "") + "/"));
 const hasChildren = "children" in item && item.children;

 return (
 <div
 key={item.label}
 className="relative group"
 onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
 onMouseLeave={() => hasChildren && setOpenDropdown(null)}
 >
 <Link
 href={item.href}
 className={`flex items-center px-[15px] py-2 text-[16px] font-semibold font-lato uppercase tracking-wide transition-colors ${
 isActive
? "text-primary"
 : "text-black hover:text-primary"
 }`}
 >
 {item.label}
 {hasChildren && (
 <FiChevronDown className={`ml-1 w-[15px] h-[15px] transition-transform group-hover:rotate-180 ${
 isActive? "text-primary" : "text-black group-hover:text-primary"
 }`} />
 )}
 </Link>

 {/* Dropdown */}
 {hasChildren && openDropdown === item.label && (
 <div className="absolute top-full left-0 w-[220px] bg-[#462D84] rounded-[10px] shadow-xl border border-[#E5A2FF0A] p-[10px] animate-fadeIn">
 {item.children!.map((child) => (
 <Link
 key={child.label}
 href={child.href}
 className={`block px-3 py-3 text-[17px] font-medium font-lato rounded-md transition-colors ${
 pathname === child.href
? "text-primary"
 : "text-white hover:text-primary"
 }`}
 >
 {child.label}
 </Link>
 ))}
 </div>
 )}
 </div>
 );
 })}
 </nav>

 {/* Mobile Menu Button */}
 <button
 className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 aria-label="Toggle menu"
 >
 {mobileMenuOpen? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
 </button>
 </div>
 </div>

 {/* Mobile Menu */}
 {mobileMenuOpen && (
 <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
 <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
 {navigation.items.map((item) => {
 const hasChildren = "children" in item && item.children;
 const isDropdownOpen = openDropdown === item.label;

 return (
 <div key={item.label}>
 <div className="flex items-center justify-between">
 <Link
 href={item.href}
 className={`flex-1 px-3 py-2.5 text-[16px] font-semibold font-lato uppercase rounded-md transition-colors ${
 pathname === item.href
? "text-primary bg-primary/5"
 : "text-black hover:text-primary hover:bg-gray-50"
 }`}
 >
 {item.label}
 </Link>
 {hasChildren && (
 <button
 onClick={() =>
 setOpenDropdown(isDropdownOpen? null : item.label)
 }
 className="p-2 text-gray-500 hover:text-primary"
 >
 <FiChevronDown
 className={`w-4 h-4 transition-transform ${
 isDropdownOpen? "rotate-180" : ""
 }`}
 />
 </button>
 )}
 </div>
 {hasChildren && isDropdownOpen && (
 <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-4">
 {item.children!.map((child) => (
 <Link
 key={child.label}
 href={child.href}
 className="block px-3 py-2 text-[15px] font-medium font-lato text-gray-700 hover:text-primary transition-colors"
 >
 {child.label}
 </Link>
 ))}
 </div>
 )}
 </div>
 );
 })}
 </nav>
 </div>
 )}
 </header>
 );
}

