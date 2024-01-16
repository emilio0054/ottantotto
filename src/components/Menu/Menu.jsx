import "./menu.css";

export const Menu = ({ id }) => {
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
            src="/assets/menu/2spa.png"
            alt="Menú en Español"
            id="menu-img"
            width="45%"
          />
          <hr className="d-none" />
          <img
            src="/assets/menu/3spa.png"
            alt="Menú en Español"
            id="menu-img"
            width="45%"
          />
        </div>
      </div>
    </>
  );
};
