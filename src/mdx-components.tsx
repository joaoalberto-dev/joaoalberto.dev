import type { MDXComponents } from "mdx/types";
import text from "./core/styles/text.module.css";
import { H1, H2, H3, H4, H5, H6, P } from "./core/components/text/text";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }) => <H1 {...props}>{children}</H1>,
    h2: ({ children, ...props }) => <H2 {...props}>{children}</H2>,
    h3: ({ children, ...props }) => <H3 {...props}>{children}</H3>,
    h4: ({ children, ...props }) => <H4 {...props}>{children}</H4>,
    h5: ({ children, ...props }) => <H5 {...props}>{children}</H5>,
    h6: ({ children, ...props }) => <H6 {...props}>{children}</H6>,
    p: ({ children, ...props }) => <P {...props}>{children}</P>,
    ul: ({ children, ...props }) => (
      <ul className={text.paragraph} {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className={text.paragraph} {...props}>
        {children}
      </ol>
    ),
    small: ({ children, ...props }) => (
      <small className={text.small} {...props}>
        {children}
      </small>
    ),
  };
}
