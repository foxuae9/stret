#!/bin/bash

# Print current directory and list files
echo "Current directory:"
pwd
ls -la

# Remove large zip file if exists
echo "Removing large zip file..."
rm -f 3.zip

echo "Removing old environment files..."
rm -f .env .env.local .env.production

echo "Creating new .env.local file..."
cat > .env.local << EOL
MONGODB_URI=mongodb+srv://foxuae35:m7311655@cluster0.z3ssp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NEXT_PUBLIC_APP_URL=https://fighter.foxuae35.com
NEXT_PUBLIC_ADMIN_PASSWORD=fox7711
EOL

echo "Removing .next directory..."
rm -rf .next

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building the application with environment variables..."
npm run build

echo "Checking .next directory..."
ls -la .next

echo "Setting permissions..."
chmod -R 775 .next

echo "Restarting application with PM2..."
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js

echo "Fixing permissions..."
chown -R runcloud:runcloud .
