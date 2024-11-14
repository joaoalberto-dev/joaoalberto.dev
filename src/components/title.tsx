import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import type { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  className?: string | ClassValue[];
};

function Title({ children, className }: TitleProps) {
  return <h1 className={cn("font-semibold", className)}>{children}</h1>;
}

export { Title };
