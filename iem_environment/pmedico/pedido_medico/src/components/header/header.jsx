import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { RiUserSearchLine } from 'react-icons/ri';
import '../header/header.css';

const Header = () => (
  <header>
    <Navbar className = "navBar">
    <Container fluid>
      <Navbar.Brand href="#">Pedidos Medicos</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Inicio</Nav.Link>
          <Nav.Link href="#action2">Nuevo Pedido</Nav.Link>
          <NavDropdown title="Reporte" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Semanal</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Mensual</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Anual</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown href="#" title="Docentes" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Alta</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Baja</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Buscar"
          />
          <Button variant="outline-dark"> <RiUserSearchLine /> </Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
);

export default Header;
