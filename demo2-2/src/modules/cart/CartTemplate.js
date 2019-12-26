import { siteSettings } from "../../share/siteSettings.js";

export class CartTemplate {
  constructor() {}

  static getCartItem({ id, breed, price, image }) {
    return `<div class="column is-full">
      <div class="columns cart-card-content">
        <div class="column is-3">
          <div class="cart-item-image" style="background-image: url(${image})"></div>
        </div>
        <div class="column is-6">
          <p>${breed}</p>
          <div>
            <a href="#" class="cart-remove-item" data-animal_id="${id}">remove from cart</a>
          </div>
        </div>
        <div class="column is-3 has-text-right">
          $${price}
        </div>
      </div>
    </div>`;
  }

  static getEmptyCartMessage() {
    return `<div class="empty-card-message column is-full section is-size-4 has-text-centered has-text-grey-dark">
      Cart is empty 😢.
      Maybe, you want to go to the <a class="go-to-catalog-link" href="${siteSettings.page.index}">catalog</a>
      to find the pet that is waiting for you 🐥!
    </div>`;
  }
}
