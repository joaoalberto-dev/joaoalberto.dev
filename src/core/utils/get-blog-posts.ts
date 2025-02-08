import { readFileSync, readdirSync } from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
};

function getBlogPosts(dir: string): BlogPost[] {
  const entries = readdirSync(dir, {
    recursive: true,
    withFileTypes: true,
  });

  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );

      return path.dirname(relativePath);
    })
    .map((slug) => {
      const content = readFileSync(path.join(dir, slug, "page.mdx"), "utf-8");
      const title = content.match(/title: ["'](.*)["'],/);
      const description = content.match(/description: ["'](.*)["'],/);

      return {
        slug,
        title: title ? title[1] : "",
        description: description ? description[1] : "",
      };
    });
}

export { getBlogPosts };
