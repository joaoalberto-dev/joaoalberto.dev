"use client";

import esbuild, { BuildResult, PluginBuild } from "esbuild-wasm";

let initialized = false;
async function initialize(wasmURL: string = "/esbuild.wasm") {
  if (!initialized) {
    initialized = true;

    await esbuild.initialize({
      wasmURL,
    });
  }
}

const plugin = {
  name: "esm-sh-fetcher",
  setup(build: PluginBuild) {
    const CDN_BASE = "https://esm.sh";

    // Handle absolute esm.sh URL imports
    build.onResolve({ filter: /^https:\/\/esm\.sh\// }, (args) => ({
      path: args.path,
      namespace: "cdn",
    }));

    // Handle root-relative imports like `/x/y.js`
    build.onResolve({ filter: /^\//, namespace: "cdn" }, (args) => ({
      path: CDN_BASE + args.path,
      namespace: "cdn",
    }));

    // Handle relative imports like "./something.js"
    build.onResolve({ filter: /^\.\.?\//, namespace: "cdn" }, (args) => {
      const base = new URL(args.importer);
      const resolved = new URL(args.path, base).toString();
      return {
        path: resolved,
        namespace: "cdn",
      };
    });

    // Load any file in "cdn" namespace
    build.onLoad({ filter: /.*/, namespace: "cdn" }, async (args) => {
      const res = await fetch(args.path);
      if (!res.ok) throw new Error(`Failed to fetch ${args.path}`);
      let text = await res.text();

      // Rewrite /x/y → https://esm.sh/x/y (root-relative)
      text = text.replace(
        /from\s+["']\/([^"']+)["']/g,
        `from "${CDN_BASE}/$1"`,
      );

      return {
        contents: text,
        loader: "js",
        resolveDir: new URL("./", args.path).toString(), // <== this is the fix
      };
    });
  },
};

async function build(code: string): Promise<BuildResult> {
  return await esbuild.build({
    bundle: true,
    stdin: {
      contents: code,
      resolveDir: "./",
      loader: "jsx",
    },
    format: "iife",
    platform: "browser",
    target: ["es2022"],
    minifySyntax: true,
    minifyWhitespace: true,
    minifyIdentifiers: true,
    plugins: [plugin],
  });
}

export { initialize, build };
