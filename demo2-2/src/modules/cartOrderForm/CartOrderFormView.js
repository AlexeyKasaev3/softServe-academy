import { CartOrderFormTemplate } from "./CartOrderFormTemplate.js";

export class CartOrderFormView {
  constructor(
    checkoutButtonClickHandler,
    cancelOrderButtonClickHandler,
    sendOrderButtonClickHandler,
    formFiledBlurHandler,
    goToMainPageLinkHandler,
  ) {
    this.orderFormRootElement = document.querySelector(".cart-order-form");

    this.checkoutButtonClickHandler = checkoutButtonClickHandler;
    this.cancelOrderButtonClickHandler = cancelOrderButtonClickHandler;
    this.sendOrderButtonClickHandler = sendOrderButtonClickHandler;
    this.formFiledBlurHandler = formFiledBlurHandler;
    this.goToMainPageLinkHandler = goToMainPageLinkHandler;
  }

  renderOrderForm() {
    this.orderFormRootElement.innerHTML = CartOrderFormTemplate.getOrderForm();
    document
      .querySelector("button[data-role=cancelOrderButton]")
      .addEventListener("click", this.cancelOrderButtonClickHandler);
    document
      .querySelector("button[data-role=sendOrderButton]")
      .addEventListener("click", this.sendOrderButtonClickHandler);
    document.querySelectorAll(".card-order-form input").forEach(input => input.addEventListener("blur", this.formFiledBlurHandler));
  }

  renderCheckoutOrderButton() {
    this.orderFormRootElement.innerHTML = CartOrderFormTemplate.getCheckoutOrderButton();
    document
      .querySelector("button[data-role=checkoutButton]")
      .addEventListener("click", this.checkoutButtonClickHandler);
  }

  deRenderOrderForm() {
    this.orderFormRootElement.innerHTML = "";
  }

  renderOrderIsSentMessage() {
    this.orderFormRootElement.insertAdjacentHTML('beforeend', CartOrderFormTemplate.getOrderIsSentMessage())
    document.querySelector('a[data-role=goToMainPAgeLink]').addEventListener('click', this.goToMainPageLinkHandler)
  }
}
