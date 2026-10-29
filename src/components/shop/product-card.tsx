import { AddToCartButton } from "@/components/shop/add-to-cart-button";
import { PriceLabel } from "@/components/shop/price-label";
import { WhatsAppLink } from "@/components/shop/whatsapp-link";
import type { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  const needsEnquiry = product.priceStatus === "enquiry" || product.price == null;

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
        <h3 className="text-sm font-semibold leading-5">
          <Link href={`/product/${product.slug}`} className="hover:underline hover:underline-offset-4">
            {product.name}
          </Link>
        </h3>
        <div className="mt-2">
          <PriceLabel product={product} compact />
        </div>
        {product.preorder ? <p className="mt-1 text-xs text-stone">Preorder</p> : null}
        <div className="mt-4 grid gap-2">
          {needsEnquiry ? (
            <WhatsAppLink
              lines={[{ name: product.name, quantity: 1, slug: product.slug }]}
              className="btn w-full"
            >
              Enquire about product
            </WhatsAppLink>
          ) : (
            <AddToCartButton productId={product.id} label="Add to cart" showIcon={false} className="btn w-full" />
          )}
          {needsEnquiry ? (
            <AddToCartButton
              productId={product.id}
              label="Add to cart"
              plain
              className="h-11 text-sm underline underline-offset-4"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}
