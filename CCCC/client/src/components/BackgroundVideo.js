import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src='/1.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h1 className="video-heading">Welcome to Creative Creations Clothing Company</h1>
        <p className="video-subheading">Bringing Your Ideas to Life</p>
        <button className="video-button">Get Started</button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
