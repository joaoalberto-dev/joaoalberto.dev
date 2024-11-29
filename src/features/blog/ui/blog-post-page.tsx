import Bleed from "@/components/bleed";
import { getBlogPost } from "@/features/blog/data/get-blog-post";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

async function BlogPostPage({ params }: BlogPostPageProps) {
  const id = params.slug.split("--")[1];
  const blogPost = await getBlogPost(id);
  const initialCover = (blogPost?.cover?.fields?.file?.url || "") as string;
  const cover = initialCover.includes("https") ? initialCover : `https:${initialCover}`;

  return (
    <div className="relative max-w-[64ch] mx-auto">
      <Bleed className="fixed top-0 z-10">
        <nav id="navbar" className="bg-background/80 backdrop-blur">
          <div className="flex items-center px-2 py-4 gap-2 max-w-[64ch] mx-auto">

          <Link href="/"><ArrowLeft /></Link>
          <h1 className="text-sm font-semibold font-title">{blogPost.title}</h1>
          </div>
        </nav>
      </Bleed>
      <article className="mt-[56px] prose prose-md prose-headings:text-foreground prose-headings:font-title prose-p:text-foreground prose-neutral dark:prose-invert">
        {cover && (
          <Bleed className="-mt-[56px]">
            <Image className="w-full max-h-[300px] mt-0 object-cover" src={cover} alt={blogPost.title} width={400} height={400} />
          </Bleed>
        )}
        <h1>{blogPost.title}</h1>
        <small>{blogPost.createdAt}</small>
        <p>{blogPost.description}</p>
        {documentToReactComponents(blogPost.content)}
      </article>
    </div>
  );
}

export default BlogPostPage;
