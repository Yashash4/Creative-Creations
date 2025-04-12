import React from 'react';
import './TwoCards.css';

const TwoCards = () => {
  return (
    <section className="two-cards-section">
      <div className="cards-container">
        <div className="card card-one">
          <h3>Concept to Production</h3>
          <p>
            From conceptualization to production, our comprehensive services cover every aspect of your brand's journey. We understand the intricacies involved in maintaining inventory, managing warehouse charges, and ensuring timely dispatch.
          </p>
          <ul>
            <li>Inventory Management</li>
            <li>Warehouse Optimization</li>
            <li>Timely Dispatch & Logistics</li>
          </ul>
        </div>
        <div className="card card-two">
          <h3>Long-Term Partnership</h3>
          <p>
            Our commitment goes beyond manufacturing and warehousing. We believe in fostering long-term partnerships and offering world-class solutions that align with your brand’s goals.
          </p>
          <ul>
            <li>Dedicated Support Team</li>
            <li>Innovative Business Solutions</li>
            <li>Customized Strategies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TwoCards;
