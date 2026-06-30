import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconBox from "@/components/ui/IconBox";
import { serviceDetails } from "@/data/services";
import AiMlFAQ from "@/components/sections/AiMlFAQ";
import { getCanonicalUrl } from "@/lib/seo";
import {
 FaBullseye,
 FaCogs,
 FaChartLine,
 FaShieldAlt,
 FaRocket,
 FaExpandArrowsAlt,
 FaSyncAlt,
 FaSearch,
 FaRoute,
 FaTools,
 FaHandshake,
 FaHeartbeat,
 FaUniversity,
 FaShoppingCart,
 FaIndustry,
 FaTruck,
 FaBolt,
 FaComments,
 FaBrain,
 FaLightbulb,
 FaChartBar,
} from "react-icons/fa";

export const metadata: Metadata = {
 title:
 "AI & Machine Learning Consulting Services | VirtueByte",
 description:
 "VirtueByte delivers AI and machine learning consulting to automate workflows, improve decisions, and scale intelligent operations.",
 alternates: {
 canonical: getCanonicalUrl("/services/ai-ml-consulting/"),
 },
};

const whyChooseItems = [
 { icon: FaBullseye, text: "Industry-focused AI expertise" },
 { icon: FaCogs, text: "Custom-built solutions - never generic frameworks" },
 { icon: FaChartLine, text: "ROI-driven AI automation consulting" },
 { icon: FaRocket, text: "Structured implementation framework" },
 { icon: FaExpandArrowsAlt, text: "Scalable and secure model deployment" },
 { icon: FaSyncAlt, text: "Continuous optimization support" },
];

const howItWorks = [
 {
 icon: FaSearch,
 title: "Discovery & Assessment",
 description:
 "We evaluate your current data ecosystem, infrastructure, and business objectives.",
 },
 {
 icon: FaRoute,
 title: "Solution Design & Roadmapping",
 description:
 "We define AI use cases, architecture design, and phased implementation plans aligned with best practices.",
 },
 {
 icon: FaTools,
 title: "Development & Implementation",
 description:
 "Our team builds custom machine learning models and integrates AI systems into your environment.",
 },
 {
 icon: FaSyncAlt,
 title: "Testing & Optimization",
 description:
 "We validate model accuracy, optimize performance, and refine predictive capabilities.",
 },
 {
 icon: FaHandshake,
 title: "Maintenance & Support",
 description:
 "Continuous monitoring, retraining, and performance enhancements ensure long-term scalability.",
 },
];

const industries = [
 {
 icon: FaHeartbeat,
 title: "Healthcare Analytics",
 description:
 "Predictive patient insights, automated documentation, operational forecasting.",
 },
 {
 icon: FaUniversity,
 title: "Finance & Risk Modeling",
 description:
 "Fraud detection, credit risk assessment, algorithmic forecasting.",
 },
 {
 icon: FaShoppingCart,
 title: "Retail Personalization",
 description:
 "Recommendation engines, behavioral analytics, dynamic pricing models.",
 },
 {
 icon: FaIndustry,
 title: "Manufacturing Automation",
 description:
 "Predictive maintenance, quality inspection models, supply chain optimization.",
 },
 {
 icon: FaTruck,
 title: "Logistics & Forecasting",
 description:
 "Demand forecasting, route optimization, operational efficiency modeling.",
 },
];

const benefits = [
 { icon: FaBolt, text: "Faster decision-making through predictive insights" },
 { icon: FaCogs, text: "Reduced operational costs via intelligent automation" },
 {
 icon: FaComments,
 text: "Enhanced customer engagement with AI chat systems",
 },
 { icon: FaChartBar, text: "Improved forecasting accuracy" },
 { icon: FaShieldAlt, text: "Scalable, secure AI infrastructure" },
 {
 icon: FaLightbulb,
 text: "Long-term competitive advantage",
 },
];

