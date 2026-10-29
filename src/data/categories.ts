import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "home-appliances",
    name: "Home Appliances",
    description: "Fans, dryers, and other household machines available on preorder.",
    image: "/images/fan.jpg",
    imageAlt: "Illustrative photo of a tabletop fan.",
  },
  {
    slug: "kitchen-essentials",
    name: "Kitchen Essentials",
    description: "Cookware, cups, and everyday pieces for the kitchen.",
    image: "/images/board.jpg",
    imageAlt: "Illustrative photo of an orange enamel casserole.",
  },
  {
    slug: "fashion",
    name: "Fashion",
    description: "Shirts, shoes, and bags for everyday wear.",
    image: "/images/shirt.jpg",
    imageAlt: "Illustrative photo of a heart-print shirt.",
  },
  {
    slug: "kids-finds",
    name: "Kids' Finds",
    description: "Playthings and everyday finds for children.",
    image: "/images/blocks-color.jpg",
    imageAlt: "Illustrative photo of colourful wooden shape blocks.",
  },
  {
    slug: "baby-items",
    name: "Baby Items",
    description: "Soft goods and small comforts for babies.",
    image: "/images/teddy.jpg",
    imageAlt: "Illustrative photo of a knit blanket and teddy bear.",
  },
  {
    slug: "more-finds",
    name: "More Finds",
    description: "Lamps, bottles, and other useful extras.",
    image: "/images/lamp.jpg",
    imageAlt: "Illustrative photo of an adjustable floor lamp.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
