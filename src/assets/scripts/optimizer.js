const sharp = require('sharp');
const fs = require('fs');
const sizes = [480, 768, 1200, 1920, 2400];
const input = 'hero-mobile.jpg';

sizes.forEach(size => {
  const image = sharp(input).resize(size);

  // WebP
  image
    .clone()
    .webp({ quality: 70 })
    .toFile(`hero-mobile-${size}.webp`)
    .then(() => console.log(`✅ Generada: hero-mobile-${size}.webp`))
    .catch(err => console.error('❌ Error (webp):', err));

  // AVIF
  image
    .clone()
    .avif({ quality: 50 }) // puedes ajustar la calidad a tu gusto
    .toFile(`hero-mobile-${size}.avif`)
    .then(() => console.log(`✅ Generada: hero-mobile-${size}.avif`))
    .catch(err => console.error('❌ Error (avif):', err));

  // JPG
  image
    .clone()
    .jpeg({ quality: 80 })
    .toFile(`hero-mobile-${size}.jpg`)
    .then(() => console.log(`✅ Generada: hero-mobile-${size}.jpg`))
    .catch(err => console.error('❌ Error (jpg):', err));
});
