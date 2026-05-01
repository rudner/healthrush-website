import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { products, categories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse HealthRush Enterprises' full catalog of certified hospital medical equipment — diagnostic, ICU, surgical, and rehabilitation.",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return <ProductsClient searchParams={searchParams} />;
}

async function ProductsClient({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category || "All";
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">Product Catalog</span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Medical Equipment</h1>
          <p className="mt-3 text-gray-500 max-w-xl">
            Browse our full range of certified, hospital-grade medical equipment. All products meet ISO, FDA, and CE standards.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/products" : `/products?category=${cat}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-400 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-brand-300 hover:text-brand-500"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">No products found in this category.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900">Can&apos;t find what you need?</h2>
          <p className="mt-2 text-gray-500 text-sm">Contact our team and we&apos;ll source the equipment you require.</p>
          <Link
            href="/contact"
            className="mt-5 inline-block bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
