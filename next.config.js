/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Remove the experimental optimizeCss option that causes the critters error
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable webpack 5
  webpack: (config, { isServer }) => {
    // Handle Three.js properly
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

    // Handle GLSL shaders (optional - only if you use custom shaders)
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader'],
    })

    return config
  },
}

module.exports = nextConfig