export class CartOrderFormTemplate {
  constructor() {}

  static getOrderForm() {
    return `<div class="card-order-form-wrapper">
      <form class="card-order-form">
      <div class="card-order-form__input card-order-form__input_name">
    <label>
      <p>Name*</p>
      <input name="name" />  
    </label>
    <div class="input-error input-error_name has-text-danger"></div>
    </div>
    <div class="card-order-form__input card-order-form__phone">
    <label>
      <p>Phone*</p>
      <input name="phone" />  
    </label>
    <div class="input-error input-error_phone has-text-danger"></div>
    </div>
    <div class="card-order-form__input card-order-form__address">
    <label>
      <p>Address*</p>
      <input name="address" />  
    </label>
    <div class="input-error input-error_address has-text-danger"></div>
    </div>
    <div class="card-order-form__input card-order-form__mail">
    <label>
      <p>Mail*</p>
      <input name="mail" />  
    </label>
    <div class="input-error input-error_mail has-text-danger"></div>
    </div>
    <div class="card-order-form__input card-order-form__notes">
    <label>
      <p>Notes</p>
      <input name="notes" />  
    </label>
    <div class="input-error input-error_notes has-text-danger"></div>
    </div>
      <button class="button is-warning" data-role="cancelOrderButton">Cancel the Order</button>
      <button class="button is-primary" data-role="sendOrderButton" type="">Send the Order</button>
      </form>
    </div>`;
  }

  static getCheckoutOrderButton() {
    return `<div class="has-text-centered">
      <button class="button is-primary is-medium" data-role="checkoutButton">Checkout Order</button>
    </div>`;
  }

  static getOrderIsSentMessage() {
    return `<div class="order-sent-message-wrapper">
    <p>Your order was successfully sent, thank You!</p>
    <a class="button is-primary" data-role="goToMainPAgeLink">Go To Main Page</a>
    </div>`
  }
}