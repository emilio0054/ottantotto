import "./aboutUs.css";
import { Carousel } from "../Carousel/Carousel";
import { PhotoGrid } from "../PhotoGrid/PhotoGrid";

export const AboutUs = ({id}) => {
  return (
    <>
    <div className="container-fluid us-container mt-5" id={id}>
      <div className="container-fluid container-p">
        <p className="mb-0 text">Somos una encantadora pizzería ubicada en el corazón de Barcelona, muy cerca de la Sagrada Familia.</p>
        <p className="mt-0 mb-0 text">En esta casa atesoramos la artesanía italiana de la pizza y vertimos nuestra pasión con honestidad y cuidado.</p>
        <p className="mt-5 mb- text">Nuestra pizzería nace de una pasión por la cocina italiana y el deseo de compartir su sabor auténtico con el público. Cada una de nuestras pizzas es elaborada con ingredientes frescos y seleccionados cuidadosamente para garantizar su calidad y sabor excepcional. Valoramos la tradición y la innovación, por lo que ofrecemos opciones clásicas y creativas para satisfacer todos los gustos.</p>
      </div>
      <PhotoGrid />
      <Carousel />
    </div>
    </>
  );
};
