import "./aboutUs.css";
import { Carousel } from "../Carousel/Carousel";
import { PhotoGrid } from "../PhotoGrid/PhotoGrid";

export const AboutUs = ({id}) => {
  return (
    <>
    <div className="us-container mt-1" id={id}>
      <div className="container-p p-4">
        <h2 className="text-center">Sobre Nosotros</h2>
        <p className="mt-5 text">Nuestra pizzería nace de una pasión por la cocina italiana y el deseo de compartir su sabor auténtico con el público. Cada una de nuestras pizzas es elaborada con ingredientes frescos y seleccionados cuidadosamente para garantizar su calidad y sabor excepcional. Valoramos la tradición y la innovación, por lo que ofrecemos opciones clásicas y creativas para satisfacer todos los gustos.</p>
      </div>
      <PhotoGrid />
      <Carousel />
    </div>
    </>
  );
};
