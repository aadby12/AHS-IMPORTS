import { pricePresentation } from "@/lib/format";
import type { Product } from "@/lib/types";

export function PriceLabel({ product, compact = false }: { product: Product; compact?: boolean }) {
  const price = pricePresentation(product);
  if (compact) {
    return <p className="text-base font-semibold tracking-tight">{price.primary}</p>;
  }
  return (
    <p>
      <span className="block text-sm">{price.primary}</span>
      <span className="mt-0.5 block text-[11px] uppercase tracking-[0.16em] text-stone">
        {price.secondary}
      </span>
    </p>
  );
}
