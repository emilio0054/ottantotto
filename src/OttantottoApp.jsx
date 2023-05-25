import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar/NavBar'
import { MainContainer } from './components/MainContainer/MainContainer';
import { Menu } from './components/Menu/Menu';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contact } from './components/Contact/Contact';

function OttantottoApp() {
  return (
    <BrowserRouter >   
    <NavBar />
    <Routes>
      <Route path="/" element={<MainContainer />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </ BrowserRouter>
  )
}

export default OttantottoApp
