import "./carousel.css";

export const Carousel = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10 col-sm-10">
          <div
            id="aboutUsCarousel"
            className="carousel slide carousel-fade mb-3"
            data-bs-ride="carousel"
          >
            <div className="carousel-innerAbout">
              {/* <div className="carousel-item active" data-bs-interval="4000">
                <div className="containerAbout">
                  <img
                    src="/assets/aboutUs/about-us2.jpg"
                    className="img-fluid d-block"
                    alt="frafo parado"
                  ></img>
                </div>
              </div> */}
              <div className="carousel-item active" data-bs-interval="2000">
                <div className="containerAbout">
                  <img
                    src="/assets/aboutUs/about-us8.jpg"
                    className="img-fluid d-block"
                    alt="pizzeria salon"
                  ></img>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="containerAbout">
                  <img
                    src="/assets/aboutUs/about-us9.jpg"
                    className="img-fluid d-block"
                    alt="pizzeria salon"
                  ></img>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="containerAbout">
                  <img
                    src="/assets/aboutUs/about-us10.jpg"
                    className="img-fluid d-block"
                    alt="pizzeria salon"
                  ></img>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="containerAbout">
                  <img
                    src="/assets/aboutUs/about-us11.jpg"
                    className="img-fluid d-block"
                    alt="pizzeria salon"
                  ></img>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <a
              className="carousel-control-prev"
              type="button"
              data-bs-target="#aboutUsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              type="button"
              data-bs-target="#aboutUsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
