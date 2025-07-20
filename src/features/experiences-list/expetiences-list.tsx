import { Section } from "@/core/components/section/section";

const experiences = [
  { name: "Fluency Academy", time: "Mar 2022 → Now" },
  { name: "PixelWolf", time: "Mar 2020 → Mar 2022" },
  { name: "MadeiraMadeira", time: "Jul 2019 → Dec 2019" },
  { name: "Critical Mass", time: "Oct 2017 → Nov 2020" },
  { name: "Personaliza", time: "Jul 2015 → Dec 2017" },
  { name: "Volts Digital", time: "Feb 2014 → Jul 2014" },
];

export function ExperiencesList() {
  return (
    <Section title="Experience">
      <ul className="flex flex-col gap-2">
        {experiences.map((experience) => (
          <li
            className="flex justify-between items-center"
            key={experience.name}
          >
            <span>{experience.name}</span>
            <span className="font-serif opacity-50">{experience.time}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
