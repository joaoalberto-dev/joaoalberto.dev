import type { Project } from "../types";
import VideoProject from "./video-project";
import { ProjectWrapper } from "./wrapper";

const projects: Project[] = [
  {
    title: "Robinhood animation built in canvas",
    description: "",
    kind: "video",
    url: "https://canvas.joaoalberto.dev/robinhood",
    videoUrl: "/videos/robinhood.webm",
  },
];

export default function ProjectsList() {
  return (
    <div className="mt-16 space-y-4 col-start-2 row-start-1 lg:pt-16 lg:m-0 lg:overflow-y-scroll lg:pb-16 hide-scrollbar">
      <div className="flex items-end justify-between">
        <h3 className="text-blue-700">Projects</h3>
      </div>
      <div className="flex flex-wrap text-neutral-800 gap-[4%]">
        {projects.map((project) => {
          let content = null;

          if (project.kind === "video")
            content = <VideoProject project={project} />;

          return (
            <ProjectWrapper url={project.url} key={project.url}>
              {content}
            </ProjectWrapper>
          );
        })}
      </div>
    </div>
  );
}
