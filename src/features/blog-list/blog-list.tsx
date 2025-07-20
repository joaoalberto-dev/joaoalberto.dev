import Link from "next/link";
import { Section } from "@/core/components/section/section";

const blogs = [
  {
    title: "Tips for engineers",
    link: "/blog/tips-for-engineers",
    description:
      "This is a list of some thoughts I collected over the years about how to be a good software engineer.",
  },
];

export function BlogList() {
  return (
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
  );
}
