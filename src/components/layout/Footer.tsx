import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "News & Updates", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  Solutions: [
    { label: "For Hospitals", href: "/hospitals" },
    { label: "Reseller Partners", href: "/partners" },
    { label: "Become a Supplier", href: "/suppliers" },
    { label: "FAQ", href: "/faq" },
  ],
  "Product Categories": [
    { label: "Diagnostic", href: "/products?category=Diagnostic" },
    { label: "ICU Equipment", href: "/products?category=ICU" },
    { label: "Surgical", href: "/products?category=Surgical" },
    { label: "Rehabilitation", href: "/products?category=Rehabilitation" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">HR</span>
              </div>
              <span className="text-white font-bold text-lg">
                HealthRush<span className="text-brand-200"> Enterprises</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Trusted supplier of hospital-grade medical equipment. Serving healthcare institutions, resellers, and suppliers.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="tel:+639XXXXXXXXX" className="hover:text-brand-200 transition-colors">+63 9XX XXX XXXX</a>
              <a href="mailto:info@healthrush.com" className="hover:text-brand-200 transition-colors">info@healthrush.com</a>
              <span className="text-gray-500">Manila, Philippines</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{section}</h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-200 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} HealthRush Enterprises. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ISO Certified
            </span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FDA Registered
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
