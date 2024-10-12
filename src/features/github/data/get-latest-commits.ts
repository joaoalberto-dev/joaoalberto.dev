import { Commit } from "../types";

async function getLatestCommits(): Promise<Commit[]> {
  const response = await fetch(
    "https://api.github.com/repos/joaoalberto-dev/joaoalberto.dev/commits?per_page=10",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    },
  );
  const commits = await response.json();

  return commits;
}

export { getLatestCommits };
