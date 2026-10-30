import { AddToCartButton } from "@/components/shop/add-to-cart-button";
import { PriceLabel } from "@/components/shop/price-label";
import { getCategory } from "@/data/categories";
import type { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  const category = getCategory(product.category);

  return (
    <article className="flex h-full flex-col">
      <Link href={`/product/${product.slug}`} className="group block bg-sand">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 45vw, 22vw"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        {category ? <p className="text-xs text-stone">{category.name}</p> : null}
        <h3 className="mt-1 text-sm font-semibold leading-5">
          <Link href={`/product/${product.slug}`} className="hover:underline hover:underline-offset-4">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-stone">{product.shortDescription}</p>
        <div className="mt-2">
          <PriceLabel product={product} compact />
        </div>
        {product.preorder ? <p className="mt-1 text-xs text-stone">Preorder enquiry</p> : null}
        <div className="mt-4">
          <AddToCartButton productId={product.id} label="Add to bag" showIcon={false} className="btn w-full" />
        </div>
      </div>
    </article>
  );
}
