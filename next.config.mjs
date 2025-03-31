/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external domains here
    // Or use remotePatterns for more specific control
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   port: '',
      //   pathname: '/images/**',
      // },
    ],
  },
}

export default nextConfig
