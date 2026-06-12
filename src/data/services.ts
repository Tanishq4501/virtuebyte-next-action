export const services = [
 {
 id: "salesforce-implementation",
 title: "Salesforce Implementation Services",
 tagline: "Expert Salesforce Solutions for Scalable Business Growth",
 description: "Implement and customize Salesforce solutions to streamline processes, enhance customer management, and improve business performance.",
 image: "/images/services/salesforce-implementation.webp",
 href: "/services/salesforce-implementation/",
 },
 {
 id: "ai-ml-consulting",
 title: "AI & ML Consulting Services",
 tagline: "Driving Data-Driven Decisions with AI-Powered Solutions",
 description: "Design and implement machine learning models, intelligent systems, and optimized workflows to improve efficiency and automation.",
 image: "/images/services/ai-ml-consulting.webp",
 href: "/services/ai-ml-consulting/",
 },
 {
 id: "data-science-analytics",
 title: "Data Science & Analytics Solutions",
 tagline: "Data Driven Insights & Custom Models for Smarter Decisions",
 description: "Organize, integrate, and analyze data to build reliable data systems that enable AI-driven insights and informed decision-making.",
 image: "/images/services/data-science-analytics.webp",
 href: "/services/data-science-analytics/",
 },
 {
 id: "offshore-development-centers",
 title: "Offshore Development Center (ODC) Services",
 tagline: "Build and Scale Dedicated Offshore Teams with Confidence",
 description: "Set up and scale offshore development centers with skilled teams, flexible resources, and efficient delivery models.",
 image: "/images/services/offshore-development-centers.webp",
 href: "/services/offshore-development-centers/",
 },
 {
 id: "cloud-services",
 title: "Cloud Services & Solutions",
 tagline: "Scalable and Secure Cloud Solutions for Business Transformation",
 description: "Adopt, migrate, and optimize cloud environments to improve performance, scalability, and secure digital operations.",
 image: "/images/services/cloud-services.webp",
 href: "/services/cloud-services/",
 },
 {
 id: "devops-consulting-services",
 title: "DevOps Consulting Services",
 tagline: "Streamlining Development and Operations for Faster Delivery",
 description: "Implement DevOps strategies to automate workflows, enhance collaboration, and ensure reliable and efficient software delivery.",
 image: "/images/services/devops-consulting-services.webp",
 href: "/services/devops-consulting-services/",
 },
];

