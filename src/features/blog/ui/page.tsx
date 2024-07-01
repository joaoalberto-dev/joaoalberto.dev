import { marked } from "marked";
import { getDocumentBySlug } from "outstatic/server";
import { dateFormatter } from "@/utils/date-formatter";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

function BlogPage({ params }: BlogPageProps) {
  const post = getDocumentBySlug("posts", params.slug, ['title', 'content', 'publishedAt']);

  if (!post) return null;

  const content = marked.parse(post.content);

  return (
    <article className="flex flex-col gap-16">
      <div>
        <h1 className="font-text-title text-3xl font-light">{post.title}</h1>
        <small className="text-xs opacity-80">{dateFormatter().format(new Date(post.publishedAt))}</small>
      </div>
      <div className="flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export { BlogPage };

