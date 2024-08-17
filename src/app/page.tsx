"use client";

import { Link } from "@/components/link";

export default function Home() {
  return (
    <main className="pt-8">
      <h1 className="mb-8">João Alberto</h1>
      <p className="md:text-balance mb-4">
        I am a software developer. Currenctly I work at{" "}
        <Link href="https://fluency.io/">Fluency Academy</Link> building new
        experiences for language learners.
      </p>
      <p className="md:text-balance mb-4">
        I have experience building for real-time applications, e-commerces,
        social networks and real estate companies. You can find more about my
        past on my{" "}
        <Link href="https://www.linkedin.com/in/joaoalberto-dev/">
          LinkedIn
        </Link>
      </p>
      <p className="md:text-balance mb-4">
        In my spare time, I like to write personal software. You can find more
        on my <Link href="https://github.com/joaoalberto-dev">Github</Link>.
      </p>
    </main>
  );
}
