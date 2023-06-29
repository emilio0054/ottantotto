import "./comments.css";

export const Comments = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="testimonials-container">
            <h1 class="titulo">Testimonios</h1>
            <div class="testimonials">
              <figure class="testimonial">
                <div class="testimonialimg">
                  <img
                    class="testimonial-img"
                    alt="Photo of customer jonrwilliams"
                    src="/assets/testimonials/jonrwilliams.jpg"
                  />
                  <img
                    class="testimonial-logo"
                    alt="tripadvisor logo"
                    src="/assets/testimonials/tripadvisor-logo.png"
                  />
                </div>
                <blockquote class="testimonial-text">
                  "A taste of Italy in Barcelona Stopped here for a little taste
                  of Italy in Barcelona. Service was very personal and the food
                  was excellent. Highly recommend if you're looking for
                  alternative to local cuisine."
                </blockquote>
                <p class="testimonial-name">&mdash; jonrwilliams</p>
              </figure>

              <figure class="testimonial">
                <div class="testimonialimg">
                  <img
                    class="testimonial-img"
                    alt="Photo of customer tnegro"
                    src="/assets/testimonials/tnegro.jpg"
                  />
                  <img
                    class="testimonial-logo"
                    alt="tripadvisor logo"
                    src="/assets/testimonials/tripadvisor-logo.png"
                  />
                </div>
                <blockquote class="testimonial-text">
                  "Great pizza and friendly staff! Choosing this place for good
                  pizza was right decision. Friendly owner with some good
                  recommendations make us great lunch!"
                </blockquote>
                <p class="testimonial-name">&mdash; tnegro</p>
              </figure>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
