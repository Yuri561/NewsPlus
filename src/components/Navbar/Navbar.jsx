import React from 'react';
import './Navbar.css';
import Logo from '../../img/logo.png';
import Plus from '../../img/plus.png';

const Navbar = () => {
  return (
    <div className='nav-wrapper my-2 g-2'>
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className="container-fluid nav-content">
          <a className="navbar-brand text-light" href="#">
            <img src={Logo} alt="Logo" width="30" height="24" /> NewsPlus
          </a>
          <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light"
            style={{color: 'white'}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#GetNews">Get Latest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Portfolio</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
