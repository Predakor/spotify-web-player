/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
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
    },
  },
};
