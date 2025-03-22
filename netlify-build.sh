#!/bin/bash

# Netlify build script
set -e # Exit on error

# Print environment info
echo "Build environment information:"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Current directory: $PWD"
echo "Shell: $SHELL"
echo "PATH: $PATH"

# Clean install dependencies
echo "Installing dependencies..."
npm ci

# Ensure node_modules/.bin is in PATH
export PATH="$PWD/node_modules/.bin:$PATH"

echo "Checking for nuxt in node_modules..."
if [ -f "node_modules/.bin/nuxt" ]; then
    echo "Found nuxt in node_modules/.bin"
    NUXT_CMD="$PWD/node_modules/.bin/nuxt"
elif command -v npx >/dev/null 2>&1; then
    echo "Using npx to run nuxt"
    NUXT_CMD="npx nuxt"
else
    echo "Installing nuxt globally as fallback..."
    npm install -g nuxt@3.12.3
    NUXT_CMD="nuxt"
fi

# Build Nuxt app
echo "Starting Nuxt build with command: $NUXT_CMD build"
$NUXT_CMD build

# Check build status
BUILD_STATUS=$?
if [ $BUILD_STATUS -ne 0 ]; then
    echo "Build failed with status $BUILD_STATUS"
    exit $BUILD_STATUS
fi

# Check for output directory
if [ -d ".output/public" ]; then
    echo "Build successful! Output directory exists at .output/public"
    ls -la .output/public
else
    echo "Build failed: Output directory .output/public not found"
    exit 1
fi 