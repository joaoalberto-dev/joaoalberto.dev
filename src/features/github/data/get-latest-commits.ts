import { Commit } from "../types";

async function getLatestCommits(): Promise<Commit[]> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/joaoalberto-dev/joaoalberto.dev/commits?per_page=10",
      {
        cache: "no-cache",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-Github-Api-Version": "2022-11-28",
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const commits = await response.json();

    return commits;
  } catch (error) {
    return [];
  }
}

export { getLatestCommits };
