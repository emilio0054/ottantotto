import "./carousel.css";

export const Carousel = () => {
  return (
    <div id="carousel" className="container-fluid carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="image-container">
            <img
              src="/assets/carousel-fotos/Ottantotto_emilia.jpg"
              className="d-block w-100"
              alt="Pizza Emilia"
            />
            <div
              id="slide-description"
              class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center"
            >
              <h2 classname="text-description">Emilia</h2>
              <h5 classname="text-description">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </h5>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Marche.jpg"
            className="d-block w-100"
            alt="Pizza Marche"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Marche</h5>
            <h5>
              Tomate, muzzarella, champiñones, alcachofas, jamon cocido, olivas
              negras
            </h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Piemonte.jpg"
            className="d-block w-100"
            alt="Pizza Piemonte"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Piemonte</h5>
            <h5>Muzzarella, queso taleggio, setas porcini, trufa deshidrata</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Margharita.jpg"
            className="d-block w-100"
            alt="Pizza margharita"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Margharita</h5>
            <h5>Tomate, muzzarella, albhaca fresca</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Liguria.jpg"
            className="d-block w-100"
            alt="Pizza Liguria"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Liguria</h5>
            <h5>Muzzarella, patatas, pesto hecho en casa</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Puglia.jpg"
            className="d-block w-100"
            alt="Pizza Puglia"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Puglia</h5>
            <h5>Tomate, burrata, albhaca fresca</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Calabria.jpg"
            className="d-block w-100"
            alt="Pizza Calabria"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Calabria</h5>
            <h5>
              Tomate, muzzarella, salami picante de Calabria, olivas negras
            </h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Toscana.jpg"
            className="d-block w-100"
            alt="Pizza Toscana"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Toscana</h5>
            <h5>
              Tomate, muzzarella, finocchiona -fiambre toscano de cerdo con
              semillas de hinojo
            </h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Veneto.jpg"
            className="d-block w-100"
            alt="Pizza Veneto"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Veneto</h5>
            <h5>Muzzarella, bresaola -ternera curada-, rúcula, parmesano</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Marinara.jpg"
            className="d-block w-100"
            alt="Pizza Marinara"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Marinara</h5>
            <h5>Tomate, ajor, oregano</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Sardegna.jpg"
            className="d-block w-100"
            alt="Pizza Sardegna"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Sardegna</h5>
            <h5>Tomate, muzzarella, atún, cebolla, olivas negras, oregano</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Friuli.jpg"
            className="d-block w-100"
            alt="Pizza Friuli"
          />
          <div
            id="slide-description"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Friuli</h5>
            <h5>Tomate, muzzarella, jamon curado, albhaca fresca</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_florescalabazaentempura.jpg"
            className="d-block w-100"
            alt="Flores de calabaza"
          />
          <div
            id="slide-description1"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Flores de calabaza en tempura</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel-fotos/Ottantotto_Burrataconpesto.jpg"
            className="d-block w-100"
            alt="Burrata con pesto hecho en casa"
          />
          <div
            id="slide-description1"
            class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded"
          >
            <h5>Burrata con pesto hecho en casa</h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
