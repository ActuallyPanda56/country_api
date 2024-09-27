/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "", // Optional, leave empty for default
        pathname: "/**", // Adjust this as necessary
      },
    ],
  },
};

export default nextConfig;
