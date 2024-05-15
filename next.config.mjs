/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    API_ACCESS_KEY: process.env.API_ACCESS_KEY,
    API_GET_MOVIES_URL: process.env.API_GET_MOVIES_URL,
    API_GET_IMAGE_URL: process.env.API_GET_IMAGE_URL,
    API_GET_MOVIE_BY_ID: process.env.API_GET_MOVIE_BY_ID,
  },
  reactStrictMode: false,
  images: {
    domains: ['image.tmdb.org', 'themoviedb.org'],
  },
};

export default nextConfig;
