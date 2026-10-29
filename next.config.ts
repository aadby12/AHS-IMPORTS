import type { NextConfig } from "next";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionHost ? `https://${productionHost}` : "http://localhost:3000");

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
