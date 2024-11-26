"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const titleDefaultStyle = cn(
  "fixed p-4 left-0 right-0 bg-background/80 backdrop-blur font-title lg:bg-transparent lg:p-0 lg:left-auto lg:right-auto lg:relative lg:backdrop-blur-none lg:text-[48px]"
);

function HomeTitle() {
  const container = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll({ target: container });

  const scaleFontSize = useTransform(scrollY, [0, 200], [48, 24]);
  const fontSize = useMotionTemplate`${scaleFontSize}px`;

  const topPosition = useTransform(scrollY, [0, 200], [200, 0]);
  const top = useMotionTemplate`${topPosition}px`;

  const isLargeScreen = useMediaQuery("lg");

  if (isLargeScreen) {
    return <h1 className={titleDefaultStyle}>João Alberto</h1>;
  }

  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ fontSize, top, originX: 0, originY: 0.5 }}
      ref={container}
      className={titleDefaultStyle}
    >
      João Alberto
    </motion.h1>
  );
}

export { HomeTitle };
