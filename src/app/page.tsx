import { Experiences } from "@/core/components/experiences/experiences";
import { Header } from "@/core/components/header/header";
import { BlogList } from "@/core/components/blog-list/blog-list";
import { ProjectList } from "@/core/components/project-list/project-list";
import { Section } from "@/core/components/section/section";
import { Social } from "@/core/components/social/social";
import text from "@/core/styles/text.module.css";
import { getBlogPosts } from "@/core/utils/get-blog-posts";
import { Metadata } from "next";
import path from "path";

export const metadata: Metadata = {
  title: "João Alberto",
  description:
    "I am a Brazilian software engineer with 10 years of experience building systems that please and scale.",
  alternates: {
    canonical: "/",
  },
  keywords: ["Software engineering", "front-end", "react"],
  authors: [{ name: "João Alberto", url: "https://joaoalberto.dev" }],
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  viewport: { width: "device-width", initialScale: 1 },
  twitter: {
    card: "summary_large_image",
    site: "@joaoalberto",
    creator: "@joaoalberto",
    images: "https://joaoalberto.dev/og.png",
  },
  openGraph: {
    title: "João Alberto",
    description:
      "I am a Brazilian software engineer with 10 years of experience building systems that please and scale.",
    images: "https://joaoalberto.dev/og.png",
  },
};

export default async function Home() {
  const blogPosts = getBlogPosts(
    path.join(process.cwd(), "src", "app", "blog")
  );

  return (
    <main>
      <Header
        title="João Alberto"
        subtitle="I am a Brazilian software engineer with 10 years of experience building systems that please and scale."
      />
      <Section>
        <h2 className={text.subtitle}>Blog</h2>
        <BlogList blogPosts={blogPosts} />
      </Section>
      <Section>
        <h2 className={text.subtitle}>Projects</h2>
        <ProjectList />
      </Section>
      <Section>
        <h2 className={text.subtitle}>Experience</h2>
        <Experiences />
      </Section>
      <Section>
        <Social />
      </Section>
    </main>
  );
}
