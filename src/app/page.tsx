import Link from "next/link";
import { Github, Linkedin, X } from "@/core/icons";
import { Section } from "@/core/components/section/section";
import { ProjectsList } from "@/features/projects-list/projects-list";

const socials = [
  { Image: Github, name: "Github", link: "https://github.com/joaoalberto-dev" },
  {
    Image: Linkedin,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/joao-alberto-mo/",
  },
  { Image: X, name: "X", link: "https://x.com/joaoalbertodev" },
];

const blogs = [
  {
    title: "Tips for engineers",
    link: "/blog/tips-for-engineers",
    description:
      "This is a list of some thoughts I collected over the years about how to be a good software engineer.",
  },
];

const experiences = [
  { name: "Fluency Academy", time: "Mar 2022 → Now" },
  { name: "PixelWolf", time: "Mar 2020 → Mar 2022" },
  { name: "MadeiraMadeira", time: "Jul 2019 → Dec 2019" },
  { name: "Critical Mass", time: "Oct 2017 → Nov 2020" },
  { name: "Personaliza", time: "Jul 2015 → Dec 2017" },
  { name: "Volts Digital", time: "Feb 2014 → Jul 2014" },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 max-w-[420px] mx-auto">
      <header className="flex flex-col gap-4">
        <h1 className="font-sans leading-4 font-bold text-amber-950">
          João Alberto
        </h1>
        <p className="opacity-50 font-serif leading-5">
          I'm a Brazilian software engineer interested in all aspects of
          computing and human–computer interaction.
          <br />
          <br />I have over 10 years of experience building software that lasts,
          scales, and delights users, from simple blogs to real-time
          applications.
        </p>
      </header>
      <nav className="flex gap-8">
        {socials.map(({ link, Image, name }) => (
          <Link href={link} key={link} target="_blank" title={name}>
            <Image />
            <span className="sr-only">{name}</span>
          </Link>
        ))}
      </nav>
      <ProjectsList />
      <Section title="Blog">
        <ul className="flex flex-col gap-2">
          {blogs.map((blog) => (
            <li key={blog.link}>
              <Link className="flex flex-col gap-2" href={blog.link}>
                <span>{blog.title}</span>
                <span className="font-serif leading-5 opacity-50">
                  {blog.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
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
    </main>
  );
}
