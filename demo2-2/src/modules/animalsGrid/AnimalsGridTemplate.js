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

// return `<div class="column is-full-tablet is-half-widescreen">
// <div class="card">
//   <div class="card-image">
//     <figure class="image is-4by3">
//     <div class="kaa-card-image-container">
//       <img src="${image}" alt="Placeholder image">
//       </div>
//     </figure>
//   </div>
//   <div class="card-content">
//     <div class="media">
//       <div class="media-content">
//         <p class="title is-4">${breed}</p>
//         <p><strong>Price</strong> $ ${price}</p>
//       </div>
//     </div>

//     <div class="content">
//         <span class="button is-primary is-light" data-buy_link="${id}">${inCart ? 'IN CART' : 'BUY'}</span>
//         <a href="details-${breed}-${id}" class="button is-link is-light" data-details_link="${id}">DETAILS</a>
//     </div>
//   </div>
// </div>
// </div>`;
