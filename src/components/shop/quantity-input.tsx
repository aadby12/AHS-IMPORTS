"use client";

import { MAX_QUANTITY, MIN_QUANTITY, clampQuantity } from "@/lib/cart-math";
import { useId } from "react";

export function QuantityInput({
  value,
  onChange,
  label = "Quantity",
}: {
  value: number;
  onChange: (value: number) => void;
  label?: string;
}) {
  const inputId = useId();

  return (
    <div className="inline-flex items-center border border-line">
      <button
        type="button"
        className="h-11 w-11 text-lg"
        aria-label={`Decrease ${label.toLowerCase()}`}
        onClick={() => onChange(clampQuantity(value - 1))}
        disabled={value <= MIN_QUANTITY}
      >
        −
      </button>
      <label className="sr-only" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        inputMode="numeric"
        className="h-11 w-12 border-x border-line bg-transparent text-center text-sm"
        value={value}
        onChange={(event) => {
          const next = Number(event.target.value);
          if (Number.isNaN(next)) return;
          onChange(clampQuantity(next));
        }}
      />
      <button
        type="button"
        className="h-11 w-11 text-lg"
        aria-label={`Increase ${label.toLowerCase()}`}
        onClick={() => onChange(clampQuantity(value + 1))}
        disabled={value >= MAX_QUANTITY}
      >
        +
      </button>
    </div>
  );
}
