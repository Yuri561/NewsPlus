import React from 'react'
import './Navbar.css'
import Logo from '../../img/logo.png'
import Plus from '../../img/plus.png'

const Navbar = () => {
  return (
    <div className='nav-wrapper my-3 g-5'>
        <nav className="navbar navbar-expand-lg bg-body-dark"
        >
  <div className="container-fluid justify-content-center align-items-center">
    <a className="navbar-brand" href="#">
        <img src={Logo} alt="Bootstrap" width="30" height="24">
            </img> NewsPlus</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#GetNews">Get Latest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
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