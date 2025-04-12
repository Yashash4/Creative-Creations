import React from 'react';
import './OurValues.css';

const OurValues = () => {
  return (
    <section className="values-section">
      <div className="values-heading">
        <h2>Our Values</h2>
      </div>
      <div className="values-cards">
        <div className="value-card quality">
          <h3>QUALITY</h3>
          <p>
            We deliver the agreed quality every time. Our quality assurance processes ensure that every garment meets the highest standards of craftsmanship and durability.
          </p>
        </div>
        <div className="value-card relation">
          <h3>RELATION</h3>
          <p>
            Our success is based on solid relationships with our buyers. We believe that understanding each other is a prerequisite for mutual value creation and long-term growth.
          </p>
        </div>
        <div className="value-card focus">
          <h3>FOCUS</h3>
          <p>
            We focus on creating value for our customers and for our group as a whole. Our team continuously works on innovative solutions to elevate your brand's potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
