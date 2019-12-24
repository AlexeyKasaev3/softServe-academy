export class AnimalsGridTemplate {
  constructor() {}

  getCardTemplate({ id, image, price, breed, inCart }) {
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
            <span class="button is-primary is-light" data-buy_link="${id}">${inCart ? 'IN CART' : 'BUY'}</span>
            <a href="details-${breed}-${id}" class="button is-link is-light" data-details_link="${id}">DETAILS</a>
        </div>
      </div>
    </div>
  </div>`;
  }

  getCardsGridTemplate() {
    return `<div class="section">
    <div class="container">
    <div class="columns cards-parent is-multiline is-5 is-variable">
    </div>
    </div>
    </div>`;
  }
}