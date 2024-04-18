/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3f481j7u4x8pl.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
