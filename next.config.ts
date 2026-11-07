import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
