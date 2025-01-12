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
    href: "https://www.linkedin.com/in/joaoalberto-dev/",
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
