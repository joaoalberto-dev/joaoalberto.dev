import { Link } from "next-view-transitions";
import { BlogPost } from "@/core/utils/get-blog-posts";
import styles from "./blog-list.module.css";
import text from "@/core/styles/text.module.css";
import { cn } from "@/core/utils/cn";

function BlogList({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <div className={cn(styles.blog_list, "bleed")}>
      {blogPosts.map((blogPost) => {
        return (
          <Link
            className={cn(text.paragraph, styles.blog_item)}
            key={blogPost.slug}
            href={`/blog/${blogPost.slug}`}
          >
            {blogPost.title}
          </Link>
        );
      })}
    </div>
  );
}

export { BlogList };
