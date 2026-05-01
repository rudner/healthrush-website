import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Hospitals & Clinics",
  description:
    "HealthRush Enterprises supplies certified medical equipment directly to hospitals and clinics with full technical support.",
};

const benefits = [
  {
    title: "Certified Equipment",
    description: "ISO 13485, FDA-registered, and CE-certified equipment that meets international healthcare standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Bulk Procurement Support",
    description: "Streamlined procurement process for large hospital orders with flexible payment terms.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Installation & Training",
    description: "Our certified technicians handle installation and provide staff training at your facility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance plans to keep your equipment in optimal condition and minimize downtime.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Account Manager",
    description: "A single point of contact for all your procurement, support, and billing needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Metro Manila delivery within 3–5 business days. Provincial delivery within 7–10 business days.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const steps = [
  { step: "01", title: "Browse & Select", description: "Browse our catalog and identify the equipment your facility needs." },
  { step: "02", title: "Request a Quote", description: "Submit a quote request and our team will respond within 1 business day." },
  { step: "03", title: "Review & Order", description: "Review the quote, finalize specs, and confirm your purchase order." },
  { step: "04", title: "Delivery & Setup", description: "Our team delivers, installs, and trains your staff on the new equipment." },
];

export default function HospitalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">For Hospitals & Clinics</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Medical Equipment You Can Trust
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              HealthRush supplies certified, hospital-grade equipment directly to healthcare facilities — with full
              technical support, installation, and maintenance.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm">
                Request a Quote
              </Link>
              <Link href="/products" className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Why Hospitals Choose HealthRush</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-brand-100 text-brand-500 rounded-xl flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-brand-400 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to Upgrade Your Equipment?</h2>
          <p className="mt-3 text-brand-100">Get a customized quote from our team today.</p>
          <Link href="/contact" className="mt-6 inline-block bg-white text-brand-600 px-6 py-3 rounded-xl font-semibold hover:bg-brand-50 transition-colors text-sm">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
