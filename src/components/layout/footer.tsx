import { categories } from "@/data/categories";
import { business } from "@/lib/business";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <Image src="/brand/logo.webp" alt="" width={48} height={48} className="h-12 w-12" />
            <div>
              <p className="text-sm font-extrabold tracking-[0.14em] uppercase">AHS Imports</p>
              <p className="mt-1 text-[10px] tracking-[0.16em] text-white/60 uppercase">Everyday finds</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {business.shortDescription}
          </p>
          <p className="mt-4 text-xs tracking-[0.16em] text-white/50 uppercase">{business.tagline}</p>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase">Categories</h2>
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
          <h2 className="text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase">Shopping</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><Link href="/shop">Shop all</Link></li>
            <li><Link href="/how-it-works">Preorder guide</Link></li>
            <li><Link href="/cart">Shopping bag</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase">Find us</h2>
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
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-xs leading-relaxed text-white/60 md:flex-row md:items-end md:justify-between">
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
