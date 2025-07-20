import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 px-8 py-4 backdrop-blur-3xl flex z-10 items-center justify-center">
      <div className="w-full max-w-[420px]">
        <Link className="opacity-70 font-bold" href="/">
          João Alberto
        </Link>
      </div>
    </nav>
  );
}
