/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ok",
  assetPrefix: "/ok/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;