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
        pathname: "/catalogues/**",
      },
    ],
  },
};

export default nextConfig;
