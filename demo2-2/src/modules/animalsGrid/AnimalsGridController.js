import { siteSettings } from "../../share/siteSettings.js";
import { AnimalsGridView } from "./AnimalsGridView.js";

export class AnimalsGridController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.view = new AnimalsGridView(this.handleAnimalsGreedClick.bind(this));

    this.publisherAPI = publisherAPI;
    this.publisherAPI.subscribe(siteSettings.event.paginationPageChange, this.displayAnimalsGreed.bind(this));
    this.publisherAPI.subscribe(siteSettings.event.filterStatusUpdate, this.displayAnimalsGreed.bind(this));

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

  handleAnimalsGreedClick(event) {
    event.preventDefault();
    const detailsLinkId = event.target.getAttribute('data-details-link');
    if(detailsLinkId) {
      this.model.setLastAnimalsDetailsId(detailsLinkId)
      this.publisherAPI.notify(siteSettings.event.changePage, siteSettings.page.animalDetails)
    }
  }
}
