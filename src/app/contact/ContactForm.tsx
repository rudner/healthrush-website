"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);
    setStatus(result.success ? "success" : "error");
    if (result.success) e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

      {status === "success" && (
        <div className="bg-brand-50 border border-brand-200 text-brand-700 rounded-xl px-4 py-3 text-sm">
          Thank you! Your inquiry has been sent. We&apos;ll get back to you within 1 business day.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          Something went wrong. Please try again or email us directly at info@healthrush.com.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
