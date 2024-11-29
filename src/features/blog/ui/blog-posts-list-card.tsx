import { BlogPost } from "../types";
import Link from "next/link";
import Image from "next/image";
import { HomeCard } from "@/components/home/card";
import { PenIcon } from "lucide-react";
type BlogPostsListCardProps = {
  blogPost: BlogPost;
};

function BlogPostsListCard({ blogPost }: BlogPostsListCardProps) {
  const initialCover = (blogPost?.cover?.fields?.file?.url || "") as string;
  const cover = initialCover.includes("https")
    ? initialCover
    : `https:${initialCover}`;

  return (
    <HomeCard url={`/blog/${blogPost.slug}--${blogPost.id}`}>
      <div className="dark:bg-neutral-700/50 p-3 rounded-md space-y-2">
        {cover && (
          <Image
            className="w-full mb-4 max-h-[300px] mt-0 object-cover rounded-sm"
            src={cover}
            alt={blogPost.title}
            width={400}
            height={400}
          />
        )}
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">{blogPost.title}</h4>
          <p className="text-xs flex items-center gap-1 text-muted-foreground">
            {blogPost.createdAt}
          </p>
        </div>
      </div>
    </HomeCard>
  );
}

export default BlogPostsListCard;
