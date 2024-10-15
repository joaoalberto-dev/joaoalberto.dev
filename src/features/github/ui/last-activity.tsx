import { formatDistanceToNow } from "date-fns";
import { getLatestCommits } from "../data/get-latest-commits";

async function LastActivity() {
  const commits = await getLatestCommits();
  const { commit } = commits[0];
  const lastActivity = formatDistanceToNow(new Date(commit.author.date));

  return (
    <small className="text-xs text-muted-foreground">{lastActivity} ago</small>
  );
}

export { LastActivity };
