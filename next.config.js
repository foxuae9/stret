/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  env: {
    MONGODB_URI: "mongodb+srv://foxuae35:m7311655@cluster0.z3ssp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    NEXT_PUBLIC_APP_URL: "https://fighter.foxuae35.com",
    NEXT_PUBLIC_ADMIN_PASSWORD: "fox7711"
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
