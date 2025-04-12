// src/components/Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>The Creative Experience</h2>
      <p className="sub-text">
        At Creative Creations, we combine legacy and innovation to deliver exceptional apparel solutions.
      </p>
      <div className="experience-grid">
        <div className="experience-card" style={{ backgroundColor: '#0FFCBE' }}>
          <h3>Fabric Sourcing</h3>
          <p>High-quality materials from trusted suppliers to meet your exact design and comfort needs.</p>
        </div>
        <div className="experience-card" style={{ backgroundColor: '#D6C6F5' }}>
          <h3>Smart Manufacturing</h3>
          <p>Our automated, streamlined processes ensure speed, precision, and consistency at scale.</p>
        </div>
        <div className="experience-card" style={{ backgroundColor: '#FFA76D', color: '#fff' }}>
          <h3>Quality First</h3>
          <p>Each garment is rigorously inspected to match international standards and your expectations.</p>
        </div>
        <div className="experience-card" style={{ backgroundColor: '#106EBE', color: '#fff' }}>
          <h3>Global Reach</h3>
          <p>We ship across the world — fast, reliable, and secure from our factory floor to your doorstep.</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </section>
  );
}

export default Experience;
