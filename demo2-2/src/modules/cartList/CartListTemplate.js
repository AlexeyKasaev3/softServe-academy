import { siteSettings } from "../../share/siteSettings.js";

export class CartListTemplate {
  constructor() {}

  static getCartItem({ id, breed, price, image }, isOrderFormOpen) {
    return `<div class="column is-full">
      <div class="columns cart-card-content">
        <div class="column is-3">
          <div class="cart-item-image" style="background-image: url(${image})"></div>
        </div>
        <div class="column is-6">
          <p class="has-text-weight-bold is-size-5">${breed}</p>
          <div>
          ${isOrderFormOpen ?
            `<span class="has-text-grey-light">cancel the order to delete items from list</span>`
            :
            `<a href="#" class="cart-remove-item" data-animal_id="${id}">remove from cart</a>`
          }
          </div>
        </div>
        <div class="column is-3 has-text-right is-size-4 has-text-weight-bold">
          $${price}
        </div>
      </div>
    </div>`;
  }

  static getCartTotal(cartTotalSum) {
    return `<div class="column is-full">
    <div class="level has-text-weight-medium is-size-3">
      <div class="level-left">
        <span class="level-item">Total</span>
      </div>
      <div class="level-right">
        <span class="level-item has-text-weight-bold">$${cartTotalSum}</span>
      </div>
    </div>
    </div>`;
  }

  static getEmptyCartMessage() {
    return `<div class="empty-card-message column is-full section is-size-4 has-text-centered has-text-grey-dark">
      Cart is empty 😢.
      Maybe you would like to go to the <a class="go-to-catalog-link" href="${siteSettings.page.index}">catalog</a>
      to find the pet that is waiting for you 🐥!
    </div>`;
  }
}
