import { HomeDescription } from "@/components/home/description";
import { HomeTitle } from "@/components/home/title";

export default function Home() {
  return (
    <main className="min-w-dvw max-h-dvh p-4 md:p-16">
      <div className="min-h-[calc(100dvh-32px)] md:min-h-[calc(100dvh-128px)] justify-end items-start flex flex-col">
        <HomeTitle />
        <HomeDescription />
      </div>
    </main>
  );
}
