import { CartDrawer } from "@/components/cart/cart-drawer";
import { CartProvider } from "@/components/cart/cart-provider";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { business } from "@/lib/business";
import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "AHS Imports",
    template: "%s · AHS Imports",
  },
  description: business.shortDescription,
  openGraph: {
    title: "AHS Imports",
    description: business.shortDescription,
    siteName: "AHS Imports",
    type: "website",
    images: [{ url: "/brand/logo.webp", alt: "AHS Imports logo" }],
  },
  icons: { icon: "/brand/logo.webp" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: business.siteUrl,
    description: business.shortDescription,
    sameAs: [business.instagramUrl, business.beaconsUrl],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
