"use client";

import { useState, FormEvent } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MapEmbed from "@/components/ui/MapEmbed";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
 {
 icon: <FaPhoneAlt className="w-5 h-5" />,
 label: "PHONE NUMBER",
 value: "+91-20-677088756",
 href: "tel:+912067708875",
 },
 {
 icon: <FaEnvelope className="w-5 h-5" />,
 label: "EMAIL ADDRESS",
 values: [
 { text: "For Sales: sales@virtuebytech.com", href: "mailto:sales@virtuebytech.com" },
 { text: "For Job Opportunities: careers@virtuebytech.com", href: "mailto:careers@virtuebytech.com" },
 ],
 },
 {
 icon: <FaMapMarkerAlt className="w-5 h-5" />,
 label: "OFFICE LOCATION",
 value: "416, Sacred World, South Block, Wanowrie, Pune 411040, Maharashtra, India.",
 },
];

export default function ContactPage() {
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 phone: "",
 message: "",
 });
 const [submitted, setSubmitted] = useState(false);
 const [submitting, setSubmitting] = useState(false);
 const [error, setError] = useState("");

 const handleSubmit = async (e: FormEvent) => {
 e.preventDefault();
 setSubmitting(true);
 setError("");
 try {
 const res = await fetch("https://formsubmit.co/ajax/careers@virtuebytech.com", {
 method: "POST",
 headers: { "Content-Type": "application/json", "Accept": "application/json" },
 body: JSON.stringify({
 name: formData.name,
 email: formData.email,
 phone: formData.phone,
 message: formData.message,
 _subject: `New Contact Form Submission from ${formData.name}`,
 _captcha: "false",
 _template: "table",
 }),
 });
 const data = await res.json();
 if (data.success) {
 setSubmitted(true);
 } else {
 setError("Something went wrong. Please try again.");
 }
 } catch {
 setError("Network error. Please try again later.");
 } finally {
 setSubmitting(false);
 }
 };

 return (
 <>
 <Breadcrumb items={[{ label: "Contact Us" }]} />

 {/* Contact Info */}
 <section className="relative py-[50px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading title="Get In Touch With Us" />
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
 {contactInfo.map((info, index) => (
 <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.15}>
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] p-6 border border-[#E5A2FF0A] text-center h-full hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all hover-bob">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative">
 <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-white">
 {info.icon}
 </div>
 <h3 className="font-semibold text-white font-fira mb-3">{info.label}</h3>
 {info.value && (
 info.href? (
 <a href={info.href} className="text-text-light text-[16px] md:text-[18px] hover:text-primary transition-colors break-words">
 {info.value}
 </a>
 ) : (
 <p className="text-text-light text-[16px] md:text-[18px] break-words">{info.value}</p>
 )
 )}
 {info.values && (
 <div className="space-y-1">
 {info.values.map((v, i) => (
 <a key={i} href={v.href} className="block text-text-light text-[15px] md:text-[16px] hover:text-primary transition-colors break-words">
 {v.text}
 </a>
 ))}
 </div>
 )}
 </div>
 </div>
 </AnimatedSection>
 ))}
 </div>

 {/* Form & Map */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 <AnimatedSection animation="fadeInLeft">
 <h2 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-6" style={{ lineHeight: '1.3em' }}>
 How can we help you
 </h2>
 {submitted? (
 <div className="bg-[#E5A2FF0A] border border-[#E5A2FF0A] rounded-[20px] p-8 text-center">
 <p className="text-primary font-semibold text-lg mb-2">Thank you!</p>
 <p className="text-text-light text-[18px]">Your message has been sent. We&apos;ll get back to you soon.</p>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-4">
 <div>
 <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
 Name *
 </label>
 <input
 type="text"
 id="name"
 required
 value={formData.name}
 onChange={(e) => setFormData({...formData, name: e.target.value })}
 className="w-full px-4 py-3 rounded-[10px] border border-[#E5A2FF0A] bg-[#E5A2FF0A] text-white placeholder-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[16px]"
 placeholder="Your name"
 />
 </div>
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
 Email *
 </label>
 <input
 type="email"
 id="email"
 required
 value={formData.email}
 onChange={(e) => setFormData({...formData, email: e.target.value })}
 className="w-full px-4 py-3 rounded-[10px] border border-[#E5A2FF0A] bg-[#E5A2FF0A] text-white placeholder-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[16px]"
 placeholder="your@email.com"
 />
 </div>
 <div>
 <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
 Phone Number
 </label>
 <input
 type="tel"
 id="phone"
 value={formData.phone}
 onChange={(e) => setFormData({...formData, phone: e.target.value })}
 className="w-full px-4 py-3 rounded-[10px] border border-[#E5A2FF0A] bg-[#E5A2FF0A] text-white placeholder-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[16px]"
 placeholder="Your phone number"
 />
 </div>
 <div>
 <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
 Message *
 </label>
 <textarea
 id="message"
 required
 rows={5}
 value={formData.message}
 onChange={(e) => setFormData({...formData, message: e.target.value })}
 className="w-full px-4 py-3 rounded-[10px] border border-[#E5A2FF0A] bg-[#E5A2FF0A] text-white placeholder-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[16px] resize-none"
 placeholder="How can we help you?"
 />
 </div>
 <button
 type="submit"
 disabled={submitting}
 className="w-full bg-primary text-white font-semibold uppercase py-3 px-6 rounded-[12px] hover:shadow-[0_0_20px_rgba(246,146,30,0.5)] transition-all text-[14px] tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
 >
 {submitting? "Sending..." : "Submit"}
 </button>
 {error && (
 <p className="text-red-400 text-sm text-center mt-2">{error}</p>
 )}
 </form>
 )}
 </AnimatedSection>

 <AnimatedSection animation="fadeInRight" delay={0.2}>
 <div className="rounded-[20px] overflow-hidden h-full min-h-[320px] md:min-h-[400px]">
 <MapEmbed className="w-full h-full" minHeight="320px" />
 </div>
 </AnimatedSection>
 </div>
 </div>
 </section>
 </>
 );
}

