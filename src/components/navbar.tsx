import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex gap-2">
      <Link href="/">/Home</Link>
    </nav>
  );
}

export { Navbar };
