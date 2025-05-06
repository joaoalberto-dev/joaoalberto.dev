import text from "@/core/styles/text.module.css";
import styles from "./experiences.module.css";
import { cn } from "@/core/utils/cn";

const experiences = [
  { name: "Fluency Academy", time: "Mar 2022 → now" },
  { name: "PixelWolf", time: "Mar 2020 → Mar 2022" },
  { name: "MadeiraMadeira", time: "Jul 2019 → Dec 2019" },
  { name: "Critical Mass", time: "Oct 2017 → Nov 2020" },
  { name: "Personaliza", time: "Jul 2015 → Dec 2017" },
  { name: "Volts Digital", time: "Feb 2014 → Jul 2014" },
];

function Experiences() {
  return (
    <ul className={styles.container}>
      {experiences.map(({ name, time }) => (
        <li className={styles.item} key={name}>
          <p className={text.paragraph}>{name}</p>
          <hr className={styles.line} />
          <p className={cn(text.small, styles.time)}>{time}</p>
        </li>
      ))}
    </ul>
  );
}

export { Experiences };
