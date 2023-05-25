export const HomeView = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-12">
            <img className="homeview-image" src="/tomates.jpg" width='100%'/>
            <h1 className="homeview-text-center">¡Bienvenidos a Ottantotto!</h1>
            <a
              classname="homeview-adress"
              href="https://goo.gl/maps/kEcNZSV8wWY8TKst6?coh=178571&entry=tt"
            >
              <h5>Passatge d'Utset, 2, 08013 Barcelona</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
