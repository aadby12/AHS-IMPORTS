"use client";

import { useCart } from "@/components/cart/cart-provider";
import { PriceLabel } from "@/components/shop/price-label";
import { summarizeCart } from "@/lib/cart-math";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function CartDrawer() {
  const { drawerOpen, setDrawerOpen, resolved, count, removeItem } = useCart();
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
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-ivory shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 id="bag-title" className="font-display text-3xl">
            Bag{count > 0 ? ` · ${count}` : ""}
          </h2>
          <button ref={closeRef} type="button" className="h-11 px-3 text-sm" onClick={() => setDrawerOpen(false)}>
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {resolved.length === 0 ? (
            <p className="text-sm leading-relaxed text-stone">
              Your bag is empty. Adding a sample does not place an order.
            </p>
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
                    <p className="mt-1 text-sm text-stone">Quantity {line.quantity}</p>
                    <PriceLabel product={line.product} />
                    <button
                      type="button"
                      className="mt-2 text-xs uppercase tracking-[0.14em] underline"
                      onClick={() => removeItem(line.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {summary.needsConfirmation ? (
            <p className="mt-6 text-sm leading-relaxed text-stone">
              Some prices require confirmation. Send your selection to AHS Imports for an
              order quotation.
            </p>
          ) : null}
        </div>
        <div className="border-t border-line px-5 py-4">
          <Link
            href="/cart"
            onClick={() => setDrawerOpen(false)}
            className="inline-flex h-12 w-full items-center justify-center bg-ink text-sm uppercase tracking-[0.14em] text-ivory"
          >
            Review enquiry
          </Link>
        </div>
      </aside>
    </div>
  );
}
