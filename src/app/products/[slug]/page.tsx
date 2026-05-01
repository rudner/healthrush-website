import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brand-500 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-700">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image placeholder */}
            <div className="bg-gray-50 rounded-2xl h-80 flex items-center justify-center border border-gray-100">
              <div className="w-32 h-32 rounded-full bg-brand-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0zm7.5-3.75v3.75m0 0v.01M12 15.75h.01" />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{product.category}</span>
              {product.badge && (
                <span className="ml-3 bg-brand-100 text-brand-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {product.badge}
                </span>
              )}
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Features</h2>
                <ul className="flex flex-col gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 font-medium text-gray-700 w-40">{key}</td>
                      <td className="px-6 py-3 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all group">
                  <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{p.category}</span>
                  <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-brand-500 transition-colors">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{p.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
