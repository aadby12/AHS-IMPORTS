import { categories } from "@/data/categories";
import { business } from "@/lib/business";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "AHS Imports is a Ghana-based preorder business for home appliances, fashion, kitchen essentials, kids' finds, baby items, and more.",
};

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone">About</p>
            <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">AHS Imports</h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-stone">
            A convenient place to discover products across several categories, then prepare a
            preorder enquiry.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-14 md:px-8 lg:grid-cols-12">
        <figure className="lg:col-span-5">
          <div className="relative aspect-[4/5] bg-sand">
            <Image
              src="/images/portrait-woman.jpg"
              alt="Illustrative portrait. This person is not identified as AHS Imports staff or a customer."
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-stone">
            Illustrative portrait. Not a photograph of the founder, staff, or a named customer.
          </figcaption>
        </figure>
        <div className="lg:col-span-7 lg:pt-6">
          <p className="text-lg leading-relaxed">
            {business.shortDescription} The public profile also describes the work as import
            and logistics between China and Ghana.
          </p>
          <p className="mt-5 leading-relaxed text-stone">
            Customers can look through categories, keep a selection in the shopping bag, and
            send that selection to an ordering contact. Prices, availability, and payment
            instructions are confirmed in that conversation. The bag does not place an order
            on its own.
          </p>
          <p className="mt-5 leading-relaxed text-stone">
            The public Beacons profile lists {business.locationLabel}. This website does not
            publish a street address, opening hours, or a claim that a shop can be visited.
          </p>
          <figure className="mt-10">
            <Image
              src="/brand/logo.webp"
              alt="AHS Imports logo from the public Beacons profile"
              width={160}
              height={160}
              className="h-36 w-36"
            />
            <figcaption className="mt-3 max-w-sm text-xs leading-relaxed text-stone">
              Logo published on the AHS Imports Beacons profile. The wordmark beside it in the
              header is set in type so the name stays readable at small sizes.
            </figcaption>
          </figure>
        </div>
      </div>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-8">
          <h2 className="font-display text-4xl">What the range covers</h2>
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
            alt="Illustrative photograph of a furnished living room. Not an AHS Imports shop."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mx-auto max-w-[1180px] px-5 py-4 text-xs text-stone md:px-8">
          Illustrative interior photograph. Not a picture of an AHS Imports location.
        </figcaption>
      </figure>
    </>
  );
}
