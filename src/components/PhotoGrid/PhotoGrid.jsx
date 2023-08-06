import "./photoGrid.css";

export const PhotoGrid = () => {
  return (
    <>
      <div className="container text-center mb-5" id="photo-grid">
        <h2 className="text-center">NUESTRAS PIZZAS</h2>
        <p className="text mb-4">
          Desde las clásicas Marinara y Margherita hasta creaciones inspiradas
          en las distintas regiones de Italia, cada pizza es una experiencia
          culinaria única.
        </p>
        <div className="row justify-content-between mb-3">
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-aroubetweennd">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/calabria.png"
                className="mb-4"
                width="100%"
              />
              <h5 className="pizzaName text-center">CALABRIA</h5>
              <p className="ingredients">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/emilia.png"
                alt="tomate1"
                width="100%"
                className="mb-4"
              />
              <h5 className="pizzaName text-center">EMILIA</h5>
              <p className="ingredients">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>

          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/friuli.png"
                className="mb-4"
                width="100%"
              />
              <h5 className="pizzaName text-center">FRIULI</h5>
              <p className="ingredients">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/liguria.png"
                alt="tomate1"
                width="100%"
                className="mb-4"
              />
              <h5 className="pizzaName text-center">LIGURIA</h5>
              <p className="ingredients">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>

          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/marche.png"
                className="mb-4"
                width="100%"
              />
              <h5 className="pizzaName text-center">MARCHE</h5>
              <p className="ingredients">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/margharita.png"
                alt="tomate1"
                width="100%"
                className="mb-4"
              />
              <h5 className="pizzaName text-center">MARGHARITA</h5>
              <p className="ingredients">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>

          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/piemonte.png"
                className="mb-4"
                width="100%"
              />
              <h5 className="pizzaName text-center">PIEMONTE</h5>
              <p className="ingredients">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/puglia.png"
                alt="tomate1"
                width="100%"
                className="mb-4"
              />
              <h5 className="pizzaName text-center">PUGLIA</h5>
              <p className="ingredients">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>

          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/sardegna.png"
                className="mb-4"
                width="100%"
              />
              <h5 className="pizzaName text-center">SARDEGNA</h5>
              <p className="ingredients">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-md-5 col-xs-12 d-flex flex-column align-items-center justify-content-around">
            <div className="d-flex flex-column align-items-center justify-content-around">
              <img
                src="/assets/pizza/toscana.png"
                alt="tomate1"
                width="100%"
                className="mb-4"
              />
              <h5 className="pizzaName text-center">TOSCANA</h5>
              <p className="ingredients">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
