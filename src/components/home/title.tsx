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
  const titleFontSize = useMotionTemplate`${scaleFontSize}px`;

  return (
    <motion.h1
      style={{ fontSize: titleFontSize }}
      ref={container}
      className="col-start-1 row-start-1 lg:m-0 bg-[rgba(255,255,255,.4)] mt-[35vh] w-full font-title backdrop-blur-sm py-4 text-blue-700 sticky top-0 lg:self-end"
    >
      João Alberto
    </motion.h1>
  );
}

export { HomeTitle };
