import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconBox from "@/components/ui/IconBox";
import { serviceDetails } from "@/data/services";
import CloudFAQ from "@/components/sections/CloudFAQ";
import { getCanonicalUrl } from "@/lib/seo";
import {
 FaAws,
 FaCogs,
 FaChartLine,
 FaShieldAlt,
 FaRocket,
 FaDollarSign,
 FaCloud,
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
 FaExpandArrowsAlt,
 FaLock,
 FaUsers,
 FaEye,
 FaServer,
} from "react-icons/fa";

export const metadata: Metadata = {
 title:
 "Cloud Consulting & Cloud Services for Scalable Digital Transformation | VirtueByte",
 description:
 "VirtueByte provides cloud consulting, migration, DevOps automation, and AWS/Azure solutions for secure, scalable growth.",
 alternates: {
 canonical: getCanonicalUrl("/services/cloud-services/"),
 },
};

const whyChooseItems = [
 { icon: FaAws, title: "Deep AWS, Azure & Multi-Cloud Expertise", description: "Proven capabilities across major cloud platforms and hybrid environments." },
 { icon: FaCogs, title: "Customized Cloud Transformation Strategies", description: "Every engagement is tailored to your infrastructure, workloads, and growth goals." },
 { icon: FaDollarSign, title: "Cost-Efficient, Performance-Optimized Architecture", description: "We design for both performance and budget efficiency." },
 { icon: FaRocket, title: "DevOps-Driven Cloud Implementation", description: "CI/CD, automation, and monitoring built into every deployment." },
 { icon: FaCloud, title: "Proven Cloud Migration Frameworks", description: "Structured migration with zero-downtime planning and minimal disruption." },
 { icon: FaShieldAlt, title: "Security-First Governance Standards", description: "Compliance, encryption, and access controls at every layer." },
 { icon: FaServer, title: "Automation-Focused Deployment Pipelines", description: "Automated testing, deployment, and monitoring for faster releases." },
];

const howItWorks = [
 {
 icon: FaSearch,
 title: "Discovery & Assessment",
 description:
 "We evaluate your infrastructure, workloads, applications, compliance requirements, and scalability goals.",
 },
 {
 icon: FaRoute,
 title: "Solution Design & Roadmapping",
 description:
 "We design a secure cloud architecture and DevOps automation roadmap aligned with business objectives.",
 },
 {
 icon: FaTools,
 title: "Development & Implementation",
 description:
 "We execute cloud migration, configure infrastructure, implement CI/CD pipelines, and deploy automation workflows.",
 },
 {
 icon: FaSyncAlt,
 title: "Testing & Optimization",
 description:
 "We conduct performance tuning, cost optimization, monitoring setup, and security validation.",
 },
 {
 icon: FaHandshake,
 title: "Maintenance & Support",
 description:
 "We provide ongoing monitoring, infrastructure optimization, compliance updates, and continuous improvement.",
 },
];

const industryApps = [
 {
 icon: FaHeartbeat,
 title: "Healthcare Systems",
 items: ["Secure patient data management", "Scalable healthcare platforms", "HIPAA-compliant cloud environments"],
 },
 {
 icon: FaUniversity,
 title: "Finance & FinTech",
 items: ["High-security cloud environments", "Compliance-ready infrastructure", "Automated deployment systems"],
 },
 {
 icon: FaShoppingCart,
 title: "Retail & eCommerce",
 items: ["Scalable high-traffic hosting", "Personalized shopping experiences", "Real-time analytics"],
 },
 {
 icon: FaIndustry,
 title: "Manufacturing & Industrial",
 items: ["IoT-enabled cloud platforms", "Predictive analytics infrastructure", "ERP cloud migration"],
 },
 {
 icon: FaTruck,
 title: "Logistics & Transportation",
 items: ["Real-time tracking systems", "Cloud-based supply chain management", "Route optimization platforms"],
 },
];

const benefits = [
 { icon: FaDollarSign, text: "Reduce infrastructure and operational costs" },
 { icon: FaExpandArrowsAlt, text: "Increase scalability and flexibility" },
 { icon: FaRocket, text: "Improve deployment speed through DevOps automation" },
 { icon: FaShieldAlt, text: "Enhance security and compliance posture" },
 { icon: FaUsers, text: "Enable distributed and remote teams" },
 { icon: FaBolt, text: "Improve system reliability and uptime" },
 { icon: FaChartLine, text: "Accelerate digital transformation initiatives" },
 { icon: FaEye, text: "Gain real-time monitoring and visibility" },
];

