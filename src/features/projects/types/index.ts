import { Asset } from "contentful";

type ProjectKind = "video" | "repository";

type Project = {
	title: string;
	description: string;
	kind: ProjectKind;
	link: string;
	preview: Asset;
}

export type { Project };
