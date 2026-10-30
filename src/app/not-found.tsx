import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24">
      <p className="text-[11px] uppercase tracking-[0.28em] text-stone">404</p>
      <h1 className="mt-3 font-display text-5xl">Page not found</h1>
      <p className="mt-4 text-sm leading-relaxed text-stone">
        That page is not part of this site.
      </p>
      <Link href="/shop" className="btn mt-8">
        Explore products
      </Link>
    </div>
  );
}
