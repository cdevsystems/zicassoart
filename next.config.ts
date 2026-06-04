import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.zicassoart.com",
        pathname: "/paintings/**",
      },
      {
        protocol: "https",
        hostname: "assets.zicassoart.com",
        pathname: "/paintings%20without%20background/**",
      },
      {
        protocol: "https",
        hostname: "assets.zicassoart.com",
        pathname: "/catalogues/**",
      },
      {
        protocol: "https",
        hostname: "assets.zicassoart.com",
        pathname: "/top%20hero%20final%20webp/**",
      },
    ],
  },
};

export default nextConfig;
