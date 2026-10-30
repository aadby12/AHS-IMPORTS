"use client";

import { useCart } from "@/components/cart/cart-provider";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { getCategory } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { count, ready, setDrawerOpen } = useCart();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [searchPath, setSearchPath] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const menuTitleId = useId();
  const searchTitleId = useId();
  const menuOpen = menuPath === pathname;
  const searchOpen = searchPath === pathname;

  useEffect(() => {
    if (!menuOpen && !searchOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
        setSearchPath(null);
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products
      .filter((product) => {
        const category = getCategory(product.category)?.name ?? "";
        const words = `${product.name} ${product.shortDescription} ${product.description} ${category}`
          .toLowerCase()
          .split(/[^a-z0-9]+/);
        return q.split(/\s+/).every((term) =>
          words.some((word) => word === term || word === `${term}s` || word === `${term}es`),
        );
      })
      .slice(0, 8);
  }, [query]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="shell relative flex h-[4.5rem] items-center gap-3">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1.5">
            <span className="h-px bg-ink" />
            <span className="h-px bg-ink" />
            <span className="h-px bg-ink" />
          </span>
        </button>

        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="AHS Imports, home">
          <Image
            src="/brand/logo.webp"
            alt=""
            width={56}
            height={56}
            priority
            className="h-10 w-10"
          />
          <span className="leading-none">
            <span className="block text-[13px] font-extrabold tracking-[0.14em] uppercase">AHS Imports</span>
            <span className="mt-1 hidden text-[9px] tracking-[0.18em] text-stone uppercase sm:block">Everyday finds</span>
          </span>
        </Link>

        <nav className="ml-8 hidden items-center gap-6 lg:flex" aria-label="Primary">
          <Link
            href="/"
            className={`text-sm ${pathname === "/" ? "font-semibold text-forest" : ""}`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`text-sm ${pathname === "/shop" ? "font-semibold text-forest" : ""}`}
            aria-current={pathname === "/shop" ? "page" : undefined}
          >
            Shop
          </Link>
          <details className="relative">
            <summary className="cursor-pointer list-none text-sm [&::-webkit-details-marker]:hidden">
              Categories
            </summary>
            <div className="absolute left-0 top-full z-10 mt-3 w-64 rounded-2xl border border-line bg-white p-2 shadow-lift">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="block px-3 py-2 text-sm hover:bg-sand"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </details>
          {links.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm ${pathname === link.href ? "font-semibold text-forest" : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <form action="/shop" className="mr-2 hidden h-10 items-center rounded-full border border-line bg-[#f6f6f6] px-3 lg:flex">
            <SearchIcon />
            <label htmlFor="header-search" className="sr-only">
              Search products
            </label>
            <input
              id="header-search"
              name="q"
              placeholder="Search products and categories..."
              className="w-36 bg-transparent px-2 text-sm outline-none xl:w-48"
            />
          </form>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={searchOpen}
            aria-controls="site-search"
            onClick={() => setSearchPath(searchOpen ? null : pathname)}
          >
            <span className="sr-only">Search products</span>
            <SearchIcon />
          </button>
          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center"
            onClick={() => setDrawerOpen(true)}
            aria-label={
              ready
                ? `Shopping bag, ${count} ${count === 1 ? "item" : "items"}`
                : "Shopping bag"
            }
          >
            <BagIcon />
            {ready && count > 0 ? (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-forest px-1 text-[10px] text-cream">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="fixed inset-0 z-50 bg-white lg:hidden" role="dialog" aria-modal="true" aria-labelledby={menuTitleId}>
          <div className="flex h-[4.5rem] items-center justify-between px-4">
            <p id={menuTitleId} className="text-sm font-bold tracking-[0.16em] uppercase">
              Menu
            </p>
            <button type="button" className="h-11 px-3" onClick={() => setMenuPath(null)}>
              Close
            </button>
          </div>
          <nav className="grid gap-1 px-6 pb-10" aria-label="Mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="border-b border-line py-4 text-lg font-semibold">
                {link.label}
              </Link>
            ))}
            <p className="pt-6 text-[11px] uppercase tracking-[0.2em] text-stone">Categories</p>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="py-2 text-lg">
                {category.name}
              </Link>
            ))}
            <Link href="/cart" className="btn mt-8">
              Shopping bag{ready && count > 0 ? ` (${count})` : ""}
            </Link>
          </nav>
        </div>
      ) : null}

      {searchOpen ? (
        <div id="site-search" className="fixed inset-0 z-50 bg-white" role="dialog" aria-modal="true" aria-labelledby={searchTitleId}>
          <div className="mx-auto flex h-[4.5rem] max-w-[1180px] items-center justify-between px-4 md:px-8">
            <p id={searchTitleId} className="text-sm font-bold tracking-[0.16em] uppercase">
              Search
            </p>
            <button type="button" className="h-11 px-3" onClick={() => setSearchPath(null)}>
              Close
            </button>
          </div>
          <div className="mx-auto max-w-[1180px] px-4 pb-10 md:px-8">
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>
            <input
              ref={searchRef}
              id="product-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products and categories..."
              className="h-14 w-full border-b border-ink bg-transparent text-2xl outline-none placeholder:text-stone"
            />
            <ul className="mt-6 divide-y divide-line">
              {results.length === 0 ? (
                <li className="py-4 text-sm text-stone">No matching products found. Try another search or browse our categories.</li>
              ) : (
                results.map((product) => (
                  <li key={product.id}>
                    <Link href={`/product/${product.slug}`} className="flex items-center justify-between gap-4 py-4">
                      <span>
                        <span className="block">{product.name}</span>
                        <span className="text-xs uppercase tracking-[0.14em] text-stone">
                          {getCategory(product.category)?.name}
                        </span>
                      </span>
                      <span className="text-sm text-stone">View</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" />
      <path d="M16 16.5L20 20.5" stroke="currentColor" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" stroke="currentColor" />
    </svg>
  );
}
