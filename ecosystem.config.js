module.exports = {
  apps: [
    {
      name: "streetfighter",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/home/runcloud/webapps/StreetFighter",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        MONGODB_URI: 'mongodb+srv://foxuae35:m7311655@cluster0.z3ssp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        NEXT_PUBLIC_APP_URL: 'https://fighter.foxuae35.com',
        NEXT_PUBLIC_ADMIN_PASSWORD: 'fox7711'
      }
    }
  ]
}
