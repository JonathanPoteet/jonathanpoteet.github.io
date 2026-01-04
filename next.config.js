/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  images: { unoptimized: true },
  reactStrictMode: false,

  // === Add headers for CSP + Permissions-Policy ===
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          // === Content Security Policy ===
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' https://platform.twitter.com https://www.instagram.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' https: data:",
              "frame-src https://player.twitch.tv https://www.instagram.com https://platform.twitter.com",
              "child-src https://player.twitch.tv",
            ].join("; "),
          },
          // === Modern Permissions Policy ===
          {
            key: "Permissions-Policy",
            value:
              'autoplay=(self "https://player.twitch.tv"), ' +
              'picture-in-picture=(self "https://player.twitch.tv"), ' +
              'fullscreen=(self "https://player.twitch.tv")',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
