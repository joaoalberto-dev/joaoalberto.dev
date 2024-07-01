import { getDocumentBySlug } from "outstatic/server";
import { BlogPageProps } from "../types/types";
import { Metadata } from "next";

function generateMetadata({ params }: BlogPageProps): Metadata {
  let metadata: Metadata = {
    title: 'Blog'
  }

  const post = getDocumentBySlug("posts", params.slug, ['title']);

  if (post?.title) metadata.title = post.title

  return metadata
}

export { generateMetadata }
