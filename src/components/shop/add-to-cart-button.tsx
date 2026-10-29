"use client";

import { useCart } from "@/components/cart/cart-provider";
import { useState } from "react";

export function AddToCartButton({
  productId,
  quantity = 1,
  className,
  label = "Add to bag",
  iconOnly = false,
  plain = false,
  showIcon = true,
}: {
  productId: string;
  quantity?: number;
  className?: string;
  label?: string;
  iconOnly?: boolean;
  plain?: boolean;
  showIcon?: boolean;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      className={className}
      aria-label={iconOnly ? (added ? "Added to bag" : label) : undefined}
      onClick={() => {
        addItem(productId, quantity);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1400);
      }}
    >
      {plain ? (
        added ? "Added to cart" : label
      ) : iconOnly ? (
        <span aria-hidden="true">{added ? "✓" : "→"}</span>
      ) : (
      <span className="inline-flex items-center justify-center gap-2 text-center leading-tight">
        {showIcon ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" />
            <path d="M9 8V7a3 3 0 0 1 6 0v1" stroke="currentColor" />
          </svg>
        ) : null}
        {added ? "Added" : label}
      </span>
      )}
    </button>
  );
}
