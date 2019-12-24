import { CartTemplate } from './CartTemplate.js'

export class CartView {
  constructor() {
    this.containerElement = document.querySelector('.cart-page');
  }

  renderCard(data) {
    this.containerElement.innerHTML = CartTemplate.getCartMarkup(data)
  }
}