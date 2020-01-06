import { siteSettings } from "../../share/siteSettings.js";
import { CartListView } from "./CartListView.js";

export class CartListController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.view = new CartListView(this.handleGoodsListClick.bind(this));

    this.publisherAPI = publisherAPI;
    this.publisherAPI.subscribe(siteSettings.event.orderFormOpen, this.displayCart.bind(this))
    
    this.displayCart();
  }

  displayCart(isOrderFormOpen = false) {
    const itemsInCartData = this.model.getItemsInCartData()

    if(itemsInCartData.itemsInCart.length) {
      this.view.renderCartListItems(itemsInCartData, isOrderFormOpen)
    } else {
      this.view.renderEmptyCartList();
    }
  }

  handleGoodsListClick(event) {
    event.preventDefault();

    if (event.target.classList.contains("go-to-catalog-link")) {
      this.publisherAPI.notify(siteSettings.event.changePage, siteSettings.page.index);
    } else if(event.target.classList.contains("cart-remove-item")) {
      this.model.removeAnimalFromCart(event.target.dataset.animal_id)
      this.displayCart();
      this.publisherAPI.notify(siteSettings.event.removeAnimalFromCart)
    }
  }
}
