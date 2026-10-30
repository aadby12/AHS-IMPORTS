import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "home-appliances",
    name: "Home Appliances",
    pageTitle: "Home Appliances",
    description: "Explore appliances and useful electrical items for everyday living.",
    intro: "Discover appliances and practical electrical items for everyday comfort and convenience.",
    image: "/images/fan.jpg",
    imageAlt: "Photo of a tabletop fan used to illustrate the home appliances category.",
  },
  {
    slug: "kitchen-essentials",
    name: "Kitchen Essentials",
    pageTitle: "Kitchen Essentials",
    description: "Discover cookware and practical pieces for preparing and serving meals.",
    intro: "Explore cookware and useful kitchen pieces for preparing, serving, and enjoying everyday meals.",
    image: "/images/board.jpg",
    imageAlt: "Photo of an enamel casserole used to illustrate the kitchen category.",
  },
  {
    slug: "fashion",
    name: "Fashion",
    pageTitle: "Fashion and Everyday Style",
    description: "Browse clothing, footwear, and accessories for everyday style.",
    intro: "Browse clothing, footwear, and accessories for different everyday looks and occasions.",
    image: "/images/shirt.jpg",
    imageAlt: "Photo of a printed shirt used to illustrate the fashion category.",
  },
  {
    slug: "kids-finds",
    name: "Kids' Finds",
    pageTitle: "Finds for Little Ones",
    description: "Explore useful and fun finds for children.",
    intro: "Discover products for children's everyday activities, play, and practical needs.",
    image: "/images/blocks-color.jpg",
    imageAlt: "Photo of wooden shape blocks used to illustrate the children's category.",
  },
  {
    slug: "baby-items",
    name: "Baby Items",
    pageTitle: "Baby Essentials",
    description: "Discover baby essentials and everyday items for little ones.",
    intro: "Explore useful items for babies and the everyday routines of caring for them.",
    image: "/images/teddy.jpg",
    imageAlt: "Photo of a knit blanket and teddy bear used to illustrate the baby category.",
  },
  {
    slug: "more-finds",
    name: "More Finds",
    pageTitle: "More to Discover",
    description: "Browse additional useful products that do not fit into the main collections.",
    intro: "Explore additional products and useful finds from across the AHS Imports catalogue.",
    image: "/images/lamp.jpg",
    imageAlt: "Photo of a floor lamp used to illustrate the more finds category.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
