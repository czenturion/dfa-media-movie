/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_KEY: process.env.API_KEY,
    API_ACCESS_KEY: process.env.API_ACCESS_KEY,
    API_GET_MOVIES_URL: process.env.API_GET_MOVIES_URL,
    API_GET_IMAGE_URL: process.env.API_GET_IMAGE_URL,
  },
  images: {
    domains: ['image.tmdb.org', 'themoviedb.org'],
  },
};

export default nextConfig;
