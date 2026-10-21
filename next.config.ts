import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/heartcalm",
  assetPrefix: "/heartcalm/",
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: "/heartcalm" },
};

export default nextConfig;