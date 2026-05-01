import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HealthRush Enterprises. Request a quote, ask about products, or inquire about partnerships.",
};

const contactInfo = [
  {
    label: "Phone",
    value: "+63 9XX XXX XXXX",
    href: "tel:+639XXXXXXXXX",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@healthrush.com",
    href: "mailto:info@healthrush.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "123 Medical Drive, Manila, Philippines",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Office Hours",
    value: "Mon–Fri: 8:00 AM – 5:00 PM",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">Contact Us</span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-3 text-gray-500 max-w-xl">
            Request a quote, ask about our products, or inquire about becoming a partner. Our team typically responds within 1 business day.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-4 hover:border-brand-200 transition-colors group"
              >
                <div className="w-10 h-10 bg-brand-100 text-brand-500 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-200 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{info.label}</p>
                  <p className="mt-0.5 text-gray-800 font-medium text-sm">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Send an Inquiry</h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Juan dela Cruz"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="juan@hospital.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+63 9XX XXX XXXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization / Hospital</label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Metro General Hospital"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Inquiry Type</label>
                <select
                  name="type"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition bg-white"
                >
                  <option value="">Select inquiry type</option>
                  <option value="quote">Request a Quote</option>
                  <option value="product">Product Information</option>
                  <option value="partner">Become a Reseller Partner</option>
                  <option value="supplier">Become a Supplier</option>
                  <option value="support">After-Sales Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you need and we'll get back to you within 1 business day."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm w-full sm:w-auto"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
