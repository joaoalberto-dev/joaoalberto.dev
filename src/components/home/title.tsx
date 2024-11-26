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
  const scaleXPadding = useTransform(scrollY, [0, 200], [0, 16]);
  const xPadding = useMotionTemplate`${scaleXPadding}px`
  const scaleFontSize = useTransform(scrollY, [0, 200], [48, 24]);
  const titleFontSize = useMotionTemplate`${scaleFontSize}px`;

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ fontSize: titleFontSize, paddingInline: xPadding }}
      ref={container}
      className="t-0 mt-[35vh] p-4 rounded-full bg-brand/50 backdrop-blur align-baseline leading-none font-title text-blue-700 sticky top-[16px]"
    >
      João Alberto
    </motion.h1>
  );
}

export { HomeTitle };
