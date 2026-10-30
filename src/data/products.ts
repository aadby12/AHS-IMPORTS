import type { Product } from "@/lib/types";

/**
 * Demonstration catalogue. These items show how browsing and enquiries work.
 * They are not confirmed AHS Imports stock, and no price is stored as final.
 * Replace this file when the business supplies confirmed products.
 */
const demo = {
  price: null,
  priceStatus: "enquiry" as const,
  currency: "GHS" as const,
  availabilityStatus: "preorder" as const,
  preorder: true,
  illustrative: true,
};

export const products: Product[] = [
  {
    id: "desk-fan",
    slug: "desk-fan",
    name: "Desk fan",
    category: "home-appliances",
    shortDescription: "A tabletop fan for moving air in a room.",
    description:
      "A tabletop fan for everyday rooms. Blade size, speeds, and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/fan.jpg", alt: "Photo of a cream and black tabletop fan." }],
    ...demo,
    featured: true,
  },
  {
    id: "hair-dryer",
    slug: "hair-dryer",
    name: "Hair dryer",
    category: "home-appliances",
    shortDescription: "A handheld dryer for home use.",
    description:
      "A handheld hair dryer for home use. Heat settings and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/dryer.jpg", alt: "Photo of a silver handheld hair dryer." }],
    ...demo,
    featured: false,
  },
  {
    id: "enamel-casserole",
    slug: "enamel-casserole",
    name: "Enamel casserole",
    category: "kitchen-essentials",
    shortDescription: "A lidded enamel pot for everyday cooking.",
    description:
      "A lidded enamel casserole for preparing everyday meals. Capacity, colour, and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/board.jpg", alt: "Photo of an orange enamel casserole on a kitchen counter." }],
    ...demo,
    featured: true,
  },
  {
    id: "ceramic-cups",
    slug: "ceramic-cups",
    name: "Ceramic cups",
    category: "kitchen-essentials",
    shortDescription: "Ceramic cups for serving drinks.",
    description:
      "Ceramic cups for serving drinks at home. The number of pieces and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/bowls.jpg", alt: "Photo of speckled ceramic cups and a canister." }],
    ...demo,
    featured: false,
  },
  {
    id: "ceramic-mug",
    slug: "ceramic-mug",
    name: "Ceramic mug",
    category: "kitchen-essentials",
    shortDescription: "A ceramic mug for everyday drinks.",
    description:
      "A ceramic mug for everyday drinks. The current price is confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/mug.jpg", alt: "Photo of a white ceramic mug." }],
    ...demo,
    featured: false,
  },
  {
    id: "heart-print-shirt",
    slug: "heart-print-shirt",
    name: "Heart-print shirt",
    category: "fashion",
    shortDescription: "A printed button-up shirt for everyday wear.",
    description:
      "A heart-print button-up shirt. Size, fabric, and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/shirt.jpg", alt: "Photo of a blue heart-print button-up shirt." }],
    ...demo,
    featured: true,
  },
  {
    id: "colour-block-sneakers",
    slug: "colour-block-sneakers",
    name: "Colour-block sneakers",
    category: "fashion",
    shortDescription: "Colour-block sneakers for everyday wear.",
    description:
      "A pair of colour-block sneakers. Available sizes and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/shoes.jpg", alt: "Photo of a pair of colour-block sneakers." }],
    ...demo,
    featured: true,
  },
  {
    id: "everyday-backpack",
    slug: "everyday-backpack",
    name: "Everyday backpack",
    category: "fashion",
    shortDescription: "A backpack for carrying everyday items.",
    description:
      "A backpack for everyday use. Colour and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/backpack.jpg", alt: "Photo of a black everyday backpack." }],
    ...demo,
    featured: false,
  },
  {
    id: "number-blocks",
    slug: "number-blocks",
    name: "Number blocks",
    category: "kids-finds",
    shortDescription: "Wooden blocks printed with numbers, for play.",
    description:
      "Wooden blocks printed with numbers, for children's play. The set size and current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/blocks-wood.jpg", alt: "Photo of wooden blocks printed with numbers." }],
    ...demo,
    featured: true,
  },
  {
    id: "shape-blocks",
    slug: "shape-blocks",
    name: "Shape blocks",
    category: "kids-finds",
    shortDescription: "Colourful wooden shape blocks for play.",
    description:
      "Colourful wooden shape blocks for children's play. The set size and current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/blocks-color.jpg", alt: "Photo of colourful wooden shape blocks." }],
    ...demo,
    featured: false,
  },
  {
    id: "knit-baby-blanket",
    slug: "knit-baby-blanket",
    name: "Knit baby blanket",
    category: "baby-items",
    shortDescription: "A knit blanket for a baby.",
    description:
      "A knit blanket for a baby. The photograph also shows a teddy bear; what is included, the size, and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/teddy.jpg", alt: "Photo of a cream knit blanket beside a teddy bear." }],
    ...demo,
    featured: true,
  },
  {
    id: "floor-lamp",
    slug: "floor-lamp",
    name: "Floor lamp",
    category: "more-finds",
    shortDescription: "An adjustable lamp for a room.",
    description:
      "An adjustable floor lamp. Finish and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/lamp.jpg", alt: "Photo of a grey adjustable floor lamp." }],
    ...demo,
    featured: true,
  },
  {
    id: "matte-bottle",
    slug: "matte-bottle",
    name: "Matte bottle",
    category: "more-finds",
    shortDescription: "A bottle for carrying a drink.",
    description:
      "A matte drink bottle. Capacity and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/water.jpg", alt: "Photo of a matte green bottle." }],
    ...demo,
    featured: false,
  },
  {
    id: "laundry-basket",
    slug: "laundry-basket",
    name: "Laundry basket",
    category: "more-finds",
    shortDescription: "A basket for everyday laundry.",
    description:
      "A laundry basket for everyday washing. Size and the current price are confirmed with AHS Imports when you enquire.",
    images: [{ src: "/images/laundry.jpg", alt: "Photo of a pale blue laundry basket." }],
    ...demo,
    featured: false,
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
