import "./contact.css";
import { useTranslation } from "react-i18next";

export const Contact = ({ id }) => {
  const {t}=useTranslation()
  return (
    <>
      <div className="contact-container" id={id}>
        <h2
          className="d-flex justify-content-center contact-title"
          data-section="contact"
          data-value="first-line-tittle"
        >
          {t("firstLinetittle")}

        </h2>
        <p
          className="d-flex justify-content-center contact-subtitle"
          data-section="contact"
          data-value="second-line-tittle"
        >
          {t("secondtLinetittle")}
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
                <h3 className="contact-text">Whatsapp</h3>
              </a>
              <p
                className="mb-0"
                data-section="contact"
                data-value="third-line-tittle"
              >
                {t("thirdtLinetittle")}
              </p>
              <p className="mt-0 mb-0">12:00 a 20:00hs</p>
              <p
                className="statement"
                data-section="contact"
                data-value="fourth-line-tittle"
              >
                {t("forthLinetittle")}
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-space-around align-content-center item">
              <a
                href="tel:930381911"
                target="_blank"
                className="text-decoration-none text-center"
              >
                <i className="bi bi-telephone-outbound phone-icon"></i>
                <h3
                  className="contact-text"
                  data-section="contact"
                  data-value="fifth-line-tittle"
                >
                  {t("fifthtLinetittle")}
                </h3>
              </a>
              <p
                className="mb-0"
                data-section="contact"
                data-value="sixth-line-tittle"
              >
                {t("sixthLinetittle")}
              </p>
              <p className="mt-0 mb-0">12:00 a 22:00</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-space-around align-content-center item">
              <a
                href="https://goo.gl/maps/wBcuYJXGbrhH2tdc9"
                target="_blank"
                className="text-decoration-none text-center"
              >
                <i className="bi bi-geo-alt-fill location-icon"></i>
                <h3
                  className="contact-text"
                  data-section="contact"
                  data-value="seventh-line-tittle"
                >
                  {t("seventhLinetittle")}
                </h3>
              </a>
              <p className="location-text">Info</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column justify-content-space-around align-content-center item">
              <a
                href="mailto:pizzeriaottantotto@gmail.com"
                target="_blank"
                className="text-decoration-none text-center"
              >
                <i className="bi bi-envelope-at mail-icon"></i>
                <h3
                  className="contact-text"
                  data-section="contact"
                  data-value="eighth-line-tittle"
                >
                 {t("eighthLinetittle")}
                </h3>
              </a>
              <p className="mail-text">Info</p>
            </div>
          </div>
        </div>
        <p
          className="contact-confirmation"
          data-section="contact"
          data-value="ninth-line-tittle"
        >
         {t("ninthLinetittle")}
        </p>
        <p
          className="contact-confirmation mt-0 mb-2"
          data-section="contact"
          data-value="tenth-line-tittle"
        >
          {t("tenthLinetittle")}
        </p>
      </div>
    </>
  );
};
