import './pizzas.css'
import { Carousel } from "../Carousel/Carousel";
import { PhotoGrid } from '../PhotoGrid/PhotoGrid'

export const Pizzas = ({id}) => {
  return (
    <>
        <div className="pizzas-container mt-1" id={id}>
            <div className="container-p p-4">
                <h2 className="text-center">Nuestras pizzas</h2>
                {/* <PhotoGrid /> */}
                {/* <Carousel /> */}
            </div>
        </div>
    </>
  )
}
