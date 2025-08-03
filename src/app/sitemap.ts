import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://joaoalberto.dev",
      lastModified: new Date(),
    },
    {
      url: "https://joaoalberto.dev/blog/tips-for-engineers",
      lastModified: new Date(2024, 6, 2),
    },
  ];
}
