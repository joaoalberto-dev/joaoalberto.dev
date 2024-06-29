import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

const links = [
  {
    name: "Github",
    url: "https://github.com/joaoalberto-dev",
    icon: <IconBrandGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joaoalberto-dev",
    icon: <IconBrandLinkedin />,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/joaoalbertodev",
    icon: <IconBrandX />,
  },
];

function Social() {
  return (
    <div className="flex gap-2">
      {links.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export { Social };
