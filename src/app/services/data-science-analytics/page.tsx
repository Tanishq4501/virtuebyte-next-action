import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconBox from "@/components/ui/IconBox";
import { serviceDetails } from "@/data/services";
import DataScienceFAQ from "@/components/sections/DataScienceFAQ";
import { getCanonicalUrl } from "@/lib/seo";
import {
 FaBullseye,
 FaChartLine,
 FaShieldAlt,
 FaRocket,
 FaExpandArrowsAlt,
 FaCloud,
 FaCheckCircle,
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
 FaLightbulb,
 FaChartBar,
 FaCogs,
 FaUsers,
 FaEye,
} from "react-icons/fa";

export const metadata: Metadata = {
 title:
 "Data Science & Analytics Consulting Services | VirtueByte",
 description:
 "VirtueByte turns complex data into dashboards, predictive models, and analytics that improve business decisions and performance.",
 alternates: {
 canonical: getCanonicalUrl("/services/data-science-analytics/"),
 },
};

const whyChooseItems = [
 {
 icon: FaChartBar,
 title: "Deep Cross-Industry Analytics Expertise",
 description:
 "Our team has delivered analytics solutions across healthcare, finance, retail, logistics, and manufacturing.",
 },
 {
 icon: FaBullseye,
 title: "Tailored, Business-Specific Solutions",
 description:
 "No templates. No generic dashboards. Every analytics implementation aligns with your business goals.",
 },
 {
 icon: FaChartLine,
 title: "ROI-Focused Delivery Model",
 description:
 "We measure success through cost savings, revenue growth, and operational improvement.",
 },
 {
 icon: FaRocket,
 title: "Structured Data Delivery Framework",
 description:
 "Clear milestones, sprint-based execution, and transparent reporting.",
 },
 {
 icon: FaCloud,
 title: "Cloud & Enterprise Integration Expertise",
 description:
 "Strong capabilities in AWS, Azure, and enterprise data platforms.",
 },
 {
 icon: FaCheckCircle,
 title: "Proven Success Metrics",
 description:
 "Organizations working with us have achieved measurable improvements in operational efficiency, forecasting accuracy, and reporting speed.",
 },
];

const howItWorks = [
 {
 icon: FaSearch,
 title: "Discovery & Assessment",
 description:
 "We evaluate your current data landscape, existing tech stack, data quality, and business objectives to identify gaps and opportunities.",
 },
 {
 icon: FaRoute,
 title: "Solution Design & Roadmapping",
 description:
 "We design your analytics architecture, define KPIs, select modeling approaches, and build a practical implementation roadmap.",
 },
 {
 icon: FaTools,
 title: "Development & Implementation",
 description:
 "Our team develops ETL workflows, predictive models, BI dashboards, and cloud-based analytics systems aligned with your operational structure.",
 },
 {
 icon: FaSyncAlt,
 title: "Testing & Optimization",
 description:
 "We validate models, test dashboards, optimize queries, and ensure high performance across systems.",
 },
 {
 icon: FaHandshake,
 title: "Maintenance & Support",
 description:
 "Ongoing monitoring, performance tuning, and iterative improvements keep your analytics ecosystem efficient and scalable.",
 },
];

const industryApps = [
 {
 icon: FaHeartbeat,
 title: "Healthcare Analytics",
 items: [
 "Patient outcome forecasting",
 "Operational optimization",
 "Resource planning",
 ],
 },
 {
 icon: FaUniversity,
 title: "Finance & Risk Analytics",
 items: [
 "Credit risk modeling",
 "Fraud detection",
 "Revenue performance tracking",
 ],
 },
 {
 icon: FaShoppingCart,
 title: "Retail & Customer Insights",
 items: [
 "Customer data analytics",
 "Churn prediction",
 "Personalization engines",
 ],
 },
 {
 icon: FaIndustry,
 title: "Manufacturing & Quality Control",
 items: [
 "Predictive maintenance",
 "Throughput optimization",
 "Supply chain visibility",
 ],
 },
 {
 icon: FaTruck,
 title: "Logistics & Supply Chain",
 items: [
 "Route optimization",
 "Inventory forecasting",
 "Real-time shipment analytics",
 ],
 },
];

