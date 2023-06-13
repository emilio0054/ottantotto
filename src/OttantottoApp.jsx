
import { NavBar } from './components/NavBar/NavBar'
import { HomeView } from './components/HomeView/HomeView';
import { Menu } from './components/Menu/Menu';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contact } from './components/Contact/Contact';
import { BottomNavBar } from './components/BottomNavBar/BottomNavBar';
import { Footer } from './components/Footer/Footer';
import { SideBar } from './components/SideBar/SideBar';


function OttantottoApp() {
  return (
    <>
      <NavBar />
      <HomeView 
      dark={false} 
      id="home-view" 
      />
      <Contact dark={false} id="contact" />
      <Menu dark={false} id="menu" />
      <hr className="divisor-line" />
      <AboutUs dark={false} id="about-us" />
      <Maps />
      <Footer />
      <BottomNavBar />
      <SideBar />
    </>
  );
}

export default OttantottoApp;
