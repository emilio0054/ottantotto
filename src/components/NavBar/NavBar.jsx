import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { Logo } from "../Logo/Logo"

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavLink to="/menu" id='nav-items'>Menú</NavLink>
            <NavLink to="/about-us" id='nav-items'>Sobre Nosotros</NavLink>
            <NavLink to="/contact" id='nav-items'>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};