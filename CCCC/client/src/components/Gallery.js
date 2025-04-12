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
        <div key={`1-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`2-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`3-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`4-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`5-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`6-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`7-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`8-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`9-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
      {images.map((src, index) => (
        <div key={`10-${index}`} className="gallery-item">
          <img src={src} alt={`Gallery duplicate ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Gallery;
