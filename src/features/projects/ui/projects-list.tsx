import { HomeCard } from "@/components/home/card";
import { getProjects } from "../data/get-projects";
import VideoProject from "./video-project";

export default async function ProjectsList() {
  const projects = await getProjects();

  return (
    <div className="mt-16 space-y-4 col-start-2 row-start-1 lg:pt-16 lg:m-0 lg:pb-16">
      <div className="flex items-end justify-between">
        <h3>Projects</h3>
      </div>
      <div className="flex flex-wrap gap-[4%]">
        {projects.map((project) => {
          let content = null;

          if (project.kind === "video")
            content = <VideoProject project={project} />;

          return (
            <HomeCard url={project.link} key={project.link}>
              {content}
            </HomeCard>
          );
        })}
      </div>
    </div>
  );
}
