#!/bin/bash

# Netlify build script
# Don't exit immediately on error to allow for fallbacks
set +e

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Directory contents:"
ls -la

# Try to clean install first
echo "Attempting to install dependencies with npm ci..."
npm ci

# If npm ci fails, fallback to regular npm install
if [ $? -ne 0 ]; then
  echo "npm ci failed, falling back to npm install..."
  # Clean node_modules if it exists
  if [ -d "./node_modules" ]; then
    echo "Cleaning node_modules directory..."
    rm -rf ./node_modules
  fi
  
  # Try normal npm install
  npm install --no-optional
  
  # If that also fails, try with the simplified package.json
  if [ $? -ne 0 ]; then
    echo "npm install also failed, trying with simplified package.json..."
    if [ -f "netlify-package.json" ]; then
      echo "Using netlify-package.json as fallback..."
      cp netlify-package.json package.json
      npm install --no-optional
    fi
  fi
fi

# Verify critical packages are installed
echo "Verifying critical dependencies..."

# Check for nuxt
if [ ! -d "./node_modules/nuxt" ]; then
  echo "Nuxt not found in node_modules, installing explicitly..."
  npm install nuxt@3.7.4 --no-save
fi

# Check for @nuxt/image
if [ ! -d "./node_modules/@nuxt/image" ]; then
  echo "@nuxt/image not found, installing explicitly..."
  npm install @nuxt/image@1.0.0 --no-save
fi

# Check for nodemailer (used in contact form)
if [ ! -d "./node_modules/nodemailer" ]; then
  echo "nodemailer not found, installing explicitly..."
  npm install nodemailer@6.9.5 --no-save
fi

# List installed packages for debugging
echo "Installed packages:"
npm list --depth=0

# Set strict error handling for the build step
set -e

# Run build with npx
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