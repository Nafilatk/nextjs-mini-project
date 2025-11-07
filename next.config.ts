import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    domains: ["fakestoreapi.com","i.pinimg.com"], // ✅ Allow external product images
  },
};

export default nextConfig;
