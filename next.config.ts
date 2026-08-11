import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isNetlify = process.env.NETLIFY === "true";
const isStaticHosting = isGitHubPages || isNetlify;
const repositoryName = "transfiguration-church-landing";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  ...(isStaticHosting
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
        // The repository also contains Cloudflare-only server helpers that are
        // not part of the static GitHub Pages build.
        typescript: {
          ignoreBuildErrors: true,
        },
      }
    : {}),
};

export default nextConfig;
