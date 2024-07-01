import { getDocumentBySlug } from "outstatic/server";
import { BlogPageProps } from "../types/types";
import { Metadata } from "next";

function generateMetadata({ params }: BlogPageProps): Metadata {
  let metadata: Metadata = {
    title: 'Blog'
  }

  const post = getDocumentBySlug("posts", params.slug, ['title']);

  if (post?.title) {
    metadata.title = post.title
    metadata.openGraph = {
      title: post.title,
      description: post.description,
      url: `https://joaoalberto.dev/blog/${post.slug}`,
      siteName: 'João Alberto | Software developer',
      images: [],
      locale: 'en_US',
      type: 'website'
    }

    if (post.coverImage) {
      metadata.openGraph.images = {
        url: post.coverImage,
        width: 800,
        height: 600,
      }
    }
  }

  return metadata
}

export { generateMetadata }
