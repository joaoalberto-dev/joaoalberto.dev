import { Project } from "../project/project";
import styles from "./project-list.module.css";

const projects = [
  {
    name: "joaoalberto.dev",
    href: "https://github.com/joaoalberto-dev/joaoalberto.dev"
  },
  {
    name: "endless-notes",
    href: "https://github.com/joaoalberto-dev/endless-notes"
  },
  {
    name: "mini-video-editor",
    href: "https://github.com/joaoalberto-dev/mini-video-editor",
  }
];

function ProjectList() {
  return (
    <div className={styles.project_list}>
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
