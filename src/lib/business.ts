/**
 * Edit this file to update contacts, payment visibility, shipping copy,
 * and other business settings. Do not scatter these details through components.
 *
 * Sources are noted beside each value. Screenshot details were supplied for
 * this demo and have not been independently re-verified.
 */

export type OrderingContact = {
  id: string;
  name: string;
  phone: string;
  note: string;
};

export const business = {
  name: "AHS Imports",
  handle: "@ahs_imports1",
  instagramUrl: "https://www.instagram.com/ahs_imports1/",
  beaconsUrl: "https://beacons.ai/ahsimports2",
  locationLabel: "Adenta, Ghana",
  tagline: "China · Ghana · Import · Logistics · Global Trade",
  shortDescription:
    "We sell home appliances, fashion items, kitchen essentials, kids' finds, baby items and more. Everything is available on preorder.",
  demo: {
    isDemo: true,
    notice:
      "This is a demonstration website. It is not an officially approved AHS Imports storefront. Sample products are illustrative, and payment details are not shown as a live payment channel.",
  },
  shipping: {
    estimate: "approximately two months",
    summary:
      "Goods take approximately two months to arrive in Ghana. This is an estimate, not a guaranteed arrival date. The countdown starts when the goods are shipped, not when a customer places an enquiry or makes payment.",
  },
  contacts: [
    {
      id: "maame",
      name: "Maame",
      phone: "0543886636",
      note: "Shown on the supplied ordering screenshot. Not independently re-verified.",
    },
    {
      id: "vida",
      name: "Vida",
      phone: "0556315111",
      note: "Shown on the supplied ordering screenshot. Not independently re-verified.",
    },
    {
      id: "profile",
      name: "Public profile",
      phone: "0558480938",
      note: "Phone number listed on the public Beacons profile. The profile does not name the person who answers it.",
    },
  ] satisfies OrderingContact[],
  whatsappGroups: [
    {
      name: "AHS Imports Group 1",
      url: "https://chat.whatsapp.com/JQNHORLT9zc9IpseLphAwU?mode=gi_t",
    },
    {
      name: "AHS Imports Group 2",
      url: "https://chat.whatsapp.com/GAVBzegm5yILViU3MCwRy0?mode=gi_t",
    },
    {
      name: "AHS Imports Group 3",
      url: "https://chat.whatsapp.com/Lo3P9xUgTFG93fIb8Q3IXR?mode=gi_t",
    },
    {
      name: "WhatsApp channel",
      url: "https://whatsapp.com/channel/0029Vb8l9A9I7BeG1wYRnT0B",
    },
  ],
  payment: {
    /** Keep false until the business owner approves a public payment display. */
    showPublicly: false,
    number: "0541111763",
    accountName: "Angel Pokua Amoako",
    verified: false,
    source: "Supplied screenshot. Not independently verified.",
    publicNotice:
      "Payment details are confirmed directly with AHS Imports after your order enquiry.",
  },
  credit: {
    name: "Avenor Tech",
    url: null as string | null,
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export function absoluteUrl(path: string) {
  const base = business.siteUrl.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
