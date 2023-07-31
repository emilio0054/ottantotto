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
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src="/assets/homeview/homeview8.jpeg"
                className="d-block w-100"
                alt="pizza piemonte"
              />
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="/assets/homeview/homeview9.jpeg"
                className="d-block w-100"
                alt="pizza liguria"
              />
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="/assets/homeview/homeview10.jpeg"
                className="d-block w-100"
                alt="pizza sardegna"
              />
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="/assets/homeview/homeview11.jpeg"
                className="d-block w-100"
                alt="pizza calabria"
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
        {/* <div classNameName="homeview-text">¡Bienvenidos a Ottantotto!</div>
        <a
          href="https://goo.gl/maps/kEcNZSV8wWY8TKst6?coh=178571&entry=tt"
          classNameName="mt-2"
          target="_blank"
          id="homeview-adress"
        >
          <i classNameName="bi bi-geo-alt-fill"></i>Passatge d'Utset, 2, 08013,
          Barcelona
        </a>
        <a
          href="tel:930381911"
          id="homeview-phone"
          classNameName="mt-2"
          target="_blank"
        >
          <i classNameName="bi bi-telephone-fill"></i>930381911
        </a> */}
      </div>
    </>
  );
};
