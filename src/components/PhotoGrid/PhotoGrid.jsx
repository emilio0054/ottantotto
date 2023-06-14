import "./photoGrid.css";
export const PhotoGrid = () => {
  return (
    <div>
      <section className="section-zpattern">
        <div className="container grid">
          <div className="text">
            <p className="description">La masa</p>
            <h3 className="step-description">
              nuestra masa, de leudado lento, está hecha con harina de trigo Bio
              italiana. Una masa bien hecha es simplemente hermosa. El resultado
              es una pizza que es leve al cuerpo del comensal, pero
              profundamente gratificante.
            </h3>
          </div>
          <div className="gallery">
            <img
              src="/assets/z-pattern/01 La masa/masa1.png"
              className="step-img"
              alt="masa1"
            />
            <img
              src="/assets/z-pattern/01 La masa/masa2.png"
              className="step-img"
              alt="masa2"
            />
            <img
              src="/assets/z-pattern/01 La masa/masa3.jpg"
              className="step-img"
              alt="masa3"
            />
            <img
              src="/assets/z-pattern/01 La masa/masa4.jpg"
              className="step-img"
              alt="masa4"
            />
          </div>
        </div>

        <div className="container grid">
          <div className="gallery">
            <img
              src="/assets/z-pattern/02 El tomate/tomate1.jpg"
              className="step-img"
              alt="tomate1"
            />
            <img
              src="/assets/z-pattern/02 El tomate/tomate2.jpg"
              className="step-img"
              alt="tomatea2"
            />
            <img
              src="/assets/z-pattern/02 El tomate/tomate3.jpg"
              className="step-img"
              alt="tomate3"
            />
            <img
              src="/assets/z-pattern/02 El tomate/tomate4.jpg"
              className="step-img"
              alt="tomate4"
            />
          </div>
          <div className="text">
            <p className="description">El tomate</p>
            <h3 className="step-description">
              hacemos la salsa con tomates italianos de primera calidad. Cocida
              al horno, su perfume es incunfundible.
            </h3>
          </div>
        </div>

        <div className="container grid">
          <div className="text">
            <p className="description">La mozzarella</p>
            <h3 className="step-description">
              Hecha con leche fresca de búfala, tiene un sabor suave y cremoso.
              Su textura elástica y capacidad para fundirse la convierten en el
              complemento perfecto para nuestra pizza deliciosa. Utilizarla
              garantiza una experiencia culinaria auténtica y de alta calidad.
            </h3>
          </div>
          <div className="gallery">
            <img
              src="/assets/z-pattern/03 la mozzarella/lamuzza1.jpg"
              className="step-img"
              alt="muzza1"
            />
            <img
              src="/assets/z-pattern/03 la mozzarella/lamuzza2.jpg"
              className="step-img"
              alt="muzza2"
            />
            <img
              src="/assets/z-pattern/03 la mozzarella/lamuzza3.jpg"
              className="step-img"
              alt="muzza3"
            />
            <img
              src="/assets/z-pattern/03 la mozzarella/lamuzza4.jpg"
              className="step-img"
              alt="muzza4"
            />
          </div>
        </div>

        <div className="container grid">
          <div className="gallery">
            <img
              src="/assets/z-pattern/04 Los ingredientes/ingredientes1.jpg"
              className="step-img"
              alt="ingredientes1"
            />
            <img
              src="/assets/z-pattern/04 Los ingredientes/ingredientes2.jpg"
              className="step-img"
              alt="ingredientes2"
            />
            <img
              src="/assets/z-pattern/04 Los ingredientes/ingredientes3.jpg"
              className="step-img"
              alt="ingredientes3"
            />
            <img
              src="/assets/z-pattern/04 Los ingredientes/ingredientes4.jpg"
              className="step-img"
              alt="ingredientes4"
            />
          </div>
          <div className="text">
            <p className="description">Ingredientes</p>
            <h3 className="step-description">
              sólo utilizamos ingredientes de primera, importados de Italia o de
              producción local. Sin atajos.Además de las tradicionales Marinara
              y Margherita, hemos diseñado un buen número de pizzas honrando a
              diversas regiones de Italia. Cada una cuenta con algún ingrediente
              representativo de su propia riqueza gastronómica, directamente
              importado de origen.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};
