"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function HomeTitle() {
  const container = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll({ target: container });

  const scaleFontSize = useTransform(scrollY, [0, 200], [48, 24]);
  const fontSize = useMotionTemplate`${scaleFontSize}px`;

  const topPosition = useTransform(scrollY, [0, 200], [200, 0]);
  const top = useMotionTemplate`${topPosition}px`;

  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ fontSize, top, originX: 0, originY: 0.5 }}
      ref={container}
      className="fixed p-4 left-0 right-0 bg-brand/50 backdrop-blur font-title text-blue-700"
    >
      João Alberto
    </motion.h1>
  );
}

export { HomeTitle };
