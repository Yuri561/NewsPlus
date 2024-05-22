import React from 'react'
import './Navbar.css'
import Logo from '../../img/logo.png'
import Plus from '../../img/plus.png'

const Navbar = () => {
  return (
    <div className='nav-wrapper  mt-3 g-2'>
        <nav className="navbar navbar-expand-lg bg-body-dark"
        >
  <div className="container-fluid d-sm-flex flex-row justify-content-space-between align-items-center nav-content">
    <a className="navbar-brand text-light" href="#">
        <img src={Logo} alt="Bootstrap" width="30" height="24">
            </img> NewsPlus</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
        <li className="nav-item ">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#GetNews">Get Latest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Portfolio</a>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar