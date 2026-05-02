import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import Badge from "./Badge";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative h-48 bg-gray-50">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge>{product.badge}</Badge>
          </div>
        )}
        <Image
          src={product.image || `https://placehold.co/600x400/a8d5a2/2d3748?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{product.category}</span>
        <h3 className="mt-1 text-gray-900 font-semibold text-base leading-snug group-hover:text-brand-500 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors inline-flex items-center gap-1"
          >
            View Details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="text-sm bg-brand-50 text-brand-600 hover:bg-brand-100 px-3 py-1.5 rounded-lg font-medium transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
