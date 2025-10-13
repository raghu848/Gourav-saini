const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public', 'images', 'dr-saini-logo.jpg');
    const outputPngPath = path.join(__dirname, 'public', 'favicon.png');
    const outputIcoPath = path.join(__dirname, 'public', 'favicon.ico');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('Input file not found:', inputPath);
      return;
    }
    
    // Generate favicon.png from the logo
    await sharp(inputPath)
      .resize(32, 32)
      .png()
      .toFile(outputPngPath);
      
    console.log('Favicon PNG generated successfully at:', outputPngPath);
    console.log('Please convert this PNG to ICO format using an online converter or tool.');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();