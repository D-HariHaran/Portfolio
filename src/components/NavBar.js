import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'wouter';


const NavBar = () => {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={scrollToBottom}>
          AVINASH
      </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
          </Link>
          </li>

          <li className="nav-item">
            <Link to="/photography" className="nav-links" onClick={closeMobileMenu}>
              PHOTOGRAPHY
          </Link>
          </li>

          <li className="nav-item">
            <Link to="/cinematography" className="nav-links" onClick={closeMobileMenu}>
              CINEMATOGRAPHY
          </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-links" >
              CONTACT
          </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}


export default NavBar;