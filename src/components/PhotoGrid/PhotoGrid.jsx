import "./photoGrid.css";

export const PhotoGrid = () => {
  return (
    <div className="container text-center mb-5" id="photo-grid">
      <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-lg-5 col-sm-12">
            <img
            src='/assets/pizza/calabria.png' 
            className=""
            width='100%'
            />
          </div>
          <div className="col-5">
            <img
              src="/assets/pizza/emilia.png"
              alt="tomate1"
              width='90%'
              className="mt-3"
            />
          </div>
      </div>
      <div className="row row-cols-2 justify-content-between">
          <h5 className="col-5 text-center">Calabria</h5>
          <h5 className="col-5 text-center">Emilia</h5>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
          <p className="col-5">Tomate, mozzarella, salami picante de Calabria, olivas negras</p>
          <p className="col-5">Mozzarella, scarmoza, alcachofas, mortadella, parmesano</p>
      </div>
      <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-lg-5 col-sm-12">
            <img
            src='/assets/pizza/friuli.png' 
            className="mt-4"
            width='90%'
            />
          </div>
          <div className="col-5">
            <img
              src="/assets/pizza/liguria.png"
              alt="tomate1"
              width='100%'
              className=""
            />
          </div>
      </div>
      <div className="row row-cols-2 justify-content-between">
          <h5 className="col-5 text-center">Friuli</h5>
          <h5 className="col-5 text-center">Liguria</h5>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
          <p className="col-5">Tomate, mozzarella, salami picante de Calabria, olivas negras</p>
          <p className="col-5">Mozzarella, scarmoza, alcachofas, mortadella, parmesano</p>
      </div>
      <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-5">
            <img
            src='/assets/pizza/marche.png' 
            className=""
            width='110%'
            />
          </div>
          <div className="col-5">
            <img
              src="/assets/pizza/margharita.png"
              alt="tomate1"
              width='90%'
              className="mt-5"
            />
          </div>
      </div>
      <div className="row row-cols-2 justify-content-between">
          <h5 className="col-5 text-center">Marche</h5>
          <h5 className="col-5 text-center">Margharita</h5>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
          <p className="col-5">Tomate, mozzarella, salami picante de Calabria, olivas negras</p>
          <p className="col-5">Mozzarella, scarmoza, alcachofas, mortadella, parmesano</p>
      </div>
      
      <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-5">
            <img
            src='/assets/pizza/piemonte.png' 
            className="mt-5"
            width='95%'
            />
          </div>
          <div className="col-5">
            <img
              src="/assets/pizza/puglia.png"
              alt="tomate1"
              width='120%'
              className=""
            />
          </div>
      </div>
      <div className="row row-cols-2 justify-content-between">
          <h5 className="col-5 text-center">Piemonte</h5>
          <h5 className="col-5 text-center">Puglia</h5>
      </div>
      <div className="row row-cols-2 justify-content-between mb-5">
          <p className="col-5">Tomate, mozzarella, salami picante de Calabria, olivas negras</p>
          <p className="col-5">Mozzarella, scarmoza, alcachofas, mortadella, parmesano</p>
      </div>
      <div className="row row-cols-2 justify-content-between mb-3">
          <div className="col-5">
            <img
            src='/assets/pizza/sardegna.png' 
            className=""
            width='120%'
            />
          </div>
          <div className="col-5">
            <img
              src="/assets/pizza/toscana.png"
              alt="tomate1"
              width='100%'
              className="mt-5"
            />
          </div>
      </div>
      <div className="row row-cols-2 justify-content-between">
          <h5 className="col-5 text-center">Sardegna</h5>
          <h5 className="col-5 text-center">Toscana</h5>
      </div>
      <div className="row row-cols-2 justify-content-between mb-3">
          <p className="col-5">Tomate, mozzarella, salami picante de Calabria, olivas negras</p>
          <p className="col-5">Mozzarella, scarmoza, alcachofas, mortadella, parmesano</p>
      </div>
    </div>
  );
};
