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
      <div className="whyus-container">
        <div className="whyus-track">
          {points.map((point, index) => (
            <div key={`1-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`2-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`3-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`4-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`5-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`6-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`7-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`8-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`9-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
          {points.map((point, index) => (
            <div key={`10-${index}`} className="whyus-card">
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
