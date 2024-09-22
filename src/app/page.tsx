import { Link } from "@/components/link";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <main>
      <Title>João Alberto</Title>
      <div className="space-y-2 opacity-70 mt-8">
        <p className="leading-loose">I am a software developer.</p>
        <p className="leading-loose">
          Currently I work at&nbsp;
          <Link href="https://fluency.io/">Fluency Academy</Link> building new
          experiences for language learners.
        </p>
        <p className="leading-loose">
          I have experience building real-time applications, e-commerces, social
          networks and real estate companies. You can find more about my past on
          my&nbsp;
          <Link href="https://www.linkedin.com/in/joaoalberto-dev/">
            LinkedIn
          </Link>
        </p>
        <p className="leading-loose">
          In my spare time, I like to write personal software. You can find more
          on my <Link href="https://github.com/joaoalberto-dev">Github</Link>.
        </p>
      </div>
    </main>
  );
}
