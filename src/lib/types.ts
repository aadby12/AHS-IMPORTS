export type PriceStatus = "confirmed" | "illustrative" | "enquiry";

export type AvailabilityStatus =
  | "preorder"
  | "availability-to-be-confirmed"
  | "confirmed-in-stock";

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductVariant = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  images: ProductImage[];
  price: number | null;
  priceStatus: PriceStatus;
  currency: "GHS";
  availabilityStatus: AvailabilityStatus;
  preorder: boolean;
  illustrative: boolean;
  featured: boolean;
  variants?: ProductVariant[];
  shippingNotes?: string;
};

export type Category = {
  slug: string;
  name: string;
  pageTitle: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
};

export type SortKey =
  | "featured"
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc";

export type CartLine = {
  productId: string;
  quantity: number;
};
