import { Link, animateScroll as scroll } from "react-scroll";
import { Logo } from "../Logo/Logo"
import "./navBar.css"

export const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" id='navbar'>
        <Link 
        className="navbar-brand" 
        to='home-view' 
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        >
          <Logo />
        </Link>
        <button className="navbar-toggler me-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href='tel:930381911' className='contact-button-mobile' target="_blank">
          <button className="btn btn-danger mt-1 me-5"><i className="bi bi-telephone-fill phone"></i>Haz tu reserva</button>
        </a>
        <div className="collapse navbar-collapse justify-content-end me-lg-5" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link 
              className="nav-link" 
              id='nav-items' 
              to="home-view"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
              className="nav-link" 
              id='nav-items' 
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                Reservas</Link>
            </li>
            <li className="nav-item">
              <Link 
              className="nav-link" 
              id='nav-items' 
              to="menu"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                Pizzas</Link>
            </li>
            <li className="nav-item">
              <Link
              className="nav-link" 
              id='nav-items' 
              to="about-us"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                Nosotros</Link>
            </li>
          </ul>
        </div>
        <a href='tel:tel:930381911' className='contact-button'>
          <button className="btn btn-danger mt-1 me-5"><i className="bi bi-telephone-fill phone"></i>Haz tu reserva</button>
        </a>
      </nav>
    </>
  );
};