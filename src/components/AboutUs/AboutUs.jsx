import "./aboutUs.css";
import { Testimonials } from "../Testimonials/Testimonials";
import { Carousel } from "../Carousel/Carousel";

export const AboutUs = ({ id }) => {
  return (
    <>
      <div className="us-container" id={id}>
        <h2 className="d-flex justify-content-center us-title">ABOUT US</h2>
        <p className="textAb">
          Our pizzeria is born from a passion for Italian cuisine and the desire
          to share its authentic flavor with the public. We are pleased to
          invite you to our restaurant, located near the Sagrada Familia. Our
          goal is to provide you with an exceptional culinary experience,
          ensuring impeccable service and specialized attention. Enjoy a perfect
          blend of the authenticity of Italian cuisine and a family-friendly and
          welcoming atmosphere.
        </p>
        <Carousel />
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};
