import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconBox from "@/components/ui/IconBox";
import { serviceDetails } from "@/data/services";
import OffshoreFAQ from "@/components/sections/OffshoreFAQ";
import { getCanonicalUrl } from "@/lib/seo";
import {
 FaUsers,
 FaExchangeAlt,
 FaComments,
 FaShieldAlt,
 FaDollarSign,
 FaCogs,
 FaSearch,
 FaRoute,
 FaTools,
 FaSyncAlt,
 FaHandshake,
 FaHeartbeat,
 FaUniversity,
 FaShoppingCart,
 FaIndustry,
 FaTruck,
 FaBolt,
 FaRocket,
 FaClock,
 FaChartLine,
 FaLock,
 FaGlobe,
 FaCloud,
} from "react-icons/fa";

export const metadata: Metadata = {
 title:
 "Offshore Development Center (ODC) Services | VirtueByte",
 description:
 "Build a dedicated offshore development team with VirtueByte for scalable engineering, cloud, DevOps, and agile delivery support.",
 alternates: {
 canonical: getCanonicalUrl("/services/offshore-development-centers/"),
 },
};

const whyChooseItems = [
 {
 icon: FaUsers,
 title: "Experienced Offshore Engineering Teams",
 description:
 "Our professionals have delivered complex DevOps, cloud, and enterprise software projects across industries.",
 },
 {
 icon: FaExchangeAlt,
 title: "Flexible Engagement Models",
 description:
 "Choose from dedicated ODC, hybrid team extensions, or project-based engagements.",
 },
 {
 icon: FaComments,
 title: "Transparent Communication & Reporting",
 description:
 "Clear sprint updates, milestone tracking, and structured governance.",
 },
 {
 icon: FaShieldAlt,
 title: "Strong Data Security & IP Protection",
 description:
 "Strict compliance standards, secure environments, and confidentiality agreements.",
 },
 {
 icon: FaDollarSign,
 title: "Cost-Effective Global Delivery Model",
 description:
 "Optimize development budgets without compromising quality.",
 },
 {
 icon: FaCogs,
 title: "Proven DevOps-Driven Framework",
 description:
 "Our ODC integrates DevOps consulting services, CI/CD pipelines, and cloud automation into every engagement.",
 },
];

const howItWorks = [
 {
 icon: FaSearch,
 title: "Discovery & Assessment",
 description:
 "We analyze your technical requirements, business goals, infrastructure setup, and resource gaps to define the optimal ODC structure.",
 },
 {
 icon: FaRoute,
 title: "Solution Design & Roadmapping",
 description:
 "We design your offshore team structure, onboarding process, DevOps roadmap, and governance model aligned with your product lifecycle.",
 },
 {
 icon: FaTools,
 title: "Development & Implementation",
 description:
 "Dedicated offshore engineers begin sprint execution, development cycles, CI/CD implementation, and milestone tracking.",
 },
 {
 icon: FaSyncAlt,
 title: "Testing & Optimization",
 description:
 "We conduct quality assurance, performance testing, DevOps monitoring, and security validation to ensure reliable deployments.",
 },
 {
 icon: FaHandshake,
 title: "Maintenance & Support",
 description:
 "Continuous support, resource scaling, infrastructure optimization, and long-term technology partnership management.",
 },
];

const industryApps = [
 {
 icon: FaHeartbeat,
 title: "Healthcare Technology",
 items: [
 "HIPAA-compliant platforms",
 "Patient engagement systems",
 "Secure cloud-based applications",
 ],
 },
 {
 icon: FaUniversity,
 title: "Finance & FinTech",
 items: [
 "Secure transaction platforms",
 "Compliance-focused systems",
 "Scalable cloud infrastructure",
 ],
 },
 {
 icon: FaShoppingCart,
 title: "Retail & eCommerce",
 items: [
 "High-traffic eCommerce platforms",
 "Personalization engines",
 "Real-time analytics integrations",
 ],
 },
 {
 icon: FaIndustry,
 title: "Manufacturing & Industrial",
 items: [
 "ERP integrations",
 "IoT-based automation solutions",
 "Predictive maintenance systems",
 ],
 },
 {
 icon: FaTruck,
 title: "Logistics & Transportation",
 items: [
 "Fleet management platforms",
 "Route optimization tools",
 "Real-time tracking systems",
 ],
 },
];

const benefits = [
 { icon: FaDollarSign, text: "Reduce operational and development costs" },
 { icon: FaGlobe, text: "Access global tech talent with DevOps and cloud expertise" },
 { icon: FaRocket, text: "Accelerate CI/CD pipeline implementation" },
 { icon: FaExchangeAlt, text: "Scale engineering teams flexibly" },
 { icon: FaClock, text: "Enable 24/7 development productivity" },
 { icon: FaCogs, text: "Strengthen DevOps monitoring and automation" },
 { icon: FaLock, text: "Secure IP protection and compliance standards" },
 { icon: FaChartLine, text: "Improve time-to-market with agile delivery" },
];

