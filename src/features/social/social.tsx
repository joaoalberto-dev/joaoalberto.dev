import Link from "next/link";
import { Github, Linkedin, X } from "@/core/icons";

const socials = [
  { Image: Github, name: "Github", link: "https://github.com/joaoalberto-dev" },
  {
    Image: Linkedin,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/joao-alberto-mo/",
  },
  { Image: X, name: "X", link: "https://x.com/joaoalbertodev" },
];

export function Social() {
  return (
    <nav className="flex gap-8">
      {socials.map(({ link, Image, name }) => (
        <Link href={link} key={link} target="_blank" title={name}>
          <Image />
          <span className="sr-only">{name}</span>
        </Link>
      ))}
    </nav>
  );
}
