import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { absoluteUrl } from "@/lib/business";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/shop", "/how-it-works", "/about", "/contact", "/cart"];
  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path || "/"),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...categories.map((category) => ({
      url: absoluteUrl(`/category/${category.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/product/${product.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];
}
