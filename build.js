// build.js - Fallback build script for Netlify
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

console.log('Starting build process...');

// Print environment info
console.log('Node version:', process.version);
console.log('Current directory:', process.cwd());

try {
  // Run npm ci
  console.log('Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });

  // Find nuxt executable
  const nuxtPath = join(process.cwd(), 'node_modules', '.bin', 'nuxt');
  const hasLocalNuxt = existsSync(nuxtPath);

  // Run build
  console.log('Running Nuxt build...');
  if (hasLocalNuxt) {
    console.log('Using local Nuxt installation');
    execSync(`"${nuxtPath}" build`, { stdio: 'inherit' });
  } else {
    console.log('Using npx to run Nuxt');
    execSync('npx nuxt build', { stdio: 'inherit' });
  }

  // Verify build
  const outputDir = join(process.cwd(), '.output', 'public');
  if (existsSync(outputDir)) {
    console.log('Build successful! Output directory exists at', outputDir);
  } else {
    throw new Error('Build failed: Output directory not found');
  }
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
} 