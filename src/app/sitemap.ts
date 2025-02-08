import { getBlogSlugs } from "@/core/utils/get-blog-slugs";
import path from "path";

export default async function sitemap() {
  const blogDirectory = path.join(process.cwd(), "src", "app", "blog");
  const slugs = await getBlogSlugs(blogDirectory);

  const blogPosts = slugs.map((slug) => ({
    url: `https://joaoalberto.dev/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...blogPosts];
}
