"use client";
import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";

const APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSckgOwCWijP5YUlVkX221iSCz8vKzQvuSFty3482_9DnZ0LVw/viewform?usp=publish-editor";

export default function CareerPage() {
  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      location: "Pune",
      jobtype: "Full-time",
      experience: "2+ years",
      description:
        "We are looking for a skilled Full Stack Developer to join our team and build modern, scalable web applications.",
      responsibilities: [
        "Develop user-friendly web interfaces using React and Next.js",
        "Collaborate with backend developers and designers",
        "Optimize applications for performance and scalability",
        "Write clean, maintainable, and reusable code",
      ],
      requirements: [
        "Strong knowledge of HTML, CSS, JavaScript",
        "Experience with React.js and Next.js",
        "Familiarity with REST APIs",
        "Basic understanding of Git",
      ],
      skills: ["React", "Next.js", "JavaScript"],
    },
    {
      id: 2,
      title: "Salesforce Developer",
      location: "Pune",
      jobtype: "Full-time",
      experience: "2+ years",
      description:
        " We are looking for a skilled Salesforce Developer to join our team and build scalable, high-quality Salesforce solutions that help businesses streamline their operations",

      responsibilities: [
        "Develop and customize Salesforce applications using Apex, Lightning Web Components (LWC), and Visualforce.",
        "Configure Salesforce objects, workflows, validation rules, flows, and process automation",
        "Integrate Salesforce with third-party applications using REST/SOAP APIs",
        "Collaborate with business analysts, administrators, and stakeholders to gather and implement requirements",
        "Troubleshoot, debug, and optimize Salesforce applications",
        "Ensure best practices for security, performance, and code quality",
      ],
      requirements: [
        "Strong knowledge of Salesforce Platform and CRM concepts",
        "Hands-on experience with Apex, Lightning Web Components (LWC), and SOQL/SOSL",
        "Experience with Salesforce configuration and customization",
        "Familiarity with REST/SOAP APIs and Salesforce integrations",
        "Experience using Git or other version control systems",
        "Salesforce certifications are an added advantage",
      ],
      skills: ["Salesforce CRM", "Apex", "Lightning Web Components (LWC)", "SOQL/SOSL", "Flows & Process Automation", "REST APIs", "Git"],
    },
    {
      id: 3,
      title: "Business Development Executive",
      location: "Pune",
      jobtype: "Full-time",
      experience: "3–5 years",
      description:
        "We are looking for a skilled Business Development Executive to join our team and build modern,",
      responsibilities: [
        "Client & Market Engagement.",
        "Business Requirement Understanding.",
        "Market Intelligence",
        "Opportunity Development",
      ],
      requirements: [
        "Strong analytical and problem-solving skills",
        "Excellent communication and interpersonal skills",
        "Ability to understand business processes and requirements",
        "Comfortable interacting with senior business stakeholders",
        "Interest in technology, digital transformation, or enterprise solutions",
      ],
      skills: ["Communication", "Analysis", "Negotiation", "Research"],
    },
    {
      id: 4,
      title: "Salesforce Data Cloud Developer",
      location: "Pune",
      jobtype: "Full-time",
      experience: "4+ years",
      description:
        "We are looking for a skilled Salesforce Data Cloud Developer to join our team and build scalable Salesforce solutions, integrate enterprise systems, and deliver high-quality applications using Data Cloud, Apex, and Lightning Web Components (LWC). ",

      responsibilities: [
        "Salesforce Development",
        "Data Integration",
        "Lightning Web Components (LWC) Development",
        "Apex Development",
        "API Integration",
        "Data Cloud Implementation",
        "Performance Optimization",
        "Deployment & Release Management",
      ],
      requirements: [
        "4+ years of Salesforce development experience",
        "Strong experience with Salesforce Data Cloud",
        "Experience with REST/SOAP APIs, ETL tools, and middleware (e.g., MuleSoft)",
        "Knowledge of asynchronous processing, bulk data handling, and Git",
        "Understanding of CI/CD, SFDX, and Salesforce best practices",
      ],
      skills: ["Apex", "Data Cloud", "LWC", "Integration"],
    },
    {
      id: 5,
      title: "QA Engineer – Data Migration ",
      location: "Pune",
      jobtype: "Full-time",
      experience: "5+ years",
      description:
        "We are looking for a skilled QA Engineer – Data Migration to ensure the quality, accuracy, and integrity of enterprise data migration projects. The ideal candidate should have strong expertise in ETL testing, SQL validation, Azure Databricks, and data quality assurance.,",
      responsibilities: [
        "Data Migration Testing",
        "ETL Validation",
        "Data Reconciliation",
        "Defect Management",
        "Test Planning & Execution",
        "Regression & UAT Support",
        "Migration Quality Assurance",
        "Stakeholder Collaboration", ,
      ],
      requirements: [
        "5+ years of experience in Data Migration or ETL Testing",
        "Hands-on experience with Azure Databricks",
        "Strong SQL skills for data validation and reconciliation",
        "Experience in ETL testing and data quality validation",
        "Understanding of data profiling, survivorship, and deduplication concepts",
        "Experience with defect management and test management tools",
        "Strong analytical, problem-solving, and communication skills",
      ],
      skills: ["SQL", "ETL", "Databricks", "Testing"],
    },
    {
      id: 6,
      title: "Lead Data Migration Engineer (ETL & Azure Databricks)",
      location: "Pune",
      jobtype: "Full-time",
      experience: "8+ years",
      description:
        "We are looking for an experienced Lead Data Migration Engineer to lead end-to-end data migration initiatives, design scalable ETL solutions, and optimize data processing using Azure Databricks. The ideal candidate should have strong expertise in data migration, ETL, SQL, and enterprise data quality practices.",
      responsibilities: [
        "Data Migration Leadership",
        "ETL Pipeline Development",
        "Azure Databricks Development",
        "Data Profiling & Validation",
        "Data Reconciliation",
        "Migration Strategy & Documentation",
        "Quality Assurance Support",
        "Stakeholder Collaboration",
      ],
      requirements: [
        "8+ years of experience in Data Migration and ETL",
        "Strong hands-on experience with Azure Databricks",
        "Expertise in ETL tools and SQL",
        "Strong understanding of data quality, profiling, reconciliation, and validation",
        "Experience implementing survivorship and deduplication logic",
        "Excellent troubleshooting and analytical skills",
        "Strong stakeholder communication and leadership abilities",
      ],
      skills: ["Databricks", "ETL", "SQL", "Leadership"],
    },
    {
      id: 7,
      title: "Salesforce Automation Engineer – Copado (CRT)",
      location: "Pune",
      jobtype: "Full-time",
      experience: "5+ years",
      description:
        "We are looking for a skilled Salesforce Automation Engineer with expertise in Copado CRT to build and execute automation frameworks, perform Salesforce testing, and ensure high-quality delivery through end-to-end integration testing.",

      responsibilities: [
        "Automation Framework Development",
        "Salesforce Testing",
        "SOQL Validation",
        "Integration Testing",
        "Test Automation",
        "Quality Assurance",
        "Stakeholder Collaboration",
        "Release Validation",
      ],
      requirements: [
        "5+ years of QA experience",
        "4+ years of Salesforce Testing experience",
        "2+ years of hands-on experience with Copado CRT",
        "Experience building automation frameworks using Copado CRT",
        "Strong knowledge of Salesforce testing and SOQL validation",
        "Experience in end-to-end integration testing",
        "Excellent communication and stakeholder management skills",
      ],
      skills: [ "Salesforce Testing", "Copado CRT", "Automation", "Integration"],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <div className="relative text-white">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />

      <div className="relative">

        <div className="mt-3">
          <Breadcrumb items={[{ label: "Build Your Future With Virtuebyte" }]} />
        </div>

        {/* HERO */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="IT Team Working"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
              />
            </div>

            <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Why Join Virtuebyte?
              </h2>

              <p className="text-text-light mb-4">
                We believe in innovation, collaboration, and continuous growth.
                Our team works on cutting-edge technologies including AI, Cloud, and modern web development.
              </p>

              <p className="text-text-light mb-4">
                We provide a supportive environment where you can enhance your skills,
                work on real-world projects, and build a strong career in the IT industry.
              </p>

              <p className="text-text-light">
                Join us to be part of a passionate team that values creativity, learning,
                and professional excellence.
              </p>
            </div>

          </div>
        </section>

        {/* JOBS */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Opportunities
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

            {/* Left — job list */}
            <div className="relative bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] p-4 h-[350px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />

              <h3 className="font-semibold mb-4 text-white relative">
                Available Jobs
              </h3>

              {jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`relative p-3 mb-2 rounded-md cursor-pointer transition ${selectedJob.id === job.id
                    ? "bg-primary text-white"
                    : "hover:bg-[#ffffff10]"
                    }`}
                >
                  {job.title}
                  <p className="text-sm text-text-light">{job.location}</p>
                </div>
              ))}
            </div>

            {/* Right — job detail */}
            <div className="relative md:col-span-2 bg-[#E5A2FF0A] rounded-[20px] border border-[#E5A2FF0A] p-6 h-[350px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />

              <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {selectedJob.title}
                  </h3>
                  <p className="text-text-light">
                    Location: {selectedJob.location}
                  </p>
                </div>

                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block shrink-0 bg-primary text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-primary/90 transition-colors"
                >
                  Apply Now
                </a>
              </div>

              <p className="text-text-light mb-6">
                {selectedJob.description}
              </p>

              <p className="text-text-light mb-6">
                {selectedJob.jobtype} | Experience: {selectedJob.experience}
              </p>

              <div className="mb-4">
                <span className="font-semibold text-white">Responsibilities:</span>
                <ul className="list-disc list-inside mt-2 text-text-light">
                  {selectedJob.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-white">Requirements:</span>
                <ul className="list-disc list-inside mt-2 text-text-light">
                  {selectedJob.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-semibold text-white">Skills:</span>
                <ul className="list-disc list-inside mt-2 text-text-light">
                  {selectedJob.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-black/10">
          <h2 className="text-3xl font-bold text-white">
            Join Us Today
          </h2>

          <p className="mt-4 text-text-light">
            To explore opportunities, email us at{" "}
            <span className="font-semibold text-primary">
              careers@virtuebytech.com
            </span>
          </p>
        </section>

      </div>
    </div>
  );
}
