import { getBlogPosts } from "../data/get-blog-posts";
import BlogPostsListCard from "./blog-posts-list-card";

async function BlogPostsList() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="mt-16 space-y-4 col-start-2 row-start-1 lg:pt-16 lg:m-0 lg:pb-16">
      <div className="flex items-end justify-between">
        <h3>Blog</h3>
      </div>
      <div className="flex flex-wrap gap-[4%]">
        {blogPosts.map((blogPost) => {
          return <BlogPostsListCard blogPost={blogPost} key={blogPost.slug} />;
        })}
      </div>
    </div>
  );
}

export default BlogPostsList;
