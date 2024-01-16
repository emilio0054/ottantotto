import "./photoGrid.css";

export const PhotoGrid = () => {
  return (
    <>
      <div className="container text-center mb-5" id="photo-grid">
        <h2 className="text-center mb-4">OUR PIZZAS</h2>
        <p className="text mb-5">
          From the classic Marinara and Margherita to creations inspired by
          different regions of Italy, each pizza offers a unique culinary
          experience.
        </p>
        <div className="row justify-content-between mb-3 gap-4">
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/calabria.png"
                className="mb-4"
                width="100%"
                alt="pizza con salami"
              />
              <h5 className="pizzaName text-center">CALABRIA</h5>
              <p className="ingredients">
                Tomato, mozzarella, spicy Calabrian salami, black olives
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/emilia.png"
                className="mb-4"
                width="100%"
                alt="pizza con jamon"
              />
              <h5 className="pizzaName text-center">EMILIA</h5>
              <p className="ingredients">
                Mozzarella, scamorza, artichokes, mortadella, Parmesan
              </p>
            </div>
          </div>

          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/friuli.png"
                className="mb-4"
                width="100%"
                alt="pizza con jamon cerrano"
              />
              <h5 className="pizzaName text-center">FRIULI</h5>
              <p className="ingredients">
                Tomato, mozzarella, spicy Calabrian salami, black olives
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/liguria.png"
                className="mb-4"
                width="100%"
                alt="pizza con pesto"
              />
              <h5 className="pizzaName text-center">LIGURIA</h5>
              <p className="ingredients">
                Mozzarella, scamorza, artichokes, mortadella, Parmesan
              </p>
            </div>
          </div>

          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/marche.png"
                className="mb-4"
                width="100%"
                alt="pizza con jamon y alcachofa"
              />
              <h5 className="pizzaName text-center">MARCHE</h5>
              <p className="ingredients">
                Tomato, mozzarella, spicy Calabrian salami, black olives
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/margharita.png"
                className="mb-4"
                width="100%"
                alt="pizza queso y salsa tomate"
              />
              <h5 className="pizzaName text-center">MARGHARITA</h5>
              <p className="ingredients">
                Mozzarella, scamorza, artichokes, mortadella, Parmesan
              </p>
            </div>
          </div>

          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/piemonte.png"
                className="mb-4"
                width="100%"
                alt="pizza con trufa"
              />
              <h5 className="pizzaName text-center">PIEMONTE</h5>
              <p className="ingredients">
                Tomato, mozzarella, spicy Calabrian salami, black olives
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/puglia.png"
                className="mb-4"
                width="100%"
                alt="pizza con burrata"
              />
              <h5 className="pizzaName text-center">PUGLIA</h5>
              <p className="ingredients">
                Mozzarella, scamorza, artichokes, mortadella, Parmesan
              </p>
            </div>
          </div>

          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/sardegna.png"
                className="mb-4"
                width="100%"
                alt="pizza con cebolla"
              />
              <h5 className="pizzaName text-center">SARDEGNA</h5>
              <p className="ingredients">
                Tomato, mozzarella, spicy Calabrian salami, black olives
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around pizza-card">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/toscana.png"
                className="mb-4"
                width="100%"
                alt="pizza con salami y anis"
              />
              <h5 className="pizzaName text-center">TOSCANA</h5>
              <p className="ingredients">
                Mozzarella, scamorza, artichokes, mortadella, Parmesan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
