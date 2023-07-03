import "./testimonials.css";

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="text-center mb-5 mt-2 p-4">
        Que dicen nuestros clientes...
      </h1>
      <div className="text-center">
        <div className="h-auto py-3">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-lg-3 h-100">
                <img
                  src="/assets/testimonials/jonrwilliams.jpg"
                  className="w-25 img-fluid rounded-circle shadow-1-strong mb-4"
                  alt="jornwilliams"
                />
                <h5 className="mb-1">Jorn Williams</h5>
                <a
                  href="https://www.tripadvisor.com/Restaurant_Review-g187497-d13763198-Reviews-Pizzeria_Bar_Ottantotto-Barcelona_Catalonia.html#REVIEWS"
                  target="_blank"
                  className="mb-2 text-decoration-none d-block color-black"
                >
                  Tripadvisor
                </a>
                <p className="text-muted">
                  <i className="bi-quote pe-2"></i>
                  Stopped here for a little taste of Italy in Barcelona. Service
                  was very personal and the food was excellent. Highly recommend
                  if you're looking for alternative to local cuisine.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-5">
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 h-100">
                <img
                  src="/assets/testimonials/Daphne B..jpg"
                  className="w-25 img-fluid rounded-circle shadow-1-strong mb-4"
                  alt="jornwilliams"
                />
                <h5 className="mb-1">Daphne B.</h5>
                <a
                  href="https://www.thefork.com/restaurant/ottantotto-r374051/reviews#tabSwitch=true"
                  target="_blank"
                  className="mb-2 text-decoration-none d-block color-black"
                >
                  The Fork
                </a>
                <p className="text-muted">
                  <i className="bi-quote pe-2"></i>
                  The food and staf was amazing. It’s very close to Segrada
                  Familia so that was a big plus! The food and wine was very
                  affordable so I would highly recommend this place to everyone.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-5">
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-half"></i>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 h-100">
                <img
                  src="/assets/testimonials/Erickginesta.jpg"
                  className="w-25 img-fluid rounded-circle shadow-1-strong mb-4"
                  alt="jornwilliams"
                />
                <h5 className="mb-1">Erick Ginesta</h5>
                <a
                  href="https://goo.gl/maps/7eMjP4iXePs6kzsr8"
                  target="_blank"
                  className="mb-2 text-decoration-none d-block color-black"
                >
                  Google Maps
                </a>
                <p className="text-muted">
                  <i className="bi-quote pe-2"></i>
                  Best pizza ever!! Arturo, the owner, is so welcoming and
                  caring. This is the second time we come and he always makes us
                  feel so special. Will definitely come back again!
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-5">
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