export const serviceDetails: Record<string, {
 title: string;
 breadcrumb: string;
 sections: {
 heading?: string;
 cards: { title: string; description: string; image?: string; features?: string[]; footer?: string }[];
 }[];
}> = {
 "salesforce-implementation": {
 title: "Salesforce Implementation & CRM Consulting Services",
 breadcrumb: "Salesforce Implementation",
 sections: [
 {
 heading: "What We Do:",
 cards: [
 {
 title: "Salesforce Implementation & Customization",
 description:
 "We deliver end-to-end Salesforce implementation services, covering everything from setup to advanced customization.",
 features: [
 "Full Salesforce setup and deployment",
 "Custom object and field configuration",
 "Workflow automation and approval processes",
 "Sales Cloud and Service Cloud configuration",
 "Dashboard and reporting customization",
 "Salesforce customization services",
 ],
 footer:
 "We ensure your CRM mirrors your exact business workflows - not the other way around, delivering tailored Salesforce custom solutions in.",
 image: "/images/services/sf-implementation-customization.webp",
 },
 {
 title: "CRM Strategy & Customization",
 description:
 "A successful CRM system starts with the right strategy.",
 features: [
 "CRM adoption roadmap",
 "Sales process optimization",
 "Marketing automation alignment",
 "Customer lifecycle mapping",
 "ROI & performance analysis powered by Salesforce analytics solutions in ",
 ],
 footer:
 "We focus on aligning Salesforce capabilities with measurable business outcomes.",
 image: "/images/services/crm-strategy.webp",
 },
 {
 title: "AppExchange App Setup & Custom Development",
 description:
 "As a full-service salesforce consulting company in, we extend platform capabilities through integrations and custom apps.",
 features: [
 "AppExchange app evaluation and setup",
 "Third-party system integrations",
 "Custom Lightning component development",
 "API integrations with ERP, marketing, and finance tools",
 ],
 footer:
 "We help you create a unified technology ecosystem with scalable Salesforce integration services in.",
 image: "/images/services/appexchange.webp",
 },
 {
 title: "Data Migration & Integration",
 description:
 "Secure data transition is critical during CRM implementation.",
 features: [
 "Secure migration from legacy CRM systems",
 "Data cleansing and normalization",
 "ETL process setup",
 "Ongoing data management and governance",
 ],
 footer:
 "We minimize disruption while ensuring clean, structured, and secure data.",
 image: "/images/services/data-collection.webp",
 },
 {
 title: "Salesforce Integration & Deployment",
 description:
 "We provide seamless salesforce integration services to ensure smooth system connectivity and advanced salesforce AI integration services.",
 features: [
 "Integration with marketing platforms, ERP systems, and customer portals",
 "API-based system connectivity",
 "Automation workflows",
 "Testing and go-live support",
 ],
 footer:
 "We also implement Salesforce AI services to enable predictive insights, automation intelligence, and enhanced reporting capabilities supported by Salesforce analytics solutions in.",
 image: "/images/services/cloud-integration.webp",
 },
 ],
 },
 ],
 },
 "ai-ml-consulting": {
 title: "AI & Machine Learning Consulting Services",
 breadcrumb: "AI & ML Consulting",
 sections: [
 {
 heading: "What We Do:",
 cards: [
 {
 title: "AI Strategy & Advisory",
 description: "Transform Ideas into Actionable AI Roadmaps",
 features: [
 "AI Readiness & Opportunity Assessment",
 "AI Use Case Discovery Workshops",
 "Business Process & Workflow Analysis",
 "GenAI Adoption Strategy",
 "AI Roadmap & Implementation Planning",
 ],
 footer:
 "We help organizations assess AI readiness, discover use cases, optimize workflows, and accelerate AI adoption with measurable outcomes.",
 image: "/images/new_img/Consultation and Requirement Gathering.webp",
 },
 {
 title: " Generative AI Solutions",
 description: "Enterprise AI Experiences Powered by Generative Intelligence",
 features: [
 "Enterprise AI Copilot Development",
 "Custom AI Chatbots & Virtual Assistants",
 "Knowledge Search & RAG Solutions",
 "AI Content & Document Generation",
 "LLM Integration with Enterprise Systems",
 ],
 footer:
 "Our solutions help businesses automate knowledge access, customer support, content generation, and enterprise workflows across internal systems.",
 image: "/images/services/ml-model-dev.webp",
 },
 {
 title: " Agentic AI Automation",
 description: "Intelligent AI Agents that Automate Operations.",
 features: [
 "AI Workflow Automation",
 "Autonomous AI Agents",
 "Multi-Agent Orchestration",
 "Human-in-the-Loop Automation",
 "Enterprise Process Automation",
 ],
 footer:
 "We build AI-driven automation systems that improve productivity and streamline enterprise operations.",
 image: "/images/services/ai-conversational.webp",
 },
 {
 title: "Machine Learning Solutions",
 description: "Predictive Intelligence for Smarter Decisions.",
 features: [
 "Predictive Analytics & Forecasting",
 "Fraud & Anomaly Detection",
 "Recommendation & Classification Systems",
 "NLP & Intelligent Document Processing",
 "Real-Time Analytics & Insights",
 ],
 footer:
 "Our ML systems help businesses make smarter, data-driven decisions in real time.",
 image: "/images/new_img/Data Preparation & Preprocessing.webp",
 },
 {
 title: " AI Engineering & MLOps",
 description: "Production-Ready AI Built for Scale.",
 features: [
 "MLOps & CI/CD Pipelines",
 "AI Model Deployment & Monitoring",
 "Cloud-Native AI Infrastructure",
 "AI APIs & Microservices Development",
 "Kubernetes & Containerized Deployments",
 ],
 footer:
 "We help businesses move AI from prototype to secure, production-ready environments.",
 image: "/images/services/ai-integration.webp",
 },
 ],
 },
 ],
 },
 "data-science-analytics": {
 title: "Data Science & Analytics Consulting Services for Business Growth",
 breadcrumb: "Data Science & Analytics",
 sections: [
 {
 heading: "What We Do:",
 cards: [
 {
 title: "Data Strategy & Analytics Advisory",
 description: "Before implementing tools, we define direction.",
 image: "/images/services/data-collection.webp",
 features: ["Data maturity assessment", "Enterprise analytics roadmap development", "KPI alignment and ROI modeling", "Governance and compliance strategy"],
 footer:
 "We help leadership teams define how analytics supports revenue, operational efficiency, and customer growth through structured business intelligence consulting services.",
 },
 {
 title: "Data Engineering & Integration",
 description: "Strong analytics requires strong foundations.",
 image: "/images/new_img/Data Collection & Integration.webp",
 features: ["Data pipeline architecture design", "ETL & ELT workflow development", "Data warehouse implementation", "Database optimization and performance tuning"],
 footer:
 "We build scalable data engineering systems that power business intelligence consulting and predictive analytics solutions with support from modern cloud consulting ecosystems.",
 },
 {
 title: "Predictive Modeling & Machine Learning Analytics",
 description: "Move from reactive to predictive.",
 image: "/images/services/data-preprocessing.webp",
 features: ["Forecasting and trend modeling", "Risk and fraud detection systems", "Customer churn prediction", "Classification and clustering algorithms", "AI-powered analytics models"],
 footer:
 "As a predictive data analytics company, we help organizations anticipate market behavior and make proactive decisions.",
 },
 {
 title: "Business Intelligence (BI) & Reporting",
 description: "Make insights accessible across teams.",
 image: "/images/services/data-visualization.webp",
 features: ["Executive dashboards", "Interactive visualization tools", "Self-service analytics platforms", "KPI monitoring systems", "Performance reporting automation"],
 footer:
 "Our business intelligence consulting services empower teams with real-time visibility and data transparency, including support for businesses seeking Data Analytics Services for smarter decision-making.",
 },
 {
 title: "Big Data & Scalable Data Platforms",
 description: "Future-ready data ecosystems.",
 image: "/images/new_img/Data Preparation & Preprocessing.webp",
 features: ["Distributed data processing architecture", "Real-time analytics consulting solutions", "Cloud-native analytics infrastructure", "AWS cloud consulting and Azure cloud consulting", "Enterprise data lake and warehouse design"],
 footer:
 "We specialize in cloud data analytics services that scale with your organization's growth and evolving data needs.",
 },
 ],
 },
 ],
 },
 "offshore-development-centers": {
 title: "Offshore Development Center (ODC) Services for Scalable Business Growth",
 breadcrumb: "Offshore Development Centers",
 sections: [
 {
 heading: "What We Do:",
 cards: [
 {
 title: "ODC Strategy & Setup Consulting",
 description: "We help you design the right offshore engagement model from day one.",
 image: "/images/services/consultation.webp",
 features: ["Offshore engagement model planning", "Dedicated team structure design", "Infrastructure & compliance planning", "Cost optimization roadmap", "Governance and reporting framework"],
 footer:
 "Our consulting ensures your ODC operates with full transparency and measurable ROI supported by structured DevOps automation consulting services.",
 },
 {
 title: "Dedicated Development Teams",
 description: "Build a full-time offshore software engineering team aligned with your business objectives.",
 image: "/images/services/full-cycle-teams.webp",
 features: ["Frontend & backend developers", "DevOps engineers", "Cloud architects", "QA specialists", "Data engineers & analytics"],
 footer:
 "Our offshore teams support everything from product startups to enterprise modernization initiatives.",
 },
 {
 title: "Product Development & Engineering",
 description: "From concept to production, we support complete software lifecycle development.",
 image: "/images/services/development.webp",
 features: ["Custom software development", "Web & mobile application development", "Enterprise application modernization", "API development & system integration", "Scalable SaaS product engineering"],
 footer:
 "We combine engineering expertise with DevOps automation consulting to ensure rapid and stable releases.",
 },
 {
 title: "DevOps & Agile Delivery Management",
 description: "DevOps is at the core of modern ODC success.",
 image: "/images/services/ongoing-support.webp",
 features: ["CI/CD consulting services", "DevOps automation consulting", "Agile sprint planning & execution", "Code quality assurance & review", "Continuous deployment workflows", "DevOps monitoring and automation"],
 footer:
 "Our DevOps consulting services streamline release cycles and reduce deployment risk while improving system.",
 },
 {
 title: "Infrastructure & Cloud Enablement",
 description: "Cloud-native engineering enables scalability and resilience.",
 image: "/images/services/scalability.webp",
 features: ["Secure cloud environment setup", "DevOps cloud migration consulting", "AWS cloud consulting", "Azure cloud consulting", "Infrastructure as Code (IaC)", "Data security and governance"],
 footer:
 "We support businesses transitioning to modern cloud architectures while ensuring secure and efficient DevOps cloud migration strategies aligned with DevOps cloud migration services and advanced DevOps monitoring and automation services.",
 },
 ],
 },
 ],
 },
 "cloud-services": {
 title: "Cloud Consulting & Cloud Services for Scalable Digital Transformation",
 breadcrumb: "Cloud Services",
 sections: [
 {
 heading: "What We Do:",
 cards: [
 {
 title: "Cloud Strategy & Advisory",
 description: "We begin with a deep assessment of your current infrastructure and business objectives.",
 image: "/images/services/enterprise-cloud.webp",
 features: ["Cloud readiness assessment", "Migration roadmap development", "Infrastructure and cost optimization strategy", "Risk, compliance, and governance analysis", "Cloud platform selection (AWS, Azure, multi-cloud)"],
 footer:
 "This strategic foundation ensures your cloud adoption is aligned with performance, security, and ROI expectations, making us a trusted partner for Cloud Consulting Services companies seeking long-term scalability.",
 },
 {
 title: "Cloud Migration & Modernization",
 description: "Moving to the cloud requires structured planning and execution.",
 image: "/images/services/cloud-migration.webp",
 features: ["Application migration to cloud environments", "DevOps cloud migration consulting", "Legacy system modernization", "Infrastructure re-architecture", "Hybrid and multi-cloud implementation", "Zero-downtime migration planning"],
 footer:
 "We help organizations modernize outdated systems while minimizing operational disruption using proven DevOps cloud migration frameworks.",
 },
 {
 title: "Cloud Architecture & Engineering",
 description: "Our cloud engineers design scalable, future-ready infrastructure.",
 image: "/images/services/cloud-integration.webp",
 features: ["Cloud-native application development", "Microservices architecture design", "Infrastructure as Code (IaC) implementation", "Serverless computing frameworks", "High-availability and scalable cloud design patterns"],
 footer:
 "We build secure, resilient architectures that support long-term growth and performance.",
 },
 {
 title: "DevOps & Cloud Automation",
 description: "Our DevOps consulting services focus on automation, faster releases, and improved reliability.",
 image: "/images/services/cicd.webp",
 features: ["CI/CD consulting services", "DevOps automation consulting services", "Containerization (Docker & Kubernetes)", "DevOps monitoring and automation services", "Automated testing and deployment pipelines", "Continuous integration and continuous delivery setup"],
 footer:
 "By integrating DevOps with cloud infrastructure, we help businesses release software faster, reduce errors, and improve collaboration between development and operations teams through DevOps automation services.",
 },
 {
 title: "Cloud Security & Governance",
 description: "Security is built into every layer of our cloud implementation.",
 image: "/images/services/security-compliance.webp",
 features: ["Identity and Access Management (IAM)", "Data encryption and protection strategies", "Compliance frameworks implementation", "Continuous monitoring and threat detection", "Governance policy configuration"],
 footer:
 "Our security-first approach ensures your infrastructure remains compliant, secure, and audit-ready while enabling proactive DevOps monitoring and automation services.",
 },
 ],
 },
 ],
 },
 "devops-consulting-services": {
 title: "DevOps Consulting Services for Faster, Reliable, and Scalable Software Delivery",
 breadcrumb: "DevOps Consulting Services",
 sections: [
 {
 heading: "What We Do:",
 cards: [
 {
 title: "DevOps Strategy & Advisory",
 description: "We start by aligning DevOps initiatives with your business objectives.",
 image: "/images/services/devops-consulting.webp",
 features: ["DevOps adoption roadmap", "Infrastructure and workflow assessment", "Toolchain evaluation and selection", "ROI & automation feasibility analysis"],
 footer:
 "We help organizations transition from traditional IT models to efficient DevOps frameworks that support long-term scalability and operational confidence.",
 },
 {
 title: "CI/CD Pipeline Implementation",
 description: "As part of our CI/CD consulting services, we design automated pipelines that reduce manual intervention and accelerate deployment.",
 image: "/images/services/cicd.webp",
 features: ["Continuous Integration setup", "Continuous Delivery & Deployment automation", "Git-based workflows", "Automated testing integration"],
 footer:
 "Our CI/CD frameworks enable faster feature releases while minimizing deployment failures.",
 },
 {
 title: "DevOps Automation & Infrastructure as Code",
 description: "Automation is the foundation of scalable DevOps systems.",
 image: "/images/services/config-management.webp",
 features: ["Infrastructure as Code (IaC) implementation", "Configuration management automation", "Cloud DevOps consulting ", "Automated provisioning and scaling"],
 footer:
 "By automating infrastructure management, we help businesses reduce configuration errors and improve operational efficiency through strategic cloud DevOps consulting capabilities.",
 },
 {
 title: "Containerization & Orchestration",
 description: "Modern applications require flexible, portable deployment environments.",
 image: "/images/services/microservices.webp",
 features: ["Docker container implementation", "Kubernetes orchestration", "Microservices architecture support", "Scalable container deployment strategies"],
 footer:
 "Containerization ensures consistent application performance across development, staging, and production environments.",
 },
 {
 title: "Monitoring, Logging & Performance Optimization",
 description: "Reliable systems require proactive monitoring and optimization.",
 image: "/images/new_img/DevOps Consulting Services.webp",
 features: ["Real-time performance monitoring", "Centralized log management", "Alert systems and automated incident response", "Performance bottleneck analysis"],
 footer:
 "We help organizations move from reactive troubleshooting to proactive performance management, giving teams peace of mind and measurable stability.",
 },
 {
 title: "Cloud & DevOps Integration",
 description: "DevOps works best when integrated with modern cloud platforms.",
 image: "/images/services/security-compliance.webp",
 features: ["Cloud-native architecture design", "Multi-cloud DevOps implementation", "Secure cloud deployments", "DevSecOps integration"],
 footer:
 "We help businesses adopt cloud-first strategies without compromising security or operational stability.",
 },
 ],
 },
 ],
 },
};

