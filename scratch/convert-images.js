const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targets = [
  {
    src: path.join(__dirname, '../public/images/dr images/TRAUMA.jpg'),
    dest: path.join(__dirname, '../public/images/dr images/TRAUMA.webp')
  },
  {
    src: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0010.jpg'),
    dest: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0010.webp')
  },
  {
    src: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0022.jpg'),
    dest: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0022.webp')
  },
  {
    src: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0025.jpg'),
    dest: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0025.webp')
  },
  {
    src: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0028.jpg'),
    dest: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0028.webp')
  },
  {
    src: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0029.jpg'),
    dest: path.join(__dirname, '../public/images/testimonials/IMG-20250908-WA0029.webp')
  }
];

async function convert() {
  for (const target of targets) {
    if (fs.existsSync(target.src)) {
      console.log(`Converting ${target.src}...`);
      try {
        await sharp(target.src)
          .webp({ quality: 80 })
          .toFile(target.dest);
        console.log(`Saved to ${target.dest}`);
      } catch (err) {
        console.error(`Error converting ${target.src}:`, err);
      }
    } else {
      console.warn(`File not found: ${target.src}`);
    }
  }
}

convert();
