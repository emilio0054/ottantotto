import "./photoGrid.css";

export const PhotoGrid = () => {
  return (
    <div className="container text-center mb-5" id="photo-grid">
      <div className="row row-cols-2 justify-content-between mb-5">
        <div className="">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/assets/z-pattern/masa1.png"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="/assets/z-pattern/masa3.jpg"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="/assets/z-pattern/masa2.png"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-4 align-self-center">
          <h2>La masa</h2>
          <p>
            Nuestra masa, de leudado lento, está hecha con harina de trigo Bio
            italiana. Una masa bien hecha es simplemente hermosa. El resultado
            es una pizza que es leve al cuerpo del comensal, pero profundamente
            gratificante.
          </p>
        </div>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
        <div className="col-4 align-self-center">
          <h2>El tomate</h2>
          <p>
            Hacemos la salsa con tomates italianos de primera calidad. Cocida al
            horno, su perfume es incunfundible.
          </p>
        </div>
        <div className="row row-cols-2 image-container rounded gx-2 gy-2">
          <img
            src="/assets/z-pattern/tomate1.jpg"
            className="col image rounded"
            alt="tomate1"
          />
          <img
            src="/assets/z-pattern/tomate2.jpg"
            className="col image rounded"
            alt="tomate2"
          />
          <img
            src="/assets/z-pattern/tomate3.jpg"
            className="col image rounded"
            alt="tomate3"
          />
          <img
            src="/assets/z-pattern/tomate4.jpg"
            className="col image rounded"
            alt="tomate4"
          />
        </div>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
        <div className="row row-cols-2 image-container rounded gx-2 gy-2">
          <img
            src="/assets/z-pattern/muzzarella1.jpg"
            className="col image rounded"
            alt="muzzarella1"
          />
          <img
            src="/assets/z-pattern/muzzarella2.jpg"
            className="col image rounded"
            alt="muzzarella2"
          />
          <img
            src="/assets/z-pattern/muzzarella3.jpg"
            className="col image rounded"
            alt="muzzarella3"
          />
          <img
            src="/assets/z-pattern/muzzarella4.jpg"
            className="col image rounded"
            alt="muzzarella4"
          />
        </div>
        <div className="col-4 align-self-center">
          <h2>La mozzarella</h2>
          <p>
            Hecha con leche fresca de búfala, tiene un sabor suave y cremoso. Su
            textura elástica y capacidad para fundirse la convierten en el
            complemento perfecto para nuestra pizza deliciosa. Utilizarla
            garantiza una experiencia culinaria auténtica y de alta calidad.
          </p>
        </div>
      </div>
      <div
        className="row row-cols-2 justify-content-between mb-5"
        id="grid-container"
      >
        <div className="col-4 align-self-center">
          <h2>Los ingredientes</h2>
          <p>
            Sólo utilizamos ingredientes de primera, importados de Italia o de
            producción local. Sin atajos.
          </p>
        </div>
        <div className="row row-cols-2 image-container rounded gx-2 gy-2">
          <img
            src="/assets/z-pattern/ingredientes1.jpg"
            className="col image rounded"
            alt="salon inf 7 mesas"
          />
          <img
            src="/assets/z-pattern/ingredientes2.jpg"
            className="col image rounded"
            alt="salon inf 6 mesas"
          />
          <img
            src="/assets/z-pattern/ingredientes3.jpg"
            className="col image rounded"
            alt="salon inf 4 mesas"
          />
          <img
            src="/assets/z-pattern/ingredientes4.jpg"
            className="col image rounded"
            alt="salon inf 6 mesas mas escalera"
          />
        </div>
      </div>
    </div>
  );
};
