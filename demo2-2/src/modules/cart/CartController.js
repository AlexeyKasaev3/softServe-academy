import { CartView } from './CartView.js'

export class CartController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.view = new CartView();

    this.view.renderCard(this.model.getItemsInCart())
  }
}