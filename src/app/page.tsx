import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";

const stats = [
  { label: "Hospitals Served", value: "500+" },
  { label: "Products Available", value: "1,200+" },
  { label: "Reseller Partners", value: "80+" },
  { label: "Years of Experience", value: "15+" },
];

const certifications = ["ISO 13485", "FDA Registered", "CE Certified", "DOH Accredited"];

const audienceCards = [
  {
    title: "Hospitals & Clinics",
    description: "Direct supply of certified medical equipment with technical support and maintenance.",
    href: "/hospitals",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Reseller Partners",
    description: "Competitive pricing, marketing support, and exclusive partner benefits for authorized resellers.",
    href: "/partners",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    title: "Equipment Suppliers",
    description: "Partner with HealthRush to distribute your medical products to our wide hospital network.",
    href: "/suppliers",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-100 text-brand-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Trusted Medical Equipment Supplier
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Equipping Healthcare{" "}
              <span className="text-brand-400">For Better Lives</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
              HealthRush Enterprises supplies certified, hospital-grade medical equipment to healthcare
              institutions, reseller partners, and suppliers across the region.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors shadow-sm"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="bg-white text-brand-500 border border-brand-300 px-6 py-3 rounded-xl font-semibold hover:bg-brand-50 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-brand-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Who We Serve</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              HealthRush works with multiple stakeholders in the healthcare supply chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audienceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-2xl p-6 transition-all"
              >
                <div className="w-14 h-14 bg-brand-100 group-hover:bg-brand-200 rounded-xl flex items-center justify-center text-brand-500 mb-4 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{card.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-500">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="mt-2 text-gray-500">Top-selling medical equipment trusted by hospitals.</p>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-brand-500 hover:text-brand-600 hidden sm:inline-flex items-center gap-1"
            >
              View all products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/products" className="text-sm font-semibold text-brand-500 hover:text-brand-600">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-3 text-gray-500">Trusted by hospitals and healthcare providers across the region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">&quot;{t.quote}&quot;</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                  <p className="text-xs text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-600 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Equip Your Facility?</h2>
          <p className="mt-3 text-brand-100 text-lg">
            Talk to our team and get a customized quote for your hospital or clinic.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-brand-600 px-6 py-3 rounded-xl font-semibold hover:bg-brand-50 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
