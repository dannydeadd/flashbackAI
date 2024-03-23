/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  env: {
    themeColor: "#111827", // Replace with your desired gray-900 color value
  },
};

module.exports = nextConfig;
