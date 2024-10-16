import type { ReactNode } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/cn";

type LinkProps = NextLinkProps & {
  children: ReactNode;
  className?: string;
};

function Link({ children, href, ...props }: LinkProps) {
  return (
    <NextLink
      {...props}
      className={cn(
        "decoration-2 underline-offset-[3px] text-accent font-semibold bg-light dark:bg-dark",
        props.className
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
}

export { Link };
