import "./aboutUs.css";
import { Testimonials } from "../Testimonials/Testimonials";
import { Carousel } from "../Carousel/Carousel";

export const AboutUs = ({ id }) => {
  return (
    <>
      <div className="us-container" id={id}>
        <h2 className="d-flex justify-content-center us-title">SOBRE NOSOTROS</h2>
        <p className="textAb">
          Nuestra pizzería nace de una pasión por la cocina italiana y el deseo
          de compartir su sabor auténtico con el público. Nos complace invitarle
          a nuestro restaurante, ubicado cerca de la Sagrada Familia. Nuestro
          objetivo es brindarle una experiencia culinaria excepcional,
          garantizando un servicio impecable y una atención especializada.
          Disfrute de una combinación perfecta entre la autenticidad de la
          cocina italiana y un ambiente familiar y acogedor.
        </p>
        <Carousel />
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};
