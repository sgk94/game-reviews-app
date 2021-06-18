import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [sideNav, setSideNav] = useState("-100%");

  const handleHamburgerClick = () => {
    if (sideNav === "-100%") {
      setSideNav(0)
    } else {
      setSideNav("-100%")
    }
  }

  return ( 
    <div className="navbar">
      <h1 className="logo">Game Reviews</h1>
      <ul className="nav" style={{right: sideNav}}>
        <li className="navlink">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navlink">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="burger" onClick= {handleHamburgerClick}>
        <FontAwesomeIcon icon="bars" />
      </div>
    </div>
   );
}
 
export default Navbar;