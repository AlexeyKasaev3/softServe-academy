import { CartTemplate } from "./CartTemplate.js";

export class CartView {
  constructor(goodsListClickHandler) {
    this.goodsListClickHandler = goodsListClickHandler;
    this.goodsListParentElement = document.querySelector(".cart-goods-list");
    this.orderFormParentElement = document.querySelector(".cart-order-form");
  }

  renderCard(itemsInCart) {
    this.renderGoodsList(itemsInCart);
    this.goodsListParentElement.addEventListener("click", this.goodsListClickHandler);
  }

  renderGoodsList(itemsInCart) {
    if (!itemsInCart.length) {
      this.goodsListParentElement.innerHTML = CartTemplate.getEmptyCartMessage();
    } else {
      this.goodsListParentElement.innerHTML = itemsInCart.map(item => CartTemplate.getCartItem(item)).join("");
    }
  }
}
