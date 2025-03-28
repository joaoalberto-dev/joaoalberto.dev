import type { MDXComponents } from "mdx/types";
import text from "./core/styles/text.module.css";
import { H1, H2, H3, H4, H5, H6, P } from "./core/components/text/text";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
    h5: ({ children }) => <H5>{children}</H5>,
    h6: ({ children }) => <H6>{children}</H6>,
    p: ({ children }) => <P>{children}</P>,
    ul: ({ children }) => <ul className={text.paragraph}>{children}</ul>,
    ol: ({ children }) => <ol className={text.paragraph}>{children}</ol>,
    small: ({ children }) => <small className={text.small}>{children}</small>,
  };
}
