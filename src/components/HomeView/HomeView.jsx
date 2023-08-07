import "./homeView.css";

export const HomeView = ({ id }) => {
  return (
    <>
      <div id={id} className="homeview-container">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src="/assets/homeview/homeview8.jpeg"
                className="d-block w-100 img-fluid"
                alt="pizza piemonte"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="/assets/homeview/homeview6.jpg"
                className="d-block w-100 img-fluid"
                alt="flores de calabaza"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="/assets/homeview/homeview9.jpeg"
                className="d-block w-100 img-fluid"
                alt="pizza liguria"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="/assets/homeview/homeview10.jpeg"
                className="d-block w-100 img-fluid"
                alt="pizza sardegna"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="/assets/homeview/homeview12.jpg"
                className="d-block w-100 img-fluid"
                alt="tomate con albahaca"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="/assets/homeview/homeview11.jpeg"
                className="d-block w-100 img-fluid"
                alt="pizza calabria"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="/assets/homeview/homeview3.jpg"
                className="d-block w-100 img-fluid"
                alt="postre tiramisu"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
