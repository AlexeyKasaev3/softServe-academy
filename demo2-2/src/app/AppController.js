import { AppModel } from "./AppModel.js";
import { AppView } from './AppView.js';
import { siteSettings } from "../share/siteSettings.js";

import { IndexPageController } from "../pages/index/IndexPageController.js";
import { AnimalsDetailsPageController } from "../pages/animalDetails/AnimalDetailsPageController.js";

export class AppController {
  constructor(publisherAPI) {
    this.model = new AppModel();
    this.view = new AppView();
    this.publisherAPI = publisherAPI;
    this.publisherAPI.subscribe(siteSettings.event.changePage, this.router.bind(this));

    this.rootAppContentElement = null;
    this.activePage = null;
    
    this.startApp();
  }

  startApp() {
    this.model.fetchAndBuildAppData().then(() => {
      this.view.parseSiteTemplate();
      this.rootAppContentElement = document.querySelector(`#${siteSettings.rootAppContentElementIDname}`);
      this.router(siteSettings.page.index);
    });
  }

  router(page = siteSettings.page.index) {
    this.clearRootContentElement();
    switch (page) {
      case siteSettings.page.index:
        this.activePage = new IndexPageController(this.model, this.publisherAPI);
        break;
      case siteSettings.page.animalDetails:
        this.activePage = new AnimalsDetailsPageController(this.model, this.publisherAPI);
        break;
    }
  }

  clearRootContentElement() {
    this.rootAppContentElement.innerHTML = "";
  }
}
