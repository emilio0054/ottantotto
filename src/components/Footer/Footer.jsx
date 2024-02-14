import "./footer.css";

export const Footer = ({ id }) => {
  return (
    <footer className="" id={id}>
      <div className="row mb-0 align-items-start justify-content-between m-0">
        <div className="col-lg-3 p-5">
          <h3>INFORMATION</h3>
          <a
            href="https://goo.gl/maps/kEcNZSV8wWY8TKst6?coh=178571&entry=tt"
            className="mt-2 text-decoration-none"
            target="_blank"
          >
            <i className="bi bi-geo-alt-fill"></i>Passatge d'Utset, 2, 08013,
            Barcelona.
          </a>
          <br />
          <a
            href="tel:930381911"
            target="_blank"
            className="text-decoration-none"
          >
            <i className="bi bi-telephone-fill phone"></i> 930381911
          </a>
        </div>
        <div className="col-lg-3 p-5">
          <h3>OPENING HOURS</h3>
          <h5>Wednesday to Sunday</h5>
          <h5>13:00 a 16:00</h5>
          <h5>20:00 a 23:00</h5>
        </div>
        <div className="col-lg-3 p-5">
          <h3>SECTIONS</h3>
          <h5>Home</h5>
          <h5>Booking and orders</h5>
          <h5>Pizzas</h5>
          <h5>About Us</h5>
        </div>
        <div className="col-lg-3 p-5">
          <h3>POLÍTICAS</h3>
          <h5>Privacidad</h5>
          <h5>Cookies</h5>
        </div>
      </div>
      <div className="social-media d-flex justify-content-between">
        <div className="ms-5 mt-2 p-1">
          <a
            href="https://www.instagram.com/pizzeriaottantotto/"
            target="_blank"
          >
            <i className="bi bi-instagram fs-3 me-3"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100067941662855"
            target="_blank"
          >
            <i className="bi bi-facebook fs-3 me-3"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=34722194408&text=¡Hola!%20quiero%20hacer%20una
%20reserva:%20(incluye%20cantidad%20de%20personas,%20día%20y%20hora%20en%20tu%20solicitud.)"
            target="_blank"
          >
            <i className="bi bi-whatsapp fs-3"></i>
          </a>
        </div>
        <p className="text-end me-5  mt-4 developed">
          Pizzeria Bar Ottantotto © 2023 | Web and Design by ✨{" "}
        </p>
      </div>
    </footer>
  );
};
