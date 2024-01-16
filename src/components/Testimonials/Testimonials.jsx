import "./testimonials.css";

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="d-flex justify-content-center">
        Que dicen nuestros clientes
      </h2>
      <div className="container-fluid text-center py-3 d-flex flex-wrap justify-content-around align-items-stretch">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-12 comment d-flex flex-column align-items-center justify-content-around px-3">
            <img
              src="/assets/testimonials/Erickginesta.jpg"
              className="w-25 img-fluid rounded-circle shadow-1-strong mb-4 mt-2"
              alt="Erick Ginesta profile pict"
              id="commentimg"
            />
            <h5 className="mb-1">Erick Ginesta</h5>
            <a
              href="https://goo.gl/maps/7eMjP4iXePs6kzsr8"
              target="_blank"
              className="mb-2 text-decoration-none d-block "
            >
              Google Maps
            </a>
            <p className="message text-center px-2">
              <i className="bi-quote pe-2"></i>
              La mejor pizza de todas! Arturo, el dueño, es muy acogedor,
              amigable y atento. Esta es la segunda vez que venimos aquí y
              siempre nos hace sentir muy especiales. ¡Definitivamente
              volveremos de nuevo!
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning">
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-5 comment d-flex flex-column align-items-center justify-content-around px-3">
            <img
              src="/assets/testimonials/Daphne B..jpg"
              className="w-25 img-fluid rounded-circle shadow-1-strong mb-4 mt-2"
              alt="Daphne B. profile pict"
              id="commentimg"
            />
            <h5 className="mb-1">Sara Cano Trabalon</h5>
            <a
              href="https://maps.app.goo.gl/T1UJ14EVCKnWyFiS8"
              target="_blank"
              className="mb-2 text-decoration-none d-block "
            >
              Google Maps
            </a>
            <p className="message text-center px-2">
              <i className="bi-quote pe-2"></i>
              Recomendable al 100%. Me comí una pizza Piamonte de lo más
              exquisita. La masa fina y le acompaña una cremosa superficie de
              queso, setas y trufa. Una delicia. Me la recomendaron ahí, y han
              dado en el clavo! Gracias!! El servicio muy atento y agradable. Un
              local bonito, de lo más acogedor y íntimo. Volveré sin duda!
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning">
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-half"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-5 comment d-flex flex-column align-items-center justify-content-around px-3">
            <img
              src="/assets/testimonials/jonrwilliams.jpg"
              className="w-25 img-fluid rounded-circle shadow-1-strong mb-4 mt-2"
              alt="Jon R Williams profile pict"
              id="commentimg"
            />
            <h5 className="mb-1">Jon R Williams</h5>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g187497-d13763198-Reviews-Pizzeria_Bar_Ottantotto-Barcelona_Catalonia.html#REVIEWS"
              target="_blank"
              className="mb-2 text-decoration-none d-block "
            >
              Tripadvisor
            </a>
            <p className="message text-center px-2">
              <i className="bi-quote pe-2"></i>
              Hicimos una parada aquí para disfrutar de un pequeño sabor de
              Italia en Barcelona. El servicio fue muy personal y la comida fue
              excelente. Lo recomiendo mucho si estás buscando una alternativa a
              la cocina local.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning">
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
              <li>
                <i className="bi bi-star-fill"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
