import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reseller Partners",
  description:
    "Join the HealthRush Reseller Partner Program and grow your medical equipment business with competitive pricing and full support.",
};

const perks = [
  { title: "Competitive Pricing", description: "Access wholesale pricing tiers with volume discounts to maximize your margins." },
  { title: "Exclusive Territories", description: "Authorized resellers receive protected territories to minimize competition." },
  { title: "Marketing Support", description: "Co-branded materials, product brochures, and digital assets provided at no cost." },
  { title: "Technical Training", description: "Regular product training sessions to keep your team informed and confident." },
  { title: "Dedicated Support Line", description: "Priority hotline for partner inquiries, technical questions, and after-sales concerns." },
  { title: "Sales Incentives", description: "Quarterly bonuses and performance incentives for top-performing partners." },
];

const requirements = [
  "Registered business entity (DTI or SEC registered)",
  "Experience in medical supply or healthcare industry preferred",
  "Willingness to maintain minimum quarterly purchase commitment",
  "Capable of providing basic after-sales support to end clients",
  "Agrees to HealthRush partner code of conduct and pricing policy",
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">Reseller Partners</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Grow With HealthRush
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Join our authorized reseller network and gain access to certified medical equipment, competitive
              pricing, and full business support.
            </p>
            <Link href="#apply" className="mt-6 inline-block bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-400 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 text-center gap-4">
          {[
            { value: "80+", label: "Active Partners" },
            { value: "1,200+", label: "Products to Resell" },
            { value: "15+", label: "Years of Partnership" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold text-white">{s.value}</p>
              <p className="text-brand-100 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Partner Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-brand-400 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Partner Requirements</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <ul className="flex flex-col gap-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Apply to Become a Partner</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input type="text" required placeholder="Juan dela Cruz" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name *</label>
                  <input type="text" required placeholder="MedTech Solutions Inc." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input type="email" required placeholder="juan@company.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                  <input type="tel" required placeholder="+63 9XX XXX XXXX" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Location / Region</label>
                <input type="text" placeholder="Metro Manila" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your business</label>
                <textarea rows={4} placeholder="Describe your current business and why you want to partner with HealthRush..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition resize-none bg-white" />
              </div>
              <button type="submit" className="bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
