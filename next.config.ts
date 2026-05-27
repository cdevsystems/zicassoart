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
      {
        protocol: "https",
        hostname: "assets.zicassoart.com",
        pathname: "/Top%20hero%20paintings%20new/**",
      },
    ],
  },
};

export default nextConfig;
