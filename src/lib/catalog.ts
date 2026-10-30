import { categories, getCategory } from "@/data/categories";
import { getProduct, products } from "@/data/products";
import type { Product, SortKey } from "@/lib/types";

export const sortOptions: { id: SortKey; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "name-asc", label: "Name A–Z" },
  { id: "name-desc", label: "Name Z–A" },
];

export function parseSort(value: string | undefined): SortKey {
  if (sortOptions.some((option) => option.id === value)) return value as SortKey;
  return "featured";
}

function priceRank(product: Product) {
  if (typeof product.price === "number" && product.priceStatus !== "enquiry") {
    return product.price;
  }
  return null;
}

export function sortProducts(list: Product[], sort: SortKey) {
  const next = [...list];
  next.sort((a, b) => {
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    if (sort === "name-desc") return b.name.localeCompare(a.name);
    if (sort === "price-asc" || sort === "price-desc") {
      const aPrice = priceRank(a);
      const bPrice = priceRank(b);
      if (aPrice == null && bPrice == null) return a.name.localeCompare(b.name);
      if (aPrice == null) return 1;
      if (bPrice == null) return -1;
      const diff = sort === "price-asc" ? aPrice - bPrice : bPrice - aPrice;
      return diff || a.name.localeCompare(b.name);
    }
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  return next;
}

function matchesQuery(haystack: string, query: string) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const words = haystack.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  return terms.every((term) =>
    words.some(
      (word) => word === term || word === `${term}s` || word === `${term}es`,
    ),
  );
}

export function queryProducts(options: {
  q?: string;
  category?: string;
  sort?: SortKey;
}) {
  const q = options.q?.trim().toLowerCase() ?? "";
  const filtered = products.filter((product) => {
    if (options.category && product.category !== options.category) return false;
    if (!q) return true;
    const categoryName = getCategory(product.category)?.name ?? "";
    const haystack = [
      product.name,
      product.shortDescription,
      product.description,
      categoryName,
    ].join(" ");
    return matchesQuery(haystack, q);
  });
  return sortProducts(filtered, options.sort ?? "featured");
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, limit);
}

export function shopHref(options: {
  category?: string;
  q?: string;
  sort?: SortKey;
}) {
  const params = new URLSearchParams();
  if (options.category) params.set("category", options.category);
  if (options.q) params.set("q", options.q);
  if (options.sort && options.sort !== "featured") params.set("sort", options.sort);
  const query = params.toString();
  return query ? `/shop?${query}` : "/shop";
}

export function categoryHref(
  slug: string,
  options: { q?: string; sort?: SortKey } = {},
) {
  const params = new URLSearchParams();
  if (options.q) params.set("q", options.q);
  if (options.sort && options.sort !== "featured") params.set("sort", options.sort);
  const query = params.toString();
  return query ? `/category/${slug}?${query}` : `/category/${slug}`;
}

export function featuredProducts() {
  return products.filter((product) => product.featured);
}

export { categories, getCategory, getProduct, products };
