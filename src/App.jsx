import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import GlobalNews from './components/GlobalNews/GlobalNews';
import CountryNewsSearch from './components/SearchNews/SearchNews';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="bar-container">
        <Navbar />

        </div>
    
<div className="hero-container">  
      <Hero />

</div>
      <div className="main-content">
      <GlobalNews/>
      </div>
      <div className="sidebar">
        <CountryNewsSearch/>
      </div>
      <div className="rightSide">
        <GetStarted/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
