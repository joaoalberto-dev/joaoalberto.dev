function HomeDescription() {
  return (
    <ul className="col-start-1 row-start-2 list-disc list-inside space-y-1">
      <li>I am a software developer</li>
      <li>I have 9 years of experience</li>
      <li>
        I work at <a href="https://fluency.io/">Fluency Academy</a>
      </li>
      <li>
        I have experience building
        <ul className="pl-6 space-y-1 list-disc list-inside">
          <li>real-time applications</li>
          <li>e-commerces</li>
          <li>social networks</li>
        </ul>
      </li>
      <li>
        I like to write{" "}
        <a href="https://github.com/joaoalberto-dev">personal software</a>
      </li>
      <li className="line-through">I like lists</li>
    </ul>
  );
}

export { HomeDescription };
