import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/e-descarte-tech",
  assetPrefix: "/e-descarte-tech/",
};

export default nextConfig;
