import { contentfulClient } from "@/lib/contentful";
import { Project } from "../types";

type ContentfulProject = {
  fields: Project;
  contentTypeId: string;
}

export async function getProjects() {
  const projects = await contentfulClient.getEntries<ContentfulProject>({
    content_type: "project",
  });

  const items = projects.items.map(({ fields }) => {
    return {
      title: fields.title,
      description: fields.description,
      kind: fields.kind,
      link: fields.link,
      preview: fields.preview,
    } as Project;
  });


  return items;
}
