/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    API_ACCESS_KEY: process.env.API_ACCESS_KEY,
    API_GET_MOVIES_URL: process.env.API_GET_MOVIES_URL,
  },
};

export default nextConfig;
