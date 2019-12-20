export class AnimalsTemplate {
  constructor() {}

  getCardTemplate({ image, price, breed }) {
    return `<div class="column is-full-mobile is-half-tablet is-one-third-widescreen is-one-quarter-fullhd">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
        <div class="kaa-card-image-container">
          <img src="${image}" alt="Placeholder image">
          </div>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${breed}</p>
            <p><strong>Price</strong> $ ${price}</p>
          </div>
        </div>
    
        <div class="content">
            <a href="#" class="button is-primary is-light">BUY</a>
            <a href="#" class="button is-link is-light">DETAILS</a>
        </div>
      </div>
    </div>
  </div>`;
  }

  getCardsGridTemplate() {
    return `<div class="section">
    <div class="container">
    <div class="columns is-multiline is-5 is-variable">
    </div>
    </div>
    </div>`;
  }
}
