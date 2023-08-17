import "./contact.css";

export const Contact = ({ id }) => {
  return (
    <>
      <div className="contact-container" id={id}>
        <h2 className="d-flex justify-content-center contact-title">
          RESERVAS Y PEDIDOS
        </h2>
        <p className="d-flex justify-content-center contact-subtitle">
          HAZ TU RESERVA CON TAN SÓLO UN CLICK
        </p>
        <div className="d-flex justify-content-evenly main-container container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-space-around align-content-center item">
              <a
                href="https://api.whatsapp.com/send?phone=34722194408&text=¡Hola!%20quiero%20hacer%20una
    %20reserva:%20(incluye%20cantidad%20de%20personas,%20día%20y%20hora%20en%20tu%20solicitud.)"
                target="_blank"
                className="text-decoration-none text-center"
              >
                <i className="bi bi-whatsapp whatsapp-icon"></i>
                <h3 className="contact-text">Por Whatsapp</h3>
              </a>
              <p className="mb-0">Lunes a Viernes</p>
              <p className="mt-0 mb-0">12:00 a 20:00hs</p>
              <p className="statement">
                *Reservas sólo con 24hs de anticipación.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-space-around align-content-center item">
              <a
                href="tel:930381911"
                target="_blank"
                className="text-decoration-none text-center"
              >
                <i className="bi bi-telephone-outbound phone-icon"></i>
                <h3 className="contact-text">Por teléfono</h3>
              </a>
              <p className="mb-0">Lunes a Domingo</p>
              <p className="mt-0 mb-0">12:00 a 22:00</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-space-around align-content-center item">
              <a
                href="https://goo.gl/maps/wBcuYJXGbrhH2tdc9"
                target="_blank"
                className="text-decoration-none text-center"
              >
                <i className="bi bi-geo-alt-fill location-icon"></i>
                <h3 className="contact-text">¿Dónde estamos?</h3>
              </a>
              <p className="location-text"> Info acá</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-space-around align-content-center item">
              <a
                href="mailto:"
                target="_blank"
                className="text-decoration-none text-center"
              >
                <i className="bi bi-envelope-at mail-icon"></i>
                <h3 className="contact-text">Envíanos un mail</h3>
              </a>
              <p className="mail-text"> Info acá</p>
            </div>
          </div>
        </div>
        <div>
          <p className="contact-confirmation">
            Confirmaremos su reserva o pedido tan pronto comprobemos la
            disponibilidad para la fecha y hora solicitadas.
          </p>
          <p className="contact-confirmation mt-0 mb-2">
            Si la reserva o pedido no son confirmados, no tendrá validez alguna.
          </p>
        </div>
      </div>
    </>
  );
};
