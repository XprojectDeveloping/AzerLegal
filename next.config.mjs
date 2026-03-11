/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.azerlegalgroup.com",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },

  reactStrictMode: false,
};

export default nextConfig;
