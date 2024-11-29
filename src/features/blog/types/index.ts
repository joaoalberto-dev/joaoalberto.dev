import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover: Asset;
  content: Document;
  createdAt: string;
}

export type { BlogPost };
