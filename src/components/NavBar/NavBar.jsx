import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { Logo } from "../Logo/Logo"
import "./navBar.css"

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
            <NavLink to="/" id='nav-items'>Inicio</NavLink>
            <NavLink to="/menu" id='nav-items'>Menú</NavLink>
            <NavLink to="/about-us" id='nav-items'>Nosotros</NavLink>
            <NavLink to="/contact" id='nav-items'>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};