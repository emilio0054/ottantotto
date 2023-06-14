import "./carousel.css";

export const Carousel = () => {
  return (
    <div id="carouselIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/assets/PIZZA BLANCA/pizzab2.jpg"
            className="h-50 w-50"
            alt="pizza2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/PIZZA ROJA/pizza2.jpg"
            className="h-50 w-50"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/PIZZA ROJA/pizza5.jpg"
            className="h-50 w-50"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="false"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="false"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
