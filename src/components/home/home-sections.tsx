import { ProductCard } from "@/components/shop/product-card";
import { categories } from "@/data/categories";
import { business } from "@/lib/business";
import { featuredProducts } from "@/lib/catalog";
import Image from "next/image";
import Link from "next/link";

const steps = [
  { number: "01", title: "Discover", body: "Browse the catalogue and choose the products you are interested in." },
  { number: "02", title: "Prepare your enquiry", body: "Add your selected products and quantities to your bag." },
  { number: "03", title: "Confirm the details", body: "Send your enquiry through WhatsApp so AHS Imports can confirm the product, price, availability, and payment instructions." },
  { number: "04", title: "Follow your order", body: "Once the order and shipping details are agreed, follow the timeline confirmed by AHS Imports." },
];

const reasons = [
  { title: "A variety of categories", body: "Explore products across home, kitchen, fashion, children's items, and more in one catalogue." },
  { title: "A clear enquiry process", body: "Build a selection of products and send your request without having to describe every item from scratch." },
  { title: "Direct communication", body: "Discuss your selected products and confirm the relevant details with AHS Imports." },
  { title: "Clearer expectations", body: "Understand the preorder process and confirm pricing and shipping information before proceeding." },
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Find what you need</h2>
          <p className="mt-3 text-sm leading-6 text-stone">
            Browse our collections to discover practical finds for your home, kitchen, wardrobe, and family.
          </p>
          <Link href="/shop" className="mt-4 inline-flex text-sm underline underline-offset-4">
            Explore all products →
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
              <p className="mt-1 text-center text-xs leading-5 text-stone">{category.description}</p>
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
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Discover the latest finds</h2>
          </div>
          <Link href="/shop" className="shrink-0 text-sm text-forest">
            Explore all products →
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone">
          Explore selected catalogue items and choose what you would like to preorder. Prices are confirmed with AHS Imports before you pay.
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
        <h2 className="text-3xl font-semibold tracking-tight">Your preorder, made simple</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone">
          Find an item you like, send your selection, and let AHS Imports confirm the details before you proceed. Adding an item to your bag does not reserve it or complete a purchase.
        </p>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number}>
              <p className="text-xs font-semibold tracking-[0.14em] text-forest">{step.number}</p>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-stone">{step.body}</p>
            </li>
          ))}
        </ol>
        <Link href="/how-it-works" className="mt-8 inline-flex text-sm underline underline-offset-4">
          Read the preorder guide
        </Link>
      </div>
    </section>
  );
}

export function ReasonsSection() {
  return (
    <section className="bg-white py-14">
      <div className="shell">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight">A simpler way to discover more</h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason.title}>
              <h3 className="font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone">{reason.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="bg-white py-10">
      <div className="shell">
        <div className="rounded-[1.75rem] bg-forest px-6 py-12 text-center text-cream sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight">Found something you like?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-cream/80">
            Browse the catalogue, choose your favourites, and send AHS Imports an enquiry to confirm the details.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/shop" className="btn-cream">
              Start exploring
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
            Follow {business.handle} →
          </a>
        </div>
        <p className="mt-3 max-w-xl text-sm text-stone">
          Follow AHS Imports on Instagram for product discoveries and updates. The pictures below are examples, not a live feed.
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
