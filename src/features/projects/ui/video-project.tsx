"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useRef, useState, type SyntheticEvent } from "react";
import type { Project } from "../types";

type VideoProjectProps = {
  project: Project;
};

export default function VideoProject({ project }: VideoProjectProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function play(event: SyntheticEvent<HTMLVideoElement | HTMLButtonElement>) {
    event.stopPropagation();
    event.preventDefault();

    videoRef.current?.play();
    setIsPlaying(true);
  }

  function pause(event: SyntheticEvent<HTMLVideoElement | HTMLButtonElement>) {
    event.stopPropagation();
    event.preventDefault();

    videoRef.current?.pause();
    setIsPlaying(false);
  }

  return (
    <>
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={project.preview.fields.file.url}
          className="w-full aspect-video rounded-md"
          controls={false}
          autoPlay={false}
          onPointerEnter={play}
          onPointerLeave={pause}
          loop
          muted
        />
        <button
          type="button"
          onClick={isPlaying ? pause : play}
          className="absolute lg:hidden right-2 bottom-2 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center"
        >
          {isPlaying ? (
            <PauseIcon className="w-4" />
          ) : (
            <PlayIcon className="w-4" />
          )}
        </button>
      </div>
      <h3 className="font-semibold">{project.title}</h3>
    </>
  );
}
