"use client";

import { useCart } from "@/components/cart/cart-provider";
import { useState } from "react";

export function AddToCartButton({
  productId,
  quantity = 1,
  className,
  label = "Add to bag",
}: {
  productId: string;
  quantity?: number;
  className?: string;
  label?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        addItem(productId, quantity);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1400);
      }}
    >
      {added ? "Added" : label}
    </button>
  );
}
