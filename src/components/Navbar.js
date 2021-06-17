import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return ( 
    <div className="navbar">
      <h1 className="logo">Game Reviews</h1>
      <ul className="nav">
        <li className="navlink">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navlink">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="burger">
        <FontAwesomeIcon icon="bars" />
      </div>
    </div>
   );
}
 
export default Navbar;