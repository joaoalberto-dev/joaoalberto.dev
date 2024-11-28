import { BlogPost } from "../types";
import Link from "next/link";

type BlogPostsListCardProps = {
  blogPost: BlogPost;
};

function BlogPostsListCard({ blogPost }: BlogPostsListCardProps) {
  return (
    <Link href={`/blog/${blogPost.slug}--${blogPost.id}`}>
      <h4>{blogPost.title}</h4>
      <p>{blogPost.description}</p>
    </Link>
  );
}

export default BlogPostsListCard;
