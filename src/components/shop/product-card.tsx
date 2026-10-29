import { AddToCartButton } from "@/components/shop/add-to-cart-button";
import { PriceLabel } from "@/components/shop/price-label";
import { WhatsAppLink } from "@/components/shop/whatsapp-link";
import { getCategory } from "@/data/categories";
import { availabilityLabel } from "@/lib/format";
import type { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  const image = product.images[0];

  return (
    <article className="flex flex-col">
      <Link href={`/product/${product.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
          />
        </div>
        <h3 className="mt-4 font-display text-2xl leading-none">{product.name}</h3>
      </Link>
      <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-stone">
        {category?.name ?? product.category}
        {product.illustrative ? " · Illustrative" : ""}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-stone">{product.shortDescription}</p>
      <div className="mt-3">
        <PriceLabel product={product} />
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.16em]">
        {availabilityLabel(product.availabilityStatus)}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <AddToCartButton
          productId={product.id}
          className="h-11 bg-ink px-3 text-xs uppercase tracking-[0.14em] text-ivory"
        />
        <WhatsAppLink
          lines={[{ name: product.name, quantity: 1, slug: product.slug }]}
          className="inline-flex h-11 items-center justify-center border border-ink px-3 text-center text-xs uppercase tracking-[0.14em]"
        >
          WhatsApp
        </WhatsAppLink>
      </div>
    </article>
  );
}
