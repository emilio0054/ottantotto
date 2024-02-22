
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./menu.css";

export const Menu = ({ id }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("es"); // Default to spanish

  useEffect(() => {
    // Set the initial language when the component mounts
    setCurrentLanguage(i18n.language || "en");
  }, []); // Empty dependency array to ensure it runs only once when mounted

  useEffect(() => {
    // Update the current language when the language changes
    setCurrentLanguage(i18n.language || "en");
  }, [i18n.language]);

  const getImagePath = (imageName) => {
    // select the image path based on the current language and imageName
    return `/assets/menu/${imageName}${currentLanguage}.png`;
  };

  return (
    <>
      <div className="menu-container" id={id}>
       
         <div className="d-flex justify-content-center mb-5">
          <img
            src="/assets/menu/1spa.png"
            alt="Menú en Español"
            id="menu-img"
            width="30%"
            className="logo-photo mt-5"
          />
        </div>




        <div className="d-flex justify-content-evenly bottom-menu-container">
          <img
            src={getImagePath("2")}
            alt={`Menu ${t("language")}`}
            id="menu-img"
            width="45%"
          />
          <hr className="d-none" />
          <img
            src={getImagePath("3")}
            alt={`Menu ${t("language")}`}
            id="menu-img"
            width="45%"
          />
        </div>
      </div>
    </>
  );
};







