import { Experiences } from "@/core/components/experiences/experiences";
import { Header } from "@/core/components/header/header";
import { ProjectList } from "@/core/components/project-list/project-list";
import { Section } from "@/core/components/section/section";
import { Social } from "@/core/components/social/social";
import text from "@/core/styles/text.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "João Alberto",
  description:
    "I am a Brazilian software engineer with 10 years of experience building systems that please and scale.",
  alternates: {
    canonical: "/",
  },
  keywords: ["Software engineering", "front-end", "react"],
  authors: [{ name: "João Alberto", url: "https://joaoalberto.dev" }],
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  viewport: { width: "device-width", initialScale: 1 },
  twitter: {
    card: "summary_large_image",
    site: "@joaoalberto",
    creator: "@joaoalberto",
    images: "https://joaoalberto.dev/og.png",
  },
  openGraph: {
    title: "João Alberto",
    description: "I am a Brazilian software engineer with 10 years of experience building systems that please and scale.",
    images: "https://joaoalberto.dev/og.png",
  },
};

export default function Home() {
  return (
    <main>
      <Header
        title="João Alberto"
        subtitle="I am a Brazilian software engineer with 10 years of experience building systems that please and scale."
      />
      <Section>
        <h3 className={text.subtitle}>Projects</h3>
        <ProjectList />
      </Section>
      <Section>
        <h3 className={text.subtitle}>Experience</h3>
        <Experiences />
      </Section>
      <Section>
        <Social />
      </Section>
    </main>
  );
}
