import { Avatar } from "@/ui/avatar/avatar";
import { Social } from "@/ui/social/social";

export default function Home() {
  return (
    <main className="flex flex-col p-8 md:p-16 gap-8">
      <Avatar />
      <p className="font-text-title text-3xl font-light">
        Hey, I am João Alberto, a software developer based in Brazil.
      </p>
      <Social />
    </main>
  );
}
