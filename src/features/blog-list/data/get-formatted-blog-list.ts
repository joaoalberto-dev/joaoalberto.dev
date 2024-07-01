import { dateFormatter } from "@/utils/date-formatter";
import { getDocuments } from "outstatic/server";

function getFormattedBlogList() {
  const documents = getDocuments("posts", [
    "title",
    "slug",
    "description",
    "publishedAt",
  ]);

  return documents.map((post) => ({
    ...post,
    publishedAt: dateFormatter().format(new Date(post.publishedAt)),
  }));
}

export { getFormattedBlogList };
