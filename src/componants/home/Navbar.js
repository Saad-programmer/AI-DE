import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/icon000.png'
import { Link } from 'react-router-dom';

function Links() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img alt='' src={logo}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/list">List</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Links;