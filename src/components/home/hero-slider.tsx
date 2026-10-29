"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const SLIDE_MS = 7000;

const slides = [
  {
    id: "kitchen",
    src: "/images/kitchen.jpg",
    alt: "Illustrative photo of a kitchen. Not an AHS Imports location.",
    label: "Kitchen essentials",
    href: "/category/kitchen-essentials",
  },
  {
    id: "home",
    src: "/images/home.jpg",
    alt: "Illustrative photo of a living room. Not an AHS Imports shop.",
    label: "Home appliances",
    href: "/category/home-appliances",
  },
  {
    id: "family",
    src: "/images/teddy.jpg",
    alt: "Illustrative photo of a knit blanket and teddy bear.",
    label: "Family finds",
    href: "/category/baby-items",
  },
];

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

export function HeroSlider() {
  const reduce = useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  return (
    <section className="relative min-h-[34rem] overflow-hidden bg-ink text-white sm:min-h-[38rem]" aria-roledescription="carousel" aria-label="Featured categories">
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        priority={index === 0}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex min-h-[34rem] flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[38rem]">
        <p className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium tracking-[0.16em] uppercase">
          AHS Imports · Preorder
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
          Home, kitchen, fashion, and family finds. All in one place.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
          Browse the catalogue and send a preorder enquiry. Prices are confirmed with AHS Imports before you pay.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href="/shop" className="btn">
            Shop now
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white px-5 text-xs font-semibold tracking-[0.08em] text-white uppercase"
          >
            How it works
          </Link>
        </div>
        <div className="mt-8 flex items-center gap-2" role="tablist" aria-label="Featured categories">
          {slides.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              aria-label={item.label}
              className={`h-1.5 rounded-full ${itemIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/45"}`}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
          <button type="button" className="ml-2 text-xs text-white/80" onClick={() => setPaused((value) => !value)}>
            {paused ? "Play" : "Pause"}
          </button>
        </div>
        <p className="mt-3 text-xs text-white/70">
          Illustrative photos, not confirmed stock.{" "}
          <Link href={slide.href} className="underline underline-offset-4">
            {slide.label}
          </Link>
        </p>
      </div>
    </section>
  );
}
