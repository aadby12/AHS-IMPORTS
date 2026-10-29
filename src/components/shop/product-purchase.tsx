"use client";

import { ContactSelect } from "@/components/cart/contact-select";
import { useCart } from "@/components/cart/cart-provider";
import { AddToCartButton } from "@/components/shop/add-to-cart-button";
import { QuantityInput } from "@/components/shop/quantity-input";
import { WhatsAppLink } from "@/components/shop/whatsapp-link";
import { business } from "@/lib/business";
import { availabilityLabel } from "@/lib/format";
import type { Product } from "@/lib/types";
import { useState } from "react";

export function ProductPurchase({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { contact } = useCart();
  const shipping = product.shippingNotes ?? business.shipping.summary;

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.16em]">{availabilityLabel(product.availabilityStatus)}</p>
      <p className="mt-4 text-sm leading-relaxed text-stone">{shipping}</p>
      {product.variants && product.variants.length > 0 ? (
        <ul className="mt-4 text-sm">
          {product.variants.map((variant) => (
            <li key={variant.id}>{variant.name}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-stone">
          Options such as size or colour are confirmed with AHS Imports. None are listed here
          because they are not known for this sample.
        </p>
      )}
      <div className="mt-6">
        <QuantityInput label={product.name} value={quantity} onChange={setQuantity} />
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <AddToCartButton
          productId={product.id}
          quantity={quantity}
          className="h-12 bg-ink text-xs uppercase tracking-[0.14em] text-ivory"
        />
        <WhatsAppLink
          lines={[{ name: product.name, quantity, slug: product.slug }]}
          className="inline-flex h-12 items-center justify-center border border-ink px-3 text-center text-xs uppercase tracking-[0.14em]"
        >
          WhatsApp {contact ? contact.name : ""}
        </WhatsAppLink>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-stone">
        Adding this sample to the bag does not place an order. WhatsApp opens a chat so the
        business can confirm the details.
      </p>
      <div className="mt-8">
        <ContactSelect />
      </div>
    </div>
  );
}
