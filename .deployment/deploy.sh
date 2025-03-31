#!/bin/bash

# Navigate to the application directory
cd /home/stret/webapps/stret/current

# Install dependencies
npm install

# Build the application
npm run build

# Copy nginx configuration
cp nginx.conf /home/stret/webapps/stret/nginx/nginx.conf

# Restart nginx to apply new configuration
sudo service nginx reload

# Start/Restart the application using PM2
pm2 delete stret || true
pm2 start ecosystem.config.js
