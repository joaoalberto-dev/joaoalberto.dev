import { formatDistanceToNow } from "date-fns";
import { Commit } from "../types";

type LastActivityProps = {
  commit: Commit;
};

async function LastActivity({ commit }: LastActivityProps) {
  const lastActivity = formatDistanceToNow(new Date(commit.commit.author.date));

  return (
    <small className="text-xs text-muted-foreground">{lastActivity} ago</small>
  );
}

export { LastActivity };
