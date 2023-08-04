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
        <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-lg-5 col-sm-12">
            <img src="/assets/pizza/calabria.png" className="" width="100%" />
            <div className="mt-3">
              <h5 className="">CALABRIA</h5>
              <p className="">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <img
              src="/assets/pizza/emilia.png"
              alt="tomate1"
              width="90%"
              className="mt-3"
            />
            <div className="mt-5">
              <h5 className="">EMILIA</h5>
              <p className="">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-lg-5 col-sm-12">
            <img src="/assets/pizza/friuli.png" className="mt-4" width="90%" />
            <div className="mt-5">
              <h5 className="text-center">FRIULI</h5>
              <p className="">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <img
              src="/assets/pizza/liguria.png"
              alt="tomate1"
              width="100%"
              className=""
            />
            <div className="mt-4">
              <h5 className="">LIGURIA</h5>
              <p className="">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-lg-5 col-sm-12">
            <img src="/assets/pizza/marche.png" className="" width="110%" />
            <div>
              <h5 className="">MARCHE</h5>
              <p className="">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <img
              src="/assets/pizza/margharita.png"
              alt="tomate1"
              width="90%"
              className="mt-5"
            />
            <div className="mt-5">
              <h5 className="">MARGHARITA</h5>
              <p className="">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-lg-5 col-sm-12">
            <img
              src="/assets/pizza/piemonte.png"
              className="mt-5"
              width="100%"
            />
            <div className="mt-5">
              <h5 className="">PIEMONTE</h5>
              <p className="">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <img
              src="/assets/pizza/puglia.png"
              alt="tomate1"
              width="120%"
              className=""
            />
            <div className="">
              <h5 className="">PUGLIA</h5>
              <p className="">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-lg-5 col-sm-12">
            <img src="/assets/pizza/sardegna.png" className="" width="120%" />
            <div>
              <h5 className="">SARDEGNA</h5>
              <p className="">
                Tomate, mozzarella, salami picante de Calabria, olivas negras
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <img
              src="/assets/pizza/toscana.png"
              alt="tomate1"
              width="100%"
              className="mt-5"
            />
            <div className="mt-5">
              <h5 className="">TOSCANA</h5>
              <p className="">
                Mozzarella, scarmoza, alcachofas, mortadella, parmesano
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
