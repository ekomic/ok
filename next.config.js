/** @type {import('next').NextConfig} */

// DEPLOY_TARGET=ghpages is set only when running `npm run deploy` for GitHub Pages.
// Vercel and local dev leave this unset, so no basePath is applied.
const isGhPages = process.env.DEPLOY_TARGET === "ghpages";

const nextConfig = {
  ...(isGhPages && { output: "export" }),
  basePath: isGhPages ? "/ok" : "",
  assetPrefix: isGhPages ? "/ok/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;