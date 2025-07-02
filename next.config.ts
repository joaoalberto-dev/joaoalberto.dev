import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      // @ts-expect-error
      ["rehype-slug", { strict: true, throwOnError: true }],
      [
        // @ts-expect-error
        "rehype-autolink-headings",
        { strict: true, throwOnError: true, behavior: "wrap" },
      ],
    ],
    remarkPlugins: [
      // @ts-expect-error
      ["remark-gfm", { strict: true, throwOnError: true }],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
