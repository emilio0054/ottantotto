import "./aboutUs.css";
import { Testimonials } from "../Testimonials/Testimonials";
import { Carousel } from "../Carousel/Carousel";
import { useTranslation } from "react-i18next";




export const AboutUs = ({ id }) => {
const {t}=useTranslation()
  return (
    <>
      <div className="us-container" id={id}>
        <h2 className="d-flex justify-content-center us-title">
        
          {t("AboutTitle")}
        
        </h2>
     
        <p className="textAb">
        
          {t("AboutParagraph")}
        </p>
        <Carousel />
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};
