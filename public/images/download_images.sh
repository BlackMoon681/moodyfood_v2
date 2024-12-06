#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download restaurant images
wget -O public/images/restaurant-hero.jpg "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
wget -O public/images/specialty-1.jpg "https://images.unsplash.com/photo-1546833998-877b37c2e5c6"
wget -O public/images/specialty-2.jpg "https://images.unsplash.com/photo-1559742811-822873691df8"
wget -O public/images/specialty-3.jpg "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"

# Download gallery images
wget -O public/images/gallery-1.jpg "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
wget -O public/images/gallery-2.jpg "https://images.unsplash.com/photo-1552566626-52f8b828add9"
wget -O public/images/gallery-3.jpg "https://images.unsplash.com/photo-1559339352-11d035aa65de"
wget -O public/images/gallery-4.jpg "https://images.unsplash.com/photo-1544148103-0773bf10d330"
wget -O public/images/gallery-5.jpg "https://images.unsplash.com/photo-1515669097368-22e68427d265"
wget -O public/images/gallery-6.jpg "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17"

chmod +x public/images/download_images.sh