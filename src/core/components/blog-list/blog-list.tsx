import { Link } from "next-view-transitions";
import { BlogPost } from "@/core/utils/get-blog-posts";
import styles from "./blog-list.module.css";
import text from "@/core/styles/text.module.css";

function BlogList({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <div className={styles.blog_list}>
      {blogPosts.map((blogPost) => {
        return (
          <Link
            className={text.paragraph}
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
