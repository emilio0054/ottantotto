import { Link, animateScroll as scroll } from "react-scroll";
import { Logo } from "../Logo/Logo";
import "./navBar.css";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top h-25" id="navbar">
        <Link
          to="home-view"
          className="navbar-brand"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={top}
          duration={500}
        >
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                id="nav-items"
                to="home-view"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={top}
                duration={500}
              >
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="nav-items"
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                RESERVAS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="nav-items"
                to="menu"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="nav-items"
                to="pizzas"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PIZZAS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="nav-items"
                to="about-us"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONOCENOS
              </Link>
            </li>
          </ul>
        </div>
        <a href="tel:tel:930381911" className="contact-button">
          <button className="btn btn-danger me-4 w-1">
            <i className="d-flex align-items-center bi bi-telephone-fill phone"></i>
          </button>
        </a>
        {/* EMPIEZA EL DROPDOWN DE BANDERAS */}
        {/* <div className="d-flex align-items-center last-container">
          <li className="dropdown dropdown-desktop" id="nav-items">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/assets/languages/esp.png" width="30px" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item mb-1" to="">
                  <img src="/assets/languages/cat.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="">
                  <a
                    href="Ottantotto/ottantottoEN/index.html"
                    class="language-link"
                  ></a>
                  <img src="/assets/languages/usa.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="">
                  <img src="/assets/languages/ita.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="">
                  <img src="/assets/languages/fr.png" width="30px" />
                </Link>
              </li>
            </ul>
          </li>
        </div> */}
        <div className="dropdown flags" id="flags">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <a className="flags_item" data-language="es">
              <img src="/assets/languages/esp.png" width="30px" />
            </a>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item flags_item"
                data-language="cat"
                href="#"
              >
                <img src="/assets/languages/cat.png" width="30px" />
              </a>
            </li>
            <li>
              <a
                className="dropdown-item flags_item"
                data-language="en"
                href="#"
              >
                <img src="/assets/languages/usa.png" width="30px" />
              </a>
            </li>
            <li>
              <a
                className="dropdown-item flags_item"
                data-language="it"
                href="#"
              >
                <img src="/assets/languages/ita.png" width="30px" />
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <img src="/assets/languages/fr.png" width="30px" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
