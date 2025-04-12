import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const points = [
    "Strong on the costing & sourcing for all types of clothing",
    "In-depth knowledge of merchandising & raw materials sourcing",
    "Multi-category sourcing strategy & product development",
    "Proven analytical & creative problem solving skills",
    "Production process assessment, planning & execution",
    "Accepts challenges & flexible with all types of styles and quantities"
  ];

  return (
    <section className="whyus-section">
      <div className="whyus-heading">
        <h2>Why Us</h2>
      </div>
      <div className="whyus-track-container">
        <div className="whyus-track">
          {points.map((point, index) => (
            <div key={index} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {/* Duplicate for continuous scrolling */}
          {points.map((point, index) => (
            <div key={`dup-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
