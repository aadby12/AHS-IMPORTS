import { categories } from "@/data/categories";
import { business } from "@/lib/business";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 md:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image src="/brand/logo.webp" alt="AHS Imports" width={120} height={120} className="h-24 w-24" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/80">
            {business.shortDescription}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-cream/60">{business.tagline}</p>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-cream/60">Categories</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/category/${category.slug}`} className="hover:text-white">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-cream/60">Shopping</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><Link href="/shop">Shop all</Link></li>
            <li><Link href="/how-it-works">Preorder guide</Link></li>
            <li><Link href="/cart">Shopping bag</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-cream/60">Find us</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={business.beaconsUrl} target="_blank" rel="noopener noreferrer">
                Link in bio
              </a>
            </li>
            <li>
              <Link href="/contact">WhatsApp enquiry</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-5 text-xs leading-relaxed text-cream/70 md:flex-row md:items-end md:justify-between md:px-8">
          <p className="max-w-2xl">
            {business.demo.notice} Returns, delivery fees, and shop hours are confirmed
            directly with AHS Imports.
          </p>
          {business.credit.url ? (
            <a href={business.credit.url} className="shrink-0 text-right md:text-right">
              Powered by {business.credit.name}
            </a>
          ) : (
            <p className="shrink-0 text-right">Powered by {business.credit.name}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
