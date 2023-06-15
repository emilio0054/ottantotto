import "./carousel.css";

export const Carousel = () => {
  return (
    <div id="carousel" className="container-fluid carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/assets/pizza-blanca/pizzab1.jpg"
            className="h-100 w-100"
            alt="pizza blanca con papas"
          />
          <div class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded">
            <h5>Pizza Blanca</h5>
            <h5>Masa, mozzarella, ac. de oliva</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/pizza-roja/pizza1.jpg"
            className="h-100 w-100"
            alt="pizza margarita"
          />
          <div class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded">
            <h5>Pizza Margarita</h5>
            <h5>Tomate, Muzzarella albhaca fresca</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/pizza-blanca/pizzab2.jpg"
            className="h-100 w-100"
            alt="Piamonte"
          />
          <div class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded">
            <h5>Piamonte</h5>
            <h5>Muzzarella, queso teleggio, setas porcini, trufa deshidrata</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/pizza-roja/pizza3.jpg"
            className="h-100 w-100"
            alt="marche"
          />
          <div class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded">
            <h5>Marche</h5>
            <h5>Tomate, Muzzarella, queso teleggio, tomates confitados</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/pizza-roja/pizza5.jpg"
            className="h-100 w-100"
            alt="Puglia"
          />
          <div class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded">
            <h5>Puglia</h5>
            <h5>Tomate, burrata, pollo, albhaca fresca</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/pizza-blanca/pizzeria-bar-ottantotto-001.jpg"
            className="h-100 w-100"
            alt="Emilia"
          />
          <div class="carousel-caption d-none d-md-block bg-danger bg-opacity-25 text-white text-center rounded">
            <h5>Emilia</h5>
            <h5>Muzzarella, scarmoza, alcachofas, mortadella, parmesano</h5>
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
