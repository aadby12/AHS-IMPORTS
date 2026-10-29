"use client";

import { ContactSelect } from "@/components/cart/contact-select";
import { useCart } from "@/components/cart/cart-provider";
import { PriceLabel } from "@/components/shop/price-label";
import { QuantityInput } from "@/components/shop/quantity-input";
import { WhatsAppLink } from "@/components/shop/whatsapp-link";
import { summarizeCart } from "@/lib/cart-math";
import { formatMoney } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

export function CartReview() {
  const { ready, resolved, setQuantity, removeItem, clear, contact } = useCart();

  if (!ready) {
    return <p className="text-sm text-stone">Loading your bag…</p>;
  }

  if (resolved.length === 0) {
    return (
      <div className="max-w-xl">
        <p className="text-lg">Your bag is empty.</p>
        <p className="mt-3 text-sm leading-relaxed text-stone">
          Add sample products from the collection, or send a general preorder question.
          Opening WhatsApp does not place an order.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/shop" className="inline-flex h-12 items-center justify-center bg-ink px-5 text-sm uppercase tracking-[0.14em] text-ivory">
            Explore the collection
          </Link>
          <WhatsAppLink
            lines={[]}
            className="inline-flex h-12 items-center justify-center border border-ink px-5 text-sm uppercase tracking-[0.14em]"
          >
            Ask on WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    );
  }

  const summary = summarizeCart(
    resolved.map((line) => ({
      quantity: line.quantity,
      price: line.product.price,
      priceStatus: line.product.priceStatus,
    })),
  );
  const hasIllustrative = resolved.some((line) => line.product.priceStatus === "illustrative");

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <div>
        <ul className="divide-y divide-line border-y border-line">
          {resolved.map((line) => (
            <li key={line.product.id} className="grid gap-4 py-6 sm:grid-cols-[7rem_1fr]">
              <div className="relative aspect-square bg-sand">
                <Image
                  src={line.product.images[0].src}
                  alt=""
                  fill
                  className="object-contain p-2"
                  sizes="112px"
                />
              </div>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/product/${line.product.slug}`} className="font-display text-3xl leading-none">
                      {line.product.name}
                    </Link>
                    <p className="mt-2 text-sm text-stone">
                      {line.product.illustrative ? "Illustrative sample · " : ""}
                      Preorder
                    </p>
                  </div>
                  <PriceLabel product={line.product} />
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <QuantityInput
                    label={line.product.name}
                    value={line.quantity}
                    onChange={(quantity) => setQuantity(line.product.id, quantity)}
                  />
                  <button
                    type="button"
                    className="text-xs uppercase tracking-[0.14em] underline"
                    onClick={() => removeItem(line.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button type="button" className="mt-4 text-xs uppercase tracking-[0.14em] underline" onClick={clear}>
          Clear bag
        </button>
      </div>

      <aside className="h-fit border border-line bg-paper p-5">
        <h2 className="font-display text-3xl">Review enquiry</h2>
        <p className="mt-3 text-sm leading-relaxed text-stone">
          The next step is a WhatsApp enquiry with {contact?.name ?? "the ordering team"}.
          This does not place an order, confirm payment, or reserve the items.
        </p>
        <div className="mt-6">
          {summary.allConfirmed && summary.subtotal != null ? (
            <p className="text-sm">
              Subtotal{" "}
              <span className="font-medium">{formatMoney(summary.subtotal)}</span>
            </p>
          ) : (
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                Some prices require confirmation. Send your selection to AHS Imports for an
                order quotation.
              </p>
              {hasIllustrative ? (
                <p className="text-stone">
                  Figures marked illustrative are demo examples. They are not added into an
                  order total.
                </p>
              ) : null}
            </div>
          )}
        </div>
        <div className="mt-6">
          <ContactSelect />
        </div>
        <ol className="mt-6 list-decimal space-y-2 pl-4 text-sm leading-relaxed text-stone">
          <li>Check the items and quantities.</li>
          <li>Choose the ordering contact.</li>
          <li>Continue on WhatsApp and wait for prices and availability to be confirmed.</li>
          <li>Pay only with instructions AHS Imports confirms after the enquiry.</li>
        </ol>
        <WhatsAppLink
          lines={resolved.map((line) => ({
            name: line.product.name,
            quantity: line.quantity,
            slug: line.product.slug,
          }))}
          className="mt-6 inline-flex h-12 w-full items-center justify-center bg-ink px-4 text-center text-sm uppercase tracking-[0.14em] text-ivory"
        >
          Continue on WhatsApp
        </WhatsAppLink>
      </aside>
    </div>
  );
}
