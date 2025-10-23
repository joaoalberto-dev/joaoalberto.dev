export function Social() {
  return (
    <ul className="flex gap-8 text-xl tracking-wide text-blue-300">
      <li>
        <a href="https://github.com/joaoalberto-dev">Github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/joao-alberto-mo/">LinkedIn</a>
      </li>
      <li>
        <a href="https://x.com/joaoalbertodev">
          X <small className="text-xs line-through">(Twitter)</small>
        </a>
      </li>
    </ul>
  );
}
