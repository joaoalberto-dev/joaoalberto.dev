import { HomeDescription } from "@/components/home/description";
import { HomeTitle } from "@/components/home/title";
import { getLatestCommits } from "@/features/github/data/get-latest-commits";
import CommitList from "@/features/github/ui/commit-list";
import ProjectsList from "@/features/projects/ui/projects-list";

async function Home() {
  const commits = await getLatestCommits();

  return (
    <main className="min-w-dvw p-4 lg:px-16 lg:py-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:h-dvh">
      <HomeTitle />
      <HomeDescription />
      <div className="row-span-2">
        <ProjectsList />
        <CommitList commits={commits} />
      </div>
    </main>
  );
}

export const revalidate = 3600;

export default Home;
