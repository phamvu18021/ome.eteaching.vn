/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "omeeteaching.local",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "10.10.165.19",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
