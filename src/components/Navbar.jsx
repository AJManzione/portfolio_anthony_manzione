import React from 'react';
import '../stylesheets/navbar.css';

function Navbar() {
  return (
    <nav 
      className="sticky-navbar pt-3">
      <ul
        className="d-flex flex-row justify-content-around">
        <li>
          <a href="/#home">HOME</a>
        </li>
        <li>
          <a href="/#about">ABOUT</a>
        </li>
        <li>
          <a href="/#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="/#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}


export default Navbar;
