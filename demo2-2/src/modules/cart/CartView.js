import { CartTemplate } from "./CartTemplate.js";

export class CartView {
  constructor(goodsListClickHandler) {
    this.goodsListParentElement = document.querySelector(".cart-goods-list");
    this.orderFormParentElement = document.querySelector(".cart-order-form");

    this.goodsListParentElement.addEventListener("click", goodsListClickHandler);
  }

  renderEmptyCard() {
    this.goodsListParentElement.innerHTML = CartTemplate.getEmptyCartMessage();
  }

  renderCartWithItems(itemsInCartData) {
    this.goodsListParentElement.innerHTML = CartTemplate.getCartContent(itemsInCartData);
  }

  renderOrderForm() {
    
  }
}