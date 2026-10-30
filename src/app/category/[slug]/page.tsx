import { ShopCatalogue } from "@/components/shop/shop-catalogue";
import { categories, getCategory } from "@/data/categories";
import { parseSort, queryProducts } from "@/lib/catalog";
import { firstParam } from "@/lib/params";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.description,
    openGraph: { images: [{ url: category.image, alt: category.imageAlt }] },
  };
}

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ q?: string | string[]; sort?: string | string[] }>;
}) {
  return (
    <Suspense fallback={<p className="px-5 py-16 text-sm text-stone">Loading the category…</p>}>
      <CategoryResults params={params} searchParams={searchParams} />
    </Suspense>
  );
}

async function CategoryResults({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ q?: string | string[]; sort?: string | string[] }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const query = await searchParams;
  const q = firstParam(query.q)?.trim() ?? "";
  const sort = parseSort(firstParam(query.sort));
  const products = queryProducts({ q, category: category.slug, sort });

  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1fr_16rem] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone">
              <Link href="/shop" className="underline underline-offset-4">All categories</Link>
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">{category.pageTitle}</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">{category.intro}</p>
          </div>
        </div>
      </header>
      <ShopCatalogue products={products} q={q} sort={sort} activeCategory={category} />
    </>
  );
}
