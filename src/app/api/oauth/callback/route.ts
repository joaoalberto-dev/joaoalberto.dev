import {
  GITHUB_ACCESS_TOKEN_PATH,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} from "@/features/auth/constants";
import { GithubUrlBuilder } from "@/features/auth/github-url";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET)
    return NextResponse.json(
      { message: "Missing client ID or secret" },
      { status: 500 },
    );

  const searchParams = request.url.split("?");
  if (searchParams.length <= 0)
    return NextResponse.json(
      { message: "Missing search params" },
      { status: 500 },
    );

  const code = new URLSearchParams(searchParams[1]).get("code");
  if (!code)
    return NextResponse.json({ message: "Missing code" }, { status: 500 });

  const accessTokenUrl = new GithubUrlBuilder();
  accessTokenUrl.addPath(GITHUB_ACCESS_TOKEN_PATH);
  accessTokenUrl.addQueryParam("code", code);
  accessTokenUrl.addQueryParam("client_id", GITHUB_CLIENT_ID);
  accessTokenUrl.addQueryParam("client_secret", GITHUB_CLIENT_SECRET);
  const tokenUrlUrl = accessTokenUrl.getUrl();
  if (!tokenUrlUrl)
    return NextResponse.json({ message: "Missing token URL" }, { status: 500 });

  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  const githubRequest = await fetch(tokenUrlUrl, {
    method: "POST",
    headers,
  });

  if (!githubRequest.ok)
    return NextResponse.json(
      { message: "Failed to fetch token" },
      { status: 500 },
    );

  const data = await githubRequest.json();
  const destinationUrl = new URL("/", new URL(request.url).origin);
  const response = NextResponse.redirect(destinationUrl, { status: 302 });

  response.cookies.set("github_access_token", data.access_token, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
  });

  return response;
}
