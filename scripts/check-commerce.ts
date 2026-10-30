import assert from "node:assert/strict";
import { categories } from "../src/data/categories";
import { products } from "../src/data/products";
import { queryProducts } from "../src/lib/catalog";
import { summarizeCart } from "../src/lib/cart-math";
import {
  buildEnquiryMessage,
  normalizeGhanaNumber,
  whatsAppUrl,
} from "../src/lib/whatsapp";

assert.equal(normalizeGhanaNumber("0543886636"), "233543886636");
assert.equal(normalizeGhanaNumber("0556315111"), "233556315111");
assert.equal(normalizeGhanaNumber("0558480938"), "233558480938");
assert.equal(normalizeGhanaNumber("0541111763"), "233541111763");
assert.equal(normalizeGhanaNumber("0240000000"), "233240000000");
assert.equal(normalizeGhanaNumber("12345"), null);
assert.equal(normalizeGhanaNumber("0800111222"), null);
assert.equal(normalizeGhanaNumber("0211111111"), null);

const message = buildEnquiryMessage(
  [{ name: "Desk fan", quantity: 2, slug: "desk-fan" }],
  "http://localhost:3000",
);
assert.match(message, /Product: Desk fan/);
assert.match(message, /Quantity: 2/);
assert.match(message, /http:\/\/localhost:3000\/product\/desk-fan/);
assert.match(message, /final pricing/i);
assert.doesNotMatch(message, /order has been (sent|confirmed|placed)/i);

const url = whatsAppUrl("0543886636", message);
assert.ok(url?.startsWith("https://wa.me/233543886636?text="));
const decoded = decodeURIComponent(url!.split("text=")[1] ?? "");
assert.match(decoded, /Desk fan/);
assert.match(decoded, /Quantity: 2/);

const cartMessage = buildEnquiryMessage(
  [
    { name: "Desk fan", quantity: 2, slug: "desk-fan" },
    { name: "Hair dryer", quantity: 1, slug: "hair-dryer", variantName: "Silver" },
  ],
  "http://localhost:3000",
);
assert.match(cartMessage, /1\. Desk fan/);
assert.match(cartMessage, /2\. Hair dryer/);
assert.match(cartMessage, /Variant: Silver/);
assert.match(cartMessage, /does not confirm the order/);
assert.doesNotMatch(cartMessage, /GH₵|GHS|confirmed total/i);

const empty = buildEnquiryMessage([], "http://localhost:3000");
assert.match(empty, /enquire about products/i);

assert.equal(
  summarizeCart([
    { quantity: 2, price: 100, priceStatus: "confirmed" },
    { quantity: 1, price: 50, priceStatus: "confirmed" },
  ]).subtotal,
  250,
);

const mixed = summarizeCart([
  { quantity: 2, price: 100, priceStatus: "illustrative" },
  { quantity: 1, price: null, priceStatus: "enquiry" },
]);
assert.equal(mixed.subtotal, null);
assert.equal(mixed.needsConfirmation, true);

const illustrativeOnly = summarizeCart([
  { quantity: 2, price: 100, priceStatus: "illustrative" },
]);
assert.equal(illustrativeOnly.subtotal, null);
assert.equal(illustrativeOnly.allConfirmed, false);

assert.equal(products.some((product) => product.priceStatus === "confirmed"), false);
assert.ok(products.every((product) => product.illustrative));
assert.ok(
  products.every((product) => categories.some((category) => category.slug === product.category)),
);

const fans = queryProducts({ q: "fan", sort: "name-asc" });
assert.ok(fans.some((product) => product.slug === "desk-fan"));
assert.ok(fans.every((product) => product.slug === "desk-fan"));

const appliances = queryProducts({ category: "home-appliances" });
assert.ok(appliances.length > 0);
assert.ok(appliances.every((product) => product.category === "home-appliances"));

const byName = queryProducts({ sort: "name-asc" });
const names = byName.map((product) => product.name);
assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b)));

const byPrice = queryProducts({ sort: "price-asc" });
const prices = byPrice.map((product) => product.price).filter((price): price is number => price != null);
assert.deepEqual(prices, [...prices].sort((a, b) => a - b));
assert.equal(byPrice.at(-1)?.priceStatus === "enquiry" || byPrice.at(-1)?.price == null, true);

console.log("commerce checks passed");
