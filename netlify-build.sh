#!/bin/bash

# Netlify build script
set -e

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Directory contents:"
ls -la

# Clean installation
echo "Installing dependencies with clean install..."
npm ci

# Verify nuxt module is installed
echo "Checking for nuxt in node_modules..."
if [ ! -d "./node_modules/nuxt" ]; then
  echo "Nuxt not found in node_modules, installing explicitly..."
  npm install nuxt@3.12.3 --no-save
fi

# Also ensure @nuxt/image is installed
echo "Checking for @nuxt/image..."
if [ ! -d "./node_modules/@nuxt/image" ]; then
  echo "@nuxt/image not found, installing explicitly..."
  npm install @nuxt/image --no-save
fi

# List all installed packages for debugging
echo "Installed packages:"
npm list --depth=0

# Run build directly with npx to ensure path resolution
echo "Building with npx nuxt build..."
npx nuxt build

# Verify output directory exists
if [ -d ".output/public" ]; then
  echo "Build successful! Output directory exists."
  ls -la .output/public
else
  echo "ERROR: Build failed - output directory not found"
  exit 1
fi 