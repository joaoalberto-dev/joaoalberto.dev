import { BlogPost } from "@/core/utils/get-blog-posts";
import styles from "./blog-list.module.css";
import text from "@/core/styles/text.module.css";

function BlogList({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <div className={styles.blog_list}>
      {blogPosts.map((blogPost) => {
        return (
          <a
            className={text.paragraph}
            key={blogPost.slug}
            href={`/blog/${blogPost.slug}`}
          >
            {blogPost.title}
          </a>
        );
      })}
    </div>
  );
}

export { BlogList };
