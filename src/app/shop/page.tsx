import { ShopCatalogue } from "@/components/shop/shop-catalogue";
import { getCategory } from "@/data/categories";
import { parseSort, queryProducts } from "@/lib/catalog";
import { firstParam } from "@/lib/params";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse illustrative sample products across home appliances, kitchen essentials, fashion, kids' finds, baby items, and more.",
};

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string | string[];
    category?: string | string[];
    sort?: string | string[];
  }>;
}) {
  return (
    <>
      <header className="border-b border-line">
        <div className="shell py-12 md:py-16">
          <p className="eyebrow">The collection</p>
          <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">Shop all</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone">
            Browse sample products across the categories AHS Imports offers on preorder.
          </p>
        </div>
      </header>
      <Suspense fallback={<p className="px-5 py-16 text-sm text-stone">Loading the collection…</p>}>
        <ShopResults searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function ShopResults({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string | string[];
    category?: string | string[];
    sort?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const q = firstParam(params.q)?.trim() ?? "";
  const categorySlug = firstParam(params.category);
  const sort = parseSort(firstParam(params.sort));
  const category = categorySlug ? getCategory(categorySlug) : undefined;
  const invalidCategory = Boolean(categorySlug && !category);
  const products = invalidCategory
    ? []
    : queryProducts({ q, category: category?.slug, sort });

  return (
    <ShopCatalogue
      products={products}
      q={q}
      sort={sort}
      activeCategory={category}
      invalidCategory={invalidCategory}
    />
  );
}
