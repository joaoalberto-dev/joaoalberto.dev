"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname();

  return (
    <nav className="flex gap-2">
      <Link href="/">/Home</Link>
    </nav>
  );
}

export { Navbar };
