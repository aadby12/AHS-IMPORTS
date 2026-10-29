import { AddToCartButton } from "@/components/shop/add-to-cart-button";
import { PriceLabel } from "@/components/shop/price-label";
import { WhatsAppLink } from "@/components/shop/whatsapp-link";
import { getCategory } from "@/data/categories";
import type { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  const image = product.images[0];

  return (
    <article className="flex h-full flex-col">
      <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`} className="group relative block overflow-hidden rounded-2xl bg-sand">
        <div className="relative aspect-[4/5]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 45vw, 22vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-[#e39b2b] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">
          Preorder
        </span>
      </Link>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs text-stone">{category?.name}</p>
          <h3 className="mt-1 text-sm font-semibold leading-5">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <div className="mt-1">
            <PriceLabel product={product} />
          </div>
          {product.illustrative ? <p className="mt-1 text-[11px] text-stone">Illustrative sample</p> : null}
          <WhatsAppLink
            lines={[{ name: product.name, quantity: 1, slug: product.slug }]}
            className="mt-1 inline-block text-xs text-forest underline underline-offset-4"
          >
            WhatsApp
          </WhatsAppLink>
        </div>
        <AddToCartButton
          productId={product.id}
          iconOnly
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-sm text-cream"
        />
      </div>
    </article>
  );
}
