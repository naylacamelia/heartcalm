import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/heartcalm",
  assetPrefix: "/heartcalm/",
  images: { unoptimized: true },
};

export default nextConfig;