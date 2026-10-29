"use client";

import type { ProductImage } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const image = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/5] bg-sand">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-6 md:p-10"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 flex gap-2">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show image ${index + 1}`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              className={`relative h-20 w-16 bg-sand ${index === active ? "outline outline-1 outline-ink" : ""}`}
            >
              <Image src={item.src} alt="" fill className="object-contain p-1" sizes="64px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
