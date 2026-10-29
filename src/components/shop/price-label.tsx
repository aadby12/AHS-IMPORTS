import { pricePresentation } from "@/lib/format";
import type { Product } from "@/lib/types";

export function PriceLabel({ product }: { product: Product }) {
  const price = pricePresentation(product);
  return (
    <p>
      <span className="block text-sm">{price.primary}</span>
      <span className="mt-0.5 block text-[11px] uppercase tracking-[0.16em] text-stone">
        {price.secondary}
      </span>
    </p>
  );
}
