export class CartPageTemplate {
  static getPageTemplate() {
    return `<div class="cart-page container is-fluid">
      <div class="container">
        <div class="cart-goods-list columns is-multiline"></div>
        <div class="cart-order-form"></div>
      </div>
    </div>`;
  }
}
