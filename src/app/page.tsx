import { BlogList } from "@/features/blog-list/ui/blog-list";
import { Avatar } from "@/ui/avatar/avatar";
import { Social } from "@/ui/social/social";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Avatar />
      <p className="font-text-title text-3xl font-light">
        Hey, I am João Alberto, a software developer based in Brazil.
      </p >
      <Social />
      <BlogList />
    </main >
  );
}
