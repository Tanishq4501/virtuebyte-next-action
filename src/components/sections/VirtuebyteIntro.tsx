

import CTAButton from "@/components/ui/CTAButton";

export default function VirtuebyteIntro() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[var(--color-dark)] text-[var(--color-text-light)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-outfit">
            We help businesses build smarter digital systems
          </h2>

          <p className="mb-4 text-base md:text-lg leading-relaxed">
            Virtuebyte Pvt Ltd is a technology-driven company focused on delivering practical,
            scalable, and high-impact digital solutions.
          </p>

          <p className="mb-6 text-base md:text-lg leading-relaxed">
            We work with startups and growing enterprises to design systems that simplify
            operations, improve efficiency, and support long-term business growth.
          </p>

          <div className="flex gap-4 mt-6">
            <CTAButton href="/contact" variant="primary" size="md">
              Get Started
            </CTAButton>
            <CTAButton href="/about" variant="outline" size="md">
              Learn More
            </CTAButton>
          </div>
        </div>

        {/* RIGHT CARD SECTION */}
        <div className="grid gap-4">

          <div className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 backdrop-blur-md hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold text-white mb-2">
              Designed for Real Workflows
            </h3>
            <p className="text-sm text-[var(--color-gray-medium)]">
              Built around actual business processes, not assumptions.
            </p>
          </div>

          <div className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 backdrop-blur-md hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold text-white mb-2">
              Scalable Architecture
            </h3>
            <p className="text-sm text-[var(--color-gray-medium)]">
              Systems designed to grow with your business seamlessly.
            </p>
          </div>

          <div className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 backdrop-blur-md hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold text-white mb-2">
              Modern Technologies
            </h3>
            <p className="text-sm text-[var(--color-gray-medium)]">
              Built using reliable and future-ready tech stacks.
            </p>
          </div>

          <div className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-2xl p-6 backdrop-blur-md hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold text-white mb-2">
              Transparent & Agile
            </h3>
            <p className="text-sm text-[var(--color-gray-medium)]">
              Clear communication with flexible and adaptive delivery.
            </p>
          </div>

        </div>
      </div>

      {/* WHY CHOOSE SECTION */}
      {/* <div className="max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-outfit">
          Why Choose Virtuebyte
        </h2>

        <p className="mb-8 text-base md:text-lg leading-relaxed max-w-3xl">
          Businesses trust Virtuebyte for delivering technology solutions that are not just
          functional, but practical, scalable, and built for long-term growth.
        </p>

        <ul className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)]">•</span>
            Designed around real business workflows
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)]">•</span>
            Scalable for future growth
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)]">•</span>
            Built using modern, reliable technologies
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-primary)]">•</span>
            Delivered with a transparent and agile approach
          </li>
        </ul>
      </div> */}
    </section>
  );
}

