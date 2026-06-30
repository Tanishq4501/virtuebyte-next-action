import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconBox from "@/components/ui/IconBox";
import { serviceDetails } from "@/data/services";
import DevOpsFAQ from "@/components/sections/DevOpsFAQ";
import { getCanonicalUrl } from "@/lib/seo";
import {
 FaCogs,
 FaChartLine,
 FaShieldAlt,
 FaRocket,
 FaDollarSign,
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
 FaUsers,
 FaClock,
 FaCode,
 FaServer,
 FaCloudUploadAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
 title:
 "DevOps Consulting Services for Faster, Reliable & Scalable Delivery | VirtueByte",
 description:
 "Accelerate software delivery with expert DevOps consulting - CI/CD pipeline implementation, infrastructure automation, containerization, monitoring, and cloud-native DevOps solutions.",
 alternates: {
 canonical: getCanonicalUrl("/services/devops-consulting-services/"),
 },
};

metadata.description =
 "VirtueByte provides DevOps consulting, CI/CD automation, infrastructure as code, and monitoring for faster, reliable delivery.";

const whyChooseItems = [
 { icon: FaCogs, title: "End-to-End DevOps Expertise", description: "From strategy to execution - we cover CI/CD, IaC, containers, monitoring, and cloud-native architecture." },
 { icon: FaCode, title: "Tool-Agnostic Approach", description: "We work with your preferred stack - Jenkins, GitLab, GitHub Actions, Docker, Kubernetes, Terraform, Ansible, and more." },
 { icon: FaRocket, title: "Faster Time-to-Market", description: "Automated pipelines and streamlined workflows accelerate releases without sacrificing quality." },
 { icon: FaShieldAlt, title: "Security-First DevSecOps", description: "Security integrated into every stage of the pipeline - from code commit to production deployment." },
 { icon: FaDollarSign, title: "Cost-Optimized Infrastructure", description: "Right-sized environments, automated scaling, and waste elimination reduce operational costs." },
 { icon: FaUsers, title: "Dedicated DevOps Teams", description: "Experienced engineers embedded within your workflows for seamless collaboration and knowledge transfer." },
 { icon: FaCloudUploadAlt, title: "Cloud-Native & Multi-Cloud Ready", description: "DevOps strategies that work across AWS, Azure, GCP, and hybrid environments." },
];

const howItWorks = [
 {
 icon: FaSearch,
 title: "Assessment & Discovery",
 description:
 "We evaluate your current development workflows, infrastructure, toolchain, and deployment processes to identify bottlenecks.",
 },
 {
 icon: FaRoute,
 title: "Strategy & Roadmapping",
 description:
 "We design a DevOps transformation roadmap aligned with your release goals, security requirements, and scalability needs.",
 },
 {
 icon: FaTools,
 title: "Pipeline & Automation Setup",
 description:
 "We implement CI/CD pipelines, infrastructure as code, containerization, and automated testing frameworks.",
 },
 {
 icon: FaSyncAlt,
 title: "Monitoring & Optimization",
 description:
 "We deploy real-time monitoring, centralized logging, alerting, and performance tuning across your environments.",
 },
 {
 icon: FaHandshake,
 title: "Ongoing Support & Improvement",
 description:
 "We provide continuous optimization, incident response support, and pipeline enhancements as your systems evolve.",
 },
];

const industryApps = [
 {
 icon: FaHeartbeat,
 title: "Healthcare",
 items: ["HIPAA-compliant CI/CD pipelines", "Secure deployment automation", "Scalable health platform infrastructure"],
 },
 {
 icon: FaUniversity,
 title: "Finance & Banking",
 items: ["Compliance-driven deployment workflows", "High-availability infrastructure", "Automated security scanning"],
 },
 {
 icon: FaShoppingCart,
 title: "Retail & eCommerce",
 items: ["Rapid feature deployment", "Auto-scaling for peak traffic", "Zero-downtime releases"],
 },
 {
 icon: FaIndustry,
 title: "Manufacturing",
 items: ["IoT pipeline automation", "ERP system integration", "Predictive maintenance platforms"],
 },
 {
 icon: FaTruck,
 title: "Logistics & Supply Chain",
 items: ["Real-time tracking deployments", "Microservices orchestration", "Multi-region infrastructure"],
 },
];

