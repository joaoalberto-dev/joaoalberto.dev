import { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/utils/cn";

type LinkProps = NextLinkProps & {
  children: ReactNode;
  className?: string;
};

function Link({ children, href, ...props }: LinkProps) {
  return (
    <NextLink
      {...props}
      className={cn(
        "whitespace-nowrap opacity-70 decoration-2 underline-offset-[3px] hover:opacity-100 transition-opacity underline ",
        props.className
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
}

export { Link };
