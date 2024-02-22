
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Logo } from '../Logo/Logo';
import i18n from '../../i18n'; 
import './navBar.css';
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { label: 'Español', code: 'es', flag: "/assets/languages/esp.png" },
  { label: 'Català', code: 'cat', flag: '/assets/languages/cat.png' },
  { label: 'English', code: 'en', flag: '/assets/languages/usa.png' },
  { label: 'Italiano', code: 'ita', flag: '/assets/languages/ita.png' },
  { label: 'Français', code: 'fr', flag: '/assets/languages/fr.png' },
];



export const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
 

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode, () => {
      setSelectedLanguage(languageCode);
      // const currentPath = window.location.pathname;
     
    });
  };


  const getFlagImage = (languageCode) => {
    const flag = LANGUAGES.find((language) => language.code === languageCode)?.flag;
    return flag || '';
  };

  const {t}=useTranslation()


  return (
    <nav className="navbar navbar-expand-lg sticky-top h-25" id="navbar">
      

         
      <Link
          to="/"
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
                {t("NavINICIO")}
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
               {t("NavRESERVAS")}
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
                {t("NavMENU")}
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
               {t("NavPIZZAS")}
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
               {t("NavSOBRENOSOTROS")}
               </Link>
             </li>
           </ul>


        </div>
        <a href="tel:tel:930381911" className="contact-button">
          <button className="btn btn-danger me-4 w-1">
            <i className="d-flex align-items-center bi bi-telephone-fill phone"></i>
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
            <img src={getFlagImage(selectedLanguage)} width="30px" alt={selectedLanguage} />
          </a>

          <ul className="dropdown-menu">
            {LANGUAGES.map((language, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link
                    className={`dropdown-item mb-1 ${selectedLanguage === language.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(language.code)}
                
                  >
                    <img src={language.flag} width="30px" alt={language.label} />
                  </Link>
                </li>
                {index < LANGUAGES.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </ul>
        </li>
      </div>
    </nav>
  );
};




