"use client";

import { ContactSelect } from "@/components/cart/contact-select";
import { AddToCartButton } from "@/components/shop/add-to-cart-button";
import { QuantityInput } from "@/components/shop/quantity-input";
import { WhatsAppLink } from "@/components/shop/whatsapp-link";
import { availabilityLabel } from "@/lib/format";
import type { Product } from "@/lib/types";
import { useState } from "react";

export function ProductPurchase({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.16em]">{availabilityLabel(product.availabilityStatus)} enquiry</p>
      <p className="mt-4 text-sm leading-relaxed text-stone">
        Choose a quantity, add the item to your bag, or send a question about this product. Neither step places an order.
      </p>
      {product.variants && product.variants.length > 0 ? (
        <ul className="mt-4 text-sm">
          {product.variants.map((variant) => (
            <li key={variant.id}>{variant.name}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-stone">
          Size, colour, and other options are confirmed with AHS Imports. None are listed here because they have not been confirmed for this item.
        </p>
      )}
      <div className="mt-6">
        <QuantityInput label={product.name} value={quantity} onChange={setQuantity} />
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <AddToCartButton
          productId={product.id}
          quantity={quantity}
          label="Add to bag"
          className="btn"
        />
        <WhatsAppLink
          lines={[{ name: product.name, quantity, slug: product.slug }]}
          className="btn-line"
        >
          Enquire about this item
        </WhatsAppLink>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-stone">
        Adding this item to your bag does not place an order. WhatsApp opens a message for you to review and send.
      </p>
      <div className="mt-8">
        <ContactSelect />
      </div>
    </div>
  );
}
