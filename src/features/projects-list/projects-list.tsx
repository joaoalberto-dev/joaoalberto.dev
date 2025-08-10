import Link from "next/link";
import { Section } from "@/core/components/section/section";
import { RightArrow } from "@/core/icons";

const projects = [
  {
    name: "My portfolio",
    link: "https://github.com/joaoalberto-dev/joaoalberto.dev",
  },
];

export function ProjectsList() {
  return (
    <Section title="Projects">
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <li key={project.link}>
            <Link
              className="-ml-4 outline-0 font-sans text-base leading-4 w-[calc(100%+32px)] flex justify-between group focus:bg-[var(--hover)] hover:bg-[var(--hover)] px-4 py-4 items-center rounded-lg border border-transparent focus:border-[var(--border)]/20 hover:border-[var(--border)]/20"
              href={project.link}
              target="_blank"
            >
              <span>{project.name}</span>
              <span className="hidden group-focus:inline group-hover:inline">
                <RightArrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
