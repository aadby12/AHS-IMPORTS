import { ProductCard } from "@/components/shop/product-card";
import { PriceLabel } from "@/components/shop/price-label";
import { ProductGallery } from "@/components/shop/product-gallery";
import { ProductPurchase } from "@/components/shop/product-purchase";
import { getCategory } from "@/data/categories";
import { products } from "@/data/products";
import { getProduct, relatedProducts } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: [{ url: product.images[0].src, alt: product.images[0].alt }],
    },
  };
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<p className="px-5 py-16 text-sm text-stone">Loading product…</p>}>
      <ProductResult params={params} />
    </Suspense>
  );
}

async function ProductResult({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category);
  const related = relatedProducts(product);

  return (
    <article className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
      <p className="text-sm text-stone">
        <Link href="/shop" className="underline underline-offset-4">
          Shop
        </Link>
        {category ? (
          <>
            {" / "}
            <Link href={`/category/${category.slug}`} className="underline underline-offset-4">
              {category.name}
            </Link>
          </>
        ) : null}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} />
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
            {category?.name}
            {product.illustrative ? " · Illustrative sample" : ""}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-none md:text-6xl">{product.name}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed">{product.description}</p>
          <div className="mt-6">
            <PriceLabel product={product} />
          </div>
          {product.illustrative ? (
            <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-stone">
              This is sample catalogue content for the demonstration. It is not confirmed AHS
              Imports inventory, and an illustrative price is not a quotation.
            </p>
          ) : null}
          <div className="mt-8">
            <ProductPurchase product={product} />
          </div>
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-4xl">Related samples</h2>
          <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
