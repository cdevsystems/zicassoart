import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.zicassoart.com",
        pathname: "/paintings/**",
      },
    ],
  },
};

export default nextConfig;
