import { siteSettings } from "../../share/siteSettings.js";
import { AnimalsGridView } from "./AnimalsGridView.js";

export class AnimalsGridController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.view = new AnimalsGridView();

    this.publisherAPI = publisherAPI;
    this.publisherAPI.subscribe(siteSettings.event.paginationPageChange, this.displayAnimalsGreed.bind(this));

    this.displayAnimalsGreed(siteSettings.defaultAnimalsGridPageNumber);
  }

  displayAnimalsGreed(page = 1) {
    const data = this.model.getAppData(page);
    this.view.renderAnimalsGrid(data.cards);
    this.publisherAPI.notify(siteSettings.event.animalsGridPageChange, {
      currentPage: data.currentPage,
      totalPagesQuantity: data.totalPagesQuantity
    });
  }
}
