import { Metadata } from "next";

export type AppMetadata = Metadata & {
  title: string;
  url: string;
};
