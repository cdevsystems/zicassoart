import type { MetadataRoute } from "next";

const siteUrl = "https://zicassoart.com";

const routes = [
  { path: "", priority: 1 },
  { path: "/collection", priority: 0.9 },
  { path: "/about", priority: 0.75 },
  { path: "/custom-orders", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
