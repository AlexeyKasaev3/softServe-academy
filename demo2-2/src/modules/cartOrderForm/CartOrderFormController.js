import { siteSettings } from "../../share/siteSettings.js";
import { CartOrderFormView } from "./CartOrderFormView.js";

export class CartOrderFormController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.view = new CartOrderFormView(
      this.handleCheckoutButtonClick.bind(this),
      this.handleCancelOrderButtonClick.bind(this),
      this.handleSendOrderButtonClick.bind(this),
      this.handleFormFiledBlur.bind(this),
      this.handleGoToMainPageLinkClick.bind(this)
    );

    this.publisherAPI = publisherAPI;

    this.closeCartFormIfOpen();
    this.displayCartOrderForm();

    this.publisherAPI.subscribe(siteSettings.event.removeAnimalFromCart, this.displayCartOrderForm.bind(this));
  }

  displayCartOrderForm() {
    if (this.model.getItemsInCartData().itemsInCart.length) {
      if (this.model.orderFormStatus === siteSettings.orderFormStatus.close) {
        this.view.renderCheckoutOrderButton();
      } else {
        this.view.renderOrderForm();
      }
    } else {
      this.view.deRenderOrderForm();
    }
  }

  handleCheckoutButtonClick() {
    this.model.orderFormStatus = siteSettings.orderFormStatus.open;
    this.displayCartOrderForm();
    this.publisherAPI.notify(siteSettings.event.orderFormOpen, true);
  }

  handleCancelOrderButtonClick() {
    this.model.orderFormStatus = siteSettings.orderFormStatus.close;
    this.displayCartOrderForm();
    this.publisherAPI.notify(siteSettings.event.orderFormOpen, false);
  }

  handleGoToMainPageLinkClick(event) {
    event.preventDefault();
    this.publisherAPI.notify(siteSettings.event.changePage, siteSettings.page.index)
  }

  handleSendOrderButtonClick(event) {
    event.preventDefault();
    let isValidateComplete = true;
    const inputs = document.querySelectorAll(".card-order-form input");
    inputs.forEach(input => {
      if (this.validateOrderFormField(input) !== "") isValidateComplete = false;
    });
    if(!isValidateComplete) {
      inputs.forEach(input => this.handleFormFiledBlur(input));
    } else {
      alert('OK!')
      this.view.renderOrderIsSentMessage();
      this.model.resetCart();
    }
  }

  handleFormFiledBlur(entity) {
    let input = null;
    if(entity instanceof Event) {
      input = entity.target
    } else {
      input = entity;
    }
    document.querySelector(`.input-error_${input.getAttribute("name")}`).innerHTML = this.validateOrderFormField(input);
  }

  validateOrderFormField(input) {
    const fieldName = input.getAttribute("name");
    const fieldValue = input.value.trim();

    const requiredFieldMessage = "is field is required";

    let error = "";

    if (fieldName !== "notes" && fieldValue === "") {
      error = requiredFieldMessage;
    } else {
      switch (fieldName) {
        case "phone":
          if (!/^\+380\d{9}$/.test(fieldValue)) error = "Phone number must be in the format +380667778899";
          break;
        case "mail":
          if (!/^\S+@\S+$/.test(fieldValue)) error = "mail address is not valid";
          break;
      }
    }

    return error;
  }

  closeCartFormIfOpen() {
    this.model.orderFormStatus = siteSettings.orderFormStatus.close;
  }
}
