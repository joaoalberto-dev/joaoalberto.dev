import text from "@/core/styles/text.module.css";

export function P({ children, ...props }: { children: React.ReactNode }) {
  return (
    <p className={text.paragraph} {...props}>
      {children}
    </p>
  );
}

export function H1({ children, ...props }: { children: React.ReactNode }) {
  return (
    <h1 className={text.title} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, ...props }: { children: React.ReactNode }) {
  return (
    <h2 className={text.subtitle} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, ...props }: { children: React.ReactNode }) {
  return (
    <h3 className={text.subtitle} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, ...props }: { children: React.ReactNode }) {
  return (
    <h4 className={text.subtitle} {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, ...props }: { children: React.ReactNode }) {
  return (
    <h5 className={text.subtitle} {...props}>
      {children}
    </h5>
  );
}

export function H6({ children, ...props }: { children: React.ReactNode }) {
  return (
    <h6 className={text.subtitle} {...props}>
      {children}
    </h6>
  );
}
