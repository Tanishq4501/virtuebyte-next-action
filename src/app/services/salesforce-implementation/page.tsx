import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconBox from "@/components/ui/IconBox";
import { serviceDetails } from "@/data/services";
import SalesforceFAQ from "@/components/sections/SalesforceFAQ";
import { getCanonicalUrl } from "@/lib/seo";
import {
 FaBullseye,
 FaCogs,
 FaChartLine,
 FaShieldAlt,
 FaRocket,
 FaExpandArrowsAlt,
 FaHandshake,
 FaHeadset,
 FaSearch,
 FaRoute,
 FaTools,
 FaSyncAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
 title:
 "Salesforce Implementation & CRM Consulting Services | VirtueByte",
 description:
 "VirtueByte delivers Salesforce implementation and CRM consulting to improve productivity, visibility, and revenue growth.",
 alternates: {
 canonical: getCanonicalUrl("/services/salesforce-implementation/"),
 },
};

const whyChooseItems = [
 { icon: FaBullseye, text: "Industry-focused Salesforce experience" },
 { icon: FaCogs, text: "Customized CRM solutions (not one-size-fits-all)" },
 { icon: FaChartLine, text: "ROI-led CRM implementation strategy" },
 { icon: FaRocket, text: "Proven Salesforce deployment framework" },
 { icon: FaExpandArrowsAlt, text: "Scalable CRM architecture for growing businesses" },
 { icon: FaShieldAlt, text: "Secure and compliant CRM configurations" },
 { icon: FaHeadset, text: "Dedicated Salesforce CRM support services" },
];

const provenResults = [
 "35% increase in sales pipeline visibility",
 "40% improvement in lead response time",
 "Significant boost in CRM user adoption rates",
 "Improved reporting accuracy and forecasting powered by Salesforce analytics",
];

const howItWorks = [
 {
 icon: FaSearch,
 title: "Discovery & Assessment",
 description:
 "We evaluate your existing sales processes, marketing automation, customer lifecycle, reporting gaps, and growth goals.",
 },
 {
 icon: FaRoute,
 title: "Solution Design & Roadmapping",
 description:
 "We create a detailed Salesforce implementation roadmap aligned with your operational and revenue objectives.",
 },
 {
 icon: FaTools,
 title: "Development & Implementation",
 description:
 "We configure Salesforce, customize CRM modules, deploy AppExchange applications, and integrate third-party systems.",
 },
 {
 icon: FaSyncAlt,
 title: "Testing & Optimization",
 description:
 "We conduct system validation, workflow testing, user training, and performance tuning.",
 },
 {
 icon: FaHandshake,
 title: "Maintenance & Support",
 description:
 "We provide ongoing Salesforce CRM support, platform enhancements, AI feature integration, and continuous optimization.",
 },
];

