import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { getLatestCommits } from "../data/get-latest-commits";
import { LastActivity } from "./last-activity";

export default async function CommitList() {
  const commits = await getLatestCommits();

  if (commits.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 space-y-4 col-start-2 row-start-1 lg:pt-16 lg:m-0 lg:pb-16">
      <div className="flex items-end justify-between">
        <h3 className="text-blue-700">Latest Github activity</h3>
        <LastActivity commit={commits[0]} />
      </div>
      {commits.map(({ html_url, sha, commit }) => (
        <Card key={sha} className="w-full shadow-none">
          <CardContent className="p-0 bg-brand/60">
            <Link className="block p-2 lg:p-4" href={html_url}>
              <div className="flex items-start">
                <div className="flex-grow space-y lg:space-y-2">
                  <p className="text-sm font-medium">{commit.message}</p>
                  <p className="text-xs text-muted-foreground">
                    Commit: {sha.substring(0, 7)}
                  </p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
