import { Header } from "@/core/components/header/header";
import { Section } from "@/core/components/section/section";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import { getContent } from "./_utils/get-content";
import { ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = await params;
  const content = getContent(slug);
  const data = await serialize(content, { parseFrontmatter: true });
  const parentMetadata = await parent;

  return {
    title: `${parentMetadata.title?.absolute} | ${data.frontmatter.title}`,
    description: data.frontmatter.description,
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const content = getContent(slug);

  return (
    <MDXRemote
      source={content}
      components={components}
      options={{ parseFrontmatter: true }}
    />
  );
}

const components = {
  Header,
  Section,
  p: (props: React.ComponentProps<typeof MDXProvider>["components"]) => (
    <p className="opacity-50 font-serif leading-5" {...props} />
  ),
};
