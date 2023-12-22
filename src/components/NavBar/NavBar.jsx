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
            <Nav.Link href="#sugarFree">Sin azúcar</Nav.Link>
            <Nav.Link href="#celiac">Celíaco</Nav.Link>
            <Nav.Link href="#vegan">Vegano</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
