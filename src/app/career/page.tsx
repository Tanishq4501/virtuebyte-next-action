"use client";
import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function CareerPage() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Pune",
      jobtype: "Full-time",
      experience: "2+ years",
      description:
        "We are looking for a skilled Frontend Developer to join our team and build modern, scalable web applications.",
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
      postedDate: "10 April 2026",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Pune",
      jobtype: "Full-time",
      experience: "2+ years",
      postedDate: "10 April 2026",
      description:
        "We are looking for a skilled Backend Developer to join our team and build modern, scalable web applications.",
      responsibilities: [
        "Develop scalable backend services",
        "Collaborate with frontend teams",
        "Optimize APIs for performance",
        "Maintain clean code structure",
      ],
      requirements: [
        "Strong knowledge of Java",
        "Experience with Spring Boot",
        "REST APIs knowledge",
        "Git basics",
      ],
      skills: ["Java", "Spring Boot", "API"],
    },
    {
      id: 3,
      title: "Devops Developer",
      location: "Pune",
      jobtype: "Full-time",
      experience: "2+ years",
      postedDate: "10 April 2026",
      description:
        "We are looking for a skilled Backend Developer to join our team and build modern, scalable web applications.",
      responsibilities: [
        "Develop scalable backend services",
        "Collaborate with frontend teams",
        "Optimize APIs for performance",
        "Maintain clean code structure",
      ],
      requirements: [
        "Strong knowledge of Java",
        "Experience with Spring Boot",
        "REST APIs knowledge",
        "Git basics",
      ],
      skills: ["Java", "Spring Boot", "API"],
    },
    {
      id: 4,
      title: "Backend Developer",
      location: "Pune",
      jobtype: "Full-time",
      experience: "2+ years",
      postedDate: "10 April 2026",
      description:
        "We are looking for a skilled Backend Developer to join our team and build modern, scalable web applications.",
      responsibilities: [
        "Develop scalable backend services",
        "Collaborate with frontend teams",
        "Optimize APIs for performance",
        "Maintain clean code structure",
      ],
      requirements: [
        "Strong knowledge of Java",
        "Experience with Spring Boot",
        "REST APIs knowledge",
        "Git basics",
      ],
      skills: ["Java", "Spring Boot", "API"],
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
                  className={`relative p-3 mb-2 rounded-md cursor-pointer transition ${
                    selectedJob.id === job.id
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

              <h3 className="text-2xl font-bold mb-2 text-white relative">
                {selectedJob.title}
              </h3>

              <p className="text-text-light">
                Posted on: {selectedJob.postedDate}
              </p>

              <p className="text-text-light mb-4">
                Location: {selectedJob.location}
              </p>

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
