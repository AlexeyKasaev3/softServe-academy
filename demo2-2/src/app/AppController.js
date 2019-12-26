import { AppModel } from "./AppModel.js";
import { AppView } from './AppView.js';
import { siteSettings } from "../share/siteSettings.js";

import { IndexPageController } from "../pages/index/IndexPageController.js";
import { AnimalsDetailsPageController } from "../pages/animalDetails/AnimalDetailsPageController.js";
import { CartPageController } from '../pages/cart/CartPageController.js'

export class AppController {
  constructor(publisherAPI) {
    this.model = new AppModel();
    this.view = new AppView(this.handleSiteNavigationClick.bind(this));
    this.publisherAPI = publisherAPI;
    this.publisherAPI.subscribe(siteSettings.event.changePage, this.router.bind(this));

    this.rootAppContentElement = null;
    this.activePage = null;
    
    this.startApp();
  }

  handleSiteNavigationClick(e) {
    if(e.target.hasAttribute('href')) {
      e.preventDefault();
      this.router(e.target.getAttribute('href'))
    }
  }

  startApp() {
    this.model.fetchAndBuildAppData().then(() => {
      this.view.renderSiteTemplate();
      this.rootAppContentElement = document.querySelector(`#${siteSettings.rootAppContentElementIDname}`);
      this.router(siteSettings.page.index);
    });
  }

  router(page = siteSettings.page.index) {
    this.clearRootContentElement();
    this.publisherAPI.unsubscribeAll();
    this.view.refreshNavigation(page);
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

  clearRootContentElement() {
    this.rootAppContentElement.innerHTML = "";
  }
}
