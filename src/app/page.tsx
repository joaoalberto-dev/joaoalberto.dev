import { BlogList } from "@/core/components/blog-list/blog-list";
import { Experiences } from "@/core/components/experiences/experiences";
import { Header } from "@/core/components/header/header";
import { ProjectList } from "@/core/components/project-list/project-list";
import { Section } from "@/core/components/section/section";
import { Social } from "@/core/components/social/social";
import { H2 } from "@/core/components/text/text";
import { appConfig } from "@/core/config/app";
import { metaConfig } from "@/core/config/meta";
import { getBlogPosts } from "@/core/utils/get-blog-posts";
import { Metadata } from "next";
import path from "path";

export const metadata: Metadata = {
  ...appConfig,
  ...metaConfig,
};

export default async function Home() {
  const blogPosts = getBlogPosts(
    path.join(process.cwd(), "src", "app", "blog"),
  );

  return (
    <main>
      <Header title={appConfig.title} />
      <Section>
        <H2>Blog</H2>
        <BlogList blogPosts={blogPosts} />
      </Section>
      <Section>
        <H2>Projects</H2>
        <ProjectList />
      </Section>
      <Section>
        <H2>Experience</H2>
        <Experiences />
      </Section>
      <Section>
        <Social />
      </Section>
    </main>
  );
}
