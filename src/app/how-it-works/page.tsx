import { business } from "@/lib/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How preorders work",
  description:
    "How to send an AHS Imports preorder enquiry, what happens before payment, and how the shipping estimate is counted.",
};

const orderSteps = [
  "Select the products and quantities you want.",
  "Send your order enquiry by WhatsApp. An enquiry is not a confirmed order.",
  "Confirm the product details and final amount with the business.",
  "Use only the currently approved payment instructions supplied by AHS Imports.",
  "Send payment confirmation to the same administrator.",
  "Wait for confirmation that the payment has been verified.",
];

export default function HowItWorksPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Preorder guide</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-none md:text-7xl">
            How preorders work
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone">
            Browse, send a selection, and let AHS Imports confirm the price and payment
            instructions. Nothing on this page places or confirms an order by itself.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-16 px-5 py-14 md:px-8 md:py-20">
        <section className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-5xl">01</p>
            <h2 className="mt-3 text-2xl">How to order</h2>
          </div>
          <ol className="grid gap-5 lg:col-span-8">
            {orderSteps.map((step, index) => (
              <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-line pt-4">
                <span className="text-sm text-stone">{String(index + 1).padStart(2, "0")}</span>
                <p className="leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-8 border-t border-line pt-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-5xl">02</p>
            <h2 className="mt-3 text-2xl">Shipping time</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed">{business.shipping.summary}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">
              The estimate is {business.shipping.estimate} after the goods are shipped.
              It is not a promise of a particular arrival day.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-line pt-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-5xl">03</p>
            <h2 className="mt-3 text-2xl">Payment</h2>
          </div>
          <div className="lg:col-span-8">
            {business.payment.showPublicly ? (
              <div className="max-w-2xl border border-line bg-paper p-5">
                <p className="text-sm leading-relaxed">
                  Unverified demo information from the supplied screenshot. Do not pay this
                  account unless AHS Imports has confirmed it for your order.
                </p>
                <dl className="mt-4 grid gap-2 text-sm">
                  <div>
                    <dt className="text-stone">Account name</dt>
                    <dd>{business.payment.accountName}</dd>
                  </div>
                  <div>
                    <dt className="text-stone">Payment number</dt>
                    <dd>{business.payment.number}</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <p className="max-w-2xl text-lg leading-relaxed">{business.payment.publicNotice}</p>
            )}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">
              This demonstration does not take card payments, generate receipts, or mark a
              payment as verified.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-3 border-t border-line pt-10 sm:flex-row">
          <Link href="/shop" className="btn">
            Explore the collection
          </Link>
          <Link href="/cart" className="inline-flex h-12 items-center justify-center border border-ink px-5 text-sm uppercase tracking-[0.14em]">
            Review your bag
          </Link>
        </div>
      </div>
    </>
  );
}
