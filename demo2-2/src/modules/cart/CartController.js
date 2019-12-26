import { siteSettings } from "../../share/siteSettings.js";
import { CartView } from "./CartView.js";

export class CartController {
  constructor(model, publisherAPI) {
    this.publisherAPI = publisherAPI;
    this.model = model;
    this.view = new CartView(this.handleGoodsListClick.bind(this));

    this.view.renderCard(this.model.getItemsInCart());
  }

  handleGoodsListClick(e) {
    e.preventDefault();
    if (e.target.classList.contains("go-to-catalog-link")) {
      this.publisherAPI.notify(siteSettings.event.changePage, siteSettings.page.index);
    }
  }
}
