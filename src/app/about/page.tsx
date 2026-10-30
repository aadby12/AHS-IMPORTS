import { categories } from "@/data/categories";
import { business } from "@/lib/business";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "AHS Imports brings everyday product categories together so customers can browse and send a preorder enquiry.",
};

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone">About</p>
            <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">About AHS Imports</h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-stone">
            AHS Imports brings together a range of everyday product categories in one catalogue. From home and kitchen essentials to fashion, children&apos;s products, baby items, and other useful finds, customers can explore products and send preorder enquiries directly to the business.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-14 md:px-8 lg:grid-cols-12">
        <figure className="lg:col-span-5">
          <div className="relative aspect-[4/5] bg-sand">
            <Image
              src="/images/portrait-woman.jpg"
              alt="Portrait used as a visual example. This person is not identified as AHS Imports staff or a customer."
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-stone">
            Example portrait. Not a photograph of the founder, staff, or a named customer.
          </figcaption>
        </figure>
        <div className="lg:col-span-7 lg:pt-6">
          <h2 className="font-display text-4xl">A convenient way to discover products</h2>
          <p className="mt-5 leading-relaxed text-stone">
            Our catalogue helps customers browse different collections, select the items they are interested in, and prepare an enquiry in one place. Before proceeding, customers can confirm the product details, pricing, payment instructions, and expected shipping timeline directly with AHS Imports.
          </p>
          <h2 className="mt-10 font-display text-4xl">Built around clear communication</h2>
          <p className="mt-5 leading-relaxed text-stone">
            We want customers to know what they are enquiring about and what needs to be confirmed before they proceed. Browse the catalogue, prepare your selection, and speak with AHS Imports about the next steps.
          </p>
          <p className="mt-5 leading-relaxed text-stone">
            The public profile lists {business.locationLabel}. This website does not publish a street address, opening hours, or a shop you can visit.
          </p>
          <Link href="/shop" className="btn mt-8">
            Browse the catalogue
          </Link>
        </div>
      </div>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-8">
          <h2 className="font-display text-4xl">What you can browse</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.slug} className="border-t border-line pt-4">
                <Link href={`/category/${category.slug}`} className="font-display text-3xl">
                  {category.name}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-stone">{category.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <figure className="border-t border-line">
        <div className="relative aspect-[16/8] min-h-64 bg-sand">
          <Image
            src="/images/home.jpg"
            alt="Photograph of a furnished living room used as a visual example. Not an AHS Imports shop."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mx-auto max-w-[1180px] px-5 py-4 text-xs text-stone md:px-8">
          Example interior photograph. Not a picture of an AHS Imports location.
        </figcaption>
      </figure>
    </>
  );
}
