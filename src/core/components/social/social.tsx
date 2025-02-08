import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/core/components/icons";
import styles from "./social.module.css";

const items = [
  {
    name: "Github",
    href: "https://github.com/joaoalberto-dev",
    icon: <GithubIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joao-alberto-mo/",
    icon: <LinkedinIcon />,
  },
  {
    name: "Twitter",
    href: "https://x.com/joaoalbertodev",
    icon: <TwitterIcon />,
  },
];

function Social() {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <a
          aria-label={`Find more about me on ${item.name}`}
          className={styles.item}
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export { Social };
