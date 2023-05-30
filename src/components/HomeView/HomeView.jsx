import "./homeView.css";

export const HomeView = ({id}) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center homeview-container" id={id}>
          <h1 className="homeview-text">¡Bienvenidos a Ottantotto!</h1>
          <a  href='https://goo.gl/maps/kEcNZSV8wWY8TKst6?coh=178571&entry=tt' classname="mt-2" target="_blank" id='homeview-adress'
          ><i className="bi bi-geo-alt-fill"></i>Passatge d'Utset, 2, 08013, Barcelona
          </a>
          <a href='tel:930381911' id='homeview-phone' className="mt-2" target="_blank"><i class="bi bi-telephone-fill"></i>930381911</a>
      </div>
    </>
  );
};
