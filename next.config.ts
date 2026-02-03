import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If your GitHub repository is NOT 'username.github.io', uncomment and update the line below:
  basePath: '/barber-shop',
};

export default nextConfig;
