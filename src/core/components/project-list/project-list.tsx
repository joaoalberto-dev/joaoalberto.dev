import { cn } from "@/core/utils/cn";
import { Project } from "../project/project";
import styles from "./project-list.module.css";

const projects = [
  {
    name: "joaoalberto.dev",
    href: "https://github.com/joaoalberto-dev/joaoalberto.dev",
  },
  {
    name: "endless-notes",
    href: "https://github.com/joaoalberto-dev/endless-notes",
  },
  {
    name: "mini-video-editor",
    href: "https://github.com/joaoalberto-dev/mini-video-editor",
  },
];

function ProjectList() {
  return (
    <div className={cn(styles.project_list, "bleed")}>
      {projects.map((project) => {
        return (
          <Project key={project.href} href={project.href}>
            {project.name}
          </Project>
        );
      })}
    </div>
  );
}

export { ProjectList };
