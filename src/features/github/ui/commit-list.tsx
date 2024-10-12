import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Commit } from "../types";

type CommitListProps = {
  commits: Commit[];
};

export default function CommitList({ commits }: CommitListProps) {
  const { commit } = commits[0];
  const lastActivity = formatDistanceToNow(new Date(commit.author.date));

  return (
    <div className="mt-16 space-y-4 col-start-2 row-start-1 lg:h-[100dvh] lg:pt-16 lg:m-0 lg:overflow-y-scroll row-span-2 hide-scrollbar lg:pb-16">
      <div className="flex items-end justify-between">
        <h3 className="text-blue-700">Latest Github activity</h3>
        <small className="text-xs text-muted-foreground">
          {lastActivity} ago
        </small>
      </div>
      {commits.map(({ html_url, sha, commit }) => (
        <Card key={sha} className="w-full shadow-none">
          <CardContent className="p-2 lg:p-4">
            <Link href={html_url}>
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
