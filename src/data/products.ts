import type { Product } from "@/lib/types";

/**
 * Illustrative catalogue for the demo. Every item is marked illustrative.
 * Replace this file with confirmed AHS Imports products when they are available.
 * Prices marked illustrative are not quotations.
 */
export const products: Product[] = [
  {
    id: "desk-fan",
    slug: "desk-fan",
    name: "Desk fan",
    category: "home-appliances",
    shortDescription: "A tabletop fan for everyday rooms.",
    description:
      "Illustrative sample of a tabletop fan. Blade size, speeds, and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/fan.jpg",
        alt: "Illustrative photo of a cream and black tabletop fan.",
      },
    ],
    price: 240,
    priceStatus: "illustrative",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: true,
  },
  {
    id: "hair-dryer",
    slug: "hair-dryer",
    name: "Hair dryer",
    category: "home-appliances",
    shortDescription: "A handheld dryer for home use.",
    description:
      "Illustrative sample of a handheld hair dryer. Heat settings and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/dryer.jpg",
        alt: "Illustrative photo of a silver handheld hair dryer.",
      },
    ],
    price: null,
    priceStatus: "enquiry",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: false,
  },
  {
    id: "enamel-casserole",
    slug: "enamel-casserole",
    name: "Enamel casserole",
    category: "kitchen-essentials",
    shortDescription: "A lidded enamel pot for everyday cooking.",
    description:
      "Illustrative sample of a lidded enamel casserole. Capacity, colour, and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/board.jpg",
        alt: "Illustrative photo of an orange enamel casserole on a kitchen counter.",
      },
    ],
    price: 320,
    priceStatus: "illustrative",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: true,
  },
  {
    id: "ceramic-cups",
    slug: "ceramic-cups",
    name: "Ceramic cups",
    category: "kitchen-essentials",
    shortDescription: "A small set of speckled ceramic cups.",
    description:
      "Illustrative sample of ceramic cups and a canister. Piece count and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/bowls.jpg",
        alt: "Illustrative photo of speckled ceramic cups and a canister.",
      },
    ],
    price: null,
    priceStatus: "enquiry",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: false,
  },
  {
    id: "ceramic-mug",
    slug: "ceramic-mug",
    name: "Ceramic mug",
    category: "kitchen-essentials",
    shortDescription: "A simple ceramic mug for tea or coffee.",
    description:
      "Illustrative sample of a ceramic mug. The current price is confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/mug.jpg",
        alt: "Illustrative photo of a white ceramic mug.",
      },
    ],
    price: null,
    priceStatus: "enquiry",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: false,
  },
  {
    id: "heart-print-shirt",
    slug: "heart-print-shirt",
    name: "Heart-print shirt",
    category: "fashion",
    shortDescription: "A button-up shirt with a small heart print.",
    description:
      "Illustrative sample of a printed button-up shirt. Size, fabric, and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/shirt.jpg",
        alt: "Illustrative photo of a blue heart-print button-up shirt.",
      },
    ],
    price: 90,
    priceStatus: "illustrative",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: true,
  },
  {
    id: "colour-block-sneakers",
    slug: "colour-block-sneakers",
    name: "Colour-block sneakers",
    category: "fashion",
    shortDescription: "Everyday sneakers with colour-block panels.",
    description:
      "Illustrative sample of colour-block sneakers. Sizes and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/shoes.jpg",
        alt: "Illustrative photo of a pair of colour-block sneakers.",
      },
    ],
    price: 180,
    priceStatus: "illustrative",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: true,
  },
  {
    id: "everyday-backpack",
    slug: "everyday-backpack",
    name: "Everyday backpack",
    category: "fashion",
    shortDescription: "A dark backpack for daily carry.",
    description:
      "Illustrative sample of an everyday backpack. Colour and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/backpack.jpg",
        alt: "Illustrative photo of a black everyday backpack.",
      },
    ],
    price: null,
    priceStatus: "enquiry",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: false,
  },
  {
    id: "number-blocks",
    slug: "number-blocks",
    name: "Number blocks",
    category: "kids-finds",
    shortDescription: "Wooden blocks printed with numbers.",
    description:
      "Illustrative sample of wooden number blocks. Set size and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/blocks-wood.jpg",
        alt: "Illustrative photo of wooden blocks printed with numbers.",
      },
    ],
    price: 70,
    priceStatus: "illustrative",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: true,
  },
  {
    id: "shape-blocks",
    slug: "shape-blocks",
    name: "Shape blocks",
    category: "kids-finds",
    shortDescription: "Colourful wooden blocks in simple shapes.",
    description:
      "Illustrative sample of wooden shape blocks. Set size and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/blocks-color.jpg",
        alt: "Illustrative photo of colourful wooden shape blocks.",
      },
    ],
    price: null,
    priceStatus: "enquiry",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: false,
  },
  {
    id: "knit-baby-blanket",
    slug: "knit-baby-blanket",
    name: "Knit baby blanket",
    category: "baby-items",
    shortDescription: "A cable-knit blanket shown with a soft teddy.",
    description:
      "Illustrative sample of a knit baby blanket, photographed with a teddy bear. Size and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/teddy.jpg",
        alt: "Illustrative photo of a cream knit blanket beside a teddy bear.",
      },
    ],
    price: null,
    priceStatus: "enquiry",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: true,
  },
  {
    id: "floor-lamp",
    slug: "floor-lamp",
    name: "Floor lamp",
    category: "more-finds",
    shortDescription: "An adjustable lamp with a metal shade.",
    description:
      "Illustrative sample of an adjustable floor lamp. Finish and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/lamp.jpg",
        alt: "Illustrative photo of a grey adjustable floor lamp.",
      },
    ],
    price: 260,
    priceStatus: "illustrative",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: true,
  },
  {
    id: "matte-bottle",
    slug: "matte-bottle",
    name: "Matte bottle",
    category: "more-finds",
    shortDescription: "A tall matte bottle for everyday drinks.",
    description:
      "Illustrative sample of a matte drink bottle. Capacity and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/water.jpg",
        alt: "Illustrative photo of a matte green bottle.",
      },
    ],
    price: null,
    priceStatus: "enquiry",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: false,
  },
  {
    id: "laundry-basket",
    slug: "laundry-basket",
    name: "Laundry basket",
    category: "more-finds",
    shortDescription: "A plastic laundry basket for the home.",
    description:
      "Illustrative sample of a laundry basket. Size and the current price are confirmed with AHS Imports during an order enquiry. This listing is not confirmed stock.",
    images: [
      {
        src: "/images/laundry.jpg",
        alt: "Illustrative photo of a pale blue laundry basket.",
      },
    ],
    price: 60,
    priceStatus: "illustrative",
    currency: "GHS",
    availabilityStatus: "preorder",
    preorder: true,
    illustrative: true,
    featured: false,
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