export default function SalesforceImplementationPage() {
 const data = serviceDetails["salesforce-implementation"];

 return (
 <>
 <Breadcrumb
 items={[
 { label: "Services", href: "/services/" },
 { label: data.breadcrumb },
 ]}
 />

 {/* Hero Intro */}
 <section className="relative py-[50px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <AnimatedSection animation="fadeInUp">
 <h2
 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-4 text-center"
 style={{ lineHeight: "1.3em" }}
 >
 {data.title}
 </h2>
 <p className="text-primary text-center text-[16px] md:text-[18px] italic mb-6 max-w-3xl mx-auto">
 Streamline sales, marketing, and customer operations with
 customized Salesforce solutions designed to improve productivity,
 visibility, and revenue growth.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 At Virtuebyte, we provide strategic and implementation-driven Salesforce implementation services in and across the globe, helping organizations transform their CRM
 ecosystem into a growth engine. Whether you need complete CRM
 deployment, advanced customization, AI integration, or long-term
 Salesforce CRM support, our team ensures your Salesforce platform
 works exactly the way your business needs.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-8">
 Salesforce implementation and CRM consulting involve designing,
 customizing, and deploying Salesforce solutions that align with
 your sales processes, marketing automation, and customer service
 workflows. Modern businesses require centralized customer data,
 automated processes, and real-time analytics to stay competitive.
 Our Salesforce services are designed to improve efficiency,
 scalability, and measurable ROI.
 </p>
 <div className="text-center">
 <Link
 href="/contact"
 className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
 >
 Get a Free Consultation
 </Link>
 </div>
 </AnimatedSection>
 </div>
 </section>

 {/* What We Do - Service Cards */}
 <section className="relative py-[50px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 {data.sections[0]?.heading && (
 <SectionHeading title={data.sections[0].heading} />
 )}
 <div className="max-w-4xl mx-auto mb-10">
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 Salesforce implementation and CRM consulting involve designing, customizing, and deploying Salesforce solutions that align with your sales processes, marketing automation, and customer service workflows.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 Modern businesses require centralized customer data, automated processes, and real-time analytics to stay competitive. As a trusted Salesforce consulting firm in, we help companies streamline operations, improve pipeline visibility, and increase customer retention through tailored CRM strategies and salesforce CRM consulting.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify">
 Our Salesforce services are designed to improve efficiency, scalability, measurable ROI, and advanced Salesforce analytics solutions.
 </p>
 </div>
 {data.sections.map((section, sIdx) => (
 <div key={sIdx}>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {section.cards.map((card, cIdx) => (
 <IconBox
 key={cIdx}
 title={card.title}
 description={card.description}
 image={card.image}
 features={card.features}
 footer={card.footer}
 delay={cIdx * 0.15}
 />
 ))}
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Why Choose Us */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading
 title="Why Choose VirtueByte"
 subtitle="Businesses partner with VirtueByte because we combine technical depth with business-focused CRM strategy and proven Salesforce implementation expertise."
 />
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
 <AnimatedSection animation="fadeInLeft">
 <ul className="space-y-4">
 {whyChooseItems.map((item, i) => (
 <li key={i} className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
 <item.icon className="text-primary text-lg" />
 </div>
 <span className="text-text-light text-[16px] md:text-[18px]">
 {item.text}
 </span>
 </li>
 ))}
 </ul>
 </AnimatedSection>
 <AnimatedSection animation="fadeInRight" delay={0.2}>
 <div className="bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] p-8">
 <h3 className="text-[20px] font-semibold font-fira text-white mb-4">
 Proven Results
 </h3>
 <ul className="space-y-3">
 {provenResults.map((result, i) => (
 <li key={i} className="flex items-start gap-3">
 <span className="text-primary mt-1 text-sm">{"\u2726"}</span>
 <span className="text-text-light text-[16px] md:text-[18px]">
 {result}
 </span>
 </li>
 ))}
 </ul>
 <p className="text-primary italic text-[16px] mt-6">
 Our focus is not just implementation - it&apos;s measurable
 performance improvement.
 </p>
 </div>
 </AnimatedSection>
 </div>
 </div>
 </section>

 {/* How It Works */}
 <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_bottom_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading title="How It Works" />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
 {howItWorks.map((step, index) => (
 <AnimatedSection
 key={step.title}
 animation="fadeInUp"
 delay={index * 0.1}
 >
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 text-center h-full hover-bob">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative">
 <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
 <step.icon className="text-primary text-2xl" />
 </div>
 <span className="text-primary font-fira text-sm font-semibold">
 Step {index + 1}
 </span>
 <h3 className="text-[18px] font-semibold font-fira text-white mt-1 mb-2">
 {step.title}
 </h3>
 <p className="text-text-light text-[15px] leading-relaxed">
 {step.description}
 </p>
 </div>
 </div>
 </AnimatedSection>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <SalesforceFAQ />

 {/* CTA */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[900px] mx-auto text-center">
 <AnimatedSection animation="fadeInUp">
 <h2
 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-6"
 style={{ lineHeight: "1.3em" }}
 >
 Book Your Free Salesforce Strategy Call
 </h2>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-4 max-w-2xl mx-auto">
 Ready to transform your CRM into a scalable revenue-driving system backed by expert Salesforce implementation services in and intelligent Salesforce AI services in?
 </p>
 <p className="text-primary italic text-[16px] md:text-[18px] mb-8 max-w-2xl mx-auto">
 Let&apos;s build a customized, intelligent, and scalable
 Salesforce ecosystem for your business.
 </p>
 <Link
 href="/contact"
 className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
 >
 Book Your Free Salesforce Strategy Call
 </Link>
 </AnimatedSection>
 </div>
 </section>
 </>
 );
}


