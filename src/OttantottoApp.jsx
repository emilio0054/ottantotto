import { NavBar } from "./components/NavBar/NavBar";
import { HomeView } from "./components/HomeView/HomeView";
import { Menu } from "./components/Menu/Menu";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contact } from "./components/Contact/Contact";
import { BottomNavBar } from "./components/BottomNavBar/BottomNavBar";
import { Footer } from "./components/Footer/Footer";
import { SideBar } from "./components/SideBar/SideBar";
import { Maps } from "./components/Maps/Maps";
import { Testimonials } from "./components/Testimonials/Testimonials";

function OttantottoApp() {
  return (
    <>
      <NavBar />
      <HomeView dark={false} id="home-view" />
      <Contact dark={false} id="contact" />
      <Menu dark={false} id="menu" />
      <AboutUs dark={false} id="about-us" />
      <Testimonials dark={false} id="testimonials" />
      <Maps />
      <Footer />
      <BottomNavBar />
      <SideBar />
    </>
  );
}

export default OttantottoApp;
