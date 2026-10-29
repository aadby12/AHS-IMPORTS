import { ProductCard } from "@/components/shop/product-card";
import { categories } from "@/data/categories";
import { business } from "@/lib/business";
import { featuredProducts } from "@/lib/catalog";
import Image from "next/image";
import Link from "next/link";

const steps = [
  { number: "01", title: "Discover", body: "Find a product you want to order." },
  { number: "02", title: "Send your request", body: "Add the item and quantity, then send the selection on WhatsApp." },
  { number: "03", title: "Confirm", body: "AHS Imports confirms the product, the price, and how to pay." },
  { number: "04", title: "Wait for arrival", body: "About two months after the goods are shipped, not after you pay." },
];

const socialImages = [
  { src: "/images/bowls.jpg", alt: "Illustrative photo of ceramic bowls." },
  { src: "/images/shirt.jpg", alt: "Illustrative photo of a heart-print shirt." },
  { src: "/images/fan.jpg", alt: "Illustrative photo of a desk fan." },
  { src: "/images/laundry.jpg", alt: "Illustrative photo of a laundry basket." },
];

export function CategorySection() {
  return (
    <section id="categories" className="bg-white py-16">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase">Shop by category</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Find exactly what you need</h2>
          <p className="mt-3 text-sm leading-6 text-stone">
            Explore our collections and discover products for everyday living.
          </p>
          <Link href="/shop" className="mt-4 inline-flex text-sm underline underline-offset-4">
            Browse all categories →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 640px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-center text-sm font-medium group-hover:underline group-hover:underline-offset-4">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedSection() {
  const products = featuredProducts().slice(0, 4);

  return (
    <section className="bg-white pb-6">
      <div className="shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-forest uppercase">The catalogue</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Sample finds</h2>
          </div>
          <Link href="/shop" className="shrink-0 text-sm text-forest">
            View all →
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone">
          Demo catalogue: product images and prices are illustrative and are not confirmed inventory or quotations.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PreorderSection() {
  return (
    <section className="bg-sand py-14">
      <div className="shell">
        <h2 className="text-3xl font-semibold tracking-tight">Your next find, made simple.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone">{business.shipping.summary}</p>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number}>
              <p className="text-xs font-semibold tracking-[0.14em] text-forest">{step.number}</p>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-stone">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="bg-white py-10">
      <div className="shell">
        <div className="rounded-[1.75rem] bg-forest px-6 py-12 text-center text-cream sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight">Prepare your next preorder.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-cream/80">
            Explore the collection, keep a selection, and ask AHS Imports to confirm the price and the details.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/shop" className="btn-cream">
              Start shopping
            </Link>
            <Link href="/how-it-works" className="inline-flex h-12 items-center rounded-full border border-cream/40 px-5 text-xs font-semibold tracking-[0.08em] uppercase">
              How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="bg-white pb-16">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-forest uppercase">Instagram</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">More finds. More inspiration.</h2>
          </div>
          <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-forest">
            Visit {business.handle} →
          </a>
        </div>
        <p className="mt-3 max-w-xl text-sm text-stone">
          This page links to the profile. It does not recreate the feed or show follower counts. The pictures below are illustrative stand-ins.
        </p>
        <div className="mt-6 grid grid-cols-4 gap-3">
          {socialImages.map((image) => (
            <a
              key={image.src}
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the AHS Imports Instagram profile"
              className="relative aspect-square overflow-hidden rounded-2xl bg-sand"
            >
              <Image src={image.src} alt={image.alt} fill sizes="22vw" className="object-cover" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
