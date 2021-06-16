import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Navibar = () => {
  return ( 
    <div className="navibar">
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Brand href="/">Game Reviews</Navbar.Brand>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
   );
}
 
export default Navibar;