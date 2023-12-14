import React from 'react';
import logo from '../Images/logo.png';
import user from '../Images/profile.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="main-container">
        <a className="navbar-logo" href="abc.com">
          <img src={logo} alt="logo" className="logo-image" />
            <span className="travel-text">Travel</span>
            <span className="sage-text">Sage</span>
       </a>
        <div className="navbar-links-items" id="navbarText">
          <ul className="items">
            <li className="nav-item">
              <a className="nav-link home" aria-current="page" href="abc.com">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link about" href="abc.com">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link destinations" href="abc.com">Destinations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link packages" href="abc.com">Packages</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-success btn-transparent-border">Create Package</button>
            </li>
            <li className="nav-item">
              <div className="user-container">
                <a className="nav-link user" href="abc.com">Sarmad</a>
                <a className="user-icon" href="abc.com">
                <img src={user} alt="user" className="user-icon" />
                </a>
             </div>
           </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
