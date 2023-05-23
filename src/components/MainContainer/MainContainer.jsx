import { AboutUs } from "../AboutUs/AboutUs"
import { Contact } from "../Contact/Contact"
import { HomeView } from "../HomeView/HomeView"
import { Menu } from "../Menu/Menu"

export const MainContainer = () => {
  return (
    <>
        <HomeView />
        <Menu />
        <Contact />
        <AboutUs />
    </>
  )
}
