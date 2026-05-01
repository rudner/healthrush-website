import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HealthRush Enterprises — our mission, values, and commitment to supplying quality medical equipment.",
};

const values = [
  {
    title: "Quality First",
    description: "Every product we supply meets international standards — ISO, FDA, and CE certified.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Reliable Partnerships",
    description: "We build long-term relationships with hospitals, resellers, and suppliers built on trust.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    title: "After-Sales Support",
    description: "Our technical team provides installation, training, and preventive maintenance services.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Patient-Centered",
    description: "Everything we do is guided by one goal: better patient outcomes through better equipment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const team = [
  { name: "Eduardo Cruz", role: "Chief Executive Officer", initials: "EC" },
  { name: "Maria Santos", role: "Chief Operations Officer", initials: "MS" },
  { name: "Jason Reyes", role: "Head of Sales & Partnerships", initials: "JR" },
  { name: "Dr. Anna Lim", role: "Medical Affairs Director", initials: "AL" },
];

const milestones = [
  { year: "2009", event: "HealthRush Enterprises founded in Manila" },
  { year: "2012", event: "Reached 100 hospital clients across the region" },
  { year: "2015", event: "ISO 13485 certification achieved" },
  { year: "2018", event: "Launched Reseller Partner Program with 50+ partners" },
  { year: "2021", event: "Expanded product catalog to 1,000+ SKUs" },
  { year: "2024", event: "500+ hospitals served across Southeast Asia" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">About Us</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              15 Years of Equipping Healthcare
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              HealthRush Enterprises was founded with a clear mission: to make high-quality medical equipment
              accessible to every healthcare facility — from large hospitals to rural clinics.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-brand-600 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide hospitals, clinics, and healthcare workers with reliable, certified, and affordable medical
              equipment — improving the quality of patient care across the region.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-700 mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted medical equipment supplier in Southeast Asia, known for quality, reliability,
              and exceptional after-sales support.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-100 text-brand-500 rounded-xl flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-100" />
            <div className="flex flex-col gap-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-400 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
                    {m.year}
                  </div>
                  <div className="pt-2.5">
                    <p className="text-gray-700 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                <div className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold text-lg mx-auto mb-4">
                  {member.initials}
                </div>
                <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                <p className="text-xs text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Partner With Us</h2>
          <p className="mt-3 text-brand-100">
            Join hundreds of hospitals and resellers who trust HealthRush for their medical equipment needs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-brand-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-brand-50 transition-colors text-sm">
              Get in Touch
            </Link>
            <Link href="/products" className="border border-white text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
