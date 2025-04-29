import text from "@/core/styles/text.module.css";

export function P({ children }: { children: React.ReactNode }) {
  return <p className={text.paragraph}>{children}</p>;
}

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className={text.title}>{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className={text.subtitle}>{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className={text.subtitle}>{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className={text.subtitle}>{children}</h4>;
}

export function H5({ children }: { children: React.ReactNode }) {
  return <h5 className={text.subtitle}>{children}</h5>;
}

export function H6({ children }: { children: React.ReactNode }) {
  return <h6 className={text.subtitle}>{children}</h6>;
}
