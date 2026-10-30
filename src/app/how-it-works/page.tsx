import { business } from "@/lib/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How preordering works",
  description:
    "Choose products from the AHS Imports catalogue, send an enquiry, and confirm pricing and shipping before you proceed.",
};

const steps = [
  {
    title: "Browse the catalogue",
    body: "Explore the categories and open the products you are interested in. Review the available product information before adding items to your bag.",
  },
  {
    title: "Build your selection",
    body: "Choose the items and quantities you want to enquire about. Review your selection before sending it. Adding an item does not reserve it.",
  },
  {
    title: "Send your enquiry",
    body: "Submit your selection through the website's WhatsApp enquiry. AHS Imports can then confirm the product details, availability, pricing, and payment instructions.",
  },
  {
    title: "Review and confirm",
    body: "Review the information provided by AHS Imports. Only proceed with payment after the business has confirmed the applicable price and payment instructions.",
  },
  {
    title: "Follow the shipping timeline",
    body: "Ask AHS Imports to confirm the estimated shipping and arrival timeline for your order. A general estimate is not a guaranteed delivery date.",
  },
];

const notes = [
  "An enquiry is not a confirmed order.",
  "Product availability and final prices must be confirmed.",
  "Payment instructions should come directly from AHS Imports. This website does not take payment.",
  "Shipping estimates are not guarantees. The general estimate starts when the goods are shipped, not when you browse, enquire, or pay.",
  "Delivery fees and any other charges should be confirmed before you proceed.",
  "Returns, cancellations, and similar terms are not published here. Ask AHS Imports for the terms that apply before you confirm an order.",
];

export default function HowItWorksPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Preorder guide</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-none md:text-7xl">
            How preordering works
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone">
            Choose products from the catalogue, send AHS Imports your enquiry, and confirm the important details before proceeding.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-16 px-5 py-14 md:px-8 md:py-20">
        <ol className="grid gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="grid gap-3 border-t border-line pt-6 lg:grid-cols-12">
              <p className="font-display text-4xl lg:col-span-3">{String(index + 1).padStart(2, "0")}</p>
              <div className="lg:col-span-8">
                <h2 className="text-2xl">{step.title}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-stone">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="grid gap-6 border-t border-line pt-12 lg:grid-cols-12">
          <h2 className="text-2xl lg:col-span-3">Shipping estimate</h2>
          <p className="max-w-2xl text-lg leading-relaxed lg:col-span-8">{business.shipping.summary}</p>
        </section>

        <section className="grid gap-6 border-t border-line pt-12 lg:grid-cols-12">
          <h2 className="text-2xl lg:col-span-3">Important information</h2>
          <ul className="grid gap-3 lg:col-span-8">
            {notes.map((note) => (
              <li key={note} className="leading-relaxed text-stone">{note}</li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-3 border-t border-line pt-10 sm:flex-row">
          <Link href="/shop" className="btn">
            Explore products
          </Link>
          <Link href="/contact" className="btn-line">
            Contact AHS Imports
          </Link>
        </div>
      </div>
    </>
  );
}
