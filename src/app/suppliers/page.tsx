import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a Supplier",
  description:
    "Supply your medical equipment to HealthRush Enterprises and reach hundreds of hospitals across the region.",
};

const advantages = [
  { title: "Wide Distribution Network", description: "Access our network of 500+ hospitals and 80+ reseller partners across the region." },
  { title: "Transparent Procurement", description: "Clear and fair procurement process with defined terms and timelines." },
  { title: "Long-Term Partnership", description: "We prioritize stable, multi-year supplier relationships over one-time transactions." },
  { title: "Fast Payment Cycles", description: "Competitive payment terms with reliable on-time payment guaranteed." },
  { title: "Product Listing Support", description: "We help onboard your products into our catalog with proper documentation and specs." },
  { title: "Market Feedback", description: "We share real market feedback from hospitals to help you improve your products." },
];

const supplierRequirements = [
  "Products must hold valid ISO, FDA, CE, or equivalent certifications",
  "Supplier must be a registered business entity",
  "Must provide product datasheets, user manuals, and warranty documentation",
  "Minimum 6-month product warranty required",
  "Must comply with HealthRush quality and compliance standards",
  "Ability to supply locally or ship to the Philippines",
];

export default function SuppliersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">For Suppliers</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Reach More Hospitals With HealthRush
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Partner with HealthRush Enterprises to distribute your medical products to our extensive network of
              hospitals, clinics, and reseller partners.
            </p>
            <Link href="#register" className="mt-6 inline-block bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm">
              Register as a Supplier
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Why Supply to HealthRush?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-brand-400 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Supplier Requirements</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <ul className="flex flex-col gap-3">
              {supplierRequirements.map((req) => (
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

      {/* Registration Form */}
      <section id="register" className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Supplier Registration</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Contact Person *</label>
                  <input type="text" required placeholder="Maria Santos" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Company / Brand Name *</label>
                  <input type="text" required placeholder="MedEquip Asia Co." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input type="email" required placeholder="supplier@company.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                  <input type="tel" required placeholder="+63 9XX XXX XXXX" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Country of Origin / Headquarters</label>
                <input type="text" placeholder="Philippines / South Korea / China" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Categories *</label>
                <input type="text" required placeholder="e.g. Diagnostic, ICU, Surgical..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Certifications Held</label>
                <input type="text" placeholder="e.g. ISO 13485, FDA, CE, MDR..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Information</label>
                <textarea rows={4} placeholder="Tell us about your products, production capacity, and why you'd like to partner with HealthRush..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 transition resize-none bg-white" />
              </div>
              <button type="submit" className="bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm w-full">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
