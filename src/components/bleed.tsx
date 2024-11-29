import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BleedProps = HTMLAttributes<HTMLDivElement>;

function Bleed({ children, className }: BleedProps) {
  return <div className={cn("relative w-screen max-w-screen overflow-x-hidden -ml-[50dvw] -mr-[50dvw] left-1/2 right-1/2", className)}>{children}</div>;
}

export default Bleed;
