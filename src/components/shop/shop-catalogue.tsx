import { ProductCard } from "@/components/shop/product-card";
import { categories } from "@/data/categories";
import { categoryHref, shopHref, sortOptions } from "@/lib/catalog";
import type { Category, Product, SortKey } from "@/lib/types";
import Link from "next/link";
import type { ReactNode } from "react";

export function ShopCatalogue({
  products,
  q,
  sort,
  activeCategory,
  invalidCategory,
}: {
  products: Product[];
  q: string;
  sort: SortKey;
  activeCategory?: Category;
  invalidCategory?: boolean;
}) {
  const action = activeCategory ? `/category/${activeCategory.slug}` : "/shop";

  return (
    <div className="shell py-10 md:py-14">
      <p className="max-w-2xl text-sm leading-relaxed text-stone">
        Prices shown as “Price on enquiry” are not final. AHS Imports confirms availability and pricing before you pay.
      </p>

      <form action={action} className="mt-8 flex flex-col gap-3 sm:flex-row" key={`${q}-${sort}`}>
        <div className="flex-1">
          <label htmlFor="catalogue-search" className="sr-only">
            Search products
          </label>
          <input
            id="catalogue-search"
            name="q"
            defaultValue={q}
            placeholder="Search products and categories..."
            className="h-12 w-full border border-line bg-paper px-4 text-sm outline-none focus:border-forest"
          />
        </div>
        {sort !== "featured" ? <input type="hidden" name="sort" value={sort} /> : null}
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        <FilterLink href={shopHref({ q, sort })} current={!activeCategory && !invalidCategory}>
          All
        </FilterLink>
        {categories.map((category) => (
          <FilterLink
            key={category.slug}
            href={categoryHref(category.slug, { q, sort })}
            current={activeCategory?.slug === category.slug}
          >
            {category.name}
          </FilterLink>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-sm text-stone">
          {invalidCategory
            ? "That category is not in the catalogue."
            : `${products.length} ${products.length === 1 ? "product" : "products"}`}
          {activeCategory ? ` in ${activeCategory.name}` : ""}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2" role="list" aria-label="Sort">
          {sortOptions.map((option) => {
            const href = activeCategory
              ? categoryHref(activeCategory.slug, { q, sort: option.id })
              : shopHref({ category: undefined, q, sort: option.id });
            const current = sort === option.id;
            return (
              <Link
                key={option.id}
                href={href}
                role="listitem"
                aria-current={current ? "true" : undefined}
                className={`text-sm ${current ? "text-forest underline underline-offset-4" : "text-stone"}`}
              >
                {option.label}
              </Link>
            );
          })}
        </div>
      </div>

      {q || sort !== "featured" || invalidCategory || activeCategory ? (
        <p className="mt-4">
          {q || sort !== "featured" || invalidCategory ? (
            <Link
              href={activeCategory ? `/category/${activeCategory.slug}` : "/shop"}
              className="text-xs uppercase tracking-[0.14em] underline"
            >
              Reset filters
            </Link>
          ) : null}
          {activeCategory ? (
            <Link
              href="/shop"
              className={`${q || sort !== "featured" || invalidCategory ? "ml-4" : ""} text-xs uppercase tracking-[0.14em] underline`}
            >
              Shop all
            </Link>
          ) : null}
        </p>
      ) : null}

      {products.length === 0 ? (
        <div className="py-16">
          <p className="font-display text-4xl">No matching products found.</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
            Try another search or browse our categories. You can also ask AHS Imports about an item you have in mind.
          </p>
          <Link href="/contact" className="btn mt-6">
            Ask about a product
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterLink({
  href,
  current,
  children,
}: {
  href: string;
  current: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "true" : undefined}
      className={`inline-flex h-11 shrink-0 items-center border px-3 text-sm ${
        current ? "border-forest bg-forest text-cream" : "border-line bg-paper"
      }`}
    >
      {children}
    </Link>
  );
}
