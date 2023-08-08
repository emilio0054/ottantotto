import { NavBar } from "./components/NavBar/NavBar";
import { HomeView } from "./components/HomeView/HomeView";
import { Menu } from "./components/Menu/Menu";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contact } from "./components/Contact/Contact";
import { BottomNavBar } from "./components/BottomNavBar/BottomNavBar";
import { Footer } from "./components/Footer/Footer";
import { SideBar } from "./components/SideBar/SideBar";
import { Pizzas } from "./components/Pizzas/Pizzas";
import { Map } from "./components/Map/Map";

function OttantottoApp() {
  return (
    <>
      <NavBar />
      <HomeView dark={false} id="home-view" />
      <Contact dark={false} id="contact" />
      <Menu dark={false} id="menu" />
      <Pizzas id="pizzas" />
      <AboutUs dark={false} id="about-us" />
      <Map />
      <Footer />
      <BottomNavBar />
      <SideBar />
    </>
  );
}

export default OttantottoApp;
