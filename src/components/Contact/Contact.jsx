import "./contact.css";

export const Contact = ({ id }) => {
  return (
    <>
      <div className="contact-container" id={id}>
        <h2 className="d-flex justify-content-center contact-title">
          BOOKINGS AND ORDERS
        </h2>
        <p className="d-flex justify-content-center contact-subtitle">
          MAKE YOUR BOOKING WITH ONE CLICK
        </p>
        <div className="d-flex justify-content-evenly main-container container h-auto">
          <div className="col-sm-2 d-flex flex-column justify-content-space-around align-content-center item">
            <a
              href="https://api.whatsapp.com/send?phone=34722194408&text=¡Hola!%20quiero%20hacer%20una
  %20reserva:%20(incluye%20cantidad%20de%20personas,%20día%20y%20hora%20en%20tu%20solicitud.)"
              target="_blank"
              className="text-decoration-none text-center"
            >
              <i className="bi bi-whatsapp whatsapp-icon"></i>
              <h3 className="contact-text">Whatsapp</h3>
            </a>
            <p className="mb-0">Monday to Friday</p>
            <p className="mt-0 mb-0">12:00 a 20:00hs</p>
            <p className="statement">
              *Bookings must be made at least 24 hours in advance.
            </p>
          </div>
          <div className="col-sm-2 d-flex flex-column justify-content-space-around align-content-center item">
            <a
              href="tel:930381911"
              target="_blank"
              className="text-decoration-none text-center"
            >
              <i className="bi bi-telephone-outbound phone-icon"></i>
              <h3 className="contact-text">Phone</h3>
            </a>
            <p className="mb-0">Monday to Sunday</p>
            <p className="mt-0 mb-0">12:00 a 22:00</p>
          </div>
          <div className="col-sm-2 d-flex flex-column justify-content-space-around align-content-center item">
            <a
              href="https://goo.gl/maps/wBcuYJXGbrhH2tdc9"
              target="_blank"
              className="text-decoration-none text-center"
            >
              <i className="bi bi-geo-alt-fill location-icon"></i>
              <h3 className="contact-text">Location</h3>
            </a>
            <p className="location-text">Info</p>
          </div>
          <div className="col-sm-2 d-flex flex-column justify-content-space-around align-content-center item">
            <a
              href="mailto:pizzeriaottantotto@gmail.com"
              target="_blank"
              className="text-decoration-none text-center"
            >
              <i className="bi bi-envelope-at mail-icon"></i>
              <h3 className="contact-text">Send us an Email!</h3>
            </a>
            <p className="mail-text">Info</p>
          </div>
        </div>
        <p className="contact-confirmation">
          We will confirm your booking or order as soon as we verify
          availability for the requested date and time.
        </p>
        <p className="contact-confirmation mt-0 mb-2">
          If the reservation or order is not confirmed, it will not be valid.
        </p>
      </div>
    </>
  );
};
