import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundVideo />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
