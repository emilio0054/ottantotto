import { Link, NavLink } from "react-router-dom";

export const HomeView = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center homeview-container">
          <h1 className="homeview-text">¡Bienvenidos a Ottantotto!</h1>
          <NavLink  to='https://goo.gl/maps/kEcNZSV8wWY8TKst6?coh=178571&entry=tt' classname="mt-2" target="_blank" id='homeview-adress'
          >Passatge d'Utset, 2, 08013, Barcelona
          </NavLink>
          <Link to='tel:930381911' id='homeview-phone' className="mt-2">930381911</Link>
      </div>
    </>
  );
};
