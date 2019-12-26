export class AnimalsGridTemplate {
  constructor() {}

  getCardTemplate({ id, image, price, breed, inCart, age, gender, weight }) {
    return `<article class="column is-full-tablet is-half-widescreen">
    <div class="columns animal-card">
      <div class="column is-full-tablet is-one-third-tablet">
        ${this.renderImage(image)}
      </div>
      <div class="column is-full-tablet is-three-quarters-tablet animal-card-desc">
        <div class="animal-card-content-wrapper">
          <div>
            <h2 class="title is-2 animal-card-title">${breed}</h2>
            <span class="title is-2 animal-card-price"> | $${price}</span>
          </div>
          <div class="is-size-4 has-text-grey">
            ${age} mo. / ${gender} / ${weight} kg
          </div>
          <div>
          <span class="button is-medium card-details-button" data-details_link="${id}">Details</span>
          <span class="button ${inCart ? "is-warning" : "is-primary"} is-medium buy-button" data-buy_link="${id}">${
      inCart ? "In Cart" : "Buy"
    }</span>
          </div>
        </div>
      </div>
    </div>
    </article>`;
  }

  getCardsGridTemplate() {
    return `<div class="container is-fluid">
    <div class="columns cards-parent is-multiline is-5 is-variable">
    </div>
    </div>`;
  }

  renderImage(image) {
    // const rotateDeg = Math.random() * (4 - -3) + -3;
    const rotateDeg = -1;
    return `<div class="kaa-card-image" style="background-image: url(${image}); transform: rotate(${rotateDeg}deg)"></div>`;
  }
}
