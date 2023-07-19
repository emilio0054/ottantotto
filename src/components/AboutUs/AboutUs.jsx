import "./aboutUs.css";
import { PhotoGrid } from "../PhotoGrid/PhotoGrid";
import { Map } from "../Map/Map";
import { Testimonials } from "../Testimonials/Testimonials";

export const AboutUs = ({ id }) => {
  return (
    <>
      <div className="us-container" id={id}>
        <div className="container-p p-4">
          <h2 className="text-center us-text">SOBRE NOSOTROS</h2>
          <div className="row row-cols-md-2 justify-content-between mb-3">
            <div
              id="carouselExampleControls"
              className="carousel slide w-50"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/assets/aboutUs/Ottantotto_1-39.jpg"
                    className="d-block w-100"
                    alt="...   "
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/aboutUs/Ottantotto_salon(1).jpg"
                    className="d-block w-100"
                    alt="...   "
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/aboutUs/Ottantotto_salon(2).jpg"
                    className="d-block w-100"
                    alt="...   "
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/aboutUs/Ottantotto_salon(3).jpg"
                    className="d-block w-100"
                    alt="...   "
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/aboutUs/Ottantotto_salon(4).jpg"
                    className="d-block w-100"
                    alt="...   "
                  ></img>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="col">
              <p classNameName="mt-5 text">
                Nuestra pizzería nace de una pasión por la cocina italiana y el
                deseo de compartir su sabor auténtico con el público. Desde las
                clásicas Marinara y Margherita hasta creaciones inspiradas en
                las distintas regiones de Italia, cada pizza es una experiencia
                culinaria única. Nos complace invitarle a nuestro restaurante,
                ubicado cerca de la Sagrada Familia. Nuestro objetivo es
                brindarle una experiencia culinaria excepcional, garantizando un
                servicio impecable y una atención especializada. Disfrute de una
                combinación perfecta entre la autenticidad de la cocina italiana
                y un ambiente familiar y acogedor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Map />
    </>
  );
};
