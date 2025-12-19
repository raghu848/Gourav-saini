const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeFavicon() {
  try {
    // Create optimized favicon in multiple sizes
    const sizes = [16, 32, 48, 192];
    
    for (const size of sizes) {
      await sharp(path.join(__dirname, 'public', 'favicon.png'))
        .resize(size, size)
        .png({ compressionLevel: 9, quality: 80 })
        .toFile(path.join(__dirname, 'public', 'icons', `favicon-${size}.png`));
      
      console.log(`Created favicon-${size}.png`);
    }
    
    // Also create a ico file
    await sharp(path.join(__dirname, 'public', 'favicon.png'))
      .resize(32, 32)
      .png({ compressionLevel: 9 })
      .toFile(path.join(__dirname, 'public', 'favicon.ico'));
      
    console.log('Created favicon.ico');
    
    console.log('Favicon optimization complete!');
  } catch (error) {
    console.error('Error optimizing favicon:', error);
  }
}

optimizeFavicon();