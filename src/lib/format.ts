import type { AvailabilityStatus, PriceStatus } from "@/lib/types";

export function formatMoney(amount: number, currency: "GHS" = "GHS") {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function availabilityLabel(status: AvailabilityStatus) {
  switch (status) {
    case "preorder":
      return "Preorder";
    case "availability-to-be-confirmed":
      return "Availability to be confirmed";
    case "confirmed-in-stock":
      return "Confirmed in stock";
  }
}

export function pricePresentation(input: {
  price: number | null;
  priceStatus: PriceStatus;
  currency: "GHS";
}) {
  if (input.priceStatus === "confirmed" && typeof input.price === "number") {
    return {
      primary: formatMoney(input.price, input.currency),
      secondary: "Confirmed price",
      confirmed: true,
    };
  }

  return {
    primary: "Price on enquiry",
    secondary: "Final price is confirmed before you pay",
    confirmed: false,
  };
}
