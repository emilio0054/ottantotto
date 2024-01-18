import { Link, animateScroll as scroll } from "react-scroll";
import { Logo } from "../Logo/Logo";
import "./navBar.css";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
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
        {/* 
        <div className="d-flex align-items-center me-3">
          <a
            href="tel:930381911"
            className="contact-button-mobile"
            target="_blank"
          >
            <button className="btn btn-danger mt-1 me-3">
              <i className="bi bi-telephone-fill phone"></i>
            </button>
          </a>
          <li className="dropdown dropdown-mobile" id="nav-items">
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
                <Link
                  className="dropdown-item mb-1"
                  to="home-view"
                  offset={top}
                >
                  <img src="/assets/languages/cat.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="home-view">
                  <img src="/assets/languages/usa.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="home-view">
                  <img src="/assets/languages/ita.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="home-view">
                  <img src="/assets/languages/fr.png" width="30px" />
                </Link>
              </li>
            </ul>
          </li>
        </div> 
        */}
        {/* Nav bar Sections */}
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
                HOME
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
                BOOKINGS
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
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
        <a href="tel:tel:930381911" className="contact-button">
          <button className="btn btn-danger me-4 w-1">
            <i className="bi bi-telephone-fill phone"></i>
          </button>
        </a>
        <div className="d-flex align-items-center last-container">
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
                <Link className="dropdown-item mb-1" to="home-view">
                  <img src="/assets/languages/cat.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="home-view">
                  <a
                    href="Ottantotto/ottantottoEN/index.html"
                    class="language-link"
                  ></a>
                  <img src="/assets/languages/usa.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="home-view">
                  <img src="/assets/languages/ita.png" width="30px" />
                </Link>
              </li>
              <hr />
              <li>
                <Link className="dropdown-item mb-1" to="home-view">
                  <img src="/assets/languages/fr.png" width="30px" />
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </nav>
    </>
  );
};
