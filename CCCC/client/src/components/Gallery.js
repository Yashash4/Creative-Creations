import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    '/images/img1.jpg'
  ];
  
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-track">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate the images for continuous scroll */}
          {images.map((src, index) => (
            <div key={`dup-${index}`} className="gallery-item">
              <img src={src} alt={`Gallery duplicate ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <p className="gallery-note">To add or update images, simply add the image files to your public/images folder and update the paths in the images array.</p>
    </section>
  );
};

export default Gallery;
