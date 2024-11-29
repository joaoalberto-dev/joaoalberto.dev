import { HomeDescription } from "@/components/home/description";
import { HomeTitle } from "@/components/home/title";
import { BasicPageLayout } from "@/components/layouts/basic-page-layout";
import BlogPostsList from "@/features/blog/ui/blog-posts-list";
import CommitList from "@/features/github/ui/commit-list";
import ProjectsList from "@/features/projects/ui/projects-list";

async function Home() {
  return (
    <BasicPageLayout
      mainContent={
        <>
          <HomeTitle />
          <HomeDescription />
        </>
      }
      sideContent={
        <>
          <BlogPostsList />
          <ProjectsList />
          <CommitList />
        </>
      }
    />
  );
}

export const revalidate = 86400;

export default Home;
