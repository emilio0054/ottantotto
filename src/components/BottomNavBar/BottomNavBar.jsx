import './BottomNavBar.css'
import { Link } from "react-scroll";

export const BottomNavBar = () => {
  return (
        <div className="d-flex bottom-container justify-content-around">
            <Link 
              to="home-view" 
              id='bottom-items'
              className="navbar-brand" 
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                <i className="bi bi-house-door-fill"></i>
            </Link>
            <Link 
              to="contact" 
              id='bottom-items'
              className="navbar-brand"  
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                <i className="bi bi-calendar-check-fill"></i>
            </Link>
            <Link 
            to="menu" 
            id='bottom-items'
            className="navbar-brand" 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='pizza-icon'/>
            </Link>
            <a 
            href="tel:930381911" 
            id='bottom-items'
            target='_blank'
            >
              <i className="bi bi-telephone-fill"></i>
            </a>
        </div>
  )
};
