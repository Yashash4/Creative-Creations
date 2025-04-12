import React from 'react';
import './EsteemedClients.css';

const EsteemedClients = () => {
  // Replace these with your actual client logo paths
  const logos = [
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg',
    '/images/img1.jpg'
  ];

  return (
    <section className="clients-section">
      <div className="clients-text">
        <h2>Our Esteemed Clients</h2>
        <p>
          Creative Creations Clothing Company has had the privilege of working with some of the biggest names in the fashion industry. Our commitment to quality and innovation has made us a trusted partner for brands like Aditya Birla Fashion and Retail, Pantaloons, Arvind, Rowdy Wear and many more.
        </p>
        <p>
          These associations are a testament to our unwavering focus on delivering exceptional quality, meeting strict industry standards, and ensuring timely delivery. Our collaborations help us stay ahead of trends and continuously improve our processes.
        </p>
      </div>
      <div className="clients-logos">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EsteemedClients;
