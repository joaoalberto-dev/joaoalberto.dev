import { Zoom } from "@/ui/zoom/zoom";
import { compileMDX } from "next-mdx-remote/rsc";

async function parse(content: string) {
  return await compileMDX({
    source: content,
    components: {
      img(props) {
        return (
          <Zoom wrapElement="span">
            <img {...props} />
          </Zoom>
        )
      }
    }
  })
}

export { parse }