export default function OffshoreDevelopmentCentersPage() {
 const data = serviceDetails["offshore-development-centers"];

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
 Build a dedicated offshore development team that accelerates
 innovation.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 Scaling technology teams internally can be slow, expensive, and
 operationally complex. VirtueByte&apos;s Offshore Development
 Center (ODC) services provide businesses with a dedicated,
 high-performing offshore engineering team that aligns with your
 long-term product roadmap and DevOps transformation strategy.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 As a trusted Offshore Development Company, we help businesses extend their engineering capabilities with scalable offshore teams and modern DevOps-driven delivery models.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-8">
 VirtueByte delivers end-to-end Offshore Development services
 designed to integrate seamlessly into your product ecosystem and
 DevOps cloud infrastructure.
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
 <p className="text-primary text-[18px] md:text-[22px] font-fira text-center mb-4">
 A Strategic Offshore Development Model Built for Modern Enterprises
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 An Offshore Development Center (ODC) is a dedicated remote team operating as an extension of your in-house engineering department. Unlike short-term outsourcing, ODC provides long-term strategic alignment, transparency, and scalability.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 In today&apos;s fast-moving digital economy, businesses require agile teams, DevOps automation, cloud-native development, and cost-efficient engineering models. An ODC helps organizations scale faster while maintaining quality, security, and operational efficiency.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify">
 VirtueByte delivers end-to-end Offshore Development services designed to integrate seamlessly into your product ecosystem and DevOps cloud infrastructure.
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
 subtitle="A high-performance offshore model backed by engineering excellence."
 />
 <p className={`mb-10 text-[16px] md:text-[18px] max-w-4xl leading-relaxed mx-auto`}>As an experienced Offshore Development Company, we combine global talent with proven engineering frameworks to deliver high-performance results.
</p>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {whyChooseItems.map((item, index) => (
 <AnimatedSection
 key={index}
 animation="fadeInUp"
 delay={index * 0.1}
 >
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 h-full hover-bob">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative">
 <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
 <item.icon className="text-primary text-xl" />
 </div>
 <h3 className="text-[18px] font-semibold font-fira text-white mb-2">
 {item.title}
 </h3>
 <p className="text-text-light text-[15px] leading-relaxed">
 {item.description}
 </p>
 </div>
 </div>
 </AnimatedSection>
 ))}
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

 {/* Industry Applications */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading
 title="Industry Applications"
 subtitle="Our ODC teams deliver industry-specific solutions with precision."
 />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
 {industryApps.map((industry, index) => (
 <AnimatedSection
 key={industry.title}
 animation="fadeInUp"
 delay={index * 0.1}
 >
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 h-full hover-bob">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative">
 <industry.icon className="text-primary text-3xl mb-3" />
 <h3 className="text-[16px] font-semibold font-fira text-white mb-3">
 {industry.title}
 </h3>
 <ul className="space-y-2">
 {industry.items.map((item, i) => (
 <li
 key={i}
 className="flex items-start gap-2 text-[14px] text-text-light"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
 {item}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </AnimatedSection>
 ))}
 </div>
 </div>
 </section>

 {/* Benefits */}
 <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading
 title="Benefits of Offshore Development Center Services"
 />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {benefits.map((benefit, index) => (
 <AnimatedSection
 key={index}
 animation="fadeInUp"
 delay={index * 0.1}
 >
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 text-center h-full hover-bob">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative">
 <benefit.icon className="text-primary text-2xl mx-auto mb-3" />
 <p className="text-white text-[15px] font-semibold font-fira">
 {benefit.text}
 </p>
 </div>
 </div>
 </AnimatedSection>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <OffshoreFAQ />

 {/* CTA */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[900px] mx-auto text-center">
 <AnimatedSection animation="fadeInUp">
 <h2
 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-6"
 style={{ lineHeight: "1.3em" }}
 >
 Ready to Build Your Offshore Engineering Team?
 </h2>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-4 max-w-2xl mx-auto">
 Accelerate innovation, strengthen DevOps capabilities, and scale
 your product delivery with a structured Offshore Development
 Center model.
 </p>
 <p className="text-primary italic text-[16px] md:text-[18px] mb-8 max-w-2xl mx-auto">
 Let&apos;s build a dedicated offshore team that grows with your
 business.
 </p>
 <Link
 href="/contact"
 className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
 >
 Book Your Free ODC Strategy Call
 </Link>
 </AnimatedSection>
 </div>
 </section>
 </>
 );
}

