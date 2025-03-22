// optimize-images.js
// Run this script with: node optimize-images.js
// Make sure to install sharp: npm install sharp

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to scan for images
const directories = [
  path.join(__dirname, 'public', 'assets'),
  path.join(__dirname, 'assets'),
  path.join(__dirname, 'public'),
];

// File extensions to process
const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// Target size in KB (anything larger will be optimized)
const MAX_SIZE_KB = 200;

// Options for optimization
const options = {
  jpg: { quality: 70 },
  jpeg: { quality: 70 },
  png: { compressionLevel: 9 },
  webp: { quality: 70 },
  gif: { quality: 70 }
};

// Convert to WebP if original is larger than this
const CONVERT_TO_WEBP_THRESHOLD_KB = 500;

// Function to get file size in KB
function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size / 1024;
}

// Function to optimize images
async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const sizeKB = getFileSizeInKB(filePath);
  
  if (sizeKB < MAX_SIZE_KB) {
    return; // Skip small files
  }
  
  console.log(`Optimizing: ${filePath} (${sizeKB.toFixed(2)} KB)`);
  
  // Determine if we should convert to WebP
  const shouldConvertToWebP = sizeKB > CONVERT_TO_WEBP_THRESHOLD_KB && ext !== '.webp';
  
  try {
    // Start with the image
    let image = sharp(filePath);
    
    // Apply optimization based on file type
    if (ext === '.jpg' || ext === '.jpeg') {
      image = image.jpeg(options.jpg);
    } else if (ext === '.png') {
      image = image.png(options.png);
    } else if (ext === '.webp') {
      image = image.webp(options.webp);
    } else if (ext === '.gif') {
      image = image.gif(options.gif);
    }
    
    // Save the optimized image
    const data = await image.toBuffer();
    fs.writeFileSync(filePath, data);
    console.log(`  Optimized: ${filePath} → ${(data.length / 1024).toFixed(2)} KB`);
    
    // If the file is still large, convert to WebP as an additional file
    if (shouldConvertToWebP) {
      const webpPath = filePath.replace(ext, '.webp');
      await sharp(filePath)
        .webp(options.webp)
        .toFile(webpPath);
      console.log(`  Created WebP version: ${webpPath} (${(getFileSizeInKB(webpPath)).toFixed(2)} KB)`);
    }
  } catch (error) {
    console.error(`  Error optimizing ${filePath}:`, error.message);
  }
}

// Function to scan directory for images
async function scanDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory does not exist, skipping: ${dir}`);
    return;
  }
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await scanDirectory(filePath);
    } else if (extensions.includes(path.extname(file).toLowerCase())) {
      await optimizeImage(filePath);
    }
  }
}

// Main function
async function main() {
  console.log('Starting image optimization...');
  
  for (const dir of directories) {
    console.log(`Scanning directory: ${dir}`);
    await scanDirectory(dir);
  }
  
  console.log('Image optimization complete!');
}

main().catch(console.error); 