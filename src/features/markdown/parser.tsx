import { compileMDX } from "next-mdx-remote/rsc";

async function parse(content: string) {
  return await compileMDX({
    source: content
  })
}

export { parse }
