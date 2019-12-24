import { siteSettings } from "../../share/siteSettings.js";
import { AnimalsGridView } from "./AnimalsGridView.js";

export class AnimalsGridController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.view = new AnimalsGridView(this.handleAnimalsGreedClick.bind(this));

    this.publisherAPI = publisherAPI;
    this.publisherAPI.subscribe(siteSettings.event.paginationPageChange, this.displayAnimalsGreed.bind(this));
    this.publisherAPI.subscribe(siteSettings.event.filterStatusUpdate, this.displayAnimalsGreed.bind(this));

    this.displayAnimalsGreed(this.model.lastAnimalsGridPageNum);
  }

  displayAnimalsGreed(page = this.model.lastAnimalsGridPageNum) {
    const data = this.model.getAppData(page);
    this.view.renderAnimalsGrid(data.cards);
    this.publisherAPI.notify(siteSettings.event.animalsGridPageChange, {
      currentPage: data.currentPage,
      totalPagesQuantity: data.totalPagesQuantity
    });
  }

  handleAnimalsGreedClick(event) {
    event.preventDefault();
    if(event.target.dataset.details_link) {
      this.model.buildLastAnimalsDetailsCard(event.target.dataset.details_link)
      this.publisherAPI.notify(siteSettings.event.changePage, siteSettings.page.animalDetails)
    } else if (event.target.dataset.buy_link) {
      this.model.setAnimalIncart(event.target.dataset.buy_link);
      this.displayAnimalsGreed(this.model.lastAnimalsGridPageNum)
    }
  }
}

