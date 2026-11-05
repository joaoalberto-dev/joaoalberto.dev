import { Title } from "@/ui/components/text/title";

export default function Home() {
  return (
    <main className="layout--vertical">
      <Title>João Alberto</Title>
      <p>
        I'm a Software Engineer with over 10 years of experience designing,
        building, and scaling software systems.
      </p>
      <p>
        I'm interested in all aspects of human-computer interaction, computer
        science, and software engineering, from low-level implementation details
        to high-level system architecture. I enjoy understanding how things work
        under the hood, solving complex problems, and building reliable,
        efficient, and thoughtfully designed software.
      </p>
      <div>
        <p>Find more about me:</p>
        <ul className="layout--horizontal">
          <li>
            <a
              target="_blank"
              href="https://github.com/joaoalberto-dev"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/joao-alberto-mo/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://x.com/joaoalbertodev"
            >
              X (Twitter)
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
