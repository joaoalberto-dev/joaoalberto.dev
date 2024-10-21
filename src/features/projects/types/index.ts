type ProjectKind = "video" | "repository";

type Project = {
	title: string;
	description: string;
	kind: ProjectKind;
	url: string;
} & (
	| {
			kind: "video";
			videoUrl: string;
	  }
	| {
			kind: "repository";
			repositoryUrl: string;
	  }
);

export type { Project };
