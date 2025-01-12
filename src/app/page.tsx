import { Header } from "@/core/components/header/header";
import { ProjectList } from "@/core/components/project-list/project-list";
import { Project } from "@/core/components/project/project";
import { Section } from "@/core/components/section/section";
import text from "@/core/styles/text.module.css";

export default function Home() {
  return (
    <div>
      <Header
        title="João Alberto"
        subtitle="I am a Brazilian software engineer with 10 years of experience building systems that please and scale."
      />
      <Section>
        <h3 className={text.subtitle}>Projects</h3>
        <ProjectList />
      </Section>
    </div>
  );
}
