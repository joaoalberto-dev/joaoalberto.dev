import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config options here */
  cacheComponents: false,
  partialPrefetching: false,
  reactCompiler: true,
};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
