import { Navbar, Container, Nav } from 'react-bootstrap';
import './header.css';

const Header = () => (
<header>
  <Navbar fixed="top" className="navBar" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      {/*  
      <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      */}
        Tu lugar en Salta
    </Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#home">Inicio</Nav.Link> 
      <Nav.Link href="#departamentos">Departamentos</Nav.Link>
      <Nav.Link href="#servicios">Servicios</Nav.Link>
      <Nav.Link href="#ubicacion">Ubicacion</Nav.Link>
      <Nav.Link href="#contactos">Contactos</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</header>
);

export default Header;
