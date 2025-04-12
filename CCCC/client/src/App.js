import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';
import Experience from './components/Experience';
import CreativeExperience from './components/CreativeExperience'


import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundVideo />
      <Experience />
      <CreativeExperience />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
