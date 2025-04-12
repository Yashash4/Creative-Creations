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
          <h3>Vertically Integrated</h3>
          <p>
          80% of our mills are directed to our own factories.
          </p>
        </div>
        <div className="ce-card purple">
          <h3>Investing in Employees</h3>
          <p>
            86,000+ female employees trained under P.A.C.E.          
          </p>
        </div>
        <div className="ce-card orange">
          <h3>Design-led Innovation</h3>
          <p>
          90+ designers across all business verticals.
          </p>
        </div>
        <div className="ce-card blue">
        <h3>Driving Sustainability</h3>
          <p>
            100% renewable electrical energy by 2026.
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
