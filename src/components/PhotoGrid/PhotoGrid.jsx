import "./photoGrid.css";
export const PhotoGrid = () => {
  return (
    <div>
      <div class="grid-container">
        <div class="grid-item">
          <img src="/assets/PIZZA ROJA/pizza1.jpg" alt="Image 1"></img>
        </div>
        <div class="grid-item resize">
          <img
            src="/assets/downloaded/deniz-altindas-jVLahCBXaJs-unsplash.jpg"
            alt="Image 2"
          ></img>
        </div>
        <div class="grid-item resize">
          <img
            src="/assets/downloaded/aliona-gumeniuk-CWAargZlesM-unsplash.jpg"
            alt="Image 3"
          ></img>
        </div>
        <div class="grid-item">
          <img src="/assets/PIZZA ROJA/pizza4.jpg" alt="Image 4"></img>
        </div>
        <div class="grid-item resize">
          <img
            src="/assets/downloaded/dorien-monnens-42zN6Txav3w-unsplash.jpg"
            alt="Image 5"
          ></img>
        </div>
        <div class="grid-item">
          <img src="/assets/PIZZA BLANCA/pizzab1.jpg" alt="Image 6"></img>
        </div>
        <div class="grid-item">
          <img src="/assets/PIZZA BLANCA/pizzab2.jpg" alt="Image 7"></img>
        </div>
        <div class="grid-item">
          <img
            src="/assets/downloaded/vaishnav-chogale-cvfxrmFYkZ8-unsplash.jpg"
            alt="Image 8"
          ></img>
        </div>
      </div>
    </div>
  );
};
