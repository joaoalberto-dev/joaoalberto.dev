"use client";

import type { SyntheticEvent } from "react";
import type { Project } from "../types";

type VideoProjectProps = {
	project: Project & {
		kind: "video";
	};
};

export default function VideoProject({ project }: VideoProjectProps) {
	function play(event: SyntheticEvent<HTMLVideoElement, PointerEvent>) {
		event.currentTarget.play();
	}

	function pause(event: SyntheticEvent<HTMLVideoElement>) {
		event.currentTarget.pause();
	}

	return (
		<>
			<video
				src={project.videoUrl}
				className="w-full aspect-video rounded-md"
				controls={false}
				autoPlay={false}
				onPointerEnter={play}
				onPointerLeave={pause}
				loop
				muted
			/>
			<h3 className="font-semibold text-gray-400">{project.title}</h3>
		</>
	);
}
