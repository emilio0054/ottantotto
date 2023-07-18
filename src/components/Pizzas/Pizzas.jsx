import './pizzas.css'
import { PhotoGrid } from '../PhotoGrid/PhotoGrid'

export const Pizzas = ({id}) => {
  return (
    <>
        <div className="pizzas-container mt-1" id={id}>
            <div className="container-p p-4">
                <PhotoGrid />
            </div>
        </div>
    </>
  )
}
