import type { PriceStatus } from "@/lib/types";

export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 10;

export function clampQuantity(value: number) {
  if (!Number.isFinite(value)) return MIN_QUANTITY;
  const whole = Math.trunc(value);
  return Math.min(MAX_QUANTITY, Math.max(MIN_QUANTITY, whole));
}

export type PricedLine = {
  quantity: number;
  price: number | null;
  priceStatus: PriceStatus;
};

export function summarizeCart(lines: PricedLine[]) {
  const allConfirmed =
    lines.length > 0 &&
    lines.every(
      (line) => line.priceStatus === "confirmed" && typeof line.price === "number",
    );

  const subtotal = allConfirmed
    ? lines.reduce((sum, line) => sum + (line.price as number) * line.quantity, 0)
    : null;

  return {
    allConfirmed,
    needsConfirmation: lines.length > 0 && !allConfirmed,
    subtotal,
  };
}
