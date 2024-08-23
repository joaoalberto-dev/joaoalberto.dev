import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex gap-2">
      <Link
        className="flex gap-2 text-sm p-2 items-center justify-center rounded-md bg-gradient-to-tr from-amber-800 to-amber-500 border border-amber-200 text-amber-50"
        href="/"
      >
        <IconHome className="w-5 h-5" />
        <span>Home</span>
      </Link>
    </nav>
  );
}

export { Navbar };
