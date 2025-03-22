#!/bin/bash

# Netlify build script

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install dependencies
echo "Installing dependencies..."
npm ci

# Try to find the nuxt executable
NUXT_BIN="./node_modules/.bin/nuxt"

if [ -f "$NUXT_BIN" ]; then
  echo "Found Nuxt at $NUXT_BIN"
  NUXT_CMD="$NUXT_BIN"
else
  echo "Nuxt not found at $NUXT_BIN, trying alternative installation..."
  
  # Install just nuxt from dedicated file
  echo "Installing Nuxt from dedicated dependencies file..."
  npm install --no-save --quiet --no-package-lock -g nuxt@3.12.3
  
  echo "Trying with npx..."
  NUXT_CMD="npx nuxt"
fi

# Build Nuxt app using the detected command
echo "Building with command: $NUXT_CMD build"
$NUXT_CMD build

# Check if build command succeeded
if [ $? -ne 0 ]; then
  echo "First build attempt failed, trying alternative method..."
  
  # Try global install as fallback
  echo "Installing Nuxt globally..."
  npm install -g nuxt@3.12.3
  
  echo "Using global Nuxt..."
  nuxt build
fi

# Verify output directory exists
if [ -d ".output/public" ]; then
  echo "Build successful! Output directory exists."
else
  echo "ERROR: Build failed - output directory not found"
  exit 1
fi 