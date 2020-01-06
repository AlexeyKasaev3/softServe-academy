import { PageView } from "../PageView.js";
import { CartPageTemplate } from "./CartPageTemplate.js";

import { CartListController } from "../../modules/cartList/CartListController.js";
import { CartOrderFormController } from "../../modules/cartOrderForm/CartOrderFormController.js";

export class CartPageController {
  constructor(model, publisherAPI) {
    this.view = new PageView(CartPageTemplate.getPageTemplate());

    this.view.renderPage();

    this.cartListControler = new CartListController(model, publisherAPI);
    this.cartOrderFormController = new CartOrderFormController(model, publisherAPI);
  }
}
