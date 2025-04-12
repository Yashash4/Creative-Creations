import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';


import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundVideo />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
