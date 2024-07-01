import Link from "next/link";
import { getFormattedBlogList } from "../data/get-formatted-blog-list";

function BlogList() {
  const posts = getFormattedBlogList();

  return (
    <section>
      <h3 className="font-text-title text-xl mb-4 opacity-40">Blog</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              className="flex items-baseline opacity-80"
              href={`/blog/${post.slug}`}
            >
              <p className="flex-1">{post.title}</p>
              <span className="text-xs">{post.publishedAt}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { BlogList };
