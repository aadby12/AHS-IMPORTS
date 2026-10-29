import { CartReview } from "@/components/cart/cart-review";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping bag",
  description:
    "Review sample products before sending a WhatsApp preorder enquiry to AHS Imports.",
};

export default function CartPage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Shopping bag</p>
          <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">Your selection</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">
            Review quantities here, then continue to WhatsApp. This page does not confirm an
            order or create an order number.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
        <CartReview />
      </div>
    </>
  );
}
