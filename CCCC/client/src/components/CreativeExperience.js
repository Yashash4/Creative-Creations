import React from 'react';
import './CreativeExperience.css';

function CreativeExperience() {
  return (
    <section className="creative-experience">
      <h2 className="ce-title">Why Creative Creations Clothing Company</h2>
      <p className="ce-subtitle">
        At Creative Creations, we combine legacy and innovation to deliver exceptional apparel solutions.
      </p>
      <div className="ce-grid">
        <div className="ce-card green">
          <h3>Fabric Sourcing</h3>
          <p>
            High-quality materials from trusted suppliers to meet your exact design and comfort needs.
          </p>
        </div>
        <div className="ce-card purple">
          <h3>Smart Manufacturing</h3>
          <p>
            Our automated, streamlined processes ensure speed, precision, and consistency at scale.
          </p>
        </div>
        <div className="ce-card orange">
          <h3>Quality First</h3>
          <p>
            Each garment is rigorously inspected to match international standards and your expectations.
          </p>
        </div>
        <div className="ce-card blue">
          <p>
            We ship across the world — fast, reliable, and secure from our factory floor to your doorstep.
          </p>
        </div>
      </div>
      <div className="ce-btn-container">
        <button className="ce-button">Learn More</button>
      </div>
    </section>
  );
}

export default CreativeExperience;
