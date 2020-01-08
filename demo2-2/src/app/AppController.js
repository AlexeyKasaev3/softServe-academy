import { AppModel } from "./AppModel.js";
import { AppView } from "./AppView.js";
import { siteSettings } from "../share/siteSettings.js";
import { TelegramBot } from "../share/TelegramBot.js";

import { IndexPageController } from "../pages/index/IndexPageController.js";
import { AnimalsDetailsPageController } from "../pages/animalDetails/AnimalDetailsPageController.js";
import { CartPageController } from "../pages/cart/CartPageController.js";

export class AppController {
  constructor(publisherAPI) {
    this.model = new AppModel();
    this.view = new AppView(this.handleSiteNavigationClick.bind(this));
    this.telegramBot = new TelegramBot(siteSettings.telegramBot.APIkey, siteSettings.telegramBot.chatID);

    this.publisherAPI = publisherAPI;
    this.publisherAPI.subscribe(siteSettings.event.changePage, this.router.bind(this));
    this.publisherAPI.subscribe(siteSettings.event.orderFormSubmited, this.formAndSendMessageToStoreAdmin.bind(this));

    this.rootAppContentElement = null;
    this.activePage = null;

    this.startApp();
  }

  startApp() {
    this.model.fetchAndBuildAppData().then(() => {
      this.view.renderSiteTemplate();
      this.rootAppContentElement = document.querySelector(`#${siteSettings.rootAppContentElementIDname}`);
      this.router(this.model.currentPage);
    });
  }

  router(page) {
    this.clearRootContentElement();
    this.publisherAPI.unsubscribeAll();
    this.view.refreshNavigation(page);
    this.model.setCurrentPage(page);
    window.scrollTo(0,0);

    switch (page) {
      case siteSettings.page.index:
        this.activePage = new IndexPageController(this.model, this.publisherAPI);
        break;
      case siteSettings.page.animalDetails:
        this.activePage = new AnimalsDetailsPageController(this.model, this.publisherAPI);
        break;
      case siteSettings.page.cart:
        this.activePage = new CartPageController(this.model, this.publisherAPI);
        break;
    }
  }

  handleSiteNavigationClick(e) {
    if (e.target.hasAttribute("href")) {
      e.preventDefault();
      this.router(e.target.getAttribute("href"));
    }
  }

  clearRootContentElement() {
    this.rootAppContentElement.innerHTML = "";
  }

  formAndSendMessageToStoreAdmin(customerData) {
    let message = "";
    const { itemsInCart, totalCartPrice } = this.model.getItemsInCartData();

    message += "New Order\n \n";
    message += "CUSTOMER INFO\n";
    Object.keys(customerData).forEach(key => (message += `${key}: ${customerData[key]}\n`));

    message += " \n";
    message += "INFORMATION ABOUT THE ORDER\n";
    itemsInCart.forEach(item => {
      message += `Animal ID: ${item.id}\n`;
      message += `Animal Info: ${item.species}/${item.breed}\n`;
      message += `Animal Price: ${item.price}$\n`;
      message += "------\n";
    });
    message += `ORDER PRICE: ${totalCartPrice}$`;
    this.telegramBot.sendMessage(message);
    this.model.restoreInitialAppState();
  }
}