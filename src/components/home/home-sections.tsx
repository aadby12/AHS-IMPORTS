import { ProductCard } from "@/components/shop/product-card";
import { categories } from "@/data/categories";
import { business } from "@/lib/business";
import { featuredProducts } from "@/lib/catalog";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Explore products",
    body: "Browse categories and choose the items you want.",
  },
  {
    number: "02",
    title: "Submit your selection",
    body: "Add products and quantities to your shopping bag, then prepare an order enquiry.",
  },
  {
    number: "03",
    title: "Confirm details and payment",
    body: "AHS Imports confirms the relevant product details, pricing, and approved payment instructions.",
  },
  {
    number: "04",
    title: "Follow the shipping timeline",
    body: business.shipping.summary,
  },
];

const reasons = [
  {
    title: "Several categories, one place",
    body: "Home appliances, kitchen essentials, fashion, kids' finds, baby items, and more.",
  },
  {
    title: "A clear preorder path",
    body: "Choose items, send an enquiry, and wait for the business to confirm the details.",
  },
  {
    title: "Direct conversation",
    body: "Order questions go to the ordering contacts by WhatsApp, so a person can reply.",
  },
  {
    title: "A catalogue you can browse",
    body: "Use search, categories, and the bag to prepare a selection before you enquire.",
  },
];

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1180px] items-end gap-10 px-5 py-12 md:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone">China · Ghana · Preorder</p>
          <h1 className="mt-4 font-display text-[3.3rem] leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            More of what
            <span className="italic"> you need.</span>
            <span className="mt-1 block">All in one place.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
            Explore home essentials, kitchen finds, fashion, and everyday products through one
            convenient preorder destination.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/shop" className="inline-flex h-12 items-center justify-center bg-ink px-5 text-sm uppercase tracking-[0.14em] text-ivory">
              Explore the Collection
            </Link>
            <Link href="/how-it-works" className="inline-flex h-12 items-center justify-center border border-ink px-5 text-sm uppercase tracking-[0.14em]">
              How Preordering Works
            </Link>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-6 gap-3 lg:col-span-6">
          <figure className="relative col-span-4 aspect-[4/5] min-w-0 overflow-hidden bg-sand">
            <Image
              src="/images/board.jpg"
              alt="Illustrative photo of an enamel casserole."
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-ivory/90 px-2 py-1 text-[10px] uppercase tracking-[0.16em]">
              Illustrative
            </figcaption>
          </figure>
          <div className="col-span-2 grid min-w-0 content-start gap-3">
            <figure className="relative aspect-square w-full overflow-hidden bg-sand">
              <Image src="/images/fan.jpg" alt="Illustrative photo of a desk fan." fill sizes="20vw" className="object-cover" />
            </figure>
            <figure className="relative aspect-square w-full overflow-hidden bg-sand">
              <Image src="/images/shoes.jpg" alt="Illustrative photo of colour-block sneakers." fill sizes="20vw" className="object-cover" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategorySection() {
  return (
    <section id="categories" className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Shop by category</p>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">A wider selection.</h2>
        </div>
        <Link href="/shop" className="hidden text-sm underline underline-offset-4 sm:inline">
          Shop all
        </Link>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {categories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className={`group block ${index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-4"}`}
          >
            <div className={`relative overflow-hidden bg-sand ${index === 0 ? "aspect-[4/5] md:aspect-[5/4]" : "aspect-[4/5]"}`}>
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 30vw"}
                className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-3 font-display text-3xl leading-none">{category.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FeaturedSection() {
  const featured = featuredProducts();
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Sample products</p>
        <h2 className="mt-3 max-w-xl font-display text-5xl leading-none md:text-6xl">
          From the kitchen to the nursery.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">
          Names and pictures in this grid are illustrative. They can be replaced with the
          business&apos;s own catalogue. Nothing here is presented as confirmed stock.
        </p>
        <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PreorderSection() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.28em] text-stone">How preordering works</p>
        <h2 className="mt-3 max-w-lg font-display text-5xl leading-none md:text-6xl">
          Enquire first. Confirm before you pay.
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-ink pt-4">
              <p className="font-display text-4xl">{step.number}</p>
              <h3 className="mt-4 text-base font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{step.body}</p>
            </li>
          ))}
        </ol>
        <Link href="/how-it-works" className="mt-10 inline-flex text-sm underline underline-offset-4">
          Read the full preorder guide
        </Link>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
      <h2 className="font-display text-5xl leading-none md:text-6xl">Why shop with AHS Imports?</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {reasons.map((reason) => (
          <article key={reason.title} className="border-t border-line pt-4">
            <h3 className="text-lg">{reason.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">{reason.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SpotlightSection() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 px-5 py-14 md:px-8 lg:grid-cols-2 lg:py-0">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[36rem]">
          <Image
            src="/images/kitchen.jpg"
            alt="Illustrative photo of someone cooking at a stove. Not an AHS Imports location."
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="lg:py-20 lg:pl-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-cream/60">Category spotlight</p>
          <h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">Kitchen essentials</h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/80">
            Casseroles, cups, and everyday kitchen pieces, prepared as preorder enquiries.
            The photograph is illustrative and is not a picture of the AHS Imports shop.
          </p>
          <Link href="/category/kitchen-essentials" className="mt-8 inline-flex h-12 items-center bg-cream px-5 text-sm uppercase tracking-[0.14em] text-ink">
            Explore kitchen essentials
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-end">
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Instagram</p>
        <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">{business.handle}</h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-stone">
          New finds are shared on Instagram. This page links to the profile. It does not
          recreate the feed or display follower counts.
        </p>
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-12 items-center border border-ink px-5 text-sm uppercase tracking-[0.14em]"
        >
          Open Instagram
        </a>
      </div>
      <p className="font-display text-3xl leading-tight text-stone lg:text-right">
        China · Ghana
        <span className="mt-2 block text-ink">Import · Logistics · Global Trade</span>
      </p>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-5xl leading-none md:text-7xl">Found Something You Need?</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-stone">
          Explore the collection and prepare your next preorder with AHS Imports.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/shop" className="inline-flex h-12 items-center justify-center bg-ink px-5 text-sm uppercase tracking-[0.14em] text-ivory">
            Shop the collection
          </Link>
          <Link href="/how-it-works" className="inline-flex h-12 items-center justify-center border border-ink px-5 text-sm uppercase tracking-[0.14em]">
            Preorder instructions
          </Link>
        </div>
      </div>
    </section>
  );
}
