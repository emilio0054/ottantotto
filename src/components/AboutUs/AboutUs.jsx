import "./aboutUs.css";
import { PhotoGrid } from "../PhotoGrid/PhotoGrid";
import { Map } from "../Map/Map";
import { Testimonials } from "../Testimonials/Testimonials";

export const AboutUs = ({ id }) => {
  return (
    <>
      <div className="us-container" id={id}>
        <h2 className="text-center us-text">SOBRE NOSOTROS</h2>

        <p className="textAb mb-5">
          Nuestra pizzería nace de una pasión por la cocina italiana y el deseo
          de compartir su sabor auténtico con el público. Desde las clásicas
          Marinara y Margherita hasta creaciones inspiradas en las distintas
          regiones de Italia, cada pizza es una experiencia culinaria única. Nos
          complace invitarle a nuestro restaurante, ubicado cerca de la Sagrada
          Familia. Nuestro objetivo es brindarle una experiencia culinaria
          excepcional, garantizando un servicio impecable y una atención
          especializada. Disfrute de una combinación perfecta entre la
          autenticidad de la cocina italiana y un ambiente familiar y acogedor.
        </p>

        {/* /* CAROUSEL */}
        <div
          id="aboutUsCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-innerAbout">
            <div className="carousel-item active" data-bs-interval="4000">
              <div className="containerAbout">
                <img
                  src="/assets/aboutUs/Frafo2.jpg"
                  className="img-fluid"
                  alt="frafo parado"
                ></img>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="containerAbout">
                <img
                  src="/assets/aboutUs/Ottantotto_salon(1).jpg"
                  className="img-fluid"
                  alt="pizzeria salon"
                ></img>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="containerAbout">
                <img
                  src="/assets/aboutUs/Ottantotto_salon(2).jpg"
                  className="img-fluid"
                  alt="pizzeria salon"
                ></img>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="containerAbout">
                <img
                  src="/assets/aboutUs/Ottantotto_salon(3).jpg"
                  className="img-fluid"
                  alt="pizzeria salon"
                ></img>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="containerAbout">
                <img
                  src="/assets/aboutUs/Ottantotto_salon(4).jpg"
                  className="img-fluid"
                  alt="pizzeria salon"
                ></img>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <a
            className="carousel-control-prev"
            type="button"
            data-bs-target="#aboutUsCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            type="button"
            data-bs-target="#aboutUsCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <Testimonials />
      <Map />
    </>
  );
};
