import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [info, setInfo] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/info')
      .then(res => res.json())
      .then(data => setInfo(data.companyInfo))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>{info}</p>
    </section>
  );
}

export default About;



