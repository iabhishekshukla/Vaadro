import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "VAADRO | Pure Hydration • Pure Life • Pure Trust",
  description: "VAADRO is a world-class premium packaged drinking water brand. Purified with advanced RO, UV, and ozonization technology, and enriched with essential minerals for optimal health and hydration.",
  keywords: "VAADRO, premium drinking water, packaged drinking water, mineral water, purified water, RO UV water, Gaurav Dubey, Noida water delivery",
  authors: [{ name: "Gaurav Dubey" }],
  openGraph: {
    title: "VAADRO | Premium Packaged Drinking Water",
    description: "Experience pure hydration and ultimate trust in every drop. VAADRO offers advanced mineral-enriched bottled water for healthy living.",
    url: "https://vaadro.com",
    siteName: "VAADRO",
    images: [
      {
        url: "https://vaadro.com/images/product-500ml-waterfall.jpg",
        width: 1200,
        height: 630,
        alt: "VAADRO Premium Water Waterfall Bottle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAADRO | Premium Packaged Drinking Water",
    description: "Pure hydration with added essential minerals. Experience premium water.",
    images: ["https://vaadro.com/images/product-500ml-waterfall.jpg"],
  },
  alternates: {
    canonical: "https://vaadro.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics Track Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VAADRO123"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VAADRO123', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="bg-background text-foreground min-h-full flex flex-col font-sans">
        <SchemaMarkup />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
