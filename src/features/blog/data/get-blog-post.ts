import { contentfulClient } from "@/lib/contentful";
import { BlogPost } from "../types";
import { EntrySkeletonType } from "contentful";

export async function getBlogPost(id: string) {
  const blogPost = await contentfulClient.getEntry<EntrySkeletonType<BlogPost>>(id);

  return blogPost.fields as BlogPost;
}
