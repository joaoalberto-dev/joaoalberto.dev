import { readFileSync } from "node:fs";
import { join } from "node:path";

export function getContent(slug: string) {
  const path = join(process.cwd(), "content", `${slug}.mdx`);
  const file = readFileSync(path, { encoding: "utf8" });

  return file;
}
