import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg='secondary' className='navbar' sticky-top>
      <Container className='navbar'>
        <NavLink to='/' className='text-decoration-none nav-links'>
            <Logo />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/menu' className='text-decoration-none nav-links'>Menú</NavLink>
            <NavLink to='/about-us' className='text-decoration-none nav-links'>Sobre Nosotros</NavLink>
            <NavLink to='/contact' className='text-decoration-none nav-links'>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


 