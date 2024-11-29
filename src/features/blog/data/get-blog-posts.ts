import { contentfulClient } from "@/lib/contentful";
import { BlogPost } from "../types";

type ContentfulBlogPost = {
  fields: BlogPost;
  contentTypeId: string;
}

export async function getBlogPosts() {
  const blogPosts = await contentfulClient.getEntries<ContentfulBlogPost>({
    content_type: "blogPost"
  });

  const items = blogPosts.items
    .map(({ sys, fields }) => {
      return {
        ...fields,
      id: sys.id,
    } as BlogPost;
  });

  return items;
}
