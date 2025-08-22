import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://s4.anilist.co/**'),
      new URL('https://image.tmdb.org/**'),
    ],
  },
};

export default nextConfig;
