import { HomeDescription } from "@/components/home/description";
import { HomeTitle } from "@/components/home/title";
import { getLatestCommits } from "@/features/github/data/get-latest-commits";
import CommitList from "@/features/github/ui/commit-list";
import ProjectsList from "@/features/projects/ui/projects-list";

async function Home() {
	const commits = await getLatestCommits();

	return (
		<main className="min-w-dvw p-4 lg:px-16 lg:py-0 lg:flex lg:justify-evenly lg:h-dvh lg:gap-8">
			<div className="lg:flex-none lg:max-w-[64ch] lg:flex lg:items-center lg:justify-center flex-col">
				<HomeTitle />
				<HomeDescription />
			</div>
			<div className="lg:flex-none lg:max-w-[64ch] lg:h-dvh overflow-auto hide-scrollbar">
				<ProjectsList />
				<CommitList commits={commits} />
			</div>
		</main>
	);
}

export const revalidate = 3600;

export default Home;
