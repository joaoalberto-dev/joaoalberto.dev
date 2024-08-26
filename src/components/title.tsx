import { cn } from "@/utils/cn";
import type { ClassValue } from "clsx";
import type { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  className?: string | ClassValue[];
};

function Title({ children, className }: TitleProps) {
  return (
    <h1
      className={cn(
        "font-title text-2xl font-light bg-gradient-to-tr from-amber-600 to-amber-300 text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </h1>
  );
}

export { Title };
