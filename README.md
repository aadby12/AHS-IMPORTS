# AHS Imports demo

Demonstration storefront for AHS Imports. It is not an officially approved website.

Product samples, illustrative prices, and ordering contacts live in:

- `src/lib/business.ts` — contacts, payment visibility, shipping copy
- `src/data/products.ts` — catalogue
- `src/data/categories.ts` — categories

```bash
npm run dev
npm run lint
npm run build
```

Payment details stay hidden until `payment.showPublicly` is set to `true` in `src/lib/business.ts`.
