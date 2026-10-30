"use client";

import { useCart } from "@/components/cart/cart-provider";
import { PriceLabel } from "@/components/shop/price-label";
import { QuantityInput } from "@/components/shop/quantity-input";
import { WhatsAppLink } from "@/components/shop/whatsapp-link";
import { summarizeCart } from "@/lib/cart-math";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function CartDrawer() {
  const { drawerOpen, setDrawerOpen, resolved, count, removeItem, setQuantity } = useCart();
  const closeRef = useRef<HTMLButtonElement>(null);
  const summary = summarizeCart(
    resolved.map((line) => ({
      quantity: line.quantity,
      price: line.product.price,
      priceStatus: line.product.priceStatus,
    })),
  );

  useEffect(() => {
    if (!drawerOpen) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [drawerOpen, setDrawerOpen]);

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close shopping bag"
        className="absolute inset-0 bg-ink/40"
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="bag-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper shadow-lift"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 id="bag-title" className="font-display text-3xl">
            Your bag{count > 0 ? ` · ${count}` : ""}
          </h2>
          <button ref={closeRef} type="button" className="h-11 px-3 text-sm" onClick={() => setDrawerOpen(false)}>
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {resolved.length === 0 ? (
            <div>
              <p className="text-lg">Your bag is empty.</p>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                Explore the catalogue and add the products you would like to enquire about.
              </p>
              <Link href="/shop" className="btn mt-6" onClick={() => setDrawerOpen(false)}>
                Browse products
              </Link>
            </div>
          ) : (
            <ul className="grid gap-5">
              {resolved.map((line) => (
                <li key={line.product.id} className="grid grid-cols-[4.5rem_1fr] gap-3">
                  <div className="relative aspect-square bg-sand">
                    <Image
                      src={line.product.images[0].src}
                      alt=""
                      fill
                      className="object-contain p-1"
                      sizes="72px"
                    />
                  </div>
                  <div>
                    <Link href={`/product/${line.product.slug}`} className="font-medium" onClick={() => setDrawerOpen(false)}>
                      {line.product.name}
                    </Link>
                    <div className="mt-1">
                      <PriceLabel product={line.product} compact />
                    </div>
                    <div className="mt-3">
                      <QuantityInput
                        label={line.product.name}
                        value={line.quantity}
                        onChange={(quantity) => setQuantity(line.product.id, quantity)}
                      />
                    </div>
                    <button
                      type="button"
                      className="mt-2 text-xs uppercase tracking-[0.14em] underline"
                      onClick={() => removeItem(line.product.id)}
                    >
                      Remove item
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {summary.needsConfirmation ? (
            <p className="mt-6 text-sm leading-relaxed text-stone">
              Final pricing will be confirmed by AHS Imports.
            </p>
          ) : null}
        </div>
        {resolved.length > 0 ? (
          <div className="grid gap-3 border-t border-line px-5 py-4">
            <WhatsAppLink
              lines={resolved.map((line) => ({
                name: line.product.name,
                quantity: line.quantity,
                slug: line.product.slug,
              }))}
              className="btn w-full"
            >
              Send enquiry on WhatsApp
            </WhatsAppLink>
            <Link href="/cart" onClick={() => setDrawerOpen(false)} className="btn-line w-full">
              Review your bag
            </Link>
            <Link
              href="/shop"
              onClick={() => setDrawerOpen(false)}
              className="text-center text-sm underline underline-offset-4"
            >
              Browse products
            </Link>
            <p className="text-xs leading-5 text-stone">
              WhatsApp opens a message for you to review and send. Nothing is ordered until AHS Imports confirms availability, price, and payment.
            </p>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
