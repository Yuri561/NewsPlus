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
      <div className="sidebar bg-warning">Sidebar</div>
      <div className="main-content bg-dark">Main Content</div>
      <div className="rightSide bg-secondary">Right Side</div>
      <div className="footer bg-danger">Footer</div>
    </div>
  );
}

export default App;
