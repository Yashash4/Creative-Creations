import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Expertise</h2>
      <div className="services-grid">
        <div className="service-item">
          <h3>Vertically Integrated</h3>
          <p>80% of our mills are directed to our own factories.</p>
        </div>
        <div className="service-item">
          <h3>Investing in Employees</h3>
          <p>86,000+ female employees trained under P.A.C.E.</p>
        </div>
        <div className="service-item">
          <h3>Design-led Innovation</h3>
          <p>90+ designers across all business verticals.</p>
        </div>
        <div className="service-item">
          <h3>Driving Sustainability</h3>
          <p>100% renewable electrical energy by 2026.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