const benefits = [
 { icon: FaBolt, text: "Drive faster, data-backed decision-making" },
 { icon: FaLightbulb, text: "Identify hidden trends and growth opportunities" },
 { icon: FaCogs, text: "Improve operational efficiency through automation" },
 { icon: FaChartLine, text: "Predict customer and market behavior" },
 { icon: FaUsers, text: "Enhance customer experience through intelligent personalization" },
 { icon: FaCloud, text: "Build scalable cloud analytics infrastructure" },
 { icon: FaEye, text: "Gain real-time business visibility" },
];

export default function DataScienceAnalyticsPage() {
 const data = serviceDetails["data-science-analytics"];

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
 Transform raw data into actionable business intelligence.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 Modern businesses generate massive amounts of data - but data
 alone doesn&apos;t drive growth. Insight does. At VirtueByte, we
 provide advanced data science and analytics consulting services
 that help organizations convert complex datasets into meaningful,
 revenue-driving intelligence.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-4">
 Whether you&apos;re looking for data analytics consulting, business intelligence consulting, predictive modeling, or cloud data analytics services, our team helps you unlock measurable value from your data ecosystem through expert data analytics consulting. We also support businesses looking for Data Analytics Services and Data Science Services with scalable, enterprise-ready solutions tailored for global growth.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify max-w-4xl mx-auto mb-8">
 Data science and analytics consulting transforms structured and
 unstructured data into predictive insights, performance
 intelligence, and strategic business recommendations.
 Today&apos;s competitive landscape demands real-time
 decision-making, customer intelligence, and scalable cloud-based
 analytics. VirtueByte delivers end-to-end data science consulting
 and analytics implementation services designed to modernize your
 data infrastructure and drive measurable ROI.
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
 Turning Data Into Strategic Advantage
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 Data science and analytics consulting is the process of transforming structured and unstructured data into predictive insights, performance intelligence, and strategic business recommendations.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify mb-4">
 Today&apos;s competitive landscape demands real-time decision-making, customer intelligence, and scalable cloud-based analytics. Organizations that leverage advanced analytics outperform competitors in efficiency, profitability, and innovation.
 </p>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed text-justify">
 VirtueByte delivers end-to-end data science consulting and analytics implementation services designed to modernize your data infrastructure and drive measurable ROI as a trusted predictive data analytics company.
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
 subtitle="Data-driven expertise that delivers results."
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
 subtitle="Data analytics adoption varies across industries. We tailor implementation accordingly."
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
 title="Benefits of Data Science & Analytics Consulting"
 subtitle="Partnering with an experienced analytics consulting company delivers measurable advantages."
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
 <DataScienceFAQ />

 {/* CTA */}
 <section className="relative py-[80px] overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_center,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[900px] mx-auto text-center">
 <AnimatedSection animation="fadeInUp">
 <h2
 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-6"
 style={{ lineHeight: "1.3em" }}
 >
 Ready to Unlock the Power of Your Data?
 </h2>
 <p className="text-text-light text-[16px] md:text-[18px] leading-relaxed mb-4 max-w-2xl mx-auto">
 Your data contains untapped growth opportunities. Let&apos;s
 transform it into a strategic asset.
 </p>
 <p className="text-primary italic text-[16px] md:text-[18px] mb-8 max-w-2xl mx-auto">
 Connect with our experts and start building a smarter,
 data-driven future.
 </p>
 <Link
 href="/contact"
 className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
 >
 Book Your Free Data Strategy Call
 </Link>
 </AnimatedSection>
 </div>
 </section>
 </>
 );
}


