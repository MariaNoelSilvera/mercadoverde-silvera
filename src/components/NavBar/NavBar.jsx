import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Mercado Verde</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#plants">Plantas</Nav.Link>
            <Nav.Link href="#pots">Macetas</Nav.Link>
            <Nav.Link href="#accesories">Accesorios</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
              <Nav.Link href="#misc">Varios</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
