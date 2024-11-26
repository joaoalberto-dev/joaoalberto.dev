import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex gap-2">
      <Link
        className="flex gap-2 text-sm p-2 items-center justify-center rounded-md hover:bg-background hover:text-amber-800"
        href="/"
      >
        <IconHome className="w-5 h-5" />
        Home
      </Link>
    </nav>
  );
}

export { Navbar };
