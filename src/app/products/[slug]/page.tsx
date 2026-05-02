import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Product } from "@/types";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { data } = await supabase.from("products").select("slug");
  return (data ?? []).map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabase.from("products").select("name, short_description").eq("slug", slug).single();
  if (!data) return {};
  return { title: data.name, description: data.short_description };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const { data: product } = await supabase.from("products").select("*").eq("slug", slug).single();
  if (!product) notFound();

  const { data: related } = await supabase
    .from("products")
    .select("id, name, slug, category, short_description")
    .eq("category", product.category)
    .neq("id", product.id)
    .limit(3);

  const p = product as Product;
  const relatedProducts = (related ?? []).map((r) => ({
    id: r.id,
    name: r.name,
    slug: r.slug,
    category: r.category,
    shortDescription: r.short_description,
  }));

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
            <span className="text-gray-700">{p.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product image */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
              <Image
                src={p.image || `https://placehold.co/800x600/a8d5a2/2d3748?text=${encodeURIComponent(p.name)}`}
                alt={p.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Info */}
            <div>
              <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{p.category}</span>
              {p.badge && (
                <span className="ml-3 bg-brand-100 text-brand-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {p.badge}
                </span>
              )}
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{p.name}</h1>
              <p className="mt-4 text-gray-600 leading-relaxed">{p.description}</p>

              {/* Features */}
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Features</h2>
                <ul className="flex flex-col gap-2">
                  {p.features.map((f) => (
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
                <Link href="/contact" className="bg-brand-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors text-sm">
                  Request a Quote
                </Link>
                <Link href="/contact" className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm">
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
                  {Object.entries(p.specs).map(([key, value], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 font-medium text-gray-700 w-40">{key}</td>
                      <td className="px-6 py-3 text-gray-600">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.slug}`} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all group">
                  <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{rp.category}</span>
                  <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-brand-500 transition-colors">{rp.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{rp.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
