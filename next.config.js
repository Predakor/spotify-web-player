/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.scdn.co',
      },
      {
        protocol: 'https',
        hostname: '**.spotifycdn.com',
      },
    ],
    minimumCacheTTL: 86400,
  },
};
