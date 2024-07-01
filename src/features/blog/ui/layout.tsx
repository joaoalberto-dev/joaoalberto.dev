import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

type BlogLayoutProps = {
  children: ReactNode
}

function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <div className="flex mb-8">
        <Link href="/" className="opacity-40 hover:opacity-80">
          <IconHome />
        </Link>
      </div>

      {children}
    </>
  )
}

export { BlogLayout }
