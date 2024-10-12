import { HomeDescription } from "@/components/home/description";
import { HomeTitle } from "@/components/home/title";
import { getLatestCommits } from "@/features/github/data/get-latest-commits";
import CommitList from "@/features/github/ui/commit-list";

async function Home() {
  const commits = await getLatestCommits();

  return (
    <main className="min-w-dvw p-4 lg:px-16 lg:py-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:h-dvh">
      <HomeTitle />
      <HomeDescription />
      <CommitList commits={commits} />
    </main>
  );
}

export default Home;
