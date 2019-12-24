import { PageView } from "../PageView.js";
import { CartPageTemplate } from "./CartPageTemplate.js";

import { CartController } from "../../modules/cart/CartController.js";

export class CartPageController {
  constructor(model, publisherAPI) {
    this.view = new PageView(CartPageTemplate.getPageTemplate());

    this.view.renderPage();

    this.cartControler = new CartController(model, publisherAPI);
  }
}
