import { UrlBuilder } from "@/core/url/url";
import { GITHUB_BASE_URL } from "./constants";

export class GithubUrlBuilder extends UrlBuilder {
  constructor() {
    super(GITHUB_BASE_URL);
  }
}
