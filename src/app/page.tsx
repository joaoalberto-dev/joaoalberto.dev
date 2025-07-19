import { Header } from "@/core/components/header/header";
import { BlogList } from "@/features/blog-list/blog-list";
import { ExperiencesList } from "@/features/experiences-list/expetiences-list";
import { ProjectsList } from "@/features/projects-list/projects-list";
import { Social } from "@/features/social/social";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 max-w-[420px] mx-auto">
      <Header
        title="João Alberto"
        description={
          <>
            I'm a Brazilian software engineer interested in all aspects of
            computing and human–computer interaction.
            <br />
            <br />I have over 10 years of experience building software that
            lasts, scales, and delights users, from simple blogs to real-time
            applications.
          </>
        }
      />
      <Social />
      <ProjectsList />
      <BlogList />
      <ExperiencesList />
    </main>
  );
}
