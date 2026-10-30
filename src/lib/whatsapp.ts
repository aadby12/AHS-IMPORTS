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

function formatLine(line: EnquiryLine, origin: string, index?: number) {
  const title = index == null ? `Product: ${line.name}` : `${index}. ${line.name}`;
  const rows = [title, `Quantity: ${line.quantity}`];
  if (line.variantName) rows.push(`Variant: ${line.variantName}`);
  rows.push(`${origin}/product/${line.slug}`);
  return rows.join("\n");
}

export function buildEnquiryMessage(lines: EnquiryLine[], siteUrl: string) {
  const origin = siteUrl.replace(/\/$/, "");

  if (lines.length === 0) {
    return [
      "Hello AHS Imports, I would like to enquire about products available on preorder.",
      "",
      "Please confirm availability, final pricing, and expected arrival details. Thank you.",
    ].join("\n");
  }

  if (lines.length === 1) {
    return [
      "Hello AHS Imports! I'm interested in ordering the following product:",
      "",
      formatLine(lines[0], origin),
      "",
      "Please confirm availability, final pricing, and expected arrival details before I proceed. Thank you.",
    ].join("\n");
  }

  const items = lines.map((line, index) => formatLine(line, origin, index + 1)).join("\n\n");

  return [
    "Hello AHS Imports! I'd like to enquire about placing a preorder for these items:",
    "",
    items,
    "",
    "Please confirm availability, final pricing, and expected arrival details for this selection.",
    "Sending this message does not confirm the order. Thank you!",
  ].join("\n");
}

export function buildCustomEnquiryMessage(input: { name?: string; note: string }) {
  const who = input.name?.trim() ? ` My name is ${input.name.trim()}.` : "";
  return [
    `Hello AHS Imports.${who}`,
    "",
    input.note.trim(),
    "",
    "Please confirm availability, final pricing, and expected arrival details. Thank you.",
  ].join("\n");
}

export function whatsAppUrl(localPhone: string, message: string): string | null {
  const number = normalizeGhanaNumber(localPhone);
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
