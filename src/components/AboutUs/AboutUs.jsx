import "./aboutUs.css";
import { Testimonials } from "../Testimonials/Testimonials";
import { Carousel } from "../Carousel/Carousel";

export const AboutUs = ({ id }) => {
  return (
    <>
      <div className="us-container" id={id}>
        <h2 className="d-flex justify-content-center us-title">
          SOBRE NOSOTROS
        </h2>
        <p className="textAb">
          Nuestra pizzería nace de la pasión por la cocina italiana y el deseo
          para compartir su auténtico sabor con el público. Nos complace Te
          invitamos a nuestro restaurante, situado cerca de la Sagrada Familia.
          Nuestro El objetivo es brindarle una experiencia culinaria
          excepcional, garantizando un servicio impecable y atención
          especializada. Disfruta de un perfecto mezcla de la autenticidad de la
          cocina italiana y un ambiente familiar y ambiente acogedor.
        </p>
        <Carousel />
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};
