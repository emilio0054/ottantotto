import "./photoGrid.css";

export const PhotoGrid = () => {
  return (
    <div class="container text-center mb-5">
        <div class='row row-cols-2 justify-content-between'>
            <div className='col-5 align-self-center'>
                <h2>La masa</h2>
                <p>Nuestra masa, de leudado lento, está hecha con harina de trigo Bio
                italiana. Una masa bien hecha es simplemente hermosa. El resultado
                es una pizza que es leve al cuerpo del comensal, pero
                profundamente gratificante.</p>
            </div>
            <div class="row row-cols-2 image-container rounded gx-2 gy-2">
                <img
                src="/assets/z-pattern/01 La masa/masa1.png"
                className="col image rounded"
                alt="masa1"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa2.png"
                className="col image rounded"
                alt="masa2"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa3.jpg"
                className="col image rounded"
                alt="masa3"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa4.jpg"
                className="col image rounded"
                alt="masa4"
                />
            </div>
        </div>
        <div class='row row-cols-2 justify-content-between'>
            <div class="row row-cols-2 image-container rounded gx-2 gy-2">
                <img
                src="/assets/z-pattern/01 La masa/masa1.png"
                className="col image rounded"
                alt="masa1"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa2.png"
                className="col image rounded"
                alt="masa2"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa3.jpg"
                className="col image rounded"
                alt="masa3"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa4.jpg"
                className="col image rounded"
                alt="masa4"
                />
            </div>
            <div className='col-5 align-self-center'>
                <h2>El tomate</h2>
                <p>Hacemos la salsa con tomates italianos de primera calidad. Cocida
                al horno, su perfume es incunfundible.</p>
            </div>
        </div>
        <div class='row row-cols-2 justify-content-between'>
            <div className='col-5 align-self-center'>
                <h2>La mozzarella</h2>
                <p>Hecha con leche fresca de búfala, tiene un sabor suave y cremoso.
                Su textura elástica y capacidad para fundirse la convierten en el
                complemento perfecto para nuestra pizza deliciosa. Utilizarla
                garantiza una experiencia culinaria auténtica y de alta calidad.
                </p>
            </div>
            <div class="row row-cols-2 image-container rounded gx-2 gy-2">
                <img
                src="/assets/z-pattern/01 La masa/masa1.png"
                className="col image rounded"
                alt="masa1"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa2.png"
                className="col image rounded"
                alt="masa2"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa3.jpg"
                className="col image rounded"
                alt="masa3"
                />
                <img
                src="/assets/z-pattern/01 La masa/masa4.jpg"
                className="col image rounded"
                alt="masa4"
                />
            </div>
        </div>
    </div>
  )
}
