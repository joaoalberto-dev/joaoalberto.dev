export default function GithubCard() {
  return (
    <div className="w-[300px] border-none shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="p-4 pb-2">
        <div className="text-lg font-semibold">My Awesome Project</div>
      </div>
      <div className="p-4 pt-2">
        <p className="text-sm text-muted-foreground mb-4">
          This is a brief description of my awesome GitHub project. It does
          amazing things!
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <span>1.2k</span>
          </div>
          <div>Updated 3 days ago</div>
        </div>
      </div>
      <div className="p-4 pt-0">
        <button className="w-full">View on GitHub</button>
      </div>
    </div>
  );
}
