import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "HealthRush Enterprises — Medical Equipment Supplier",
    template: "%s | HealthRush Enterprises",
  },
  description:
    "HealthRush Enterprises is a trusted supplier of hospital-grade medical equipment. Serving hospitals, reseller partners, and suppliers across the region.",
  keywords: ["medical equipment", "hospital supplies", "healthcare", "HealthRush"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthrush.com",
    siteName: "HealthRush Enterprises",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