export default function CloudServicesPage() {
 const data = serviceDetails["cloud-services"];

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
 Accelerate innovation, modernize infrastructure, and scale
 securely with intelligent cloud and DevOps solutions.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 Whether you&apos;re planning cloud migration, optimizing infrastructure, or implementing DevOps automation, our cloud experts help you build resilient, scalable, and cost-efficient cloud ecosystems designed for long-term growth with expert DevOps consulting services. As part of our offerings, we also deliver Cloud Consulting Services businesses rely on for scalable and secure cloud transformation.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 Cloud consulting and cloud services help organizations design,
 migrate, optimize, and secure their infrastructure using modern
 cloud platforms. It&apos;s not just about moving servers - it&apos;s
 about transforming how your business operates, deploys
 applications, and scales technology.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-8">
 We combine cloud strategy with DevOps consulting services to help
 businesses modernize their digital infrastructure efficiently - enabling faster deployment cycles, reduced costs, increased
 scalability, stronger security, and improved uptime.
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
 Cloud consulting and cloud services help organizations design, migrate, optimize, and secure their infrastructure using modern cloud platforms. It is not just about moving servers, it&apos;s about transforming how your business operates, deploys applications, and scales technology.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 Cloud transformation enables:
 </p>
 <ul className="space-y-2 mb-4">
 <li className="text-text-light text-[16px] md:text-[18px] leading-relaxed flex items-start gap-2"><span className="text-primary mt-1 text-sm">{"\u2726"}</span><span>Faster software deployment cycles</span></li>
 <li className="text-text-light text-[16px] md:text-[18px] leading-relaxed flex items-start gap-2"><span className="text-primary mt-1 text-sm">{"\u2726"}</span><span>Reduced infrastructure costs</span></li>
 <li className="text-text-light text-[16px] md:text-[18px] leading-relaxed flex items-start gap-2"><span className="text-primary mt-1 text-sm">{"\u2726"}</span><span>Increased scalability and elasticity</span></li>
 <li className="text-text-light text-[16px] md:text-[18px] leading-relaxed flex items-start gap-2"><span className="text-primary mt-1 text-sm">{"\u2726"}</span><span>Stronger security and compliance</span></li>
 <li className="text-text-light text-[16px] md:text-[18px] leading-relaxed flex items-start gap-2"><span className="text-primary mt-1 text-sm">{"\u2726"}</span><span>Improved disaster recovery and uptime</span></li>
 </ul>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify">
 We combine cloud strategy with DevOps consulting services to help businesses modernize their digital infrastructure efficiently through specialized cloud DevOps consulting services.
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
 subtitle="Businesses choose us for cloud consulting and DevOps automation because we combine technical depth with strategic thinking."
 />
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
 <AnimatedSection animation="fadeInUp" delay={0.8}>
 <p className="text-primary text-center italic text-[16px] md:text-[18px] mt-8">
 We don&apos;t just migrate systems - we help organizations build scalable digital foundations, supported by reliable Cloud Consulting Services expertise.
 </p>
 </AnimatedSection>
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
 <AnimatedSection animation="fadeInUp" delay={0.6}>
 <p className="text-primary text-center italic text-[16px] md:text-[18px] mt-8">
 This structured approach ensures predictable timelines, reduced
 risks, and measurable ROI.
 </p>
 </AnimatedSection>
 </div>
 </section>

 {/* Industry Applications */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading
 title="Industry Applications"
 subtitle="Our cloud consulting and DevOps services support multiple industries."
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
 title="Benefits of Cloud Consulting & Services"
 subtitle="Cloud adoption is no longer optional - it is a competitive advantage."
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
 <CloudFAQ />

 {/* CTA */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[900px] mx-auto text-center">
 <AnimatedSection animation="fadeInUp">
 <h2
 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-6"
 style={{ lineHeight: "1.3em" }}
 >
 Book Your Free Cloud Strategy Call
 </h2>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-4 max-w-2xl mx-auto">
 Ready to modernize your infrastructure and accelerate software
 delivery?
 </p>
 <p className="text-primary italic text-[16px] md:text-[18px] mb-8 max-w-2xl mx-auto">
 Let&apos;s build a scalable, secure, and automation-driven cloud
 environment for your business.
 </p>
 <Link
 href="/contact"
 className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
 >
 Talk to a Cloud Expert
 </Link>
 </AnimatedSection>
 </div>
 </section>
 </>
 );
}


