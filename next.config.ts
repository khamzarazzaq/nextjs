import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.BASE_PATH ?? "",
  trailingSlash: true,
};

export default nextConfig;
