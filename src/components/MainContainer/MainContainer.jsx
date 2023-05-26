import { AboutUs } from "../AboutUs/AboutUs"
import { Contact } from "../Contact/Contact"
import { HomeView } from "../HomeView/HomeView"
import { Menu } from "../Menu/Menu"
import "./mainContainer.css"

export const MainContainer = () => {
  return (
    <>
        <HomeView />
        <hr className="divisor-line"/>
        <Menu />
        <hr className="divisor-line" />
        <Contact />
        <hr className="divisor-line" />
        <AboutUs />
    </>
  )
}
