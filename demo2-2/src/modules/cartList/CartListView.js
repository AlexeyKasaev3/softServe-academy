import { CartListTemplate } from "./CartListTemplate.js";

export class CartListView {
  constructor(goodsListClickHandler) {
    this.goodsListParentElement = document.querySelector(".cart-goods-list");
    this.orderFormParentElement = document.querySelector(".cart-order-form");

    this.goodsListParentElement.addEventListener("click", goodsListClickHandler);
  }

  renderEmptyCartList() {
    this.goodsListParentElement.innerHTML = CartListTemplate.getEmptyCartMessage();
  }

  renderCartListItems(itemsInCartData, isOrderFormOpen) {
    let finalValue = "";

    finalValue += itemsInCartData.itemsInCart.map(item => CartListTemplate.getCartItem(item, isOrderFormOpen)).join("");
    finalValue += CartListTemplate.getCartTotal(itemsInCartData.totalCartPrice);
    
    this.goodsListParentElement.innerHTML = finalValue;
  }
}