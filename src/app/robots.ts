import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/search", "/account", "/bag"],
    },
    sitemap: "https://zicassoart.com/sitemap.xml",
    host: "https://zicassoart.com",
  };
}
