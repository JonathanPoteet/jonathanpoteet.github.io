/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  images: { unoptimized: true },
  reactStrictMode: false,
};

module.exports = nextConfig;
