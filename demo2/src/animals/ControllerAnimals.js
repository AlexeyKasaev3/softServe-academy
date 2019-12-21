import { ModelAnimals } from "./ModelAnimals.js";
import { ViewAnimals } from "./ViewAnimals.js";
import { SITE_SETTINGS } from "../share/SiteSettings.js";

export class ControllerAnimals {
  constructor(publisherAPI) {
    this.model = new ModelAnimals();
    this.view = new ViewAnimals();
    this.publisherAPI = publisherAPI;
    this.getAnimals(SITE_SETTINGS.DEFAULT_PAGE_NUMBER);
    this.publisherAPI.subscribe(
      "pagination-page-change",
      this.getAnimals.bind(this)
    );
  }

  getAnimals(page = SITE_SETTINGS.DEFAULT_PAGE_NUMBER) {
    this.model.getAnimals(page).then(animalsData => {
      this.view.renderAnimals(animalsData.cards);
      this.publisherAPI.notify("animals-page-change", {
        currentPage: animalsData.currentPage,
        totalPagesQuantity: animalsData.totalPagesQuantity
      });
    });
  }
}
