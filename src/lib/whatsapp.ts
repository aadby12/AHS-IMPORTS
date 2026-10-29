export type EnquiryLine = {
  name: string;
  quantity: number;
  slug: string;
  variantName?: string;
};

/** Common Ghana mobile prefixes. 10 local digits, or 233 plus 9. */
const PREFIX = "20|23|24|26|27|28|50|53|54|55|56|57|59";
const LOCAL_GHANA = new RegExp(`^0(?:${PREFIX})\\d{7}$`);
const INTL_GHANA = new RegExp(`^233(?:${PREFIX})\\d{7}$`);

export function normalizeGhanaNumber(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  if (LOCAL_GHANA.test(digits)) return `233${digits.slice(1)}`;
  if (INTL_GHANA.test(digits)) return digits;
  return null;
}

export function buildEnquiryMessage(lines: EnquiryLine[], siteUrl: string) {
  const origin = siteUrl.replace(/\/$/, "");

  if (lines.length === 0) {
    return [
      "Hello AHS Imports, I would like to enquire about products available on preorder.",
      "",
      "Please confirm the current prices, availability, and preorder details. Thank you.",
    ].join("\n");
  }

  const items = lines
    .map((line, index) => {
      const variant = line.variantName ? ` — ${line.variantName}` : "";
      const link = `${origin}/product/${line.slug}`;
      return `${index + 1}. ${line.name}${variant} — Quantity: ${line.quantity}\n${link}`;
    })
    .join("\n\n");

  return [
    "Hello AHS Imports, I would like to enquire about the following items:",
    "",
    items,
    "",
    "Please confirm the current prices, availability, and preorder details. Thank you.",
  ].join("\n");
}

export function buildCustomEnquiryMessage(input: { name?: string; note: string }) {
  const who = input.name?.trim() ? ` My name is ${input.name.trim()}.` : "";
  return [
    `Hello AHS Imports.${who}`,
    "",
    input.note.trim(),
    "",
    "Please confirm the current prices, availability, and preorder details. Thank you.",
  ].join("\n");
}

export function whatsAppUrl(localPhone: string, message: string): string | null {
  const number = normalizeGhanaNumber(localPhone);
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
