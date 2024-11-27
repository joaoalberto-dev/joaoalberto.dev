type ProjectKind = "video" | "repository";

type Project = {
	title: string;
	description: string;
	kind: ProjectKind;
	link: string;
	preview: {
		fields: {
			file: {
				url: string;
			};
		};
	};
}

export type { Project };
