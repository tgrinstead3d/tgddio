#!/bin/bash

# Netlify build script

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install dependencies
npm ci

# Build Nuxt app using the local install
echo "Building with local nuxt install..."
./node_modules/.bin/nuxt build

# Verify output directory exists
if [ -d ".output/public" ]; then
  echo "Build successful! Output directory exists."
else
  echo "ERROR: Build failed - output directory not found"
  exit 1
fi 