/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ These options help skip build-time errors from ESLint or TypeScript
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Optional: ensure the app directory is enabled (if you're using `/app`)
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
