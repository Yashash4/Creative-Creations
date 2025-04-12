import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';
import Summary from './components/Summary';
import OurValues from './components/OurValues';
import Gallery from './components/Gallery';
import TwoCards from './components/TwoCards';
import WhyUs from './components/WhyUs';
import EsteemedClients from './components/EsteemedClients';
import ContactUs from './components/ContactUs';


import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundVideo />
      <Summary />
      <OurValues />
      <Gallery />
      <TwoCards />
      <WhyUs />
      <EsteemedClients />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
