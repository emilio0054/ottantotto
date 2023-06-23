import "./aboutUs.css";
import { Carousel } from "../Carousel/Carousel";
import { PhotoGrid } from "../PhotoGrid/PhotoGrid";

export const AboutUs = ({ id }) => {
  return (
    <>
      <div className="us-container mt-1" id={id}>
        <div className="container-p p-4">
          <h2 className="text-center">Sobre Nosotros</h2>
          <p className="mt-5 text">
            Nuestra pizzería nace de una pasión por la cocina italiana y el
            deseo de compartir su sabor auténtico con el público. Desde las
            clásicas Marinara y Margherita hasta creaciones inspiradas en las
            distintas regiones de Italia, cada pizza es una experiencia
            culinaria única. Nos complace invitarle a nuestro restaurante,
            ubicado cerca de la Sagrada Familia. Nuestro objetivo es brindarle
            una experiencia culinaria excepcional, garantizando un servicio
            impecable y una atención especializada. Disfrute de una combinación
            perfecta entre la autenticidad de la cocina italiana y un ambiente
            familiar y acogedor.
          </p>
        </div>
        <PhotoGrid />
        <Carousel />
      </div>
    </>
  );
};
