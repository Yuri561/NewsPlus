import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="app">
      <div className="Navbar-container">
        <Navbar />
      </div>
      <Hero />
      <div className="sidebar">Sidebar</div>
      <div className="main-content">Main Content</div>
      <div className="rightSide">Right Side</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
