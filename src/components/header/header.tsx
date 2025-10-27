type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="space-y-10">
      <h1 className="text-xl tracking-widest">{title}</h1>
    </header>
  );
}
