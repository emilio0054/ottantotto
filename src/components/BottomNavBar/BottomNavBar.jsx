import { NavLink } from "react-router-dom"
import './BottomNavBar.css'

export const BottomNavBar = () => {
  return (
        <div className="d-flex bottom-container justify-content-around">
            <NavLink to="/" id='bottom-items'><i class="bi bi-house-door-fill"></i></NavLink>
            <NavLink to="/contact" id='bottom-items'><i class="bi bi-calendar-check-fill"></i></NavLink>
            <NavLink to="tel:930381911" id='bottom-items'><i class="bi bi-telephone-fill"></i></NavLink>
            <NavLink to="tel:930381911" id='bottom-items'><i class="bi bi-whatsapp"></i></NavLink>
        </div>
  )
}
