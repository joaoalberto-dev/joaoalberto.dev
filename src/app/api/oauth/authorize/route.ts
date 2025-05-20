import { redirect } from "next/navigation";
import { UrlBuilder } from "@/core/url/url";
import { GithubUrlBuilder } from "@/features/auth/github-url";

const GITHUB_SCOPE = "read:user";
const GITHUB_BASE_URL = "https://github.com/";
const GITHUB_AUTHORIZE_PATH = "login/oauth/authorize";
const GITHUB_REDIRECT_URL = "http://localhost:3000/api/oauth/callback";
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

export async function GET() {
  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) return Response.error();

  const githubUrl = new GithubUrlBuilder();

  githubUrl.addPath(GITHUB_AUTHORIZE_PATH);
  githubUrl.addQueryParam("client_id", encodeURI(GITHUB_CLIENT_ID));
  githubUrl.addQueryParam("redirect_uri", encodeURI(GITHUB_REDIRECT_URL));
  githubUrl.addQueryParam("scope", encodeURI(GITHUB_SCOPE));

  const redirectUrl = githubUrl.getUrl();

  if (redirectUrl) {
    redirect(redirectUrl);
  }

  return Response.json(
    { message: "Redirect URL not available" },
    { status: 500 },
  );
}
