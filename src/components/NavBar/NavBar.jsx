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
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link 
              className="nav-link" 
              id='nav-items' 
              to="home-view"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-90}
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
            <li className="nav-item dropdown" id='nav-items'>
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                <img src="/assets/languages/esp.png" width='30px' />
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item mb-1" href="home-view"><img src="/assets/languages/cat.png" width='30px' /></Link></li>
                <hr />
                <li><Link className="dropdown-item mb-1" href="home-view"><img src="/assets/languages/usa.png" width='30px' /></Link></li>
                <hr />
                <li><Link className="dropdown-item mb-1" href="home-view"><img src="/assets/languages/ita.png" width='30px' /></Link></li>
                <hr />
                <li><Link className="dropdown-item mb-1" href="home-view"><img src="/assets/languages/fr.png" width='30px' /></Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <a href='tel:tel:930381911' className='contact-button'>
          <button className="btn btn-danger me-5"><i className="bi bi-telephone-fill phone"></i>Haz tu reserva</button>
        </a>
      </nav>
    </>
  );
};