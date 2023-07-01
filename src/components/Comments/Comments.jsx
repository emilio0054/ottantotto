import "./comments.css";

export const Comments = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <p>Testimonios</p>
        <h2 className="heading-secondary">Que opinan de nosotros</h2>
      </div>

      <div className="container grid grid--4-cols margin-bottom-md">
        <div className="section">
          <i className="bi bi-quote quote"></i>
          <div className="testimonial">
            Stopped here for a little taste of Italy in Barcelona. Service was
            very personal and the food was excellent. Highly recommend if you're
            looking for alternative to local cuisine.
          </div>
        </div>
        <div className="section">
          <i className="bi bi-quote quote"></i>
          <div className="testimonial">
            Excellent pizza! Went here twice on our trip. Great service. Italian
            style pizza-Naples Ordered the margarita pizza and pizza with
            prosciutto
          </div>
        </div>
        <div className="section">
          <i className="bi bi-quote quote"></i>
          <div className="testimonial">
            Stumbled across as it's close to apartment we stayed, and were
            running late with no chance for major restaurant searches or
            research, and we definitely got lucky! Great place for pizza, with
            friendly service & atmosphere. Will definitely return when able.
          </div>
        </div>
        <div className="section">
          <i className="bi bi-quote quote"></i>
          <div className="testimonial">
            Absolutely amazing, amazing place and the pizzas are great. Really
            enjoyed the experience and the waitresses nice and helping us with
            making choices. Will go there again!
          </div>
        </div>
      </div>
    </div>
  );
};