export default function AiMlConsultingPage() {
 const data = serviceDetails["ai-ml-consulting"];

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
 Turn data into intelligent action with scalable AI and machine
 learning solutions designed to improve efficiency, automate
 workflows, and accelerate decision-making.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 VirtueByte delivers strategic AI consulting services, machine learning development, and enterprise AI integration tailored to modern business environments. As a trusted provider of AI Consulting Services, we help businesses transform raw data into measurable outcomes with scalable AI implementation strategies across the globe.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-8">
 AI &amp; ML consulting bridges this gap by transforming raw data
 into operational intelligence. We guide businesses from strategy
 to production-ready deployment, delivering scalable enterprise AI
 solutions designed to improve efficiency, scalability, and
 measurable ROI.
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
 Artificial Intelligence (AI) and Machine Learning (ML) consulting helps organizations identify, design, and deploy intelligent systems that automate decision-making and unlock predictive insights from business data.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 Today, businesses generate vast amounts of data - but without structured AI implementation, that data remains underutilized. AI &amp; ML consulting bridges this gap by transforming raw data into operational intelligence through scalable enterprise AI solutions.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify">
 As an AI implementation company focused on enterprise scalability, we guide businesses from strategy to production-ready deployment, delivering advanced AI consulting services in and nationwide.
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
 title="Why Choose VirtueByte for AI & ML Consulting"
 subtitle="Choosing the right machine learning consulting company directly impacts ROI and scalability."
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
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-4">
 We focus on practical, enterprise-ready AI - not experimental
 concepts, delivering scalable AI solutions for long-term
 business impact.
 </p>
 <p className="text-primary italic text-[16px]">
 Our approach ensures business impact, not just technical
 implementation.
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
 <SectionHeading
 title="How It Works"
 subtitle="We follow a structured AI consulting journey to ensure measurable results."
 />
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
 This process ensures clarity, predictability, and measurable ROI
 at every stage.
 </p>
 </AnimatedSection>
 </div>
 </section>

 {/* Industry Applications */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading
 title="Industry Applications of AI & Machine Learning"
 subtitle="AI adoption varies across industries. We tailor implementation accordingly."
 />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
 {industries.map((item, index) => (
 <AnimatedSection
 key={item.title}
 animation="fadeInUp"
 delay={index * 0.1}
 >
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 text-center h-full hover-bob">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative">
 <item.icon className="text-primary text-3xl mx-auto mb-3" />
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
 <AnimatedSection animation="fadeInUp" delay={0.6}>
 <p className="text-primary text-center italic text-[16px] md:text-[18px] mt-8">
 Industry-specific use cases improve deployment precision and
 business relevance.
 </p>
 </AnimatedSection>
 </div>
 </section>

 {/* Benefits */}
 <section className="relative py-[80px] bg-[#E5A2FF0A] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_right,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <SectionHeading
 title="Benefits of AI & ML Consulting"
 subtitle="Partnering with an experienced AI consulting company delivers measurable advantages."
 />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {benefits.map((item, index) => (
 <AnimatedSection
 key={index}
 animation="fadeInUp"
 delay={index * 0.1}
 >
 <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 p-6 h-full hover-bob">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative flex items-start gap-4">
 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
 <item.icon className="text-primary text-lg" />
 </div>
 <span className="text-text-light text-[16px] md:text-[18px]">
 {item.text}
 </span>
 </div>
 </div>
 </AnimatedSection>
 ))}
 </div>
 <AnimatedSection animation="fadeInUp" delay={0.7}>
 <p className="text-primary text-center italic text-[16px] md:text-[18px] mt-8">
 AI is no longer optional for growth-focused organizations - it&apos;s
 a strategic necessity.
 </p>
 </AnimatedSection>
 </div>
 </section>

 {/* FAQ */}
 <AiMlFAQ />

 {/* CTA */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[900px] mx-auto text-center">
 <AnimatedSection animation="fadeInUp">
 <h2
 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-6"
 style={{ lineHeight: "1.3em" }}
 >
 Transform Your Business with Intelligent AI Solutions
 </h2>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-4 max-w-2xl mx-auto">
 AI is most powerful when aligned with business strategy. If
 you&apos;re exploring AI consulting, machine learning
 implementation, or enterprise AI integration - VirtueByte is ready
 to guide you from strategy to deployment.
 </p>
 <p className="text-primary italic text-[16px] md:text-[18px] mb-8 max-w-2xl mx-auto">
 Let&apos;s design intelligent systems that drive measurable
 business growth.
 </p>
 <Link
 href="/contact"
 className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
 >
 Book Your Free AI Strategy Call
 </Link>
 </AnimatedSection>
 </div>
 </section>
 </>
 );
}


