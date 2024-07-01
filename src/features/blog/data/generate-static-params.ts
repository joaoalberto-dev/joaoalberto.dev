import { getDocumentSlugs } from "outstatic/server";

async function generateStaticParams() {
  const posts = getDocumentSlugs("posts");

  return posts.map((slug) => ({ slug }));
}

export { generateStaticParams }
