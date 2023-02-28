/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nekos.best",
        port: '',
        pathname: "/api/v2/neko/*",
      },
    ],
  },
}


module.exports = nextConfig