const benefits = [
 { icon: FaRocket, text: "60% reduction in deployment time" },
 { icon: FaShieldAlt, text: "40% decrease in infrastructure incidents" },
 { icon: FaClock, text: "Faster mean time to recovery (MTTR)" },
 { icon: FaDollarSign, text: "Lower infrastructure and operational costs" },
 { icon: FaExpandArrowsAlt, text: "Improved scalability and resource utilization" },
 { icon: FaBolt, text: "Higher deployment frequency and release confidence" },
 { icon: FaChartLine, text: "Better visibility with real-time monitoring" },
 { icon: FaServer, text: "Consistent, reproducible environments across stages" },
];

export default function DevOpsConsultingPage() {
 const data = serviceDetails["devops-consulting-services"];

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
 Accelerate releases, reduce failures, and build resilient
 infrastructure with expert DevOps consulting.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 At Virtuebyte, we deliver strategic and implementation-driven DevOps consulting services businesses trust to modernize software delivery, automate infrastructure, and scale securely in the cloud, including specialized DevOps consulting services organizations rely on for enterprise transformation. Whether you need CI/CD optimization, Kubernetes consulting, or full cloud DevOps transformation, our experts help you move from manual processes to intelligent automation.
 </p>
 {/* <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 From CI/CD pipeline design to infrastructure automation,
 containerization, and real-time monitoring, we deliver end-to-end
 DevOps solutions that reduce deployment time, improve system
 reliability, and lower operational costs.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-8">
 Whether you&apos;re starting your DevOps journey or optimizing
 existing pipelines, our consultants bring deep expertise across
 cloud platforms, automation frameworks, and enterprise-grade
 toolchains to help you ship faster with confidence.
 </p> */}
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
 DevOps consulting helps organizations streamline collaboration between development and operations teams while automating software delivery pipelines. It focuses on reducing deployment risks, improving release velocity, and building scalable cloud-native infrastructure.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 Modern businesses rely on rapid software iterations. Without DevOps automation, deployments become slow, error-prone, and expensive. Our DevOps automation consulting serviceshelp companies improve release cycles, reduce downtime, and enhance system resilience.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify">
 We combine strategy, tools, and engineering expertise to create a seamless DevOps ecosystem built for long-term growth, supported by DevOps Consulting Services enterprises use to modernize their infrastructure and delivery pipelines.
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
 title="Why Choose VirtueByte for DevOps"
 subtitle="Organizations choose us because we combine hands-on engineering expertise with strategic DevOps transformation."
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
 <div className="mt-10 text-center">
 <p className="text-primary italic text-[16px] md:text-[18px] mb-4">
 Proven Results:
 </p>
 <div className="flex flex-wrap justify-center gap-8">
 <div className="text-center">
 <p className="text-[36px] font-bold text-white font-fira">60%</p>
 <p className="text-text-light text-[14px]">Reduction in Deployment Time</p>
 </div>
 <div className="text-center">
 <p className="text-[36px] font-bold text-white font-fira">40%</p>
 <p className="text-text-light text-[14px]">Decrease in Infrastructure Incidents</p>
 </div>
 <div className="text-center">
 <p className="text-[36px] font-bold text-white font-fira">3x</p>
 <p className="text-text-light text-[14px]">Faster Release Frequency</p>
 </div>
 </div>
 </div>
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
 risks, and measurable improvements.
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
 subtitle="Our DevOps consulting services support organizations across diverse industries."
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
 title="Benefits of DevOps Consulting"
 subtitle="DevOps isn't just a practice - it's a competitive advantage for modern software teams."
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
 <DevOpsFAQ />

 {/* CTA */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[900px] mx-auto text-center">
 <AnimatedSection animation="fadeInUp">
 <h2
 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-6"
 style={{ lineHeight: "1.3em" }}
 >
 Book Your Free DevOps Strategy Call
 </h2>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-4 max-w-2xl mx-auto">
 Ready to accelerate your software delivery and build resilient
 infrastructure?
 </p>
 <p className="text-primary italic text-[16px] md:text-[18px] mb-8 max-w-2xl mx-auto">
 Let&apos;s design a DevOps strategy that reduces deployment time,
 improves reliability, and scales with your business.
 </p>
 <Link
 href="/contact"
 className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
 >
 Talk to a DevOps Expert
 </Link>
 </AnimatedSection>
 </div>
 </section>
 </>
 );
}


