import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { NavBar } from './components/NavBar/NavBar'
import { HomeView } from './components/HomeView/HomeView';
import { Menu } from './components/Menu/Menu';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contact } from './components/Contact/Contact';
import { BottomNavBar } from './components/BottomNavBar/BottomNavBar';

function OttantottoApp() {
  return (
    <>
    <NavBar />
        <HomeView
        dark={false}
        id="home-view"
        />
        <Contact
        dark={false}
        id="contact"
        />
        <Menu 
        dark={false}
        id="menu"
        />
        <AboutUs  
        dark={false}
        id="about-us"
        />
        <hr className="divisor-line" />
    <BottomNavBar />
    </>
  )
}

export default OttantottoApp
